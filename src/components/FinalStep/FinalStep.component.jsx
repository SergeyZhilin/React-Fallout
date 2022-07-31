// Styles
import './FinalStep.styles.scss';

// Images
import FinalPicture from '../../assets/img/final.png'

const FinalStep = () => {
	return (
			<div className='final'>
				<img src={FinalPicture} alt="FinalPicture"/>
				<p>
					Additional parameters and basic characteristics were sent for processing.
					But unfortunately further functionality is not provided and will be
					implemented in the next patch.
				</p>
				<p>Responsibility for tablet and mobile, will be added in the next patch.</p>
				<p>Thank you for staying with us.</p>
				<p>Regards "No Name" Company</p>
			</div>
	)
}

export default FinalStep;