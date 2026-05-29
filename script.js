// ===============================
// FLOATING TECH ICONS
// ===============================

const icons = [
  'fab fa-react',
  'fab fa-node-js',
  'fab fa-js-square',
  'fab fa-python',
  'fab fa-github',
  'fas fa-database',
  'fas fa-code',
  'fas fa-server',
  'fab fa-html5',
  'fab fa-css3-alt',
  'fas fa-terminal',
  'fas fa-cog',
  'fas fa-cloud',
  'fas fa-layer-group'
];

const canvas = document.getElementById('float-canvas');

for(let i = 0; i < 22; i++){

  const el = document.createElement('i');

  el.className =
    icons[i % icons.length] + ' float-icon';

  el.style.left =
    Math.random() * 98 + '%';

  el.style.top =
    Math.random() * 98 + '%';

  el.style.animationDuration =
    (8 + Math.random() * 12) + 's';

  el.style.animationDelay =
    (-Math.random() * 12) + 's';

  el.style.fontSize =
    (1 + Math.random() * 1.2) + 'rem';

  canvas.appendChild(el);
}

// ===============================
// PARALLAX FLOAT EFFECT
// ===============================

document.addEventListener(
  'mousemove',
  e => {

    const mx =
      (e.clientX / window.innerWidth - 0.5) * 18;

    const my =
      (e.clientY / window.innerHeight - 0.5) * 18;

    const items =
      canvas.querySelectorAll('.float-icon');

    items.forEach((el, i) => {

      const factor =
        0.3 + (i % 5) * 0.15;

      el.style.transform =
        `translate(${mx * factor}px,
        ${my * factor}px)`;

    });
  }
);

// ===============================
// CUSTOM CURSOR
// ===============================

const dot =
  document.getElementById('cursorDot');

const ring =
  document.getElementById('cursorRing');

let mx = 0;
let my = 0;

let rx = 0;
let ry = 0;

document.addEventListener(
  'mousemove',
  e => {

    mx = e.clientX;
    my = e.clientY;

  }
);

function animateCursor(){

  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';

  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;

  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';

  requestAnimationFrame(
    animateCursor
  );
}

animateCursor();

// ===============================
// CURSOR HOVER EFFECT
// ===============================

document
.querySelectorAll(
  'a,button,.project-card,.skill-cat,.achieve-card,.edu-card'
)
.forEach(el => {

  el.addEventListener(
    'mouseenter',
    () => {

      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.opacity = '0.25';

    }
  );

  el.addEventListener(
    'mouseleave',
    () => {

      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.opacity = '0.4';

    }
  );

});

// ===============================
// TYPING EFFECT
// ===============================

const phrases = [
  'Full Stack Developer',
  'React.js Enthusiast',
  'Node.js Builder',
  'Problem Solver',
  'Open Source Contributor'
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const typedText =
  document.getElementById('typed-text');

function typeEffect(){

  const currentPhrase =
    phrases[phraseIndex];

  if(!deleting){

    typedText.textContent =
      currentPhrase.slice(
        0,
        ++charIndex
      );

    if(charIndex === currentPhrase.length){

      deleting = true;

      setTimeout(
        typeEffect,
        1800
      );

      return;
    }

  }else{

    typedText.textContent =
      currentPhrase.slice(
        0,
        --charIndex
      );

    if(charIndex === 0){

      deleting = false;

      phraseIndex =
        (phraseIndex + 1) %
        phrases.length;
    }
  }

  setTimeout(
    typeEffect,
    deleting ? 55 : 90
  );
}

typeEffect();

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar =
  document.getElementById('navbar');

window.addEventListener(
  'scroll',
  () => {

    navbar.classList.toggle(
      'scrolled',
      window.scrollY > 20
    );

  }
);

// ===============================
// MOBILE MENU
// ===============================

const hamburger =
  document.getElementById('hamburger');

const navLinks =
  document.getElementById('navLinks');

hamburger.addEventListener(
  'click',
  () => {

    navLinks.classList.toggle('open');

  }
);

navLinks
.querySelectorAll('a')
.forEach(link => {

  link.addEventListener(
    'click',
    () => {

      navLinks.classList.remove('open');

    }
  );

});

// ===============================
// ACTIVE NAVIGATION LINKS
// ===============================

const navItems =
  document.querySelectorAll(
    '.nav-links a'
  );

const sectionIds = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact'
];

const navObserver =
new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        navItems.forEach(item => {

          item.classList.toggle(
            'active',
            item.getAttribute('href')
            ===
            '#' + entry.target.id
          );

        });

      }

    });

  },

  {
    threshold:0.35
  }

);

sectionIds.forEach(id => {

  const section =
    document.getElementById(id);

  if(section){

    navObserver.observe(section);

  }

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealObserver =
new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.classList.add(
          'visible'
        );

      }

    });

  },

  {
    threshold:0.1
  }

);

document
.querySelectorAll('.reveal')
.forEach(element => {

  revealObserver.observe(element);

});

// ===============================
// SKILL BAR ANIMATION
// ===============================

const skillObserver =
new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target
        .querySelectorAll('.bar-fill')
        .forEach(bar => {

          bar.style.width =
            bar.dataset.pct + '%';

        });

      }

    });

  },

  {
    threshold:0.3
  }

);

const skillSection =
  document.querySelector(
    '.skill-bars'
  );

if(skillSection){

  skillObserver.observe(
    skillSection
  );

}

// ===============================
// BACK TO TOP BUTTON
// ===============================

const backTop =
  document.getElementById(
    'back-top'
  );

window.addEventListener(
  'scroll',
  () => {

    backTop.classList.toggle(
      'show',
      window.scrollY > 400
    );

  }
);

backTop?.addEventListener(
  'click',
  () => {

    window.scrollTo({

      top:0,
      behavior:'smooth'

    });

  }
);

// ===============================
// CONTACT FORM
// ===============================

function submitForm(){

  const name =
    document.getElementById(
      'fname'
    ).value;

  const email =
    document.getElementById(
      'email'
    ).value;

  const message =
    document.getElementById(
      'message'
    ).value;

  if(
    !name ||
    !email ||
    !message
  ){

    alert(
      'Please fill in your name, email and message.'
    );

    return;
  }

  const toast =
    document.getElementById(
      'toast'
    );

  toast.classList.add('show');

  setTimeout(() => {

    toast.classList.remove(
      'show'
    );

  }, 4000);

  [
    'fname',
    'lname',
    'email',
    'subject',
    'message'
  ].forEach(id => {

    document.getElementById(
      id
    ).value = '';

  });

}

// ===============================
// HERO COUNT ANIMATION
// ===============================

function animateCount(
  element,
  target,
  suffix = ''
){

  let current = 0;

  const step =
    target / 60;

  const timer =
    setInterval(() => {

      current = Math.min(
        current + step,
        target
      );

      element.textContent =
        Math.round(current) +
        suffix;

      if(current >= target){

        clearInterval(timer);

      }

    }, 24);

}

// Example Usage
// animateCount(
//   document.querySelector('.hero-stat-num'),
//   100
// );

// ===============================
// HERO OBSERVER
// ===============================

const heroObserver =
new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        // You can trigger counters here

        // Example:
        // animateCount(...);

      }

    });

  },

  {
    threshold:0.8
  }

);

// ===============================
// PROJECT CARD 3D TILT EFFECT
// ===============================

document
.querySelectorAll('.project-card')
.forEach(card => {

  card.addEventListener(
    'mousemove',
    e => {

      const rect =
        card.getBoundingClientRect();

      const x =
        (
          (e.clientX - rect.left)
          /
          rect.width
          - 0.5
        ) * 12;

      const y =
        (
          (e.clientY - rect.top)
          /
          rect.height
          - 0.5
        ) * -12;

      card.style.transform =
        `translateY(-6px)
         rotateX(${y}deg)
         rotateY(${x}deg)`;

      card.style.transition =
        'transform 0.1s';

    }
  );

  card.addEventListener(
    'mouseleave',
    () => {

      card.style.transform =
        'translateY(0) rotateX(0) rotateY(0)';

      card.style.transition =
        'transform 0.4s ease';

    }
  );

});

// ===============================
// OPTIONAL SMOOTH SCROLL LINKS
// ===============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener(
    'click',
    function(e){

      const target =
        document.querySelector(
          this.getAttribute('href')
        );

      if(target){

        e.preventDefault();

        target.scrollIntoView({

          behavior:'smooth',
          block:'start'

        });

      }

    }
  );

});

// ===============================
// PAGE LOADED
// ===============================

window.addEventListener(
  'load',
  () => {

    document.body.classList.add(
      'loaded'
    );

    console.log(
      'Portfolio Loaded Successfully '
    );

  }
);

// ===============================
// END OF FILE
// ===============================

