
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const fullScreenMenu = document.getElementById('fullScreenMenu');
    const closeMenuButton = document.getElementById('closeMenu');

    // Show the full-screen menu when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
        fullScreenMenu.style.display = 'flex'; // Show the menu
    });

    // Hide the full-screen menu when the close button is clicked
    closeMenuButton.addEventListener('click', function () {
        fullScreenMenu.style.display = 'none'; // Hide the menu
    });
});




// GSAP





// GSAP Loading Screen Animation
// document.addEventListener("DOMContentLoaded", () => {
    // const loader = gsap.to("#loader", {
    //     rotation: 360,
    //     repeat: -1,
    //     duration: 1,
    //     ease: "linear",
    // });

    // // Simulate content load time
    // setTimeout(() => {
    //     gsap.to("#loading-screen", {
    //         opacity: 0,
    //         duration: 1,
    //         onComplete: () => {
    //             document.getElementById("loading-screen").style.display = "none";
    //         },
    //     });
    // }, 2000); // Adjust to your desired loading duration
// });
