import { VreoUnit } from '@realsee/vreo/lib/typings/VreoUnit'

// 讲全屋
export const vreoUnitC: VreoUnit =
  {
    "categoryId": "b35b2980-9394-42a4-8ccb-0d2d4c8634fa",
    "categoryText": "b4aff456-9a94-46c8-6e15-13cfa540aed8",
    "frontRequestId": "ffc05d41-e588-48dc-adb7-d20d350ea1b4",
    "index": 0,
    "video": {
      "duration": 20278,
      "start": 0,
      "end": 20278,
      "url": "//vrlab-static.ljcdn.com/release/web/midea_icebox.21b9ef72.mp3"
    },
    "keyframes": [
      {
        "uuid": "22b0b5a3-58fb-4e1e-8eb8-5cd960a4777f",
        "type": "CameraMovement",
        "start": 1000,
        "end": 3000,
        "parsed": false,
        "data": {
          "effect": "Move",
          "panoIndex": 7,
          "fov": 80,
          "mode": "Panorama",
          "latitude": -0,
          "longitude": 0
        }
      },
      {
        "uuid": "ff0ec7f3-06da-43ca-d0f1-f47c8d5a5745",
        "type": "VideoEffect",
        "start": 5200,
        "end": 12200,
        "parsed": false,
        "data": {
          "videoSrc": "//vrlab-public.ljcdn.com/release/seesay/tools/fridge6snew___7feaf5b4b3ff7622ee5c398e66d0b3dc.mp4",
          "panoIndex": 7,
          "direction": {
            "x": 0,
            "y": 0,
            "z": -1
          },
          "fov": 80
        }
      },
      {
        "uuid": "22b0b5a3-58fb-4e1e-8eb8-5cd960a4777f",
        "type": "CameraMovement",
        "start": 13000,
        "end": 15000,
        "parsed": false,
        "data": {
          "effect": "Move",
          "panoIndex": 7,
          "fov": 50,
          "mode": "Panorama",
          "latitude": 0.956462546238568,
          "longitude": 0.24973322117160635
        }
      },
      {
        // "uuid": "637e0312-552b-498b-c5a4-6b902cc872fc",
        "type": "Prompter",
        "start": 12000,
        "end": 19000,
        "parsed": false,
        "data": {
          "text": "希望您喜欢这套美的智慧家庭解决方案，再见"
        }
      },
      {
        "uuid": "637e0312-552b-498b-c5a4-6b902cc872fc",
        "type": "Exit",
        "start": 19000,
        "end": 20000,
        "parsed": false,
        "data": {}
      }
    ]
  } as VreoUnit
