import {ICustomer} from "../models/icustomer";


export interface ICustomerService {
    getAllCustomers(customer: string);
    getCustomer(customer: string, id: string);
    createCustomer(customer: ICustomer);
    updateCustomer(customer: ICustomer);
    deleteCustomer(customer: string, id: string);
}
