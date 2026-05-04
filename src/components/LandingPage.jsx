import React from 'react'
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import Button2 from './Button2';
const LandingPage = () => {
  return (
    <div>
      <Button2 text="Login" icon={<IoMdLogIn />} />
      <Button2 text="Logout" icon={<IoMdLogOut />} />
    </div>
  )
}

export default LandingPage
