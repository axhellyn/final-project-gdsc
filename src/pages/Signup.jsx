import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { PiEyeClosedBold } from "react-icons/pi";
import { HiMiniEye } from "react-icons/hi2";

export default function Signup() {
  let navigate = useNavigate();
  const initialValue = "";

  const [state, setState] = useState({
    email: initialValue,
    password: initialValue,
    firstName: initialValue,
    lastName: initialValue,
    errorMessage: initialValue,
    isShowed: true
  })

  function handleChangeState(key, value){
    setState(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, state.email, state.password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          firstName: state.firstName,
          fullName: `${state.firstName} ${state.lastName}`,
          email: state.email,
          password: state.password,
        });
      }

      alert("Successfully Signed Up!");

      handleChangeState("firstName", initialValue);
      handleChangeState("lastName", initialValue);
      handleChangeState("email", initialValue);
      handleChangeState("password", initialValue);
      handleChangeState("errorMessage", initialValue);

      navigate("/");
      window.scrollTo(0, 0);
    } catch (error) {
      handleChangeState("errorMessage", "*Invalid");
    }
  };

  return (
    <div className="h-screen md:h-[85vh] px-8 md:px-16 py-10">
      <div className="h-full flex justify-center items-center">
        <form
          className="w-full md:w-fit p-8 md:px-14 py-10 flex flex-col gap-4 shadow-xl rounded-3xl bg-white bg-opacity-10"
          onSubmit={handleSignUp}
        >
          <div className="flex gap-2 text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
            <h1>Sign</h1>
            <h1 className="text-clip bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-pink">
              Up
            </h1>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-row gap-4">
              <input
                type="text"
                className="border-purple
               w-1/2 border-2 bg-transparent  rounded-lg focus:outline-none py-2 px-4"
                placeholder="First Name"
                onChange={(e) => handleChangeState("firstName", e.target.value)}
                value={state.firstName}
              />
              <input
                type="text"
                className="border-purple
               w-1/2 border-2 bg-transparent  rounded-lg focus:outline-none py-2 px-4"
                placeholder="Last Name"
                onChange={(e) => handleChangeState("lastName", e.target.value)}
                value={state.lastName}
              />
            </div>

            <input
              type="text"
              className="w-full border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Email"
              onChange={(e) => handleChangeState("email", e.target.value)}
              value={state.email}
            />

            <div className="flex gap-2 items-center w-full border-2 bg-transparent border-purple rounded-lg py-2 px-4">
              <input
                type={state.isShowed ? "password" : "text"}
                className="w-full border-2 bg-transparent border-none focus:outline-none"
                placeholder="Password"
                onChange={(e) => handleChangeState("password", e.target.value)}
                value={state.password}
              />
              <div className="cursor-pointer">
                {state.isShowed ? (
                  <PiEyeClosedBold
                    className="w-6 h-6 text-darkPurple"
                    onClick={() => handleChangeState("isShowed", !state.isShowed)}
                  />
                ) : (
                  <HiMiniEye
                    className="w-6 h-6 text-darkPurple"
                    onClick={() => handleChangeState("isShowed", !state.isShowed)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm">Already have an account ? </span>
            <div className="text-sm font-semibold text-darkPurple hover:text-darkPink">
              <Link to={"/login"}>Login</Link>
            </div>
          </div>

          <div className="text-red-600 text-sm font-semibold ">
            {state.errorMessage}
          </div>

          <div className="flex justify-center">
            <Button textButton="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}
