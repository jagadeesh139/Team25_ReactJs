import { useState } from "react";

const FunCount = ({ render }) => {
    const [count, setCount] = useState(0);

    const handelIncrement = () => {
        setCount(count + 1);
    };

    const handelDecrement = () => {
        setCount(count - 1);
    };

    const handelReset = () => {
        setCount(0);
    };

    return (
        <div>
            {render(count, handelIncrement, handelDecrement, handelReset)}
        </div>
    );
};

export default FunCount;
