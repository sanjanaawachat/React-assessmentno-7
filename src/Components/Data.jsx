import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const store = createContext()
const Data = (props) => {
    const [state, setState] = useState([
        {
                "Name":"sanjana",
                "Age":"25",
                "Course":"Full stack developer",
                "Batch":"March",
                "Branch":"CE",
                "id":"1"
                
                
        }
    ]);
return (
        <div>
         <store.Provider value={[state,setState]}> 
            {props.children}
         </store.Provider>
        </div>
    )
}




export default Data;