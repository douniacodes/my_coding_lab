import { useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer);

export const HeaderTitle = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const title = container.current?.querySelector(".rail");

    if (!title) return;

    const tl = gsap.to(title, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    Observer.create({
      target: window,

      onChangeY(self) {
        let factor = self.deltaY < 0 ? -2.5 : 2.5;

        gsap
          .timeline({
            defaults: { ease: "none" },
          })
          .to(tl, {
            timeScale: factor,
            duration: 0.2,
            overwrite: true,
          })
          .to(
            tl,
            {
              timeScale: factor / 2,
              duration: 1,
            },
            "+=0.3"
          );
      },
    });
  }, { scope: container });

  return (
    <div
      ref={container}
      className="overflow-hidden w-full bg-black"
    >
      <div className="rail flex w-max">
        <h1 className="whitespace-nowrap font-black leading-none pr-2 py-100">
          My Coding Journey • Made with passion and curiosity •
        </h1>
        <h1 className="whitespace-nowrap font-black leading-none pr-2 py-100">
          My Coding Journey • Made with passion and curiosity •
        </h1>
      </div>
    </div>
  );
};