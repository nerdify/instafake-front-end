/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateBookmarkInput = {
    postId: string;
};
export type BookmarkButtonCreateBookmarkMutationVariables = {
    input: CreateBookmarkInput;
};
export type BookmarkButtonCreateBookmarkMutationResponse = {
    readonly createBookmark: {
        readonly post: {
            readonly id: string;
            readonly viewerHasBookmarked: boolean;
        } | null;
    } | null;
};
export type BookmarkButtonCreateBookmarkMutation = {
    readonly response: BookmarkButtonCreateBookmarkMutationResponse;
    readonly variables: BookmarkButtonCreateBookmarkMutationVariables;
};



/*
mutation BookmarkButtonCreateBookmarkMutation(
  $input: CreateBookmarkInput!
) {
  createBookmark(input: $input) {
    post {
      id
      viewerHasBookmarked
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateBookmarkPayload",
    "kind": "LinkedField",
    "name": "createBookmark",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
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
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookmarkButtonCreateBookmarkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookmarkButtonCreateBookmarkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3437660f94ee20dc883f2ac8d79d2cf9",
    "id": null,
    "metadata": {},
    "name": "BookmarkButtonCreateBookmarkMutation",
    "operationKind": "mutation",
    "text": "mutation BookmarkButtonCreateBookmarkMutation(\n  $input: CreateBookmarkInput!\n) {\n  createBookmark(input: $input) {\n    post {\n      id\n      viewerHasBookmarked\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '14374affc33615b6553ad760c65cd511';
export default node;
