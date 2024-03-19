// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
    */
    document.getElementById('missionTarget').innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name:  ${name}</li>
        <li>Diameter:  ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth:  ${distance}</li>
        <li>Number of Moons:  ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "" || testInput === undefined) {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else if (isNaN(testInput) === false) {
        return "Is a Number"
    };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) === "Empty" || (validateInput(copilot)) === "Empty" || (validateInput(fuelLevel)) === "Empty" || (validateInput(cargoLevel)) === "Empty"){
        alert("All fields are required")
        return false;
    };
    if(validateInput(pilot) === 'Is a Number') {
        alert("Pilot should not be a number");
        return false;
    };
    if(validateInput(copilot) === 'Is a Number') {
        alert("Co-Pilot should not be a number");
        return false;
    };
    if(validateInput(fuelLevel) === 'Not a Number') {
        alert("Fuel Level should be a number");
        return false;
    };
    if(validateInput(cargoLevel) === 'Not a Number') {
        alert("Cargo Level should be a number");
        return false;
    };

    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    if(fuelLevel < 10000){
        document.getElementById('fuelStatus').innerHTML = `Fuel level too low for launch`;
        document.getElementById('launchStatus').innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById('launchStatus').style.color = 'red';
        list.setAttribute('style', 'visibility: visible');
    }else{
        document.getElementById('fuelStatus').innerHTML = `Fuel level high enough for launch`;
    };
    
    if(cargoLevel > 10000){
        document.getElementById('cargoStatus').innerHTML = `Cargo mass too heavy for launch`;
        document.getElementById('launchStatus').innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById('launchStatus').style.color = 'red';
        list.setAttribute('style', 'visibility: visible');
    }else{
        document.getElementById('cargoStatus').innerHTML = `Cargo mass low enough for launch`;
    };

    if(!(fuelLevel < 10000) && !(cargoLevel > 10000)){
        document.getElementById('launchStatus').innerHTML = `Shuttle is Ready for Launch!`;
        document.getElementById('launchStatus').style.color = 'green';
    };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;