// JavaScript for tab functionality
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs ul li a");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substr(1);
            const targetPanel = document.getElementById(targetId);

            if (targetPanel) {
                const allPanels = document.querySelectorAll(".tabs main div[role='tabpanel']");
                allPanels.forEach(panel => {
                    if (panel !== targetPanel) {
                        panel.style.display = "none";
                    }
                });

                if (targetPanel.style.display === "block") {
                    targetPanel.style.display = "none";
                } else {
                    targetPanel.style.display = "block";
                }
            }
        });
    });
});
