"use client"

import React, { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className='login-container'>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-5/6 lg:w-1/3">
                    <h2 className="text-center text-2xl font-bold mb-5">Login</h2>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
                </form>
            </div>
        </div>
    );
}