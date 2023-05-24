import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { addUser, removeUser } from "../redux/ReduxSlice";
import { useDispatch } from "../../node_modules/react-redux/es/exports";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(addUser({
            _id:user.uid,
            name:user.displayName,
            email:user.email,
            image:user.photoURL,
        }));
        setTimeout(()=>{
            navigate("/")
        },1500)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
        dispatch(removeUser())
        toast.success("Log Out Successfully")
    })
    .catch((error)=>{
        console.log(error)
    })
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
        <div className="w-full flex items-center justify-center gap-10">
          <div
            onClick={handleGoogleLogin}
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
   rounded-md flex items-center justify-center gap-2 hover:border-blue-600
   cursor-pointer duration-300"
          >
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1684865452~exp=1684866052~hmac=056c7515625a3774e494b6641eed445e30aaa386f5737bb0f98fdc700f723a20"
              alt="googleImg"
            />
            <span className="text-sm text-gray-900"> Sign in with Google</span>
          </div>
          <button
           onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking0wide
   rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-10">
          <div
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
   rounded-md flex items-center justify-center gap-2 hover:border-blue-600
   cursor-pointer duration-300"
          >
            <img
              className="w-8"
              src="https://img.icons8.com/?size=512&id=12599&format=png"
              alt="githubImg"
            />
            <span 
           
            className="text-sm text-gray-900"> Sign in with Github</span>
          </div>
          <button
            className="bg-black text-white text-base py-3 px-8 tracking0wide
   rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        </div>
        <ToastContainer
position = "top-left"
autoCloase ={2000}
hideProgressBar = {false}
newestOnTop ={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </div>
      <Footer />
    </>
  );
};

export default Login;
