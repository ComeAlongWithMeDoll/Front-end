import { useState, useCallback, memo } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";

interface ButtonProps {
    onClick: () => void;
    label: string; 
}

export const Button = memo(function Button({ onClick, label }: ButtonProps) {
    console.log('Button "${label}" render');
    return (
        <button onClick={onClick} style={{ margin: "5px" }}>
            {label}
        </button>
    );
});

export function Dashboard() {
    const [count, setCount ] = useState(0);
    const [user] = useState({ id: 1, name: "Boby", email: "boby@example.com" });
    const [items] = useState(["item1", "item2", "item3"]);

    const handleIncrement = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    const handleSimpleLog = useCallback(() => {
        console.log("Action triggered");
    }, []);

    return (
        <div style={{ padding: '20px'}}>
            <h1> Perfomance Dashboard </h1>
            <p> Counter: <strong> {count} </strong> </p>

            <Button onClick={handleIncrement} label="Increment Counter" />
            <Button onClick={handleSimpleLog} label="Log Action" />

            <hr />
            <UserCard user={user} />
            <AnalyticsChart items={items} />
        </div>
    );
}