import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {

    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        getBlogs()
    }, []);

    //Procedimiento para mostrar todos los Blogs
    const getBlogs = async () => {
        const res = await axios.get(URI);
        setBlog(res.data);
    }

    //Procedimiento para eliminar un Blog
    const deleteBlogs = async (id) => {
        axios.delete(`${URI}${id} `);
        getBlogs();
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-regular fa-plus"></i></Link>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.title}</td>
                                    <td> {blog.content}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i class="fa-regular fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteBlogs(blog.id)} className = 'btn btn-danger'><i class="fa-thin fa-eraser"></i></button> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

};


export default CompShowBlogs;