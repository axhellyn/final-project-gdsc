import React from 'react'
import SecondaryButton from '../components/ui/SecondaryButton'
import { auth } from '../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate();

    function handleLogut(){
        signOut(auth).then(() => {
            navigate("/Login");
        })
    }

  return (
    <div>
        <SecondaryButton textButton={"Log out"} onClick={handleLogut}/>
    </div>
  )
}
