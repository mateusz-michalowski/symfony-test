// import 'devextreme/dist/css/dx.light.css'
import { Button } from 'devextreme-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
   
function Home() {
  
    return (
            <div className="container">
                <NavLink to="/page1">
                    <Button
                      text='Please go to Page1'
                      stylingMode='outlined'
                      type='default'
                      width={220}
                      height={100}
                    />
                </NavLink>
            </div>
    );
}
   
export default Home;
