/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreatePostInput = {
    photos: Array<unknown>;
    text: string;
};
export type CreatePostCreatePostMutationVariables = {
    input: CreatePostInput;
};
export type CreatePostCreatePostMutationResponse = {
    readonly createPost: {
        readonly post: {
            readonly id: string;
            readonly user: {
                readonly username: string;
            };
        };
    } | null;
};
export type CreatePostCreatePostMutation = {
    readonly response: CreatePostCreatePostMutationResponse;
    readonly variables: CreatePostCreatePostMutationVariables;
};



/*
mutation CreatePostCreatePostMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    post {
      id
      user {
        username
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePostCreatePostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
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
    "name": "CreatePostCreatePostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
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
    "cacheID": "9ec0000dcab2a1e427e942d2c78c7359",
    "id": null,
    "metadata": {},
    "name": "CreatePostCreatePostMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostCreatePostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n      user {\n        username\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '46a12896ea1c8c651e64c9643494a525';
export default node;
