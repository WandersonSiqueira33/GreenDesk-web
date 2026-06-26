import api from "./api";

export async function login(credentials) {
    const response = await api.post('/login', credentials)

    return response.data
}