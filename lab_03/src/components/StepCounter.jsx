import { useState } from "react"; 

/* 
StepCounter - компонент счетчика 
props: 
-initialValue
-step
*/

function StepCounter ({ initialValue = 0, step = 1 }) {

    // Текущее значение счётчика
    const [count, setCount] = useState(initialValue);

    // История всех знаений
    const [history, setHistory] = useState([]);

    // Кол-во операций
    const [operationCount, setOperationCount] = useState(0);

    // Увеличение счетчика
    const increment = () => {
        const newValue = count + step;
        setCount(newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount +  1);
    };

    // Уменьшение счетчика
    const decrement = () => {
        const newValue = count - step;
        setCount(newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount + 1);
    };

    const reset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(0);
    };

    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
            <h3> StepCounter </h3>

            <p> Текущее значение: {count} </p>
            <p> Количество операций: {operationCount} </p>

            <button onClick={increment}> Увеличение (+{step}) </button>
            <button onClick={decrement}> Уменьшение (-{step}) </button>
            <button onClick={reset}> Сброс </button>

            <h4> Последние знаения: </h4>
            <ul>
                {history.slice(-5).map((value, index) => (
                    <li key={index}> {value} </li>
                ))}
            </ul>
        </div>
    );
}

export default StepCounter;