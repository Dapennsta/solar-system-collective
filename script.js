// setup orbits based on user input
var earth_orbit = 30;

// ratio of desired orbit length 
var ratio = 365/earth_orbit;

// corrisponding orbits using earths ratio
var moon_orbit = 27/ratio
var mars_orbit = 687/ratio;
var mercury_orbit = 88/ratio;
var venus_orbit = 225/ratio;
var jupiter_orbit = 4332.59/ratio;


$(document).ready(function() {
	$('body').css("overflow-x", "hidden");
	
	// orbits setup
	$('#earth-orbit').css("animation", "spin-right " + String(earth_orbit) + "s linear infinite");
	$('#moon-orbit').css("animation", "spin-right " + String(moon_orbit) + "s linear infinite");
	$('#mars-orbit').css("animation", "spin-right " + String(mars_orbit) + "s linear infinite");
	$('#mercury-orbit').css("animation", "spin-right " + String(mercury_orbit) + "s linear infinite");
	$('#venus-orbit').css("animation", "spin-right " + String(venus_orbit) + "s linear infinite");
	$('#jupiter-orbit').css("animation", "spin-right " + String(jupiter_orbit) + "s linear infinite");

	// setup planets counter-turn
	$('#mercury').css("animation", "spin-left " + String(mercury_orbit) + "s linear infinite");
	$('#venus').css("animation", "spin-left " + String(venus_orbit) + "s linear infinite");
	$('#earth').css("animation", "spin-left " + String(earth_orbit) + "s linear infinite");
	$('#mars').css("animation", "spin-left " + String(mars_orbit) + "s linear infinite");
	$('#jupiter').css("animation", "spin-left " + String(jupiter_orbit) + "s linear infinite");

	$('#earth,.closebtn').click(function() {
		$('body').toggleClass('hidden');
	});
});
		