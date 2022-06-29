import React from "react";
import Carousel from "react-multi-carousel";
import InvitesCard from "./Invites-card";
import "react-multi-carousel/lib/styles.css";

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
        <Carousel
            slidesToSlide={3}
            responsive={responsive}
        >
            <div><InvitesCard /></div>
            <div><InvitesCard /></div>
            <div><InvitesCard /></div>
            <div><InvitesCard /></div>

        </Carousel>);
}