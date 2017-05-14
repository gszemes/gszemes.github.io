function familyTreeInhabitant (selfInhabitant, fatherInhabitant, motherInhabitant, x, y) {
    // set references to real inhabitants    
    this.inhabitant = selfInhabitant;
    selfInhabitant.ftInhabitant = this;
    this.fatherInhabitant = fatherInhabitant;
    this.motherInhabitant = motherInhabitant;                      
    this.x = x;
    this.y = y;
    
    // init dom
    this.dom = 
        "<div id='inhabitant_ft_" + this.inhabitant.id + "' class='inhabitant " + this.inhabitant.gender + "' onclick='infoDisplay.displayInhab(" + this.inhabitant.id + ")'>" +
        "   <div class='body'></div>" +
        //"   <div class='name'>" + this.inhabitant.firstName.charAt(0) + ". " + this.inhabitant.familyName + "</div>"
        "</div>";               
    
    this.getDomJQ = () => {
        return $("#inhabitant_ft_" + this.inhabitant.id);
    }
}