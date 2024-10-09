import { type Account as _Account } from "@poz-world/poz.world/mastodon/models/account";

export type Account = _Account & {
    get(k:ACCOUNT_KEY) : any;
    
};

export type ACCOUNT_KEY = 
"display_name" | "username" | "acct" | "suspended" | "id" | any;