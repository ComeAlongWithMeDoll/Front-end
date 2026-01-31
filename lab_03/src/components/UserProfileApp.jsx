import { useState } from 'react';
import UserProfile from './UserProfile';

function UserProfileApp() {
    const [userId, setUserId] = useState(1);

    return (
        <div>
            <h2> User Profile </h2>

            <button onClick={() => setUserId(1)}> Пользователь 1 </button>
            <button onClick={() => setUserId(2)}> Пользователь 2 </button>
            <button onClick={() => setUserId(3)}> Пользователь 3 </button>

            <UserProfile userId={userId} />
        </div>
    );
}

export default UserProfileApp;