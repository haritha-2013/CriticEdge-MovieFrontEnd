import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const UserAuth = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null means loading



        const checkUser = async() => {
            try {
               const response = await axios.get('http://localhost:3000/api/users/checkuser',
                { withCredentials: true }
               );
            setIsAuthenticated(response.data.success);
              
              } catch (error) {
                console.log("Authentication check failed:", error);
                setIsAuthenticated(false);
              }
    };
    
    useEffect(() => {
    checkUser();
 }, []);

 
 if (isAuthenticated === null) {
    return <div>Loading...</div>;
 }



return isAuthenticated ? children: <p>Not authenticated</p>;
};
