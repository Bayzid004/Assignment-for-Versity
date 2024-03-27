import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="flex">
        <div className="my-8">
          <h1 className="text-3xl lg:text-6xl font-bold lg:w-[700px] items-center mt-20 lg: ml-6 lg:ml-52">
            Books To Freshen Up Your BookShelf
          </h1>
          <Link
            to={"/listed"}
            className="btn hover:bg-green-700 mt-6 ml-6 px-6 lg:ml-56 bg-green-500 border-none text-white text-xl font-bold"
          >
            View The List
          </Link>
        </div>
        <img
          className="bg-cover lg:ml-10"
          src="https://i.ibb.co/pQQ9348/Book1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
