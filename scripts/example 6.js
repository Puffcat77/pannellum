pannellum.viewer('tour', {
    "default": {
        "firstScene": "blackboard",
        "author": "Aleksandr Akopyan",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        //"hotSpotDebug": true
    },

    "scenes": {
        "blackboard": {
            "title": "Blackboard in the room",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "/panoramas/1.jpg",
            "hotSpots": [
                {
                    "pitch": -9.91,
                    "yaw": 59.47,
                    "type": "scene",
                    "text": "Middle of the room",
                    "sceneId": "middle"
                }
            ]
        },
        "middle": {
            "title": "Middle of the room",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "/panoramas/2.jpg",
            "hotSpots": [
                {
                    "pitch": -7.71,
                    "yaw": -66.83,
                    "type": "scene",
                    "text": "Blackboard in the room",
                    "sceneId": "blackboard"
                }
            ]
        }
    }
});