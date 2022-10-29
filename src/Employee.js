import { useDispatch, useSelector } from "react-redux";
import { update } from "./components/employeesRedux";

const Employee=()=>{
    let dispatch=useDispatch();
    let employeeSel=useSelector((store)=>{
        return store["employee"]
    });
    let {employees}=employeeSel;
    let Updated=()=>{
        dispatch(update(2))
    }
    return (
        <>
        <div>
            {
                employees.length >0 && employees.map(employee=>{
                    return(
                        <li><input type="checkbox"/>{employee.name}</li>
                    )
                })
            }
        </div>
        <button onChange={Updated}> click </button>
        <div>

        </div>
        </>
    )
}

export default Employee;