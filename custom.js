const boy_names = ["Harry", "Puggy", "Zane", "Galby", "Rex", "Tex", "Siv"]


function changer() {
	let first_math = Math.floor(Math.random() * (boy_names.length + 1))
	
	let names = [document.getElementById(boy), document.getElementById(girl)]

	names[0].innerHTML = boy_names[firstN];
	names[1].innerHTML = possible_last_names[lastN]; 
		
}
