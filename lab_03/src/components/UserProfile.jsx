import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect запускается при изменении userId
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        setError(null);

        fetch('https://jsonplaceholder.typicode.com/users/${userId}', { signal })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ошибка загрузки данных");
            }
            return response.json();
        })
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((err) => {
            if (error.name !== 'AbortError') {
                setError(error.message);
                setLoading(false);
            }
        });

        return () => {
            controller.abort();
        };
    }, [userId]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (!user) return null;

    return (
        <div>
            <p><b>Имя:</b> {user.name}</p>
            <p><b>Почта:</b> {user.email}</p>
            <p><b>Телефон:</b> {user.phone}</p>
        </div>
    );
}

export default UserProfile;