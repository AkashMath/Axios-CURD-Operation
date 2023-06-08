import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom';

const Create = () => { 

const [name, setName] = useState("")
const [email, setEmail]= useState("");
const history = useNavigate();

const header = {"Access-Control-Allow-Origin": "*"};
console.log("clicked")
const handleSubmit= (e)=> {
  e.preventDefault();
  axios.post("https://6443f0ec466f7c2b4b5dd964.mockapi.io/CrudApp", {
    name: name,
    email:email,
    header,
  })
  // history("/read");
  .then(()=> {
    history("/read");
  });
}  
return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h2> Create</h2>
    <Link to="/read">
    <button className='btn btn-primary'>Show Data</button>
    </Link>
    </div>
    <form>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    
    </>
  )
}

export default Create;