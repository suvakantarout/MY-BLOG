    // Get references to the hamburger icon and mobile nav menu
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileNav = document.getElementById('mobile-nav');

    // Toggle the visibility of the mobile menu on hamburger icon click
    hamburgerIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });