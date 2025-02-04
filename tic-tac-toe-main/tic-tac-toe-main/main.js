document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.querySelector(".btn-reset");
    const popup = document.querySelector(".popup");
    
    resetButton.addEventListener("click", function () {
        popup.style.display = "block";
    });
    
    popup.querySelector("#closePopup").addEventListener("click", function () {
        popup.style.display = "none";
    });
});