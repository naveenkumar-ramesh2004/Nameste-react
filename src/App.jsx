import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";



/**
 * 
 * Header
 *   - Logo
 *  - Navigation
 *  -cart
 * Body
 *  - ReataruntList
 *  -ReataruntCard(multiple cards)
 *     -Image
 *     -Name
 *     -Cuisines
 *     -Rating
 *      -Delivery Time
 *  Footer
 *     -copyright
 * 
 */


const App = () => {
    return (
        <>
        
         <Header />
         <Body />
         {/* <Footer /> */}

        </>
        
    );
};

export default App;
