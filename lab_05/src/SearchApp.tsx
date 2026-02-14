import { useState } from "react";
import type { User } from "./types";
import UserCard from "./UserCard";

const INITIAL_DATA: User[] = [
    { name: "Alice", email: "alice@gmail.com", age: 25 },
    { name: "Bob", email: "bob@gmail.com", age: 30 },
    { name: "Charlie", email: "charlie@gmail.com", age: 22 },
    { name: "Dilan", email: "dilan@gmail.com", age: 27 },
    { name: "Elena", email: "elena@gmail.com", age: 35 },
];

const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const term = event.target.value;
        setSearchTerm(term);

            setFilteredUsers(
                users.filter((u) => 
                u.name.toLowerCase().includes(term.toLowerCase())
            )
        );
    };

    const handleClear = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
        setSearchTerm("");
        setFilteredUsers(users);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2> User Search </h2>

            <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name"
            style={{ marginRight: "10px" }}
            />

            <button onClick={handleClear}> Clear </button>

            <div style={{ marginTop: "20px" }}>
                {filteredUsers.length === 0 ? (
                    <p> No results found </p>
                ) : (
                    filteredUsers.map((user) => (
                        <UserCard key={user.email} user={user}>
                            <p> Matched user </p>
                        </UserCard>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchApp;