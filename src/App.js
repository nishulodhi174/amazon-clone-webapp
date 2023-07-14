// import React, { useEffect } from 'react';
// import './App.css';
// import Header from './Header';
// import Home from './Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Checkout from './Checkout';
// import Subtotal from './Subtotal';
// import Login from './Login';
// import { auth } from './firebase';
// import { useStateValue } from './StateProvider';


// function App() {
//   const [{}, dispatch] = useStateValue();

// useEffect(() => {
//     // will only run once when the app component loads...

//     auth.onAuthStateChanged((authUser) => {
//       console.log("THE USER IS >>> ", authUser);

//       if (authUser) {
//         // the user just logged in / the user was logged in

//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         // the user is logged out
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     /// BEM
//     <Router>
//       <div className="App">
//         <Header />

//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/checkout">
//             <Checkout />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header"
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    // Replace  below commented Syntax from here 

    <Router>
      <div className="app">
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />} key="login" />
          <Route path="/checkout" element={<Checkout />} key="checkout" />
          <Route path="/" element={<Home />} key="home" />
        </Routes>
      </div>
    </Router>

    // To here

  );
}
export default App;

//  another T R Y 
{
/*
<Router>
<div className="app">
  <Switch>
    <Route path="/checkout">
      <Header />
      <Checkout />
    </Route>
    <Route path="/">
      <Header />
      <Home />
    </Route>
  </Switch>
</div>
</Router>
*/
}