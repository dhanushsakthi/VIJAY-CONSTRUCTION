import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom hook for GSAP animations with proper cleanup
 * @param callback The GSAP animation logic
 * @param dependencies Dependencies array for useLayoutEffect
 */
export function useGSAP(
    callback: (context: gsap.Context) => void,
    dependencies: any[] = []
) {
    const root = useRef<any>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(callback, root);
        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback, ...dependencies]);

    return root;
}
