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
export default Restaurant;