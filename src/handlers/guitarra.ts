import { Request, Response } from "express";
import Guitarra from "../models/Guitarra.model";

export const getGuitarras = async (req: Request, res: Response) => {
    try {
        const listaGuitarras = await Guitarra.findAll({
            order: [['precio', 'DESC']],
        })
        res.status(200).json({ data: listaGuitarras })
    } catch (error) {
        console.error("Error al obtener registros:", error);
    }
}

export const getGuitarraById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params
        const itemGuitarra = await Guitarra.findByPk(id)
        
        if (!itemGuitarra) {
            return res.status(404).json({ error: 'No existe una guitarra con ese ID' })
        }
        res.status(200).json({ data: itemGuitarra })
    } catch (error) {
        console.error(error);
    }
}

export const createGuitarra = async (req: Request, res: Response) => {
    try {
        const nuevaGuitarra = await Guitarra.create(req.body)
        res.status(201).json({ data: nuevaGuitarra })
    } catch (error) {
        console.error(error);
    }
}

export const updateGuitarra = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params
        const itemGuitarra = await Guitarra.findByPk(id)
        
        if (!itemGuitarra) {
            return res.status(404).json({ error: 'No existe una guitarra con ese ID' })
        }
        
        await itemGuitarra.update(req.body)
        res.status(200).json({ data: itemGuitarra })
    } catch (error) {
        console.error(error);
    }
}

export const deleteGuitarra = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params
        const itemGuitarra = await Guitarra.findByPk(id)
        
        if (!itemGuitarra) {
            return res.status(404).json({ error: 'No existe una guitarra con ese ID' })
        }
        
        await itemGuitarra.destroy()
        res.status(200).json({ data: 'Registro eliminado exitosamente' })
    } catch (error) {
        console.error(error);
    }
}