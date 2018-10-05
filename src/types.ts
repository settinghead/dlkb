export interface Paper {
  title: string;
  abstract: string;
  uniqueRef: string;
}

export interface KNode {
  manualName?: string;
  items: Math[]
}

export type Math = string