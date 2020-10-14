/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookmarkButton_post = {
    readonly id: string;
    readonly viewerHasBookmarked: boolean;
    readonly " $refType": "BookmarkButton_post";
};
export type BookmarkButton_post$data = BookmarkButton_post;
export type BookmarkButton_post$key = {
    readonly " $data"?: BookmarkButton_post$data;
    readonly " $fragmentRefs": FragmentRefs<"BookmarkButton_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookmarkButton_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasBookmarked",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = 'cb9e4981a736b9ce9c063786e05ed475';
export default node;
