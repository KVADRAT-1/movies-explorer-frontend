const checkResponse = res => {
	if (!res.ok) {
		return Promise.reject(`Error: ${res.status}`);
	}
	return res.json();
};

export const BASE_URL = 'http://localhost:3000';// http://api.diploma.kostin.nomoredomains.club

export const register = (userRegistrationData) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
            name: `${userRegistrationData.name}`,
            email: `${userRegistrationData.email}`,
			password: `${userRegistrationData.password}`,
		}),
	}).then(checkResponse);
};

export const authorization = (userLoginData) => {
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

export const updatesProfile = (email, password, userId, token) => {
	return fetch(`${BASE_URL}/users/${userId ? userId : 'me'}`, {
		method: 'PATCH',
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
        body: JSON.stringify({
			email: `${email}`,
			password: `${password}`,
		}),
	}).then(checkResponse);
};