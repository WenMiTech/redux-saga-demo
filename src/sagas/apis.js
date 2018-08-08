
export const login = (user) => {
    return fetch("/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(ex => console.log('parsing failed', ex));
};