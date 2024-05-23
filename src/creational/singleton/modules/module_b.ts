// import { MyDatabaseClassic } from "../infra/db/my-database-classic";
// import {myDatabaseClassic as myDatabaseClassicModuleA}  from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.getInstance();

// myDatabaseClassic.add({name:'Carol', age:25});
// myDatabaseClassic.add({name:'Lorenzo', age:3});
// myDatabaseClassic.add({name:'Tais', age:25});
// myDatabaseClassic.remove(1); 
// myDatabaseClassic.show(); 

// console.log(myDatabaseClassic === myDatabaseClassicModuleA);


import { UserRepo } from "../repo/userRepo";
import {myDatabaseClassic as myDatabaseClassicModuleA}  from './module_a';

const myDatabaseClassic = UserRepo;

myDatabaseClassic.add({name:'Carol', age:25});
myDatabaseClassic.add({name:'Lorenzo', age:3});
myDatabaseClassic.add({name:'Tais', age:25});
myDatabaseClassic.remove(1); 
myDatabaseClassic.show(); 

console.log(myDatabaseClassic === myDatabaseClassicModuleA);
    