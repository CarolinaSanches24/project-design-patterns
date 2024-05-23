// import { MyDatabaseClassic } from "../infra/db/my-database-classic";

import { UserRepo } from "../repo/userRepo";

// const myDatabaseClassic = MyDatabaseClassic.getInstance();

// myDatabaseClassic.add({name:'Lucas', age:30});
// myDatabaseClassic.add({name:'Maria', age:40});
// myDatabaseClassic.add({name:'João', age:20});
// myDatabaseClassic.remove(1); //index remove
// myDatabaseClassic.show(); //list user 

// export {myDatabaseClassic}



const myDatabaseClassic = UserRepo;

myDatabaseClassic.add({name:'Lucas', age:30});
myDatabaseClassic.add({name:'Maria', age:40});
myDatabaseClassic.add({name:'João', age:20});
myDatabaseClassic.remove(1); 
myDatabaseClassic.show(); 

export {myDatabaseClassic}