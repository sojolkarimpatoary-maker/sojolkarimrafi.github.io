// Intro sequence
    window.addEventListener('load', () => {
      const intro = document.getElementById('intro');
      setTimeout(() => {
        intro.classList.add('done');
        document.body.classList.remove('locked');
      }, 3800);
    });

    // Mobile navigation
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));

    // Pause cube on hover/focus for easier reading.
    const cube = document.getElementById('cube');
    cube.addEventListener('mouseenter', () => cube.classList.add('paused'));
    cube.addEventListener('mouseleave', () => cube.classList.remove('paused'));
    cube.addEventListener('focusin', () => cube.classList.add('paused'));
    cube.addEventListener('focusout', () => cube.classList.remove('paused'));

    // Reveal-on-scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.getElementById('year').textContent = new Date().getFullYear();
