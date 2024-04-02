import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertData(username : string, password: string, firstName: string, lastName: string){
    const res = await prisma.userPrisma.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);  
}

// insertData('BMWRock','Swapnil69','Swapnil','Hajare');

interface UpdateParams{
    firstName: string,
    lastName: string
}

async function updateData(username:string, {firstName,lastName}:UpdateParams) {
    const res = await prisma.userPrisma.update({
        where: {username},
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);   
}

// updateData('BMWRock',{
//     firstName: "Swapneeel",
//     lastName: "Hajareee"
// });

async function getUser(username:string) {
    const res = await prisma.userPrisma.findUnique({
        where: {username}
    })
    console.log(res);
}

// getUser('BMWRock');

async function deleteUser(username:string) {
    const res = await prisma.userPrisma.delete({
        where: {username}
    })
    console.log(res);
}
// deleteUser('BMWRock');

async function insertTodos(title : string, description: string, done: boolean, user_id: number){
    const res = await prisma.todos.create({
        data: {
            title,
            description,
            done,
            user_id
        }
    })
    console.log(res);  
}

// insertTodos("Read Book", "Read about lecture 10.2 Prisma ORM",true,1);

interface updateTodos{
    title: string,
    done: boolean
}

async function updateTodos(id:number,{title,done}:updateTodos) {
    const res = await prisma.todos.update({
        where: {id},
        data:{
            title,
            done
        }
    })
    console.log(res);
}

// updateTodos(1,{
//     title: "Read Booksss",
//     done: false
// });

async function getTodos(id:number) {
    const res = await prisma.todos.findFirst({
        where: {id}
    })
    console.log(res);
}

// getTodos(1);

async function deleteTodo(id:number) {
    const res = await prisma.todos.delete({
        where: {id}
    })
    console.log(res);
    console.log(id + " <- id Deleted successfully");
    
}

deleteTodo(1);