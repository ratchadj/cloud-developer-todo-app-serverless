import { TodoItem } from '../models/TodoItem'
import { TodoItemAccess } from '../dataLayer/todoAccess'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest';
import { UpdateItemOutput, DeleteItemOutput } from 'aws-sdk/clients/dynamodb';

const todoItemAccess = new TodoItemAccess()

export async function getAllTodos(): Promise<TodoItem[]>{
    return todoItemAccess.getAllTodos(); 
}

export async function updateTodo(todoId:string, updatedTodo:UpdateTodoRequest): Promise<UpdateItemOutput[]>{
    return todoItemAccess.updateTodo(todoId, updatedTodo); 
}

export async function createTodo(newItem): Promise<void>{
    return todoItemAccess.createTodo(newItem); 
}

export async function deleteTodo(todoId): Promise<DeleteItemOutput>{
    return todoItemAccess.deleteTodo(todoId); 
}