export class User {
    constructor(
        private id: string,
        private username: string,
        private email: string,
        private password: string,

    ) { }

    getId = (): string => {
        return this.id
    }
    
    getUsername = (): string => {
        return this.username
    }
    getEmail = (): string => {
        return this.email
    }
    getPassword = (): string => {
        return this.password
    }
    setId(id: string){
        this.id = id;
    }
    setUsername(name: string){
        this.username = name;
    }

    setEmail(email: string){
        this.email = email;
    }  
    setPassword(password: string){
        this.password = password;
    }  
}

export interface UserInputDTO {
    username: string,
    email: string,
    password: string
}
export interface UserOutputDTO {
    id:string
    username: string,
    email: string,
    password: string
}

export interface AuthenticationData {
    id: string
}