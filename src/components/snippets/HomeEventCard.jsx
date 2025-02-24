import Image from "next/image";
import { forwardRef } from "react";

const HomeEventCard = forwardRef(
  ({ id, frontSrc, frontAlt, backText }, ref) => {
    return (
      <div className="HomeEventCard" id={id} ref={ref}>
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
  }
);

export default HomeEventCard;
