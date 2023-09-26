import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonated } from "../../Utility/LocalStorage";

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const detail = details.find((detail) => detail.id == idInt);
  console.log(detail);
  const buttonColor = {
    backgroundColor: detail.text_color,
  };

  const handleAddToDonated = () => {
    saveDonated(idInt);
    toast("Successful");
  };
  
  return (
    <div className="mt-20 lg-[700px] ">
      <div className="relative">
        <img
          src={detail.picture}
          alt=""
          className="w-screen rounded-lg lg:[500px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[#0b0b0bb3] ">
          <button
            onClick={handleAddToDonated}
            className="text-white p-2 text-center w-44 h-14 rounded text-lg font-semibold m-9"
            style={buttonColor}
          >
            Donate ${detail.price}
          </button>
        </div>
      </div>
      <h3 className="text-4xl mt-14 font-bold mb-6">{detail.title}</h3>
      <p className="text-[#0b0b0bb3] mb-6 text-xl">{detail.description}</p>
      <ToastContainer />
    </div>
  );
};

export default Details;
