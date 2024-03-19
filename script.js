// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");
// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let list = document.getElementById('faultyItems');
        let pilot = document.querySelector('input[name=pilotName]').value;
        let copilot = document.querySelector('input[name=copilotName]').value;
        let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        let cargoLevel = document.querySelector('input[name=cargoMass]').value;
        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        // console.log(formSubmission);
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    // console.log('listedPlanetsResponse', listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const myPickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, myPickedPlanet.name, myPickedPlanet.diameter, myPickedPlanet.star, myPickedPlanet.distance, myPickedPlanet.moons, myPickedPlanet.image);
    })
    
});