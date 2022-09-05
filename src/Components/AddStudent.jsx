import React, { useContext } from 'react'
import { store } from './Data'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const AddStudent = () => {

  const [Name, setName] = useState("")

  const [Age, setAge] = useState("")


  const [Course, setCourse] = useState("")


  const [Branch, setBranch] = useState("")

  
  const [state, setState] = useContext(store)
 
  const ChangeHandler1 = (e) => {
    setName(e.target.value)

  }
  const ChangeHandler2 = (e) => {
    setAge(e.target.value)

  }
  const ChangeHandler3 = (e) => {
    setCourse(e.target.value)

  }
  const ChangeHandler4 = (e) => {
    setBranch(e.target.value)

  }

  const SubmitHandler = () => {



    setState([...state, { Name: Name, Age: Age, Course: Course, Branch: Branch, id: new Date().getTime().toString() }])
  }
  return (
    
      <div>
      
      <div className='Add_details_container'>
        <div><label>Name:</label>
          <input id="name" type="text" name='name' value={Name} onChange={ChangeHandler1} /></div>
        <div><label>Age:</label>
          <input id="age" type="text" name='age' value={Age} onChange={ChangeHandler2} /></div>
        <div> <label>Course:</label>
          <input id="course" type="text" name='course' value={Course} onChange={ChangeHandler3} />

        </div>

        <div>
          <label>Branch:</label>
          <input id="branch" type="text" name='branch' value={Branch} onChange={ChangeHandler4} /></div>
      </div>

      <div className='button_ctn'>

        <Link className='button' to="/Student_form">Cancel</Link>
        <Link className='buttons' to="/Student_form" onClick={SubmitHandler}>Submit</Link>

      </div>
    </div>
    
  )
}

export default AddStudent
