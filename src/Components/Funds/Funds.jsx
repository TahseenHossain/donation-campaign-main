import { useEffect, useState } from "react";
import Fund from "../Fund/Fund";

const Funds = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch("Donations.json")
      .then((res) => res.json())
      .then((data) => setFunds(data));
  }, []);
  
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-12 md:ml-0 lg:ml-0">
        {funds.map((fund) => (
          <Fund key={fund.id} fund={fund}></Fund>
        ))}
      </div>
    </div>
  );
};

export default Funds;
