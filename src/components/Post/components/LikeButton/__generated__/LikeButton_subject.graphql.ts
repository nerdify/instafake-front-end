/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LikeButton_subject = {
    readonly __typename: string;
    readonly viewerHasLiked: boolean;
    readonly id?: string;
    readonly " $refType": "LikeButton_subject";
};
export type LikeButton_subject$data = LikeButton_subject;
export type LikeButton_subject$key = {
    readonly " $data"?: LikeButton_subject$data;
    readonly " $fragmentRefs": FragmentRefs<"LikeButton_subject">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LikeButton_subject",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasLiked",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Comment",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Post",
      "abstractKey": null
    }
  ],
  "type": "Likeable",
  "abstractKey": "__isLikeable"
};
})();
(node as any).hash = '98db8bc8139dbfccb96d5f267f5a7984';
export default node;
