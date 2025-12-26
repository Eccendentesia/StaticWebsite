import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Aboutgsap = (aboutRef) => {
    if(!aboutRef) return ; 
  gsap.from(
    aboutRef.current.querySelectorAll(".about-gsap"),
    {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%", // 🔥 30% from bottom
        toggleActions: "play none none none",
      },
    }
  );
};
