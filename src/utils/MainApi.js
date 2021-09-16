const checkResponse = res => {
	if (!res.ok) {
		return Promise.reject(`Error: ${res.status}`);
	}
	return res.json();
};

export const BASE_URL = 'http://localhost:3000';// http://api.diploma.kostin.nomoredomains.club

export const register = userRegistrationData => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: `${userRegistrationData.email}`,
			password: `${userRegistrationData.password}`,
			name: `${userRegistrationData.name}`
		}),
	}).then(checkResponse);
};

export const authorization = userLoginData => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: `${userLoginData.email}`,
			password: `${userLoginData.password}`,
		}),
	}).then(checkResponse);
};

export const tokenValidity = token => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	}).then(checkResponse);
};

export const updatesProfile = newUserData => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'PATCH',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${newUserData.token}`,
		},
        body: JSON.stringify({
			name: `${newUserData.name}`,
			email: `${newUserData.email}`,
		}),
	}).then(checkResponse);
};

export const createMovie = (movie, userId, jwt) => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'POST',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`,
		},
        body: JSON.stringify({
			"country": "null",
			"director": "null",
			"duration": `${movie.duration}`,
			"year": "null",
			"description": "null",
			"image": `${movie.image}`,
			"trailer": `${movie.trailerLink}`,
			"thumbnail": `${movie.image}`,
			"owner": `${userId}`,
			"movieId": `${movie._id}`,
			"nameRU": `${movie.nameRU}`,
			"nameEN": "null"
		}),
	}).then(checkResponse);
};

export const returnMovies = (jwt) => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'GET',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`,
		},
	}).then(checkResponse);
};

export const deleteMovies = (jwt, movieId) => {
	return fetch(`${BASE_URL}/movies/${movieId}`, {
		method: 'DELETE',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`,
		},
	}).then(checkResponse);
};