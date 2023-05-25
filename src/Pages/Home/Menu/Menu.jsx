import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from 'react';
import SingleMenu from "./SingleMenu";

const Menu = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(menu => menu.category === 'popular')
            setFoods(popularMenu)
            console.log(popularMenu);
        })
    },[])

    return (
        <section>
            <SectionTitle
                title={"From Our Menu"}
                subTitle={"Check it out"}
            >
            </SectionTitle>
            <div className="md:grid grid-cols-2 gap-5 my-5 px-2">
                {foods.map(food => <SingleMenu key={food._id} food={food}></SingleMenu>)}
            </div>
        </section>
    );
};

export default Menu;