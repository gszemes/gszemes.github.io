params = {       
    schedulerSleepTime: 40,                             // ms 
    schedulerFastSleepTime: 1,                          // ms 
    
    mutationPercentage: 30,
    
    // world init params
    worldWidth : 525,
    worldHeight: 390,
    initInhabCount: 30,
    bushDensity: 0.2,                                   // qty / kiloPixel
    inhabStartingLocation: 'random',                    // 'central', 'random'    
            
    
    // inhab genetics ranges    
    /*
    inhabSpeedMin: 1,                                  // px / step
    inhabSpeedMax: 6,                                  // px / step    
    inhabFullStomachMin: 100,                          // cal
    inhabFullStomachMax: 200,                          // cal
    inhabMinBushRange: 10,                             // px
    inhabMaxBushRange: 30,                             // px    
    inhabLifeSpanMin: 30,                              // years
    inhabLifeSpanMax: 30,                              // years
    inhabAgeToMateMin: 13,                             // year                  // can be derived from lifespan?
    inhabAgeToMateMax: 28,                             // year
    */
   
    // inhab genetics average values
    inhabSpeedAvg: 2,                                  // px / step    
    inhabFullStomachAvg: 150,                          // cal
    inhabBushRangeAvg: 15,                             // px    
    inhabLifeSpanAvg: 2,                              // years
    inhabAgeToMateAvg: 16,                             // year
   
   
        
    // inhab other    
    inhabitantFullnessReductionPerStep: 0.05,  
    inhabitantMateReachRange: 10,
    inhabitantEatTimePerNutrition: 2,                   // steps
    inhabitantMatingPeriod: 600,                        // steps            
    // inhabitantMaxFullness: 100,                      // nutrition            --> moved to genetics    
    inhabReproducingConfidencyIncreaseRatio: 0.6,
    inhabReproducingConfidencyTreshold: 1000,           // consequent turns
    
    
    bushRegrowTime: 500,                                // step
    bushNutrition: 45,                                  // nutrition    
}
