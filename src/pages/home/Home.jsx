import { useLoaderData } from "react-router-dom";
import Banner from "../../components/header/Banner";
import Tags from "../../components/header/Tags";
import Follow from "./homeComponents/Follow";
import PopularCoffee from "./homeComponents/PopularCoffee";


const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Tags></Tags>
            <PopularCoffee coffees={coffees}></PopularCoffee>
            <Follow></Follow>
        </div>
    );
};

export default Home;