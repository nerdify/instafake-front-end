/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RemoveLikeInput = {
    subjectId: string;
};
export type LikeButtonRemoveLikeMutationVariables = {
    input: RemoveLikeInput;
};
export type LikeButtonRemoveLikeMutationResponse = {
    readonly removeLike: {
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
export type LikeButtonRemoveLikeMutation = {
    readonly response: LikeButtonRemoveLikeMutationResponse;
    readonly variables: LikeButtonRemoveLikeMutationVariables;
};



/*
mutation LikeButtonRemoveLikeMutation(
  $input: RemoveLikeInput!
) {
  removeLike(input: $input) {
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
    "name": "LikeButtonRemoveLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveLikePayload",
        "kind": "LinkedField",
        "name": "removeLike",
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
    "name": "LikeButtonRemoveLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveLikePayload",
        "kind": "LinkedField",
        "name": "removeLike",
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
    "cacheID": "6ab065ffa130a3cb118f6b6098040cf0",
    "id": null,
    "metadata": {},
    "name": "LikeButtonRemoveLikeMutation",
    "operationKind": "mutation",
    "text": "mutation LikeButtonRemoveLikeMutation(\n  $input: RemoveLikeInput!\n) {\n  removeLike(input: $input) {\n    subject {\n      __typename\n      viewerHasLiked\n      ... on Comment {\n        id\n      }\n      ... on Post {\n        id\n        likes(first: 1) {\n          pageInfo {\n            total\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '08c5dea79647cc50160b3a13f7c6e9bf';
export default node;
