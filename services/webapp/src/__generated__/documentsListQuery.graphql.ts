/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type documentsListQueryVariables = {};
export type documentsListQueryResponse = {
    readonly allDocumentDemoItems: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"documentListItem">;
            } | null;
        } | null>;
    } | null;
};
export type documentsListQuery = {
    readonly response: documentsListQueryResponse;
    readonly variables: documentsListQueryVariables;
};



/*
query documentsListQuery {
  allDocumentDemoItems(first: 10) {
    edges {
      node {
        id
        ...documentListItem
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment documentListItem on DocumentDemoItemType {
  id
  file {
    url
    name
  }
  createdAt
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
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
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "documentsListQuery",
    "selections": [
      {
        "alias": "allDocumentDemoItems",
        "args": null,
        "concreteType": "DocumentDemoItemConnection",
        "kind": "LinkedField",
        "name": "__documentsList_allDocumentDemoItems_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentDemoItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DocumentDemoItemType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "documentListItem"
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "ApiQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "documentsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "DocumentDemoItemConnection",
        "kind": "LinkedField",
        "name": "allDocumentDemoItems",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentDemoItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DocumentDemoItemType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FieldType",
                    "kind": "LinkedField",
                    "name": "file",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "allDocumentDemoItems(first:10)"
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "documentsList_allDocumentDemoItems",
        "kind": "LinkedHandle",
        "name": "allDocumentDemoItems"
      }
    ]
  },
  "params": {
    "cacheID": "ae5e606597c9b07883e6ba181be34619",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "allDocumentDemoItems"
          ]
        }
      ]
    },
    "name": "documentsListQuery",
    "operationKind": "query",
    "text": "query documentsListQuery {\n  allDocumentDemoItems(first: 10) {\n    edges {\n      node {\n        id\n        ...documentListItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment documentListItem on DocumentDemoItemType {\n  id\n  file {\n    url\n    name\n  }\n  createdAt\n}\n"
  }
};
})();
(node as any).hash = '025cade328055ed0c09f27659ae399ba';
export default node;