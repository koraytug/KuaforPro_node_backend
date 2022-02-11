import {Db, MongoClient} from "mongodb";
import {IDbConnection} from "./idbconnection";

export default class DbConnection implements IDbConnection {
    public db: Db;
    public collectionName = "customers";
    private uri: string = process.env.uri || "";
    private dbName = "TESTAPP";
    private client: MongoClient;


    public constructor() {
        this.client = new MongoClient(this.uri);
    }

    public async connect() {
        await this.client.connect();
    }

    public getDb(): Db {
        return this.client.db(this.dbName);
    }

    public async close() {
        await this.client.close();
    }

}
