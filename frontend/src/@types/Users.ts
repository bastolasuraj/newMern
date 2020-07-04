export interface UserLogin {
    username: string
    password: string
    // formData:UserLogin
}
export interface UserRegistration extends UserLogin{
    // firstname: string
    // lastname: string
    // email: string
    usertype: string
    // image: string
}

export interface Users {
    username: string
    usertype: string
    createdAt: string
}