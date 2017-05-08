/**
 * 
 * 5 fenotype -> 5 genotype
 *   gender -> gender
 *   size (0.25-1.75) -> greater bush range, but slower movement as growing in size
 *   fast-paced (0.25-1.75) -> earlier mateage but shorter lifespan as more fast-paced
 *   fat (0.25-1.75) -> greater stomach, but slower movement as more fat
 *   picky (0.25-1.75) -> greater lifespan, but smaller stomach
 *   the bunny gene (0.25-1.75) -> smaller bush range but earlier mateage
 *   (note: displaying fenotypes: we will scale them to 0-6)
 */

genetics = {
    fenoTypeDescriptions : [
        "gender: siply male and female (no offense, tho)",
        "greater bush range, but slower movement as growing in size",
        "fast-paced: earlier mateage but shorter lifespan as more fast-paced",
        "fat: greater stomach, but slower movement as more fat",
        "picky: greater lifespan, but smaller stomach",
        "the bunny gene: smaller bush range but earlier mateage",
    ],
    createNewRandomFenotype : () => {
        return [
            Math.floor(Math.random() * 2),           // gender (0,1)            
            Math.random() * 1.5 + 0.25,              // size (0.25-1.75)
            Math.random() * 1.5 + 0.25 ,             // fast-paced (0.25-1.75)
            Math.random() * 1.5 + 0.25,              // fat (0.25-1.75)
            Math.random() * 1.5 + 0.25,              // picky (0.25-1.75)
            Math.random() * 1.5 + 0.25               // the bunny gene (0.25-1.75)
        ];                    
    },
    fenoTypeToGenoType : (fenoType) => {
        return {
            gender: fenoType[0] === 0 ? 'male' : 'female',
            speed: params.inhabSpeedAvg / fenoType[1] / fenoType[3],             
            fullStomach: params.inhabFullStomachAvg * fenoType[3] * fenoType[4],        
            bushRange: params.inhabBushRangeAvg * fenoType[1] / fenoType[5],
            lifeSpan: params.inhabLifeSpanAvg / fenoType[2] * fenoType[4],
            ageToMate: params.inhabAgeToMateAvg / fenoType[2] / fenoType[5]
            
        }
    },
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


