import React from 'react';
import { NavLink } from 'react-router-dom';
// import 'devextreme/dist/css/dx.light.css'
import { Button } from 'devextreme-react/button'
// import "../styles/app.css"
   
function Page1() {
  
    return (
            <div class="container">
              <h1 class="title">Button to page 2</h1>
              <p class="text">Here is the working button</p>
              <NavLink to="/page2">
                <Button
                  text='Page2'
                  stylingMode='outlined'
                  type='success'
                  width={120}
                  height={60}
                />
              </NavLink>
            </div>
    );
}
   
export default Page1;
