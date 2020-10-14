/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TimelinePostsQueryVariables = {};
export type TimelinePostsQueryResponse = {
    readonly posts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"Post_post">;
            } | null;
        } | null> | null;
    } | null;
};
export type TimelinePostsQuery = {
    readonly response: TimelinePostsQueryResponse;
    readonly variables: TimelinePostsQueryVariables;
};



/*
query TimelinePostsQuery {
  posts(first: 10, orderBy: {column: CREATED_AT, order: DESC}) {
    edges {
      node {
        ...Post_post_4yQIxA
        id
      }
    }
  }
}

fragment Actions_post on Post {
  ...BookmarkButton_post
  ...LikeButton_subject
}

fragment BookmarkButton_post on Post {
  id
  viewerHasBookmarked
}

fragment CommentList_comments on Comment {
  ...Comment_comment
  id
}

fragment CommentTextArea_post on Post {
  id
}

fragment Comment_comment on Comment {
  ...LikeButton_subject
  text
  user {
    username
    id
  }
}

fragment Gallery_images on Image {
  url
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

fragment Post_post_4yQIxA on Post {
  ...Actions_post
  ...CommentTextArea_post
  description
  id
  comments(first: 3, orderBy: {column: CREATED_AT, order: DESC}) {
    pageInfo {
      total
      endCursor
      hasNextPage
    }
    edges {
      node {
        ...CommentList_comments
        id
        __typename
      }
      cursor
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
  user {
    username
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "column": "CREATED_AT",
    "order": "DESC"
  }
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  (v0/*: any*/)
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 3
},
v4 = [
  (v3/*: any*/),
  (v0/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v6 = {
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasLiked",
  "storageKey": null
},
v9 = {
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
        (v5/*: any*/)
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
    "name": "TimelinePostsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": [
                      (v3/*: any*/)
                    ],
                    "kind": "FragmentSpread",
                    "name": "Post_post"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "posts(first:10,orderBy:{\"column\":\"CREATED_AT\",\"order\":\"DESC\"})"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TimelinePostsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "viewerHasBookmarked",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v4/*: any*/),
                    "concreteType": "CommentConnection",
                    "kind": "LinkedField",
                    "name": "comments",
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
                          (v5/*: any*/),
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "text",
                                "storageKey": null
                              },
                              (v6/*: any*/),
                              (v2/*: any*/),
                              (v7/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v8/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v9/*: any*/)
                                    ],
                                    "type": "Post",
                                    "abstractKey": null
                                  }
                                ],
                                "type": "Likeable",
                                "abstractKey": "__isLikeable"
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "comments(first:3,orderBy:{\"column\":\"CREATED_AT\",\"order\":\"DESC\"})"
                  },
                  {
                    "alias": null,
                    "args": (v4/*: any*/),
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
                  (v9/*: any*/),
                  (v6/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ],
                    "type": "Likeable",
                    "abstractKey": "__isLikeable"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "posts(first:10,orderBy:{\"column\":\"CREATED_AT\",\"order\":\"DESC\"})"
      }
    ]
  },
  "params": {
    "cacheID": "a0ce3cf32d9fb4c5191e7683042bef25",
    "id": null,
    "metadata": {},
    "name": "TimelinePostsQuery",
    "operationKind": "query",
    "text": "query TimelinePostsQuery {\n  posts(first: 10, orderBy: {column: CREATED_AT, order: DESC}) {\n    edges {\n      node {\n        ...Post_post_4yQIxA\n        id\n      }\n    }\n  }\n}\n\nfragment Actions_post on Post {\n  ...BookmarkButton_post\n  ...LikeButton_subject\n}\n\nfragment BookmarkButton_post on Post {\n  id\n  viewerHasBookmarked\n}\n\nfragment CommentList_comments on Comment {\n  ...Comment_comment\n  id\n}\n\nfragment CommentTextArea_post on Post {\n  id\n}\n\nfragment Comment_comment on Comment {\n  ...LikeButton_subject\n  text\n  user {\n    username\n    id\n  }\n}\n\nfragment Gallery_images on Image {\n  url\n}\n\nfragment LikeButton_subject on Likeable {\n  __isLikeable: __typename\n  __typename\n  viewerHasLiked\n  ... on Comment {\n    id\n  }\n  ... on Post {\n    id\n    likes(first: 1) {\n      pageInfo {\n        total\n      }\n    }\n  }\n}\n\nfragment Post_post_4yQIxA on Post {\n  ...Actions_post\n  ...CommentTextArea_post\n  description\n  id\n  comments(first: 3, orderBy: {column: CREATED_AT, order: DESC}) {\n    pageInfo {\n      total\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        ...CommentList_comments\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n  images {\n    ...Gallery_images\n  }\n  likes(first: 1) {\n    pageInfo {\n      total\n    }\n  }\n  user {\n    username\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd83bb458a4592e5b0727922fba422955';
export default node;
