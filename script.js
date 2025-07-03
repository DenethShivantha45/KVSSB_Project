document.addEventListener('DOMContentLoaded', function() {
  // ===== Preloader =====
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }, 1000);
  });

  // ===== Theme Toggle (Dark/Light Mode) =====
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');

  // Apply saved theme or preferred scheme
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });

  // ===== Mobile Navigation =====
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navbarMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });

  // ===== Typewriter Effect =====
  const typewriter = new Typed('#typewriter', {
    strings: [
      'Innovative Digital Solutions',
      'Creative Web Development',
      'Professional UI/UX Design',
      'Cutting-edge Technology'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
  });

  // ===== Counter Animation =====
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounters, 1);
      } else {
        counter.innerText = target;
        // Add plus sign for some counters
        if (counter.getAttribute('data-target') === '4.9') {
          counter.innerText = target.toFixed(1);
        } else if (counter.getAttribute('data-target') === '500') {
          counter.innerText = target + '+';
        }
      }
    });
  };

  // Start counters when section is in view
  const aboutSection = document.querySelector('.about-section');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.unobserve(aboutSection);
    }
  }, { threshold: 0.5 });

  observer.observe(aboutSection);

  // ===== Team Member Card Flip =====
  const memberCards = document.querySelectorAll('.member-card');
  memberCards.forEach(card => {
    const contactBtn = card.querySelector('.contact-btn');
    const closeBtn = card.querySelector('.close-btn');
    
    contactBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.style.transform = 'rotateY(180deg)';
    });
    
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.style.transform = 'rotateY(0deg)';
    });
  });

  // ===== Smooth Scrolling for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Back to Top Button =====
  const backToTopBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ===== KVSSB Letter Hover Effect =====
  const letters = document.querySelectorAll('.letter');
  letters.forEach(letter => {
    letter.addEventListener('mouseenter', () => {
      gsap.to(letter, {
        y: -10,
        color: '#3b82f6',
        duration: 0.3
      });
    });
    
    letter.addEventListener('mouseleave', () => {
      gsap.to(letter, {
        y: 0,
        color: 'var(--dark-color)',
        duration: 0.3
      });
    });
  });

  // ===== Service Card Animation =====
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: 'var(--shadow)',
        duration: 0.3
      });
    });
  });

  // ===== Project Card Animation =====
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: 'var(--shadow)',
        duration: 0.3
      });
    });
  });

  // ===== Technology Icons Animation =====
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        y: -5,
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        duration: 0.3
      });
      gsap.to(item.querySelector('i'), {
        color: '#ffffff',
        duration: 0.3
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        y: 0,
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-color)',
        duration: 0.3
      });
      gsap.to(item.querySelector('i'), {
        color: 'var(--primary-color)',
        duration: 0.3
      });
    });
  });

  // ===== Form Submission =====
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      showToast('Thank you for your message! We will get back to you soon.', 'success');
      this.reset();
    });
  }

  // ===== Newsletter Form =====
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input').value;
      if (email) {
        showToast(`Thank you for subscribing with ${email}!`, 'success');
        this.querySelector('input').value = '';
      }
    });
  }

  // ===== Download CV Buttons =====
  const downloadButtons = document.querySelectorAll('.download-cv');
  downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      // In a real implementation, this would download the actual CV
      showToast('CV download would start here in a real implementation', 'info');
    });
  });

  // ===== Toast Notification Function =====
  function showToast(message, type = 'info') {
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-icon">
        ${getToastIcon(type)}
      </div>
      <div class="toast-message">${message}</div>
      <button class="toast-close">&times;</button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      toast.remove();
    }, 5000);
    
    // Close button
    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.remove();
    });
  }

  function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
  }

  function getToastIcon(type) {
    const icons = {
      success: '<i class="fas fa-check-circle"></i>',
      error: '<i class="fas fa-exclamation-circle"></i>',
      warning: '<i class="fas fa-exclamation-triangle"></i>',
      info: '<i class="fas fa-info-circle"></i>'
    };
    return icons[type] || icons.info;
  }

  // ===== Scroll Animations =====
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections on scroll
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Animate individual elements
  gsap.utils.toArray('.animate-on-scroll').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // ===== 3D Cube Animation in Hero Section =====
  function initCubeAnimation() {
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach((cube, index) => {
      // Random initial rotation
      const rotationX = Math.random() * 360;
      const rotationY = Math.random() * 360;
      const rotationZ = Math.random() * 360;
      
      // Random animation duration and delay
      const duration = 3 + Math.random() * 3;
      const delay = index * 0.5;
      
      // GSAP animation
      gsap.to(cube, {
        rotationX: rotationX + 360,
        rotationY: rotationY + 360,
        rotationZ: rotationZ + 360,
        duration: duration,
        delay: delay,
        repeat: -1,
        ease: 'none'
      });
    });
  }

  // Initialize cube animation
  initCubeAnimation();

  // ===== Active Nav Link Highlighting =====
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ===== Initialize all animations =====
  function initAnimations() {
    // Add any additional initialization here
  }

  // Call initialization function
  initAnimations();
});