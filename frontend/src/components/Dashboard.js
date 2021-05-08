import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Dashboard() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
        await logout()
        history.push("/login")
        } catch {
        setError("Failed to log out")
        }
    }

    return (
        <div>
            {error && <h3 className="text-sm font-medium text-red-800">{error}</h3>}

            <h1>Welcome, {currentUser.email}</h1>
            <button
                onClick={handleLogout}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                Logout
            </button>
        </div>
    )
}
