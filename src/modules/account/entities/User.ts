import {v4 as uuidv4} from 'uuid'

class User {
    id?: string;
    name: string;
    username: string;
    email: string;
    password: string;
    driver_licence: string;
    isAdmin: boolean;
    created_at: Date;
    avatar: string

    constructor() {
        if(!this.id) {
            this.id = uuidv4()
        }
    }
}

export { User }