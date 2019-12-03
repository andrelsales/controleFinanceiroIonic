import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local.user";
import { STORAGE_KEYS } from "../config/storage.keys.config";


@Injectable()
export class StorageService{

    getLocalUser() : LocalUser{
       console.log("getLocalUser()"); 
       let user = localStorage.getItem(STORAGE_KEYS.localUser);
       console.log(user);
       if (user == null) {
           return null;
       }
       else
       {
          return JSON.parse(user);
       }

    }
    setLocalUSer(obj : LocalUser)    {
        
        if (obj == null) { 
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    } 

}