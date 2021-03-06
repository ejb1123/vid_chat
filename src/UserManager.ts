import {User} from  "./User/user"
import {Self} from "./User/self"
import { Events} from "./event-manager"
import * as Collections from '../node_modules/typescript-collections/dist/lib/index';
import { peerjsManager } from "./peerjs-manager";
import { videoFooter } from "./footerbar";
import { SocketManager } from "./SocketManager";
export class UserManager {
    
    static findUserbyID(id:string):User{
        let luser :User=null
        UserManager.users.forEach((user: User)=>{
            if(user.peerid=== id){
                luser = user
            }
        })
        return luser;
    }
    static addNewUser(user:User):User{
        let nuser=new User()
        nuser.name=user.name
        nuser.peerid=user.peerid
        this.users.add(nuser)
        return nuser
    }
    static Self: User;
    static users = new Collections.Set<User>();
    
    addUsers(users:User[]){
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            UserManager.users.add(user)
            console.log(`adding user to users array ${user}`)
        }
    }


    createSelf(){
        return new Promise((resolve,reject)=>{
            UserManager.Self = new Self(SocketManager.s.id,peerjsManager.localpeerjs.id);
            resolve()
        })
    }
    constructor() {
    }
}