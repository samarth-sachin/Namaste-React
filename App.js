import React from "react";
import ReactDOM from "react-dom/client"
const Restaurant=(props)=>{
return(
    <div className="res-card">
       
        <img className="image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTajz7dRbTo3giRInUr6Xvw9BaDAtK3MK6GA&s"/>
         <h3>{props.resname}</h3>
         <h4>{props.cousines}</h4>
         <h4>{props.ratings}</h4>
         <h4>{props.time}</h4>
    </div>
);
};
const Body = () => {
    return (
        <div className="Body">
            <div className="Search"> Search  </div>

                <div className="rest-cont">
                    <Restaurant resname="samarth foods" cousines="birayani,north" ratings="4.6" time="38 mins" />
                    <Restaurant resname="KFC" cousines="chicken" ratings="4.6" time="38 mins" />
                    <Restaurant resname="MAC-d" cousines="burger" ratings="4.6" time="38 mins" />
                    <Restaurant resname="Pan shop" cousines="Masala Pan" ratings="4.6" time="38 mins" />
                    <Restaurant resname="BK" cousines="Chicken Burger" ratings="4.6" time="38 mins" />
                    <Restaurant resname="Sainath" cousines="Thali" ratings="4.6" time="38 mins" />
            </div>
        </div>
    );
};
const Heading = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ci9fGC6jGhnszpTaEc1tSQr0V-KosAfCng&s"
          alt="Logo"
        />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout=()=>
    {return(
        <div className="app">
            <Heading/>
            <Body/>
        </div>
  
)};
root.render(<AppLayout/>);