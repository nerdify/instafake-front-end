/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Post_post = {
    readonly description: string | null;
    readonly id: string;
    readonly comments: {
        readonly pageInfo: {
            readonly total: number | null;
        };
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
            } | null;
        } | null> | null;
    } | null;
    readonly user: {
        readonly username: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"LikeButton_subject">;
    readonly " $refType": "Post_post";
};
export type Post_post$data = Post_post;
export type Post_post$key = {
    readonly " $data"?: Post_post$data;
    readonly " $fragmentRefs": FragmentRefs<"Post_post">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "comments"
        ]
      }
    ]
  },
  "name": "Post_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": "comments",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "column": "CREATED_AT",
            "order": "DESC"
          }
        }
      ],
      "concreteType": "CommentConnection",
      "kind": "LinkedField",
      "name": "__Post_comments_connection",
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CommentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Comment",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Comment_comment"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__Post_comments_connection(orderBy:{\"column\":\"CREATED_AT\",\"order\":\"DESC\"})"
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
  "type": "Post",
  "abstractKey": null
};
})();
(node as any).hash = 'a111d73e27ed80640c98ded61c87e8b9';
export default node;
