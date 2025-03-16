export type User = {
    email: String,
    password: String
}

export function logUserIn(data: User) {
    console.log('User logged in', data);

}