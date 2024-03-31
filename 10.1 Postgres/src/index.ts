// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
//   connectionString: "postgresql://postgres:my-swapnilhajare@localhost/my-postgrespractice1"
  connectionString:"postgresql://db1_owner:WSe8FrJ4xVUm@ep-rapid-sky-a1ux7d2z.ap-southeast-1.aws.neon.tech/db1?sslmode=require"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE userSwap (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// createUsersTable();

async function inputData(username:string,email:string,password:string){
    try{
        await client.connect();
        // const insertQuery = "INSERT INTO userSwap (username,email,password) VALUES ('Swapnil25','swap@gmail.com','Swapnil$@')"
        // const res = await client.query(insertQuery);

        const insertQuery = "INSERT INTO userSwap (username,email,password) VALUES ($1,$2,$3)"
        const values = [username,email,password];
        const res = await client.query(insertQuery,values);
        console.log("Sucess inputData",res);
    } catch(err){
        console.log("Error during insertion: ",err);
        
    }finally{
        await client.end();// Close the client connection
    }
}
// inputData("Kanika","kani@gamil.com", "Kani$25").catch(console.error);

async function getUser(username: string){
    
    try{
        await client.connect();
        const insertquery = "SELECT * FROM userSwap WHERE username = $1";
        const value = [username];
        const res = await client.query(insertquery,value);
        

        if(res.rows.length > 0){
            console.log("The result is :", res.rows[0]);
            return res.rows[0];
        }else{
            console.log('No user found with the given username.');
            return null; // Return null if no user was found
        }
        

    }catch(err) {
        console.log("Error during getting user data: ",err);
        throw err; // Rethrow or handle error appropriately
    }finally{
        await client.end();// Close the client connection
    }   
}

getUser("Kanik").catch(console.error);