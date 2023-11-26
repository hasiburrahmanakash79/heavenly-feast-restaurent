import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hook/useMenu";
import FoodDetailsCard from "../../../components/FoodDetailsCard/FoodDetailsCard";
import UseTitle from "../../../Hook/UseTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MenuCategory = () => {
  UseTitle('Shop')
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drink");
  return (
    <div className="my-10 text-center container mx-auto">
      <SectionTitle title={"All menu"} subTitle={"Search your favorite items"}></SectionTitle>
      <Tabs>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-4 gap-3">
            {salads.map((item) => (
              <FoodDetailsCard key={item._id} item={item}></FoodDetailsCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-3">
            {pizza.map((item) => (
              <FoodDetailsCard key={item._id} item={item}></FoodDetailsCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-3">
            {soups.map((item) => (
              <FoodDetailsCard key={item._id} item={item}></FoodDetailsCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-3">
            {desserts.map((item) => (
              <FoodDetailsCard key={item._id} item={item}></FoodDetailsCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuCategory;
