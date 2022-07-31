//Modules
import { useEffect, useRef, useState } from 'react';

// Images
import Slide1 from '../../assets/img/slide-1.jpeg';
import Slide2 from '../../assets/img/slide-2.jpeg';
import Slide3 from '../../assets/img/slide-3.jpeg';

//Styles
import './SlideShow.styles.scss';

// Constants
const slides = [
	{
		id: 'slide-1',
		link: Slide1,
	},
	{
		id: 'slide-2',
		link: Slide2,
	},
	{
		id: 'slide-3',
		link: Slide3,
	},
];
const delay = 3000;

const SlideShow = () => {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
				() =>
						setIndex((prevIndex) =>
								prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
						),
				delay,
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
			<div className="slideshow">
				<div
						className="slideshowSlider"
						style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
				>
					{slides.map((slide) => (
									<img key={slide.id} src={slide.link} alt={slide.id}/>
							),
					)}
				</div>
			</div>
	);
};

export default SlideShow;