const FunClickComponent = (

    { count, increment, decrement, reset }) => {
    return (<div>
        <h2>{count}</h2>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
        <button type="button" onClick={reset}>Reset</button>

    </div>)
}
export default FunClickComponent; 