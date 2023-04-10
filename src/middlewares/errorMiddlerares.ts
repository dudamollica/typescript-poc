import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status"

export function handleApplicationsErrors(err: Error, req: Request, res: Response, next: NextFunction){
if(err.name === "ConflitError") {
    return res.status(httpStatus.CONFLICT).send({message: err.message})
}
if(err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({message: err.message})
}
return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"InternalServerError"})
}