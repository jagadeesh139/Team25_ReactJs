const FunHover = () => {
    return <div>
        <button type="button" onMouseOver={() => { handelIncrement }}>Increment</button>
        <button type="button" onMouseOver={() => { handelDecrement }}>Decrement</button>
        <button type="button" onMouseOver={() => { handelReset }}>Reset</button>
    </div>
}
export default FunHover;