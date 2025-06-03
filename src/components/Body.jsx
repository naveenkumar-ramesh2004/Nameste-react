import '../Style/Body.css';
import{ restaurantList } from '../constant';
import RestaurantCart from './RestaurantCard';



const Body = () => {
    return (
       <main className="body" >
        <h1 className='title' >Restaurants</h1>
        <div className="restaurant-list">
             {
                restaurantList.map((restaurant) => {
                    return <RestaurantCart key={restaurant.info.id} {...restaurant.info} />
                 })
                }
            </div>
       </main>
    );
};

export default Body;