import { Paper, KNode } from '../types'

export const papers: Paper[] = [
  {
    title: 'Semi-Supervised Classification with Graph Convolutional Networks',
    abstract: 'We present a scalable approach for semi-supervised learning on graph-structured data that is based on an efficient variant of convolutional neural networks which operate directly on graphs. We motivate the choice of our convolutional architecture via a localized first-order approximation of spectral graph convolutions. Our model scales linearly in the number of graph edges and learns hidden layer representations that encode both local graph structure and features of nodes. In a number of experiments on citation networks and on a knowledge graph dataset we demonstrate that our approach outperforms related methods by a significant margin.',
    uniqueRef: 'arXiv:1609.02907v4'
  }
]

export const knodes: KNode[] = [
  {
    manualName: 'Graph Convolutional Network',
    items: [
    ]
  }, {
    manualName: 'Laplacian regularization',
    items: [
    ]
  }, {
    manualName: 'Chebyshev polynomials',
    items: [
    ]
  }, {
    manualName: 'Fourier transform',
    items: [
      "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\ e^{-2\\pi i x \\xi}\\,dx,"
    ]
  }, {
    manualName: 'Laplacian matrix',
    items: [
      `L^\\text{rw} := D^{-1}L = I - D^{-1}A`,
      `L^\\text{rw}_{i,j} := \\begin{cases}
        1 & \\mbox{if } i = j \\mbox{ and } \\deg(v_i) \\neq 0\\\\
        -\\frac{1}{\\deg(v_i)} & \\mbox{if } i \\neq j \\mbox{ and } v_i \\mbox{ is adjacent to } v_j \\\\
        0 & \\mbox{otherwise}.
      \\end{cases}`,
      `\\begin{cases}
        Q_{i,j} < 0 & \\mbox{if } i \\neq j \\mbox{ and } v_i \\mbox{ is adjacent to } v_j\\\\
        Q_{i,j} = 0 & \\mbox{if } i \\neq j \\mbox{ and } v_i \\mbox{ is not adjacent to } v_j \\\\
      \\mbox{any number} & \\mbox{otherwise}.
      \\end{cases}`
    ]
  }
];