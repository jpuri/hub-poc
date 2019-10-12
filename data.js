exports.pages = [
    {
      "id": 1,
      "path": "/products/product-1",
      "name": "Default",
      "section_ids": [1, 2], // header, footer
      "section_data": [
        { "section_id": 1, "greeting": "Hello" }
      ]
    },

    {
      "id": 2,
      "path": "/products/product-2",
      "name": "Product",
      "section_ids": [1, 3, 2], // header, product heading, footer
      "section_data": [
        { "section_id": 1, "greeting": "Hello" },
        { "section_id": 3, "name": "Rugged Case" }
      ]
    }
  ]

exports.sections = [
  {
    "id": 1,
    "name": "header",
    "template": "<p>{{ greeting }}</p>",
    "script": "",
    "styles": "p { font-size: 2em; }"
  },

  {
    "id": 2,
    "name": "footer",
    "template": "<footer></footer>",
    "script": "",
    "styles": "footer { font-size: 2em; }"
  },

  {
    "id": 3,
    "name": "product heading",
    "template": "<h1 onclick=\"alert('Hey')\">{{ name }}</h1>",
    "script": "",
    "styles": "h1 { text-align: center }"
  }
]