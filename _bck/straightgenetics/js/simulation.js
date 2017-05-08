simulation = {
    running : false,
    scheduler : null,
    tick: 0,    
    init : (screenJQ) => {
        this.tick = 0;
        world.init(screenJQ);
        $(".tick-counter").html(simulation.tick);
        $('.control-btn.stop').css('display', 'none');
    },
    step : () => {
        simulation.tick++;
        world.step(); 
        infoDisplay.updateInhabDisplay();
        $(".tick-counter").html(worldMath.tickToYear(simulation.tick).toFixed(0));
    },
    start : () => {
        $('.control-btn.stop').css('display', 'block');
        $('.control-btn.fastStart').css('display', 'none');
        $('.control-btn.start').css('display', 'none');
        this.stop();
        simulation.running = true;
        simulation.scheduler = setInterval(function () {
            simulation.step();
        }, params.schedulerSleepTime);
    },
    fastStart : () => {
        $('.control-btn.stop').css('display', 'block');
        $('.control-btn.fastStart').css('display', 'none');
        $('.control-btn.start').css('display', 'none');
        this.stop();
        simulation.running = true;
        simulation.scheduler = setInterval(function () {
            simulation.step();
        }, params.schedulerFastSleepTime);
    },
    stop : () => {
        $('.control-btn.fastStart').css('display', 'block');
        $('.control-btn.start').css('display', 'block');
        $('.control-btn.stop').css('display', 'none');
        simulation.running = false;
        clearTimeout(simulation.scheduler);
    }
}

