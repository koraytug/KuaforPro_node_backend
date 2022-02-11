import {ICustomerController} from "./icustomer.controller";
import CustomerService from "../services/customer.service";
import {ICustomerService} from "../services/icustomer.service";
import {ICustomer} from "../models/icustomer";
import {Request, Response} from "express";
export default class CustomerController implements ICustomerController {
    public async getAllCustomers(req:Request, res:Response): Promise<ICustomer[]> {
        try {
            const customerService: ICustomerService = new CustomerService();

            if (!req.body || !req.body.customer) {
                res.status(400).send({message: "Content can not be empty!"});
                return Promise.reject("Content can not be empty!");
            }

            const customers: ICustomer[] = await customerService.getAllCustomers(req.body.customer);

            if (!customers) {
                res.status(404).json("There is no customer!");
            }
            res.status(200);
            res.send(customers);
            return Promise.resolve(customers);

        } catch (error) {
            res.status(500).json({error: error});
            return Promise.reject(error);
        }

    }

    public async getCustomer(req:Request, res:Response): Promise<ICustomer> {
        try {
            const customerService: ICustomerService = new CustomerService();

            if (!req.body || !req.body.customer || !req.body.id) {
                res.status(400).send({message: "Content can not be empty!"});
                return Promise.reject("Content can not be empty!");
            }

            const customers: ICustomer[] = await customerService.getCustomer(req.body.customer, req.body.id);

            if (!customers || customers.length === 0) {
                res.status(404).json("There is no customer!");
            }

            res.status(200);
            res.send(customers);
            return Promise.resolve(customers[0]);

        } catch (error) {
            res.status(500).json({error: error});
            return Promise.reject(error);
        }

    }

    public async createCustomer(req:Request, res:Response): Promise<string> {
        try {
            const customerService: ICustomerService = new CustomerService();

            if (!req.body) {
                res.status(400).send({message: "Content can not be empty!"});
                return Promise.reject("Content can not be empty!");
            }

            const customerItem:ICustomer = {
                customer: req.body.customer,
                id: req.body.id,
                name: req.body.name,
                surname: req.body.surname,
                phone: req.body.phone,
                birthDate: req.body.birthDate,
                birthMonth: req.body.birthMonth,
                birthYear: req.body.birthYear,
                birthDayReminder: req.body.birthDayReminder,
                adress: req.body.adress,
                notes: req.body.notes
            };

            const customerId = await customerService.createCustomer(customerItem);

            if (!customerId) {
                res.status(204).json("There is an error while getting the customerID!");
                return Promise.resolve("");
            }
            res.status(201).send(customerId);
            return Promise.resolve(customerId);

        } catch (error) {
            res.status(500).json({error: error});
            return error;
        }

    }

    public async updateCustomer(req:Request, res:Response): Promise<boolean> {
        try {
            const customerService: ICustomerService = new CustomerService();

            if (!req.body) {
                res.status(400).send({message: "Content can not be empty!"});
                return Promise.reject("Content can not be empty!");
            }

            const customerItem:ICustomer = {
                customer: req.body.customer,
                id: req.body.id,
                name: req.body.name,
                surname: req.body.surname,
                phone: req.body.phone,
                birthDate: req.body.birthDate,
                birthMonth: req.body.birthMonth,
                birthYear: req.body.birthYear,
                birthDayReminder: req.body.birthDayReminder,
                adress: req.body.adress,
                notes: req.body.notes
            };
            // const customerItem: ICustomer = JSON.parse(req.body);

            const customerUpdated = await customerService.updateCustomer(customerItem);

            if (!customerUpdated) {
                res.status(204).json("There is an error while creating the customer!");
            }
            res.status(200).send(customerUpdated);
            return Promise.resolve(customerUpdated);

        } catch (error) {
            res.status(500).json({error: error});
            return error;
        }

    }

    public async deleteCustomer(req:Request, res:Response): Promise<boolean> {
        try {
            const customerService: ICustomerService = new CustomerService();

            if (!req.body || !req.body.id || !req.body.customer) {
                res.status(400).send({message: "Content can not be empty!"});
                return Promise.reject("Content can not be empty!");
            }

            const customerDeleted = await customerService.deleteCustomer(req.body.customer, req.body.id);

            if (!customerDeleted) {
                res.status(204).json("There is an error while deleting the customer!");
            }
            res.status(200).send(customerDeleted);
            return Promise.resolve(customerDeleted);

        } catch (error) {
            res.status(500).json({error: error});
            return error;
        }

    }
}

