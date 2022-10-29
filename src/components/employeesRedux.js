import { createSlice } from '@reduxjs/toolkit';
import { EmployeeList } from '../Api-Data';

const init={
    employees: EmployeeList
}
const employeesRedux=createSlice({
    name:'employee',
    initialState:init,
    reducers:{
        update: function (state,action){
            state.employees=state.employees.map(employees=>{
                if(employees.id===action.payload){
                    return {
                        ...employees
                    }
                }
            })
        }
    }
});
export const {update}=employeesRedux.actions;
export default employeesRedux.reducer;