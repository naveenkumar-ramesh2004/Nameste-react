import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { useState } from "react";
import { restaurantList } from "./constant";


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
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    const FilterRestaurant = () => {
    (!searchText) ? setRestaurants(restaurantList) :setRestaurants(
        restaurantList.filter((restaurant) =>
            restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        )
    );
};
   return (
       <>
        <Header searchText={searchText} setSearchText={setSearchText} Filter={FilterRestaurant} />
        <Body restaurantList={restaurants} />
         {/* <Footer /> */}
        </>
    );
};

export default App;
