/**
 * 
 * further dev ideas:
 *(5 fenotype -> 5 genotype)
 * - fenotypes -> genotypes improvement
 *   size (0-5) -> greater bush range, but slower movement as growing in size
 *   fast-paced (0-5) -> earlier mateage but shorter lifespan as more fast-paced
 *   fat (0-5) -> greater stomach, but slower movement as more fat
 *   picky (0-5) -> greater lifespan, but smaller stomach
 *   the bunny gene (0-5) -> smaller bush range but earlier mateage
 */



genetics = {
    createNewRandomFenotype : () => {
        return [
            Math.floor(Math.random() * 2),            // gender (0,1)            
            Math.random() * 2 + 3.0,                  // speed (2-5)
            Math.random() * 50 + 100,                 // maxFulnesss (50-150)
            Math.random() * 50 + 30,                  // lifeSpan (30-80 year)
            Math.random() * 5 + 12,                   // minimum mating age
            Math.random() * 30 + 5                    // bush reach range (5-15)
        ];                    
    },
    //genoTypeFromFenoTpype : (fenoType)
    recombine :(dadFeno, mumFeno) => {
        var childFeno = [];
        for (var i=0; i<dadFeno.length; i++){
            if (Math.random() < 0.5){
                childFeno.push(dadFeno[i]);
            } else {
                childFeno.push(mumFeno[i]);
            }
        }
        return childFeno;
    },
    mutateRandomGene : (fenoType) => {
        console.log("MUTATION!!!!")
        var randFeno = genetics.createNewRandomFenotype();
        var randIndex = Math.floor(Math.random()*randFeno.length);
        fenoType[randIndex] = randFeno[randIndex];
    },
}


