let stateData = {};


// Axios Get States Request
const getStates = () => {
    axios.get("https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states").then((response) => {
        const states = response.data[0].states;
        console.log(`GET States`, states);
        fillDropdown(states);
    }).catch((error) => console.error(error));
};

// Fills drop down with state names
const fillDropdown = (states) =>{
    stateData = states;
    for(index in stateData){
        $(".dropdown-menu").append('<li><a class="dropdown-item" href="#" onclick = "fillInfo(this)">'+stateData[index].name+'</a></li>');
    }
}

// Fill Data With Selected State
const fillInfo = (item) =>{
    let name = item.textContent;
    console.log(name);
    for(val of stateData){
        if(val.name == name){
            $("#stateImg").attr("src", val.image);
            $("#stateName").text("State of " + val.name);
            $("#capitalBody").text(val.capital);
            $("#industryBody").text(val.majorindustry);
            $("#touristBody").text(val.touristattractions);
            $("#populationBody").text(val.population);
            $("#massBody").text(val.landmass);
            $("#factBody").text(val.funfact);
            $("#statehoodBody").text(val.date_of_statehood);
        }
    }
}

$(document).ready(function(){
    getStates();
});


