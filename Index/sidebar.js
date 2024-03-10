

$(document).ready(function() {
    $('.sidebar').hover(
        function() {
            // Expand the sidebar when the mouse enters
            $(this).addClass('expanded');
        }, function() {
            // Shrink the sidebar when the mouse leaves
            $(this).removeClass('expanded');
        }
    );
});


// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.section');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Use jQuery to animate the opacity and background color
//                 $(entry.target).animate({
//                     opacity: 1,
//                     backgroundColor: '#000033'
//                 }, 500); // 500ms animation duration
//             } else {
//                 // Reset the animation if the section is not in view
//                 $(entry.target).css({
//                     opacity: 0,
//                     backgroundColor: 'transparent'
//                 });
//             }
//         });
//     });

//     sections.forEach(section => observer.observe(section));
// });


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const connector = document.querySelector('.section-connector');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the section's opacity and background color
                $(entry.target).animate({
                    opacity: 1,
                    backgroundColor: '#000033'
                }, 500);

                // Animate the connector's opacity to make it visible
                $(connector).animate({
                    opacity: 1
                }, 500);
            } else {
                // Reset the section's animation if it's not in view
                $(entry.target).css({
                    opacity: 0.1,
                    backgroundColor: 'transparent'
                });

                // Reset the connector's animation if the section is not in view
                $(connector).animate({
                    opacity: 0
                }, 500);
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});
