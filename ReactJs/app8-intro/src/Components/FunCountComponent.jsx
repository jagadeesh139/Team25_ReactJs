import React, { useState } from "react"

const FunCountComponent = ({ render }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return <div>
        {render(count, increment, decrement, reset)}

    </div>
}
export default FunCountComponent;