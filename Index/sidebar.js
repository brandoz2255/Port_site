

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
