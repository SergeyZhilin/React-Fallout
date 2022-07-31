// Images
import Special from '../../assets/img/special.png';
// Styles
import './Main.styles.scss';

const MainPageContainer = () => {
	return (
			<div className="main-page">
				<h1>Welcome to the world of Fallout. </h1>
				<button
						className='lets-start'
						onClick={() => console.log('open  modal')}
				>
					Let's create your character.
				</button>
				<div className="main-page__special-block">
					<img className='special' src={Special} alt="Special"/>
				</div>
			</div>
	);
};

export default MainPageContainer;
