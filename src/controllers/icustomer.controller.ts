import {Request, Response} from "express";

export interface ICustomerController {
    // getAllData(req: Request, res: Response);
    getAllCustomers(req, res, next): Promise<any>
}
