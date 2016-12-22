AFRAME.registerComponent('play-next-sound', {
    schema: {type: 'selector'},

    init: function () {
        var targetEl = this.data;  // Specified via schema.
        var soundEl = this.el;

        soundEl.addEventListener('sound-ended', function () {
            targetEl.components.sound.playSound();
        });
    }
});


AFRAME.registerComponent('event-animate', {
    schema: {
        target: { type: 'selector' },
        aevent: {default: 'anim1'}
    },

    init: function () {

        var data = this.data;

        this.el.addEventListener('click', function () {
            data.target.emit(data.aevent);
        });
    }
});


/*
AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
        target: { type: 'selector' },
        to:     { default: '1 1000 1' }
    },

    init: function () {
        //var target = this.data;
        var data = this.data;

        this.el.addEventListener('click', function () {
            data.target.setAttribute('scale', data.to );
        });
    }
});
*/


