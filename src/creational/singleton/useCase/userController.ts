import { User } from "../domain/user";

export const UserController = (()=> {
    const users: User[] = [];

    return{
        add(user:User):void{
            users.push(user);
        },
        remove(index:number):void{
            users.splice(index,1);
        },
        show():void{
            users.map(user => console.log(user));
        }
    }
})();