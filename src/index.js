// import React from 'react'
// import "./Subtotal.css";
// import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from './StateProvider';
// import { getBasketTotal } from './reducer';

// function Subtotal() {
//     const [{ basket }, dispatch] = useStateValue();

//     return (
//         <div className='subtotal'>
//             <CurrencyFormat
//                 renderText={(value) => (
//                     <>
//                         <p>
//                             Subtotal ({basket.length} items): <strong>{value}</strong>
//                         </p>
//                         <small className='subtotal-gift'>
//                             <input type="checkbox" /> This order contains a gift
//                         </small>
//                     </>
//                 )}
//                 decimalScale={2}
//                 value={getBasketTotal(basket)}
//                 displayType={"text"}
//                 thousandSeparator={true}
//                 prefix={"$"}
//             />

//             <button>Proceed to Checkout</button>
//         </div>
//     )
// }

// export default Subtotal;



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
