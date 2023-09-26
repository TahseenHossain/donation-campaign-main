import { Link } from "react-router-dom";

const Donation = ({ donatedCharity }) => {
    const {
        id,
        picture,
        category,
        title,
        button_color,
        text_color,
        category_color,
        price,
    } = donatedCharity;

    const buttonColor = {
        backgroundColor: button_color,
        color: text_color,
    };
    const priceColor = {
        color: text_color,
    };
    const bgColor = {
        backgroundColor: text_color,
    };

    const categoryColor = {
        backgroundColor: category_color,
        color: text_color,
    };

    return (
        <div className="flex">
            <figure>
                <img src={picture} alt="" className="w-56 h-48 rounded-l-lg" />
            </figure>
            <div className="w-80 lg:w-[684px] h-48 rounded-r-lg" style={categoryColor}>
                <button
                    className="rounded-lg ml-4 p-1 w-20 h-6 text-xs font-semibold mt-4"
                    style={buttonColor}
                >
                    {category}
                </button>
                <div>
                    <h3 className="ml-4 text-2xl font-semibold">{title}</h3>
                    <h3 className="ml-4 text-xl font-semibold" style={priceColor}>
                        ${price}
                    </h3>
                    <Link to = {`/fund/${id}`} >
                        <button
                            className="text-white p-2 text-center w-36 h-10 rounded text-lg font-semibold m-4"
                            style={bgColor}
                        >
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Donation;
