import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.png";

function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      avatar: user1,
      userName: "Виктор Ия",
      city: "Тайланд",
      rating: "4.6",
      text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
      id: 2,
      avatar: user2,
      userName: "Yessica Christy",
      city: "Shanxi, China",
      rating: "4.8",
      text: " “I like it because I like to travel far and still can connect with high speed.”.",
    },
    {
      id: 3,
      avatar: user3,
      userName: "Kim Young Jou",
      city: "Seoul, South Korea",
      rating: "4.9",
      text: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    },
  ];
  return (
    <>
      <section>
        <div className="testimonials">
          <div className="testimonials-table">
            <h1>
              Trusted by Thousands of <br /> Happy Customer
            </h1>
            <p>
              These are the stories of our customers who have joined us with
              great <br /> pleasure when using this crazy feature.
            </p>
          </div>
          <div className="testimonial-cards">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                infoTestimonial={testimonial}
              />
            ))}
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
