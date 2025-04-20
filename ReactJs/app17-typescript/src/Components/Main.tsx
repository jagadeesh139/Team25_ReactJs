import { useState } from "react"
import Parent from "./Parent"
import { UserContextProvider } from "./UsersContext"

const Main = () => {
    const [userInfo, setUserInfo] = useState(["nani", "kiran", "kalyan"])
    const [newusers, setnewusers] = useState(["ravi", "raju", "ramu"])
    return <div>
        <UserContextProvider value={newusers}>
            <Parent usersInfo={userInfo} />

        </UserContextProvider>


    </div>

}
export default Main;