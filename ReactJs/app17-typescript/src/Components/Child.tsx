import React from "react";
import User from "./User";
interface ChildProps {
    usersInfo: String[]
}

const Child: React.FC<ChildProps> = ({ usersInfo })=>{
    return <div>
        <User/>
    </div>
}
export default Child;