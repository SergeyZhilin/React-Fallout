// Modules
import { memo, useCallback, useState } from 'react';

// Images
import CloseIcon from '../../assets/img/close-icon.svg';

// Styles
import './SpecialModal.style.scss';

const initialSpecial = [
	{
		id: 'strength',
		label: 'Strength',
		value: 1
	},
	{
		id: 'perception',
		label: 'Perception',
		value: 1
	},
	{
		id: 'endurance',
		label: 'Endurance',
		value: 1
	},
	{
		id: 'charisma',
		label: 'Charisma',
		value: 1
	},
	{
		id: 'intelligence',
		label: 'Intelligence',
		value: 1
	},
	{
		id: 'agility',
		label: 'Agility',
		value: 1
	},
	{
		id: 'luck',
		label: 'Luck',
		value: 1
	},
]

const SpecialModal = () => {
	const [availablePoints, setAvailablePoints] = useState(40);
	const [special, setSpecial] = useState(initialSpecial);
	const [name, setName] = useState('');
	const modalState = false;

	const handleCloseModal = useCallback(() => {
		console.log('Close modal');
	}, [])

	const handleChangeName = useCallback((el) => {
		setName(el.target.value)
	}, []);

	// Increment function
	const handleIncrement = useCallback((id) => {
		if (availablePoints === 0) {
			return;
		}

		setSpecial(prevState => prevState.map((item) => {
			if (item.id === id) {
				return {
					...item,
					value: item.value + 1
				}
			}
			return item;
		}));

		setAvailablePoints(prevState => prevState - 1);
	}, [availablePoints])

	// Decrement function
	const handleDecrement = useCallback((id) => {
		setSpecial(prevState => prevState.map((item) => {
			if (item.id === id) {
				return {
					...item,
					value: item.value > 1 ? item.value - 1 : 1
				}
			}
			return item;
		}));

		setAvailablePoints(prevState => {
			const [currentAbility] = special.filter((item) => item.id === id);
			if (currentAbility.value === 1) {
				return prevState;
			}
			return prevState + 1;
		});
	}, [special])

	if (modalState) {
		return null;
	}

	return (
			<div className="special-modal">
				<div className="special-modal__overlay">
					<div className="special-modal__main-content">
						<div className="special-modal__header">
							<span className="label">Registration Form</span>
							<img
									alt="CloseIcon"
									className="close-modal"
									src={CloseIcon}
									onClick={handleCloseModal}
							/>
						</div>
						<div className="special-modal__body">
							<div className="special-modal__left">
								<div className="input-block">
									<label htmlFor="name">Name:</label>
									<input
											type="text"
											id="name"
											onChange={handleChangeName}
											value={name}
									/>
								</div>
								{special.map((item) => (
										<div key={item.id} className="input-block">
											<label>{item.label}:</label>
											<div className='input-controller'>
												<span
														className='decrement'
														onClick={() => handleDecrement(item.id)}
												/>
												<span className='special-value'>{item.value}</span>
												<span
														className='increment'
														onClick={() => handleIncrement(item.id)}
												/>
											</div>
										</div>
									))}
								<div className="available-points-block">
									<span>{availablePoints}</span>
									<span>Points Available</span>
								</div>
							</div>
							<div className="special-modal__right">

							</div>
						</div>
					</div>
				</div>
			</div>
	)
}

export default memo(SpecialModal);
