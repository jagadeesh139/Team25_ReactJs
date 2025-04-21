// FunHover.jsx
const FunHover = ({ count, handelIncrement, handelDecrement, handelReset }) => {
    return (
        <div>
            <h2>{count}</h2>
            <button type="button" onMouseOver={handelIncrement}>
                Increment
            </button>
            <button type="button" onMouseOver={handelDecrement}>
                Decrement
            </button>
            <button type="button" onMouseOver={handelReset}>
                Reset
            </button>
        </div>
    );
};

export default FunHover;
