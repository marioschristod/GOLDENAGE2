var APP_DATA = {
  "scenes": [
    {
      "id": "0-room-entrance",
      "name": "ROOM ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -3.1098824227584068,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2626433523742993,
          "pitch": -0.00265258124169776,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": 3.1409183292120186,
          "pitch": 0.1441237997574465,
          "rotation": 0,
          "target": "2-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5262494810358866,
          "pitch": -0.05826187310189468,
          "title": "Amenities",
          "text": "Robes and Slippers"
        }
      ]
    },
    {
      "id": "1-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.517836074074303,
        "pitch": 0.001363656880295494,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -2.0084139598509,
          "pitch": -0.006764483479592798,
          "rotation": 0,
          "target": "0-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room",
      "name": "ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.9686550660394513,
        "pitch": 0,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 2.0289356138249506,
          "pitch": -0.04867351833348721,
          "rotation": 0,
          "target": "0-room-entrance"
        },
        {
          "yaw": -0.9686550660394513,
          "pitch": 0,
          "rotation": 0,
          "target": "3-room-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6036544927592278,
          "pitch": 0.09444897766844917,
          "title": "Amenities",
          "text": "Coffee maker, Tea"
        },
        {
          "yaw": 1.1818389327772802,
          "pitch": 0.3394316464810565,
          "title": "Space",
          "text": "Office"
        }
      ]
    },
    {
      "id": "3-room-2",
      "name": "ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.2098484380179446,
        "pitch": 0,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": 2.627724110217512,
          "pitch": 0.10619769382307531,
          "rotation": 0,
          "target": "2-room"
        },
        {
          "yaw": 2.1543345650870203,
          "pitch": 0.040762271187077204,
          "rotation": 0,
          "target": "0-room-entrance"
        },
        {
          "yaw": -0.6683024372181947,
          "pitch": 0.02519952179611451,
          "rotation": 4.71238898038469,
          "target": "4-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-balcony",
      "name": "BALCONY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.12947577833003976,
        "pitch": 0.12732389960141433,
        "fov": 1.3541427238858805
      },
      "linkHotspots": [
        {
          "yaw": -2.2438161460601247,
          "pitch": 0.13177731625572342,
          "rotation": 0,
          "target": "3-room-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4069671625865574,
          "pitch": 0.42716916285725937,
          "title": "Services",
          "text": "Room Service, Breakfast in Bed"
        }
      ]
    }
  ],
  "name": "GOLDEN AGE STANDARD",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
