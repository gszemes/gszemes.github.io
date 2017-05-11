infoDisplay = {
    screenJQ: null,
    
    init : (screenJQ) => {
        infoDisplay.screenJQ = screenJQ;   
    },
    inhabOnDisplay : null,
    displayInhab : (inhId) => {
        infoDisplay.screenJQ.css("display", "block");
        infoDisplay.inhabOnDisplay = world.getInhabById(inhId);
        $(".inhabitant").removeClass("selected");
        infoDisplay.inhabOnDisplay.getDomJQ().addClass("selected");
        infoDisplay.updateInhabDisplay();
    },    
    updateInhabDisplay() {        
        var inh = infoDisplay.inhabOnDisplay;
        if (!inh) return;
        var genderDiv = (inh.gender == "male") ? "<div class='male ico'></div>" : "<div class='female ico'></div>"
        var htmlString =
            genderDiv + 
            "<b class='name " +  inh.gender + "'>" + inh.firstName + " " + inh.familyName + "</b><br/>" +
            "<br/>" +
            "<br/>" +
            "<b>age:</b> " + worldMath.tickToYear(inh.tickCount).toFixed(2) + "<br/>" +
            "<b>generation:</b> " + inh.generation + "<br/>" +
            "<b>descendants:</b> " + (inh.descendentCounter) + "<br/>" +
            "<br/>" +
            "<b>size:</b> " + ((inh.fenoType[1]-0.25)*5).toFixed(2) + "<br/>" +
            "<b>fast-paced:</b> " + ((inh.fenoType[2]-0.25)*5).toFixed(2) + "<br/>" +
            "<b>fat:</b> " + ((inh.fenoType[3]-0.25)*5).toFixed(2) + "<br/>" +
            "<b>picky:</b> " + ((inh.fenoType[4]-0.25)*5).toFixed(2) + "<br/>" +
            "<b>the bunny gene:</b> " + ((inh.fenoType[5]-0.25)*5).toFixed(2) + "<br/>" +
            "<br/>" +
            "<b>lifespan:</b> " + inh.lifeSpan.toFixed(2) + " (" + Math.floor(inh.lifeSpan / params.inhabLifeSpanAvg * 100) + "%) <br/>" +
            "<b>speed:</b> " + inh.speed.toFixed(2) + " (" + Math.floor(inh.speed / params.inhabSpeedAvg * 100) + "%) <br/>" +
            "<b>stomach:</b> " + inh.maxFullness.toFixed(2) + " (" + Math.floor(inh.maxFullness / params.inhabFullStomachAvg * 100) + "%) <br/>" +
            "<b>mate age:</b> " + inh.minimumMatingAge.toFixed(2) + " (" + Math.floor(inh.minimumMatingAge / params.inhabAgeToMateAvg * 100) + "%) <br/>" +
            "<b>bush range:</b> " + inh.bushReachRange.toFixed(2) + " (" + Math.floor(inh.bushReachRange / params.inhabBushRangeAvg * 100) + "%) <br/>" +
            "<b>turn period:</b> " + inh.turnPeriod + " <br/>" +
            "<br/>" +       
            "<b>fullness:</b> " + inh.fullness.toFixed(2) + "<br/>" +
            "<b>conf (" + params.inhabReproducingConfidencyTreshold + "):</b> " + (inh.reproducingConfidency) + "<br/>" +
            "<b>mating:</b> " + (inh.matingCounter) + "<br/>"
        ;
        infoDisplay.screenJQ.html(htmlString);
    }
}

