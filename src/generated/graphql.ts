/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An RFC 3986 and RFC 3987 compliant URI string. */
  URI: string;
  /** An ISO-8601 encoded UTC date time string. Example value: `2019-07-03T20:47:55Z` */
  DateTime: string;
  /** A [RFC 5321](https://tools.ietf.org/html/rfc5321) compliant email. */
  Email: string;
};





/** Order by clause for the `orderBy` argument on the query `comments`. */
export type PostCommentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: PostCommentsFields;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export enum PostCommentsFields {
  CREATED_AT = 'CREATED_AT'
}

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  ASC = 'ASC',
  /** Sort records in descending order. */
  DESC = 'DESC'
}












export type CreateCommentInput = {
  postId: Scalars['ID'];
  text: Scalars['String'];
  userId: Scalars['ID'];
};


export type AddLikeInput = {
  subjectId: Scalars['ID'];
};





/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};


/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  ONLY = 'ONLY',
  /** Return both trashed and non-trashed results. */
  WITH = 'WITH',
  /** Only return non-trashed results. */
  WITHOUT = 'WITHOUT'
}
