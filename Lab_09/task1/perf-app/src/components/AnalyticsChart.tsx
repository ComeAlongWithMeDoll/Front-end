import { useMemo } from "react";

interface AnalyticsChartProps {
    items: string[];
}

function calculateAnalytics(items: string[]): number {
    console.time("Calculation Time");
    console.log("Calculating analytics (heavy loop)...");
    let result = 0;
    for (let i =0; i < 10000000; i++) {
        result += Math.sqrt(i);
    }
    console.timeEnd("Calculation Time");
    return Math.floor(result + items.length);
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
    const analytics = useMemo(() => calculateAnalytics(items), [items]);

    console.log("AnalyticsChart component render");

    return (
        <div style={{ background: 'f0f0f0', padding: '15px', marginTop: '10px' }}>
            <h4> Analytics Section </h4>
            <p> Calculated value: <strong>{analytics}</strong> </p>
            <p> Items count: {items.length} </p>
        </div>
    );
}