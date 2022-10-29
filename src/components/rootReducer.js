import counterRedux from "./counterRedux";
import employeesRedux from "./employeesRedux";

const rootReducer={
    counter:counterRedux,
    employee:employeesRedux
}

export default rootReducer;