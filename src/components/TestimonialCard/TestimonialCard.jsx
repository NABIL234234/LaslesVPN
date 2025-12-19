import "./TestimonialCard.css";
import star from "../../assets/star.png";

function TestimonialCard({ infoTestimonial }) {
  const { avatar, userName, city, rating, text } = infoTestimonial;

  return (
    <>
      <div className={`testimonial-card`}>
        <div className="testimonial-wrapper">
          <img src={avatar} alt="userLogo" />

          <div className="testimonial-name">
            <div className="testimonial-name-city">
              <span>{userName}</span>
              <p>{city}</p>
            </div>
            <div className="rating">
              <span>{rating}</span>
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
        <div className="testimonial-card-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
