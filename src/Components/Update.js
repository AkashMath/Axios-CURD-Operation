import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
const navigate=useNavigate();

useEffect(()=>{
setId(localStorage.getItem("id"));
setName(localStorage.getItem("name"));
setEmail(localStorage.getItem("email"));

},[])

const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://6443f0ec466f7c2b4b5dd964.mockapi.io/CrudApp/${id}`, 
    {name:name,
    email:email,
    }).then(()=>{
        navigate("/read");
    });
}

  return (
   <>
   <h2> Update</h2>
    <form>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

   <button type="submit" className="btn btn-primary" 
  onClick={handleUpdate}
  >Update</button>
  <Link to="/read">
  <button className='btn btn-dark pl-5'>Back</button>
  </Link>
</form>
    
   </>
  )
}

export default Update;