/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Actions_post = {
    readonly " $fragmentRefs": FragmentRefs<"BookmarkButton_post" | "LikeButton_subject">;
    readonly " $refType": "Actions_post";
};
export type Actions_post$data = Actions_post;
export type Actions_post$key = {
    readonly " $data"?: Actions_post$data;
    readonly " $fragmentRefs": FragmentRefs<"Actions_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Actions_post",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BookmarkButton_post"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LikeButton_subject"
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '804368a3bbd82a833e76883d7b2f8c39';
export default node;
