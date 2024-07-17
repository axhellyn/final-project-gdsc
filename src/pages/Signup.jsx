import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";

export default function Signup() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          firstName,
          fullName:`${firstName} ${lastName}`,
          email,
          password,
        });
      }

      alert("Successfully Signed Up!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setErrorMessage("");

      setTimeout(() => {
        navigate("/Login");
      }, 3000);
    } catch (error) {
      setErrorMessage("*Invalid");
      // setErrorMessage(error.message)
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
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                type="text"
                className="border-purple
               w-1/2 border-2 bg-transparent  rounded-lg focus:outline-none py-2 px-4"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>

            <input
              type="text"
              className="w-full border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="password"
              className="w-full border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm">Already have an account ? </span>
            <div className="text-sm font-semibold text-darkPurple hover:text-darkPink">
              <Link to={"/Login"}>Login</Link>
            </div>
          </div>

          <div className="text-red-600 text-sm font-semibold ">
            {errorMessage}
          </div>

          <div className="flex justify-center">
            <Button textButton="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}
