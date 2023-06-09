import UseTitle from "../../../Hook/UseTitle";
import Desserts from "../Desserts/Desserts";
import MenuBanner from "../MenuBanner/MenuBanner";
import Pizza from "../Pizza/Pizza";
import Salad from "../Salad/Salad";
import Soups from "../Soups/Soups";
import TodayOffer from "../TodayOffer/TodayOffer";

const Menu = () => {
  UseTitle("Menu");
  return (
    <div>
      <MenuBanner></MenuBanner>
      <TodayOffer></TodayOffer>
      <Desserts></Desserts>
      <Pizza></Pizza>
      <Salad></Salad>
      <Soups></Soups>
    </div>
  );
};

export default Menu;
