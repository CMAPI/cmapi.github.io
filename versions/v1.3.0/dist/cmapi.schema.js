var cmapi = cmapi || {};
cmapi.channel = cmapi.channel || {};
cmapi.overview = cmapi.overview || {};;cmapi.channel["map.drag-drop"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Framework dependent",
    "description": "Drop an item on the map.  Note that the particular framework used to implement drag and drop (e.g., OWF drag and drop API, or go-lab/iwc at https://github.com/go-lab/iwc) will define how to use drag and drop generically.  This specification defines the details of the data object that is to be transferred via the drag and drop implementation",
    "type": "object",
    "properties": {
      "dragDropData": {
        "description": "Container for the drag and drop data",
        "type": "object",
        "required": ["featureId"],
        "properties": {
          "overlayId": {
            "type": "string",
            "description": "The ID of the overlay the dropped item should be loaded into. If overlay with this ID already exists, new item is merged into existing overlay; otherwise, new overlay will be created. If no overlayId is included, sending widget’s ID is used.",
			"default": "Sending widget's ID"
          },
          "featureId": {
            "type": "string",
            "description": "Unique identifier for the dropped feature. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data."
          },
          "name": {
            "type": "string",
            "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only."
          },
          "zoom": {
            "type": "boolean",
            "description": "true if map should zoom to newly loaded feature or marker data, false if not.  Default is false.",
            "default": false
          },
          "marker": {
            "type": "object",
            "description": "A JSON object containing information with which to create a new marker on the map.",
            "properties": {
              "details": {
                "type": "string",
                "description": "Detail text associated with the marker that will appear in an info window."
              },
              "iconUrl": {
                "type": "string",
                "description": "URL to an icon that represents this dropped marker on the map. If no URL is included, a default icon is used.",
				"default": "map default icon"
              }
            }
          },
		  "feature": {
            "type": "object",
            "description": "A JSON object containing feature data to be plotted on the map.",
            "properties": {
              "format": {
                "type": "string",
                "default": "kml",
                "description": "Data format of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status).  Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson', and 'wms'."
              },
              "featureData": {
                "type": "object",
                "description": "Feature data to be loaded into the map (see Appendices A and B for additional information on KML and GeoJSON data)."
              }
            },
            "required": ["featureData"]
          },
          "featureUrl": {
            "type": "object",
            "description": "A JSON object containing a URL to feature data to be plotted on the map.",
            "properties": {
              "format": {
                "type": "string",
                "default": "kml",
                "description": "Data format of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status).  Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson' and 'wms'."
              },
              "url": {
                "type": "string",
                "description": "URL from which to retrieve the feature data to load onto the map."
              },
              "params": {
                "type": "object",
                "description": "A JSON object containing a list of parameters to be passed to the server along with the URL when loading WMS data. Params object is ignored unless “format” is set to ”wms.” Note that request, exceptions, SRS/CRS, width, height, and bbox params SHOULD NOT be passed in as they are determined by the map as needed and will be ignored if passed. Params as passed MUST be concatenated to the URL and are expected to follow the WMS specification.   All parameters passed in MUST NOT be URL encoded (the map widget implementation will URL encode all passed in params)."
              }
            },
			"required": ["url"]
          }
        }
      }
    },
	"required": ["dragDropData"]
  }
};;cmapi.channel["map.error"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.error",
    "description": "Map Widget reports errors occurred when attempting to process any message.",
    "type": "object",
    "properties": {
      "sender": {
        "type": "string",
        "description": "Sender ID of message that caused error."
      },
      "type": {
        "type": "string",
        "description": "Type of message that caused error."
      },
      "msg": {
        "type": "object",
        "description": "The message that caused error."
      },
      "error": {
        "type": "string",
        "description": "A description of the error."
      }
    },
    "required": ["sender", "type", "msg", "error"]
  }
};;cmapi.channel["map.feature.clicked"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.clicked",
    "description": "'Click', or report that a particular feature was clicked",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay this feature is loaded into.",
        "type": "string"
      },
      "featureId": {
        "description": "Unique identifier for the given feature clicked.",
        "type": "string"
      },
      "lat": {
        "type": "number",
        "description": "The latitude of the location that was clicked",
        "minimum": "-90",
        "maximum": "90"
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "minimum": "-180",
        "maximum": "180"
      },
      "button": {
        "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
        "type": ["string", "enum"],
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event. Allowable values are 'single' and 'double'.  Default value is 'single'.",
        "type": ["string", "enum"],
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'.  Default value is 'none'.",
        "type": ["sring", "enum"],
        "uniqueItems": true,
        "default": ["none"],
        "items": {
          "enum": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type", "featureId", "overlayId"]
  }
};
;cmapi.channel["map.feature.deselected.batch.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.deselected.batch.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature identifier objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.deselected.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.deselected.batch",
    "description": "De-Select, or report that a collection of feature objects were de-selected.",
    "type": "object",
    "properties": {
      "features": {
        "description": "An array of map.feature.deSelected payload objects.  See map.feature.deSelected for the object format and schema",
        "type": "array"
      },
      "overlayId": {
        "description": "The default overlayId to be applied to all map.feature.deSelected objects in the payloads array that don't include an overlayId. I.e., similar behavior to CSS.  See map.feature.deSelected for more details",
        "type": "string"
      }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.deselected.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.deselected.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature identifier objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.deselected"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.deselected",
    "description": "De-Select, or report that object was de-selected.",
    "properties": {
      "deSelectedId": {
        "description": "The ID of the object to be de-selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
        "type": "string",
        "default": "N/A"
      },
      "deSelectedName": {
        "description": "The name of the de-selected object.",
        "type": "string",
        "default": "N/A"
      },
      "featureId": {
        "description": "The ID of the feature that contains the de-selected object.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The ID of the overlay which contains the de-selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      }
    },
    "required": ["featureId"]
  }

};
;cmapi.channel["map.feature.draw.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.draw.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The id of the overlay the feature that is to be edited.",
        "type": "string"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be edited. ",
        "type": "string"
      },
      "name": {
        "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
        "type": "string"
      },
      "type": {
        "description": "Type of feature to be drawn.  Options are line, polygon, point or symbol.  This field may be overloaded to handle future draw types such as bufferedline, circle, aoi, etc.",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      },
      "feature": {
        "type": "object",
        "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute"
      },
      "format": {
        "type": "string",
        "description": "Type of feature data based on the map.feature.plot type"
      },
      "coordinates": {
        "type": "array",
        "description": "Array of objects which represent vertice locations associated with the object drawn. Each object in the array is of the form {lat: number, lon: number, [alt: number]}."
      }
    },
    "required": ["featureId", "overlayId"]
  }
};
;cmapi.channel["map.feature.draw.progress"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.progress Details object",
    "description": "Schema for the details object for a map.message.progress message during a map.feature.draw.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The id of the overlay the feature that is to be edited.",
        "type": "string"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be edited. ",
        "type": "string"
      },
      "type": {
        "description": "Type of feature to be drawn.  Options are line, polygon, point or symbol.  This field may be overloaded to handle future draw types such as bufferedline, circle, aoi, etc.",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      },
      "feature": {
        "type": "object",
        "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute"
      },
      "format": {
        "type": "string",
        "description": "Type of feature data based on the map.feature.plot type"
      },
      "updates": {
        "type": "object",
        "description": "This object contains the details of the changes made during the draw operation.",
        "properties": {
          "type": {
            "enum": ["add", "update", "remove"],
            "description": "This field identifies the operation performed."
          },
          "indices": {
            "type": "array",
            "items": {
              "type": "integer"
            },
            "additionalItems": true,
            "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate."
          },
          "coordinates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "lat": {
                  "type": "number",
                  "maximum": 90.0,
                  "minimum": -90.0,
                  "description": "The latitude component of the coordinate."
                },
                "lon": {
                  "type": "number",
                  "maximum": 180.0,
                  "minimum": -180.0,
                  "description": "The longitude component of the coordinate."
                },
                "alt": {
                  "type": "number",
                  "description": "The optional altitude component of the coordinate."
                }
              }
            },
            "additionalItems": true,
            "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}."
          }
        }
      }
    },
    "required": ["featureId", "overlayId"]
  }
};
;cmapi.channel["map.feature.draw"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.draw",
    "description": "Message to initiate a draw from a widget.  Allows user to draw a point, line or polygon by telling the map to start the user interaction for drawing.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay the feature to be drawn should be loaded into. If an overlay with this ID already exists, the new feature will merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
        "type": "string"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be drawn. ",
        "type": "string"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message and which MUST be used in the associated map.message.complete, map.message.progress, and map.message.cancel messages as defined in the map.message channels.",
        "type": "string"
      },
      "type": {
        "description": "Type of feature to be drawn.  Supported types include 'line', 'polygon', 'point' or 'symbol'.  Optional types include 'bufferedline', 'circle', 'aoi', and 'airspace'.  Additional types may be added in the future.",
        "type": "string",
        "default": "line"
      },
      "name": {
        "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      },
      "menuId": {
        "description": "The id of a context menu. If populated, the context menu MUST have already been pre-registered via the map.menu.create channel. If populated, the context menu associated with this id will appear when the feature is 'right-clicked', allowing the user to invoke actions on the feature which will be handled by the widget which originally registered the context menu. If no menuId is assigned, the feature will not have a context menu associated when right-clicked.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Context Menus"
      }
    },
    "required": ["featureId", "messageId"]
  }
};
;cmapi.channel["map.feature.edit.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.edit.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The id of the overlay the feature that is to be edited.",
        "type": "string"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be edited. ",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      },
      "feature": {
        "type": "object",
        "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute"
      },
      "format": {
        "type": "string",
        "description": "Type of feature data based on the map.feature.plot type"
      },
      "coordinates": {
        "type": "array",
        "description": "Array of objects which represent vertice locations associated with the object edited. Each object in the array is of the form {lat: number, lon: number, [alt: number]}."
      }
    },
    "required": ["featureId", "overlayId"]
  } 
};
;cmapi.channel["map.feature.edit.progress"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.progress Details object",
    "description": "Schema for the details object for a map.message.progress message during a map.feature.edit.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The id of the overlay the feature that is to be edited.",
        "type": "string"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be edited. ",
        "type": "string"
      },
      "properties": {
        "description": "A properties object defining the appearance of the graphic being drawn",
        "type": "object"
      },
      "feature": {
        "type": "object",
        "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute"
      },
      "format": {
        "type": "string",
        "description": "Type of feature data based on the map.feature.plot type"
      },
      "status": {
        "description": "A pre-defined string indicating the type of progress. <ul><li>start - indicates that the map has placed the feature into edit mode.</li><li>update - indicates that the map has modified the feature.</li></ul>",
        "enum": ["start", "update"]
      },
      "updates": {
            "type": "object",
            "description": "This object contains the details of the changes made during the draw operation.",
            "properties": {
                "type":{
                    "enum": ["add", "update", "remove"],
                    "description": "This field identifies the operation performed."
                },
                "indices":{
                    "type": "array",
                    "items":{
                        "type": "integer"
                    },
                    "additionalItems": true,
                    "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate."
                },
                "coordinates":{
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "lat":{
                                "type": "number",
                                "maximum": 90.0,
                                "minimum": -90.0,
                                "description": "The latitude component of the coordinate."
                            },
                            "lon":{
                                "type": "number",
                                "maximum": 180.0,
                                "minimum": -180.0,
                                "description": "The longitude component of the coordinate."
                            },
                            "alt":{
                                "type": "number",
                                "description": "The optional altitude component of the coordinate."
                            }
                        }
                    },
                    "additionalItems": true,
                    "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}."
                }
            }
        }
    },
    "required": ["featureId", "overlayId"]
  }
};
;cmapi.channel["map.feature.edit"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.edit",
    "description": "Message to notify the map to begin editing an existing feature. The map is responsible for providing the user interface to enable visual editing of the feature.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The id of the overlay containing the feature that is to be edited.  If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay with this ID does not exist, an error is sent on the map.error channel",
        "type": "string",
		"default": "Sending widget's ID"
      },
      "featureId": {
        "description": "The unique identifier for the feature to be edited. ",
        "type": "string"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message and which MUST be used in the associated map.message.complete, map.message.progress, and map.message.cancel messages as defined in the map.message channels.",
        "type": "string"
      }
    },
    "required": ["featureId", "messageId"]
  }
};
;cmapi.channel["map.feature.get"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.get",
    "description": "Request the full feature data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
    "properties": {
      "features" : {
        "description" : "An array of objects with a featureId and an overlayId representing the feature to be retrived",
        "type" : "array",
            "properties":{
                "overlayId":{
                    "type": "string",
                    "description": "The overlayId that currently contains the feature."
                },
                "featureId":{
                    "type": "string",
                    "description": "The id of the feature you wish to retrieve."
                }
            },
        "additionalItems": true,
        "required": ["features, messagId"]
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["features, messagId"]
  }
};
;cmapi.channel["map.feature.hide.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.hide.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature ID's.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.hide"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.hide",
    "description": "Hide existing feature on the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be hidden is found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
        "type": "string"
      },
      "featureId": {
        "description": "The ID of the feature to be hidden.",
        "type": "string"
      }
    },
    "required": ["featureId"]
  }
};
;cmapi.channel["map.feature.mousedown"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.mousedown",
    "description": "Report that a mouse down event was triggered from a particular feature",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay this feature is loaded into.",
        "type": "string"
      },
      "featureId": {
        "description": "Unique identifier for the given feature clicked.",
        "type": "string"
      },
      "lat": {
        "type": "number",
        "description": "The latitude of the location that was clicked",
        "minimum": "-90",
        "maximum": "90"
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "minimum": "-180",
        "maximum": "180"
      },
      "button": {
        "description": "Which mouse button was clicked.",
        "type" : "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event.",
        "type" : "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event. ",
        "uniqueItems": true,
        "type" : "string",
        "default": "none",
        "enum": ["shift", "alt", "ctrl", "none"]
      }
    },
    "required": ["lat", "lon", "button", "keys", "type", "featureId", "overlayId"]
  }
};
;cmapi.channel["map.feature.mouseup"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.mouseup",
    "description": "Report that a mouse up event was triggered from a particular feature",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay this feature is loaded into.",
        "type": "string"
      },
      "featureId": {
        "description": "Unique identifier for the given feature clicked.",
        "type": "string"
      },
      "lat": {
        "type": "number",
        "description": "The latitude of the location that was clicked",
        "minimum": "-90",
        "maximum": "90"
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "minimum": "-180",
        "maximum": "180"
      },
      "button": {
        "description": "Which mouse button was clicked. ",
        "type" : "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event. ",
        "type" : "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.",
        "default": "none",
        "type" : "string",
        "enum": ["shift", "alt", "ctrl", "none"]
      }
    },
    "required": ["lat", "lon", "button", "keys", "type", "featureId", "overlayId"]
  }
};
;cmapi.channel["map.feature.plot.2525b"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.2525b",
    "description": "This optional extension defines the format of the map.feature.plot channel payload for MIL-STD-2525 Revision B Change II features. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the MIL-STD-2525 Revision B Change II modifiers that the map implementation shall apply to the feature.",
    "type": "object",
    "required": ["format", "feature"],
    "properties": {
      "format": {
        "type" : "string",
        "enum": ["2525b"],
        "description": "Defines the feature format as a CMAPI Symbol with the specific type of MIL-STD-2525 Revision B Change II."
      },
      "feature": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "feature",
        "description": "The feature attribute of the map.feature.plot payload in GeoJSON format.",
        "type": "object",
        "properties": {
          "symbolCode": {
            "type": "string",
            "description": "The 15 character MIL-STD-2525 Revision B Change II symbol code."
          },
          "type": {
            "type" : "string",
            "enum": ["point", "lineString"],
            "description": "Defines the geojson format of the coordinates in the coordinate attribute.  Polygons are not allowed for this symbol type"
          },
          "coordinates": {
            "type": "array",
            "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format."
          }

        },
        "required": ["symbolCode", "type", "coordinates"]
      },
      "properties": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "properties",
        "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
        "type": "object",
        "properties": {
          "modifiers": {
            "type": "object",
            "description": "The milstd2525 modifiers required for the graphic.",
            "properties": {
              "size": {
                "type": "integer",
                "description": "The pixels dimensions of a single point icon when it is drawn.  This modifier is not found in the MIL-STD-2525."
              },
              "A": {
                "type": "string",
                "description": "Symbol Icon: The innermost part of a symbol that represents a warfighting object Here for completeness, not actually used as this comes from thesymbol code."
              },
              "B": {
                "type": "string",
                "description": "Echelon: Symbol Icon: A graphic modifier in a unit symbol that identifies command level We feed off of the symbol code so this isn't used."
              },
              "C": {
                "type": "string",
                "description": "Quantity: A text modifier in an equipment symbol that identifies the number of items present."
              },
              "D": {
                "type": "string",
                "description": "Task Force Indicator: A graphic modifier that identifies a unit or SO symbol as a task force (see 5.3.4.6 and figures 2 and 3)."
              },
              "E": {
                "type": "string",
                "description": "Frame Shape Modifier: A graphic modifier that displays standard identity, battle dimension, or exercise amplifying descriptors of an object (see 5.3.1 and table II)."
              },
              "F": {
                "type": "string",
                "description": "Reinforced / Reduced: A text modifier in a unit symbol that displays (+) for reinforced, (-) for reduced,(+) reinforced and reduced. R : reinforced, D : reduced, RD : reinforced and reduced"
              },
              "G": {
                "type": "string",
                "description": "Staff Comments: A text modifier for units, equipment and installations, content is implementation specific."
              },
              "H": {
                "type": "string",
                "description": "Additional Info: Text modifier for amplifying free text."
              },
              "H1": {
                "type": "string",
                "description": "Additional Info 2: Text modifier for amplifying free text."
              },
              "H2": {
                "type": "string",
                "description": "Additional Info 3: Text modifier for amplifying free text."
              },
              "J": {
                "type": "string",
                "description": "Evaluation Rating: A text modifier for units and installations that indicates unit effectiveness or installation capability."
              },
              "K": {
                "type": "string",
                "description": "Combat Effectiveness: A text modifier for hostile equipment, “!” indicates detectable electronic signatures."
              },
              "L": {
                "type": "string",
                "description": "Signature Equipment: A text modifier for hostile equipment, “!” indicates detectable electronic signatures."
              },
              "M": {
                "type": "string",
                "description": "Higher Formation: A text modifier for units that indicates number or title of higher echelon command (corps are designated by Roman numerals)."
              },
              "N": {
                "type": "string",
                "description": "Hostile: A text modifier for equipment, letters ENY denote hostile symbols. Always set to ENY"
              },
              "P": {
                "type": "string",
                "description": "IFF/SIF: A text modifier displaying IFF/SIF Identification modes and codes."
              },
              "Q": {
                "type": "number",
                "minimum": 0,
                "maximum": 359,
                "description": "Direction of Movement: A graphic modifier for CBRN events that identifies the direction of movement (see 5.5.2.1 and figure 11)."
              },
              "R": {
                "type": "string",
                "description": "Mobility Indicator: A graphic modifier for equipment that depicts the mobility of an object (see 5.3.4.3, figures 2 and 3, and table VI). We feed off of the symbol code for mobility so this isn't used."
              },
              "R2": {
                "enum": ["M", "S", "U"],
                "description": "Signature Mobility Indicator: M : Mobile, S : Static, or U : Uncertain."
              },
              "S": {
                "type": "string",
                "description": "Headquaters or Staff Offest Indicator: Headquarters staff indicator: A graphic modifier for units, equipment, and installations that identifies a unit as a headquarters (see 5.3.4.8 and figures 2 and 3). Offset location indicator: A graphic modifier for units, equipment, and installations used when placing an object away from its actual location (see 5.3.4.9 and figures 2 and 3)."
              },
              "T": {
                "type": "string",
                "description": "Unique Designation 1: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology."
              },
              "T1": {
                "type": "string",
                "description": "Unique Designation 2: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology."
              },
              "V": {
                "type": "string",
                "description": "Equipment Type: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6)."
              },
              "W": {
                "type": "string",
                "description": "Date Time Group 1: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6)."
              },
              "W1": {
                "type": "string",
                "description": "Date Time Group 2: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6)."
              },
              "X": {
                "type": "array",
                "description": "Altitude Depth: An array of numbers for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects, or height of equipment or structures on the ground. See 5.5.2.5 for content."
              },
              "Y": {
                "type": "string",
                "description": "Location: A text modifier for units, equipment, and installations that displays a symbol’s location in degrees, minutes, and seconds (or in UTM or other applicable display format). Conforms to decimal degrees format: xx.dddddhyyy.dddddh where xx : degrees latitude yyy : degrees longitude .ddddd : decimal degrees h : direction (N, E, S, W)."
              },
              "AA": {
                "type": "string",
                "description": "Special C2 Headquarters: A text modifier for units, indicator is contained inside the frame (see figures 2 and 3), contains the name of the special C2 Headquarters."
              },
              "AC": {
                "type": "string",
                "description": "Installation: Installation: A graphic modifier for units, equipment, and installations used to show that a particular symbol denotes an installation (see 5.3.4.5 and figures 2 and 3). Not used, we feed off of symbol code for this."
              },
              "AD": {
                "type": "string",
                "description": "Platform Type: ELNOT or CENOT."
              },
              "AE": {
                "type": "number",
                "description": "Equipment Teardown Time: Equipment teardown time in minutes."
              },
              "AF": {
                "type": "string",
                "description": "Common Identifier: Example: “Hawk” for Hawk SAM system."
              },
              "AG": {
                "type": "string",
                "description": "Auxillery Equipment Identifier: Towed sonar array indicator: A graphic modifier for equipment that indicates the presence of a towed sonar array (see 5.3.4.4, figures 2 and 3, and table VII)."
              },
              "AH": {
                "type": "string",
                "description": "Area of Uncertainty: A graphic modifier for units and equipment that indicates the area where an object is most likely to be, based on the object’s last report and the reporting accuracy of the sensor that detected the object (see 5.3.4.11.1 and figure 4)."
              },
              "AI": {
                "type": "string",
                "description": "Dead Reckoning Trailer: A graphic modifier for units and equipment that identifies where an object should be located at present, given its last reported course and speed (see 5.3.4.11.2 and figure 4)."
              },
              "AJ": {
                "type": "string",
                "description": "Speed Leader: A graphic modifier for units and equipment that connects two objects and is updated dynamically as the positions of the objects change (see 5.3.4.11.4 and figure 4)."
              },
              "AK": {
                "type": "string",
                "description": "Pairing Line: An optional graphic modifier for equipment or installations that indicates operational condition or capacity."
              },
              "AL": {
                "type": "string",
                "description": "Operation Condition: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type."
              },
              "AM": {
                "type": "array",
                "description": "Distance: An array of numeric modifiers that displays a minimum, maximum, or a specific distance (range, radius, width, length, etc.), in meters. 0 - 999,999 meters"
              },
              "AN": {
                "type": "array",
                "description": "Azimuth: An array of numbers between 0 to 359. For Tactical Graphics A numeric modifier that displays an angle measured from true north to any other line in degrees."
              },
              "AO": {
                "type": "string",
                "description": "Engagement Bar: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type."
              },
              "CC": {
                "type": "string",
                "description": "Country Code: Used internally by the renderer.  This value is set via the 13th & 14th characters in the symbol id.  There is no formal definition of how this should be indicated on the symbol in the MilStd or USAS.   The renderer will place it to the right of the 'H' label."
              }
            }
          }
        }
      }
    }
  }
};
;cmapi.channel["map.feature.plot.2525c"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.2525c",
    "description": "This optional extension defines the format of the map.feature.plot channel payload for MIL-STD-2525 Revision C features. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the MIL-STD-2525 Revision C modifiers that the map implementation shall apply to the feature.",
    "type": "object",
    "required": ["format", "feature"],
    "properties": {
      "format": {
        "type" : "string",
          "enum": ["2525c"],
          "description": "Defines the feature format as a CMAPI Symbol with the specific type of MIL-STD-2525 Revision B Change II."
      },
      "feature": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "feature",
        "description": "The feature attribute of the map.feature.plot payload in GeoJSON format.",
        "type": "object",
        "properties": {
          "symbolCode": {
            "type": "string",
            "description": "The 15 character MIL-STD-2525 Revision C symbol code."
          },
          "type": {
            "type" : "string",
            "enum": ["point", "lineString"],
            "description": "Defines the geojson format of the coordinates in the coordinate attribute.  Polygons are not allowed for this symbol type"
          },
          "coordinates": {
            "type": "array",
            "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format."
          }

        },
        "required": ["symbolCode", "type", "coordinates"]
      },
      "properties": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "properties",
        "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
        "type": "object",
        "properties": {
          "modifiers": {
            "type": "object",
            "description": "The milstd2525 modifiers required for the graphic.",
            "properties": {
              "size": {
                "type": "integer",
                "description": "The pixels dimensions of a single point icon when it is drawn.  This modifier is not found in the MIL-STD-2525."
              },
              "A": {
                "type": "string",
                "description": "Symbol Icon: The innermost part of a symbol that represents a warfighting object Here for completeness, not actually used as this comes from thesymbol code."
              },
              "B": {
                "type": "string",
                "description": "Echelon: Symbol Icon: A graphic modifier in a unit symbol that identifies command level We feed off of the symbol code so this isn't used."
              },
              "C": {
                "type": "string",
                "description": "Quantity: A text modifier in an equipment symbol that identifies the number of items present."
              },
              "D": {
                "type": "string",
                "description": "Task Force Indicator: A graphic modifier that identifies a unit or SO symbol as a task force (see 5.3.4.6 and figures 2 and 3)."
              },
              "E": {
                "type": "string",
                "description": "Frame Shape Modifier: A graphic modifier that displays standard identity, battle dimension, or exercise amplifying descriptors of an object (see 5.3.1 and table II)."
              },
              "F": {
                "type": "string",
                "description": "Reinforced / Reduced: A text modifier in a unit symbol that displays (+) for reinforced, (-) for reduced,(+) reinforced and reduced. R : reinforced, D : reduced, RD : reinforced and reduced"
              },
              "G": {
                "type": "string",
                "description": "Staff Comments: A text modifier for units, equipment and installations, content is implementation specific."
              },
              "H": {
                "type": "string",
                "description": "Additional Info: Text modifier for amplifying free text."
              },
              "H1": {
                "type": "string",
                "description": "Additional Info 2: Text modifier for amplifying free text."
              },
              "H2": {
                "type": "string",
                "description": "Additional Info 3: Text modifier for amplifying free text."
              },
              "J": {
                "type": "string",
                "description": "Evaluation Rating: A text modifier for units and installations that indicates unit effectiveness or installation capability."
              },
              "K": {
                "type": "string",
                "description": "Combat Effectiveness: A text modifier for hostile equipment, “!” indicates detectable electronic signatures."
              },
              "L": {
                "type": "string",
                "description": "Signature Equipment: A text modifier for hostile equipment, “!” indicates detectable electronic signatures."
              },
              "M": {
                "type": "string",
                "description": "Higher Formation: A text modifier for units that indicates number or title of higher echelon command (corps are designated by Roman numerals)."
              },
              "N": {
                "type": "string",
                "description": "Hostile: A text modifier for equipment, letters ENY denote hostile symbols. Always set to ENY"
              },
              "P": {
                "type": "string",
                "description": "IFF/SIF: A text modifier displaying IFF/SIF Identification modes and codes."
              },
              "Q": {
                "type": "number",
                "minimum": 0,
                "maximum": 359,
                "description": "Direction of Movement: A graphic modifier for CBRN events that identifies the direction of movement (see 5.5.2.1 and figure 11)."
              },
              "R": {
                "type": "string",
                "description": "Mobility Indicator: A graphic modifier for equipment that depicts the mobility of an object (see 5.3.4.3, figures 2 and 3, and table VI). We feed off of the symbol code for mobility so this isn't used."
              },
              "R2": {
                "enum": ["M", "S", "U"],
                "description": "Signature Mobility Indicator: M : Mobile, S : Static, or U : Uncertain."
              },
              "S": {
                "type": "string",
                "description": "Headquaters or Staff Offest Indicator: Headquarters staff indicator: A graphic modifier for units, equipment, and installations that identifies a unit as a headquarters (see 5.3.4.8 and figures 2 and 3). Offset location indicator: A graphic modifier for units, equipment, and installations used when placing an object away from its actual location (see 5.3.4.9 and figures 2 and 3)."
              },
              "T": {
                "type": "string",
                "description": "Unique Designation 1: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology."
              },
              "T1": {
                "type": "string",
                "description": "Unique Designation 2: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology."
              },
              "V": {
                "type": "string",
                "description": "Equipment Type: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6)."
              },
              "W": {
                "type": "string",
                "description": "Date Time Group 1: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6)."
              },
              "W1": {
                "type": "string",
                "description": "Date Time Group 2: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6)."
              },
              "X": {
                "type": "array",
                "description": "Altitude Depth: An array of numbers for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects, or height of equipment or structures on the ground. See 5.5.2.5 for content."
              },
              "Y": {
                "type": "string",
                "description": "Location: A text modifier for units, equipment, and installations that displays a symbol’s location in degrees, minutes, and seconds (or in UTM or other applicable display format). Conforms to decimal degrees format: xx.dddddhyyy.dddddh where xx : degrees latitude yyy : degrees longitude .ddddd : decimal degrees h : direction (N, E, S, W)."
              },
              "AA": {
                "type": "string",
                "description": "Special C2 Headquarters: A text modifier for units, indicator is contained inside the frame (see figures 2 and 3), contains the name of the special C2 Headquarters."
              },
              "AC": {
                "type": "string",
                "description": "Installation: Installation: A graphic modifier for units, equipment, and installations used to show that a particular symbol denotes an installation (see 5.3.4.5 and figures 2 and 3). Not used, we feed off of symbol code for this."
              },
              "AD": {
                "type": "string",
                "description": "Platform Type: ELNOT or CENOT."
              },
              "AE": {
                "type": "number",
                "description": "Equipment Teardown Time: Equipment teardown time in minutes."
              },
              "AF": {
                "type": "string",
                "description": "Common Identifier: Example: “Hawk” for Hawk SAM system."
              },
              "AG": {
                "type": "string",
                "description": "Auxillery Equipment Identifier: Towed sonar array indicator: A graphic modifier for equipment that indicates the presence of a towed sonar array (see 5.3.4.4, figures 2 and 3, and table VII)."
              },
              "AH": {
                "type": "string",
                "description": "Area of Uncertainty: A graphic modifier for units and equipment that indicates the area where an object is most likely to be, based on the object’s last report and the reporting accuracy of the sensor that detected the object (see 5.3.4.11.1 and figure 4)."
              },
              "AI": {
                "type": "string",
                "description": "Dead Reckoning Trailer: A graphic modifier for units and equipment that identifies where an object should be located at present, given its last reported course and speed (see 5.3.4.11.2 and figure 4)."
              },
              "AJ": {
                "type": "string",
                "description": "Speed Leader: A graphic modifier for units and equipment that connects two objects and is updated dynamically as the positions of the objects change (see 5.3.4.11.4 and figure 4)."
              },
              "AK": {
                "type": "string",
                "description": "Pairing Line: An optional graphic modifier for equipment or installations that indicates operational condition or capacity."
              },
              "AL": {
                "type": "string",
                "description": "Operation Condition: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type."
              },
              "AM": {
                "type": "array",
                "description": "Distance: An array of numeric modifiers that displays a minimum, maximum, or a specific distance (range, radius, width, length, etc.), in meters. 0 - 999,999 meters"
              },
              "AN": {
                "type": "array",
                "description": "Azimuth: An array of numbers between 0 to 359. For Tactical Graphics A numeric modifier that displays an angle measured from true north to any other line in degrees."
              },
              "AO": {
                "type": "string",
                "description": "Engagement Bar: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type."
              },
              "CC": {
                "type": "string",
                "description": "Country Code: Used internally by the renderer.  This value is set via the 13th & 14th characters in the symbol id.  There is no formal definition of how this should be indicated on the symbol in the MilStd or USAS.   The renderer will place it to the right of the 'H' label."
              }
            }
          }
        }
      }
    }
  }
};
;cmapi.channel["map.feature.plot.aoi"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.aoi",
    "description": "The Common Map Widget API supports Areas of Interest (AOIs) by extending the GeoJSON specification by adding the “aoi” object to the “Properties” object of the GeoJSON specification.  This extended object ONLY applies to the GeoJSON Feature object.  Note that when passing AOIs, the base GeoJSON object MUST be a single feature object, and MUST NOT be a Feature Collection object.",
    "type": "object",
    "required": ["aoi"],
    "properties": {
      "aoi": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "aoi",
        "description": "If included in a GeoJSON feature, signifies the feature is an Area of Interest and is to be treated accordingly.  Note that only GeoJSON features can be used to convey Areas of Interest.",
        "type": "object",
        "properties": {
          "buffer": {
            "type": "number",
            "description": "*CONDITIONAL <br/>Distance in meters from the points identified in the “feature” data.  MUST be included and greater than 0 if the feature is a point-radius or line, MAY be included for polygon, and SHALL be ignored for bbox. Specific interpretation of buffer based on type is spelled out in definition of “type” below. ",
            "minimum": 1
          },
          "type": {
            "type" : "string",
            "enum": ["bbox", "polygon", "line", "point-radius"],
            "description": "Defines how to interpret the passed in AOI geometry.  Valid values are “bbox”, “polygon”, “line”, and “point-radius”. <ul> <li>If type = “bbox”:<br/><ul><li>AOI is interpreted as a geospatial rectangle.  The bbox MUST NOT be allowed to be manipulated into a different geometric shape (e.g. a trapezoid).</li><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” SHALL be ignored.</li></ul></li><li>If type = “line”:<br/><ul><li>geoJSON feature geometry type MUST be a line.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as distance in meters perpendicular to both sides of the line.  Buffer does not extend past the start and end points of the actual line (i.e., no “end-caps” are supported). </li></ul></li><li>If type = “point-radius”:<br/><ul><li>geoJSON feature geometry type MUST be a point.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as the radius in meters from the point. </li></ul></li><li>If type = “polygon”:<br/><ul><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” MAY be included.</li><li>“buffer” is interpreted as the distance in meters outside of the polygon boundaries that the AOI is to extend. </li></ul> </ul>"
          }

        },
        "required": ["type"]
      }
    }
  } 
};;cmapi.channel["map.feature.plot.batch.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.batch.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature data.",
                  "type": "string"
                },
                "name": {
                  "description": "Name for the given feature data.",
                  "type": "string"
                },
                "format": {
                  "description": "Data format of the given feature.",
                  "type": "string",
                  "default": "kml"
                },
                "feature": {
                  "description": "Feature data loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
                  "type": [
                    "object",
                    "string"
                  ],
                  "additionalProperties": true
                },
                "readOnly": {
                  "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map's user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
                  "type": "boolean",
                  "default": true
                },
                "properties": {
                  "additionalProperties": true,
                  "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
                  "type": "object"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.plot.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot.batch",
    "description": "Plots a batch of feature data on the map.",
    "type": "object",
    "properties": {
      "features": {
        "description": "An array of map.feature.plot payloads minus the messageId property.  See map.feature.plot for the object format and schema",
        "type": "array"
      },
      "overlayId": {
        "description": "The default overlayId to be applied to all feature objects in the features array that don’t include an overlayId. I.e., similar behavior to CSS.  See map.feature.plot for more details",
        "type": "string"
      },
      "format": {
        "description": "The default format to be applied to all feature objects in the features array that don’t include a format value. I.e., similar behavior to CSS.  See map.feature.plot for definition of format property.",
        "type": "string"
      },
      "zoom": {
        "description": "Whether the map should zoom to the newly loaded feature data.  See map.feature.plot for definition of format property.",
        "type": "boolean"
      },
      "readOnly": {
        "description": "The default value for readOnly to be applied to all feature objects in the features array that don’t include a readOnly value. I.e., similar behavior to CSS.  See map.feature.plot for definition of readOnly property.",
        "type": "boolean"
      }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.plot.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature data.",
                  "type": "string"
                },
                "name": {
                  "description": "Name for the given feature data.",
                  "type": "string"
                },
                "format": {
                  "description": "Data format of the given feature.",
                  "type": "string",
                  "default": "kml"
                },
                "feature": {
                  "description": "Feature data loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
                  "type": [
                    "object",
                    "string"
                  ],
                  "additionalProperties": true
                },
                "readOnly": {
                  "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map's user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
                  "type": "boolean",
                  "default": true
                },
                "properties": {
                  "additionalProperties": true,
                  "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
                  "type": "object"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.plot.geojson"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.geojson",
    "description": "The GeoJSON specification can be found at <a href=\"http://geojson.org/geojson-spec.html\" >http://geojson.org/geojson-spec.html</a>.  The Common Map Widget API specification extends the GeoJSON specification by adding the “style”, “name”, “id”, “description“, and “timePrimitive“ objects to the “Properties” object of the GeoJSON specification.  These extended objects ONLY apply to the GeoJSON Feature object.",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "name of the specific GeoJSON feature.  Generally used when the GeoJSON parent object is a featureCollection or feature objects."
      },
      "id": {
        "type": "string",
        "description": "a unique identifier for the feature object.  Though not required, it is RECOMMENDED. If the id of the GeoJSON Feature.properties.id is omitted, and part of a FeatureCollection, selection may not work for these features as they cannot be uniquely identified. "
      },
      "description": {
        "type": "string",
        "description": "user supplied content that appears in a pop-up balloon associated with the feature.  Can be plain text, or HTML formatted."
      },
      "timePrimitive": {
        "type": "object",
        "description": "",
        "properties": {
          "timeSpan": {
            "type": "object",
            "description": "",
            "properties": {
              "begin": {
                "type": "string",
                "format": "date-time",
                "description": "time stamp identifying the beginning of the time span (see timeStamp definition for format info). "
              },
              "end": {
                "type": "string",
                "format": "date-time",
                "description": "time stamp identifying the end of the time span (see timeStamp definition for format info)."
              }
            },
            "required": ["begin", "end"]
          },
          "timeStamp": {
            "type": "string",
            "format": "date-time",
            "description": "time stamp value expressed as yyyy-mm-ddThh:mm:ss.ssszzzzzz, where T is the separator between the date and the time, and the time zone is either Z (for UTC) or zzzzzz, which represents ±hh:mm in relation to UTC. Additionally, the value can be expressed as a date only."
          }
        }
      },
      "style": {
        "type": "object",
        "description": "",
        "properties": {
          "lineStyle": {
            "type": "object",
            "description": "",
            "properties": {
              "color": {
                "description": "Object representing CSS3 RGBA.  See Note 1 below for more info",
                "type": "object",
                "default": "No value sent results in default settings on the map.",
                "properties": {
                  "r": {
                    "description": "Integer value between 0 and 255 for red.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "g": {
                    "description": "Integer value between 0 and 255 for green.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "b": {
                    "description": "Integer value between 0 and 255 for green.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "a": {
                    "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                  }
                },
                "required": [
                  "r",
                  "g",
                  "b",
                  "a"
                ]
              }
            },
            "required": ["color"]
          },
          "polyStyle": {
            "type": "object",
            "description": "",
            "properties": {
              "color": {
                "description": "Object representing CSS3 RGBA.  See Note 1 below for more info. ",
                "type": "object",
                "default": "No value sent results in default settings on the map.",
                "properties": {
                  "r": {
                    "description": "Integer value between 0 and 255 for red.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "g": {
                    "description": "Integer value between 0 and 255 for green.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "b": {
                    "description": "Integer value between 0 and 255 for blue.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "a": {
                    "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                  }
                },
                "required": [
                  "r",
                  "g",
                  "b",
                  "a"
                ]
              }
            },
            "required": ["color"]
          },
          "iconStyle": {
            "type": "object",
            "description": "",
            "properties": {
              "url": {
                "type": "uri",
                "description": "URL to an image file that will be used for the icon for a point. If no URL is provided, result will be map’s default icon.",
              },
              "size": {
                "type": "integer",
                "description": "Size of the icon in pixels",
                "default": 32
              }
            },
            "required": ["url"]
          }
        }
      }
    }
  }
};;cmapi.channel["map.feature.plot"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot",
    "description": "Plots feature data on the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
        "type": "string",
        "default": "sender.id"
      },
      "featureId": {
        "description": "Unique identifier for the given feature data. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data.",
        "type": "string"
      },
      "name": {
        "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
        "type": "string"
      },
      "format": {
        "description": "Data format of the given feature. All map implementations MUST support kml and geojson.  If no format is specified, the format defaults to kml. A list of formats supported by a particular map implementation may be obtained by querying the map using the map.status channel (see map.status).",
        "type": "string",
        "default": "kml"
      },
      "feature": {
        "description": "Feature data to be loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
        "type": [
          "object",
          "string"
        ],
        "additionalProperties": true
      },
      "zoom": {
        "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.",
        "type": "boolean",
        "default": false
      },
      "readOnly": {
        "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map’s user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
        "type": "boolean",
        "default": true
      },
      "properties": {
        "additionalProperties": true,
        "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
        "type": "object",
        "status": "new"
      }
    },
    "required": ["featureId", "feature"]
  }
};
;cmapi.channel["map.feature.plot.symbol"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://json-schema.org/geojson/geojson.json#",
    "title": "map.feature.plot.symbol",
    "description": "This optional extension defines the format of the map.feature.plot channel payload for symbols. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the modifiers that the map implementation shall apply to the feature. This schema provides a general framework for different symbology standards such as MIL-STD-2525 and NATO APP-6",
    "type": "object",
    "required": ["feature"],
    "properties": {
      "feature": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "feature",
        "description": "The feature attribute of the map.feature.plot payload.",
        "type": "object",
        "properties": {
          "symbolCode": {
            "type": "string",
            "description": "The symbol code for the symbol.",
            "minimum": 1
          },
          "type": {
            "enum": ["point", "polygon", "lineString"],
            "description": "Defines the geojson format of the coordinates in the coordinate attribute."
          },
          "coordinates": {
              "type": "array",
              "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format."
          }

        },
        "required": ["symbolCode", "type", "coordinates"]
      },
      "properties":{
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "properties",
        "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
        "type": "object",
        "properties": {
          
        }
      }
    }
  }
};;cmapi.channel["map.feature.plot.url.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.plot.url.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature data.",
                  "type": "string"
                },
                "name": {
                  "description": "Name for the given feature data.",
                  "type": "string"
                },
                "format": {
                  "description": "Data format of the given feature.",
                  "type": "string",
                  "default": "kml"
                },
                "url": {
                  "description": "The url provided in the original message.",
                  "type": "string"
                },
                "params": {
                  "description": "The parameters passed in the original message.",
                  "type": "boolean",
                  "default": true
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.plot.url"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot.url",
    "description": "Have the map plot feature data from a Uniform Resource Locator (URL).",
    "type": "object",
    "properties": {
      "featureId": {
        "description": "Unique identifier for the given feature data. Note that feature ids must be unique within a given overlay. Reusing a feature id will be considered a reload with the original feature data being removed and replaced by the new feature data.",
        "type": "string"
      },
      "url": {
        "description": "URL from which to retrieve the feature data to load onto the map",
        "type": "string"
      },
      "overlayId": {
        "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, new feature is merged into existing overlay; otherwise, a new overlay will be created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If overlay exists, it will retain its status (whether visible or hidden). If overlay is created, it will be made visible.",
        "type": "string"
      },
      "name": {
        "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
        "type": "string"
      },
      "format": {
        "description": "Data format of the given feature. If no format is specified, the format defaults to kml. A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status). Note that for this version of the Common Map Widget API, all map implementations MUST support KML, GeoJSON, and WMS (GetMap only).",
        "type": "string",
        "default": "kml"
      },
      "params": {
        "description": "A JSON object containing a list of parameters to be passed to the server along with the URL when loading WMS data. Params object is ignored unless format is set to wms.  Note that request, exceptions, SRS/CRS, width, height, and bbox params should not be passed in as they are determined by the map as needed and will be ignored if passed. Params as passed will be concatenated to the URL and are expected to follow the WMS specification.   All parameters passed in must not be URL encoded (the map widget implementation will URL encode all passed in params).",
        "type": "object"
      },
      "zoom": {
        "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.  Ignored when loading WMS data.",
        "type": "boolean",
        "default": false
      }
    },
    "required": ["featureId", "url"]
  }
};
;cmapi.channel["map.feature.selected.batch.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.selected.batch.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature ID's.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.selected.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.selected.batch",
    "description": "Select, or report that a collection of feature objects were selected.",
    "type": "object",
    "properties": {
      "features": {
        "description": "An array of map.feature.selected payload objects.  See map.feature.selected for the object format and schema",
        "type": "Array"
      },
      "overlayId": {
        "description": "The default overlayId to be applied to all map.feature.selected objects in the payloads array that don't include an overlayId. I.e., similar behavior to CSS.  See map.feature.selected for more details",
        "type": "string"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message batch.  If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of the message batch.",
        "type": "string",
        "extension": "User Manipulation - Message Complete"
      }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.selected.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.selected.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature identifier objects",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.selected"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.selected",
    "description": "Select, or report that object was selected.",
    "properties": {
      "selectedId": {
        "description": "The ID of the object to be selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
        "type": "string"
      },
      "selectedName": {
        "description": "The name of the selected object.",
        "type": "string"
      },
      "featureId": {
        "description": "The ID of the feature that contains the selected object.",
        "type": "string"
      },
      "overlayId": {
        "description": "The ID of the overlay which contains the selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string"
      }
    },
    "required": ["featureId"]
  },
  "notes": [
    "Although both selectedId and selectedName are optional, one MUST be passed in if a sub-feature is to be identified. Generally, selectedId is preferred and selectedName is used when no selectedId is available.",
    "The expected behavior resulting from this message is that this feature will be added to the list of currently selected features (see map.status.selected below).  If the identified feature is currently selected when the message is received, then the map widget SHOULD ignore this message (i.e., this message is idempotent)."
  ]
};
;cmapi.channel["map.feature.show.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.show.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature identifier objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string",
                  "default": "N/A"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string",
                  "default": "N/A"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.show"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.show",
    "description": "Have the map show previously hidden feature data.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be shown is found. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to be shown.",
        "type": "string"
      },
      "zoom": {
        "description": "true if map should zoom to the shown feature, false if not. Default is false.",
        "type": "boolean",
        "default": false
      }
    },
    "required": ["featureId"]
  }
};
;cmapi.channel["map.feature.unplot.batch.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.unplot.batch.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature identifier objects",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string",
                  "default": "N/A"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string",
                  "default": "N/A"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.unplot.batch"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.unplot.batch",
    "description": "Remove collection of features from the map.",
    "type": "object",
    "properties": {
      "features": {
        "description": "An array of map.feature.unplot payloads minus the messageId.  See map.feature.unplot for the object format and schema",
        "type": "Array"
      },
      "overlayId": {
        "description": "when included at the array level, this value will be applied to all map.feature.unplot objects in the features array that don't include an overlayID. I.e., similar behavior to CSS.  See map.feature.unplot for definition of this property",
        "type": "string",
        "default": ""
      }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.unplot.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.unplot.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature identifier objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature.",
                  "type": "string"
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.unplot"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.unplot",
    "description": "Removes feature data from the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be removed is found. If no overlayId is included, default overlay with an ID equal to sending widget's ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to be removed.",
        "type": "string",
        "default": "N/A"
      }
    },
    "required": ["featureId"]
  }
};
;cmapi.channel["map.feature.update.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.feature.update.",
    "type": "object",
    "properties": {
        "features":{
            "description": "An array of feature objects.",
            "type": "array",
            "properties":{
                "overlayId": {
                  "description": "The ID of the overlay this feature was loaded into.",
                  "type": "string",
                  "default": "N/A"
                },
                "featureId": {
                  "description": "Unique identifier for the given feature data.",
                  "type": "string",
                  "default": "N/A"
                },
                "name": {
                  "description": "Name for the given feature data.",
                  "type": "string",
                  "default": "N/A"
                },
                "format": {
                  "description": "Data format of the given feature.",
                  "type": "string",
                  "default": "kml"
                },
                "feature": {
                  "description": "Feature data loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
                  "type": [
                    "object",
                    "string"
                  ],
                  "additionalProperties": true,
                  "default": "N/A"
                },
                "readOnly": {
                  "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map's user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
                  "type": "boolean",
                  "default": true
                },
                "properties": {
                  "additionalProperties": true,
                  "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
                  "type": "object"
                },
                "url": {
                  "description": "The url provided in the original message.",
                  "type": "string",
                  "default": "N/A"
                },
                "params": {
                  "description": "The parameters passed in the original message.",
                  "type": "boolean",
                  "default": true
                }
            },
            "required": ["featureId", "overlayId"]
        }
    },
    "required": ["features"]
  }
};
;cmapi.channel["map.feature.update"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.update",
    "description": "Update an existing feature on the map.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the feature to be updated is currently found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "featureId": {
        "description": "The ID of the feature to be updated",
        "type": "string",
        "default": "N/A"
      },
      "name": {
        "description": "If the name provided differs from the feature's current name, the display value will be changed to show the new value.  If no value is provided, the feature name will remain unchanged.",
        "type": "string",
        "default": "N/A"
      },
      "newOverlayId": {
        "description": "This represents the ID of an overlay to move the feature to.  If this attribute is provided, the feature MUST be removed from its current overlay and added to the overlay with this ID.  If an overlay with an ID of newOverlayId does not exist, a new overlay will be created with an ID of newOverlayId, and the feature to be updated will be moved to the overlay identified by newOverlayId.",
        "type": "string",
        "default": "N/A"
      }
    },
    "required": ["featureId"]
  },
  "notes": ["For updates to a feature's geometry or other properties no covered in the update channel, a map.feature.plot with the same overlayId and feature Id should be used to replace an existing feature."]
};
;cmapi.channel["map.get.complete"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.message.complete",
        "description": "Allows the Map Widget to report progress during the processing of a message.  If a widget receives a map.message.progress message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that not all channels that support a messageId will report progress between when the message is sent and the return of the map.message.complete.  See each channel’s definition for map.message.progress details object so see if the channel supports progress messages.  Multiple map.message.progress events may be sent for a single message. E.g., every time a new point is added to a line during the processing of a map.feature.draw message, a map.message.progress message will be sent with the latest geometry of the line being drawn as shown in Example 1 below.",
        "type": "object",
        "properties": {
                  "messageId": {
                    "description": "A globally unique ID that identifies the particular message or message batch that progress is being reported on.",
                    "type": "string"
                },
                "details" : {
                    "type" : "object",
                    "description" : "An object whose details are specific to the original requesting channel/message.  Go to the specific channel definition for details of what this object should look like"
                }
        },
        "required" : ["messageId", "details"]
    },
    notes: ["The messageId’s match in the below examples.  This allows the widget receiving the map.message.progress message to identify the original request message the progress applies to."]
};
;cmapi.channel["map.get"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.get",
    "description": "Request information about what overlay and feature data is on the map",
    "properties": {
      "recursive": {
        "description": "Determines whether the response will contain children or just one level.  If not included, it will treat this parameter as false.",
        "type": "boolean",
        "default" : false
      },
      "types" : {
        "type" : ["array","string"],
        "description" : "An array or either overlays or features"
      },
      "filter" : {
        "type" : "array",
            "properties":{
                "property":{
                    "type": "string",
                    "description": "This field must contain the name of the property field which value must match the value in the term property."
                },
                "term":{
                    "type": ["string", "number", "boolean"],
                    "description": "This field must contain the value to match. Type checking is performed. ('10' !== 10)"
                }
            },
        "additionalItems": true,
        "description" : "An array of terms to search for on the overlays and features."
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["menuId"]
  }
};
;cmapi.channel["map.menu.clicked"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.clicked",
    "description": "Called by the map after a context menu item is clicked to notify the widget which registered the context menu to take action.",
    "properties": {
      "menuId": {
        "description": "The unique ID of the menu that the user selected.  MUST be the menuId that was assigned when the menu was registered.",
        "type": "string"
      },
      "menuItemId": {
        "type": "string",
        "description": "The unique ID of the specific menu item that the user selected.  MUST be the menuItemId that was assigned when the menu was registered."
      },
      "overlayId": {
        "description": "The ID of the overlay, or the overlay containing the feature, that was right-clicked to bring up the context menu.  SHOULD be populated if the context menu was an 'objectinstance' scoped context menu",
        "type": "string",
        "default": "N/A"
      },
      "featureId": {
        "description": "The ID of the feature that was right-clicked to bring up the context menu.  SHOULD be populated if the context menu was an 'objectinstance' scoped context menu",
        "type": "string"
      },
      "lat": {
        "description": "The latitude coordinate in degrees decimal identifying where the right-click took place on the map",
        "type": "number",
        "minimum": -90,
        "maximum": 90
      },
      "lon": {
        "description": "The longitude coordinate in degrees decimal of where the right-click took place on the map",
        "type": "number",
        "minimum": -180,
        "maximum": 180
      },
      "x": {
        "description": "The pixel coordinate on the x axis where the right-click took place on the map, relative to the top left corner of the map",
        "type": "number",
        "minimum": 0
      },
      "y": {
        "description": "The pixel coordinate on the y axis where the right-click took place on the map, relative to the top left corner of the map",
        "type": "number",
        "minimum": 0
      },
      "elevation": {
        "description": "The elevation in meters of the location that was right-clicked, if terrain elevation data is available",
        "type": "number"
      }

    },
    "required": ["menuId", "menuItemId"]
  },
  "notes": ["When the user selects a context menu item, the map MUST send a map.menu.clicked event with the appropriately registered menuId and menuItemId so that the widget that created the context menu can take action on the event"
  ]

};
;cmapi.channel["map.menu.create"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.create",
    "description": "Creates a context menu and registers it with the map so that when the user right clicks on the map (or feature or overlay) the registered menu items will appear.  This allows for multiple widgets to register contextMenu items.  The menuId is used to establish what widget(s) will handle the action of a given menu item click.",
    "properties": {
      "name": {
        "description": "The name of the menu. If not included, the menuId is used as the name. Note that menu names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "value passed in menuId param"
      },
      "menuId": {
        "description": "A globally unique ID that is used both to identify the menu, and as a handle for the widget which originally registered the menu so it can identify which map.menu.clicked events it should respond to.",
        "type": "string"
      },
      "menuType": {
        "description": "A value indicating the scope of the menu being registered.  The options are:<ol><li>mapglobal -  Menu is applicable to the entire map.  The menu items will show in a aggregate list of all mapglogal menus when the map is right-clicked</li><li>overlayglobal - Menu will appear when any overlay is right-clicked</li><li>featureglobal - Menu will appear when any features is right-clicked</li><li>objectinstance - Menu will only appear when a particular overlay or feature is right-clicked, and requires an additional registration step for the menu to be 'activated' (e.g., map.feature.update or map.overlay.update)</li><li>submenu - Menu is to be used as a sub menu to another menu.</li></ol>",
        "enum": ['mapglobal',
          'overlayglobal',
          'featureglobal',
          'objectinstance',
          'submenu'
        ]
      },
      "menuItems": {
        "description": "An array of menu items.  These items will become the elements of the menu (i.e., will show up in an ordered list when the appropriate map element is right clicked)",
        "type": "array",
            "properties": {
                "menuItemId": {
                  "type": "string",
                  "description": "Unique ID used to correlate a map.menu.clicked message with this particular menu item.  This ID must only be unique within this menu"
                },
                "label": {
                  "type": "string",
                  "description": "The visible label assigned to this item in the context menu"
                },
                "iconUrl": {
                  "type": "string",
                  "description": "A URL to a specific icon that MAY be displayed next to the item in the context menu"
                },
            },
        "required": ["menuItemId", "label"]
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      },

    },
    "required": ["menuId", "menuItems"]
  },
  "notes": ["Widget developer creates a context menu object",
    "Context menus can be created and registered either at run-time via the map.menu.create channel, OR via manual configuration of the map",
    "If the scope of the menu is 'objectinstance' then the developer SHOULD assign the id of the created menu to specific feature instances via the map.feature.plot, map.feature.plot.url, map.feature.plot.batch or map.feature.update channels and/or to the specific overlay instances via the map.overlay.create or map.overlay.update channels",
    "When the user right clicks on the map, an overlay or a feature (or the overlay/feature listing in a tree type component), the appropriately registered context menu MUST appear and it's associated menuItems MUST all be selectable by the user.",
    "When the user selects a menu item, the map MUST send a map.menu.clicked event with the appropriately registered menuId and menuItemId so that the widget that created the context menu can take action on the event"
  ]

};
;cmapi.channel["map.menu.remove"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.menu.remove",
    "description": "Removes a context menu and any child menus associated with this context menu.  ",
    "properties": {
      "menuId": {
        "description": "The unique ID of the menu that the user selected.  MUST be the menuId that was assigned when the menu was registered.",
        "type": "string"
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["menuId"]
  }
};
;cmapi.channel["map.message.cancel"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.cancel",
    "description": "Allows a widget to cancel a batch or long-running message exchange that has not yet completed.",
    "type": "object",
    "properties": {
      "messageId": {
        "description": "A globally unique ID that identifies the particular message or message batch that was cancelled.",
        "type": "string"
      }
    },
    "required": ["messageId"]
  },
  "notes": ["Cancelling a message only works with those channels that indicate they are cancel-able, such as map.feature.draw and map.feature.edit.  ",
    "When the map widget receives a message over the map.message.cancel channel it SHALL attempt to cancel the indicated previous message (if possible).",
    "IF the map widget was able to successfully cancel the indicated previous message, it SHALL ensure that the applicable map.message.complete message is returned with a status = “cancelled”.",
    "If it was NOT able to cancel the indicated previous message, then it will have no effect on the applicable map.message.complete message (i.e., the applicable map.message.complete message will be sent as if no map.message.cancel message was ever sent).  In other words, the map.message.cancel message is a one-way message event that requires no actual return, but only affects pending or outstanding messages and does not require any additional response messages."
  ]
};
;cmapi.channel["map.message.complete"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.complete",
    "description": "Allows the Map Widget to report results after processing a message.  If a widget receives a map.message.complete message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that when a messageId is sent AND if any of the message payloads failed to be enacted, the response in the map.message.complete message SHOULD contain a string indicating why the particular payload failed.",
    "type": "object",
    "properties": {
      "messageId": {
        "description": "A globally unique ID that identifies the particular message or message batch that was completed.",
        "type": "string"
      },
      "originatingChannel": {
        "type": "string",
        "description": "This property SHALL contain the channel name of the request being completed. It is intended to provide guidance as to the content of the details property."
      },
      "status": {
        "description": "A pre-defined string indicating whether the original batch request succeeded, failed, was a mix of successes and failures, or was cancelled.  Allowable values are:<ul><li>failure - Failure means the whole batch failed.</li><li>mixed - Mixed means that it is a mixture of successes and failures.</li><li>success - Success means that the whole batch request was successful.</li><li>cancelled = Cancelled means the map abandoned processing of the message and remains unchanged.</li></ul>",
        "type": "enum",
        "enum": ["success", "failure", "mixed", "cancelled"]
      },
      "details": {
        "type": "object",
        "description": "An object whose details are specific to the original requesting channel/message.  Go to the specific channel definition for details of what this object should look like"
      },
      "failures": {
        "description": "An array of objects that define what, if any, original request message payloads have failed to be executed.  If all message payloads associated with the identified transaction were executed successfully, this MUST return an empty array",
        "type": "array",
        "properties": {
          "failureObject": {
            "description": "An object that defines a specific failure",
            "type": "object",
            "properties": {
              "payload": {
                "type": "object",
                "description": "The payload from the original request message that failed to properly execute."
              },
              "message": {
                "type": "string",
                "description": "A message indicating why the requested transaction failed or partially failed."
              }
            }
          }
        }
      }
    },
    "required": ["failures", "messageId", "status"]
  }
};
;cmapi.channel["map.message.progress"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.message.progress",
    "description": "Allows the Map Widget to report progress during the processing of a message.  If a widget receives a map.message.progress message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that not all channels that support a messageId will report progress between when the message is sent and the return of the map.message.complete.  See each channel’s definition for map.message.progress details object so see if the channel supports progress messages.  Multiple map.message.progress events may be sent for a single message. E.g., every time a new point is added to a line during the processing of a map.feature.draw message, a map.message.progress message will be sent with the latest geometry of the line being drawn as shown in Example 1 below.",
    "type": "object",
    "properties": {
      "messageId": {
        "description": "A globally unique ID that identifies the particular message or message batch that progress is being reported on.",
        "type": "string"
      },
      "originatingChannel": {
        "type": "string",
        "description": "This property SHALL contain the channel name of the original request. It is intended to provide guidance as to the content of the details property."
      },
      "details": {
        "type": "object",
        "description": "An object whose details are specific to the original requesting channel/message.  Go to the specific channel definition for details of what this object should look like"
      }
    },
    "required": ["messageId", "details"]
  },
  "notes": ["The messageId's match in the below examples.  This allows the widget receiving the map.message.progress message to identify the original request message the progress applies to."]
};
;cmapi.channel["map.overlay.cluster.activate"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.activate",
    "description": "Activate the clustering rule for the specified overlay.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the clustering rule is to be activated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
        "type": "string",
		"default": "sending widget's ID"
      }
    },
    "required": []
  }
};;cmapi.channel["map.overlay.cluster.deactivate"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.deactivate",
    "description": "Deactivate the clustering rule for a specified overlay.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the clustering rule is to be deactivated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string",
		"default": "sending widget's ID"
      }
    },
    "required": []
  }
};;cmapi.overview["map.overlay.cluster.overview"] = {
	"title" : "Feature Clustering",
	"sections": [{
		"title": "Background",
		"paragraphs": [
			"The goal of the Common Map Widget API (CMAPI) is to enable a uniform interface for map widget implementations to make core map capabilities available to everyone. To that end, the initial specification supports the OWF Eventing and Drag & Drop APIs as two means of communicating geospatial data to a map.",
			"However, some widgets plot thousands of features onto the map, which can degrade the user experience and lead poor map performance.  In order to remedy these issues, maps can cluster results into a single feature on the map as shown in Figure 1 below.",
			"<figure><img src='img/cmapi.clustering.figure1.jpg'></img> <figcaption>Figure 1 - A screenshot of a map using clustering.</figcaption></figure>",
			"The CMAPI Technical Committee has decided to support clustering of results onto the map via an optional extension to the core CMAPI specification.  This document defines the optional clustering extension to the CMAPI core specification. Currently, this extension supports clustering multiple features into a single point feature styled using CSS color values or an icon URL. Support for additional clustering features will be added in future versions of the extension to CMAPI.",
			"Note that clustering rules are applied at the overlay level.  If it is desired to separate items into different clustering rules, then the elements should be separated into different overlays and the appropriate clustering rule set for each specific overlay."
		]
	}]
};;cmapi.channel["map.overlay.cluster.remove"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.remove",
    "description": "Remove clustering rule from the specified overlay.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay where the clustering rule is to be removed from. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
        "type": "string",
		"default": "sending widget's ID"
      }
    },
    "required": []
  }
};;cmapi.channel["map.overlay.cluster.set"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.cluster.set",
    "description": "Sets the clustering rule for a specified overlay.",
    "properties": {
      "threshold": {
        "description": "The minimum number of features to form a cluster.  Default value is 2.",
        "type": "integer",
        "minimum": 2,
        "default": 2
      },
      "distance": {
        "description": "Pixel distance between features that should be considered a single cluster. Default is 50.",
        "type": "integer",
        "minimum": 1,
        "default": 50
      },
      "clusterStyle": {
        "description": "Styling information to be applied to cluster objects. All string based values (i.e., label, title, description, iconStyle.url) MUST support replacement as detailed in Appendix A.",
        "type": "object",
        "properties": {
          "label": {
            "description": "The label to be placed on the clustered item. This SHOULD be rendered adjacent to an icon when using iconStyle or inside the point when using pointStyle. If no value is specified, then the map MUST NOT display a label.",
            "type": "string"
          },
          "title": {
            "description": "The title used on the info bubble when the clustered item is clicked. If no value is specified, then the info bubble MUST NOT contain a title.  If a value is specified, then the title MUST be located at the top of the info bubble.",
            "type": "string"
          },
          "summary": {
            "description": "The summary is specific to the cluster as a whole, and is used on the info bubble when the clustered item is clicked. If no value is specified, then the info bubble MUST NOT contain a summary. If a value is specified, the summary MUST be located below the title and above the description in the info bubble.",
            "type": "string"
          },
          "description": {
            "description": "The description used on the info bubble when the clustered item is clicked. If no value is specified, then the pop-up bubble SHOULD contain a roll-up description of all clustered items based on default roll-up behavior of the map implementation. Whether specified or not, the description MUST be located below the summary in the info bubble. \n\r Examples of default roll-up behavior: the default roll-up description could be a list of items in the cluster by element name (e.g., element name in KML). When a user clicks the title of one of the items, the info bubble could display additional details of the item.  In addition, the bubble could simply contain a table or listing of all items in the cluster.",
            "type": "string"
          },
          "pointStyle": {
            "type": "object",
            "properties": {
              "color": {
                "description": "Object representing CSS3 RGBA.  No value sent results in default settings on the map.  See http://www.w3.org/wiki/CSS3/Color/RGBA for more info on RGBA. ",
                "type": "object",
                "properties": {
                  "r": {
                    "description": "Integer value between 0 and 255 for red.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "g": {
                    "description": "Integer value between 0 and 255 for green.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "b": {
                    "description": "Integer value between 0 and 255 for blue.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "a": {
                    "description": "Numeric value between 0.0 and 1.0 for alpha.",
                    "type": "number",
                    "minimum": 0,
                    "maximum": 1
                  }
                },
                "required": ["r", "g", "b", "a"]
              },
              "radius": {
                "description": "Integer value representing the radius of the clustered point in pixels. Default value is 6.",
                "type": ["integer", "string"],
                "default": 6
              }

            },
            "required": []
          },
          "iconStyle": {
            "decription": "",
            "type": "object",
            "properties": {
              "url": {
                "description": "URL to an image file that will be used for the icon for a point.  If no URL is provided, result will be map’s default icon.",
                "type": "string"
              }
            },
            "required": ["url"]
          }
        }
      },
      "overlayId": {
        "description": "The ID of the overlay where the clustering rule is to be applied. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      }
    },
    "required": []
  }
};
;cmapi.channel["map.overlay.create.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.overlay.create map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.overlay.create.",
    "type": "object",
    "properties": {
      "name": {
        "description": "The name of the overlay.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The unique ID of the new overlay.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "parentId": {
        "description": "The ID of the parent overlay in which the overlay was created.",
        "type": "string",
        "default": "N/A"
      },
      "properties": {
        "description": "A free form object that can contain any additional JSON objects or elements to send with this message.  This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
        "type": "object",
      },
      "menuId": {
        "description": "The id of a context menu.  If populated, the context menu MUST have already been pre-registered via the map.menu.create channel.  If populated, the context menu associated with this id will appear when the feature is 'right-clicked', allowing the user to invoke actions on the feature which will be handled by the widget which originally registered the context menu.  If no menuId is assigned, the feature will not have a context menu associated when right-clicked.",
        "type": "string",
        "extension": "User Manipulation - Context Menus"
      }
    },
    "required": ["overlayId"]
  }
};
;cmapi.channel["map.overlay.create"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.create",
    "description": "Create an overlay into which data can be aggregated.",
    "properties": {
      "name": {
        "description": "The name of the overlay. If not included, the ID is used as the name. Note that overlay names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The unique ID of the new overlay. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will have no effect. Note that overlay IDs must be unique even across multiple parent overlays.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "parentId": {
        "description": "The ID of the parent overlay in which to create this overlay. If an overlay with an ID of parentId does not exist, a new overlay will be created with an ID of parentId, and the parentage of the overlay identified by overlayId will be set to the newly created parent overlay.",
        "type": "string",
        "default": "N/A"
      },
      "properties": {
        "description": "A free form object that can contain any additional JSON objects or elements to send with this message.  This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
        "type": "object",
        "status": "new"
      }
    },
    "required": []
  }
};
;cmapi.channel["map.overlay.features.get"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.features.get",
    "description": "Request the full feature data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
    "properties": {
      "features" : {
        "description" : "An array of objects with a featureId and an overlayId representing the feature to be retrived",
        "type" : "array",
            "properties":{
                "overlayId":{
                    "type": "string",
                    "description": "The overlayId that currently contains the feature."
                },
                "featureId":{
                    "type": "string",
                    "description": "The id of the feature you wish to retrieve."
                }
            },
        "additionalItems": true,
        "required": ["features, messagId"]
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["features, messagId"]
  }
};
;cmapi.channel["map.overlay.get"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.get",
    "description": "Request the full set of data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
    "properties": {
      "overlays" : {
        "description" : "An array of objects with a featureId and an overlayID representing the feature to be retrived",
        "type" : "array",
            "properties":{
                "overlayId":{
                    "type": "string",
                    "description": "The overlayId that currently contains the feature."
                }
            },
        "additionalItems": true,
        "required": ["overlays, messagId"]
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["features, messagId"]
  }
};
;cmapi.channel["map.overlay.hide.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.overlay.hide.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The unique ID of the hidden overlay.",
        "type": "string"
      }
    },
    "required": ["overlayId"]
  }
};
;cmapi.channel["map.overlay.hide"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.hide",
    "description": "Hide existing overlay on the map.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay to be hidden. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
        "type": "string",
        "default": "sending widget's ID"
      }
    },
    "required": []
  }
};
;cmapi.channel["map.overlay.remove.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.overlay.remove.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The unique ID of the overlay removed.",
        "type": "string"
      }
    },
    "required": ["overlayId"]
  }
};
;cmapi.channel["map.overlay.remove"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.remove",
    "description": "Remove entire overlay from the map.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay to be removed. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed. ",
        "type": "string",
        "default": "sending widget's ID"
      }
    },
    "required": []
  }
};
;cmapi.channel["map.overlay.show.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.overlay.show.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The unique ID of the shown overlay.",
        "type": "string"
      }
    },
    "required": ["overlayId"]
  }
};
;cmapi.channel["map.overlay.show"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.show",
    "description": "Show existing overlay on the map.",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay to be shown. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string",
        "default": "sending widget's ID"
      }
    },
    "required": []
  }
};
;cmapi.channel["map.overlay.update.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.overlay.update.",
    "type": "object",
    "properties": {
      "name": {
        "description": "The name of the overlay.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The unique ID of the updated overlay.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "parentId": {
        "description": "The ID of the parent overlay.",
        "type": "string",
        "default": "N/A"
      },
      "properties": {
        "description": "A free form object that can contain any additional JSON objects or elements to send with this message.  This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message.",
        "type": "object",
      },
      "menuId": {
        "description": "The id of a context menu.  If populated, the context menu MUST have already been pre-registered via the map.menu.create channel.  If populated, the context menu associated with this id will appear when the feature is 'right-clicked', allowing the user to invoke actions on the feature which will be handled by the widget which originally registered the context menu.  If no menuId is assigned, the feature will not have a context menu associated when right-clicked.",
        "type": "string",
        "extension": "User Manipulation - Context Menus"
      }
    },
    "required": ["overlayId"]
  }
};
;cmapi.channel["map.overlay.update"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.update",
    "description": "Update the name an existing overlay or move the overlay to another parent overlay.",
    "properties": {
      "name": {
        "description": "The new name of the overlay. Note that overlay names do not have to be unique and are intended for display purposes only.",
        "type": "string"
      },
      "overlayId": {
        "description": "The unique ID of the overlay being updated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will update that overlay. If an overlay with the given ID does not exist, an error is generated.  Note that overlay IDs MUST be unique even across multiple parent overlays.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "parentId": {
        "description": "The ID of the parent overlay that is associated with this overlay.  If no ID is provided, the overlay will keep its existing parentage.  If a parentId is provided, the parentage of the overlay will be changed to the new parentId.  If an overlay with an ID of parentId does not exist, a new overlay will be created and the parentage of the overlay identified by overlayId will be changed to the newly created parent overlay. If the this field is set to an empty string, the overlay SHALL become a top level overlay.",
        "type": "string"
      }
    },
    "required": []
  }
};
;cmapi.channel["map.status.about"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.about",
    "description": "Send out static information about the map implementation",
    "type": "object",
    "properties": {
        "version": {
          "type": "string",
          "default": " ",
          "description": "A comma delimited list of the version numbers of the Common Map Widget API that this map widget supports."
        },
        "type": {
          "enum": ["2-D", "3-D", "other"],
          "default": " ",
          "description": "The type of map in the map widget.  Allowable values are 2-D, 3-D, or other."
        },
        "widgetName": {
          "type": "string",
          "default": " ",
          "description": "The registered name of the map widget which is consistent across all version of OWF and cannot change during a user's session. "
        },
        "instanceName": {
          "type": "string",
          "default": "N/A",
          "description": "The name of the widget on the users dashboard.  This name can be changed by the end user and by the widget developer in code so this name may change during a user's session.  "
        },
        "universalName": {
          "type": "string",
          "default": "N/A",
          "description": "The universal name of the map widget set in the widget registration.  This is not available in all versions of OWF."
        },
        "extensions": {
          "description": "An array of optional extensions that the widget supports.  Allowable values are intents, clustering, and userManipulation.  If no extensions are supported, then an empty array SHALL be sent.",
          "type": ["array", "enum"],
          "default": "N/A",
          "uniqueItems": true,
          "items": {
            "anyOf": ["intents", "clustering", "userManipulation", "selected", null]
          }
        }
    },
    "required": ["version", "type", "widgetName", "extensions"]
  }
};;cmapi.channel["map.status.format"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.format",
    "description": "Send out the list of data formats that the map widget supports; in other words, this map implementation supports the following feature data formats.",
    "type": "object",
    "properties": {
      "formats": {
        "description": "An array of the formats that this map supports. Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson' and 'wms'.  Additional map formats MAY be supported.",
        "type": "array",
        "uniqueItems": true,
        "default": ["kml"],
        "items": {
          "anyOf": ["kml", "geojson", "wms"]
        }
      }
    },
    "required": ["formats"]
  }
};
;cmapi.channel["map.status.initialization"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.initialization",
    "description": "To receive notification of map events including the readiness, initialization and teardown of the map.",
    "type": "object",
    "properties": {
      "status": {
        "type": "string",
        "description": "Indicates the current state of the map.  This can be one of the following options: init, ready, teardown. <ol><li>init - means the map has been launched but is not ready to begin accepting commands.</li><li>ready -  means the map is ready to begin accepting commands.  A map will be ready once it has finished loading.</li><li>teardown - indicates the user has closed the map and it is no longer available to use.</li><li>mapswapinprogress - A map swap process has started. A 'ready' status is issued when the process completes.</li></ol>",
        "enum": ["init", "ready", "teardown", "mapswapinprogress"]
      }
    },
    "required": ["status"]
  } 
};
;cmapi.channel["map.status.request"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.request",
    "description": "Request current status from the map. Map will send out requested map.status.xyz messages in response.",
    "type": "object",
    "properties": {
      "types": {
        "description": "An array of status types being requested. Map widgets MUST support status types of 'about', 'format', 'selected', 'view', <span class=\"updatedContent\">and 'initialization' and MUST respond</span> with the applicable status message (e.g., map.status.about, map.status.format, map.status.selected, map.status.view, <span class=\"updatedContent\">and/or map.status.initialization<\span>). If the types attribute is not included, all status messages MUST be generated.",
        "type": "array",
        "items": {
          "enum": ["view", "format", "selected", "about", "initialization"]
        }
      }
    },
    "required": []
  }
};
;cmapi.channel["map.status.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.selected",
    "description": "Send out the list of currently selected features.",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string",
        "description": "The ID of the overlay which contains the selected objects."
      },
      "selectedFeatures": {
        "description": "An array of features from the identified overlay that are currently selected.",
        "type": "array",
        "items": {
          "description": "Individual selected feature object",
          "type": "object",
          "properties": {
            "featureId": {
              "type": "string",
              "description": "The ID of the feature that contains the selected object."
            },
            "selectedId": {
              "type": "string",
              "description": "The ID of the actual selected object (may be a sub-feature contained within the aggregate feature data with the given featureId)."
            },
            "selectedName": {
              "type": "string",
              "description": "The name of the selected object."
            }
          },
          "required": ["featureId"]
        }
      }
    },
    "required": ["overlayId", "selectedFeatures"]
  }
};
;cmapi.channel["map.status.view"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.status.view",
    "description": "Send out the current status of the map view",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "Bounding box of area visible on map.",
        "type": "object",
        "default": " ",
        "properties": {
          "southWest": {
            "description": "Bottom right of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "description": "Top left of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "center": {
        "type": "object",
        "default": " ",
        "description": "The current center of the map",
        "properties": {
          "lat": {
            "type": "number",
            "description": "The latitude of the location that was clicked",
            "minimum": -90,
            "maximum": 90
          },
          "lon": {
            "type": "number",
            "description": "The longitude of the location that was clicked",
            "minimum": -180,
            "maximum": 180
          }
        },
        "required": ["lat", "lon"]
      },
      "range": {
        "description": "The current distance, in meters, map is zoomed out",
        "type": "number"
      },
      "requester": {
        "description": "ID of client that requested this status message be sent (if any).  If no requester, message is being sent due to a map view change",
        "type": "string",
        "status": "updated"
      }
    },
    "required": ["bounds", "center", "range"]
  }
};
;cmapi.channel["map.view.area.selected"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.area.selected",
    "description": "Send a message indicating the user has drag selected a rectangular area (bbox) on the map.  This can be used to notify widgets that the user is interested in this particular area of the current view.",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "Bounding box of area selected on map",
        "type": "object",
        "default": " ",
        "properties": {
          "southWest": {
            "description": "Bottom right of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "description": "Top left of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "button": {
        "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
        "type": ["string", "enum"],
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'. Default value is 'none'.",
        "type": ["array", "enum"],
        "uniqueItems": true,
        "default": ["none"],
        "items": {
          "anyOf": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["bounds", "keys", "button"]
  },
  "notes": ["For example: the user presses mouse down, drags a rectangular area on the map, and then releases the mouse button - the map then emits a map.view.area.selected message",
    "It is up to the map implementation to define the user interface controls and workflow to allow the user to identify the area to select",
  ]
};
;cmapi.channel["map.view.center.bounds"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.bounds",
    "description": "Center the map on a particular bounding box. The map may also be zoomed to show the entire bounds (if possible) or to show a given range.",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "Bounding box of area to be centered in map.",
        "type": "object",
        "default": " ",
        "properties": {
          "southWest": {
            "description": "Bottom right of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "description": "Top left of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": -90,
                "maximum": 90
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": -180,
                "maximum": 180
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "zoom": {
        "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
        "type": ["string", "number"],
        "default": " "
      }
    },
    "required": ["bounds"]
  }
};
;cmapi.channel["map.view.center.feature"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.feature",
    "description": "Center the map on a particular feature. The map may also be zoomed to show the entire feature (if possible) or to show a given range.",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay overlay where the feature to be centered on is found. If no overlayId is included, default overlay with ID equal to sending widget ID is assumed.",
        "type": "string"
      },
      "featureId": {
        "description": "The ID of the feature to center on",
        "type": "string"
      },
      "zoom": {
        "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to best fit the feature in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
        "type": ["string", "number"]
      }
    },
    "required": ["featureId"]
  }
};
;cmapi.channel["map.view.center.location"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.location",
    "description": "Center the map on a particular location. The map may also be zoomed as close as possible to the location or to a given range",
    "type": "object",
    "properties": {
        "location": {
          "description": "Location to be centered in map.",
          "type": "object",
          "properties": {
            "lat": {
              "type": "number",
              "description": "The latitude value of the point",
              "minimum": -90,
              "maximum": 90
            },
            "lon": {
              "type": "number",
              "description": "The longitude value of the point",
              "minimum": -180,
              "maximum": 180
            }
          },
          "required": ["lat", "lon"]
        },
        "zoom": {
          "description": "If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
          "type": ["string", "number"]
        }
    },
    "required": ["location"]
  }
};;cmapi.channel["map.view.center.overlay"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.overlay",
    "description": "Center the map on a particular overlay. The map may also be zoomed to show the entire overlay (if possible) or to show a given range",
    "type": "object",
    "properties": {
      "overlayId": {
        "description": "The ID of the overlay to center on. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
        "type": "string"
      },
      "zoom": {
        "description": "Attribute that defines the zoom behaviour of the map. If auto, zoom will adjust to best fit the overlay in the user's viewable area.  If a number, map will zoom to specified range in meters.  If no zoom attribute is included, no zoom is performed.",
        "type": "string"
      }
    },
    "required": []
  }
};
;cmapi.channel["map.view.clicked"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.clicked",
    "description": "'Click', or report that map was clicked",
    "type": "object",
    "properties": {
      "lat": {
        "type": "number",
        "description": "The latitude of the location that was clicked",
        "minimum": -90,
        "maximum": 90
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "minimum": -180,
        "maximum": 180
      },
      "button": {
        "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
        "type": "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
        "type": "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
        "type": "array",
        "uniqueItems": true,
        "default": ["none"],
        "items": {
            "enum": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type"]
  }
};;cmapi.channel["map.view.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "description": "Schema for the details object for a map.message.complete message after a map.view.zoom, map.view.center.*.",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "The bounds coordinates of the maps viewing area.",
        "type": "object",
        "properties": {
          "northEast": {
            "description": "The coordinates of the north east corner of the maps viewing area.",
            "type": "object",
            "properties": {
              "lat": {
                "description": "The latitude of the most northen section of the viewing area. A value between -90 and 90.",
                "type": "number"
              },
              "lon": {
                "description": "The longitude of the most easternly section of the viewing area. A value between -180 and 180.",
                "type": "number"
              }
            },
            "required": ["lat", "lon"]
          },
          "southWest": {
            "description": "The coordinates of the south west corner of the maps viewing area.",
            "type": "object",
            "properties": {
              "lat": {
                "description": "The latitude of the most southern section of the viewing area. A value between -90 and 90.",
                "type": "number"
              },
              "lon": {
                "description": "The longitude of the most westernly section of the viewing area. A value between -180 and 180.",
                "type": "number"
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["northEast", "southWest"]
      },
      "range": {
        "description": "The altitude of the maps view point",
        "type": "number"
      },
      "center": {
        "description": "The center coordinate of the maps viewing area.",
        "type": "object",
        "properties": {
          "lat": {
            "description": "The latitude of the center of the viewing area. A value between -90 and 90.",
            "type": "number"
          },
          "lon": {
            "description": "The longitude of the center of the viewing area. A value between -180 and 180.",
            "type": "number"
          }
        },
        "required": ["lat", "lon"]
      }
    },
    "required": ["bounds", "range", "center"]
  }
};
;cmapi.channel["map.view.mousedown"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.mousedown",
    "description": "Report that a mouse down event was triggered from the map",
    "type": "object",
    "properties": {
      "lat": {
        "type": "number",
        "description": "The latitude of the location that was clicked",
        "minimum": "-90",
        "maximum": "90"
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "minimum": "-180",
        "maximum": "180"
      },
      "button": {
        "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
        "type": "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
        "type": "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
        "type": "array",
        "uniqueItems": true,
        "default": ["none"],
        "items": {
            "enum": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type"]
  }
};;cmapi.channel["map.view.mouseup"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.mouseup",
    "description": "Report that a mouse up event was triggered from the map",
    "type": "object",
    "properties": {
      "lat": {
        "type": "number",
        "description": "The latitude of the location that was clicked",
        "minimum": -90,
        "maximum": 90
      },
      "lon": {
        "type": "number",
        "description": "The longitude of the location that was clicked",
        "minimum": -180,
        "maximum": 180
      },
      "button": {
        "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
        "type": "string",
        "enum": ["left", "middle", "right"],
        "default": "left"
      },
      "type": {
        "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
        "type": "string",
        "enum": ["single", "double"],
        "default": "single"
      },
      "keys": {
        "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
        "type": "array",
        "uniqueItems": true,
        "default": ["none"],
        "items": {
            "enum": ["shift", "alt", "ctrl", "none"]
        }
      }
    },
    "required": ["lat", "lon", "button", "keys", "type"]
  }
};;cmapi.channel["map.view.zoom"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.zoom",
    "description": "Zoom the map to a particular range",
    "type": "object",
    "properties": {
      "range": {
        "description": "The distance in meters from the map (note that most 2-D map renderers do not support infinite zoom and the range will be translated into the nearest supported zoom level).",
        "type": "number"
      }
    },
    "required": ["range"]
  }
};
