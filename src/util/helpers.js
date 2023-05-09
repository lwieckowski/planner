import { MOBILE_HEIGHT, MOBILE_WIDTH } from "./constants";

export function checkIfMobile(hookFunction) {
    const isLandscape = hookFunction({ orientation: 'landscape' }, true)
    const maxWidth = isLandscape ? MOBILE_HEIGHT : MOBILE_WIDTH;
    const isMobile = hookFunction({ query: `(max-width: ${maxWidth}px)`});
    return isMobile;
}
