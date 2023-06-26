import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/app.css"
   
function Page1() {
  
    return (
            <div class="container">
                <h1 class="title">Button to page 2</h1>
                <p class="para">Here is the working button</p>
                <NavLink to="/page2">
                <button class="button" type="button">Page2</button>
              </NavLink>
            </div>
    );
}
   
export default Page1;
