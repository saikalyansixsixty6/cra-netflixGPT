import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSearch";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

import { changeLanguage } from "../utils/configSlice";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    
  const handleSignOut = ()=>{
    
        signOut(auth).then(() => {
        // Sign-out successful.
        
         }).catch((error) => {
          // An error happened.
         });

  }
  const handleGptSearch = ()=>{
       dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


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
      {showGptSearch && (
            <select
              className="h-10 w-30 p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}

            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}


        <button onClick={handleGptSearch} className="h-10 w-30 px-2 py-2 mx-2 my-2 bg-purple-800 text-white rounded-lg">GPT Search</button>
        <img src={user.photoURL} alt="usericon" className="h-12 w-12"/>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}

      </div>
    )
  }
  
  export default Header