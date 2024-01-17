(function() {
    "use strict"

    var myElement1 = document.getElementById('profile-posts-scroll');
    new SimpleBar(myElement1, { autoHide: true });

    var lightboxVideo = GLightbox({
        selector: '.glightbox'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);

        const { slideIndex, slideNode, slideConfig, player } = current;
    });
     
})();