import Logo from '../assets/SoruVandi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faPercent, faShoppingCart,faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../Style/Header.css';
import React, { useState } from 'react';

const Header = () => {
    const [searchText, setSearchText] = useState("");
    return(
        <header className="header">
            <div className="Logo">
                <img src={Logo} alt="Soru Vandi" />
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search for Restarunts and Food" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
            </div>
            <nav>
                <ul>
                    <li ><FontAwesomeIcon icon={faHeadset } style={{paddingRight:'4px'}}></FontAwesomeIcon>Contact Us </li>
                    <li><FontAwesomeIcon icon={faPercent } style={{paddingRight:'4px'}}></FontAwesomeIcon>Deals</li>
                    <li><FontAwesomeIcon icon={faShoppingCart } style={{paddingRight:'4px'}}></FontAwesomeIcon>Cart</li>
                    <li><FontAwesomeIcon icon={faUser} style={{paddingRight:'4px'}}></FontAwesomeIcon>Sing in</li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;