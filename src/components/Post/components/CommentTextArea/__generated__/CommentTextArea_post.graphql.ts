/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommentTextArea_post = {
    readonly id: string;
    readonly " $refType": "CommentTextArea_post";
};
export type CommentTextArea_post$data = CommentTextArea_post;
export type CommentTextArea_post$key = {
    readonly " $data"?: CommentTextArea_post$data;
    readonly " $fragmentRefs": FragmentRefs<"CommentTextArea_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentTextArea_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '687dcaf94d18a55bb6566b541d57b29d';
export default node;
