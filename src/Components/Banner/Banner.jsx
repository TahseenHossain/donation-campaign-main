import Search from "../Search/Search";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[600px] lg:w-screen lg:m-[-130px] object-cover "
      style={{
        backgroundImage: "url(https://i.ibb.co/kxWF4qM/Untitled.png)",
      }}
    >
      <div className="text-center mb-10">
        <h3 className="text-5xl font-bold pt-32">I Grow By Helping People In Need</h3>
        <Search></Search>
      </div>
    </div>
  );
};

export default Banner;
