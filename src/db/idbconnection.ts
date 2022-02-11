import {Db} from "mongodb";

export interface IDbConnection {
    collectionName: string;
    connect();
    getDb(): Db;
    close();
}
