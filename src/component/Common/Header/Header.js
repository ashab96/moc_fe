import React ,{ useState, useEffect } from "react";
// import { Navbar, Container, Nav, Button } from "react-bootstrap";
import {logo} from "../../../constant/utility";
import { logoUrl } from "../../../constant//const_url";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header(){
   
    // const [loggedIn,setLoggedIn] = useState(false);
    // const auth = useSelector((state) => state.authReducer);

    // useEffect (() =>{
    //     if(auth.user && auth.user.isLoggedIn){
    //         setLoggedIn(true);
    //     }
    // },[auth]);
    
    return(

        <header className="py-5 bg-transparent text-dark-shades-100 text-center">
        <div className="container mx-auto flex flex-wrap p-5 px-[148px] flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="./"
          >
             <img src={logoUrl} alt="logo" />
          </a>
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          
          </div>
          </header>

    );


}

export default Header;