import Nav from "./models/Nav.js";

import * as navPrimaryView from "./views/navPrimaryView.js";
import * as navSecondaryView from "./views/navSecondaryView.js";
import * as listView from "./views/listView.js";
import * as navTitles from "./models/config.js";

// console.log(navTitles.menus.warpstogram.Edit[2]); // TEST
// console.log(navTitles.navSecondaryTitles.audioTools[2]); // TEST

import {
	elements
} from "./views/base.js";

/**
 * STARTUP INIT
 */
const init = () => {
	// navSecondaryView.updateTitles('nav_A_0');
	// navSecondaryView.highlightSelected();
};
init();

const state = {};
state.nav = new Nav();


let nav_A_active = "nav_A_0";


/**
 * NAV PRIMARY CONTROLLER
 */
elements.nav_A.addEventListener("click", e => {
	// GETS CLICK EVENT TARGET
	const target = e.target;
	const id = target.id;
	nav_A_active = id;
	// console.log(id);

	if (id) {
		state.nav.updateActiveNav_A(id);
		navSecondaryView.updateTitles(id); // updateTitles NEEDS WORK
		// changeNavB_listener(id);
	}

	// 	CLEARS ACTIVE AND ADDS IT TO SELECTED TAB
	navPrimaryView.clearActive();
	navPrimaryView.highlightSelected(id);

	navSecondaryView.clearActive();

	const nav_B_actives = state.nav.nav_B[nav_A_active];
	
	
	for (var key in nav_B_actives) {
		if (nav_B_actives.hasOwnProperty(key) && nav_B_actives[key] === true) {
			// console.log(key + " is " + nav_B_actives[key]);
			navSecondaryView.highlightSelected("add", key);
		}
	}
});

// const changeNavB_listener = (id) => {
// 	if (id.includes('0')) {
// 		// console.log('its 0');
// 		nav_B_active = elements.nav_B0;
// 		// console.log(nav_B_active);
// 		return nav_B_active;
// 	} else if (id.includes('1')) {
// 		nav_B_active = elements.nav_B1;
// 		// console.log('its 1');
// 		// console.log(nav_B_active);
// 		return nav_B_active;
// 	} else if (id.includes('2')) {
// 		nav_B_active = elements.nav_B2;
// 		// console.log('its 2');
// 		// console.log(nav_B_active);
// 		return nav_B_active;
// 	} else if (id.includes('3')) {
// 		nav_B_active = elements.nav_B3;

// 		// console.log('its 3');
// 		// console.log(nav_B_active);
		
// 		return nav_B_active;
// 	}
// 	console.log(nav_B_active + ' is now active');
// 	}

/**
 * NAV SECONDARY CONTROLLER
 */
// let nav_B_active = elements.nav_B2;
// console.log(nav_B_active);


elements.nav_B0.addEventListener('click', e => {
	nav_B_sequence(e);
});
elements.nav_B1.addEventListener('click', e => {
	nav_B_sequence(e);
});
elements.nav_B2.addEventListener('click', e => {
	nav_B_sequence(e);
});
elements.nav_B3.addEventListener("click", e => {
	nav_B_sequence(e);
});

const nav_B_sequence = (e) => {

	const target = e.target;
	const id = target.id;
	const subString = "e";
	console.log(id);

	navSecondaryView.clearActive();

	const containsSubString = navSecondaryView.checkForSubstring(
		target,
		subString
	);
	if (containsSubString === false) {
		navSecondaryView.highlightSelected("add", id);
		state.nav.updateActiveNav_B(nav_A_active, id);
	} else if (containsSubString === true) {
		navSecondaryView.highlightSelected("remove", id);
	}
}

/**
 * LIST CONTROLLER
 */

document.querySelector(".test_add_item").addEventListener("click", e => {
	listView.renderItem();
	// console.log(nav_B_active);
	
});