export async function getTopics() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await response.json();
    return Object.values(data);
}

export async function getComments() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    const data = await response.json();
    return Object.values(data);
}