import Login from "./components/login";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home";
import { auth, collection, db } from "./firebase.jsx";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { userCreator } from "./redux/actions/userActions";

function App() {

  let dispath=useDispatch();

  let state= useSelector(state=> state);
  console.log(state);

  useEffect(() => {
    let unSub = auth.onAuthStateChanged(async (user) => {

      dispath(userCreator(user));
      if (user) {

        let { uid, email } = user;
        let docRef = await collection(db, "users")
        if (!user.emailVerified) {
          await setDoc(doc(docRef, uid), {
            email,
          });
        }
      }
    })
    return () => unSub();
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login"> <Login /></Route>
          <Route path="/signup"> <Signup /></Route>
          <Route path="/"> <Home /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
