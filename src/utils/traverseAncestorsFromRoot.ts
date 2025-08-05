export function traverseAncestorsFromRoot(
  object: pc.GraphNode,
  callback: (object: pc.GraphNode) => void,
): void {
  const ancestors: pc.GraphNode[] = [];

  let head: pc.GraphNode | null = object;
  while (head !== null) {
    ancestors.unshift(head);
    head = head.parent;
  }

  ancestors.forEach((ancestor) => {
    callback(ancestor);
  });
}
