import { IMAGE_CDN_URL } from "../constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const RestaurantCart=({name, cloudinaryImageId, cuisines, sla, avgRatingString})=>{
    // const {name, cloudinaryImageId, cuisines, avgRating, sla, avgRatingString} = restarunt;
    return (
        <div className="restaurant-card" >
            <img src={IMAGE_CDN_URL + cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h4><span><FontAwesomeIcon icon={faStar} style={{  color: 'white',backgroundColor: 'green',borderRadius: '50%',fontSize: '9px',padding: '4px',width: '13px', height: '13px',display: 'inline-flex',justifyContent: 'center',alignItems: 'center'}}></FontAwesomeIcon></span><span>{" "+avgRatingString}.{sla?.slaString}</span></h4>
            <p></p>
            <p>{Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines listed"}</p>
        </div>
        
    );
}
export default RestaurantCart;