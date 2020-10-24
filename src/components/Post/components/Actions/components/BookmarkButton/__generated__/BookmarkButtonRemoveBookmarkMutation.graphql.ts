/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RemoveBookmarkInput = {
    postId: string;
};
export type BookmarkButtonRemoveBookmarkMutationVariables = {
    input: RemoveBookmarkInput;
};
export type BookmarkButtonRemoveBookmarkMutationResponse = {
    readonly removeBookmark: {
        readonly post: {
            readonly id: string;
            readonly viewerHasBookmarked: boolean;
        } | null;
    } | null;
};
export type BookmarkButtonRemoveBookmarkMutation = {
    readonly response: BookmarkButtonRemoveBookmarkMutationResponse;
    readonly variables: BookmarkButtonRemoveBookmarkMutationVariables;
};



/*
mutation BookmarkButtonRemoveBookmarkMutation(
  $input: RemoveBookmarkInput!
) {
  removeBookmark(input: $input) {
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
    "concreteType": "RemoveBookmarkPayload",
    "kind": "LinkedField",
    "name": "removeBookmark",
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
    "name": "BookmarkButtonRemoveBookmarkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookmarkButtonRemoveBookmarkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ac4a1bef21eced940d9d71e6d6ea2691",
    "id": null,
    "metadata": {},
    "name": "BookmarkButtonRemoveBookmarkMutation",
    "operationKind": "mutation",
    "text": "mutation BookmarkButtonRemoveBookmarkMutation(\n  $input: RemoveBookmarkInput!\n) {\n  removeBookmark(input: $input) {\n    post {\n      id\n      viewerHasBookmarked\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bac0e6e95d78a2302330dc6bfcecf0a0';
export default node;
