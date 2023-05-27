import UseTitle from "../../../Hook/UseTitle";
import MenuBanner from "../MenuBanner/MenuBanner";
import TodayOffer from "../TodayOffer/TodayOffer";

const Menu = () => {
  UseTitle("Menu");
  return (
    <div>
      <MenuBanner></MenuBanner>
      <TodayOffer></TodayOffer>
    </div>
  );
};

export default Menu;
