import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Menu from "../Menu/Menu";
import OnlineService from "../OnlineService/OnlineService";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <OnlineService></OnlineService>  
            <Menu></Menu>
            <Feature></Feature>        
        </div>
    );
};

export default Home;