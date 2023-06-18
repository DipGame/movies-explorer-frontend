export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const movies = () => {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch(checkResponse())
};

function checkResponse() {
    return (response) => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject(new Error('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'))
    }
}