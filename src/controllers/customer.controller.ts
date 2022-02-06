import { ICustomerController } from "./icustomer.controller"; 
import CustomerService from "../services/customer.service";
import { ICustomerService } from "../services/icustomer.service";
export default class CustomerController implements ICustomerController {
    private customerService: ICustomerService = new CustomerService();

    public async getAllCustomers(req, res, next): Promise<any>  {
        try {
         const customerService: ICustomerService = new CustomerService();
         const customers = await customerService.getAllCustomers();
         if(!customers){
            res.status(404).json("There are no article published yet!")
         }
         res.json(customers.data);
       } catch (error) {
          res.status(500).json({error: error})
       }

    }
}

