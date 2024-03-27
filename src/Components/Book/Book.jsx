import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, category, tags, bookName, author, rating } = book;
  return (
    <Link to={`/details/${bookId}`}>
      <div className="border border-gray-300 p-4 mt-2 rounded-2xl">
        <img className="w-[125px] h-[180px] ml-32" src={image} alt="" />
        <div className="space-x-6 flex text-green-500 font-bold text-xl ml-6 mt-4">
          <p>{tags[0]}</p>
          <p>{tags[1]}</p>
        </div>
        <p className="text-3xl mt-4 font-bold">{bookName}</p>
        <p className="font-medium mt-4">By: {author}</p>
        <div className="flex justify-between mt-4">
          <p className="font-medium">{category}</p>
          <div className="flex">
            <p className="font-medium">{rating}</p>
            <div className="rating w-4">
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
