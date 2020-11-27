import { Routes } from "./routes"
import { UserRoles } from "../utils"

export const Redirections = (userRole) => {
    switch (userRole) {
        default:
            return '';
    }
}

export const LoginSuccess = (userRole) => {
    switch (userRole) {
        default:
            return '';
    }
}

export const Access = (userRole, path) => {
    switch (userRole) {  
        case UserRoles.role:
            return [
                ...Object.values(Routes)
            ].indexOf(path)      
        default:
            return false
    }
}