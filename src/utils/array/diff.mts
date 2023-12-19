export function diff<T>(a1: T[], a2: T[]): T[] {
    console.log('443')
    const a2Set = new Set(a2);
      return a1.filter(x => !a2Set.has(x));
}

// comment 1sdf33
// comment 1sdf33
// comment 1sdf33

