import "./testimonials.css";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
    name: "Sarah Johnson",
    role: "Parent",
    text: "My son absolutely loved the summer camp. The coaches were amazing and the activities kept him engaged every day.",
    },
    {
    name: "Michael Brown",
    role: "Parent",
    text: "A perfect balance of sports, learning and fun. We will definitely register again next year.",
    },
    {
    name: "Emily Davis",
    role: "Parent",
    text: "The confidence my daughter gained during the camp was incredible. Highly recommended!",
    },
    {
    name: "Rahul Sharma",
    role: "Parent",
    text: "Excellent coaching and a very safe environment.",
    },
    {
    name: "Priya Reddy",
    role: "Parent",
    text: "My daughter made friends and learned new skills.",
    },
    {
    name: "Anil Kumar",
    role: "Parent",
    text: "The coaches are supportive and highly professional.",
    },
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
    setCurrentIndex((prev) =>
        prev >= testimonials.length - 3 ? 0 : prev + 1
    );
    }, 1000);

    return () => clearInterval(interval);
}, []);


    const nextSlide = () => {
    if (currentIndex < testimonials.length - 3) {
        setCurrentIndex(currentIndex + 1);
    }
    };

    const prevSlide = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
    };

    return (
    <section className="testimonials-section" id="testimonials">

    <div className="testimonials-title">
        <span>TESTIMONIALS</span>
        <h2>What Parents Say About Us</h2>
        <p>
        Real experiences from families who joined
        the Fortius Summer Camp.
        </p>
    </div>

    <div className="testimonial-slider">

        <button className="slider-btn" onClick={prevSlide}>
        <FaChevronLeft />
        </button>

        <div className="testimonial-track">
            <div className="testimonial-wrapper" style={{
                transform: `translateX(calc(-${currentIndex} * (33.333% + 20px)))`}}>
    {testimonials.map((item, index) => (

    <div className="testimonial-card" key={index}>

                <div className="quote-icon">❝</div>

                <div className="stars">
                ⭐⭐⭐⭐⭐
                </div>

                <p className="review">
                {item.text}
                </p>

                <div className="avatar">
                {item.name.charAt(0)}
                </div>

                <div className="person">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
                </div>

            </div>
            ))}
        </div>
        </div>

        <button
        className="slider-btn"
        onClick={nextSlide}
        >
        <FaChevronRight />
        </button>

    </div>

    </section>
        );
}

export default Testimonials;