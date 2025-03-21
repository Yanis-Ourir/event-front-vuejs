type Event = {
    title: String,
    date: String,
    description: String,
    location: String
}

export function createEvent(data: Event) {
    console.log('Event created', data);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer' + data // Add token here,
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.log('Event created', data);
}

export function updateEvent(data: Event) {
    console.log('Event updated', data);
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer' + data // Add token here,
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    
}

export function deleteEvent(data: Event) {
    console.log('Event deleted', data);
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer' + data // Add token here,
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.log('Event deleted', data);
}

export function getEvents(data: Event) {
    console.log('Event fetched', data);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer' + data // Add token here,
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.log('Event fetched', data);
}