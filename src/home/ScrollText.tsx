import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ScrollText = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const text = container.current?.querySelector(".text");

    if (!text) return;

    const split = SplitText.create(text, {
      type: "words",
      autoSplit: true,
    });

    gsap.from(split.words, {
      yPercent: 130,
      filter: "blur(10px)",
      opacity: 0,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
      },
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden z-10"
    >
      <p className="text text-white text-[5vw] leading-tight w-[70%] font-medium">
        Ce projet est un laboratoire d'Ingénieur Frontend. C'est ici que je prototype, teste et documente souvent des concepts avancés et modernes. Nous toucherons aux principes fondamentaux de Javascript, à l'optimisation de code, l'expérience utilisateur et à la Cybersécurité. 
      </p>
    </section>
  );
};