import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      await setLoading(false);
    }, 5500);
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <Router>
            <LoginScreen />
          ) : (
            <Switch>
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
                 <Route exact path="/">
                    {user.plan ? (
                  <div className="app">
                    <HomeScreen />
                  </div>
                ) : (
                  <Redirect to="/profile" />
                )}
              </Route>
            </Switch>
        
      )
    </Router>
  );
}

export default App;