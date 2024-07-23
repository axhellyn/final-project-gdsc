import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { PiEyeClosedBold } from "react-icons/pi";
import { HiMiniEye } from "react-icons/hi2";

export default function Login() {
  let navigate = useNavigate();
  const initialValue = "";

  const [state, setState] = useState({
    email: initialValue,
    password: initialValue,
    errorMessage: initialValue,
    isShowed: true
  })

  function handleChangeState(key, value){
    setState(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, state.email, state.password);

      handleChangeState("email", initialValue);
      handleChangeState("password", initialValue);
      handleChangeState("errorMessage", initialValue);

      navigate("/");
      window.scrollTo(0, 0);
    } catch (error) {
      handleChangeState("errorMessage", "*Invalid email/password")
    }
  };

  return (
    <div className="h-screen md:h-[85vh] px-8 md:px-16 py-10">
      <div className="h-full flex justify-center items-center">
        <form
          className="w-full md:w-fit p-8 md:px-14 py-10 flex flex-col gap-4 shadow-xl rounded-3xl bg-white bg-opacity-10"
          onSubmit={handleLogin}
        >
          <div className="flex text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
            <h1>Log</h1>
            <h1 className="text-clip bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-pink">
              in
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Email</label>
            <input
              type="text"
              className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Your email"
              onChange={(e) => handleChangeState("email", e.target.value)}
              value={state.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Password</label>
            <div className="flex gap-2 items-center w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg py-2 px-4">
              <input
                type={`${state.isShowed ? "password" : "text"}`}
                className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-none focus:outline-none "
                placeholder="Your password"
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
          <div className="flex gap-2">
            <span className="text-sm">Don't have an account?</span>
            <div className="text-sm font-semibold text-darkPurple hover:text-darkPink">
              <Link to={"/Signup"}>Sign Up</Link>
            </div>
          </div>
          <div className="text-red-600 text-sm font-semibold">
            {state.errorMessage}
          </div>

          <div className="flex justify-center">
            <Button textButton="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
