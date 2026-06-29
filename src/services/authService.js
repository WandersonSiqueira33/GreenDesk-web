import api from "./api";

export async function login(credentials) {
    const response = await api.post('/login', credentials)

    return response.data
}

export async function me() {
    const response = await api.get('/me')

    return response.data
}

export async function logout() {
    const response = await api.post('/logout')

    return response.data
    
}