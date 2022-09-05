import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { store } from './Data'
const Student_form = () => {
  const [state] = useContext(store)
  return (
    <div>
      <div className="student_nav_ctn">
        <h1>Student Details</h1>
        <Link className='add_student_button' to="/AddStudent">Add Students</Link>
      </div>
     <div className='container'>
        <Table striped bordered hover variant='danger'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Branch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {/* {state.map((item) => (<tr key={item.id}>

              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Branch}</td>
              <td><Link to="/Edit">Edit</Link></td>

            </tr> */}


            {/* ))} */}


          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Student_form;




