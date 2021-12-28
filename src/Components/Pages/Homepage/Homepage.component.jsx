import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router';
import Iframe from 'react-iframe';

const Homepage = () => {

    const host = localStorage.getItem("hostname");
    
    return (
       
        <div>

            <Iframe 
                url={host}
                // url="http://blog-liyi.test"
                width="100%"
                height="1024px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />

        </div>
        
        
    )
}

export default Homepage;
