import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { data } from './Data'
import './styles.css'

const Student = () => {
    const [student] = useContext(data)

    return (
        <>
            <div className='stucon'>
                <h1>Student Details</h1>
                <Link to='/addnew'><button className='stu'>Add new Student</button></Link>
            </div>
            <table className="table table-bordered border-default">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Course</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Change</th>

                    </tr>
                </thead>

                <tbody>
                    {student.map((item) => {
                        return <tr key={student.id}>

                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Course}</td>
                        <td>{item.Batch}</td>
                        <td><Link to="/edit">Edit</Link></td>

                    </tr>
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Student