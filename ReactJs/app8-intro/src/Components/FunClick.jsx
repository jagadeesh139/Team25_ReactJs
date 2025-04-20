const FunClick = () => {
    return <div>
        <h2>count:</h2>
        <button type="button" onClick={() => { handelIncrement }}>Increment</button>
        <button type="button" onClick={() => { handelDecrement }}>Decrement</button>
        <button type="button" onClick={() => { handelReset }}>Reset</button>
    </div>
}
export default FunClick;