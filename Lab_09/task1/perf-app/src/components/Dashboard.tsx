import { useState, useCallback } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { Button } from "./Button";

export function Dashboard() {
    const [count, setCount] = useState(0);

    const [user] = useState({
        id: 1,
        name: "Boby",
        email: "boby@example.com"
    });

    const [items] = useState(["Apple", "Banana", "Orange", "Cherry"]);

    const handleIncrement = useCallback(() => {
        setCount(0);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin:'0 auto', padding: '20px' }}>
            <h2> Perfomance Dashboard </h2>
            <div style={{ background:'#e3f2fd', padding:'20px', borderRadius: '8px' }}>
                <h3> Count: {count} </h3>
                <Button onClick={handleIncrement} label="Increment Counter" />
                <Button onClick={handleReset} label="Reset" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                <section>
                    <UserCard user={user} />
                </section>
                <section>
                    <AnalyticsChart items={items} />
                </section>
            </div>

        </div>
    );
} 