// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";

// const Login3 = () => {
//     const provider = new GoogleAuthProvider();

//     const handleGoogleSignIn = () => {
//         signInWithPopup(auth, provider)
//             .then(result => {
//                 console.log(result.user);
//                 // setUser(result.user);
//             })
//             .catch(error => {
//                 console.log('ERROR', error);
//                 // setUser(null);
//             })
//     }
//     return (
//         <div>
//             <button className="btn" onClick={handleGoogleSignIn}>login</button>
//         </div>
//     );
// };

// export default Login3;