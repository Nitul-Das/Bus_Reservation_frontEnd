import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";   
import Navbar2 from "../components/Navbar2";
import { Outlet, useNavigate } from "react-router-dom";

const operatorMenu = [
    { label: 'Profile', path: '/operator/profile' },
    { label: 'Home', path: '/operator/home' },
    { label: 'AddBus', path: '/operator/add-bus' },
    { label: 'Reservation', path: '/operator/schedule' },
    { label: 'Logout', path: '/operator/logout' },
];

const OperatorDashboard = () => {


  const navigate = useNavigate();
  useEffect(() => {
  const isLoggedIn = localStorage.getItem("ope-token");
  if (!isLoggedIn) {
    navigate("/login", { replace: true });
  }
}, []);

    const [user,setUser] = useState('');

    useEffect(()=>{
        const storedUser = localStorage.getItem("Users");
        if(storedUser){
            const parseUser = JSON.parse(storedUser);
            setUser(parseUser.email);
            console.log(parseUser.email)
        }
    },[]);

  return (
    <div>
      <Navbar2 email={user} />
      <div className="flex">
        <Sidebar items={operatorMenu} />
        <main className="flex-1 ml-64 pt-20 p-6 bg-gray-100 min-h-screen">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default OperatorDashboard;
