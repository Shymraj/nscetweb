import { useState, useEffect, useRef } from "react";

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targetEnd = Number(end) || 0;
    let current = 0;
    const stepTime = 20;
    const increment = targetEnd / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= targetEnd) {
        setCount(targetEnd);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={counterRef} style={{ display: "inline-block" }}>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;