export type User = {
    email: String,
    password: String
}

export function logUserIn(data: User) {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        localStorage.setItem('token', data.token);
    }
    )
    .catch((error) => {
        console.error('Error:', error);
    }
    );
}

export function logout() {
    // remove token from local storage
    localStorage.removeItem('token');
}