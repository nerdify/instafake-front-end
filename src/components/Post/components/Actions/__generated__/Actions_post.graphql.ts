/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Actions_post = {
    readonly id: string;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
(node as any).hash = 'da17d700d8f259e0da9967c5b2269a25';
export default node;
