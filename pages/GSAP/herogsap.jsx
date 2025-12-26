import gsap from 'gsap'

export const Herogsap = () => {
  const tl = gsap.timeline();

  tl.from(".gsap-1", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
  });

  return tl;
};
