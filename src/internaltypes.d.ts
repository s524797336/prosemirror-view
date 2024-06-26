import { Fragment, NodeType, Attrs, Node, ResolvedPos } from 'prosemirror-model';

interface InternalFragment extends Fragment {
  findIndex: (pos: number, rounded?: number) => { index: number, offset: number }
}

interface InternalNodeType extends NodeType {
  defaultAttrs?: Attrs
}

interface InternalNode extends Node {
  resolveNoCache(pos: number): ResolvedPos
}
