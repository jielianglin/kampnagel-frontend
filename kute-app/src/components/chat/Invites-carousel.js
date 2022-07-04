import React from "react";
import Carousel from "react-multi-carousel";
import InvitesCard from "./Invites-card";
import Chip from '@mui/material/Chip';
import "react-multi-carousel/lib/styles.css";
import "./Invites-carousel.css";
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
            <div className="invites-carousel-header"><Chip label="Connect with Your Invites" variant="outlined" style={{ backgroundColor: '#FFFFFF' }} /></div>
            <Carousel
                slidesToSlide={3}
                responsive={responsive}
            >
                <div><InvitesCard /></div>
                <div><InvitesCard /></div>
                <div><InvitesCard /></div>
                <div><InvitesCard /></div>

            </Carousel>
        </div>
    );
}