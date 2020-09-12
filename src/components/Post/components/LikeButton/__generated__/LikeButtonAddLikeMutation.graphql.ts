/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddLikeInput = {
    subjectId: string;
};
export type LikeButtonAddLikeMutationVariables = {
    input: AddLikeInput;
};
export type LikeButtonAddLikeMutationResponse = {
    readonly addLike: {
        readonly subject: {
            readonly __typename: string;
            readonly viewerHasLiked: boolean;
            readonly id?: string;
            readonly likes?: {
                readonly pageInfo: {
                    readonly total: number | null;
                };
            } | null;
        };
    } | null;
};
export type LikeButtonAddLikeMutation = {
    readonly response: LikeButtonAddLikeMutationResponse;
    readonly variables: LikeButtonAddLikeMutationVariables;
};



/*
mutation LikeButtonAddLikeMutation(
  $input: AddLikeInput!
) {
  addLike(input: $input) {
    subject {
      __typename
      viewerHasLiked
      ... on Comment {
        id
      }
      ... on Post {
        id
        likes(first: 1) {
          pageInfo {
            total
          }
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasLiked",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "kind": "InlineFragment",
  "selections": (v5/*: any*/),
  "type": "Comment",
  "abstractKey": null
},
v7 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/),
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
    }
  ],
  "type": "Post",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LikeButtonAddLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddLikePayload",
        "kind": "LinkedField",
        "name": "addLike",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "subject",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LikeButtonAddLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddLikePayload",
        "kind": "LinkedField",
        "name": "addLike",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "subject",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v5/*: any*/),
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "253f49ec327e12f7f3b880684c6e3b3d",
    "id": null,
    "metadata": {},
    "name": "LikeButtonAddLikeMutation",
    "operationKind": "mutation",
    "text": "mutation LikeButtonAddLikeMutation(\n  $input: AddLikeInput!\n) {\n  addLike(input: $input) {\n    subject {\n      __typename\n      viewerHasLiked\n      ... on Comment {\n        id\n      }\n      ... on Post {\n        id\n        likes(first: 1) {\n          pageInfo {\n            total\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3cf3e83a810dbc63e07dde67f14f8f2d';
export default node;
