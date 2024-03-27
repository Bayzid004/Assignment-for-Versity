import { parse } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { detailsId } = useParams();
  const id = parseInt(detailsId);
  const detail = details.find((detail) => detail.bookId === id);
  return (
    <div className="container mx-auto grid grid-cols-2 mt-8">
      <div>
        <img
          className="lg:ml-40 w-[320px] h-[400px]"
          src={detail.image}
          alt=""
        />
      </div>
      <div>
        <p className="text-4xl font-bold">{detail.bookName}</p>
        <p className="text-xl font-medium">By: {detail.author}</p>
        <div className="border border-gray-300"></div>
        <p>{detail.category}</p>
        <div className="border border-gray-300"></div>
        <p>
          <span className="font-medium">Review: </span>
          {detail.review}
        </p>
        <div className="flex space-x-4">
          <p>Tag:</p>
          <p className="text-green-600 font-medium">#{detail.tags[0]}</p>
          <p className="text-green-600 font-medium">#{detail.tags[1]}</p>
        </div>
        <div className="border border-gray-300"></div>
        <div className="lg:w-96">
          <p className="flex justify-between">
            Number of page: <span>{detail.totalPages}</span>
          </p>
          <p className="flex justify-between">
            Publisher: <span>{detail.publisher}</span>
          </p>
          <p className="flex justify-between">
            Year of Published:
            <span>{detail.yearOfPublishing}</span>
          </p>
          <p className="flex justify-between">
            Rating: <span>{detail.rating}</span>
          </p>
        </div>
        <div>
          <button>Read</button>
          <button>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
