import * as express from "express";
import CustomerController from "../controllers/customer.controller";
import {ICustomerController} from "../controllers/icustomer.controller";

export default class AppRouter {
    public appRouter = express.Router();
    public app: ICustomerController = new CustomerController();

    constructor() {
        this.appRouter.get("/getall_data", this.app.getAllCustomers);
    }

}

