import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../firseBase";
import { signInWithPopup } from "firebase/auth";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const response = await fetch("server/google", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await response.json();
      dispatch(signInSuccess(data));
      nav("/");
    } catch (error) {
      console.log("could not sign up with google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      className="bg-red-700 p-3 rounded-lg hover:opacity-95 text-white uppercase"
      type="button"
    >
      continue with google
    </button>
  );
}
