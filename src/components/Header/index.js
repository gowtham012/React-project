import React from 'react';
import "./styles.css"
import logo from "../../assets/logo/long-logo.png"
import SearchRoundedIcon from '@mui/icons-material/Search';

import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import MobileSearchBar from '../MobileSearch/Index';
import SimpleBottomNavigation from './BottomNav';

export default function Header(){
  return (
    <div className='navbar'>
      <img src ={logo} className='navbar-logo'/>
      <div className='search-bar'>
        <div className='search-abar-text'>Any Where</div>
        <div className='search-abar-text'>Any Week</div>
        <div className='search-abar-text2'>Add Guests</div>
        <div className='serch-icon-div'> <SearchRoundedIcon className="search-icon" /></div>
      </div>
      <div className='profile-container'>
        <div className='airbnb-your-name'>Airbnb your home</div>
        <div className='airbnb-your-name'><LanguageIcon sx={{fontSize:"1.5rem"}}  /></div>
        <div className='profile-div'><BasicMenu /></div>
      </div>
      
      <MobileSearchBar />
      <SimpleBottomNavigation />
     
    </div>
    
  );
}

