import {MongoClient, ObjectId} from "mongodb";
import {ICustomer} from "../models/icustomer";
import {ICustomerService} from "./icustomer.service";

export default class CustomerService implements ICustomerService {
    private uri: string = process.env.uri || "";
    private dbName = "TESTAPP";
    private collectionName = "customers";

    public async getAllCustomers(customer: string) {
        try {
            const client = await new MongoClient(this.uri);

            await client.connect();

            const db = client.db(this.dbName);
            const items = db.collection(this.collectionName).find({customer: customer});
            const result = await items.toArray();

            await client.close();
            return result;
        } catch (error) {
            console.log(`Could not fetch customers ${error}`);
            throw error;
        }
    }

    public async getCustomer(customer: string, id: string) {
        try {
            const client = await new MongoClient(this.uri);

            await client.connect();

            const db = client.db(this.dbName);
            const items = db.collection(this.collectionName).find({_id: new ObjectId(id), customer: customer});
            const result = await items.toArray();

            await client.close();
            return result;
        } catch (error) {
            console.log(`Could not fetch customer ${error}`);
            throw error;
        }
    }


    public async createCustomer(customer: ICustomer) {
        try {
            const client = await new MongoClient(this.uri);
            await client.connect();
            const db = client.db(this.dbName);
            const addedItem = await db.collection("customers").insertOne(customer);
            const insertedId = (await addedItem).insertedId.toString();
            await client.close();
            return insertedId;
        } catch (error) {
            console.log(`Could not add customer ${error}`);
            throw error;
        }

    }

    public async updateCustomer(customer: ICustomer) {
        try {
            const client = await new MongoClient(this.uri);
            await client.connect();
            const db = client.db(this.dbName);

            // upsert creates new record when it can not find the record
            const updatedItem = await db.collection("customers")
                .findOneAndUpdate({_id: new ObjectId(customer.id), customer: customer.customer}, {$set: customer}, {upsert: true});

            const updateStatus = (updatedItem.ok === 1) ? true : false;
            await client.close();
            return updateStatus;
        } catch (error) {
            console.log(`Could not update the customer ${error}`);
            throw error;
        }
    }

    public async deleteCustomer(customer: string, id: string) {
        try {
            const client = await new MongoClient(this.uri);
            await client.connect();
            const db = client.db(this.dbName);

            // upsert creates new record when it can not find the record
            const deleteItem = await db.collection("customers")
                .findOneAndDelete({_id: new ObjectId(id), customer: customer});

            const deleteStatus = (deleteItem.ok === 1) ? true : false;
            await client.close();
            return deleteStatus;
        } catch (error) {
            console.log(`Could not delete the customer ${error}`);
            throw error;
        }

    }


}

