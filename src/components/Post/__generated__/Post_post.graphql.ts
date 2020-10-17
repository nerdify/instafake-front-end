/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Post_post = {
    readonly description: string | null;
    readonly id: string;
    readonly rootComment: {
        readonly " $fragmentRefs": FragmentRefs<"Comment_comment">;
    } | null;
    readonly images: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Gallery_images">;
    }>;
    readonly likes: {
        readonly pageInfo: {
            readonly total: number | null;
        };
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"Actions_post" | "CommentList_post" | "CommentTextArea_post" | "Header_post">;
    readonly " $refType": "Post_post";
};
export type Post_post$data = Post_post;
export type Post_post$key = {
    readonly " $data"?: Post_post$data;
    readonly " $fragmentRefs": FragmentRefs<"Post_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Post_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "Actions_post"
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        }
      ],
      "kind": "FragmentSpread",
      "name": "CommentList_post"
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
(node as any).hash = '1536bf961165a238099cdccab9cedf4a';
export default node;
