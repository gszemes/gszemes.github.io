var familyTree = {
    //ftInhabitants = [],
    jq : null,
    offsetX : 15,
    offsetY : 50,
    init : (ftjq, ftCanvasId) => {        
        familyTree.jq = ftjq;
        var canvas = document.getElementById(ftCanvasId);
        canvas.width = 524;
        canvas.height = 384;        
        familyTree.canvasContext = canvas.getContext("2d");
    },
    addInhab : (self, father, mother) => {
        if (self.generation > 6) return;        
        var x = Math.random()*(world.width-150+90)+familyTree.offsetX;
        if (mother != null) x = Math.random()*40-20+mother.ftInhabitant.x+familyTree.offsetX;        
        var y = familyTree.offsetY+(self.generation-1)*80;
        var ftInhab = new familyTreeInhabitant(self, father, mother, x, y);         
        familyTree.jq.append(ftInhab.dom);        
        ftInhab.getDomJQ().css("left", x+"px");
        ftInhab.getDomJQ().css("top",y+"px");       
        if (father != null) familyTree.drawLine(x, y, father.ftInhabitant.x, father.ftInhabitant.y, "#ac0045");
        if (mother != null) familyTree.drawLine(x, y, mother.ftInhabitant.x, mother.ftInhabitant.y, "#3100e1");                
        //if (father != null) familyTree.drawLine(x, y, 100, 100);
        //if (mother != null) familyTree.drawLine(x, y, 100, 100);
    },
    drawLine(x1,y1,x2,y2, strokeStyle){
        var ox = familyTree.offsetX - 8;
        var oy = familyTree.offsetY - 15;
        familyTree.canvasContext.beginPath();
        familyTree.canvasContext.moveTo(x1-ox,y1-oy);
        familyTree.canvasContext.lineTo(x2-ox,y2-oy);
        familyTree.canvasContext.lineWidth = 0.75;        
        familyTree.canvasContext.strokeStyle = strokeStyle;
        familyTree.canvasContext.stroke();
    }
}


