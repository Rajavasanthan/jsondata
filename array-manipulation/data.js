var input = [
     {
          "id": 1,
          "title": "Title 1",
          "childrens": [
               {
                    "id": 2,
                    "title": "Title 2",
                    "childrens": []
               }
          ]
     },
     {
          "id": 3,
          "title": "Title 3",
          "childrens": [
               {
                    "id": 4,
                    "title": "Title 4",
                    "childrens": [
                         {
                              "id": 5,
                              "title": "Title 5",
                              "childrens": []
                         }
                    ]
               }
          ]
     }
]

var output = [
     {
          "id": 1,
          "title": "Title 1",
          "childrens": []
     },
     {
          "id": 2,
          "title": "Title 2",
          "childrens": []
     },
     {
          "id": 3,
          "title": "Title 3",
          "childrens": []
     },
     {
          "id": 4,
          "title": "Title 4",
          "childrens": []
     },
     {
          "id": 5,
          "title": "Title 5",
          "childrens": []
     }
]

