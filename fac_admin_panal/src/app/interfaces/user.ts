export interface User {
    fname:String
    lname:String
    email:String
    password:String
    role:String
    image?:String
    tokens?:[ { token:String }]
}
