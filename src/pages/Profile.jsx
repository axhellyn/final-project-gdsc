import { useContext } from "react";
import SecondaryButton from "../components/ui/SecondaryButton";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { fullName, userEmail } = useContext(AuthContext);

  function handleLogut() {
    signOut(auth).then(() => {
      navigate("/login");
      window.scrollTo(0, 0);
    });
  }

  return (
    <div className="px-8 md:px-16 py-10 min-h-screen">
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="w-52 h-52 md:w-72 md:h-72 rounded-full bg-profile bg-center bg-contain"></div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="text-xl font-semibold">{fullName}</div>
          <div className="text-sm">{userEmail}</div>
        </div>

        <SecondaryButton textButton={"Log out"} onClick={handleLogut} />
      </div>
    </div>
  );
}
