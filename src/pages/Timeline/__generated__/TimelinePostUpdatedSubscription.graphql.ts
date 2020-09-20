/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TimelinePostUpdatedSubscriptionVariables = {};
export type TimelinePostUpdatedSubscriptionResponse = {
    readonly postUpdated: {
        readonly likes: {
            readonly pageInfo: {
                readonly total: number | null;
            };
        } | null;
    } | null;
};
export type TimelinePostUpdatedSubscription = {
    readonly response: TimelinePostUpdatedSubscriptionResponse;
    readonly variables: TimelinePostUpdatedSubscriptionVariables;
};



/*
subscription TimelinePostUpdatedSubscription {
  postUpdated {
    likes(first: 1) {
      pageInfo {
        total
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TimelinePostUpdatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "postUpdated",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TimelinePostUpdatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "postUpdated",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "84a463ea95f1512509e6934a700051a2",
    "id": null,
    "metadata": {},
    "name": "TimelinePostUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription TimelinePostUpdatedSubscription {\n  postUpdated {\n    likes(first: 1) {\n      pageInfo {\n        total\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '00220d890d13eb93343801e572ed7218';
export default node;
