export function diff<T>(a1: T[], a2: T[]): T[] {
    const a2Set = new Set(a2);
      return a1.filter(x => !a2Set.has(x));
}

// comment RATRATA

