import {useState} from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {

    const{dispatch} = useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [reps , setReps] = useState('')
    const [load , setLoad] = useState('')
    const [error , setError] = useState(null)
    const [emptyField , setEmptyFiled] = useState([])
    const handleSubmit=async(e)=>{
        e.preventDefault()

        const workout ={title , reps , load}
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/workouts`,{
            method:"POST",
            body: JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok)
        {
            setError(json.error)
            setEmptyFiled(json.emptyField)
        }
        if(response.ok)
        {
            setError(null)
            setEmptyFiled([])
            setTitle('')
            setReps('')
            setLoad('')
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
    return ( 

        <form className="create" onSubmit={handleSubmit}>
        <h2>Add New Exersize</h2>
        <label>Exersize Title</label>
        <input type="text"
         onChange={(e)=>setTitle(e.target.value)}
         value={title}
         className={emptyField.includes('title')?'error':''}/>

         <label>Exersize Reps</label>
         <input type="number"
         onChange={(e)=>setReps(e.target.value)}
         value={reps}
         className={emptyField.includes('reps')?'error':''}/>


         <label>Exersize Load</label>
         <input type="number"
         onChange={(e)=>setLoad(e.target.value)} 
         value={load}
         className={emptyField.includes('load')?'error':''}/>

         <button>Add New Workout</button>
         {error && <div className="error">{error}</div>}

        </form>
     );
}
 
export default WorkoutForm;