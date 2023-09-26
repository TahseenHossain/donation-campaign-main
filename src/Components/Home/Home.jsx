import Banner from "../Banner/Banner";
import Funds from "../Funds/Funds";

const Home = () => {

    return (
        <div>
            <div className="lg:mb-72 md:mb-20 mb-12">
                <Banner></Banner>
            </div>
            <div>
            <Funds></Funds>
            </div>
        </div>
    );
};

export default Home;