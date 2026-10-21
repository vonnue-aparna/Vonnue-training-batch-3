const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
function closeMenu() {
navLinks.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open navigation");
}
menuToggle.addEventListener("click", () => {
const isOpen = navLinks.classList.toggle("open");
menuToggle.setAttribute("aria-expanded", String(isOpen));
menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
);
});
navLinks.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
if (event.key === "Escape") {
    closeMenu();
}
});
document.addEventListener("click", (event) => {
if (
    navLinks.classList.contains("open") &&
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
) {
    closeMenu();
}
});
const themeToggle = document.querySelector("#themeToggle");
function updateThemeButton() {
const isLight = document.body.classList.contains("light-theme");
themeToggle.textContent = isLight ? "☾" : "☼";
themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
);
themeToggle.title = isLight ? "Switch to dark theme" : "Switch to light theme";
}
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("light-theme");
updateThemeButton();
showToast(
    document.body.classList.contains("light-theme")
    ? "Light theme enabled"
    : "Dark theme enabled"
);
});
updateThemeButton();
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => {
button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
    });
    projectCards.forEach((card) => {
    const matches =
        filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !matches);
    });
});
});
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
        }
    });
    },
    {
    threshold: 0.12
    }
);
revealElements.forEach((element) => {
    revealObserver.observe(element);
});
} else {
revealElements.forEach((element) => {
    element.classList.add("visible");
});
}
const counterElements = document.querySelectorAll("[data-count]");
const reducedMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;
function animateCounter(element) {
const target = Number(element.dataset.count);
if (reducedMotion) {
    element.textContent = target;
    return;
}
const duration = 1400;
const startTime = performance.now();
function updateCounter(currentTime) {
    const progress = Math.min(
    (currentTime - startTime) / duration,
    1
    );
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(target * easedProgress);
    if (progress < 1) {
    requestAnimationFrame(updateCounter);
    } else {
    element.textContent = target;
    }
}
requestAnimationFrame(updateCounter);
}
if ("IntersectionObserver" in window) {
const counterObserver = new IntersectionObserver(
    (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
        }
    });
    },
    { threshold: 0.5 }
);
counterElements.forEach((counter) => {
    counterObserver.observe(counter);
});
} else {
counterElements.forEach(animateCounter);
}
const toast = document.querySelector("#toast");
let toastTimeout;
function showToast(message) {
toast.textContent = message;
toast.classList.add("show");
clearTimeout(toastTimeout);
toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
}, 3000);
}
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
contactForm.addEventListener("submit", (event) => {
event.preventDefault();
if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
}
const formData = new FormData(contactForm);
const name = String(formData.get("name")).trim();
const email = String(formData.get("email")).trim();
const subject = String(formData.get("subject")).trim();
const message = String(formData.get("message")).trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    return;
}
if (name.length < 2 || message.length < 10) {
    formStatus.textContent =
    "Please enter your name and a message of at least 10 characters.";
    return;
}
const emailSubject = encodeURIComponent(
    `${subject} — Website enquiry from ${name}`
);
const emailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${subject}\n\nMessage:\n${message}`
);
const recipient = "hello@novastudio.example";
formStatus.textContent = "Opening your email application...";
window.location.href =
    `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
});
document.querySelector("#year").textContent =
new Date().getFullYear();
