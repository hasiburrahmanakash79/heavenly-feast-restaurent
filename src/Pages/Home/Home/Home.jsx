import UseTitle from "../../../Hook/UseTitle";
import Banner from "../Banner/Banner";
import FavoriteMenu from "../FavoriteMenu/FavoriteMenu";
import Feature from "../Feature/Feature";
import OnlineService from "../OnlineService/OnlineService";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner> 
            <OnlineService></OnlineService>  
            <FavoriteMenu></FavoriteMenu>
            <Feature></Feature>    
            <Reviews></Reviews>    
        </div>
    );
};

export default Home;