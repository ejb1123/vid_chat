import { User } from "./user"
import {Events as f, Events} from "../event-manager"
import { UserMedia } from "../usermedia";
export class Self extends User {
    Email:string;

    constructor(ws:string,peerid:string) {
        super();
        console.log("made self")
        this.name="ej"
        this.peerid=peerid
        this.wsid=ws
        this.mediastream=UserMedia.localMediastream
    }
}