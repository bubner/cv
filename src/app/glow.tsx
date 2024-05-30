"use client";
import { CSSProperties, useEffect, useState } from "react";

export default function Glow() {
  const [height, setHeight] = useState("0");
  useEffect(() => {
    const main = document.querySelector("main");
    if (main)
        setHeight(document.defaultView?.getComputedStyle(main as HTMLElement).height || "0");
    const captures = document.querySelectorAll(".glow-capture");
    if (captures) {
      captures.forEach((c) => {
        const capture = c as HTMLElement;
        const clonedChild = capture.children[0].cloneNode(true) as HTMLElement;
        clonedChild.classList.add("glow-capture-child");
        const overlay = capture.querySelector(".glow-overlay") as HTMLElement;

        overlay?.appendChild(clonedChild);
        overlay?.style.setProperty("transition", "opacity 250ms ease-in-out");

        capture.addEventListener("mousemove", (event) => {
          const e = event as MouseEvent;
          const x = e.pageX - capture.offsetLeft;
          const y = e.pageY - capture.offsetTop;

          overlay?.style.setProperty("--glow-x", `${x}px`);
          overlay?.style.setProperty("--glow-y", `${y}px`);
          overlay?.style.setProperty("--glow-opacity", "1");
        });

        window.addEventListener("scroll", () => {
          overlay?.style.setProperty("--glow-opacity", "0");
        });

        capture.addEventListener("mouseleave", () => {
          overlay?.style.setProperty("--glow-opacity", "0");
        });
      });
    }
  }, []);
  return (
    <div
      className="glow-overlay"
      style={{ "--glow-color": "#ed1c24", height: parseFloat(height) + "px" } as CSSProperties}
    />
  );
}
