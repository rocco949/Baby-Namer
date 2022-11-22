/*jshint esversion: 6 */

const boy_names = 
["Harry", "Puggy", "Zane", "Galby", "Rex", "Tex", "Siv", "Charles", "Tony", 
];

function boyChange() {
	let first_math = Math.floor(Math.random() * (boy_names.length + 1));
	let name = document.getElementById(first_name);
	let used = [];
	name.innerHTML = boy_names[first_math];
	used += boy_names[first_math];
	console.log(used);

}
