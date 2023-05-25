import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Menu from "../Menu/Menu";
import OnlineService from "../OnlineService/OnlineService";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <OnlineService></OnlineService>  
            <Menu></Menu>
            <Feature></Feature>    
            <Reviews></Reviews>    
        </div>
    );
};

export default Home;