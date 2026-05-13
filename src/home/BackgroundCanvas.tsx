import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let cw = (c.width = window.innerWidth);
    let ch = (c.height = window.innerHeight);
    let radius = Math.max(cw, ch);
    
    // Initialisation des particules
    const particles = Array.from({ length: 99 }, (_, i) => ({
      x: 0,
      y: 0,
      scale: 0,
      rotate: 0,
      img: Object.assign(new Image(), {
        src: `https://assets.codepen.io/16327/flair-${(i % 21) + 2}.png`
      })
    }));

    // Fonction de dessin (Canvas)
    const draw = () => {
      // Tri par échelle pour gérer la profondeur (z-index)
      particles.sort((a, b) => a.scale - b.scale);
      
      ctx.clearRect(0, 0, cw, ch);
      
      particles.forEach((p) => {
        // On ne dessine que si l'image est chargée pour éviter les erreurs
        if (p.img.complete) {
          ctx.translate(cw / 2, ch / 2);
          ctx.rotate(p.rotate);
          ctx.drawImage(
            p.img,
            p.x,
            p.y,
            p.img.width * p.scale,
            p.img.height * p.scale
          );
          ctx.resetTransform();
        }
      });
    };

    // Création de la Timeline
    const tl = gsap.timeline({ 
      onUpdate: draw,
      defaults: { ease: "sine" } 
    })
    .fromTo(particles, {
      x: (i) => {
        const angle = (i / particles.length * Math.PI * 2) - Math.PI / 2;
        return Math.cos(angle * 10) * radius;
      },
      y: (i) => {
        const angle = (i / particles.length * Math.PI * 2) - Math.PI / 2;
        return Math.sin(angle * 10) * radius;
      },
      scale: 1.1,
      rotate: 0
    }, {
      duration: 5,
      x: 0,
      y: 0,
      scale: 0,
      rotate: -3,
      stagger: {
        each: -0.05, 
        repeat: -1 // Animation infinie
      }
    }, 0)
    .seek(99); // Avance rapide pour remplir l'écran immédiatement

    // Gestion du redimensionnement
    const handleResize = () => {
      cw = c.width = window.innerWidth;
      ch = c.height = window.innerHeight;
      radius = Math.max(cw, ch);
      tl.invalidate(); // Recalcule les positions de départ (from)
    };

    // Toggle Play/Pause
    const handlePointerUp = () => {
      gsap.to(tl, { timeScale: tl.isActive() ? 0 : 1 });
    };

    // passage à la section suivante lorsque l'utilisateur clique ou touche l'écran
    const handlePointerDown = () => {
      const nextSection = document.querySelector('main');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      } 
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerdown", handlePointerDown);
      tl.kill();
    };
  }, { scope: canvasRef });

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" 
      style={{ background: 'rgb(14, 16, 15)' }}
    />
  );
};