import React from "react";
import { UserContextConsumer } from "./UsersContext";

const User: React.FC<UserInterface> = (props: UserInterface) => {
    const changevalue = (num1: number, num2: number) => {
        return <div>
            <button type="button" onClick={() => { Changevalue(1, 2) }}>ChangeValue</button>
            <UserContextConsumer>
                {(value)=>{

                }}
            </UserContextConsumer>
        </div>
    }
}