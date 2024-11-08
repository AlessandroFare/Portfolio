declare module '@studio-freight/lenis' {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smooth?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal';
    wrapper?: HTMLElement | Window;
    content?: HTMLElement;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    
    destroy(): void;
    raf(time: number): void;
    start(): void;
    stop(): void;
  }
} 