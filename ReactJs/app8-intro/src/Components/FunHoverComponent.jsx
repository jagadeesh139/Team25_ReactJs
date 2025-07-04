const FunHoverComponent = ({ count, increment, decrement, reset }) => {
    return (<div>
        <h2>{count}</h2>
        <button type="button" onMouseOver={increment}>increment</button>
        <button type="button" onMouseOver={decrement}>Decrement</button>
        <button type="button" onMouseOver={reset}>Reset</button>

    </div>
    )
}
export default FunHoverComponent;