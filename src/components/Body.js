import { useState } from "react";
import Restaurant from "./Restaurant";

const Body = () => {
  const [temp, setTemp] = useState([
    {
      resname: "samarth foods",
      cousines: "birayani,north",
      ratings: "3.7",
      time: "38 mins"
    },
    {
      resname: "KFC",
      cousines: "chicken",
      ratings: "3.8",
      time: "38 mins"
    },
    {
      resname: "MAC-d",
      cousines: "burger",
      ratings: "4.1",
      time: "38 mins"
    }
  ]);

  return (
    <div className="Body">
      <div className="Button">
        <button
          onClick={() => {
            const filter=prev => prev.filter(res => parseFloat(res.ratings) > 4.0);
            setTemp(filter);
            console.log(temp);
          }}
        >
          Click me
        </button>
      </div>

      <div className="rest-cont">
        {temp.map((restaurant, index) => (
          <Restaurant
            key={index}
            resname={restaurant.resname}
            cousines={restaurant.cousines}
            ratings={restaurant.ratings}
            time={restaurant.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;