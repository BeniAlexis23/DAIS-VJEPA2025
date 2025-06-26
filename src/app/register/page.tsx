import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DAIS - FI",
    icons: {
        icon: "images/logo/es-undc.png",
    },
};

const Register = () => {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-semibold mb-4">Registro</h1>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Nombre" className="border rounded px-4 py-2" />
                    <input type="email" placeholder="Correo" className="border rounded px-4 py-2" />
                    <input type="password" placeholder="Contraseña" className="border rounded px-4 py-2" />
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Registrarse</button>
                </form>
            </div>
        </main>
    )
}

export default Register;