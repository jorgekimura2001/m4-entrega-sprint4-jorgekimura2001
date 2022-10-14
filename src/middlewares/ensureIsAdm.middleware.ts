import { NextFunction, Request, Response } from "express"

const ensureIsAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const idParams = req.params.id

    const {isAdm, id} = req.user 

    if(idParams){
        if(idParams === id){
            return next()
        }
    }

    if(!isAdm) {
        return res
                .status(403)
                .json({
                    message: "Unauthorized"
                })
    }
    next() 
}

export default ensureIsAdmMiddleware