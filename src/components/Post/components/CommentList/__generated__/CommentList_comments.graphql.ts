/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommentList_comments = ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    readonly " $refType": "CommentList_comments";
}>;
export type CommentList_comments$data = CommentList_comments;
export type CommentList_comments$key = ReadonlyArray<{
    readonly " $data"?: CommentList_comments$data;
    readonly " $fragmentRefs": FragmentRefs<"CommentList_comments">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CommentList_comments",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Comment_comment"
    }
  ],
  "type": "Comment",
  "abstractKey": null
};
(node as any).hash = '0e36de6f29e02003fc0df70fde1f0d14';
export default node;
