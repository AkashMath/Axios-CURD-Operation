import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
const [data, setData] = useState([]);

    function getData(){
        axios.get("https://6443f0ec466f7c2b4b5dd964.mockapi.io/CrudApp").then((res)=> {
            console.log(res.data);
            setData(res.data);
        })
    }

function handleDelete(id){
  axios.delete(`https://6443f0ec466f7c2b4b5dd964.mockapi.io/CrudApp/${id}`).then(()=>{
    getData()
  });
}

const setToLocalStorage = (id, name, email)=>{
  localStorage.setItem("id", id);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

}

    useEffect(()=>{
        getData();
    },[])

  return (
    <>
<div className='d-flex justify-content-between m-4'>
    <h2> Read Operation</h2>
    <Link to="/">
    <button className='btn btn-primary'>Add new user</button>
    </Link>
</div>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
{
data.map((eachData)=>{
    return(
<>
<tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      
      <Link to="/update">
      <td><button className='btn-success' 
      onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button></td></Link>
      <td><button className='btn-danger' onClick={()=> handleDelete(eachData.id)}>Delete</button></td>
    </tr>
    
  </tbody>
</>
    )

})
  
}
</table>
    
    </>
  )
}

export default Read;