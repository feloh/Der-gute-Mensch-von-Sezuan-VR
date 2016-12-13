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
