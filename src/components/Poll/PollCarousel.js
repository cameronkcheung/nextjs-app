'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

import { PollDetailCard } from "./PollDetailCard";
import { PollDetailCardSkeleton } from "./PollDetailCardSkeleton";

SwiperCore.use([Autoplay]);

export const PollCarousel = ({ polls, loading = false, delayMilliseconds = 5000, slidesPerView = "auto" }) => {
	return (
		<>
			{!loading ? (
				<Swiper
					loop={true}
					slidesPerView={slidesPerView}
					autoplay={{
						delay: delayMilliseconds,
						disableOnInteraction: true,
					}}
					speed={1000}
					centeredSlides={true}
					className="[&>*]:flex [&>*]:items-center">
					{polls?.map((poll) => {
						return (
							<SwiperSlide key={poll.id}>
								<div className="flex items-center justify-center">
									<div className="max-w-7xl w-full">
										<PollDetailCard
										poll={poll}
										descriptionClassName={"line-clamp-2"}
										className={"mx-2 sm:mx-6 lg:mx-8"} />
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : (
				<div className="flex items-center justify-center">
					<div className="max-w-7xl w-full">
						<PollDetailCardSkeleton className={"mx-2 sm:mx-6 lg:mx-8"}/>
					</div>
				</div>
			)}
		</>
	);
};
