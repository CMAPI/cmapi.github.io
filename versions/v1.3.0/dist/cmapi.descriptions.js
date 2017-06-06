var cmapi = cmapi || {};
cmapi.channel = cmapi.channel || {};
cmapi.overview = cmapi.overview || {};cmapi.channel["map.drag-drop"].description = {
  "description": "Drop an item on the map.  Note that the particular framework used to implement drag and drop (e.g., OWF drag and drop API, or go-lab/iwc at https://github.com/go-lab/iwc) will define how to use drag and drop generically.  This specification defines the details of the data object that is to be transferred via the drag and drop implementation",
  "properties": {
    "dragDropData": {
      "description": "Container for the drag and drop data",
      "defaultValue": "",
      "properties": {
        "overlayId": {
          "description": "The ID of the overlay the dropped item should be loaded into. If overlay with this ID already exists, new item is merged into existing overlay; otherwise, new overlay will be created. If no overlayId is included, sending widget’s ID is used.",
          "defaultValue": "Sending widget's ID"
        },
        "featureId": {
          "description": "Unique identifier for the dropped feature. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data.",
          "defaultValue": ""
        },
        "name": {
          "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
          "defaultValue": ""
        },
        "zoom": {
          "description": "true if map should zoom to newly loaded feature or marker data, false if not.  Default is false.",
          "defaultValue": false
        },
        "marker": {
          "description": "A JSON object containing information with which to create a new marker on the map.",
          "defaultValue": "",
          "properties": {
            "details": {
              "description": "Detail text associated with the marker that will appear in an info window.",
              "defaultValue": ""
            },
            "iconUrl": {
              "description": "URL to an icon that represents this dropped marker on the map. If no URL is included, a default icon is used.",
              "defaultValue": "map default icon"
            }
          }
        },
        "feature": {
          "description": "A JSON object containing feature data to be plotted on the map.",
          "defaultValue": "",
          "properties": {
            "format": {
              "description": "Data format of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status).  Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson', and 'wms'.",
              "defaultValue": "kml"
            },
            "featureData": {
              "description": "Feature data to be loaded into the map (see Appendices A and B for additional information on KML and GeoJSON data).",
              "defaultValue": ""
            }
          }
        },
        "featureUrl": {
          "description": "A JSON object containing a URL to feature data to be plotted on the map.",
          "defaultValue": "",
          "properties": {
            "format": {
              "description": "Data format of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status).  Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson' and 'wms'.",
              "defaultValue": "kml"
            },
            "url": {
              "description": "URL from which to retrieve the feature data to load onto the map.",
              "defaultValue": ""
            },
            "params": {
              "description": "A JSON object containing a list of parameters to be passed to the server along with the URL when loading WMS data. Params object is ignored unless “format” is set to ”wms.” Note that request, exceptions, SRS/CRS, width, height, and bbox params SHOULD NOT be passed in as they are determined by the map as needed and will be ignored if passed. Params as passed MUST be concatenated to the URL and are expected to follow the WMS specification.   All parameters passed in MUST NOT be URL encoded (the map widget implementation will URL encode all passed in params).",
              "defaultValue": ""
            }
          }
        }
      }
    }
  }
};
cmapi.channel["map.error"].description = {
  "description": "Report runtime error that caused a message to fail being processed.  If the map implementation supports the map.message.complete channels and the message includes the messageId property, errors SHALL instead be sent back via the map.message.complete failures property for the corresponding failed message, and NOT on the map.error channel.",
  "properties": {
    "sender": {
      "description": "Sender ID of message that caused error.",
      "defaultValue": ""
    },
    "type": {
      "description": "Type of message that caused error.",
      "defaultValue": ""
    },
    "msg": {
      "description": "The message that caused error.",
      "defaultValue": ""
    },
    "error": {
      "description": "A description of the error.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.clicked"].description = {
  "description": "'Click', or report that a particular feature was clicked",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay this feature is loaded into.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "Unique identifier for the given feature clicked.",
      "defaultValue": ""
    },
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
      "defaultValue": "left"
    },
    "type": {
      "description": "The type of click event. Allowable values are 'single' and 'double'.  Default value is 'single'.",
      "defaultValue": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'.  Default value is 'none'.",
      "defaultValue": ["none"]
    }
  }
};
cmapi.channel["map.feature.deselected.batch"].description = {
  "description": "De-Select, or report that a collection of feature objects were de-selected.",
  "properties": {
    "features": {
      "description": "An array of map.feature.deSelected payload objects.  See map.feature.deSelected for the object format and schema",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The default overlayId to be applied to all map.feature.deSelected objects in the payloads array that don't include an overlayId.  See map.feature.deSelected for more details",
      "defaultValue": "Sending widget's id"
    },
	 "messageId": {
      "description": "A globally unique ID that identifies this particular message batch.  If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of the message batch.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.deselected"].description = {
  "description": "De-Select, or report that object was de-selected.",
  "properties": {
    "deSelectedId": {
      "description": "The ID of the object to be de-selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
      "defaultValue": ""
    },
    "deSelectedName": {
      "description": "The name of the de-selected object.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The ID of the feature that contains the de-selected object.",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The ID of the overlay which contains the de-selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.feature.draw.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.draw.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "defaultValue": ""
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "defaultValue": ""
    },
    "type": {
      "description": "Type of feature to be drawn.  Supported types include 'line', 'polygon', 'point' or 'symbol'.  Optional types include 'bufferedline', 'circle', 'aoi', and 'airspace'.  Additional types may be added in the future.",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    },
    "feature": {
      "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. See map.feature.plot for more details",
      "defaultValue": ""
    },
    "coordinates": {
      "description": "Array of objects which represent vertice locations associated with the object drawn. Each object in the array is of the form {lat: number, lon: number, [alt: number]}.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.draw"].description = {
  "description": "Message to initiate a draw from a widget.  Allows user to draw a point, line or polygon by telling the map to start the user interaction for drawing.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay the feature to be drawn should be loaded into. If an overlay with this ID already exists, the new feature will merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be drawn. ",
      "defaultValue": ""
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message and which MUST be used in the associated map.message.complete, map.message.progress, and map.message.cancel messages as defined in the map.message channels.",
      "defaultValue": ""
    },
    "type": {
      "description": "Type of feature to be drawn.  Supported types include 'line', 'polygon', 'point' or 'symbol'.  Optional types include 'bufferedline', 'circle', 'aoi', and 'airspace'.  Additional types may be added in the future.",
      "defaultValue": "line"
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.draw.progress"].description = {
  "description": "Schema for the details object for a map.message.progress message during a map.feature.draw.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "defaultValue": ""
    },
    "type": {
      "description": "Type of feature to be drawn.  Options are line,Type of feature to be drawn.  Supported types include 'line', 'polygon', 'point' or 'symbol'.  Optional types include 'bufferedline', 'circle', 'aoi', and 'airspace'.  Additional types may be added in the future.",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    },
    "feature": {
      "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. See map.feature.plot for more details",
      "defaultValue": ""
    },
    "updates": {
      "description": "This object contains the details of the changes made during the draw operation.",
      "defaultValue": "",
      "properties": {
        "type": {
          "description": "This field identifies the operation performed.  Allowable values are 'add', 'update', and 'remove'",
          "defaultValue": ""
        },
        "indices": {
          "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate.",
          "defaultValue": ""
        },
        "coordinates": {
          "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}.",
          "defaultValue": ""
        }
      }
    }
  }
};
cmapi.channel["map.feature.edit.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.edit.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    },
    "feature": {
      "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. See map.feature.plot for more details",
      "defaultValue": ""
    },
    "coordinates": {
      "description": "Array of objects which represent vertice locations associated with the object edited. Each object in the array is of the form {lat: number, lon: number, [alt: number]}.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.edit"].description = {
  "description": "Message to notify the map to begin editing an existing feature. The map is responsible for providing the user interface to enable visual editing of the feature.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay containing the feature that is to be edited.  If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay with this ID does not exist, an error is sent on the map.error channel",
      "defaultValue": "Sending widget's ID"
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "defaultValue": ""
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message and which MUST be used in the associated map.message.complete, map.message.progress, and map.message.cancel messages as defined in the map.message channels.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.edit.progress"].description = {
  "description": "Schema for the details object for a map.message.progress message during a map.feature.edit.",
  "properties": {
    "overlayId": {
      "description": "The id of the overlay the feature that is to be edited.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The unique identifier for the feature to be edited. ",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    },
    "feature": {
      "description": "Feature object based on what would be supplied in a map.feature.plot messages feature attribute",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. See map.feature.plot for more details",
      "defaultValue": ""
    },
    "status": {
      "description": "A pre-defined string indicating the type of progress. <ul><li>start - indicates that the map has placed the feature into edit mode.</li><li>update - indicates that the map has modified the feature.</li></ul>",
      "defaultValue": ""
    },
    "updates": {
      "description": "This object contains the details of the changes made during the draw operation.",
      "defaultValue": "",
      "properties": {
        "type": {
          "description": "This field identifies the operation performed.  Allowable values are 'add', 'update', and 'remove'",
          "defaultValue": ""
        },
        "indices": {
          "description": "This field is an array of integer indexes identifying the coordinates affected. This array can be empty if the operation applies to property other than a coordinate.",
          "defaultValue": ""
        },
        "coordinates": {
          "description": "This field is an array of all the objects coordiantes. Each coordinate object is as follows {lat: number, lon: number, [alt: number]}.",
          "defaultValue": ""
        }
      }
    }
  }
};
cmapi.channel["map.feature.get"].description = {
  "description": "Request the full feature data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
  "properties": {
    "features": {
      "description": "An array of objects with a featureId and an overlayId representing the feature to be retrived",
      "defaultValue": "",
      "properties": {
        "overlayId": {
          "description": "The overlayId that currently contains the feature.",
          "defaultValue": ""
        },
        "featureId": {
          "description": "The id of the feature you wish to retrieve.",
          "defaultValue": ""
        }
      }
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.hide"].description = {
  "description": "Hide existing feature on the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the feature to be hidden is found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to be hidden.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.mousedown"].description = {
  "description": "Report that a mouse down event was triggered from a particular feature",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay this feature is loaded into.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "Unique identifier for the given feature clicked.",
      "defaultValue": ""
    },
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked.",
      "defaultValue": "left"
    },
    "type": {
      "description": "The type of click event.",
      "defaultValue": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event. ",
      "defaultValue": "none"
    }
  }
};
cmapi.channel["map.feature.mouseup"].description = {
  "description": "Report that a mouse up event was triggered from a particular feature",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay this feature is loaded into.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "Unique identifier for the given feature clicked.",
      "defaultValue": ""
    },
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked. ",
      "defaultValue": "left"
    },
    "type": {
      "description": "The type of click event. ",
      "defaultValue": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.",
      "defaultValue": "none"
    }
  }
};
cmapi.channel["map.feature.plot.2525b"].description = {
  "description": "This optional extension defines the format of the map.feature.plot channel payload for MIL-STD-2525 Revision B Change II features. The feature attribute below defines the format and content of the features attribute of the map.feature.plot. The properties.modifiers attribute defines the MIL-STD-2525 Revision B Change II modifiers that the map implementation shall apply to the feature.  If this format is supported the format type of “2525b” SHALL be added to the formats array returned in the map.status.format message.",
  "properties": {
    "format": {
      "description": "Defines the feature format as a CMAPI Symbol with the specific type of MIL-STD-2525 Revision B Change II.",
      "defaultValue": "",
	  "allowableValues" : "2525b"
    },
    "feature": {
      "description": "The feature attribute of the map.feature.plot payload in GeoJSON format.",
      "defaultValue": "",
      "properties": {
        "symbolCode": {
          "description": "The 15 character MIL-STD-2525 Revision B Change II symbol code.",
          "defaultValue": ""
        },
        "type": {
          "description": "Defines the geojson format of the coordinates in the coordinate attribute.  Polygons are not allowed for this symbol type",
          "defaultValue": "",
		  "allowableValues" : "point, lineString"
        },
        "coordinates": {
          "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format.",
          "defaultValue": ""
        }
      }
    },
    "properties": {
      "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
      "defaultValue": "",
      "properties": {
        "modifiers": {
          "description": "The milstd2525 modifiers required for the graphic.",
          "defaultValue": "",
          "properties": {
            "size": {
              "description": "The pixels dimensions of a single point icon when it is drawn.  This modifier is not found in the MIL-STD-2525.",
              "defaultValue": ""
            },
            "A": {
              "description": "Symbol Icon: The innermost part of a symbol that represents a warfighting object Here for completeness, not actually used as this comes from thesymbol code.",
              "defaultValue": ""
            },
            "B": {
              "description": "Echelon: Symbol Icon: A graphic modifier in a unit symbol that identifies command level We feed off of the symbol code so this isn't used.",
              "defaultValue": ""
            },
            "C": {
              "description": "Quantity: A text modifier in an equipment symbol that identifies the number of items present.",
              "defaultValue": ""
            },
            "D": {
              "description": "Task Force Indicator: A graphic modifier that identifies a unit or SO symbol as a task force (see 5.3.4.6 and figures 2 and 3).",
              "defaultValue": ""
            },
            "E": {
              "description": "Frame Shape Modifier: A graphic modifier that displays standard identity, battle dimension, or exercise amplifying descriptors of an object (see 5.3.1 and table II).",
              "defaultValue": ""
            },
            "F": {
              "description": "Reinforced / Reduced: A text modifier in a unit symbol that displays (+) for reinforced, (-) for reduced,(+) reinforced and reduced. R : reinforced, D : reduced, RD : reinforced and reduced",
              "defaultValue": ""
            },
            "G": {
              "description": "Staff Comments: A text modifier for units, equipment and installations, content is implementation specific.",
              "defaultValue": ""
            },
            "H": {
              "description": "Additional Info: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "H1": {
              "description": "Additional Info 2: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "H2": {
              "description": "Additional Info 3: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "J": {
              "description": "Evaluation Rating: A text modifier for units and installations that indicates unit effectiveness or installation capability.",
              "defaultValue": ""
            },
            "K": {
              "description": "Combat Effectiveness: A text modifier for hostile equipment, “!” indicates detectable electronic signatures.",
              "defaultValue": ""
            },
            "L": {
              "description": "Signature Equipment: A text modifier for hostile equipment, “!” indicates detectable electronic signatures.",
              "defaultValue": ""
            },
            "M": {
              "description": "Higher Formation: A text modifier for units that indicates number or title of higher echelon command (corps are designated by Roman numerals).",
              "defaultValue": ""
            },
            "N": {
              "description": "Hostile: A text modifier for equipment, letters ENY denote hostile symbols. Always set to ENY",
              "defaultValue": ""
            },
            "P": {
              "description": "IFF/SIF: A text modifier displaying IFF/SIF Identification modes and codes.",
              "defaultValue": ""
            },
            "Q": {
              "description": "Direction of Movement: A graphic modifier for CBRN events that identifies the direction of movement (see 5.5.2.1 and figure 11).",
              "defaultValue": ""
            },
            "R": {
              "description": "Mobility Indicator: A graphic modifier for equipment that depicts the mobility of an object (see 5.3.4.3, figures 2 and 3, and table VI). We feed off of the symbol code for mobility so this isn't used.",
              "defaultValue": ""
            },
            "R2": {
              "description": "Signature Mobility Indicator: M : Mobile, S : Static, or U : Uncertain.",
              "defaultValue": ""
            },
            "S": {
              "description": "Headquaters or Staff Offest Indicator: Headquarters staff indicator: A graphic modifier for units, equipment, and installations that identifies a unit as a headquarters (see 5.3.4.8 and figures 2 and 3). Offset location indicator: A graphic modifier for units, equipment, and installations used when placing an object away from its actual location (see 5.3.4.9 and figures 2 and 3).",
              "defaultValue": ""
            },
            "T": {
              "description": "Unique Designation 1: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology.",
              "defaultValue": ""
            },
            "T1": {
              "description": "Unique Designation 2: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology.",
              "defaultValue": ""
            },
            "V": {
              "description": "Equipment Type: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "W": {
              "description": "Date Time Group 1: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "W1": {
              "description": "Date Time Group 2: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "X": {
              "description": "Altitude Depth: An array of numbers for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects, or height of equipment or structures on the ground. See 5.5.2.5 for content.",
              "defaultValue": ""
            },
            "Y": {
              "description": "Location: A text modifier for units, equipment, and installations that displays a symbol’s location in degrees, minutes, and seconds (or in UTM or other applicable display format). Conforms to decimal degrees format: xx.dddddhyyy.dddddh where xx : degrees latitude yyy : degrees longitude .ddddd : decimal degrees h : direction (N, E, S, W).",
              "defaultValue": ""
            },
            "AA": {
              "description": "Special C2 Headquarters: A text modifier for units, indicator is contained inside the frame (see figures 2 and 3), contains the name of the special C2 Headquarters.",
              "defaultValue": ""
            },
            "AC": {
              "description": "Installation: Installation: A graphic modifier for units, equipment, and installations used to show that a particular symbol denotes an installation (see 5.3.4.5 and figures 2 and 3). Not used, we feed off of symbol code for this.",
              "defaultValue": ""
            },
            "AD": {
              "description": "Platform Type: ELNOT or CENOT.",
              "defaultValue": ""
            },
            "AE": {
              "description": "Equipment Teardown Time: Equipment teardown time in minutes.",
              "defaultValue": ""
            },
            "AF": {
              "description": "Common Identifier: Example: “Hawk” for Hawk SAM system.",
              "defaultValue": ""
            },
            "AG": {
              "description": "Auxillery Equipment Identifier: Towed sonar array indicator: A graphic modifier for equipment that indicates the presence of a towed sonar array (see 5.3.4.4, figures 2 and 3, and table VII).",
              "defaultValue": ""
            },
            "AH": {
              "description": "Area of Uncertainty: A graphic modifier for units and equipment that indicates the area where an object is most likely to be, based on the object’s last report and the reporting accuracy of the sensor that detected the object (see 5.3.4.11.1 and figure 4).",
              "defaultValue": ""
            },
            "AI": {
              "description": "Dead Reckoning Trailer: A graphic modifier for units and equipment that identifies where an object should be located at present, given its last reported course and speed (see 5.3.4.11.2 and figure 4).",
              "defaultValue": ""
            },
            "AJ": {
              "description": "Speed Leader: A graphic modifier for units and equipment that connects two objects and is updated dynamically as the positions of the objects change (see 5.3.4.11.4 and figure 4).",
              "defaultValue": ""
            },
            "AK": {
              "description": "Pairing Line: An optional graphic modifier for equipment or installations that indicates operational condition or capacity.",
              "defaultValue": ""
            },
            "AL": {
              "description": "Operation Condition: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type.",
              "defaultValue": ""
            },
            "AM": {
              "description": "Distance: An array of numeric modifiers that displays a minimum, maximum, or a specific distance (range, radius, width, length, etc.), in meters. 0 - 999,999 meters",
              "defaultValue": ""
            },
            "AN": {
              "description": "Azimuth: An array of numbers between 0 to 359. For Tactical Graphics A numeric modifier that displays an angle measured from true north to any other line in degrees.",
              "defaultValue": ""
            },
            "AO": {
              "description": "Engagement Bar: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type.",
              "defaultValue": ""
            },
            "CC": {
              "description": "Country Code: Used internally by the renderer.  This value is set via the 13th & 14th characters in the symbol id.  There is no formal definition of how this should be indicated on the symbol in the MilStd or USAS.   The renderer will place it to the right of the 'H' label.",
              "defaultValue": ""
            }
          }
        }
      }
    }
  }
};
cmapi.channel["map.feature.plot.2525c"].description = {
  "description": "This optional extension defines the format of the map.feature.plot channel payload for MIL-STD-2525 Revision C features. The feature attribute below defines the format and content of the features attribute of the map.feature.plot. The properties.modifiers attribute defines the MIL-STD-2525 Revision C modifiers that the map implementation shall apply to the feature. If this format is supported the format type of “2525c” SHALL be added to the formats array returned in the map.status.format message.",
  "properties": {
    "format": {
      "description": "Defines the feature format as a CMAPI Symbol with the specific type of MIL-STD-2525 Revision C.",
      "defaultValue": "2525c"
    },
    "feature": {
      "description": "The feature attribute of the map.feature.plot payload in GeoJSON format.",
      "defaultValue": "",
      "properties": {
        "symbolCode": {
          "description": "The 15 character MIL-STD-2525 Revision C symbol code.",
          "defaultValue": ""
        },
        "type": {
          "description": "Defines the geojson format of the coordinates in the coordinate attribute.  Polygons are not allowed for this symbol type",
          "defaultValue": "",
		  "allowableValues" : "point, lineString"
        },
        "coordinates": {
          "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format.",
          "defaultValue": ""
        }
      }
    },
    "properties": {
      "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
      "defaultValue": "",
      "properties": {
        "modifiers": {
          "description": "The milstd2525 modifiers required for the graphic.",
          "defaultValue": "",
          "properties": {
            "size": {
              "description": "The pixels dimensions of a single point icon when it is drawn.  This modifier is not found in the MIL-STD-2525.",
              "defaultValue": ""
            },
            "A": {
              "description": "Symbol Icon: The innermost part of a symbol that represents a warfighting object Here for completeness, not actually used as this comes from thesymbol code.",
              "defaultValue": ""
            },
            "B": {
              "description": "Echelon: Symbol Icon: A graphic modifier in a unit symbol that identifies command level We feed off of the symbol code so this isn't used.",
              "defaultValue": ""
            },
            "C": {
              "description": "Quantity: A text modifier in an equipment symbol that identifies the number of items present.",
              "defaultValue": ""
            },
            "D": {
              "description": "Task Force Indicator: A graphic modifier that identifies a unit or SO symbol as a task force (see 5.3.4.6 and figures 2 and 3).",
              "defaultValue": ""
            },
            "E": {
              "description": "Frame Shape Modifier: A graphic modifier that displays standard identity, battle dimension, or exercise amplifying descriptors of an object (see 5.3.1 and table II).",
              "defaultValue": ""
            },
            "F": {
              "description": "Reinforced / Reduced: A text modifier in a unit symbol that displays (+) for reinforced, (-) for reduced,(+) reinforced and reduced. R : reinforced, D : reduced, RD : reinforced and reduced",
              "defaultValue": ""
            },
            "G": {
              "description": "Staff Comments: A text modifier for units, equipment and installations, content is implementation specific.",
              "defaultValue": ""
            },
            "H": {
              "description": "Additional Info: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "H1": {
              "description": "Additional Info 2: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "H2": {
              "description": "Additional Info 3: Text modifier for amplifying free text.",
              "defaultValue": ""
            },
            "J": {
              "description": "Evaluation Rating: A text modifier for units and installations that indicates unit effectiveness or installation capability.",
              "defaultValue": ""
            },
            "K": {
              "description": "Combat Effectiveness: A text modifier for hostile equipment, “!” indicates detectable electronic signatures.",
              "defaultValue": ""
            },
            "L": {
              "description": "Signature Equipment: A text modifier for hostile equipment, “!” indicates detectable electronic signatures.",
              "defaultValue": ""
            },
            "M": {
              "description": "Higher Formation: A text modifier for units that indicates number or title of higher echelon command (corps are designated by Roman numerals).",
              "defaultValue": ""
            },
            "N": {
              "description": "Hostile: A text modifier for equipment, letters ENY denote hostile symbols. Always set to ENY",
              "defaultValue": ""
            },
            "P": {
              "description": "IFF/SIF: A text modifier displaying IFF/SIF Identification modes and codes.",
              "defaultValue": ""
            },
            "Q": {
              "description": "Direction of Movement: A graphic modifier for CBRN events that identifies the direction of movement (see 5.5.2.1 and figure 11).",
              "defaultValue": ""
            },
            "R": {
              "description": "Mobility Indicator: A graphic modifier for equipment that depicts the mobility of an object (see 5.3.4.3, figures 2 and 3, and table VI). We feed off of the symbol code for mobility so this isn't used.",
              "defaultValue": ""
            },
            "R2": {
              "description": "Signature Mobility Indicator: M : Mobile, S : Static, or U : Uncertain.",
              "defaultValue": ""
            },
            "S": {
              "description": "Headquaters or Staff Offest Indicator: Headquarters staff indicator: A graphic modifier for units, equipment, and installations that identifies a unit as a headquarters (see 5.3.4.8 and figures 2 and 3). Offset location indicator: A graphic modifier for units, equipment, and installations used when placing an object away from its actual location (see 5.3.4.9 and figures 2 and 3).",
              "defaultValue": ""
            },
            "T": {
              "description": "Unique Designation 1: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology.",
              "defaultValue": ""
            },
            "T1": {
              "description": "Unique Designation 2: A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology.",
              "defaultValue": ""
            },
            "V": {
              "description": "Equipment Type: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "W": {
              "description": "Date Time Group 1: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "W1": {
              "description": "Date Time Group 2: A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).",
              "defaultValue": ""
            },
            "X": {
              "description": "Altitude Depth: An array of numbers for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects, or height of equipment or structures on the ground. See 5.5.2.5 for content.",
              "defaultValue": ""
            },
            "Y": {
              "description": "Location: A text modifier for units, equipment, and installations that displays a symbol’s location in degrees, minutes, and seconds (or in UTM or other applicable display format). Conforms to decimal degrees format: xx.dddddhyyy.dddddh where xx : degrees latitude yyy : degrees longitude .ddddd : decimal degrees h : direction (N, E, S, W).",
              "defaultValue": ""
            },
            "AA": {
              "description": "Special C2 Headquarters: A text modifier for units, indicator is contained inside the frame (see figures 2 and 3), contains the name of the special C2 Headquarters.",
              "defaultValue": ""
            },
            "AC": {
              "description": "Installation: Installation: A graphic modifier for units, equipment, and installations used to show that a particular symbol denotes an installation (see 5.3.4.5 and figures 2 and 3). Not used, we feed off of symbol code for this.",
              "defaultValue": ""
            },
            "AD": {
              "description": "Platform Type: ELNOT or CENOT.",
              "defaultValue": ""
            },
            "AE": {
              "description": "Equipment Teardown Time: Equipment teardown time in minutes.",
              "defaultValue": ""
            },
            "AF": {
              "description": "Common Identifier: Example: “Hawk” for Hawk SAM system.",
              "defaultValue": ""
            },
            "AG": {
              "description": "Auxillery Equipment Identifier: Towed sonar array indicator: A graphic modifier for equipment that indicates the presence of a towed sonar array (see 5.3.4.4, figures 2 and 3, and table VII).",
              "defaultValue": ""
            },
            "AH": {
              "description": "Area of Uncertainty: A graphic modifier for units and equipment that indicates the area where an object is most likely to be, based on the object’s last report and the reporting accuracy of the sensor that detected the object (see 5.3.4.11.1 and figure 4).",
              "defaultValue": ""
            },
            "AI": {
              "description": "Dead Reckoning Trailer: A graphic modifier for units and equipment that identifies where an object should be located at present, given its last reported course and speed (see 5.3.4.11.2 and figure 4).",
              "defaultValue": ""
            },
            "AJ": {
              "description": "Speed Leader: A graphic modifier for units and equipment that connects two objects and is updated dynamically as the positions of the objects change (see 5.3.4.11.4 and figure 4).",
              "defaultValue": ""
            },
            "AK": {
              "description": "Pairing Line: An optional graphic modifier for equipment or installations that indicates operational condition or capacity.",
              "defaultValue": ""
            },
            "AL": {
              "description": "Operation Condition: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type.",
              "defaultValue": ""
            },
            "AM": {
              "description": "Distance: An array of numeric modifiers that displays a minimum, maximum, or a specific distance (range, radius, width, length, etc.), in meters. 0 - 999,999 meters",
              "defaultValue": ""
            },
            "AN": {
              "description": "Azimuth: An array of numbers between 0 to 359. For Tactical Graphics A numeric modifier that displays an angle measured from true north to any other line in degrees.",
              "defaultValue": ""
            },
            "AO": {
              "description": "Engagement Bar: A graphic amplifier placed immediately atop the symbol. May denote, 1) local/remote status, 2) engagement status, and 3) weapon type.",
              "defaultValue": ""
            },
            "CC": {
              "description": "Country Code: Used internally by the renderer.  This value is set via the 13th & 14th characters in the symbol id.  There is no formal definition of how this should be indicated on the symbol in the MilStd or USAS.   The renderer will place it to the right of the 'H' label.",
              "defaultValue": ""
            }
          }
        }
      }
    }
  }
};
cmapi.channel["map.feature.plot.aoi"].description = {
  "description": "The Common Map Widget API supports Areas of Interest (AOIs) by extending the GeoJSON specification by adding the “aoi” object to the “Properties” object of the GeoJSON specification.  This extended object ONLY applies to the GeoJSON Feature object.  Note that when passing AOIs, the base GeoJSON object MUST be a single feature object, and MUST NOT be a Feature Collection object.",
  "properties": {
    "aoi": {
      "description": "object to be included 'inside' a GeoJSON feature to signify that the feature is an Area of Interest and is to be treated accordingly.  Note that the aoi object can only be used inside of a GeoJSON feature object to convey an Area of Interest (i.e., the aoi object will not work with KML or WMS formatted feature objects).",
      "defaultValue": "",
      "properties": {
        "buffer": {
          "description": "*CONDITIONAL <br/>Distance in meters from the points identified in the “feature” data.  MUST be included and greater than 0 if the feature is a point-radius or line, MAY be included for polygon, and SHALL be ignored for bbox. Specific interpretation of buffer based on type is spelled out in definition of “type” below. ",
          "defaultValue": ""
        },
        "type": {
          "description": "Defines how to interpret the passed in AOI geometry.  Valid values are “bbox”, “polygon”, “line”, and “point-radius”. <ul> <li>If type = “bbox”:<br/><ul><li>AOI is interpreted as a geospatial rectangle.  The bbox MUST NOT be allowed to be manipulated into a different geometric shape (e.g. a trapezoid).</li><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” SHALL be ignored.</li></ul></li><li>If type = “line”:<br/><ul><li>geoJSON feature geometry type MUST be a line.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as distance in meters perpendicular to both sides of the line.  Buffer does not extend past the start and end points of the actual line (i.e., no “end-caps” are supported). </li></ul></li><li>If type = “point-radius”:<br/><ul><li>geoJSON feature geometry type MUST be a point.</li><li>“buffer” MUST be greater than 0.</li><li>“buffer” is interpreted as the radius in meters from the point. </li></ul></li><li>If type = “polygon”:<br/><ul><li>geoJSON feature geometry type MUST be a polygon.</li><li>“buffer” MAY be included.</li><li>“buffer” is interpreted as the distance in meters outside of the polygon boundaries that the AOI is to extend. </li></ul> </ul>",
          "defaultValue": "",
		  "allowableValues" : "bbox, polygon, line, point-radius"
        }
      }
    }
  }
};
cmapi.channel["map.feature.plot.batch"].description = {
  "description": "Plots a batch of feature data on the map.",
  "properties": {
    "features": {
      "description": "An array of map.feature.plot payloads minus the messageId and zoom properties.  See map.feature.plot for the object format and schema",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The default overlayId to be applied to all feature objects in the features array that don’t include an overlayId. If omitted and the feature object also omits this property, the behavior SHALL be as documented in the map.feature.plot overlayId property.  See map.feature.plot for more details.",
      "defaultValue": "Sending widget's id"
    },
    "format": {
      "description": "The default format to be applied to all feature objects in the features array that don’t include a format value. See map.feature.plot for definition of format property.   More details about feature formats can be found in the map.feature Data Formats section of the documentation.",
      "defaultValue": ""
    },
	"zoom": {
		"description": "True if map should zoom so that the extents of the map should be set to display all of the newly loaded feature data, false if not. Default is false.",
		"defaultValue": ""
	},
    "readOnly": {
      "description": "The default value for readOnly to be applied to all feature objects in the features array that don’t include a readOnly value. See map.feature.plot for definition of readOnly property.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.plot"].description = {
  "description": "Plots feature data on the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
      "defaultValue": "sending widget's ID"
    },
    "featureId": {
      "description": "Unique identifier for the given feature data. Note that feature IDs MUST be unique within a given overlay. Reusing a feature ID will be considered a reload, with the original feature data being removed and replaced by the new feature data.",
      "defaultValue": ""
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. MUST be a single string value.  All map implementations MUST support 'kml' and 'geojson'.  If no format is specified, the format defaults to kml. A list of formats supported by a particular map implementation may be obtained by querying the map using the map.status channel (see map.status).  More details about feature formats can be found in the map.feature Data Formats section of the documentation.",
      "defaultValue": "kml",
      "allowableValues" : "kml,geojson"
    },
    "feature": {
      "description": "Feature data to be loaded into the map.   See Appendix A for additional information on required KML support, Appendix B for information on required GeoJSON, and Appendix C for information on Area of Interest (AOI) support.",
      "defaultValue": ""
    },
    "zoom": {
      "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.",
      "defaultValue": false,
	  "allowableValues" : "true, false"
    },
    "readOnly": {
      "description": "Valid values are true or false. If true, then the end user MUST NOT be able to edit the feature from the map’s user interface, if false the end user MAY edit the feature from the map’s user interface. Default value is true.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
      "defaultValue": true,
	  "allowableValues" : "true, false"
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.plot.geojson"].description = {
  "description": "The GeoJSON specification can be found at <a target='_blank' href=\"https://tools.ietf.org/html/rfc7946\" >https://tools.ietf.org/html/rfc7946</a>.  The Common Map API specification extends the GeoJSON specification by adding the “style”, “name”, <strong style='color: red;'>“id”*</strong>, “description“, and “timePrimitive“ objects to the “Properties” object of the GeoJSON specification.  These extended objects ONLY apply to the GeoJSON Feature object. <strong style='color: red;'>*NOTE</strong>: “id” has been deprecated, see description for more information.",
  "properties": {
    "name": {
      "description": "name of the specific GeoJSON feature.  Generally used when the GeoJSON parent object is a featureCollection or feature objects.",
      "defaultValue": ""
    },
    "id": {
      "description": "<strong style='color: red;'>*DEPRECATED</strong>: This property SHOULD be located at the root level of the GeoJSON Feature object, not within the properties object according to the RFC 7946 GeoJSON specification. In order to maintain backwards compatibility this property's value should be checked for the id value if an “id” does not exist at the GeoJSON Feature root level.  If populated “id” is a unique identifier for the feature object.",
      "defaultValue": ""
    },
    "description": {
      "description": "user supplied content that appears in a pop-up balloon associated with the feature.  Can be plain text, or HTML formatted.",
      "defaultValue": ""
    },
    "timePrimitive": {
      "description": "",
      "defaultValue": "",
      "properties": {
        "timeSpan": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "begin": {
              "description": "time stamp identifying the beginning of the time span (see timeStamp definition for format info). ",
              "defaultValue": "",
			  "allowableValues" : "valid time in format of yyyy-mm-ddThh:mm:ss.ssszzzzzz, yyyy-mm-ddThh:mm:ss.sssZ, yyyy-mm-dd"
            },
            "end": {
              "description": "time stamp identifying the end of the time span (see timeStamp definition for format info).",
              "defaultValue": "",
			   "allowableValues" : "valid time in format of yyyy-mm-ddThh:mm:ss.ssszzzzzz, yyyy-mm-ddThh:mm:ss.sssZ, yyyy-mm-dd"
            }
          }
        },
        "timeSpans": {
          "description": "An array of timespan objects with a begin dateTime and end dateTime property representing the spans of time the map visualization is filtering",
          "defaultValue": ""
        },
        "timeStamp": {
          "description": "time stamp value expressed as yyyy-mm-ddThh:mm:ss.ssszzzzzz, where T is the separator between the date and the time, and the time zone is either Z (for UTC) or zzzzzz, which represents ±hh:mm in relation to UTC. Additionally, the value can be expressed as a date only.",
          "defaultValue": "",
		  "allowableValues" : "valid time in format of yyyy-mm-ddThh:mm:ss.ssszzzzzz, yyyy-mm-ddThh:mm:ss.sssZ, yyyy-mm-dd"
        }
      }
    },
    "style": {
      "description": "",
      "defaultValue": "",
      "properties": {
        "lineStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  See Note 1 below for more info",
              "defaultValue": "No value sent results in default settings on the map.",
              "properties": {
                "r": {
                  "description": "Integer value between 0 and 255 for red.",
                  "defaultValue": ""
                },
                "g": {
                  "description": "Integer value between 0 and 255 for green.",
                  "defaultValue": ""
                },
                "b": {
                  "description": "Integer value between 0 and 255 for green.",
                  "defaultValue": ""
                },
                "a": {
                  "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                  "defaultValue": ""
                }
              }
            }
          }
        },
        "polyStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  See Note 1 below for more info. ",
              "defaultValue": "No value sent results in default settings on the map.",
              "properties": {
                "r": {
                  "description": "Integer value between 0 and 255 for red.",
                  "defaultValue": ""
                },
                "g": {
                  "description": "Integer value between 0 and 255 for green.",
                  "defaultValue": ""
                },
                "b": {
                  "description": "Integer value between 0 and 255 for blue.",
                  "defaultValue": ""
                },
                "a": {
                  "description": "Number value between 0.0 (fully transparent) to 1.0 (fully opaque).",
                  "defaultValue": ""
                }
              }
            }
          }
        },
        "iconStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "url": {
              "description": "URL to an image file that will be used for the icon for a point. If no URL is provided, result will be map’s default icon.",
              "defaultValue": ""
            },
            "size": {
              "description": "Size of the icon in pixels",
              "defaultValue": 32
            }
          }
        }
      }
    }
  }
};
cmapi.channel["map.feature.plot.symbol"].description = {
  "description": "This optional extension defines the format of the map.feature.plot channel payload for symbols. The feature attibute below defines the format and content of the features attibute of the map.feature.plot. The properties.modifiers attribute defines the modifiers that the map implementation shall apply to the feature. This schema provides a general framework for different symbology standards such as MIL-STD-2525 and NATO APP-6",
  "properties": {
    "feature": {
      "description": "The feature attribute of the map.feature.plot payload.",
      "defaultValue": "",
      "properties": {
        "symbolCode": {
          "description": "The symbol code for the symbol.",
          "defaultValue": ""
        },
        "type": {
          "description": "Defines the geojson format of the coordinates in the coordinate attribute.",
          "defaultValue": ""
        },
        "coordinates": {
          "description": "This attribute MUST contain a valid geojson coordinate structure for the type indicated in the type attribute. See http://geojson.org/geojson-spec.html for the valid format.",
          "defaultValue": ""
        }
      }
    },
    "properties": {
      "description": "The properties attribute of the map.feature.plot payload. Which in addition to other attributes that may be present, it must contain the following attribute.",
      "defaultValue": "",
      "properties": {}
    }
  }
};
cmapi.channel["map.feature.plot.url"].description = {
  "description": "Have the map plot feature data from a Uniform Resource Locator (URL).",
  "properties": {
    "featureId": {
      "description": "Unique identifier for the given feature data. Note that feature ids must be unique within a given overlay. Reusing a feature id will be considered a reload with the original feature data being removed and replaced by the new feature data.",
      "defaultValue": ""
    },
    "url": {
      "description": "URL from which to retrieve the feature data to load onto the map",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, new feature is merged into existing overlay; otherwise, a new overlay will be created. If no overlayId is included, default overlay with ID equal to sending widget's ID is used. If overlay exists, it will retain its status (whether visible or hidden). If overlay is created, it will be made visible.",
      "defaultValue": "sending widget's ID"
    },
    "name": {
      "description": "Name for the given feature data. Note that feature names do not have to be unique and are intended for display purposes only.",
      "defaultValue": ""
    },
    "format": {
      "description": "Data format of the given feature. If no format is specified, the format defaults to 'kml'. A list of formats supported by a particular map implementation can be obtained by querying the map using the map.status channel (see map.status). Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson', and 'wms' (GetMap only).   More details about feature formats can be found in the map.feature Data Formats section of the documentation.",
      "defaultValue": "kml",
	  "allowableValues" : "kml, geojson, wms"
    },
    "params": {
      "description": "A JSON object containing a list of parameters to be passed to the server along with the URL when loading WMS data. Params object is ignored unless format is set to wms.  Note that request, exceptions, SRS/CRS, width, height, and bbox params should not be passed in as they are determined by the map as needed and will be ignored if passed. Params as passed will be concatenated to the URL and are expected to follow the WMS specification.   All parameters passed in must not be URL encoded (the map widget implementation will URL encode all passed in params).",
      "defaultValue": ""
    },
    "zoom": {
      "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.  Ignored when loading WMS data.",
      "defaultValue": false,
	  "allowableValues" : "true, false"
    }
  }
};
cmapi.channel["map.feature.selected.batch"].description = {
  "description": "Select, or report that a collection of feature objects were selected.",
  "properties": {
    "features": {
      "description": "An array of map.feature.selected payload objects.  See map.feature.selected for the object format and schema",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The default overlayId to be applied to all map.feature.selected objects in the payloads array that don't include an overlayId.  See map.feature.selected for more details",
      "defaultValue": "Sending widget's id"
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message batch.  If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of the message batch.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.selected"].description = {
  "description": "Select, or report that object was selected.",
  "properties": {
    "selectedId": {
      "description": "The ID of the object to be selected (may be a sub-feature contained within the aggregate feature data with the given featureId).",
      "defaultValue": ""
    },
    "selectedName": {
      "description": "The name of the selected object.",
      "defaultValue": ""
    },
    "featureId": {
      "description": "The ID of the feature that contains the selected object.",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The ID of the overlay which contains the selected object. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.feature.show"].description = {
  "description": "Have the map show previously hidden feature data.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the feature to be shown is found. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to be shown.",
      "defaultValue": ""
    },
    "zoom": {
      "description": "true if map should zoom to the shown feature, false if not. Default is false.",
      "defaultValue": false,
	  "allowableValues" : "true, false"
    }
  }
};
cmapi.channel["map.feature.unplot.batch"].description = {
  "description": "Remove collection of features from the map.",
  "properties": {
    "features": {
      "description": "An array of map.feature.unplot payloads minus the messageId.  See map.feature.unplot for the object format and schema",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "when included at the array level, this value will be applied to all map.feature.unplot objects in the features array that don't include an overlayID.  See map.feature.unplot for definition of this property",
      "defaultValue": "Sending widget's id"
    }
  }
};
cmapi.channel["map.feature.unplot"].description = {
  "description": "Removes feature data from the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the feature to be removed is found. If no overlayId is included, default overlay with an ID equal to sending widget's ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to be removed.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.feature.update"].description = {
  "description": "Update an existing feature on the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the feature to be updated is currently found. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to be updated",
      "defaultValue": ""
    },
    "name": {
      "description": "If the name provided differs from the feature's current name, the display value will be changed to show the new value.  If no value is provided, the feature name will remain unchanged.",
      "defaultValue": ""
    },
    "newOverlayId": {
      "description": "This represents the ID of an overlay to move the feature to.  If this attribute is provided, the feature MUST be removed from its current overlay and added to the overlay with this ID.  If an overlay with an ID of newOverlayId does not exist, a new overlay will be created with an ID of newOverlayId, and the feature to be updated will be moved to the overlay identified by newOverlayId.",
      "defaultValue": ""
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.get.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.get",
  "properties": {
      "successes": {
        "description": "An object containing successful results (features and overlays) pertaining to the filter parameters provided in the corresponding map.get message",
        "properties" : {
          "overlay":{
            "description" : "An array of overlay objects (see map.overlay.create) that meet the map.get filter criteria"
          },
          "feature":{
            "description" : "An array of feature objects (see map.feature.plot) that meet the map.get filter criteria"
          }
        }
      }
  }
};
cmapi.channel["map.get"].description = {
  "description": "The map.get channel enables queries for the existence and state of overlays and feature data on the map.  The query language is fairly simple - You can specifiy the type of object(s) you are looking for via the types property, specify the properties of those objects you are interested in, and then specifiy filter criteria based on property name and property values.",
  "properties": {
    "recursive": {
      "description": "Determines whether the query will drill down into sub overlays and features. Recursive should be used carefully as recursing for all features from the root level of the map may result in unpredicatbly large responses.",
      "defaultValue": false
    },
    "types": {
      "description": "An array or either overlays or features. For example ['features'], ['overlays'], ['features','overlays']",
      "defaultValue": ""
    },
    "select": {
      "description": "An array of the properties you want returned on the overlay and/or features results of the query.  For example if you provide ['visible'] you will get a list of results with the item's featureId, overlayId, and visible property only.  This works similar to a SQL select statement where the property names of the object are used instead of a column name in a table.  An empty or null select statement will act as a select all and return the full objects with all properties.",
      "defaultValue": ""
    },
    "filter": {
      "description": "The filter property is an array of filter objects that contain key value pairs that can be used to filter the items that will be returned from a map.get message.",
      "defaultValue": "",
      "properties": {
        "filterObject": {
          "description": "Simple object with two attributes to represent a key value pair to use as a query filter on the map.get message.  All properties that represent primitive types, such as number, string, and boolean documented on map.feature.plot and map.overlay.create can be used as filter values in the filter objects \"property\" attribute.  Additionally the term of \"visible\" SHALL be supported which is a boolean that the map SHALL interpret as a request to only include items when that item's visibilty matches the boolean value. The visible attribute is calculated as an on /off state which does not consider whether or not the item is within the map's current view. Visibility is controlled by the map.feature.show / map.overlay.show, and map.feature.hide and map.overlay.hide channels",
          "type": "object",
          "properties": {
            "property": {
              "description": "This field must contain the name of the property field which value must match the value in the term property.",
              "defaultValue": ""
            },
            "term": {
              "description": "This field must contain the value to match. Type checking is performed. ('10' !== 10)",
              "defaultValue": ""
            }
          }
        }
      }
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
      "defaultValue": ""
    }
  },
  "required" : ["messageId", "types"]
};
cmapi.channel["map.message.cancel"].description = {"description":"Allows a widget to cancel a batch or long-running message exchange that has not yet completed.","properties":{"messageId":{"description":"A globally unique ID that identifies the particular message or message batch that was cancelled.","defaultValue":""}}};cmapi.channel["map.message.complete"].description = {
  "description": "Allows the Map Widget to report results after processing a message.  If a widget receives a map.message.complete message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that when a messageId is sent AND if any of the message payloads failed to be enacted, the response in the map.message.complete message SHOULD contain a string indicating why the particular payload failed.",
  "properties": {
    "messageId": {
      "description": "A globally unique ID that identifies the particular message or message batch that was completed.",
      "defaultValue": ""
    },
    "originatingChannel": {
      "description": "This property SHALL contain the channel name of the request being completed. It is intended to provide guidance as to the content of the details property.",
      "defaultValue": ""
    },
    "status": {
      "description": "A pre-defined string indicating whether the original batch request succeeded, failed, was a mix of successes and failures, or was cancelled.  Allowable values are:<ul><li>failure - Failure means the whole batch failed.</li><li>mixed - Mixed means that it is a mixture of successes and failures.</li><li>success - Success means that the whole batch request was successful.</li><li>cancelled = Cancelled means the map abandoned processing of the message and remains unchanged.</li></ul>",
      "defaultValue": "",
	  "allowableValues" : "failure, mixed, success, cancelled"
    },
    "details": {
      "description": "Details relevant to the completion of the messages sent over the map.feature.edit, map.feature.draw, and map.get channels. Specific object formats are listed under map.message.complete section.",
      "defaultValue": ""
    },
    "failures": {
      "description": "An array of objects that define what, if any, original request message payloads have failed to be executed.  If all message payloads associated with the identified transaction were executed successfully, this MUST return an empty array",
      "defaultValue": "",
      "properties": {
        "failureObject": {
          "description": "An object that defines a specific failure",
          "defaultValue": "",
          "properties": {
            "payload": {
              "description": "The payload from the original request message that failed to properly execute.",
              "defaultValue": ""
            },
            "message": {
              "description": "A message indicating why the requested transaction failed or partially failed.",
              "defaultValue": ""
            }
          }
        }
      }
    }
  }
};
cmapi.channel["map.message.progress"].description = {
  "description": "Allows the Map Widget to report progress during the processing of a message.  If a widget receives a map.message.progress message but does not have a record of sending a message with the matching messageId, then the widget should ignore the message.  Note that not all channels that support a messageId will report progress between when the message is sent and the return of the map.message.complete.  See each channel’s definition for map.message.progress details object so see if the channel supports progress messages.  Multiple map.message.progress events may be sent for a single message. E.g., every time a new point is added to a line during the processing of a map.feature.draw message, a map.message.progress message will be sent with the latest geometry of the line being drawn as shown in Example 1 below.",
  "properties": {
    "messageId": {
      "description": "A globally unique ID that identifies the particular message or message batch that progress is being reported on.",
      "defaultValue": ""
    },
    "originatingChannel": {
      "description": "This property SHALL contain the channel name of the original request. It is intended to provide guidance as to the content of the details property.",
      "defaultValue": ""
    },
    "details": {
      "description": "Details relevant to the completion of the messages sent over the map.feature.edit, map.feature.draw channels. Specific object formats are listed under map.message.progress section.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.overlay.cluster.activate"].description = {
  "description": "Activate the clustering rule for the specified overlay.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the clustering rule is to be activated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
      "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.overlay.cluster.deactivate"].description = {
  "description": "Deactivate the clustering rule for a specified overlay.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the clustering rule is to be deactivated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.overlay.cluster.remove"].description = {
  "description": "Remove clustering rule from the specified overlay.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay where the clustering rule is to be removed from. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
      "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.overlay.cluster.set"].description = {
  "description": "Sets the clustering rule for a specified overlay.",
  "properties": {
    "threshold": {
      "description": "The minimum number of features to form a cluster.  Default value is 2.",
      "defaultValue": 2
    },
    "distance": {
      "description": "Pixel distance between features that should be considered a single cluster. Default is 50.",
      "defaultValue": 50
    },
    "clusterStyle": {
      "description": "Styling information to be applied to cluster objects. All string based values (i.e., label, title, description, iconStyle.url) MUST support replacement as detailed in Appendix A.",
      "defaultValue": "",
      "properties": {
        "label": {
          "description": "The label to be placed on the clustered item. This SHOULD be rendered adjacent to an icon when using iconStyle or inside the point when using pointStyle. If no value is specified, then the map MUST NOT display a label.",
          "defaultValue": ""
        },
        "title": {
          "description": "The title used on the info bubble when the clustered item is clicked. If no value is specified, then the info bubble MUST NOT contain a title.  If a value is specified, then the title MUST be located at the top of the info bubble.",
          "defaultValue": ""
        },
        "summary": {
          "description": "The summary is specific to the cluster as a whole, and is used on the info bubble when the clustered item is clicked. If no value is specified, then the info bubble MUST NOT contain a summary. If a value is specified, the summary MUST be located below the title and above the description in the info bubble.",
          "defaultValue": ""
        },
        "description": {
          "description": "The description used on the info bubble when the clustered item is clicked. If no value is specified, then the pop-up bubble SHOULD contain a roll-up description of all clustered items based on default roll-up behavior of the map implementation. Whether specified or not, the description MUST be located below the summary in the info bubble. \n\r Examples of default roll-up behavior: the default roll-up description could be a list of items in the cluster by element name (e.g., element name in KML). When a user clicks the title of one of the items, the info bubble could display additional details of the item.  In addition, the bubble could simply contain a table or listing of all items in the cluster.",
          "defaultValue": ""
        },
        "pointStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "color": {
              "description": "Object representing CSS3 RGBA.  No value sent results in default settings on the map.  See http://www.w3.org/wiki/CSS3/Color/RGBA for more info on RGBA. ",
              "defaultValue": "",
              "properties": {
                "r": {
                  "description": "Integer value between 0 and 255 for red.",
                  "defaultValue": ""
                },
                "g": {
                  "description": "Integer value between 0 and 255 for green.",
                  "defaultValue": ""
                },
                "b": {
                  "description": "Integer value between 0 and 255 for blue.",
                  "defaultValue": ""
                },
                "a": {
                  "description": "Numeric value between 0.0 and 1.0 for alpha.",
                  "defaultValue": ""
                }
              }
            },
            "radius": {
              "description": "Integer value representing the radius of the clustered point in pixels. Default value is 6.",
              "defaultValue": 6
            }
          }
        },
        "iconStyle": {
          "description": "",
          "defaultValue": "",
          "properties": {
            "url": {
              "description": "URL to an image file that will be used for the icon for a point.  If no URL is provided, result will be map’s default icon.",
              "defaultValue": ""
            }
          }
        }
      }
    },
    "overlayId": {
      "description": "The ID of the overlay where the clustering rule is to be applied. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.overlay.create"].description = {
  "description": "Create an overlay into which data can be aggregated.",
  "properties": {
    "name": {
      "description": "The name of the overlay. If not included, the overlayId is used as the name. Note that overlay names do not have to be unique and are intended for display purposes only."
    },
    "overlayId": {
      "description": "The unique ID of the new overlay. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will have no effect. Note that overlay IDs must be unique even across multiple parent overlays.",
	  "defaultValue": "sending widget's ID"
    },
    "parentId": {
      "description": "The ID of the parent overlay in which to create this overlay. If an overlay with an ID of parentId does not exist, a new overlay will be created with an ID of parentId, and the parentage of the overlay identified by overlayId will be set to the newly created parent overlay. If parentId is not provided or set to an empty string, the overlay SHALL become a top level overlay."
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message.  This allows for extending this channel's message without inadvertently corrupting the CMAPI specified payload of the message."
    }
  }
};
cmapi.channel["map.overlay.features.get"].description = {
  "description": "Request the full feature data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
  "properties": {
    "features": {
      "description": "An array of objects with a featureId and an overlayId representing the feature to be retrived",
      "defaultValue": "",
      "properties": {
        "overlayId": {
          "description": "The overlayId that currently contains the feature.",
          "defaultValue": ""
        },
        "featureId": {
          "description": "The id of the feature you wish to retrieve.",
          "defaultValue": ""
        }
      }
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.overlay.get"].description = {
  "description": "Request the full set of data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
  "properties": {
    "overlays": {
      "description": "An array of objects with a featureId and an overlayID representing the feature to be retrived",
      "defaultValue": "",
      "properties": {
        "overlayId": {
          "description": "The overlayId that currently contains the feature.",
          "defaultValue": ""
        }
      }
    },
    "messageId": {
      "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.overlay.hide"].description = {
  "description": "Hide existing overlay on the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay to be hidden. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. ",
	  "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.overlay.remove"].description = {
  "description": "Remove entire overlay from the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay to be removed. If no overlayId is included, default overlay with ID equal to sending widget's ID is assumed. ",
	  "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.overlay.show"].description = {
  "description": "Show existing overlay on the map.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay to be shown. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    }
  }
};
cmapi.channel["map.overlay.update"].description = {
  "description": "Update the name an existing overlay or move the overlay to another parent overlay.",
  "properties": {
    "name": {
      "description": "The new name of the overlay. Note that overlay names do not have to be unique and are intended for display purposes only.",
      "defaultValue": ""
    },
    "overlayId": {
      "description": "The unique ID of the overlay being updated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will update that overlay. If an overlay with the given ID does not exist, an error is generated.  Note that overlay IDs MUST be unique even across multiple parent overlays.",
      "defaultValue": "sending widget's ID"
    },
    "parentId": {
      "description": "The ID of the parent overlay that is associated with this overlay.  If no ID is provided, the overlay will keep its existing parentage.  If a parentId is provided, the parentage of the overlay will be changed to the new parentId.  If an overlay with an ID of parentId does not exist, a new overlay will be created and the parentage of the overlay identified by overlayId will be changed to the newly created parent overlay. If this field is set to an empty string, the overlay SHALL become a top level overlay."
    },
    "properties": {
      "description": "A free form object that can contain any additional JSON objects or elements to send with this message. This allows for extending this channel's message without polluting or conflicting with the CMAPI specified payload of the message.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.status.about"].description = {
  "description": "Send out static information about the map implementation",
  "properties": {
    "version": {
      "description": "A comma delimited list of the version numbers of the Common Map Widget API that this map widget supports.",
      "defaultValue": "",
	  "allowableValues" : "1.0, 1.1, 1.2, 1.3"
    },
    "type": {
      "description": "The type of map in the map widget.  Allowable values are 2-D, 3-D, or other.",
      "defaultValue": "",
	  "allowableValues" : "2-D, 3-D, other"
    },
    "widgetName": {
      "description": "The registered name of the map widget which is consistent across all version of OWF and cannot change during a user's session. ",
      "defaultValue": ""
    },
    "instanceName": {
      "description": "The name of the widget on the users dashboard.  This name can be changed by the end user and by the widget developer in code so this name may change during a user's session.  ",
      "defaultValue": ""
    },
    "universalName": {
      "description": "The universal name of the map widget set in the widget registration.  This is not available in all versions of OWF.",
      "defaultValue": ""
    },
    "extensions": {
      "description": "An array of optional extensions that the widget supports.  Allowable values are intents, clustering, userManipulation, and dragAndDrop.  If no extensions are supported, then an empty array SHALL be sent.",
      "defaultValue": "",
	  "allowableValues" : "intents, clustering, userManipulation, dragAndDrop"
    }
  }
};
cmapi.channel["map.status.format"].description = {
  "description": "Send out the list of data formats that the map widget supports; in other words, this map implementation supports the following feature data formats.  CMAPI allows any map implementation to provide additional formats in addition to what CMAPI defines.  CMAPI Core requires KML, GeoJSON, and WMS. CMAPI provides documented optional extensions such as MIL-STD-2525 symbols.  The definitions of those extensions also define the specific string to be included in the returned format array if these additional formats are supported.  Formats not specified in CMAPI can also be added to the formats array allowing extensions for your specific implementation.",
  "properties": {
    "formats": {
      "description": "An array of the formats that this map supports. Note that for this version of the Common Map Widget API, all map implementations MUST support 'kml', 'geojson' and 'wms'.  Additional map formats MAY be supported.",
      "defaultValue": ["kml"],
	  "allowableValues" : "kml, geojson, wms"
    }
  }
};
cmapi.channel["map.status.initialization"].description = {
  "description": "To send notification of map events including the readiness, initialization and teardown of the map.",
  "properties": {
    "status": {
      "description": "Indicates the current state of the map.  This can be one of the following options:  <ol><li>init - means the map has been launched but is not ready to begin accepting commands.</li><li>ready -  means the map is ready to begin accepting commands.  A map will be ready once it has finished loading.</li><li>tearDown - indicates the user has closed the map and it is no longer available to use.</li><li>mapSwapInProgress - A map swap process has started. A 'ready' status is issued when the process completes.</li></ol>",
      "defaultValue": "",
	  "allowableValues" : "init, ready, tearDown, mapSwapInProgress"
    }
  }
};
cmapi.channel["map.status.request"].description = {
  "description": "Request current status from the map. Map will send out requested map.status.xyz messages in response.",
  "properties": {
    "types": {
      "description": "An array of status types being requested. Map widgets MUST support status types of 'about', 'format', 'selected', 'view', <span class=\"updatedContent\">and 'initialization' and MUST respond</span> with the applicable status message (e.g., map.status.about, map.status.format, map.status.selected, map.status.view, <span class=\"updatedContent\">and/or map.status.initialization<span>). If the types attribute is not included, all status messages MUST be generated.",
      "defaultValue": "",
	  "allowableValues" : "about, format, selected, view, initialization"
    }
  }
};
cmapi.channel["map.status.selected"].description = {
  "description": "Send out the list of currently selected features.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay which contains the selected objects.   If the list of selected objects spans multiple overlays, then the payload will be an array of messages – one message for each overlay that contains selected objects.",
      "defaultValue": ""
    },
    "selectedFeatures": {
      "description": "An array of features from the identified overlay that are currently selected.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.status.view"].description = {
  "description": "Send out the current status of the map view",
  "properties": {
    "bounds": {
      "description": "Bounding box of area visible on map.",
      "defaultValue": "",
      "properties": {
        "southWest": {
          "description": "Southwestern corner of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        },
        "northEast": {
          "description": "Northeastern corner of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        }
      }
    },
    "center": {
      "description": "The current center of the map",
      "defaultValue": "",
      "properties": {
        "lat": {
          "description": "The latitude of the location that was clicked",
          "defaultValue": ""
        },
        "lon": {
          "description": "The longitude of the location that was clicked",
          "defaultValue": ""
        }
      }
    },
    "range": {
      "description": "The distance in meters from the map.  For a 2D map this may be translated to the closest zoom level.  For a 3D map it should be interpreted as the camera's distance in meters from the center of the map - which is essentially the camera's altitude when looking straight down.",
      "defaultValue": ""
    },
    "requester": {
      "description": "ID of client that requested this status message be sent (if any).  If no requester, message is being sent due to a map view change",
      "defaultValue": ""
    },
    "time": {
      "description": "The current center of the map",
      "defaultValue": "",
      "properties": {
        "timeSpan": {
          "description": "An single timespan object with a begin dateTime and end dateTime property representing the span of time the map visualization is filtering",
          "defaultValue": ""
        },
        "timeSpans": {
          "description": "An array of timespan objects with a begin dateTime and end dateTime property representing the spans of time the map visualization is filtering",
          "defaultValue": ""
        },
        "timeStamp": {
          "description": "A point in time representing the map being in a filter mode with a specific point in time set",
          "defaultValue": ""
        }
      }
    }
  }
};
cmapi.channel["map.view.area.selected"].description = {
  "description": "Send a message indicating the user has drag selected a rectangular area (bbox) on the map.  This can be used to notify widgets that the user is interested in this particular area of the current view.",
  "properties": {
    "bounds": {
      "description": "Bounding box of area selected on map",
      "defaultValue": " ",
      "properties": {
        "southWest": {
          "description": "Bottom right of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        },
        "northEast": {
          "description": "Top left of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        }
      }
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are 'right', 'left', and 'middle'.  Default value is 'left'.",
      "defaultValue": "left"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are 'alt', 'ctrl', 'shift', and 'none'. Default value is 'none'.",
      "defaultValue": ["none"]
    }
  }
};
cmapi.channel["map.view.center.bounds"].description = {
  "description": "Center the map on a particular bounding box. The map may also be zoomed to show the entire bounds (if possible) or to show a given range.",
  "properties": {
    "bounds": {
      "description": "Bounding box of area to be centered in map.",
      "defaultValue": "",
      "properties": {
        "southWest": {
          "description": "Southwestern corner of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        },
        "northEast": {
          "description": "Northeastern corner of the bounds",
          "defaultValue": "",
          "properties": {
            "lat": {
              "description": "The latitude value of the point",
              "defaultValue": ""
            },
            "lon": {
              "description": "The longitude value of the point",
              "defaultValue": ""
            }
          }
        }
      }
    },
    "zoom": {
      "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.view.center.feature"].description = {
  "description": "Center the map on a particular feature. The map may also be zoomed to show the entire feature (if possible) or to show a given range.",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay overlay where the feature to be centered on is found. If no overlayId is included, default overlay with ID equal to sending widget ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "featureId": {
      "description": "The ID of the feature to center on",
      "defaultValue": ""
    },
    "zoom": {
      "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to best fit the feature in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.view.center.location"].description = {
  "description": "Center the map on a particular location. The map may also be zoomed as close as possible to the location or to a given range",
  "properties": {
    "location": {
      "description": "Location to be centered in map.",
      "defaultValue": "",
      "properties": {
        "lat": {
          "description": "The latitude value of the point",
          "defaultValue": ""
        },
        "lon": {
          "description": "The longitude value of the point",
          "defaultValue": ""
        }
      }
    },
    "zoom": {
      "description": "If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.view.center.overlay"].description = {
  "description": "Center the map on a particular overlay. The map may also be zoomed to show the entire overlay (if possible) or to show a given range",
  "properties": {
    "overlayId": {
      "description": "The ID of the overlay to center on. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed.",
      "defaultValue": "sending widget's ID"
    },
    "zoom": {
      "description": "Attribute that defines the zoom behaviour of the map. If auto, zoom will adjust to best fit the overlay in the user's viewable area.  If a number, map will zoom to specified range in meters.  If no zoom attribute is included, no zoom is performed.",
      "defaultValue": ""
    }
  }
};
cmapi.channel["map.view.clicked"].description = {
  "description": "'Click', or report that map was clicked.  Maps MUST send this message when a user clicks the maps viewport.  It is optional for the map implementor if they will subscribe to this channel and perform any actions when receiving this message.",
  "properties": {
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
      "defaultValue": "left",
	  "allowableValues" : "right, left, middle"
    },
    "type": {
      "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
      "defaultValue": "single",
	  "allowableValues" : "single, double"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
      "defaultValue": "none",
	  "allowableValues" : "alt, ctrl, shift, none"
    }
  }
};
cmapi.channel["map.view.mousedown"].description = {
  "description": "Report that a mouse down event was triggered from the map",
  "properties": {
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
      "defaultValue": "left"
    },
    "type": {
      "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
      "defaultValue": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
      "defaultValue": ["none"]
    }
  }
};
cmapi.channel["map.view.mouseup"].description = {
  "description": "Report that a mouse up event was triggered from the map",
  "properties": {
    "lat": {
      "description": "The latitude of the location that was clicked",
      "defaultValue": ""
    },
    "lon": {
      "description": "The longitude of the location that was clicked",
      "defaultValue": ""
    },
    "button": {
      "description": "Which mouse button was clicked.  Allowable values are right, left, and middle.  For backwards compatibility, if this attribute is not populated it MUST be treated as a left mouse click the same as if it were populated with left.",
      "defaultValue": "left"
    },
    "type": {
      "description": "The type of click event. Allowable values are single and double.  For backwards compatibility, if this attribute is not populated it MUST be assumed to be a single mouse click and treated the same as if it were populated with single.",
      "defaultValue": "single"
    },
    "keys": {
      "description": "An array of keys pressed during the click event.  Allowable values are alt, ctrl, shift, and none. For backwards compatibility, if this attribute is not populated it MUST be assumed that no additional keys were pressed and behave the same way as if it were populated with none.",
      "defaultValue": ["none"]
    }
  }
};
cmapi.channel["map.view.zoom"].description = {
  "description": "Zoom the map to a particular range",
  "properties": {
    "range": {
      "description": "The distance in meters from the map.  For a 2D map this may be translated to the closest zoom level.  For a 3D map it should be interpreted as the camera's distance in meters from the center of the map - which is essentially the camera's altitude when looking straight down.",
      "defaultValue": ""
    }
  }
};
