// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.getElementById("header").offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".feature, .price-card, .spec");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial styles for animation
document.querySelectorAll(".feature, .price-card, .spec").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

// Run animation on scroll
window.addEventListener("scroll", animateOnScroll);
// Run once on page load
window.addEventListener("load", animateOnScroll);

// Form submission
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  alert(`Thank you for subscribing with: ${email}`);
  form.reset();
});

// Product image hover effect
const productImages = document.querySelectorAll(
  ".product-image img, .hero-image img"
);
productImages.forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    img.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${
      y * -10
    }deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
  });
});

// Buy button click event
const buyButtons = document.querySelectorAll(".buy-button");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h3").textContent;
    alert(
      `Thank you for your interest in ${productName}! This would take you to the checkout page.`
    );
  });
});
