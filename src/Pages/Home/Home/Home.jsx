import UseTitle from "../../../Hook/UseTitle";
import Banner from "../Banner/Banner";
import FavoriteMenu from "../FavoriteMenu/FavoriteMenu";
import Feature from "../Feature/Feature";
import OnlineService from "../OnlineService/OnlineService";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <OnlineService></OnlineService>
        <FavoriteMenu></FavoriteMenu>
        <Reviews></Reviews>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Home;
