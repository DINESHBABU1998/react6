import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { data } from './Data'

const Addnew = () => {
    const[name,setName] = useState("")
    const[age,setAge] = useState("")
    const[course,setCourse] = useState("")
    const[batch,setBatch] = useState("")
    const[student,setStudent]=useContext(data)

    const handlechange1 = (e) =>{
    setName(e.target.value)
    }
    const handlechange2 = (e) =>{
    setAge(e.target.value)
    }
    const handlechange3 = (e) =>{
    setCourse(e.target.value)
    }
    const handlechange4 = (e) =>{
    setBatch(e.target.value)
    }

    const Submitdata = (event) =>{
    setStudent([...student,{Name:name,Age:age,Course:course,Batch:batch,id:new Date().getTime().toString()}])
    }
    
  return (


<div>
<div className='form'>

<label>Name</label>
<input id="name" type="text" name='name' value={name} onChange={handlechange1} /><br/><br/><br/>
<label>Age</label>
<input id="age" type="text" name='age' value={age} onChange={handlechange2} /><br/><br/><br/>
<label>Course</label>
<input id="course" type="text" name='course' value={course} onChange={handlechange3} /><br/><br/><br/>
<label>Batch</label>
<input id="batch" type="text" name='batch' value={batch} onChange={handlechange4} />

</div>

<div className='but'>

<Link to="/student"><button className='can'>Cancel</button></Link>
<Link to="/student" onClick={Submitdata}><button className='sub'>Submit</button></Link>

</div>
</div>
  )
}

export default Addnew