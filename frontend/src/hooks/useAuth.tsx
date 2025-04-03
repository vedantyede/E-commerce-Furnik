import { useState } from 'react'

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);

    function signin(username: string, password: string) {
        setLoading(true);
        fetch("/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user);
                });
            } else {
                r.json().then((err) => setError(err.error))
            }
        })
    }
    return {
        user,
        signin,
        error,
        isLoading
    }
}

export default useAuth