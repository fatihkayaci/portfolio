document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            // Get the current page name
            var path = window.location.pathname;
            var page = path.split("/").pop();

            // Set the selected option to current page
            var select = document.getElementById('category-select');
            if (select) {
                // Set current page as selected
                var options = select.options;
                for (var i = 0; i < options.length; i++) {
                    if (options[i].value === page) {
                        select.selectedIndex = i;
                        break;
                    }
                }

                // Add change event listener for navigation
                select.addEventListener('change', function() {
                    if (this.value) {
                        window.location.href = this.value;
                    }
                });
            }
        });
});
