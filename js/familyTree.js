var familyTree = {
    inhabitants = [], // will get a reference to world's inhabitants
    init (ftjq){
        familyTree.jq = ftjq;
    },
    addInhab : (inh) => {
        this.dom = 
            "<div id='inhabitant_" + id + "' class='inhabitant " + this.gender + "' onclick='infoDisplay.displayInhab(" + id + ")'>" +
            "   <div class='body'></div>" +
            "   <div class='name'>" + this.firstName.charAt(0) + ". " + this.familyName + "</div>"
            "</div>";
        var inhJQ = inh.getJQ();
        inhJQ.left(Math.rand()*200);
        inhJQ.top(Math.rand()*200);
        familyTree.jq.append(inhJQ)
    }
}


