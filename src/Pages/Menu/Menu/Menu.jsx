import UseTitle from "../../../Hook/UseTitle";
import Desserts from "../Desserts/Desserts";
import MenuBanner from "../MenuBanner/MenuBanner";
import Pizza from "../Pizza/Pizza";
import TodayOffer from "../TodayOffer/TodayOffer";

const Menu = () => {
  UseTitle("Menu");
  return (
    <div>
      <MenuBanner></MenuBanner>
      <TodayOffer></TodayOffer>
      <Desserts></Desserts>
      <Pizza></Pizza>
    </div>
  );
};

export default Menu;
