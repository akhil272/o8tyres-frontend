import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
}

const UserRating = ({ rating }: RatingProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Star className="fill-black" key={i} />);
    } else {
      stars.push(<Star key={i} />);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default UserRating;
