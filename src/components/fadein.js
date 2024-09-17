
// Function to check if an element is in the viewport
const isInView = (e) => {
    const rect = e.getBoundingClientRect();
    return rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150);
};

// Function to update the visibility class
const updateVisibility = () => {
    const imageOne = document.querySelectorAll(".tcg-secure-image1");
    const imageTwo = document.querySelectorAll(".tcg-secure-image2");
    const imageThree = document.querySelectorAll(".tcg-secure-image3");

    imageOne.forEach(image => {
        if (isInView(image)) {
            image.classList.add("tcg-secure-image1--visible");
        } else {
            image.classList.remove("tcg-secure-image1--visible");
        }
    });

    imageTwo.forEach(image => {
        if (isInView(image)) {
            image.classList.add("tcg-secure-image2--visible");
        } else {
            image.classList.remove("tcg-secure-image2--visible");
        }
    });

    imageThree.forEach(image => {
        if (isInView(image)) {
            image.classList.add("tcg-secure-image3--visible");
        } else {
            image.classList.remove("tcg-secure-image3--visible");
        }
    });
};


// Remove the visibility class when the page is refreshed
document.addEventListener("DOMContentLoaded", () => {
    // Ensure elements are re-selected after the page loads
    const imageOne = document.querySelectorAll(".tcg-secure-image1");
    const imageTwo = document.querySelectorAll(".tcg-secure-image2");
    const imageThree = document.querySelectorAll(".tcg-secure-image3");
    
    imageOne.forEach(image => {
        image.classList.remove("tcg-secure-image1--visible");
    });
    imageTwo.forEach(image => {
        image.classList.remove("tcg-secure-image2--visible");
    });
    imageThree.forEach(image => {
        image.classList.remove("tcg-secure-image3--visible");
    });
    updateVisibility(); // Ensure the class is added based on the current scroll position
});

// Update visibility on scroll
document.addEventListener("scroll", updateVisibility);
