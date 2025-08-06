const navbar = document.getElementById('navbar');
    const brand = document.getElementById('brand');
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('menuBtn');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('backdrop-blur', 'bg-white/70', 'shadow-md');
        brand.classList.replace('text-white', 'text-black');
        navLinks.classList.replace('text-white', 'text-black');
        menuBtn.classList.replace('text-white', 'text-black');
      } else {
        navbar.classList.remove('backdrop-blur', 'bg-white/70', 'shadow-md');
        brand.classList.replace('text-black', 'text-white');
        navLinks.classList.replace('text-black', 'text-white');
        menuBtn.classList.replace('text-black', 'text-white');
      }
    });

    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });




    const container = document.getElementById('cardContainer');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    scrollLeftBtn.addEventListener('click', () => {
      container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
      container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
    });