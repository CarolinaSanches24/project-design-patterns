import { UserController } from "../useCase/userController";

const myDatabaseClassic = UserController;

myDatabaseClassic.add({name:'Lucas', age:30});
myDatabaseClassic.add({name:'Maria', age:40});
myDatabaseClassic.add({name:'João', age:20});
myDatabaseClassic.add({name:'joana', age:25})
myDatabaseClassic.remove(1); 
myDatabaseClassic.show(); 

export {myDatabaseClassic}