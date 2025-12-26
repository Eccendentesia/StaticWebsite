import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAboutEaseAnimations() {
  // refresh any existing triggers
  try { ScrollTrigger.refresh() } catch (e) {}

  const sections = gsap.utils.toArray('.about-gsap')
  sections.forEach((section) => {
    const children = Array.from(section.children).filter(Boolean)

    if (children.length) {
      gsap.from(children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    } else {
      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  })
}

export default initAboutEaseAnimations
