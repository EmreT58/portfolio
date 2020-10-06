//rekentool Javascript

// elke combinatie 1 voor 1 uitgerekent
function bereken(){
	var voertuig = document.getElementById('soortles').value;
	var lessen = document.getElementById('aantal').value;
	var theorie = document.getElementById('examens').value;
	if (voertuig=='auto'&&theorie=='niet'&&lessen==1) {
		document.getElementById('prijs').innerHTML = '50 euro';
	}else if(voertuig=='motor'&&theorie=='niet'&&lessen==1){
		document.getElementById('prijs').innerHTML = '40 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='niet'&&lessen==1){
		document.getElementById('prijs').innerHTML = '72,60 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='los'&&lessen==1){
		document.getElementById('prijs').innerHTML = '180 euro';
	}else if (voertuig=='motor'&&theorie=='los'&&lessen==1) {
		document.getElementById('prijs').innerHTML = '70 euro';
	}else if(voertuig=='auto'&&theorie=='los'&&lessen==1){
		document.getElementById('prijs').innerHTML = '90 euro';
	}else if (voertuig=='auto'&&theorie=='icm examen'&&lessen==1) {
		document.getElementById('prijs').innerHTML = '120 euro';
	}else if (voertuig=='motor'&&theorie=='icm examen'&&lessen==1) {
		document.getElementById('prijs').innerHTML = '100 euro';
	}else if (voertuig=='vrachtwagen'&&theorie=='icm examen'&&lessen==1) {
		document.getElementById('prijs').innerHTML = '210 euro';
	
	}else if (voertuig=='auto'&&theorie=='niet'&&lessen==10) {
		document.getElementById('prijs').innerHTML = '475 euro';
	}else if(voertuig=='motor'&&theorie=='niet'&&lessen==10){
		document.getElementById('prijs').innerHTML = '380 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='niet'&&lessen==10){
		document.getElementById('prijs').innerHTML = '689.70 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='los'&&lessen==10){
		document.getElementById('prijs').innerHTML = '1710 euro';
	}else if (voertuig=='motor'&&theorie=='los'&&lessen==10) {
		document.getElementById('prijs').innerHTML = '635 euro';
	}else if(voertuig=='auto'&&theorie=='los'&&lessen==10){
		document.getElementById('prijs').innerHTML = '855 euro';
	}else if (voertuig=='auto'&&theorie=='icm examen'&&lessen==10) {
		document.getElementById('prijs').innerHTML = '1140 euro';
	}else if (voertuig=='motor'&&theorie=='icm examen'&&lessen==10) {
		document.getElementById('prijs').innerHTML = '950 euro';
	}else if (voertuig=='vrachtwagen'&&theorie=='icm examen'&&lessen==10) {
		document.getElementById('prijs').innerHTML = '1995 euro';
	
	}else if (voertuig=='auto'&&theorie=='niet'&&lessen==20) {
		document.getElementById('prijs').innerHTML = '910 euro';
	}else if(voertuig=='motor'&&theorie=='niet'&&lessen==20){
		document.getElementById('prijs').innerHTML = '728 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='niet'&&lessen==20){
		document.getElementById('prijs').innerHTML = '1321.32 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='los'&&lessen==20){
		document.getElementById('prijs').innerHTML = '3276 euro';
	}else if (voertuig=='motor'&&theorie=='los'&&lessen==20) {
		document.getElementById('prijs').innerHTML = '1274 euro';
	}else if(voertuig=='auto'&&theorie=='los'&&lessen==20){
		document.getElementById('prijs').innerHTML = '1638 euro';
	}else if (voertuig=='auto'&&theorie=='icm examen'&&lessen==20) {
		document.getElementById('prijs').innerHTML = '2184 euro';
	}else if (voertuig=='motor'&&theorie=='icm examen'&&lessen==20) {
		document.getElementById('prijs').innerHTML = '1820 euro';
	}else if (voertuig=='vrachtwagen'&&theorie=='icm examen'&&lessen==20) {
		document.getElementById('prijs').innerHTML = '3822 euro';

	}if (voertuig=='auto'&&theorie=='niet'&&lessen==50) {
		document.getElementById('prijs').innerHTML = '2125 euro';
	}else if(voertuig=='motor'&&theorie=='niet'&&lessen==50){
		document.getElementById('prijs').innerHTML = '1700 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='niet'&&lessen==50){
		document.getElementById('prijs').innerHTML = '3085.50 euro';
	}else if(voertuig=='vrachtwagen'&&theorie=='los'&&lessen==50){
		document.getElementById('prijs').innerHTML = '7650 euro';
	}else if (voertuig=='motor'&&theorie=='los'&&lessen==50) {
		document.getElementById('prijs').innerHTML = '2975 euro';
	}else if(voertuig=='auto'&&theorie=='los'&&lessen==50){
		document.getElementById('prijs').innerHTML = '3825 euro';
	}else if (voertuig=='auto'&&theorie=='icm examen'&&lessen==50) {
		document.getElementById('prijs').innerHTML = '5100 euro';
	}else if (voertuig=='motor'&&theorie=='icm examen'&&lessen==50) {
		document.getElementById('prijs').innerHTML = '4250 euro';
	}else if (voertuig=='vrachtwagen'&&theorie=='icm examen'&&lessen==50) {
		document.getElementById('prijs').innerHTML = '8925 euro';
	}else {

	}
}