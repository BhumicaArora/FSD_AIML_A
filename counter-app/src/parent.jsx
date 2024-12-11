import React, { createContext } from 'react'
import Child1 from './child1'
const StudentContext=createContext();
const Parent=()=>{
    const stu={name:"ABC",
        age:23,
    }
    return(
        <StudentContext.Provider value={stu}>
            <div>
            <h1>Parnet Component</h1>
            <Child1 student={stu}/>
        </div>
        </StudentContext.Provider>
    )
}
export {StudentContext}
export default Parent