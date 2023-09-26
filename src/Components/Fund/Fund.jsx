import { Link } from "react-router-dom";

const Fund = ({ fund }) => {
    const { id, picture, category, title, button_color, text_color, category_color } = fund;
    const buttonColor = {
        backgroundColor: button_color,
        color: text_color,
    };
    const categoryColor = {
        backgroundColor: category_color,
        color: text_color,
    };

    return (
        <Link to= {`/fund/${id}`}>
            <div className="card card-compact w-80 h-72 bg-base-100 rounded-lg" style={categoryColor}>
                <figure>
                    <img src={picture} alt="" className="w-80 h-48" />
                </figure>
                <button className="rounded-lg ml-4 p-1 w-20 h-6 text-xs font-semibold mt-4" style={buttonColor}>{category}</button>
                <div >
                    <h3 className="ml-4" >{title}</h3>
                </div>
            </div>
        </Link>

    );
};

export default Fund;
