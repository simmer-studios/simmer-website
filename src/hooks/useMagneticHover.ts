import { useEffect, useRef, useState } from "react";

export const useMagneticHover = (strength: number = 40) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if hover is supported and screen size is > 1024px (desktop)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const hasHoverSupport = window.matchMedia("(hover: hover)").matches;

    const updateEnabled = () => {
      const isDesktopSize = window.innerWidth >= 1024;
      setIsEnabled(isDesktopSize && hasHoverSupport);
    };

    // Initial check
    updateEnabled();

    // Listen for changes
    mediaQuery.addEventListener("change", updateEnabled);
    window.addEventListener("resize", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
      window.removeEventListener("resize", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      // Reset transform when disabled
      const element = ref.current;
      if (element) {
        element.style.transform = "";
      }
      return;
    }

    const element = ref.current;
    if (!element) return;

    const parent = element.parentElement;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const parentRect = parent.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Calculate parent center
      const parentCenterX = parentRect.left + parentRect.width / 2;
      const parentCenterY = parentRect.top + parentRect.height / 2;

      // Calculate distance from cursor to parent center
      const distanceFromCenter = Math.sqrt(
        Math.pow(e.clientX - parentCenterX, 2) +
          Math.pow(e.clientY - parentCenterY, 2)
      );

      // Calculate strength based on distance (direct relationship - further = stronger)
      const maxDistance = Math.max(parentRect.width, parentRect.height) / 2;
      const distanceStrength = Math.min(distanceFromCenter / maxDistance, 1);

      // Calculate movement based on cursor position relative to element
      const moveX = e.clientX - parentCenterX;
      const moveY = e.clientY - parentCenterY;

      // Calculate raw movement
      let x = moveX * distanceStrength * (strength / 100);
      let y = moveY * distanceStrength * (strength / 100);

      // Calculate boundaries
      const maxX = (parentRect.width - elementRect.width) / 2;
      const maxY = (parentRect.height - elementRect.height) / 2;

      // Clamp movement within boundaries
      x = Math.max(Math.min(x, maxX), -maxX);
      y = Math.max(Math.min(y, maxY), -maxY);

      element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(-50%, -50%)";
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, isEnabled]);

  return ref;
};
