// Modules
import { memo, useCallback } from 'react';
import { useRecoilState } from 'recoil';

// State
import specialModalState from '../../state/specialModal';

// Images
import Special from '../../assets/img/special.png';

// Styles
import './Main.styles.scss';

const MainPageContainer = () => {
	const [isOpen, setIsOpen] = useRecoilState(specialModalState);

	const handleModalOpen = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen, setIsOpen]);

	return (
			<div className="main-page">
				<h1>Welcome to the world of Fallout. </h1>
				<button
						className='lets-start'
						onClick={handleModalOpen}
				>
					Let's create your character.
				</button>
				<div className="main-page__special-block">
					<img className='special' src={Special} alt="Special"/>
				</div>
			</div>
	);
};

export default memo(MainPageContainer);
