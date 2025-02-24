import Image from "next/image";

const HomeEventCard = ({ id, frontSrc, frontAlt, backText }) => {
  return (
    <div className="HomeEventCard" id={id}>
      <div className="cardWrapper">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <Image
              priority
              src={frontSrc}
              width={500}
              height={500}
              alt={frontAlt}
            />
          </div>
          <div className="flipCardBack">
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEventCard;
