{
  "products": {
    "keyName": "products",
    "title": "Products",
    "description": "You can implement sort and filter in each column with antd column configuration and customize your page header.",
    "ui": "tableRoute",
    "disabled": {
      "delete": true
    },
    "uiParams": {
      "size": "small",
      "columns": [
        {
          "title": "Photos",
          "dataIndex": "photos",
          "fixed": "left"
        },
        {
          "title": "No",
          "dataIndex": "no"
        },
        {
          "title": "Name",
          "dataIndex": "name"
        },
        {
          "title": "Price",
          "dataIndex": "price"
        },
        {
          "title": "Promo",
          "dataIndex": "promo"
        }
      ]
    },
    "graphql": "\n      query($productsWhere: ProductWhereInput) {\n        products: productsConnection(where: $productsWhere) {\n          edges {\n            cursor\n            node {\n              product\n              id\n              name\n              no\n              photos {\n                image {\n                  url\n                }\n              }\n              price\n              promo\n            }\n          }\n          pageInfo {\n            hasNextInfo\n          }\n        }\n      }\n    ",
    "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-table_route",
    "loader": {},
    "builder": null,
    "type": "array",
    "cacheActions": true,
    "controlDeployAndResetButtons": true,
    "toolbar": {
      "__TOOLBAR__": true,
      "pagination": {
        "type": "pagination"
      }
    },
    "items": {
      "type": "object",
      "items": {
        "no": {
          "keyName": "no",
          "title": "No",
          "description": "Unique Number of the Product",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "vhlbsf98ff",
            "35vc3vfums",
            "sguyio0rsv"
          ]
        },
        "name": {
          "keyName": "name",
          "title": "Name",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "vhlbsf98ff",
            "35vc3vfums",
            "sguyio0rsv"
          ]
        },
        "description": {
          "keyName": "description",
          "ui": "editor",
          "title": "Description",
          "uiParams": {
            "minHeight": "200px"
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-object-editor",
          "loader": {},
          "description": "",
          "type": "object",
          "items": {
            "html": {
              "keyName": "html",
              "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
              "loader": {},
              "builder": null,
              "ui": "input",
              "title": "",
              "description": "",
              "uiParams": {},
              "type": "string"
            }
          },
          "__CANNER_KEY__": [
            "vhlbsf98ff",
            "35vc3vfums",
            "sguyio0rsv"
          ]
        },
        "price": {
          "keyName": "price",
          "title": "Price",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "number",
          "__CANNER_KEY__": [
            "vhlbsf98ff",
            "35vc3vfums",
            "sguyio0rsv"
          ]
        },
        "promo": {
          "keyName": "promo",
          "title": "Promo",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "number",
          "__CANNER_KEY__": [
            "vhlbsf98ff",
            "35vc3vfums",
            "sguyio0rsv"
          ]
        },
        "category": {
          "keyName": "category",
          "ui": "singleSelectTree",
          "relation": {
            "type": "toOne",
            "to": "categories"
          },
          "title": "Category",
          "uiParams": {
            "textCol": "name",
            "columns": [
              {
                "title": "Name",
                "dataIndex": "name"
              }
            ],
            "relationField": "category"
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-relation-single_select_tree",
          "loader": {},
          "builder": null,
          "description": "",
          "type": "relation",
          "toolbar": {
            "pagination": {}
          },
          "__CANNER_KEY__": [
            "vhlbsf98ff",
            "35vc3vfums",
            "sguyio0rsv"
          ]
        },
        "storage": {
          "keyName": "storage",
          "ui": "fieldset",
          "title": "",
          "description": "",
          "uiParams": {},
          "type": "object",
          "packageName": "@canner/antd-object-fieldset",
          "items": {
            "count": {
              "keyName": "count",
              "title": "Count",
              "layout": "horizontal",
              "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
              "loader": {},
              "builder": null,
              "ui": "input",
              "description": "",
              "uiParams": {},
              "type": "number"
            },
            "enabled": {
              "keyName": "enabled",
              "title": "Enabled",
              "layout": "horizontal",
              "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-boolean-switch",
              "loader": {},
              "builder": null,
              "ui": "switch",
              "description": "",
              "uiParams": {},
              "type": "boolean"
            }
          },
          "__CANNER_KEY__": [
            "g69fq4oyg3",
            "sguyio0rsv"
          ]
        },
        "photos": {
          "keyName": "photos",
          "ui": "gallery",
          "required": true,
          "validation": {},
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-gallery",
          "loader": {},
          "title": "",
          "description": "",
          "uiParams": {},
          "type": "array",
          "items": {
            "type": "object",
            "items": {
              "image": {
                "keyName": "image",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-object-image",
                "loader": {},
                "builder": null,
                "type": "image",
                "ui": "image",
                "title": "",
                "description": "",
                "uiParams": {}
              }
            }
          },
          "__CANNER_KEY__": [
            "i1pbfj1ewu",
            "sguyio0rsv"
          ]
        }
      },
      "id": {
        "type": "id"
      }
    },
    "__CANNER_KEY__": [
      "isoojoxr4y"
    ]
  },
  "orders": {
    "keyName": "orders",
    "ui": "tableRoute",
    "title": "Orders",
    "description": "Canner provide several features for developers to build a powerful CMS.",
    "uiParams": {
      "size": "middle",
      "columns": [
        {
          "title": "Order Number",
          "dataIndex": "no"
        },
        {
          "title": "Order Status",
          "dataIndex": "orderStatus",
          "filters": [
            {
              "text": "New Order",
              "value": "new"
            },
            {
              "text": "Old Order",
              "value": "old"
            }
          ]
        },
        {
          "title": "Create Date",
          "dataIndex": "createDate"
        },
        {
          "title": "Payment Status",
          "dataIndex": "payStatus",
          "filters": [
            {
              "text": "Not Paid",
              "value": "not"
            },
            {
              "text": "Paid",
              "value": "paid"
            }
          ]
        },
        {
          "title": {
            "key": null,
            "ref": null,
            "props": {
              "id": "orders.shipStatus",
              "values": {}
            },
            "_owner": null
          },
          "dataIndex": "shipStatus",
          "filters": [
            {
              "text": "Unshipped",
              "value": "not"
            },
            {
              "text": "Shipping",
              "value": "shipping"
            },
            {
              "text": "Delivered",
              "value": "delivered"
            }
          ]
        },
        {
          "title": "Buyer Name",
          "dataIndex": "buyerName"
        }
      ]
    },
    "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-table_route",
    "loader": {},
    "builder": null,
    "type": "array",
    "cacheActions": true,
    "controlDeployAndResetButtons": true,
    "toolbar": {
      "__TOOLBAR__": true,
      "actions": {
        "export": {
          "fields": [
            {
              "keyName": "no",
              "title": "NO."
            },
            {
              "keyName": "createDate",
              "title": "Create Date"
            },
            {
              "keyName": "buyerName",
              "title": "Buyer Name"
            },
            {
              "keyName": "buyerPhone",
              "title": "Buyer Phone"
            },
            {
              "keyName": "buyerEmail",
              "title": "Buyer Email"
            },
            {
              "keyName": "receiverName",
              "title": "Receiver Name"
            },
            {
              "keyName": "receiverPhone",
              "title": "Receiver Phone"
            },
            {
              "keyName": "receiveTime",
              "title": "Receive Time"
            },
            {
              "keyName": "receiverAddress",
              "title": "Receiver Address"
            }
          ],
          "title": "Orders",
          "type": "export"
        },
        "filter": {
          "type": "filter",
          "filters": []
        },
        "type": "actions"
      },
      "filter": {
        "type": "filter",
        "filters": [
          {
            "label": "Search Buyer Name",
            "field": "buyerName",
            "placeholder": "Enter a buyer name",
            "type": "text"
          },
          {
            "label": "Search Order No",
            "field": "no",
            "placeholder": "Enter a order number",
            "type": "text"
          }
        ]
      },
      "pagination": {
        "type": "pagination"
      }
    },
    "items": {
      "type": "object",
      "items": {
        "no": {
          "keyName": "no",
          "title": "Order Number",
          "disabled": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "u1lehos3vf",
            "rlzxxy0uk5",
            "1wzxb69ttc"
          ]
        },
        "createDate": {
          "keyName": "createDate",
          "title": "Create Date",
          "disabled": true,
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-date_time_picker",
          "loader": {},
          "builder": null,
          "ui": "dateTime",
          "description": "",
          "uiParams": {},
          "type": "dateTime",
          "__CANNER_KEY__": [
            "7dvanpj6ch",
            "rlzxxy0uk5",
            "1wzxb69ttc"
          ]
        },
        "buyerName": {
          "keyName": "buyerName",
          "title": "Buyer Name",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "6yihhifxj4",
            "rlzxxy0uk5",
            "1wzxb69ttc"
          ]
        },
        "buyerPhone": {
          "keyName": "buyerPhone",
          "title": "Buyer Phone",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "4kft50xzoj",
            "rlzxxy0uk5",
            "1wzxb69ttc"
          ]
        },
        "buyerEmail": {
          "keyName": "buyerEmail",
          "title": "Buyer Email",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "gib1g5a7o7",
            "rs82nc2b72",
            "1wzxb69ttc"
          ]
        },
        "receiverName": {
          "keyName": "receiverName",
          "title": "Receiver Name",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "tfbglu3ehc",
            "rs82nc2b72",
            "1wzxb69ttc"
          ]
        },
        "receiverPhone": {
          "keyName": "receiverPhone",
          "title": "Receiver Phone",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "gpd2fktmh2",
            "rs82nc2b72",
            "1wzxb69ttc"
          ]
        },
        "receiveTime": {
          "keyName": "receiveTime",
          "title": "Receive Time",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-date_time_picker",
          "loader": {},
          "builder": null,
          "ui": "dateTime",
          "description": "",
          "uiParams": {},
          "type": "dateTime",
          "__CANNER_KEY__": [
            "wf1e8qqu0r",
            "rs82nc2b72",
            "1wzxb69ttc"
          ]
        },
        "receiverAddress": {
          "keyName": "receiverAddress",
          "title": "Receiver Address",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "beehluaige",
            "1irg5bx57s",
            "w5i3jtlfo5",
            "1wzxb69ttc"
          ]
        },
        "shipmentWay": {
          "keyName": "shipmentWay",
          "ui": "select",
          "title": "Shipment Way",
          "uiParams": {
            "options": [
              {
                "value": "PERSON",
                "text": "In Person"
              },
              {
                "value": "HOME",
                "text": "Home"
              }
            ]
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-select",
          "loader": {},
          "builder": null,
          "description": "",
          "type": "string",
          "__CANNER_KEY__": [
            "n8rasqk7ij",
            "w5i3jtlfo5",
            "1wzxb69ttc"
          ]
        },
        "cardReceiverName": {
          "keyName": "cardReceiverName",
          "title": "Receiver Name",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "nieqxs62ez",
            "1wzxb69ttc"
          ]
        },
        "cardContent": {
          "ui": "textarea",
          "keyName": "cardContent",
          "title": "Content",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-textarea",
          "loader": {},
          "builder": null,
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "nieqxs62ez",
            "1wzxb69ttc"
          ]
        },
        "senderName": {
          "keyName": "senderName",
          "title": "Sender Name",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "nieqxs62ez",
            "1wzxb69ttc"
          ]
        },
        "comment": {
          "ui": "textarea",
          "keyName": "comment",
          "title": "Comment",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-textarea",
          "loader": {},
          "builder": null,
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "nieqxs62ez",
            "1wzxb69ttc"
          ]
        },
        "detail": {
          "keyName": "detail",
          "uiParams": {
            "columns": [
              {
                "title": "Product Number",
                "dataIndex": "no"
              },
              {
                "title": "Photos",
                "dataIndex": "photos"
              },
              {
                "title": "Name",
                "dataIndex": "name"
              },
              {
                "title": "Price",
                "dataIndex": "price"
              },
              {
                "title": "Promo",
                "dataIndex": "promo"
              },
              {
                "title": "Count",
                "dataIndex": "count"
              }
            ],
            "relationColumns": [
              {
                "title": "Number",
                "dataIndex": "no"
              },
              {
                "title": "Photos",
                "dataIndex": "photos"
              },
              {
                "title": "Name",
                "dataIndex": "name"
              },
              {
                "title": "Price",
                "dataIndex": "price"
              },
              {
                "title": "Promo",
                "dataIndex": "promo"
              }
            ],
            "relationField": "products",
            "copyFields": [
              "no",
              "name",
              "price",
              "promo",
              "count",
              "photos"
            ]
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-table",
          "loader": {},
          "builder": null,
          "cacheActions": true,
          "controlDeployAndResetButtons": true,
          "type": "array",
          "ui": "table",
          "title": "",
          "description": "",
          "items": {
            "type": "object",
            "items": {
              "no": {
                "keyName": "no",
                "title": "Number",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "string"
              },
              "name": {
                "keyName": "name",
                "title": "Name",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "string"
              },
              "photos": {
                "keyName": "photos",
                "ui": "gallery",
                "title": "Photos",
                "uiParams": {},
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-gallery",
                "loader": {},
                "description": "",
                "type": "array",
                "items": {
                  "type": "object",
                  "items": {
                    "image": {
                      "keyName": "image",
                      "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-object-image",
                      "loader": {},
                      "builder": null,
                      "type": "image",
                      "ui": "image",
                      "title": "",
                      "description": "",
                      "uiParams": {}
                    }
                  }
                }
              },
              "price": {
                "keyName": "price",
                "title": "Price",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "number"
              },
              "promo": {
                "keyName": "promo",
                "title": "Promo",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "number"
              },
              "count": {
                "keyName": "count",
                "title": "Count",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "number"
              }
            }
          },
          "__CANNER_KEY__": [
            "pr20d2y8df"
          ]
        },
        "orderStatus": {
          "values": [
            "new",
            "old"
          ],
          "keyName": "orderStatus",
          "title": "Order Status",
          "ui": "select",
          "uiParams": {
            "options": [
              {
                "text": "New order",
                "value": "new"
              },
              {
                "text": "Old order",
                "value": "old"
              }
            ]
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-select",
          "loader": {},
          "builder": null,
          "description": "",
          "type": "enum",
          "__CANNER_KEY__": [
            "t00goul238",
            "hgmbqop9lr",
            "qi2vekfh6x"
          ]
        },
        "paymentType": {
          "values": [
            "ATM",
            "CREDIT"
          ],
          "keyName": "paymentType",
          "title": "Payment Type",
          "ui": "select",
          "uiParams": {
            "options": [
              {
                "text": "ATM",
                "value": "ATM"
              },
              {
                "text": "Credit Card",
                "value": "CREDIT"
              }
            ]
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-select",
          "loader": {},
          "builder": null,
          "description": "",
          "type": "enum",
          "__CANNER_KEY__": [
            "t00goul238",
            "hgmbqop9lr",
            "qi2vekfh6x"
          ]
        },
        "payStatus": {
          "keyName": "payStatus",
          "values": [
            "not",
            "paid"
          ],
          "title": "Pay Status",
          "ui": "select",
          "uiParams": {
            "options": [
              {
                "text": "Not Paid",
                "value": "not"
              },
              {
                "text": "Paid",
                "value": "paid"
              }
            ]
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-select",
          "loader": {},
          "builder": null,
          "description": "",
          "type": "enum",
          "__CANNER_KEY__": [
            "t00goul238",
            "hgmbqop9lr",
            "qi2vekfh6x"
          ]
        },
        "shipStatus": {
          "keyName": "shipStatus",
          "values": [
            "not",
            "shipping",
            "delivered"
          ],
          "title": "Ship Status",
          "ui": "select",
          "uiParams": {
            "options": [
              {
                "text": "Unshipped",
                "value": "not"
              },
              {
                "text": "Shipping",
                "value": "shipping"
              },
              {
                "text": "Delivered",
                "value": "delivered"
              }
            ]
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-select",
          "loader": {},
          "builder": null,
          "description": "",
          "type": "enum",
          "__CANNER_KEY__": [
            "t00goul238",
            "hgmbqop9lr",
            "qi2vekfh6x"
          ]
        },
        "isHighPrice": {
          "keyName": "isHighPrice",
          "title": "Is hight price",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-boolean-switch",
          "loader": {},
          "builder": null,
          "ui": "switch",
          "description": "",
          "uiParams": {},
          "type": "boolean",
          "__CANNER_KEY__": [
            "jqi4zt3ljr",
            "alzbwlt85",
            "qi2vekfh6x"
          ]
        },
        "discount": {
          "keyName": "discount",
          "title": "Discount",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "number",
          "__CANNER_KEY__": [
            "jqi4zt3ljr",
            "alzbwlt85",
            "qi2vekfh6x"
          ]
        },
        "shipFee": {
          "keyName": "shipFee",
          "title": "Shipment fee",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "number",
          "__CANNER_KEY__": [
            "jqi4zt3ljr",
            "alzbwlt85",
            "qi2vekfh6x"
          ]
        },
        "amount": {
          "keyName": "amount",
          "title": "$Amount",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-number-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "number",
          "__CANNER_KEY__": [
            "jqi4zt3ljr",
            "alzbwlt85",
            "qi2vekfh6x"
          ]
        }
      },
      "id": {
        "type": "id"
      }
    },
    "__CANNER_KEY__": [
      "isoojoxr4y"
    ]
  },
  "customers": {
    "keyName": "customers",
    "ui": "tableRoute",
    "uiParams": {
      "size": "middle",
      "columns": [
        {
          "title": "Customers",
          "key": "name",
          "dataIndex": "name"
        },
        {
          "title": "Phone",
          "key": "phone",
          "dataIndex": "phone"
        },
        {
          "title": "Email",
          "key": "email",
          "dataIndex": "email"
        }
      ]
    },
    "title": "Customers",
    "description": "Canner fetches array data without any query by default which means all the filter, sort, pagination are done at the client side. But if you want to do these query at the server side, you can change the fetch policy to async.",
    "graphql": "\n    query($customersBefore: String, $customersAfter: String, $customersLast: Int, $customersFirst: Int,$customersWhere: CustomerWhereInput) {\n      customers: customersConnection(before: $customersBefore, after: $customersAfter, last: $customersLast, first: $customersFirst,where: $customersWhere) {\n        edges {\n          cursor\n          node {\n            id\n            name\n            email\n            phone\n          }\n        }\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n      }\n    }\n    ",
    "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-table_route",
    "loader": {},
    "builder": null,
    "type": "array",
    "cacheActions": true,
    "controlDeployAndResetButtons": true,
    "toolbar": {
      "async": true,
      "__TOOLBAR__": true,
      "actions": {
        "export": {
          "fields": [
            {
              "keyName": "name",
              "title": "Customers"
            },
            {
              "keyName": "phone",
              "title": "Phone"
            },
            {
              "keyName": "email",
              "title": "Email"
            },
            {
              "keyName": "consignees",
              "title": "Consignees"
            }
          ],
          "title": "Customers",
          "type": "export"
        },
        "filter": {
          "type": "filter",
          "filters": []
        },
        "type": "actions"
      },
      "filter": {
        "type": "filter",
        "filters": [
          {
            "label": "Search Customer Name",
            "field": "name",
            "placeholder": "Enter a name",
            "type": "text"
          },
          {
            "label": "Search Customer Phone",
            "field": "phone",
            "placeholder": "Enter a phone",
            "type": "text"
          }
        ]
      },
      "pagination": {
        "type": "pagination"
      }
    },
    "items": {
      "type": "object",
      "items": {
        "name": {
          "keyName": "name",
          "title": "Customers",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "kzpymmmyet"
          ]
        },
        "email": {
          "keyName": "email",
          "title": "Email",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "kzpymmmyet"
          ]
        },
        "phone": {
          "keyName": "phone",
          "title": "Phone",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string",
          "__CANNER_KEY__": [
            "kzpymmmyet"
          ]
        },
        "consignees": {
          "keyName": "consignees",
          "ui": "table",
          "disabled": {
            "create": true
          },
          "uiParams": {
            "size": "small",
            "columns": [
              {
                "title": "Customers",
                "key": "name",
                "dataIndex": "name"
              },
              {
                "title": "Phone",
                "key": "phone",
                "dataIndex": "phone"
              },
              {
                "title": "Email",
                "key": "email",
                "dataIndex": "email"
              }
            ]
          },
          "title": "Consignees",
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-table",
          "loader": {},
          "builder": null,
          "cacheActions": true,
          "controlDeployAndResetButtons": true,
          "type": "array",
          "description": "",
          "items": {
            "type": "object",
            "items": {
              "name": {
                "keyName": "name",
                "title": "Customers",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "string"
              },
              "email": {
                "keyName": "email",
                "title": "Email",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "string"
              },
              "phone": {
                "keyName": "phone",
                "title": "Phone",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "string"
              },
              "address": {
                "keyName": "address",
                "title": "Address",
                "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
                "loader": {},
                "builder": null,
                "ui": "input",
                "description": "",
                "uiParams": {},
                "type": "string"
              }
            }
          },
          "__CANNER_KEY__": [
            "kzpymmmyet"
          ]
        }
      },
      "id": {
        "type": "id"
      }
    },
    "__CANNER_KEY__": [
      "isoojoxr4y"
    ]
  },
  "categories": {
    "keyName": "categories",
    "ui": "tree",
    "title": "Categories",
    "description": "Dealing with relationship data is annoying, but in Canner, it\\'s just a few tags and properties.",
    "uiParams": {
      "relationField": "category",
      "columns": [
        {
          "title": "Category Name",
          "dataIndex": "name"
        }
      ]
    },
    "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-tree",
    "loader": {},
    "builder": null,
    "cacheActions": true,
    "controlDeployAndResetButtons": true,
    "type": "array",
    "items": {
      "type": "object",
      "items": {
        "name": {
          "keyName": "name",
          "title": "Category Name",
          "required": true,
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
          "loader": {},
          "builder": null,
          "ui": "input",
          "description": "",
          "uiParams": {},
          "type": "string"
        },
        "category": {
          "keyName": "category",
          "ui": "singleSelectTree",
          "relation": {
            "type": "toOne",
            "to": "categories"
          },
          "title": "Parent Category",
          "uiParams": {
            "relationField": "category"
          },
          "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-relation-single_select_tree",
          "loader": {},
          "builder": null,
          "description": "",
          "type": "relation",
          "toolbar": {
            "__TOOLBAR__": true
          }
        }
      },
      "id": {
        "type": "id"
      }
    },
    "__CANNER_KEY__": [
      "isoojoxr4y"
    ],
    "toolbar": {
      "pagination": {}
    }
  },
  "home": {
    "keyName": "home",
    "title": "Home Page",
    "description": "Layout tags are used to create grids, containers, and blocks in CMS. And allows you to create customized design layouts and visual design for your CMS.",
    "ui": "fieldset",
    "uiParams": {},
    "type": "object",
    "packageName": "@canner/antd-object-fieldset",
    "items": {
      "header": {
        "keyName": "header",
        "ui": "fieldset",
        "title": "",
        "description": "",
        "uiParams": {},
        "type": "object",
        "packageName": "@canner/antd-object-fieldset",
        "items": {
          "logo": {
            "keyName": "logo",
            "title": "Logo",
            "layout": "horizontal",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-object-image",
            "loader": {},
            "builder": null,
            "type": "image",
            "ui": "image",
            "description": "",
            "uiParams": {}
          }
        },
        "__CANNER_KEY__": [
          "j9k31tp4ki",
          "5t3lty81a4",
          "w9u1n8f8iq"
        ]
      },
      "footer": {
        "keyName": "footer",
        "ui": "fieldset",
        "title": "",
        "description": "",
        "uiParams": {},
        "type": "object",
        "packageName": "@canner/antd-object-fieldset",
        "items": {
          "logo": {
            "keyName": "logo",
            "title": "Logo",
            "layout": "horizontal",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-object-image",
            "loader": {},
            "builder": null,
            "type": "image",
            "ui": "image",
            "description": "",
            "uiParams": {}
          },
          "fb": {
            "keyName": "fb",
            "ui": "link",
            "title": "Facebook Link",
            "layout": "horizontal",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-link",
            "loader": {},
            "builder": null,
            "description": "",
            "uiParams": {},
            "type": "string"
          },
          "ig": {
            "keyName": "ig",
            "ui": "link",
            "title": "Instagram Link",
            "layout": "horizontal",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-link",
            "loader": {},
            "builder": null,
            "description": "",
            "uiParams": {},
            "type": "string"
          },
          "email": {
            "keyName": "email",
            "ui": "link",
            "title": "Email",
            "layout": "horizontal",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-link",
            "loader": {},
            "builder": null,
            "description": "",
            "uiParams": {},
            "type": "string"
          }
        },
        "__CANNER_KEY__": [
          "6jbzb2xt6w",
          "d21oyrbfci",
          "w9u1n8f8iq"
        ]
      },
      "entry": {
        "keyName": "entry",
        "ui": "fieldset",
        "title": "",
        "description": "",
        "uiParams": {},
        "type": "object",
        "packageName": "@canner/antd-object-fieldset",
        "items": {
          "title": {
            "keyName": "title",
            "title": "Website Title",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
            "loader": {},
            "builder": null,
            "ui": "input",
            "description": "",
            "uiParams": {},
            "type": "string",
            "__CANNER_KEY__": [
              "6lchxusga0",
              "x20m5eju6k"
            ]
          },
          "slogan": {
            "keyName": "slogan",
            "title": "Website Slogan",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-string-input",
            "loader": {},
            "builder": null,
            "ui": "input",
            "description": "",
            "uiParams": {},
            "type": "string",
            "__CANNER_KEY__": [
              "wsjhfu8kkz",
              "x20m5eju6k"
            ]
          },
          "bannerBg": {
            "keyName": "bannerBg",
            "ui": "gallery",
            "title": "Banner Background Image",
            "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-array-gallery",
            "loader": {},
            "description": "",
            "uiParams": {},
            "type": "array",
            "items": {
              "type": "object",
              "items": {
                "image": {
                  "keyName": "image",
                  "packageName": "/Users/siou/projects/canner-platform/packages/cli/dist/node_modules/@canner/antd-object-image",
                  "loader": {},
                  "builder": null,
                  "type": "image",
                  "ui": "image",
                  "title": "",
                  "description": "",
                  "uiParams": {}
                }
              }
            }
          }
        },
        "__CANNER_KEY__": [
          "p0c2epvn0g",
          "dv55povas9",
          "w9u1n8f8iq"
        ]
      }
    },
    "__CANNER_KEY__": [
      "epnv1hbwwz"
    ]
  }
}