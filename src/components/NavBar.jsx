import React from "react";
import {useSelector} from "react-redux"
import {selectUser} from '../redux/userSlice'

const NavBar = () => {
    const userdata = useSelector(selectUser)
    return (
        <div>
            {userdata?.name || "Not Available"}
        </div>
    )
}

export default NavBar