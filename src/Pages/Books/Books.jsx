import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Books/Books.css";
const Books = ({setId}) => {
    const [getBook,setGetBook] = useState([]);
    const [deleteBook,SetDeleteBook] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        fetchData();
    },[deleteBook])
    const fetchData = async()=>{
        try {
            const response = await axios.get("https://664aea64a300e8795d43675e.mockapi.io/api/book");
            setGetBook(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleClickEdit = (id)=>{
        setId(id);
        navigate(`/editbook/${id}`);
    }
    const handleClickDelete = async(id) =>{
        try{
            await axios.delete(`https://664aea64a300e8795d43675e.mockapi.io/api/book/${id}`)
            .then(res=>SetDeleteBook(!deleteBook))
        } catch(error){
            console.log(error);
        }
    }
    return (
             <div className='books-table'>
                <h1 className='title-books text-center'>Books</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">ISBN Number</th>
      <th scope="col">Publication Data</th>
      <th scope="col" colSpan={2}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {getBook.map((element,index)=>{
        return(
    <tr key={element.id}>
      <th scope="row">{element.id}</th>
      <td>{element.title}</td>
      <td>{element.author}</td>
      <td>{element.ISBN_number}</td>
      <td>{element.publication_data}</td>
      <td><button className='btn btn-warning' onClick={()=>handleClickEdit(element.id)}>Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=>{handleClickDelete(element.id)}}>Delete</button></td>
    </tr>
        );
    })}
  </tbody>
</table>
<button className='btn btn-success' onClick={()=>navigate('/createbook')}> Create </button>
        </div>
    );
};

export default Books;