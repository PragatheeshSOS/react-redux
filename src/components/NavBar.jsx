import React from "react";
import {userSelector} from "react-redux"
import {selectUser} from '../redux/userSlice'

const NavBar = () => {
    const userdata = userSelector(selectUser)
    return (
        <div>
            {userdata?.name || "Not Available"}
        </div>
    )
}

export default NavBar