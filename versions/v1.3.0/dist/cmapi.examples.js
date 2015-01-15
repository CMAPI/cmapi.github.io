cmapi.channel["map.drag-drop"].examples = [{
    "title": "Example Drag Drop Data",
    "description": "",
    "valid": true,
    "payload": {
        "dragDropData": {
            "overlayId": "Spot Reports",
            "featureId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
            "name": "A Spot Report",
            "zoom": true,
            "marker": {
                "details": "Spot report details here",
                "iconUrl": "http://localhost/widgets/mapWidget/images/spotReport.gif"
            }
        }
    }
}];;cmapi.channel["map.error"].examples = [{
  "title": "Example map error",
  "description": "",
  "valid": true,
  "payload": {
    "sender": "29ff882d-4ef3-4ea2-852e-de799dd0699d",
    "type": "map.feature.hide",
    "msg": {
      "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
      "featureId": "example.mapWidget.doesntExist"
    },
    "error": "No feature with id example.mapWidget.doesntExist found to hide."
  }
}];;cmapi.channel["map.feature.deselected"].examples = [
    {
        "title": "Feature De-selected Message",
        "description" : "De-select a feature",
        "valid": true,
        "payload": {
            "deSelectedId": "example.mapWidget.1.1", 
            "deSelectedName": "World Trade Center", 
            "featureId": "example.mapWidget.1", 
            "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



;cmapi.channel["map.feature.draw"].examples = [{
    "title": "Edit a feature",
    "description": "Draw a new feature on the map",
    "valid": true,
    "payload": {
        "featureId": "0001-0002-0003-0004",
        "name": "My new line",
        "overlayId": "0005-0006-0007-0008",
        "type": "line",
        "messageId": "19733f70-d0b8-11e3-9c1a-0800200c9a66"
    }
}];
;cmapi.channel["map.feature.edit"].examples = [{
    "title": "Edit a feature",
    "description": "Edit an existing feature on the map",
    "valid": true,
    "payload": {
        "overlayId": "test-overlay-123-456",
        "featureId": "feature123-456",
        "messageId": "19733f70-d0b8-11e3-9c1a-0800200c9a66"
    }
}];
;cmapi.channel["map.feature.hide"].examples = [
    {
        "title": "Hide a feature",
        "description" : "Hide an existing feature on the map",
        "valid": true,
        "payload": {
            "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",  
            "featureId": "example.mapWidget.2"
        }
    }
];



;cmapi.channel["map.feature.plot"].examples = [{
  "title": "Plot KML",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.1",
    "feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.1\"><name>World Trade Center</name><description><![CDATA[Site of World Trade Center]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.01324033737183,40.71149172571141,0 </coordinates></Point></Placemark></kml>",
    "name": "World Trade Center",
    "zoom": true
  }
}, {
  "title": "Plot KML",
  "valid": false,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.1\"><name>World Trade Center</name><description><![CDATA[Site of World Trade Center]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.01324033737183,40.71149172571141,0 </coordinates></Point></Placemark></kml>",
    "name": "World Trade Center",
    "zoom": true
  }
}, {
  "title": "Plot GeoJSON",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.geojson.1",
    "format": "geojson",
    "feature": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              100,
              0
            ],
            [
              101,
              0
            ],
            [
              101,
              1
            ],
            [
              100,
              1
            ],
            [
              100,
              0
            ]
          ]
        },
        "properties": {
          "style": {
            "lineStyle": {
              "color": {
                "r": 255,
                "g": 0,
                "b": 255,
                "a": 0.5
              }
            },
            "polyStyle": {
              "color": {
                "r": 0,
                "g": 255,
                "b": 0,
                "a": 0.25
              }
            },
            "name": "test polygon",
            "id": "tp13456",
            "description": "polygon pop-up text"
          }
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Line",
          "coordinates": [
            [
              80,
              3
            ],
            [
              81,
              3
            ],
            [
              81,
              5
            ],
            [
              82,
              2
            ]
          ]
        },
        "properties": {
          "style": {
            "lineStyle": {
              "color": {
                "r": 0,
                "g": 255,
                "b": 255,
                "a": 0.5
              }
            }
          }
        },
        "name": "crossingLine",
        "id": "0x45632",
        "description": "this is a line you don’t want to cross"
      }]
    },
    "name": "Sample GeoJSON Feature Collection",
    "zoom": true,
    "readOnly": false
  }
}, {
  "title": "Plot Area of Interest (AOI)",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.aoi.1",
    "format": "geojson",
    "feature": {
      "type": "Feature",
      "geometry": {
        "type": "point",
        "coordinates": [
          100,
          0
        ]
      }
    },
    "properties": {
      "name": "SampleAOIBufferedpoint(i.e., Point/Radius)",
      "aoi": {
        "type": "point-radius",
        "buffer": 1000
      },
      "style": {
        "lineStyle": {
          "color": {
            "r": 255,
            "g": 0,
            "b": 255,
            "a": 1
          }
        },
        "polyStyle": {
          "color": {
            "r": 0,
            "g": 255,
            "b": 25,
            "a": 0.5
          },
          "iconStyle": {
            "url": "http: //www.coolicons.org/icon"
          }
        },
        "id": "0x75023443",
        "description": "ThisisimportanttextfortheAOIpopup"
      },
      "zoom": true,
      "readOnly": "false"
    }
  }
}];
;cmapi.channel["map.feature.plot.url"].examples = [
    {
    "title": "Plot KML From URL",
    "description" : "",
    "valid": true,
    "payload": {
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1", 
        "featureId": "example.mapWidget.2", 
        "url": "https://developers.google.com/kml/documentation/KML_Samples.kml", 
        "name": "Samples", 
        "zoom": true
        }
    },
    {
    "title": "Plot WMS",
    "valid": true,
    "payload": {
        "overlayId":"xyz", 
        "featureId":"def", 
        "name": "Bodies of Water", 
        "format":"wms", 
        "url": "http://demo.opengeo.org/geoserver/wms", 
        "params": {
            "layers": "topp:tasmania_water_bodies", 
            "transparent": true, 
            "format": "image/gif"
            }   
        }
    }
];



;cmapi.channel["map.feature.selected"].examples = [
    {
        "title": "Feature Selected Message",
        "description" : "Select a feature",
        "valid": true,
        "payload": {
            "selectedId": "example.mapWidget.1.1", 
            "selectedName": "World Trade Center", 
            "featureId": "example.mapWidget.1", 
            "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



;cmapi.channel["map.feature.show"].examples = [
    {
        "title": "Show a feature",
        "description" : "Show an existing feature on the map",
        "valid": true,
        "payload": {
            "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",  
            "featureId": "example.mapWidget.2",
            "zoom" : true
        }
    }
];



;cmapi.channel["map.feature.unplot"].examples = [{
  "title": "Unplot a feature",
  "description": "Remove an existing feature from the map",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.2"
  }
}];
;cmapi.channel["map.feature.update"].examples = [{
  "title": "Update a feature",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.2",
    "name": "New Name"
  }
}];
;cmapi.channel["map.overlay.cluster.activate"].examples = [{
  "title": "Activate overlay cluster rule example",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "BattlePlan2"
  }
}];;cmapi.channel["map.overlay.cluster.deactivate"].examples = [{
  "title": "Deactivate overlay cluster rule example",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "BattlePlan2"
  }
}];;cmapi.channel["map.overlay.cluster.remove"].examples = [{
  "title": "Remove overlay cluster rule example",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "BattlePlan2"
  }
}];;cmapi.channel["map.overlay.cluster.set"].examples = [{
  "title": "Point example",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "pointStyle": {
        "color": {
          "r": 0,
          "g": 255,
          "b": 0,
          "a": 0.25
        },
        "radius": 6
      }
    },
    "overlayId": "BattlePlan2"
  }
}, {
  "title": "Icon example",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "iconStyle": {
        "url": "http://www.cmapi.org/test.png"
      }
    },
    "overlayId": "BattlePlan2"
  }
}, {
  "title": "Replaceable Radius",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "pointStyle": {
        "color": {
          "r": 0,
          "g": 255,
          "b": 0,
          "a": 0.25
        },
        "radius": "Math.min(${count}, 7) + 3"
      }
    },
    "overlayId": "BattlePlan2"
  }
}, {
  "title": "Replaceable Radius",
  "description": "",
  "valid": true,
  "payload": {
    "threshold": 3,
    "distance": 40,
    "clusterStyle": {
      "label": "Clustered Point 1",
      "title": "Clustered Point 1",
      "summary": "A sample summary",
      "iconStyle": {
        "url": "http://www.cmapi.org/${count}.png"
      }
    },
    "overlayId": "BattlePlan2"
  }
}];;cmapi.channel["map.overlay.create"].examples = [
    {
    "title": "Create Overlay",
    "description" : "",
    "valid": true,
    "payload": {
        "name": "Test", 
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



;cmapi.channel["map.overlay.hide"].examples = [{
  "title": "Hide Overlay",
  "description": "Hide existing overlay on the map",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
  }
}];
;cmapi.channel["map.overlay.remove"].examples = [
    {
    "title": "Remove Overlay",
    "description" : "Remove entire overlay from the map.",
    "valid": true,
    "payload": {
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



;cmapi.channel["map.overlay.show"].examples = [
    {
    "title": "Show Overlay",
    "description" : "Show existing overlay on the map.",
    "valid": true,
    "payload": {
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



;cmapi.channel["map.overlay.update"].examples = [
    {
    "title": "Update Overlay",
    "description" : "",
    "valid": true,
    "payload": {
        "name": "New Name", 
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



;cmapi.channel["map.status.about"].examples = [{
  "title": "Send out static information about this map implementation",
  "description": "",
  "valid": true,
  "payload": {
    "version": "1.0.0",
    "type": "2-D",
    "widgetName": "Common Map Widget",
    "extensions": ["clustering", "userManipulation"]
  }
}];
;cmapi.channel["map.status.format"].examples = [{
  "title": "Send view status with all properties",
  "description": "",
  "valid": true,
  "payload": {
    "formats": [
      "kml",
      "geojson",
      "wms"
    ]
  }
}, {
  "title": "Send view status with all properties",
  "description": "",
  "valid": true,
  "payload": {
    "formats": [
      "kml",
      "geojson",
      "wms",
      "czml"
    ]
  }
}, {
  "title": "Send view status with all properties",
  "description": "",
  "valid": false,
  "payload": {}
}];
;cmapi.channel["map.status.request"].examples = [{
  "title": "Send a status request",
  "description": "",
  "valid": true,
  "payload": {
    "types": [
      "view",
      "about",
      "format",
      "selected"
    ]
  }
}, {
  "title": "Send a status request with a typo for types",
  "description": "",
  "valid": false,
  "strict": true,
  "payload": {
    "typo": [
      "view",
      "about",
      "format",
      "selected"
    ]
  }
},  {
  "title": "Send a status request with a wrong type",
  "description": "",
  "valid": false,
  "payload": {
    "types": [
      "all",
      "about",
      "format",
      "selected"
    ]
  }
}];;cmapi.channel["map.status.selected"].examples = [{
  "title": "Send out the list of currently selected features",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "selectedFeatures": [{
      "featureId": "example.mapWidget.1",
      "selectedId": "example.mapWidget.1.1"
    }, {
      "featureId": "example.mapWidget.1",
      "selectedId": "example.mapWidget.1.2"
    }, {
      "featureId": "example.mapWidget.2",
      "selectedId": "example.mapWidget.2.1"
    }]
  }
},
{
  "title": "Currently selected features missing featureId",
  "description": "",
  "valid": false,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "selectedFeatures": [{
      "featureId": "example.mapWidget.1",
      "selectedId": "example.mapWidget.1.1"
    }, {
      "selectedId": "example.mapWidget.1.2"
    }, {
      "featureId": "example.mapWidget.2",
      "selectedId": "example.mapWidget.2.1"
    }]
  }
}];;cmapi.channel["map.status.view"].examples = [{
  "title": "Send view status with all properties",
  "description": "",
  "valid": true,
  "payload": {
    "requester": "217c086f-719f-928f-5e75-972530cf0db6",
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no requestor",
  "description": "Valid with no requestor",
  "valid": true,
  "payload": {
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no bounds",
  "description": "",
  "valid": false,
  "payload": {
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no center",
  "description": "invalid with no center",
  "valid": false,
  "payload": {
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "range": 137500
  }
}, {
  "title": "Send view status with no range",
  "description": "invalid with no nage",
  "valid": false,
  "payload": {
    "bounds": {
      "southWest": {
        "lat": 39.46164364205549,
        "lon": -75.6134033203125
      },
      "northEast": {
        "lat": 40.97575093157534,
        "lon": -73.10302734375
      }
    },
    "center": {
      "lat": 40.2205,
      "lon": -74.3579
    }
  }
}];
;cmapi.channel["map.view.center.bounds"].examples = [
  {
    "title": "Center on bounds",
    "description": "",
    "valid": true,
    "payload": {
      "bounds": {
        "southWest": {
          "lat": 24.5,
          "lon": -124
        },
        "northEast": {
          "lat": 50.5,
          "lon": -79
        }
      },
      "zoom": 3000000
    }
  },
  {
    "title": "Invalid center on bounds",
    "description": "",
    "valid": false,
    "payload": {
      "zoom": 3000000
    }
  },
  {
    "title": "Invalid center on bounds",
    "description": "",
    "valid": false,
    "payload": {
      "bounds": {
        "southWest": {
          "lat": 24.5,
          "lon": -8124
        },
        "northEast": {
          "lat": 50.5,
          "lon": -79
        }
      },
      "zoom": 3000000
    }
  }
];;cmapi.channel["map.view.center.feature"].examples = [{
  "title": "Center on a feature",
  "description": "Center the map on a particular feature",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.1"
  }
}];
;cmapi.channel["map.view.center.location"].examples = [{
  "title": "Center on a location and zoom",
  "description": "Center the map on a particular location and zoom to range of 1000",
  "valid": true,
  "payload": {
    "location": {
      "lat": 38.8708,
      "lon": -77.0558
    },
    "zoom": 1000
  }
}, {
  "title": "Center on a location and do not zoom",
  "description": "Center the map on a particular location and do not zoom",
  "valid": true,
  "payload": {
    "location": {
      "lat": 38.8708,
      "lon": -77.0558
    }
  }
}, {
  "title": "Center on an invalid location",
  "description": "Center the map on a particular overlay",
  "valid": false,
  "payload": {
    "location": {
      "lat": 38.8708,
      "lon": -777.0558
    },
    "zoom": false
  }
}];
;cmapi.channel["map.view.center.overlay"].examples = [{
  "title": "Center on an Overlay",
  "description": "Center the map on a particular overlay",
  "valid": true,
  "payload": {
    "overlayId": "2tyjhp-23idk38-rml389k6kd-29-flsow2c"
  }
}];
;cmapi.channel["map.view.clicked"].examples = [{
  "title": "Map Clicked",
  "description": "Report that the map was clicked at a location",
  "valid": true,
  "payload": {
    "lat": 40.195659093364654,
    "lon": -74.28955078125,
    "button": "right",
    "type": "single",
    "keys": ["shift", "ctrl"]
  }
}, {
  "title": "Map Clicked",
  "description": "Report that the map was clicked at a location",
  "valid": true,
  "payload": {
    "lat": 40.195659093364654,
    "lon": -74.28955078125,
    "button": "middle",
    "type": "double",
    "keys": ["none"]
  }
}, {
  "title": "Map Clicked",
  "description": "Report that the map was clicked at a location",
  "valid": false,
  "payload": {
    "lat": 40.195659093364654,
    "lon": -74.28955078125,
    "button": "taco",
    "type": "single",
    "keys": ["shift", "ctrl"]
  }
}, {
  "title": "Map Clicked",
  "description": "Report that the map was clicked at a location",
  "valid": false,
  "payload": {
    "lat": 40.195659093364654,
    "lon": -74.28955078125,
    "type": "single",
    "keys": ["shift", "ctrl"]
  }
}];
;cmapi.channel["map.view.zoom"].examples = [{
  "title": "Zoomto a range",
  "description": "Zoom the map to a particular range.",
  "valid": true,
  "payload": {
    "range": 100000
  }
}];
