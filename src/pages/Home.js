import { useEffect} from "react";

import WorkoutDetails from "../component/WorkoutDetails";
import WorkoutForm from "../component/WorkoutForm";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(()=>{
        const fetchworkouts = async ()=>{
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/workouts`)
            const json = await response.json()

            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        }
        fetchworkouts()
    }, [dispatch])
    return ( 
        <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm/>
    </div>
        
     );
}
 
export default Home;