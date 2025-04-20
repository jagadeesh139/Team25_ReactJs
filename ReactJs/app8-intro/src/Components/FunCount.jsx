import { useState } from "react";

const FunCount = () => {
    const FunCount = ({ }) => {
        const [count, setcount] = useState(0)
        const handelIncreament = () => {
            setcount(count + 1)

        }
        const handelDecreament = () => {
            setcount(count - 1)

        }
        const handelReset = () => {
            setcount(0)

        }

    }
    return <div>
        {}

    </div>
}
export default FunCount;