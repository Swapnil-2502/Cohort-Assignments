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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertData(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.userPrisma.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function updateData(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.userPrisma.update({
            where: { username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
// updateData('BMWRock',{
//     firstName: "Swapneeel",
//     lastName: "Hajareee"
// });
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.userPrisma.findUnique({
            where: { username }
        });
        console.log(res);
    });
}
// getUser('BMWRock');
function deleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.userPrisma.delete({
            where: { username }
        });
        console.log(res);
    });
}
// deleteUser('BMWRock');
function insertTodos(title, description, done, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.create({
            data: {
                title,
                description,
                done,
                user_id
            }
        });
        console.log(res);
    });
}
function updateTodos(id, { title, done }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.update({
            where: { id },
            data: {
                title,
                done
            }
        });
        console.log(res);
    });
}
// updateTodos(1,{
//     title: "Read Booksss",
//     done: false
// });
function getTodos(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.findFirst({
            where: { id }
        });
        console.log(res);
    });
}
// getTodos(1);
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.delete({
            where: { id }
        });
        console.log(res);
        console.log(id + " <- id Deleted successfully");
    });
}
deleteTodo(1);
