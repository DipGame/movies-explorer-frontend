export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const movies = () => {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch((err) => {
            console.log(err);
        })
};