import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/app.css"
   
function Page2() {
  
    return (
            <div class="container2">
                <h1 class="title2">Button to page 1</h1>
                <p class="para2">Here is the working button</p>
                <NavLink to="/page1">
                <button class="button2" type="button">Page1</button>
              </NavLink>
            </div>
    );
}
   
export default Page2;
