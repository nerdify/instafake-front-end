/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostComment_comment = {
    readonly createdAt: string;
    readonly text: string | null;
    readonly likes: {
        readonly pageInfo: {
            readonly total: number | null;
        };
    } | null;
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
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "LikeConnection",
      "kind": "LinkedField",
      "name": "likes",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "total",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "likes(first:1)"
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
(node as any).hash = 'e43ec197048f18deeb352b711470e56c';
export default node;
