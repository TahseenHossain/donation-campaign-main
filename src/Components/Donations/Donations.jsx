import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonated } from "../../Utility/LocalStorage";
import Donation from "../Donation/Donation";

const Donations = () => {
  const donated = useLoaderData();
  const [donatedCharitys, setDonatedCharitys] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  
  useEffect(() => {
    const storedDonatedIds = getDonated();
    if (donated.length > 0) {
      const alreadyDonated = donated.filter((donation) =>
        storedDonatedIds.includes(donation.id)
      );
      console.log(alreadyDonated.length);
      setDonatedCharitys(alreadyDonated);
    }
  }, []);


  
  return (
    <div className="mt-20">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ml-2 md:ml-16 lg:ml-12 md:ml-0 lg:ml-0">
        {donatedCharitys.slice(0, dataLength).map((donatedCharity) => (
          <Donation
            key={donatedCharity.id}
            donatedCharity={donatedCharity}
          ></Donation>
        ))}
      </div>
      <div className={ dataLength === donatedCharitys.length || donatedCharitys.length < 4 ? 'hidden' : ''}>
        <div className=" flex justify-center">
          <button
            onClick={() => setDataLength(donatedCharitys.length)}
            className="rounded-lg ml-4 p-1 w-28 h-12 text-xs font-semibold mt-4 bg-[#009444] text-white"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donations;
