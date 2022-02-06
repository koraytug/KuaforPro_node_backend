import {Request, Response} from "express";

export interface ICustomerService {
    // getAllData(req: Request, res: Response);
    getAllCustomers(): Promise<any>
}
