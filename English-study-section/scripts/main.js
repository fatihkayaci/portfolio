document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            // Get the current page name
            var path = window.location.pathname;
            var page = path.split("/").pop();
            // Find the corresponding link and add the active class
            var links = document.querySelectorAll('.category-link');
            links.forEach(function(link) {
                var linkPage = link.getAttribute('href');
                if (linkPage === page) {
                    link.classList.add('active');
                }
            });
        });
});
