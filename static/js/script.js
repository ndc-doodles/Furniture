






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









 document.addEventListener("DOMContentLoaded", function () {
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const scrollLeft = document.getElementById("scrollLeft");
  const scrollRight = document.getElementById("scrollRight");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("mainImage");

  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");

  let currentIndex = 0;

  if (scrollLeft && scrollRight && thumbnailContainer) {
    scrollLeft.addEventListener("click", () => {
      thumbnailContainer.scrollBy({ left: -150, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
      thumbnailContainer.scrollBy({ left: 150, behavior: "smooth" });
    });
  }

  if (thumbnails && mainImage) {
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
        currentIndex = index;
      });
    });

    mainImage.addEventListener("click", () => {
      if (modalImage && imageModal) {
        modalImage.src = mainImage.src;
        imageModal.classList.remove("hidden");
        imageModal.classList.add("flex");

        thumbnails.forEach((thumb, index) => {
          if (thumb.src === mainImage.src) {
            currentIndex = index;
          }
        });
      }
    });
  }

  if (closeModal && imageModal) {
    closeModal.addEventListener("click", () => {
      imageModal.classList.add("hidden");
      imageModal.classList.remove("flex");
    });

    imageModal.addEventListener("click", (e) => {
      if (e.target === imageModal) {
        imageModal.classList.add("hidden");
        imageModal.classList.remove("flex");
      }
    });
  }

  if (modalPrev && modalNext && modalImage && thumbnails.length > 0) {
    modalPrev.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      modalImage.src = thumbnails[currentIndex].src;
    });

    modalNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      modalImage.src = thumbnails[currentIndex].src;
    });
  }
});












   function openEnquiryModal(name, material, price, color) {
    document.getElementById('productName').value = name;
    document.getElementById('productMaterial').value = material;
    document.getElementById('productPrice').value = price;
    document.getElementById('productColor').value = color;

    document.getElementById('enquiryModal').classList.remove('hidden');
  }

  function closeEnquiryModal() {
    document.getElementById('enquiryModal').classList.add('hidden');
  }








   const container = document.getElementById('cardContainer');
  const scrollLeftBtn = document.getElementById('scrollLeft');
  const scrollRightBtn = document.getElementById('scrollRight');

  scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
  });







function openShareModal(event) {
    event.preventDefault(); // prevent link click
    event.stopPropagation(); // stop event bubbling
    document.getElementById('shareModal').classList.remove('hidden');
  }

  function closeShareModal() {
    document.getElementById('shareModal').classList.add('hidden');
  }

  // Optional: Close modal when clicking outside
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('shareModal');
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
