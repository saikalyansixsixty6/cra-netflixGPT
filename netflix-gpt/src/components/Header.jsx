import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
    
  const handleSignOut = ()=>{
    
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
         }).catch((error) => {
          // An error happened.
         });

  }


    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
      
         <img
          className="w-44"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="" />
      
      {user && <div className="flex p-2">
        <img src={user.photoURL} alt="usericon" className="h-12 w-12"/>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}

      </div>
    )
  }
  
  export default Header