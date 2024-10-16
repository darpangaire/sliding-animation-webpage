gsap.to(".imageContainer", {
  width: "80%",
  duration: 2,
  stagger: 2,
  ease: Expo.easeInOut,
});

gsap.to(".text h1", {
  stagger: 2,
  ease: Expo.easeInOut,
  top: 0,
});

gsap.to(".text h1", {
  delay: 2,
  stagger: 2,
  ease: Expo.easeInOut,
  top: "-100%",
});
