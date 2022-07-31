import Agility from '../assets/img/special/agility.png';
import Charisma from '../assets/img/special/charisma.png';
import Endurance from '../assets/img/special/endurance.png';
import Intelligence from '../assets/img/special/intelligence.png';
import Luck from '../assets/img/special/luck.png';
import Perception from '../assets/img/special/perception.png';
import Strength from '../assets/img/special/strength.png';
import Default from '../assets/img/special/default.png';

export const initialSpecial = [
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
export const points = 40;
export const specialData = {
	strength: {
		img: Strength,
		desc: `Strength is primarily relevant to two in-game mechanics: Carry Weight 
		and satisfying the minimum Strength requirements on weapons. Each point of 
		it grants 25 lbs. of Carry Weight (with the Small Frame trait, it is 15 instead). 
		Not meeting a weapon's minimum Strength requirement penalizes aim accuracy 
		with that weapon by -20% for each missing point in Strength.`
	},
	perception: {
		img: Perception,
		desc: `A player character with higher Perception may notice things that allow 
		them to open up new dialogue options on occasion. It also determines how far 
		away they start from hostilities in random encounters. A combination of the 
		Traps skill and Perception is used to detect traps on the ground.`
	},
	endurance: {
		img: Endurance,
		desc: `Endurance determines a character's environmental resistances (poison, 
		radiation), Hit Points, and Healing Rate, as well as the starting levels of 
		the Unarmed and Survival skills. It also determines the number of implants allowed.`
	},
	charisma: {
		img: Charisma,
		desc: `Charisma also determines the number of base companion slots the player 
		character is given. This number is equal to their Charisma score divided by 
		two, rounded down. As an example, with a Charisma at five, two can be recruited. 
		Please note that one companion can still be recruited (in a few cases) even 
		with the lowest Charisma score.`
	},
	intelligence: {
		img: Intelligence,
		desc: `With a dimwitted player character, many non-player characters will 
		simply shrug one off, while others will insult or even attack them. On the 
		other hand, certain characters will take pity on the character's stumped 
		intellect, and might treat them as innocent children. In some cases, where 
		a character with normal vocabulary would need to persuade them or offer a 
		service in exchange, these characters will often give the character gifts 
		or allow them entrance in certain areas for free out of pity.`
	},
	agility: {
		img: Agility,
		desc: `Action point allocation is based on the AG stat. Therefore, a 
		character that wishes to keep an enemy on its toes, or claws, needs to have 
		a high Agility in order to have multiple combat moves. Additionally, it 
		allows the character to dodge better. It is a critical stat for anyone 
		interested in more mobile and visceral skills, such as unarmed and small 
		guns. Other skills rely on it, but these have higher values in AG investment.`
	},
	luck: {
		img: Luck,
		desc: `In Fallout, Luck primarily affects the chances with the virtual dice 
		of the game: a high Luck increases the likelihood to succeed a roll, while 
		the opposite is also true. Luck also affects the chance to score a critical 
		hit on a target, with the standard being that the Critical Chance is equal 
		to the subject's Luck (keep in mind, standard means without perks, traits, 
		or aimed shots). It also determines the initial level of the Gambling skill.`
	},
	default : {
		img: Default,
		desc: `Tell us about yourself! Vault-Tec needs to know what kind of citizen
		you are to ensure your future happiness`
	}
}