gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector(".sec1 .box1");
const box2 = document.querySelector(".sec1 .box2");

gsap.to(box1, {
  xPercent: 500,
  duration: 2,
  scrollTrigger: {
    trigger: box1,
    toggleActions: "restart reverse play reverse",
    start: "top 40%",
    end: "bottom 30%",
    markers: true,
    scrub: 1
  }
});

gsap.to(box2, {
  xPercent: 500,
  duration: 2,
  scrollTrigger: {
    trigger: box1,
    toggleActions: "restart reverse play reverse",
    start: "top 40%",
    end: "bottom 30%",
    scrub: 3
  }
});

gsap.from(".sec2 .box", {
    scrollTrigger : {
        trigger : ".sec2 .box",
        toggleActions : "restart none none reset",
        start : "top 80%",
        markers : false,
    },
    y : 100,
    opacity : 0,
    scale : 0,
    ease : "elastic(0.4,0.15)",
    duration : 1,
    stagger : 0.1,
})

document.getElementById('toggleButton').addEventListener('click', () => {
  const body = document.body;
  const header = document.querySelector('.top_header');
  const sideMenu = document.querySelector('.side-menu');
  const isDarkMode = body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode', !isDarkMode);
  header.classList.toggle('dark-mode', isDarkMode);
  header.classList.toggle('light-mode', !isDarkMode);
  sideMenu.classList.toggle('dark-mode', isDarkMode);
  sideMenu.classList.toggle('light-mode', !isDarkMode);

  gsap.to([body, header], {
      backgroundColor: isDarkMode ? 'var(--C2)' : 'var(--C1)',
      color: isDarkMode ? 'var(--C1)' : 'var(--C2)',
      borderColor: isDarkMode ? 'var(--border-C1)' : 'var(--border-C2)',
      duration: 0.3
  });
});