//importamos el modelo
import BlogModel from "../models/BlogModel.js";

// metodos CRUD

// 1. Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })

    }
}
// 2. Mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findByPk(req.params.id)
      
        res.json(blog)

    } catch (error) {
        res.json({ message: error.message })
    }
}
// 3. Crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "¡registro creado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
// 4. Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡registro actualizado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
// 5. Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡registro borrado exitosamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}