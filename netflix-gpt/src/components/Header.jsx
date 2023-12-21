import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
    
  const handleSignOut = ()=>{
    
        signOut(auth).then(() => {
        // Sign-out successful.
        
         }).catch((error) => {
          // An error happened.
         });

  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         const {uid,email,displayName,photoURL} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
         navigate("/browse")



         
       } else {
         
         dispatch(removeUser())
         navigate("/")
         
       }
     });

     return ()=> unsubscribe();
  },[])




    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
      
         <img
          className="w-44"
          src={LOGO} alt="" />
      
      {user && <div className="flex p-2">
        <img src={user.photoURL} alt="usericon" className="h-12 w-12"/>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}

      </div>
    )
  }
  
  export default Header