import React from 'react';
import { NavLink } from 'react-router-dom';
   
function Home() {
  
    return (
            <div className="container">
                <NavLink className="button" to="/page1">
                    <h2 className="text-center mt-5 mb-3">
                    Please go to 'localhost/page1'
                    </h2>
                </NavLink>
            </div>
    );
}
   
export default Home;
