import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; 

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.round(rating);  
  const emptyStars = 5 - fullStars;     

  return (
    <div className="flex gap-[0.15rem]">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <AiFillStar key={`full-${index}`} className="w-5 h-5 text-yellow-400" />
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <AiOutlineStar key={`empty-${index}`} className="w-5 h-5 text-gray-300" />
        ))}
    </div>
  );
};

export default RatingStars;
