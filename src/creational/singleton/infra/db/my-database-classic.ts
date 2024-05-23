import { User } from "../../domain/user";

// export class MyDatabaseClassic{
//     private static instance: MyDatabaseClassic | null = null;
//     private users: User[] = [];

//     private constructor(){
//         console.log('New instance created');
//     }
    
//     public static getInstance(): MyDatabaseClassic{
//         if(MyDatabaseClassic.instance === null){
//         MyDatabaseClassic.instance = new MyDatabaseClassic();
//         }
//         return MyDatabaseClassic.instance;
//     }
//     add(user:User):void{
//         this.users.push(user);
//     }
//     remove(index:number):void{
//         this.users.splice(index,1);
//     }
//     show():void{
//         this.users.map(user => console.log(user));
//     }
// }

// const db1 = MyDatabaseClassic.getInstance();  Instance Created

// Instance private

export class MyDatabaseClassic{
    private static _instance: MyDatabaseClassic | null = null;

    private constructor(){
        console.log('New instance created');
    }
    
    public static get instance(): MyDatabaseClassic{
        if(MyDatabaseClassic._instance === null){
        MyDatabaseClassic._instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic.instance;
    }
}
