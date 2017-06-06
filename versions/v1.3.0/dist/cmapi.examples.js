var cmapi = cmapi || {};
cmapi.channel = cmapi.channel || {};
cmapi.overview = cmapi.overview || {};cmapi.channel["map.drag-drop"].examples = [{
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
}];cmapi.channel["map.error"].examples = [{
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
}];cmapi.channel["map.feature.deselected.batch"].examples = [{
  "title": "de-select batch",
  "description": "",
  "valid": true,
  "payload": {"features": [
	{
		"featureId": "example.mapWidget.1",
		"deSelectedName": "World Trade Center"
	},{
		"featureId": "example.mapWidget.2",
		"deSelectedName": "911 Memorial Museum"
	},{
		"featureId": "example.mapWidget.3",
		"deSelectedName": "Millenium Hilton"
	},{
		"featureId": "example.mapWidget.4",
		"deSelectedName": "911 Tribute Center"
	}],
  "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
}}];
cmapi.channel["map.feature.deselected"].examples = [
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



cmapi.channel["map.feature.draw.complete"].examples = [{
  "title": "draw a feature",
  "description": "Progress event while drawing a new feature on the map",
  "valid": true,
  "payload": {
    "overlayId": "mario foxtrot",
    "featureId": "broccoli yankee",
    "type": "line",
    "name": "broccoli yankee",
    "format": "geojson",
    "feature": {
      "coordinates": [
        [19.971319934313282, 29.202454144467602],
        [22.689376560644526, 25.718380484872096],
        [28.624369253738855, 25.201776348153214],
        [30.99439955610537, 27.721359806455116]
      ],
      "type": "LineString"
    },
    "coordinates": [{
      "lat": 29.202454144467602,
      "lon": 19.971319934313282,
      "alt": 0
    }, {
      "lat": 25.718380484872096,
      "lon": 22.689376560644526,
      "alt": 0
    }, {
      "lat": 25.201776348153214,
      "lon": 28.624369253738855,
      "alt": 0
    }, {
      "lat": 27.721359806455116,
      "lon": 30.99439955610537,
      "alt": 0
    }]
  }
}];
cmapi.channel["map.feature.draw"].examples = [{
  "title": "Edit a feature",
  "description": "Draw a new feature on the map",
  "valid": true,
  "payload": {
    "overlayId": "mario foxtrot",
    "featureId": "broccoli yankee",
    "name": "broccoli yankee",
    "type": "line",
    "messageId": "00049622-581b-d609-d818-32f8930412e0"
  }
}];
cmapi.channel["map.feature.draw.progress"].examples = [{
  "title": "draw a feature",
  "description": "Progress event while drawing a new feature on the map",
  "valid": true,
  "payload": {
    "overlayId": "mario foxtrot",
    "featureId": "broccoli yankee",
    "name": "broccoli yankee",
    "type": "line",
    "format": "geojson",
    "feature": {
      "coordinates": [
        [19.971319934313282, 29.202454144467602],
        [22.689376560644526, 25.718380484872096],
        [28.624369253738855, 25.201776348153214]
      ],
      "type": "LineString"
    },
    "status": "update",
    "updates": {
      "type": "add",
      "indices": [2],
      "coordinates": [{
        "lat": 29.202454144467602,
        "lon": 19.971319934313282,
        "alt": 0
      }, {
        "lat": 25.718380484872096,
        "lon": 22.689376560644526,
        "alt": 0
      }, {
        "lat": 25.201776348153214,
        "lon": 28.624369253738855,
        "alt": 0
      }]
    }
  }
}];
cmapi.channel["map.feature.edit"].examples = [{
    "title": "Edit a feature",
    "description": "Edit an existing feature on the map",
    "valid": true,
    "payload": {
        "overlayId": "test-overlay-123-456",
        "featureId": "feature123-456",
        "messageId": "19733f70-d0b8-11e3-9c1a-0800200c9a66"
    }
}];
cmapi.channel["map.feature.hide"].examples = [
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



cmapi.channel["map.feature.plot.batch"].examples = [{
  "title": "Plot KML batch",
  "description": "",
  "valid": true,
  "payload": {"features": [
	{
		"featureId": "example.mapWidget.1",
		"feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.1\"><name>World Trade Center</name><description><![CDATA[Site of World Trade Center]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.01324033737183,40.71149172571141,0 </coordinates></Point></Placemark></kml>",
		"name": "World Trade Center"
	},{
		"featureId": "example.mapWidget.2",
		"feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.2\"><name>911 Memorial Museum</name><description><![CDATA[Site of 911 Memorial Museum]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.0136,40.7117,0 </coordinates></Point></Placemark></kml>",
		"name": "911 Memorial Museum"
	},{
		"featureId": "example.mapWidget.3",
		"feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.3\"><name>Millenium Hilton</name><description><![CDATA[Site of Millenium Hilton]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.0103,40.7111,0 </coordinates></Point></Placemark></kml>",
		"name": "Millenium Hilton"
	},{
		"featureId": "example.mapWidget.4",
		"feature": "<kml xmlns=\"http://www.opengis.net/kml/2.2\" xmlns:gx=\"http://www.google.com/kml/ext/2.2\" xmlns:kml=\"http://www.opengis.net/kml/2.2\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><Placemark id=\"example.mapWidget.1.4\"><name>911 Tribute Center</name><description><![CDATA[Site of 911 Tribute Center]]></description><Style><IconStyle><Icon><href>https://localhost/widgets/mapWidget/images/blu-circle.png</href></Icon><hotSpot x=\"0.5\" y=\"0\" xunits=\"fraction\" yunits=\"fraction\"></hotSpot></IconStyle></Style><Point><coordinates>-74.0124,40.7101,0 </coordinates></Point></Placemark></kml>",
		"name": "911 Tribute Center"
	}],
  "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
  "format":"kml",
  "zoom": false,
  "readOnly":false
}}];
cmapi.channel["map.feature.plot"].examples = [{
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
        "timePrimitive": {
          "timeSpan": {
            "begin": "1937-01-01T12:00:27.87+00:20",
            "end": "1976-01-01T12:00:27.87+00:20"
          },
          "timeSpans": [{
            "begin": "1937-01-01T12:00:27.87+00:20",
            "end": "1976-01-01T12:00:27.87+00:20"
          }, {
            "begin": "1976-01-01T12:00:27.87+00:20",
            "end": "1988-01-01T12:00:27.87+00:20"
          }]
        },
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
      }
    },
    "zoom": true,
    "readOnly": false
  }
}];
cmapi.channel["map.feature.plot.url"].examples = [
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



cmapi.channel["map.feature.selected.batch"].examples = [{
  "title": "select batch",
  "description": "",
  "valid": true,
  "payload": {"features": [
	{
		"featureId": "example.mapWidget.1",
		"selectedName": "World Trade Center"
	},{
		"featureId": "example.mapWidget.2",
		"selectedName": "911 Memorial Museum"
	},{
		"featureId": "example.mapWidget.3",
		"selectedName": "Millenium Hilton"
	},{
		"featureId": "example.mapWidget.4",
		"selectedName": "911 Tribute Center"
	}],
  "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
}}];
cmapi.channel["map.feature.selected"].examples = [
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



cmapi.channel["map.feature.show"].examples = [
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



cmapi.channel["map.feature.unplot.batch"].examples = [{
  "title": "Unplot batch",
  "description": "",
  "valid": true,
  "payload": {"features": [
	{
		"featureId": "example.mapWidget.1"
	},{
		"featureId": "example.mapWidget.2"
	},{
		"featureId": "example.mapWidget.3"
	},{
		"featureId": "example.mapWidget.4"
	}],
  "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
}}];
cmapi.channel["map.feature.unplot"].examples = [{
  "title": "Unplot a feature",
  "description": "Remove an existing feature from the map",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.2"
  }
}];
cmapi.channel["map.feature.update"].examples = [{
  "title": "Update a feature",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.2",
    "name": "New Name"
  }
}];
cmapi.channel["map.get.complete"].examples = [{
    "title": "Query reponse for top level overlays (see map.get for example)",
    "description": "",
    "valid": true,
    "payload":  {
        "messageId": "eeecb796-978a-5a52-49b7-836e09be5386",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "overlay": [{
                    "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1",
                    "name": "WMS Map Layers",
                    "description": "No Description",
                    "disabled": false,
                    "readOnly": false,
                    "visible": false,
                    "iconUrl": "default",
                    "properties": {}
                }, {
                    "overlayId": "8c0888d1-a3e1-4ad2-8ed7-dbc82d2d7b30",
                    "name": "Layers",
                    "description": "This overlay groups all KML, GEOJSON, Image feature ploted with no overlay defined.",
                    "disabled": false,
                    "readOnly": true,
                    "visible": true,
                    "iconUrl": "default",
                    "properties": {}
                }, {
                    "overlayId": "road charlie",
                    "name": "road charlie",
                    "description": "No Description",
                    "disabled": false,
                    "readOnly": false,
                    "visible": true,
                    "iconUrl": "default",
                    "properties": {
                        "readOnly": false,
                        "iconUrl": "http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",
                        "description": "This overlay has been created with the Validator."
                    }
                }]
            }
        },
        "failures": []
    }
}];
cmapi.channel["map.get"].examples = [{
    "title": "Query for top level overlays",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["overlay"],
        "recursive": false,
        "select": ["overlayId",
            "name", "properties",
            "parentId"
        ],
        "messageId": "eeecb796-978a-5a52-49b7-836e09be5386"
    },
    "messageComplete": {
        "messageId": "eeecb796-978a-5a52-49b7-836e09be5386",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "overlay": [{
                    "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1",
                    "name": "WMS Map Layers",
                    "description": "No Description",
                    "disabled": false,
                    "readOnly": false,
                    "visible": false,
                    "iconUrl": "default",
                    "properties": {}
                }, {
                    "overlayId": "8c0888d1-a3e1-4ad2-8ed7-dbc82d2d7b30",
                    "name": "Layers",
                    "description": "This overlay groups all KML, GEOJSON, Image feature ploted with no overlay defined.",
                    "disabled": false,
                    "readOnly": true,
                    "visible": true,
                    "iconUrl": "default",
                    "properties": {}
                }, {
                    "overlayId": "road charlie",
                    "name": "road charlie",
                    "description": "No Description",
                    "disabled": false,
                    "readOnly": false,
                    "visible": true,
                    "iconUrl": "default",
                    "properties": {
                        "readOnly": false,
                        "iconUrl": "http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",
                        "description": "This overlay has been created with the Validator."
                    }
                }]
            }
        },
        "failures": []
    }
}, {
    "title": "Query for all features",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["feature"],
        "recursive": true,
        "select": ["featureId", "format", "overlayId", "name", "properties"],
        "messageId": "bb2dc0b2-a149-3dd2-12b9-64911d6b7351"
    },
    "messageComplete": {
        "messageId": "bb2dc0b2-a149-3dd2-12b9-64911d6b7351",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "feature": [
                    { "id": "2275fbf2-35e5-4f55-81e7-2d230a1541a5", "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1", "name": "fort irwin", "url": "http://127.0.0.1/tigr/WmsServer.ashx", "format": "wms", "params": { "transparent": true, "format": "image/png", "version": "1.3.0", "styles": "", "srs": "CRS:84" } }, { "id": "0111830b-7206-47ab-b00c-bcfc947a56c8", "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1", "name": "ArcGIS", "url": "http://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/WMSServer", "format": "wms", "params": { "transparent": true, "format": "image/png", "version": "1.3.0", "styles": "", "srs": "CRS:84" } }, { "id": "cd542cf9-7fcd-4d4a-b584-39c31360cdde", "overlayId": "3097c99b-c7f9-4906-8b54-f201cbd62fc1", "name": "USGS Topo", "url": "http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer", "format": "wms", "params": { "transparent": true, "format": "image/png", "version": "1.3.0", "styles": "", "srs": "CRS:84" } }, { "overlayId": "road charlie", "featureId": "goku foxtrot", "name": "goku foxtrot", "description": "", "format": "kml", "data": "<Placemark>\n\t<name>goku foxtrot</name>\n\t<altitude>329</altitude>\n\t<Style>\n\t\t<IconStyle>\n\t\t\t<scale>1.1</scale>\n\t\t\t<Icon>\n\t\t\t\t<href>http://maps.google.com/mapfiles/kml/paddle/wht-blank.png</href>\n\t\t\t</Icon>\n\t\t\t<hotSpot x=\"32\" y=\"1\" xunits=\"pixels\" yunits=\"pixels\"/>\n\t\t</IconStyle>\n\t</Style>\n\t<Point>\n\t\t<coordinates>-153,-4,329</coordinates>\n\t</Point>\n</Placemark>\n", "params": {}, "visible": true, "readOnly": false, "properties": { "lineStyle": "solid", "iconXOffset": 32, "xUnits": "pixels", "iconYOffset": 1, "yUnits": "pixels", "readOnly": false, "disabled": false } }
                ]
            }
        }
    },
    "failures": []
}, {
    "title": "Query for overlay with the ID of 'Road Charlie'",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["overlay"],
        "recursive": false,
        "select": ["overlayId", "name", "properties", "parentId"],
        "filter": [{ "property": "overlayId", "term": "road charlie" }],
        "messageId": "7dda52a6-c186-9507-93fa-9c66f80e8739"
    },
    "messageComplete": {
        "messageId": "7dda52a6-c186-9507-93fa-9c66f80e8739",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "overlay": [{
                    "overlayId": "road charlie",
                    "name": "road charlie",
                    "description": "No Description",
                    "disabled": false,
                    "readOnly": false,
                    "visible": true,
                    "iconUrl": "default",
                    "properties": {
                        "readOnly": false,
                        "iconUrl": "http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",
                        "description": "This overlay has been created with the Validator."
                    }
                }]
            }
        }
    },
    "failures": []

}, {
    "title": "Query for feature with the featureId of 'goku foxtrot' and overlayId of 'road charlie'",
    "description": "",
    "valid": true,
    "payload": {
        "types": ["feature"],
        "recursive": true,
        "select": [
            "featureId",
            "overlayId",
            "parentId",
            "format",
            "feature",
            "properties"
        ],
        "filter": [{
            "property": "featureId",
            "term": "goku foxtrot"
        }, {
            "property": "overlayId",
            "term": "road charlie"
        }],
        "messageId": "b8f45f3b-5fce-0a0b-e792-dcf6ba014438"
    },
    "messageComplete": {
        "messageId": "b8f45f3b-5fce-0a0b-e792-dcf6ba014438",
        "status": "success",
        "originatingChannel": "map.get",
        "details": {
            "successes": {
                "feature": [{
                    "overlayId": "road charlie",
                    "featureId": "goku foxtrot",
                    "name": "goku foxtrot",
                    "description": "",
                    "format": "kml",
                    "data": "<Placemark>\n\t<name>goku foxtrot</name>\n\t<altitude>329</altitude>\n\t<Style>\n\t\t<IconStyle>\n\t\t\t<scale>1.1</scale>\n\t\t\t<Icon>\n\t\t\t\t<href>http://maps.google.com/mapfiles/kml/paddle/wht-blank.png</href>\n\t\t\t</Icon>\n\t\t\t<hotSpot x=\"32\" y=\"1\" xunits=\"pixels\" yunits=\"pixels\"/>\n\t\t</IconStyle>\n\t</Style>\n\t<Point>\n\t\t<coordinates>-153,-4,329</coordinates>\n\t</Point>\n</Placemark>\n",
                    "params": {},
                    "visible": true,
                    "readOnly": false,
                    "properties": {
                        "lineStyle": "solid",
                        "iconXOffset": 32,
                        "xUnits": "pixels",
                        "iconYOffset": 1,
                        "yUnits": "pixels",
                        "readOnly": false,
                        "disabled": false
                    }
                }]
            }
        },
        "failures": []
    }
}];
cmapi.channel["map.message.complete"].examples = [{
  "title": "Message Complete resulting from earlier Hide Overlay message",
  "description": "Example message complete from a hide overlay message",
  "valid": true,
  "payload": {
	  "messageId":"19733f70-d0b8-11e3-9c1a-0800200c9a66",
	  "originatingChannel":"map.overlay.hide",
	  "status":"success",
	  "details": {"overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"},
	  "failures":[]
  }
}];
cmapi.channel["map.overlay.cluster.activate"].examples = [{
  "title": "Activate overlay cluster rule example",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "BattlePlan2"
  }
}];cmapi.channel["map.overlay.cluster.deactivate"].examples = [{
  "title": "Deactivate overlay cluster rule example",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "BattlePlan2"
  }
}];cmapi.channel["map.overlay.cluster.remove"].examples = [{
  "title": "Remove overlay cluster rule example",
  "description": "",
  "valid": true,
  "payload": {
    "overlayId": "BattlePlan2"
  }
}];cmapi.channel["map.overlay.cluster.set"].examples = [{
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
}];cmapi.channel["map.overlay.create"].examples = [
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



cmapi.channel["map.overlay.hide"].examples = [{
  "title": "Hide Overlay",
  "description": "Hide existing overlay on the map",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
  }
}];
cmapi.channel["map.overlay.remove"].examples = [
    {
    "title": "Remove Overlay",
    "description" : "Remove entire overlay from the map.",
    "valid": true,
    "payload": {
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



cmapi.channel["map.overlay.show"].examples = [
    {
    "title": "Show Overlay",
    "description" : "Show existing overlay on the map.",
    "valid": true,
    "payload": {
        "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1"
        }
    }
];



cmapi.channel["map.overlay.update"].examples = [
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



cmapi.channel["map.status.about"].examples = [{
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
cmapi.channel["map.status.format"].examples = [{
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
cmapi.channel["map.status.initialization"].examples = [{
  "title": "Initialization status",
  "description": "",
  "valid": true,
  "payload": {
    "status": "mapswapinprogress"
  }
}];cmapi.channel["map.status.request"].examples = [{
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
}];cmapi.channel["map.status.selected"].examples = [{
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
}];cmapi.channel["map.status.view"].examples = [{
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
cmapi.channel["map.view.center.bounds"].examples = [
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
];cmapi.channel["map.view.center.feature"].examples = [{
  "title": "Center on a feature",
  "description": "Center the map on a particular feature",
  "valid": true,
  "payload": {
    "overlayId": "2d882141-0d9e-59d4-20bb-58e6d0460699.1",
    "featureId": "example.mapWidget.1"
  }
}];
cmapi.channel["map.view.center.location"].examples = [{
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
cmapi.channel["map.view.center.overlay"].examples = [{
  "title": "Center on an Overlay",
  "description": "Center the map on a particular overlay",
  "valid": true,
  "payload": {
    "overlayId": "2tyjhp-23idk38-rml389k6kd-29-flsow2c"
  }
}];
cmapi.channel["map.view.clicked"].examples = [{
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
cmapi.channel["map.view.zoom"].examples = [{
  "title": "Zoomto a range",
  "description": "Zoom the map to a particular range.",
  "valid": true,
  "payload": {
    "range": 100000
  }
}];
