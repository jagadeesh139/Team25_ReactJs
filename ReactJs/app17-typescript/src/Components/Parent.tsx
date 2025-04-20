import React from "react";
import Child from "./Child";

// Corrected interface declaration
interface ParentProps {
    usersInfo: string[];
}

const Parent: React.FC<ParentProps> = ({ usersInfo }) => {
    return (
        <div>
            <Child usersInfo={usersInfo} />
        </div>
    );
};

export default Parent;
