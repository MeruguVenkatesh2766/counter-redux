import { useDispatch, useSelector } from "react-redux"
import { decrement, increment,inc } from "./components/counterRedux";

const Counter=()=>{
    let counterSel=useSelector((store)=>{
        return store["counter"];
    });
    let dispatch=useDispatch();

    let Increment=()=>{
        dispatch(increment())
    }
    let Decrement=()=>{
        dispatch(decrement())
    }
    let Inc=()=>{
        dispatch(inc(5))
    }
    
    return (
        <div>
            <center>
            <button onClick={Increment}> Increment </button> <br></br>
            {counterSel.count}<br></br>
            <button onClick={Decrement}> Decrement </button>
            <button onClick={Inc}>Increment by 5</button>
            </center>
            <a href="Employee">Employee</a>
        </div>
    )
}

export default Counter;