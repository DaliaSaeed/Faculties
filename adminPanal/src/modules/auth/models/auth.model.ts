export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface registerUserData {
    fname:String
    lname:String
    email:String
    password:String
    role:String
    image?:String
    tokens?:[ { token:String }]
}

