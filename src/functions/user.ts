type User = {
    name: String,
    email: String,
    password: String
}

export function createUser(data: User) {
    console.log('User created', data);
}

export function updateUser(data: User) {
    console.log('User updated', data);
}

export function deleteUser(data: User) {
    console.log('User deleted', data);
}

export function getUser(data: User) {
    console.log('User fetched', data);
}