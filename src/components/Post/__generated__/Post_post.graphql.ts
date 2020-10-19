/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Post_post = {
    readonly id: string;
    readonly rootComment: {
        readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    } | null;
    readonly comments: {
        readonly pageInfo: {
            readonly total: number | null;
        };
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"CommentList_comments">;
            } | null;
        } | null> | null;
    } | null;
    readonly images: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Gallery_images">;
    }>;
    readonly likes: {
        readonly pageInfo: {
            readonly total: number | null;
        };
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"Actions_post" | "CommentTextArea_post" | "Header_post">;
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
  "name": "total",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
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
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "rootComment",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Comment_comment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "comments",
      "args": null,
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
            (v0/*: any*/),
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
                  "name": "CommentList_comments"
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
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Gallery_images"
        }
      ],
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
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": "likes(first:1)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Actions_post"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentTextArea_post"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Header_post"
    }
  ],
  "type": "Post",
  "abstractKey": null
};
})();
(node as any).hash = 'ddd59e049f6a140eece8248f4e230dfb';
export default node;
