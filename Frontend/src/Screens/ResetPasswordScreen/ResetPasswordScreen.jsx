import React from "react";
import { useSearchParams, Navigate } from "react-router-dom";
export const ResetPasswordScreen = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const reset_password_token = searchParams.get('reset_password_token')
    if (!reset_password_token) {
        return (
            <Navigate to={'/login'} replace />
        )
    }
    return (
        <div>
            <h1>Reiniciar contraseña</h1>
        </div>
    )
}
