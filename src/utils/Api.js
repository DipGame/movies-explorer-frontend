export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse() {
        return (response) => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(new Error('Что-то пошло не так....'))
        }
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse())
    }

    getSaveMovies() {
        return fetch(`${this._url}/movies`, {
            headers: this._headers
        })
            .then(this._checkResponse())
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(this._checkResponse())
    }

    changeSaveCard(data) {
        return fetch(`${this._url}/movies`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(this._checkResponse())
    }

    changeDeleteSaveCard(id) {
        return fetch(`${this._url}/movies/${id}`, {
            headers: this._headers,
            method: 'DELETE',
        })
            .then(this._checkResponse())
    }
}
