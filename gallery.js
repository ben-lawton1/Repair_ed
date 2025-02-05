document.addEventListener("DOMContentLoaded", () => {
    const dropdownHeaders = document.querySelectorAll(".dropdown-header");

    dropdownHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const dropdownContent = header.nextElementSibling;

            // Toggle visibility
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        });
    });

    const loadMoreButtons = document.querySelectorAll(".load-more button");

    loadMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const hiddenItems = button.parentElement.previousElementSibling.querySelectorAll(".hidden");
            hiddenItems.forEach(item => item.classList.remove("hidden"));
            button.style.display = "none"; // Hide the button after clicking
        });
    });

    const gallery1Items = document.querySelectorAll(".gallery1-item");
    gallery1Items.forEach(item => {
        const caption = item.querySelector(".caption");
        item.addEventListener("mouseover", () => {
            caption.textContent = "After";
        });
        item.addEventListener("mouseout", () => {
            caption.textContent = "Before";
        });
    });
});
