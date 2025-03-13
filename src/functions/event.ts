type Event = {
    title: String,
    date: String,
    description: String,
    location: String
}

export function createEvent(data: Event) {
    console.log('Event created', data);
}

export function updateEvent(data: Event) {
    console.log('Event updated', data);
}

export function deleteEvent(data: Event) {
    console.log('Event deleted', data);
}

export function getEvents(data: Event) {
    console.log('Event fetched', data);
}