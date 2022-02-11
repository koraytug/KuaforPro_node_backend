import * as express from "express";
import CustomerController from "../controllers/customer.controller";
import {ICustomerController} from "../controllers/icustomer.controller";

export default class AppRouter {
    public appRouter = express.Router();
    public app: ICustomerController = new CustomerController();

    constructor() {
        this.appRouter.get("/get_customers", this.app.getAllCustomers);
        this.appRouter.get("/get_customer", this.app.getCustomer);
        this.appRouter.post("/create_customer", this.app.createCustomer);
        this.appRouter.put("/update_customer", this.app.updateCustomer);
        this.appRouter.delete("/delete_customer", this.app.deleteCustomer);
    }

}

