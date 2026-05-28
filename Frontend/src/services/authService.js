const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export async function login (email, password){
    try{
        const response_http = await fetch(
            `${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(
                    {
                        email: email,
                        password: password
                    }
                )
            }
        )
        const response = await response_http.json()
        return response
    }
    catch(error){
        throw new Error("Error al hacer el login")
    }
}