import React from "react";
import Counter from "./Counter";
import Employee from "./Employee";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Counter/>}>Counter</Route>
      <Route exact path="/Employee" element={<Employee/>}>Employee</Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
