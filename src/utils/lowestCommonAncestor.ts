/**
 * Finds the lowest common ancestors of the given objects, if it exists.
 * @param objects The objects to find the lowest common ancestor for.
 */
export function lowestCommonAncestor(objects: Set<pc.GraphNode>): pc.GraphNode | null {
  const sharedAncestors = new Map<pc.GraphNode, number>();
  for (const object of objects) {
    let current: pc.GraphNode | null = object;
    do {
      const newValue = (sharedAncestors.get(current) ?? 0) + 1;
      if (newValue === objects.size) {
        return current;
      }
      sharedAncestors.set(current, newValue);
      current = current.parent;
    } while (current !== null);
  }
  return null;
}
