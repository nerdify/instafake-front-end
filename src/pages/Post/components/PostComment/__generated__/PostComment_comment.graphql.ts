/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostComment_comment = {
    readonly text: string | null;
    readonly user: {
        readonly username: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"LikeButton_subject">;
    readonly " $refType": "PostComment_comment";
};
export type PostComment_comment$data = PostComment_comment;
export type PostComment_comment$key = {
    readonly " $data"?: PostComment_comment$data;
    readonly " $fragmentRefs": FragmentRefs<"PostComment_comment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostComment_comment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "username",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LikeButton_subject"
    }
  ],
  "type": "Comment",
  "abstractKey": null
};
(node as any).hash = '098fb75df9874f74522ef8c8eb6550ea';
export default node;
