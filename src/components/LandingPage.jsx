import React from 'react'
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import Button2 from './Button2';
import Container from './Container';
const LandingPage = () => {
  return (
    <div>
      <Button2 text="Login" icon={<IoMdLogIn />} />
      <Button2 text="Logout" icon={<IoMdLogOut />} />
      <Container>
        <button>Button inside Container</button>
        
      </Container>
    </div>
  )
}

export default LandingPage
