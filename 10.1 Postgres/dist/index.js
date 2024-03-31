"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
    //   connectionString: "postgresql://postgres:my-swapnilhajare@localhost/my-postgrespractice1"
    connectionString: "postgresql://db1_owner:WSe8FrJ4xVUm@ep-rapid-sky-a1ux7d2z.ap-southeast-1.aws.neon.tech/db1?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE userSwap (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
// createUsersTable();
function inputData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            // const insertQuery = "INSERT INTO userSwap (username,email,password) VALUES ('Swapnil25','swap@gmail.com','Swapnil$@')"
            // const res = await client.query(insertQuery);
            const insertQuery = "INSERT INTO userSwap (username,email,password) VALUES ($1,$2,$3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log("Sucess inputData", res);
        }
        catch (err) {
            console.log("Error during insertion: ", err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// inputData("Kanika","kani@gamil.com", "Kani$25").catch(console.error);
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertquery = "SELECT * FROM userSwap WHERE username = $1";
            const value = [username];
            const res = yield client.query(insertquery, value);
            if (res.rows.length > 0) {
                console.log("The result is :", res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log('No user found with the given email.');
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.log("Error during getting user data: ", err);
            throw err; // Rethrow or handle error appropriately
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
getUser("Kanik").catch(console.error);
