import axios from 'axios';
import { useState, useEffect } from 'react';
import {link} from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = ()=> {
    const [blogs, setBlog] = useState([]);
    useEffect( ()=>{
        getBlogs()
    },[] );

    //Procedimiento para mostrar todos los Blogs
    const getBlogs = async () => {

    }



    //Procedimiento para eliminar un Blog

    const deleteBlogs = async () =>{

    }

    return(
        <div>

        </div>
    )

};


export default CompShowBlogs;