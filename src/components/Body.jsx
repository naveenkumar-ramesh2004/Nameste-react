import '../Style/Body.css';
import RestaurantCart from './RestaurantCard';



const Body = ({ restaurantList }) => {
    return (
       <main className="body" >
        <h1 className='title' >Restaurants</h1>
        <div className="restaurant-list">
             {
               (restaurantList.length === 0) ? <h1 className='no-restaurant' style={{fontSize: '24px', color: 'red',width: '100%', textAlign: 'center'}}>No Restaurants Found</h1> :
                restaurantList.map((restaurant) => {
                    return <RestaurantCart key={restaurant?.info?.id} {...restaurant?.info} />
                 })
                }
            </div>
       </main>
    );
};

export default Body;