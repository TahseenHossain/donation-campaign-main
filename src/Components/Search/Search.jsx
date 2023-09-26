import { useEffect, useState } from "react";
import Fund from "../Fund/Fund";
import { Link } from "react-router-dom";

const Search = () => {
  const [funds, setFunds] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("Donations.json")
      .then((res) => res.json())
      .then((data) => setFunds(data));
  }, []);

  const handleSearch = () => {
    const filteredResults = funds.filter((fund) =>
      fund.title.includes(searchTitle)
    );
    setSearchResult(filteredResults);
  };
  return (
    <div className="my-10">
      <input
        type="text"
        className="text-[#0b0b0b66] sm:w-2/3 md:w-1/2 lg:w-1/3 h-12 border border-[#DEDEDE] bg-[#FFF] rounded-l-md text-sm font-normal p-4 item-center"
        placeholder=" Search here...."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <Link>
        <button
          className="text-[#FFF] text-center text-sm font-semibold bg-[#FF444A] h-12 px-7 py-3 rounded-r-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-12 md:ml-0 lg:ml-0">
        {searchResult.map((fund) => (
          <Fund key={fund.id} fund={fund}></Fund>
        ))}
      </div>
    </div>
  );
};

export default Search;
