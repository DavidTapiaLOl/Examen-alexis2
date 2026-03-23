import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const handlerInputErrors = (req: Request, res: Response, next: NextFunction) => {
    const erroresDeValidacion = validationResult(req)
    
    if(!erroresDeValidacion.isEmpty()) {
        return res.status(400).json({ errors: erroresDeValidacion.array() })
    }
    
    next()
}