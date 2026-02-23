// SplitText.jsx
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
  animateOnScroll = true,

  // Fade-out behavior
  fadeOutOnScroll = false,
  fadeOutStart = "top top",
  fadeOutEnd = "bottom top",
  fadeOutY = -32,
  fadeOutStagger = 0.02,
  fadeOutTrigger = "self", // "self" | "parent" | "section" | selector string
}) => {
  const ref = useRef(null);

  // Prevent re-animation unless text changes
  const animationCompletedRef = useRef(false);

  // Keep callback ref updated
  const onCompleteRef = useRef(onLetterAnimationComplete);

  // Track triggers we create so we can kill them safely
  const introSTRef = useRef(null);
  const fadeSTRef = useRef(null);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    // Allow re-run if text changes
    animationCompletedRef.current = false;
  }, [text]);

  useEffect(() => {
    if (document.fonts?.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts?.ready?.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const el = ref.current;

      // Clean up any previous split instance attached to this element
      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {
          /* noop */
        }
        el._rbsplitInstance = null;
      }

      // Kill any previous triggers we created (safety for HMR / route changes)
      try {
        introSTRef.current?.kill();
      } catch (_) {}
      try {
        fadeSTRef.current?.kill();
      } catch (_) {}
      introSTRef.current = null;
      fadeSTRef.current = null;

      // Build ScrollTrigger "start" for intro when animateOnScroll = true
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";

      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;

      const start = `top ${startPct}%${sign}`;

      let targets;
      const assignTargets = (self) => {
        targets = null;

        if (splitType.includes("chars") && self.chars?.length) targets = self.chars;
        if (!targets && splitType.includes("words") && self.words?.length) targets = self.words;
        if (!targets && splitType.includes("lines") && self.lines?.length) targets = self.lines;
        if (!targets) targets = self.chars || self.words || self.lines;
      };

      let fadeOutTl = null;

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === "lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
        onSplit: (self) => {
          assignTargets(self);

          // -----------------------
          // Intro tween (load or scroll-triggered)
          // -----------------------
          const introVars = {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            willChange: "transform, opacity",
            force3D: true,
            onComplete: () => {
              onCompleteRef.current?.();
            },
          };

          if (animateOnScroll) {
            introVars.scrollTrigger = {
              trigger: el,
              start,
              once: true,
              fastScrollEnd: true,
              anticipatePin: 0.4,
            };
          }

          const introTween = gsap.fromTo(targets, { ...from }, introVars);

          // Keep reference to intro ScrollTrigger (if any) for cleanup
          introSTRef.current = introTween.scrollTrigger || null;

          // -----------------------
          // Fade out tween (scrubbed, staggered per-letter)
          // -----------------------
          if (fadeOutOnScroll) {
            // ✅ Always prefer chars for fade-out so letters fade individually
            const fadeTargets = self.chars?.length ? self.chars : targets;

            const getFadeTrigger = () => {
              if (!el) return el;

              if (fadeOutTrigger === "self") return el;
              if (fadeOutTrigger === "parent") return el.parentElement || el;
              if (fadeOutTrigger === "section") return el.closest("section") || el;

              if (typeof fadeOutTrigger === "string") {
                const found = document.querySelector(fadeOutTrigger);
                return found || el;
              }

              return el;
            };

            const fadeTriggerEl = getFadeTrigger();

            fadeOutTl = gsap.timeline({
              scrollTrigger: {
                trigger: fadeTriggerEl,
                start: fadeOutStart,
                end: fadeOutEnd,
                scrub: true,
                invalidateOnRefresh: true,
              },
            });

            fadeOutTl.to(
              fadeTargets,
              {
                opacity: 0,
                y: fadeOutY,
                ease: "none",
                // ✅ stronger stagger control (more obviously per-letter)
                stagger: { each: fadeOutStagger, from: "start" },
                willChange: "transform, opacity",
                force3D: true,
              },
              0
            );

            // Keep reference to fade ScrollTrigger for cleanup
            fadeSTRef.current = fadeOutTl.scrollTrigger || null;
          }

          // Mark as completed after we set everything up (prevents re-splitting loops)
          animationCompletedRef.current = true;

          return introTween;
        },
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        // Kill our triggers (even if trigger element isn't `el`)
        try {
          introSTRef.current?.kill();
        } catch (_) {}
        try {
          fadeSTRef.current?.kill();
        } catch (_) {}
        introSTRef.current = null;
        fadeSTRef.current = null;

        // Kill timeline if it exists
        try {
          fadeOutTl?.kill();
        } catch (_) {}

        // Revert split
        try {
          splitInstance.revert();
        } catch (_) {
          /* noop */
        }

        el._rbsplitInstance = null;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        animateOnScroll,

        // Fade deps
        fadeOutOnScroll,
        fadeOutStart,
        fadeOutEnd,
        fadeOutY,
        fadeOutStagger,
        fadeOutTrigger,
      ],
      scope: ref,
    }
  );

  const style = {
    textAlign,
    overflow: "hidden",
    display: textAlign === "center" ? "block" : "inline-block",
    marginLeft: textAlign === "center" ? "auto" : undefined,
    marginRight: textAlign === "center" ? "auto" : undefined,
    whiteSpace: "normal",
    wordWrap: "break-word",
    willChange: "transform, opacity",
  };

  const classes = `split-parent ${className}`;
  const Tag = tag || "p";

  return (
    <Tag ref={ref} style={style} className={classes}>
      {text}
    </Tag>
  );
};

export default SplitText;