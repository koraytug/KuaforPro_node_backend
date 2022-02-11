import {Request, Response} from "express";
import {ICustomer} from "../models/icustomer";

export interface ICustomerController {
    getAllCustomers(req: Request, res: Response): Promise<ICustomer[]>;
    getCustomer(req: Request, res: Response): Promise<ICustomer>;
    createCustomer(req: Request, res: Response): Promise<string>;
    updateCustomer(req: Request, res: Response): Promise<boolean>;
    deleteCustomer(req:Request, res:Response): Promise<boolean>;
}
