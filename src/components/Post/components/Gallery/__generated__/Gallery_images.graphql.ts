/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Gallery_images = ReadonlyArray<{
    readonly url: string;
    readonly " $refType": "Gallery_images";
}>;
export type Gallery_images$data = Gallery_images;
export type Gallery_images$key = ReadonlyArray<{
    readonly " $data"?: Gallery_images$data;
    readonly " $fragmentRefs": FragmentRefs<"Gallery_images">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Gallery_images",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": null
};
(node as any).hash = 'dfb4f1887d1454d94cecafbfc9de6cdc';
export default node;
