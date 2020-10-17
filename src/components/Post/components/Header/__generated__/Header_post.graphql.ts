/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Header_post = {
    readonly user: {
        readonly username: string;
    };
    readonly " $refType": "Header_post";
};
export type Header_post$data = Header_post;
export type Header_post$key = {
    readonly " $data"?: Header_post$data;
    readonly " $fragmentRefs": FragmentRefs<"Header_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Header_post",
  "selections": [
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
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '10ed330b174a92ad80b1d6015628a517';
export default node;
