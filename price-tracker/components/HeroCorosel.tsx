"use client"


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImage = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
    { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },

]
const HeroCorosel = () => {
    return (
        <div className="hero-carousel">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={false}
                showStatus={false}>
                {heroImage.map((hero) => (
                    <div>
                        <Image
                            src={hero.imgUrl}
                            alt={hero.alt}
                            height={484}
                            width={484}
                            className="object-contain"
                            key={hero.alt}
                        />
                    </div>
                ))}

            </Carousel>
            <Image
                src="/assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
                width={175}
                height={175}
                className="max-xl:hidden absolute -leftl-[15%] bottom-0 z-0"

            />
        </div>
    )
}

export default HeroCorosel