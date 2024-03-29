import React from "react";
import Carousel from "react-multi-carousel";
import ChatCard from "./Chat-card";
import "react-multi-carousel/lib/styles.css";
import Chip from '@mui/material/Chip';
import "./Chat-carousel.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function ChatCarousel() {

    return (
        <div>
            <div className="chat-carousel-header"><Chip label="Chat with a Buddy" variant="outlined" style={{ backgroundColor: '#FFFFFF' }} /></div>
            <Carousel
                slidesToSlide={3}
                responsive={responsive}
            >
                <div><ChatCard /></div>
                <div><ChatCard /></div>
                <div><ChatCard /></div>
                <div><ChatCard /></div>

            </Carousel>
        </div>);
}
