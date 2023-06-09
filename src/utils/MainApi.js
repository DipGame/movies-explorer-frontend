export const BASE_URL = 'https://addmymovies.nomoredomains.monster/api';

export const register = (userName, userEmail, userPass) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            password: userPass,
            email: userEmail
        })
    })
        .then(response => response.json())
        .catch((err) => {
            console.log(err);
        })
};

export const login = (userEmail, userPass) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: userPass,
            email: userEmail
        })
    })
        .then(response => response.json())
        .catch((err) => {
            console.log(err);
        })
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(response => response.json())
        .catch((err) => {
            console.log(err);
        })
}