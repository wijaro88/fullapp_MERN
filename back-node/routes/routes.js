import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
const router = express.Router();

//obtener todos los blogs
router.get('/', getAllBlogs);
//obtener un blog
router.get('/:id',getBlog);
//crear un blog
router.post ('/', createBlog);
//modificar un registro
router.put('/:id', updateBlog);
//eliminar un registro
router.delete('/:id',deleteBlog);

export default router;