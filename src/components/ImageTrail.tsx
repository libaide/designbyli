"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ImageTrail.css";

type Point = {
  x: number;
  y: number;
};

function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(
  e: MouseEvent | TouchEvent,
  rect: DOMRect
): Point {
  let clientX = 0;
  let clientY = 0;

  if ("touches" in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ("clientX" in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getMouseDistance(p1: Point, p2: Point) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM: {
    el: HTMLElement;
    inner: HTMLElement | null;
  };

  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect: DOMRect | null = null;
  resize?: () => void;

  constructor(DOM_el: HTMLElement) {
    this.DOM = {
      el: DOM_el,
      inner: this.DOMInner(DOM_el),
    };

    this.getRect();
    this.initEvents();
  }

  DOMInner(el: HTMLElement) {
    return el.querySelector(".content__img-inner") as HTMLElement | null;
  }

  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };

    window.addEventListener("resize", this.resize);
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }

  destroy() {
    if (this.resize) {
      window.removeEventListener("resize", this.resize);
    }
  }
}

class ImageTrailVariant1 {
  container: HTMLElement;
  DOM: { el: HTMLElement };
  images: ImageItem[];
  imagesTotal: number;
  imgPosition: number;
  zIndexVal: number;
  activeImagesCount: number;
  isIdle: boolean;
  threshold: number;

  mousePos: Point;
  lastMousePos: Point;
  cacheMousePos: Point;

  rafId: number | null = null;
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...this.DOM.el.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img as HTMLElement)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.handlePointerMove = (ev) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };

    this.handlePointerMove = (ev) => {
  const rect = this.container.getBoundingClientRect();
  this.mousePos = getLocalPointerPos(ev, rect);
};

this.initRender = (ev) => {
  const rect = this.container.getBoundingClientRect();
  this.mousePos = getLocalPointerPos(ev, rect);
  this.cacheMousePos = { ...this.mousePos };

  this.rafId = requestAnimationFrame(() => this.render());

  window.removeEventListener("mousemove", this.initRender);
  window.removeEventListener("touchmove", this.initRender);
};

window.addEventListener("mousemove", this.handlePointerMove);
window.addEventListener("touchmove", this.handlePointerMove, {
  passive: true,
});

window.addEventListener("mousemove", this.initRender);
window.addEventListener("touchmove", this.initRender, {
  passive: true,
});
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }

    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }

    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;

    const img = this.images[this.imgPosition];
    if (!img?.rect) return;

    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3",
          opacity: 0,
          scale: 0.2,
        },
        0.4
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }

  destroy() {
    window.removeEventListener("mousemove", this.handlePointerMove);
window.removeEventListener("touchmove", this.handlePointerMove);
window.removeEventListener("mousemove", this.initRender);
window.removeEventListener("touchmove", this.initRender);

    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }

    this.images.forEach((img) => img.destroy());
  }
}

const variantMap = {
  1: ImageTrailVariant1,
} as const;

type VariantKey = keyof typeof variantMap;

type ImageTrailProps = {
  items: string[];
  variant?: VariantKey;
};

export default function ImageTrail({
  items = [],
  variant = 1,
}: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    const Cls = variantMap[variant];
    const instance = new Cls(containerRef.current);

    return () => {
      instance.destroy();
    };
  }, [variant, items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={`${url}-${i}`}>
          <div
            className="content__img-inner"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}