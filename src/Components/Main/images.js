import img1 from '../../img/1.gif';
import img2 from '../../img/2.gif';
import img3 from '../../img/3.gif';
import img4 from '../../img/4.gif';
import img5 from '../../img/5.gif';
import img6 from '../../img/6.gif';
import img7 from '../../img/7.gif';
import img8 from '../../img/8.gif';
import img9 from '../../img/9.gif';
import img10 from '../../img/10.gif';
import img11 from '../../img/11.gif';
import img12 from '../../img/12.gif';
import img13 from '../../img/13.gif';
import img14 from '../../img/14.gif';
import img15 from '../../img/15.gif';
import img16 from '../../img/16.gif';
import img17 from '../../img/17.gif';
import img18 from '../../img/18.gif';
import img19 from '../../img/19.gif';
import img20 from '../../img/20.gif';
import img21 from '../../img/21.gif';
import img22 from '../../img/22.gif';
import img23 from '../../img/23.gif';
import img24 from '../../img/24.gif';

import s_img1 from '../../img/s_1.gif';
import s_img2 from '../../img/s_2.gif';
import s_img3 from '../../img/s_3.gif';
import s_img4 from '../../img/s_4.gif';
import s_img5 from '../../img/s_5.gif';
import s_img6 from '../../img/s_6.gif';
import s_img7 from '../../img/s_7.gif';
import s_img8 from '../../img/s_8.gif';
import s_img9 from '../../img/s_9.gif';
import s_img10 from '../../img/s_10.gif';
import s_img11 from '../../img/s_11.gif';
import s_img12 from '../../img/s_12.gif';
import s_img13 from '../../img/s_13.gif';
import s_img14 from '../../img/s_14.gif';
import s_img15 from '../../img/s_15.gif';
import s_img16 from '../../img/s_16.gif';
import s_img17 from '../../img/s_17.gif';
import s_img18 from '../../img/s_18.gif';
import s_img19 from '../../img/s_19.gif';
import s_img20 from '../../img/s_20.gif';
import s_img21 from '../../img/s_21.gif';
import s_img22 from '../../img/s_22.gif';
import s_img23 from '../../img/s_23.gif';
import s_img24 from '../../img/s_24.gif';

const images = [
  
  { id: 1,  sta: s_img1, src: img1,  title: 'Sorting', tags: ["array","algorithm","bubble","select","insert","selection","insertion","merge","quick","randomized quick","counting","radix","sort","list","data structure","sorting"] },
  { id: 2,  sta: s_img2, src: img2,  title: 'Bitmask', tags: ["bit manipulation","set","array","list","ds","data structure","bitmask"] },
  { id: 3,  sta: s_img3, src: img3,  title: 'Linked List', tags: ["stack","queue","doubly","deque","array","ds","data structure","linked","linked list"] },
  { id: 4,  sta: s_img4, src: img4,  title: 'Hash Table', tags: ["open addressing","linear","quadratic","probing","ds","data structure"] },
  { id: 5,  sta: s_img5, src: img5,  title: 'Binary Heap', tags: ["priority queue","recursive","recursion","ds","data structure","binary","heap"] },
  { id: 6,  sta: s_img6, src: img6,  title: 'Binary Search Tree', tags: ["adelson velskii landis","set","table","avl","recursion","recursive","ds","data structure","set","bst","binary", "search", "tree", "priority","queue"] },
  { id: 7,  sta: s_img7, src: img7,  title: 'Graph Structures', tags: ["tree","complete","bipartite","dag","graph","ds","data structure"] },
  { id: 8,  sta: s_img8, src: img8,  title: 'Union-Find DS', tags: ["path compression","disjoint","set","data structure","union by rank","tree","find","ds"] },
  { id: 9,  sta: s_img9, src: img9,  title: 'Segment Tree', tags: ["dynamic","range","sum","min","max","segment","tree","ds","data structure"] },
  { id: 10, sta: s_img10,src: img10, title: 'Fenwick Tree', tags: ["binary indexed tree","bit","dynamic","fenwick","range","sum","point","update","binary","ds","data structure"] },
  { id: 11, sta: s_img11,src: img11, title: 'Recursion Tree/DAG', tags: ["dynamic programing","dp","generic","recursion","recursive","algorithm","tree","dag"] },
  { id: 12, sta: s_img12,src: img12, title: 'Graph Traversal', tags: ["bfs","dfs","bipartite","scc","cut vertex","articulation point","bridge","graph","algorithm"] },
  { id: 13, sta: s_img13,src: img13, title: 'Min Spanning Tree', tags: ["mst","prim","kruskal","graph","min","spanning","tree","algorithm"] },
  { id: 14, sta: s_img14,src: img14, title: 'SS Shortest Paths', tags: ["sssp","single-source","bfs","dijkstra","bellman ford","single source","shortest path","graph","algorithm"] },
  { id: 15, sta: s_img15,src: img15, title: 'Network Flow', tags: ["max flow","edmonds karp","min cut","dinic","ford fulkerson","algorithm"] },
  { id: 16, sta: s_img16,src: img16, title: 'Graph Matching', tags: ["augmenting path","bipartite","graph","matching","algorithm"] },
  { id: 17, sta: s_img17,src: img17, title: 'Cycle Finding', tags: ["floyd","trtoise-hare","math","algorithm"] },
  { id: 18, sta: s_img18,src: img18, title: 'Suffix Tree', tags: ["string","matching","lrs","lcs","suffix","tree","ds","data structure"] },
  { id: 19, sta: s_img19,src: img19, title: 'Suffix Array', tags: ["lcp","matching","lrs","lcs","suffix","array","string","ds","data structure"] },
  { id: 20, sta: s_img20,src: img20, title: 'Geometry (Polygon)', tags: ["convex","cut","winding","concave","computational","geometry","algorithm"] },
  { id: 21, sta: s_img21,src: img21, title: 'Convex Hull', tags: ["andrew","monotone chain","graham","scan","jarvis","march","computational","geometry","algorithm"] },
  { id: 22, sta: s_img22,src: img22, title: 'Min Vertex Cover', tags: ["np-hard","graph","bipartite","tree","dp","bipartite","matching","max flow"] },
  { id: 23, sta: s_img23,src: img23, title: 'Traveling Salesman', tags: ["np-hard","graph","dp","dp","mst"] },
  { id: 24, sta: s_img24,src: img24, title: 'Steiner Tree', tags: ["np-hard","graph","mst"] },
  
];

export default images;

