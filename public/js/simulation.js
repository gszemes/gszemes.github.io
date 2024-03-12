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
    },
    screenState : 'screen', // or 'familyTree'
    toggleScreen : () => {
        if (simulation.screenState == 'screen'){
            simulation.screenState = 'familyTree';
            $('.toggle-screen-btn').addClass('sim');
            $('.toggle-screen-btn').removeClass('tree');
            $('.screen').css('display', 'none');
            $('.family-tree').css('display', 'block');
            $('.family-tree-canvas').css('display', 'block');
        } else {            
            simulation.screenState = 'screen';
            $('.toggle-screen-btn').addClass('tree');
            $('.toggle-screen-btn').removeClass('sim');
            $('.family-tree').css('display', 'none');
            $('.family-tree-canvas').css('display', 'none');
            $('.screen').css('display', 'block');            
        }
    }
}

