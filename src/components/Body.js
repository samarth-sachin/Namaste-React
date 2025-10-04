import Restaurant from "./Restaurant"
import rest from "../utils/mockdata"
const Body = () => {
    return (
        <div className="Body">
            <div className="Search"> Search  </div>

                <div className="rest-cont">
                  {rest.map((restaurant, index) => (
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