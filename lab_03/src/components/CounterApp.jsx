import StepCounter from './StepCounter';

/*
    CounterAp - Родительский компонент

    передает props в StepCounter
    каждый StepCounter имеет своё состояния
*/

function CounterApp() {
    return (
        <div>
            <h2> Step Counters </h2>

            <StepCounter initialValue={0} step={1} />
            <StepCounter initialValue={10} step={5} />
        </div>
    );
}

export default CounterApp;