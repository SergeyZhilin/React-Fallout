// Modules
import { atom } from 'recoil';

const specialModalState = atom({
	default: false,
	key: 'specialModal',
});

export default specialModalState;