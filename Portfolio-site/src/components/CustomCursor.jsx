import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only set up listeners if we have a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const mouse = { x: 0, y: 0 };
    const cursor = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.opacity = "0";
        ringRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.opacity = "1";
        ringRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable') ||
        target.closest('.project-card') ||
        target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    let animationFrameId;
    const animate = () => {
      const ease = 0.15; // Delay speed for trailing circle
      
      cursor.x += (mouse.x - cursor.x);
      cursor.y += (mouse.y - cursor.y);
      
      ring.x += (mouse.x - ring.x) * ease;
      ring.y += (mouse.y - ring.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, select, input, textarea, [role="button"], .project-card, label, input[type="submit"] {
            cursor: none !important;
          }
          .custom-cursor-dot, 
          .custom-cursor-ring {
            display: block !important;
          }
        }
      `}</style>
      {/* Inner Dot */}
      <div
        ref={cursorRef}
        className="custom-cursor-dot hidden fixed top-0 left-0 w-1.5 h-1.5 bg-orange-600 rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring hidden fixed top-0 left-0 rounded-full border border-orange-600 pointer-events-none z-[9999] transition-[width,height,background-color,border-color,opacity] duration-300 ease-out ${
          isHovering 
            ? "w-12 h-12 bg-orange-600/10 border-orange-600 scale-100" 
            : "w-6 h-6 bg-transparent"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
