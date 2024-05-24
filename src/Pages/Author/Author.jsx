import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Author = ({setAuthorId}) => {
    const navigate = useNavigate();
    const[author,setAuthor] = useState([]);
    const[deleteAuthor,setDeleteAuthor] = useState(false)
    useEffect(()=>{
        fetchData();
    },[deleteAuthor]);
    const fetchData = async()=>{
        try{
            const res = await axios.get("https://665078d1ec9b4a4a6032344e.mockapi.io/api/author");
            setAuthor(res.data);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleClickEdit = (id)=>{
        setAuthorId(id);
        navigate(`/editauthor/:${id}`);
    }

    const handleClickDelete = async(id)=>{
        try{
            await axios.delete(`https://665078d1ec9b4a4a6032344e.mockapi.io/api/author/${id}`)
            .then(res=>setDeleteAuthor(!deleteAuthor))
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className='books-table'>
                <h1 className='title-books text-center'>Author</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Date Of Birth</th>
      <th scope="col">Biograpgy</th>
      <th scope="col" colSpan={2}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {author.map((element,index)=>{
        return(
    <tr key={element.id}>
      <th scope="row">{element.id}</th>
      <td>{element.name}</td>
      <td>{element.dob}</td>
      <td>{element.biography}</td>
      <td><button className='btn btn-warning' onClick={()=>handleClickEdit(element.id)}>Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=>{handleClickDelete(element.id)}}>Delete</button></td>
    </tr>
        );
    })}
  </tbody>
</table>
<button className='btn btn-success' onClick={()=>navigate('/createauthor')}> Create </button>
        </div>
    );
};

export default Author;