import React, { useContext } from 'react'
import { store } from './Data'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { StudentCard } from '../Pages/StudentCard'

const Edit = () => {

  const [Name, setName] = useState("")

  const [Age, setAge] = useState("")


  const [Course, setCourse] = useState("")


  const [Branch, setBranch] = useState("")

  const [edit,setEdit] =useState(false);
  const [state, setState] = useContext(store)
  let [SPage, setPage] =useState(true);
   let [AddBtn, setBtn] =useState('ADD');
  let [Student, PassStudent] =useState(null);
  


  const SubmitHandler = () => {

    if(!edit){
      let StudentObj ={
          Name:Name,
          Age:Age,
          Course:Course,
          Branch:Branch
      }
      setState([...state,StudentObj]);
      console.log(state);
      setAge('');
      setName('');
      setBranch('');
      setCourse('');
      setPage(true);
  }else{
     //Updation happens here....

     state.map( (st) => {

         if(st.name === Student.name){
             st.Name=Name;
             st.Age=Age;
             st.Course =Course;
             st.Branch =Branch;
         }
     } );
     setPage(true);
     setEdit(false);
     setAge('');
     setName('');
     setBranch('');
     setCourse('');
     console.log(edit);
     setBtn("ADD");
    
  }
}

function FormCancel(){
  setPage(true);
  setAge('');
  setName('');
  setBranch('');
  setCourse('');
}

function EditStudent(item){
 setPage(false);
 setEdit(true);
 console.log(item);
 PassStudent(item);
 setName(item.Name);
 setAge(item.Age);
 setCourse(item.Course);
 setBranch(item.Branch);
 setBtn("UPDATE");

    setState([...state, { Name: Name, Age: Age, Course: Course, Branch: Branch, id: new Date().getTime().toString() }])
  }
  return (
    
      <div>
      <div className="list">
            { state?.map( (item, index) => (
                <StudentCard key={index}
                 Name={item.Name} 
                 Age={item.Age}
                 Course={item.Course}
                 Branch={item.Branch}
                 EditStudent={ () => EditStudent(item) }
                  />
            ) ) }
          </div>
      <div className='Add_details_container'>
        <div><label>Name:</label>
          <input id="name" type="text" name='name' /></div>
        <div><label>Age:</label>
          <input id="age" type="text" name='age'  /></div>
        <div> <label>Course:</label>
          <input id="course" type="text" name='course'/>

        </div>

        <div>
          <label>Branch:</label>
          <input id="branch" type="text" name='branch'/></div>
      </div>

      <div className='button_ctn'>

        <Link className='button' to="/Student_form" onClick={() => FormCancel()}>Cancel</Link>
        <Link className='buttons' to="/Student_form" onClick={SubmitHandler}>Update</Link>

      </div>
    </div>
    
  )
}

export default Edit
