let routerPush: ((path: string) => void) | null = null;

export function setRouterPush(fn: (path: string) => void) {
  routerPush = fn;
}

export function navigateTo(path: string) {
  routerPush?.(path);
}
