import axios from "axios";
import {ICustomerService} from "./icustomer.service";
export default class CustomerService implements ICustomerService {
    public async getAllCustomers(): Promise<any> {
        try {
            const allCustomers = await await axios.get("http://swapi.py4e.com/api/people/");
            return allCustomers;
        } catch (error) {
            console.log(`Could not fetch articles ${error}`);
        }
    }
}

