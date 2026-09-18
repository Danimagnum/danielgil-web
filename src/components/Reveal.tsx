import { useEffect, useRef, type ReactNode } from "react";
interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.animate(
            [
              { opacity: 0, transform: "translateY(20px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 600, delay, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "backwards" },
          );
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
