geomath = {
    distance : (obj1, obj2) => {
        return (
            Math.sqrt(
                (obj1.x - obj2.x) * (obj1.x - obj2.x) +
                (obj1.y - obj2.y) * (obj1.y - obj2.y)
            )
        )
    },
    getXFromAngle : (angle) => {
        return Math.cos(geomath.degreeToRad(angle))
    },
    getYFromAngle : (angle) => {
        return Math.sin(geomath.degreeToRad(angle))
    },
    degreeToRad : (degrees) =>  {
        return degrees * Math.PI / 180;
    }
}
    

worldMath = {
    tickToYear : (tick) => {
        return tick / 200;
    }
}

