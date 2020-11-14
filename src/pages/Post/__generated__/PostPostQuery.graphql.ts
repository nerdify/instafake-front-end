/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostPostQueryVariables = {
    id: string;
};
export type PostPostQueryResponse = {
    readonly post: {
        readonly id: string;
        readonly createdAt: string;
        readonly comments: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly " $fragmentRefs": FragmentRefs<"PostComment_comment">;
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
        readonly rootComment: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"PostComment_comment">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"Actions_post" | "CommentTextArea_post" | "Header_post">;
    } | null;
};
export type PostPostQuery = {
    readonly response: PostPostQueryResponse;
    readonly variables: PostPostQueryVariables;
};



/*
query PostPostQuery(
  $id: ID!
) {
  post(id: $id) {
    id
    createdAt
    ...Actions_post
    ...CommentTextArea_post
    ...Header_post
    comments(first: 12, orderBy: {column: CREATED_AT, order: DESC}) {
      edges {
        node {
          ...PostComment_comment
          id
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    images {
      ...Gallery_images
    }
    likes(first: 1) {
      pageInfo {
        total
      }
    }
    rootComment {
      id
      ...PostComment_comment
    }
  }
}

fragment Actions_post on Post {
  ...BookmarkButton_post
  ...LikeButton_subject
  id
}

fragment BookmarkButton_post on Post {
  id
  viewerHasBookmarked
}

fragment CommentTextArea_post on Post {
  id
}

fragment Gallery_images on Image {
  url
}

fragment Header_post on Post {
  user {
    username
    id
  }
}

fragment LikeButton_subject on Likeable {
  __isLikeable: __typename
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
}

fragment PostComment_comment on Comment {
  ...LikeButton_subject
  createdAt
  text
  likes(first: 1) {
    pageInfo {
      total
    }
  }
  user {
    username
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "PostComment_comment"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v7 = {
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
v8 = {
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
v9 = {
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
    },
    (v2/*: any*/)
  ],
  "storageKey": null
},
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 12
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "column": "CREATED_AT",
      "order": "DESC"
    }
  }
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasLiked",
  "storageKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/),
    (v12/*: any*/)
  ],
  "type": "Likeable",
  "abstractKey": "__isLikeable"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostPostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                      (v2/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
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
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "rootComment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
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
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostPostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerHasBookmarked",
            "storageKey": null
          },
          (v9/*: any*/),
          {
            "alias": null,
            "args": (v10/*: any*/),
            "concreteType": "CommentConnection",
            "kind": "LinkedField",
            "name": "comments",
            "plural": false,
            "selections": [
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
                      (v3/*: any*/),
                      (v11/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v12/*: any*/)
                        ],
                        "type": "Likeable",
                        "abstractKey": "__isLikeable"
                      }
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": "comments(first:12,orderBy:{\"column\":\"CREATED_AT\",\"order\":\"DESC\"})"
          },
          {
            "alias": null,
            "args": (v10/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "Post_comments",
            "kind": "LinkedHandle",
            "name": "comments"
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "rootComment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v11/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "89f1ca543caa43a6087e660585b11596",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "post",
            "comments"
          ]
        }
      ]
    },
    "name": "PostPostQuery",
    "operationKind": "query",
    "text": "query PostPostQuery(\n  $id: ID!\n) {\n  post(id: $id) {\n    id\n    createdAt\n    ...Actions_post\n    ...CommentTextArea_post\n    ...Header_post\n    comments(first: 12, orderBy: {column: CREATED_AT, order: DESC}) {\n      edges {\n        node {\n          ...PostComment_comment\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    images {\n      ...Gallery_images\n    }\n    likes(first: 1) {\n      pageInfo {\n        total\n      }\n    }\n    rootComment {\n      id\n      ...PostComment_comment\n    }\n  }\n}\n\nfragment Actions_post on Post {\n  ...BookmarkButton_post\n  ...LikeButton_subject\n  id\n}\n\nfragment BookmarkButton_post on Post {\n  id\n  viewerHasBookmarked\n}\n\nfragment CommentTextArea_post on Post {\n  id\n}\n\nfragment Gallery_images on Image {\n  url\n}\n\nfragment Header_post on Post {\n  user {\n    username\n    id\n  }\n}\n\nfragment LikeButton_subject on Likeable {\n  __isLikeable: __typename\n  __typename\n  viewerHasLiked\n  ... on Comment {\n    id\n  }\n  ... on Post {\n    id\n    likes(first: 1) {\n      pageInfo {\n        total\n      }\n    }\n  }\n}\n\nfragment PostComment_comment on Comment {\n  ...LikeButton_subject\n  createdAt\n  text\n  likes(first: 1) {\n    pageInfo {\n      total\n    }\n  }\n  user {\n    username\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '35320f7990ef149ff61493e3d70ef3ce';
export default node;
