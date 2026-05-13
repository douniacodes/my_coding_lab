import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MousePointer2 } from "lucide-react";

const projects = [
  { title: "JavaScript Core", desc: "Fondamentaux & logique", color: "#8b5cf6" },
  { title: "Cybersécurité", desc: "Validation & sécurité", color: "#f97316" },
  { title: "UX / UI Motion", desc: "GSAP & animations", color: "#22c55e" }
];

export const DynamicTweens = () => {
  const container = useRef<HTMLDivElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState<string | null>(null);

  useGSAP(() => {
    const cards = container.current!.querySelectorAll(".card");

    cards.forEach((card) => {
      const el = card as HTMLElement;

      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          scale: 1.05,
          y: -8,
          duration: 0.4,
          ease: "power3.out"
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      });
    });
  }, { scope: container });

  const openProject = (e: React.MouseEvent<HTMLDivElement>) => {
    setMessage("Ça arrive !");
    
    const toast = toastRef.current;
    if (!toast) return;

    const x = e.clientX;
    const y = e.clientY;

    // On crée une timeline pour enchaîner l'apparition, l'attente et la disparition
    const tl = gsap.timeline();
    
    tl.set(toast, {
      left: x + 15,
      top: y + 15,
      opacity: 0,
      scale: 0.8,
      autoAlpha: 1 // autoAlpha gère l'opacité et le visibility: hidden/visible
    })
    .to(toast, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    })
    .to(toast, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      delay: 1.2, // Temps d'affichage
      ease: "power2.in",
      onComplete: () => setMessage(null)
    });
  };

  return (
    <section
      ref={container}
      className="min-h-screen bg-black text-white flex flex-col items-center gap-20 justify-center px-6 py-20"
    >
      <h1 className="text-5xl font-bold text-center z-0">
        Projects Lab
      </h1>

      {/* TOAST */}
      <div
        ref={toastRef}
        className="fixed px-5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white shadow-lg z-9999 pointer-events-none opacity-0 invisible"
      >
        <div className="flex items-center gap-2 text-sm">
          {message || "Chargement..."}
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={(e) => openProject(e)}
            className="card cursor-pointer rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: p.color }}
            />

            <h2
              style={{ fontSize: "2rem", marginBottom: "0.4rem" }}
              className="relative z-10 text-white/60 mt-4 leading-relaxed"
            >
              {p.title}
            </h2>

            <p className="text-white/60 mt-2 relative z-10 leading-relaxed">
              {p.desc}
            </p>

            <span className="absolute bottom-4 right-10 text-white/40">
              <MousePointer2 size={26} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};