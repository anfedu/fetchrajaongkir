import { useLayoutEffect, useState, useEffect } from "react";

export default function useWindowPosition(id, number) {
  const [animation, setAnimation] = useState(false);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    function updatePosition() {
      const offsetSetHeight = window.document.getElementById(id).offsetHeight;
      const scrollTop = window.document.getElementById(id).scrollTop;
      if (scrollTop > offsetSetHeight * number) {
        setAnimation(true);
      }
      if (scrollTop < offsetSetHeight * number) {
        setAnimation(false);
      }
    }

    window.document
      .getElementById(id)
      .addEventListener("scroll", updatePosition);
    updatePosition();
    return () =>
      window.document
        .getElementById(id)
        .removeEventListener("scroll", updatePosition);
  }, [id]);
  return animation;
}
