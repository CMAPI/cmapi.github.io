var cmapi2 = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "version": "2.0.0.ALPHA.1",
  "primitives": {
    "IGeoAltitudeMode": {
      "description": "Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted",
      "properties": {
        "altitudeMode": {
          "enum": [
            "CLAMP_TO_GROUND",
            "RELATIVE_TO_GROUND",
            "ABSOLUTE"
          ],
          "description": "Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted"
        }
      }
    },
    "IGeoTimeSpan": {
      "type": "object",
      "description": "Defines a range in time that represents a beginning and end.  This can be used to describe things such as availability, visibility, active/inactive for provided periods of time.  From a filtering point of view, if a time filter is applied a feature would only be visible on a map view within the defined timespan(s)",
      "properties": {
        "begin": {
          "type": "string",
          "format": "date-time",
          "description": "Starting date time value as defined by http://tools.ietf.org/html/rfc3339"
        },
        "end": {
          "type": "string",
          "format": "date-time",
          "description": "Ending date time value as defined by http://tools.ietf.org/html/rfc3339"
        }
      },
      "required": [
        "begin",
        "end"
      ]
    },
    "IGeoPosition": {
      "type": "object",
      "description": "Defines a specific geospatial position derived using WGS-84 latitude longitude and alitude in meters",
      "properties": {
        "latitude": {
          "type": "number",
          "description": "Latitude value in degrees decimal (i.e. 23.4567) derived from WGS-84",
          "minimum": -90,
          "maximum": 90,
          "default": 0
        },
        "longitude": {
          "type": "number",
          "description": "Longitude value in degrees decimal (i.e. 23.4567) derived from WGS-84",
          "minimum": -180,
          "maximum": 180,
          "default": 0
        },
        "altitude": {
          "type": "number",
          "description": "A value in meters representing the altitude of the associated position.  This will be interpreted base on the altitudeMode provided in the IGeoAltitudeMode enumeration",
          "default": 0
        }
      },
      "required": [
        "latitude",
        "longitude",
        "altitude"
      ]
    },
    "IGeoPositionGroup": {
      "type": "object",
      "description": "An ordered list of positions representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single position",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoAltitudeMode"
        },
        {
          "properties": {
            "positions": {
              "type": "array",
              "description": "An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions",
              "items": {
                "$ref": "#/primitives/IGeoPosition"
              }
            },
            "timeStamp": {
              "type": "string",
              "format": "date-time",
              "description": "Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339"
            },
            "timeSpans": {
              "type": "array",
              "description": "Defines one or more periods of time something occured, or was active.",
              "items": {
                "$ref": "#/primitives/IGeoTimeSpan"
              }
            }
          },
          "required": [
            "positions"
          ]
        }
      ]
    },
    "IGeoPositionHistory": {
      "type": "object",
      "description": "An ordered collection of IGeoPositionGroup objects",
      "properties": {
        "positionHistory": {
          "type": "array",
          "items": {
            "$ref": "#/primitives/IGeoPositionGroup"
          }
        }
      }
    },
    "IGeoCamera": {
      "type": "object",
      "description": "Defines the virtual camera that views the scene. This element defines the position of the camera relative to the Earth's surface as well as the viewing direction of the camera. The camera position is defined by <longitude>, <latitude>, <altitude>, and either <altitudeMode>. The viewing direction of the camera is defined by <azimuth>, <tilt>, and <roll>. An IGeoCamera provides full six-degrees-of-freedom control over the view, so you can position the Camera in space and then rotate it around the X, Y, and Z axes. Most importantly, you can tilt the camera view so that you're looking above the horizon into the sky. The order of rotation is important. By default, the camera is looking straight down the −Z axis toward the Earth. Before rotations are performed, the camera is translated along the Z axis to <altitude>. The order of transformations is as follows: <altitude> - translate along the Z axis to <altitude><azimuth> - rotate around the Z axis.<tilt> - rotate around the X axis.<roll> - rotate around the Z axis (again). Note that each time a rotation is applied, two of the camera axes change their orientation.",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "$ref": "#/primitives/IGeoAltitudeMode"
        },
        {
          "$ref": "#/primitives/IGeoPosition"
        },
        {
          "properties": {
            "tilt": {
              "type": "number",
              "description": "Rotation, in degrees, of the camera around the X axis. A value of 0 indicates that the view is aimed straight down toward the earth (the most common case). A value for 90 for <tilt> indicates that the view is aimed toward the horizon. Values greater than 90 indicate that the view is pointed up into the sky. Values for <tilt> are clamped at +180 degrees",
              "minimum": 0,
              "maximum": 179,
              "default": 0
            },
            "roll": {
              "type": "number",
              "description": "Rotation, in degrees, of the camera around the Z axis. Values range from −180 to +180 degrees",
              "minimum": 0,
              "maximum": 179,
              "default": 0
            },
            "heading": {
              "type": "number",
              "description": "Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees",
              "minimum": 0,
              "maximum": 359,
              "default": 0
            }
          }
        }
      ],
      "required": [
        "tilt",
        "roll",
        "heading"
      ]
    },
    "IGeoLookAt": {
      "type": "object",
      "description": "The LookAt element positions the 'camera' in relation to the IGeoPosition that is being viewed",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "$ref": "#/primitives/IGeoAltitudeMode"
        },
        {
          "$ref": "#/primitives/IGeoPosition"
        },
        {
          "properties": {
            "tilt": {
              "type": "number",
              "description": "Rotation, in degrees, of the camera around the X axis. A value of 0 indicates that the view is aimed straight down toward the earth (the most common case). A value for 90 for <tilt> indicates that the view is aimed toward the horizon. Values greater than 90 indicate that the view is pointed up into the sky. Values for <tilt> are clamped at +180 degrees. ",
              "minimum": 0,
              "maximum": 179,
              "default": 0
            },
            "heading": {
              "type": "number",
              "description": "Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees",
              "minimum": 0,
              "maximum": 359.99,
              "default": 0
            },
            "range": {
              "type": "number",
              "description": "Distance in meters from the point specified by IGeoPosition to the LookAt position",
              "default": 1000000
            }
          }
        }
      ],
      "required": [
        "tilt",
        "heading",
        "range"
      ]
    },
    "IGeoBounds": {
      "type": "object",
      "description": "A rectangular box representing a geospatial area",
      "properties": {
        "west": {
          "type": "number",
          "description": "The western most longitude of the rectangle",
          "minimum": -180,
          "maximum": 180
        },
        "east": {
          "type": "number",
          "description": "The eastern most longitude of the rectangle",
          "minimum": -180,
          "maximum": 180
        },
        "north": {
          "type": "number",
          "description": "The nothern most latitude of the rectangle",
          "minimum": -90,
          "maximum": 90
        },
        "south": {
          "type": "number",
          "description": "The southern most latitude of the rectangle",
          "minimum": -90,
          "maximum": 90
        }
      },
      "required": [
        "west",
        "east",
        "north",
        "south"
      ]
    },
    "IGeoView": {
      "type": "object",
      "description": "List of objects that describe the overall view of a map",
      "properties": {
        "camera": {
          "$ref": "#/primitives/IGeoCamera"
        },
        "lookAt": {
          "$ref": "#/primitives/IGeoLookAt"
        },
        "bounds": {
          "$ref": "#/primitives/IGeoBounds"
        },
        "scale": {
          "type": "number",
          "description": "Approximate map scale of current view"
        }
      }
    },
    "IGeoColor": {
      "type": "object",
      "description": "Object containing three color channels for red, green, and blue as well as an alpha channel for opacity",
      "properties": {
        "red": {
          "type": "number",
          "format": "int",
          "description": "Value for red color channel. Integer ranging between 0 and 255",
          "minimum": 0,
          "maximum": 255,
          "default": 0
        },
        "green": {
          "type": "number",
          "format": "int",
          "description": "Value for green color channel. Integer ranging between 0 and 255",
          "minimum": 0,
          "maximum": 255,
          "default": 0
        },
        "blue": {
          "type": "number",
          "format": "int",
          "description": "Value for blue color channel. Integer ranging between 0 and 255",
          "minimum": 0,
          "maximum": 255,
          "default": 0
        },
        "alpha": {
          "type": "number",
          "description": "Value for alpha channel to control opacity. Decimal ranging from 0 to 1",
          "minimum": 0,
          "maximum": 1,
          "default": 0.8
        }
      },
      "required": [
        "red",
        "green",
        "blue",
        "alpha"
      ]
    },
    "IGeoStrokeStyle": {
      "type": "object",
      "description": "Style attributes for strokes",
      "properties": {
        "strokeColor": {
          "$ref": "#/primitives/IGeoColor"
        },
        "stipplingPattern": {
          "type": "number",
          "format": "short",
          "description": "specifies a number whose lower 16 bits define a pattern of which pixels in the image are white and which are transparent. Each bit corresponds to a pixel, and the pattern repeats after every n*16 pixels, where n is the factor. For example, if the factor is 3, each bit in the pattern is repeated three times before using the next bit",
          "default": 0
        },
        "stipplingFactor": {
          "type": "number",
          "format": "int",
          "description": "specifies the number of times each bit in the pattern is repeated before the next bit is used. For example, if the factor is 3, each bit is repeated three times before using the next bit. The specified factor must be either 0 or an integer greater than 0. A factor of 0 indicates no stippling",
          "langType": {
            "java": "int"
          },
          "default": 0
        },
        "strokeWidth": {
          "type": "number",
          "description": "Width of the stroke on the screen in pixels",
          "default": 3
        }
      },
      "required": [
        "strokeColor",
        "strokePattern",
        "strokeWidth"
      ]
    },
    "IGeoFillStyle": {
      "type": "object",
      "description": "Style properties for the fill of a feature.  This can either be the interior of a shape such as a polygon or circle, or can also be applied to the fill of an a MIL-STD-2525 Icon to override the default affiliation color",
      "properties": {
        "fillColor": {
          "$ref": "#/primitives/IGeoColor"
        },
        "fillPattern": {
          "description": "Fill patterns allow for alternatives to a solid fill color",
          "enum": [
            "solid",
            "hatched",
            "crossHatched"
          ],
          "default": "solid"
        }
      },
      "required": [
        "fillColor",
        "fillPatern"
      ]
    },
    "IGeoIconStyle": {
      "type": "object",
      "description": "Style attributes associated with icons",
      "properties": {
        "size": {
          "type": "number",
          "description": "Size in pixels at 96 ppi.  If the system rendering the text is running at a screen resolution other than 96 ppi, a translation should be done to make the icon larger of smaller to represent the same amount of physical space as if the screen were at 96 ppi. If the icon is not square, the size will represent the larger value of the rectangle",
          "minimum": 1,
          "default": 32
        },
        "offSetX": {
          "type": "number",
          "description": "X Offest of icon in pixels derived from the lower left point of the icon",
          "default": 0
        },
        "offSetY": {
          "type": "number",
          "description": "X Offest of icon in pixels derived from the lower left point of the icon",
          "default": 0
        }
      },
      "required": [
        "size",
        "offSetX",
        "offSetY"
      ]
    },
    "IGeoLabelStyle": {
      "type": "object",
      "description": "Style properties for the optional text labels that may display next to feature data on a map",
      "properties": {
        "size": {
          "type": "number",
          "description": "Size of the font in pixels asumming 96 ppi. If the system rendering the text is running at a screen resolution other than 96 ppi, a translation should be done to make the text larger of smaller to represent the same amount of physical space as if the screen were at 96 ppi.  For example if the screen resolution of the target device rednering the text is 126 ppi, you would use the following formula to get a proper pixel value: ( devicePixelsPerInch / 96 ) x IGeoLabelStyle.size = ActucalPixelSize or ( 126 / 96 ) * 12 = 16",
          "default": 12
        },
        "color": {
          "$ref": "#/primitives/IGeoColor"
        },
        "outlineColor": {
          "$ref": "#/primitives/IGeoColor"
        },
        "justification": {
          "description": "Position to align text in relation to the associated geospatial coordinate",
          "enum": [
            "LEFT",
            "CENTER",
            "RIGHT"
          ],
          "default": "LEFT"
        },
        "fontFamily": {
          "type": "string",
          "description": "Name of the font family to be used.  In the case that the system rendering this text does not have the font family, it shall use a defalt font and still display the text"
        },
        "typeface": {
          "description": "Typeface design to be used for the font",
          "enum": [
            "REGULAR",
            "BOLD",
            "ITALIC",
            "BOLDITALIC"
          ],
          "default": "REGULAR"
        }
      },
      "required": [
        "scale"
      ]
    },
    "IGeoBase": {
      "type": "object",
      "abstract": true,
      "description": "This is the base object all containers and features are derived from",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map",
          "default": ""
        },
        "geoId": {
          "type": "string",
          "description": "The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        },
        "geoType": {
          "type": "string",
          "description": "This is a value that will be set to a unique string for the spefic type",
          "readOnly": true
        },
        "dataProviderId": {
          "type": "string",
          "description": "This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data."
        }
      },
      "required": [
        "name",
        "geoId",
        "description"
      ]
    },
    "IGeoContainer": {
      "type": "object",
      "description": "Geo containers are designed to be a base interface for anything that can contain a children list of IGeoBase objects.  This facilitates the concept of Containers such as overlays, as well as features such as a point that can contain child features.",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "properties": {
            "children": {
              "type": "array",
              "description": "A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.",
              "readOnly": true,
              "items": {
                "$ref": "#/primitives/IGeoInstance"
              }
            },
            "readOnly": {
              "type": "boolean",
              "description": "Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)",
              "default": false
            },
            "description": {
              "type": "string",
              "description": "A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.",
              "default": ""
            },
            "properties": {
              "type": "object",
              "description": "A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.",
              "readOnly": true,
              "langType": {
                "java": "java.util.HashMap<String, String>"
              }
            }
          },
          "required": [
            "children"
          ]
        }
      ]
    },
    "IGeoService": {
      "description": "",
      "abstract": true,
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "serviceURL": {
            "type": "string"
          }
        }
      ]
    },
    "IGeoRenderable": {
      "type": "object",
      "abstract": true,
      "allOf": [
        {
          "$ref": "#/primitives/IGeoContainer"
        },
        {
          "$ref": "#/primitives/IGeoPositionGroup"
        },
        {
          "properties": {
            "labelStyle": {
              "$ref": "#/primitives/IGeoLabelStyle"
            },
            "strokeStyle": {
              "$ref": "#/primitives/IGeoStrokeStyle"
            },
            "fillStyle": {
              "$ref": "#/primitives/IGeoFillStyle"
            },
            "extrude": {
              "type": "boolean",
              "description": "A curtain is formed below each point or line segment and extends to the ground",
              "default": false
            },
            "tessellate": {
              "type": "boolean",
              "description": "Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.",
              "default": true
            },
            "buffer": {
              "type": "number",
              "description": "Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)",
              "default": 0
            },
            "azimuth": {
              "type": "number",
              "description": "The direction a feature will be oriented in degrees",
              "minimum": 0,
              "maximum": 359,
              "default": 0
            },
            "pathType": {
              "enum": [
                "GREAT_CIRCLE",
                "LINEAR",
                "RHUMB_LINE"
              ],
              "description": "Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE",
              "default": "GREAT_CIRCLE"
            }
          },
          "required": [
            "labelStyle"
          ]
        }
      ]
    },
    "IGeoInstance": {
      "description": "Intances allow for specific state within a container such as visibility while still referenceing a single shared renderable.  For example a single polygon may appear as a child of two different containers on the same cmapi2.  In this case there will two IGeoRenderableInstances (one for each container) and they can have seperate visibility state.  If all instances have a visibility of false, the map should hide the IGeoRenderable, else if  one or more of the instances have a visibility of true then the IGeoRenderable should be visible on the cmapi2.  Instances are used as weak refernces to return specfic state based on a specific relationship with a parent container.",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "properties": {
            "parentContainerId": {
              "type": "string",
              "description": "ID of the IGeoContainer this IGeoInstance is associcated with.",
              "default": false
            },
            "visibility": {
              "type": "boolean",
              "description": "Visibility of this instance in relationship to its parent container.",
              "default": false
            }
          }
        }
      ]
    },
    "IGeoPoint": {
      "description": "A feature to be represented as a geospatial location with an icon",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "iconStyle": {
              "$ref": "#/primitives/IGeoIconStyle"
            },
            "iconURI": {
              "type": "string",
              "description": "Indicates the URL to request the icon image image or dataURI encoding of the icon image embedded as the value defined by RFC 2397 (see https://tools.ietf.org/html/rfc2397)"
            }
          },
          "required": [
            "iconStyle"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "POINT"
        }
      }
    },
    "IGeoText": {
      "description": "A text annotation with a geospatial location",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "TEXT"
        }
      }
    },
    "IGeoPolygon": {
      "description": "A polygon represented by three or more geospatial locations",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "innerBoundaries": {
              "type": "array",
              "description": "Defines one or more inner boundaries for the polygon which will act as exclusion areas, or holes in the polygon",
              "items": {
                "$ref": "#/primitives/IGeoPositionGroup"
              }
            }
          }
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "POLYGON"
        }
      }
    },
    "IGeoPath": {
      "description": "A path AKA polyline represented by line connecting two or more geospatial locations or vertices",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "PATH"
        }
      }
    },
    "IGeoCircle": {
      "description": "A circular based form a single geospatial location as the center with a radius in meters",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "radius": {
              "description": "Radius of the circle in meters",
              "type": "number",
              "default": 100
            }
          },
          "required": [
            "radius"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "CIRCLE"
        }
      }
    },
    "IGeoEllipse": {
      "description": "An ellipse represented by a geospatial center point location with a semi-major and semi-minor radius in meters",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "semiMajor": {
              "description": "The magnitude of the semi-major axis - Radius of the ellipse in meters on the x axis (width)",
              "type": "number",
              "default": 150
            },
            "semiMinor": {
              "description": "The magnitude of the semi-minor axis - Radius of the ellipse in meters on the y axis (height)",
              "type": "number",
              "default": 75
            }
          },
          "required": [
            "semiMajor",
            "semiMinor"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "ELLIPSE"
        }
      }
    },
    "IGeoRectangle": {
      "description": "A geospatial rectangle represented by a center point location, width and height in meters",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "width": {
              "description": "Width of the rectangle in meters on the x axis",
              "type": "number",
              "default": 150
            },
            "height": {
              "description": "Height of the rectangle in meters on the y axis",
              "type": "number",
              "default": 75
            }
          },
          "required": [
            "width",
            "height"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "RECTANGLE"
        }
      }
    },
    "IGeoSquare": {
      "description": "A geospatial square represented by a center point location and width in meters",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "width": {
              "description": "Width of the square in meters on the x and y axis ",
              "type": "number",
              "default": 100
            }
          },
          "required": [
            "width"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "SQUARE"
        }
      }
    },
    "IGeoImageOverlay": {
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "imageURI": {
              "type": "string",
              "description": "Indicates the URL to request the image or base 64 dataURI encoding of the icon image embedded as the value defined by RFC 2397 (see https://tools.ietf.org/html/rfc2397)"
            }
          }
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "IMAGE_OVERLAY"
        }
      }
    },
    "IGeoMilSymbol": {
      "description": "Feature to represent MIL-STD-2525 B and C symbols for the entire symbology standard",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "symbolStandard": {
              "description": "Version of the MIL-STD-2525 standard to use",
              "enum": [
                "MIL_STD_2525C",
                "MIL_STD_2525B"
              ],
              "default": "MIL_STD_2525C"
            },
            "symbolCode": {
              "description": "Symbol code as defined by MIL-STD-2525",
              "type": "string",
              "default": "SUGP-----------"
            },
            "modifiers": {
              "type": "object",
              "langType": {
                "java": "java.util.HashMap<IGeoMilSymbol.Modifier, String>"
              },
              "typeExtension": {
                "type": "enum",
                "name": "modifier"
              },
              "properties": {
                "A": {
                  "type": "string",
                  "enumLabel": "SYMBOL_ICON"
                },
                "B": {
                  "type": "string",
                  "enumLabel": "ECHELON"
                },
                "C": {
                  "type": "string",
                  "enumLabel": "QUANTITY"
                },
                "D": {
                  "type": "string",
                  "enumLabel": "TASK_FORCE_INDICATOR"
                },
                "E": {
                  "type": "string",
                  "enumLabel": "FRAME_SHAPE_MODIFIER"
                },
                "F": {
                  "type": "string",
                  "enumLabel": "REDUCED_OR_REINFORCED"
                },
                "G": {
                  "type": "string",
                  "enumLabel": "STAFF_COMMENTS"
                },
                "H": {
                  "type": "string",
                  "enumLabel": "ADDITIONAL_INFO_1"
                },
                "H1": {
                  "type": "string",
                  "enumLabel": "ADDITIONAL_INFO_2"
                },
                "H2": {
                  "type": "string",
                  "enumLabel": "ADDITIONAL_INFO_3"
                },
                "J": {
                  "type": "string",
                  "enumLabel": "EVALUATION_RATING"
                },
                "K": {
                  "type": "string",
                  "enumLabel": "COMBAT_EFFECTIVENESS"
                },
                "L": {
                  "type": "string",
                  "enumLabel": "SIGNATURE_EQUIPMENT"
                },
                "M": {
                  "type": "string",
                  "enumLabel": "HIGHER_FORMATION"
                },
                "N": {
                  "type": "string",
                  "enumLabel": "HOSTILE"
                },
                "P": {
                  "type": "string",
                  "enumLabel": "IFF_SIF"
                },
                "Q": {
                  "type": "string",
                  "enumLabel": "DIRECTION_OF_MOVEMENT"
                },
                "R": {
                  "type": "string",
                  "enumLabel": "MOBILITY_INDICATOR"
                },
                "R2": {
                  "type": "string",
                  "enumLabel": "SIGINT_MOBILITY_INDICATOR"
                },
                "S": {
                  "type": "string",
                  "enumLabel": "OFFSET_INDICATOR"
                },
                "T": {
                  "type": "string",
                  "enumLabel": "UNIQUE_DESIGNATOR_1"
                },
                "T1": {
                  "type": "string",
                  "enumLabel": "UNIQUE_DESIGNATOR_2"
                },
                "V": {
                  "type": "string",
                  "enumLabel": "EQUIPMENT_TYPE"
                },
                "W": {
                  "type": "string",
                  "enumLabel": "DATE_TIME_GROUP"
                },
                "W1": {
                  "type": "string",
                  "enumLabel": "DATE_TIME_GROUP_2"
                },
                "X": {
                  "type": "string",
                  "enumLabel": "ALTITUDE_DEPTH"
                },
                "Y": {
                  "type": "string",
                  "enumLabel": "LOCATION"
                },
                "Z": {
                  "type": "string",
                  "enumLabel": "SPEED"
                },
                "AA": {
                  "type": "string",
                  "enumLabel": "SPECIAL_C2_HEADQUARTERS"
                },
                "AB": {
                  "type": "string",
                  "enumLabel": "FEINT_DUMMY_INDICATOR"
                },
                "AC": {
                  "type": "string",
                  "enumLabel": "INSTALLATION"
                },
                "AD": {
                  "type": "string",
                  "enumLabel": "PLATFORM_TYPE"
                },
                "AE": {
                  "type": "string",
                  "enumLabel": "EQUIPMENT_TEARDOWN_TIME"
                },
                "AF": {
                  "type": "string",
                  "enumLabel": "COMMON_IDENTIFIER"
                },
                "AG": {
                  "type": "string",
                  "enumLabel": "AUXILIARY_EQUIPMENT_INDICATOR"
                },
                "AH": {
                  "type": "string",
                  "enumLabel": "AREA_OF_UNCERTAINTY"
                },
                "AI": {
                  "type": "string",
                  "enumLabel": "DEAD_RECKONING"
                },
                "AJ": {
                  "type": "string",
                  "enumLabel": "SPEED_LEADER"
                },
                "AK": {
                  "type": "string",
                  "enumLabel": "PAIRING_LINE"
                },
                "AL": {
                  "type": "string",
                  "enumLabel": "OPERATIONAL_CONDITION"
                },
                "AM": {
                  "type": "string",
                  "enumLabel": "DISTANCE"
                },
                "AN": {
                  "type": "string",
                  "enumLabel": "AZIMUTH"
                },
                "AO": {
                  "type": "string",
                  "enumLabel": "ENGAGEMENT_BAR"
                },
                "CC": {
                  "type": "string",
                  "enumLabel": "COUNTRY_CODE"
                },
                "SCC": {
                  "type": "string",
                  "enumLabel": "SONAR_CLASSIFICATION_CONFIDENCE"
                }
              }
            }
          },
          "required": [
            "symbolStandard",
            "symbolCode",
            "modifiers"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "MIL_SYMBOL"
        }
      }
    },
    "IGeoAirControlMeasure": {
      "description": "Air control measures (ACM) represent a three dimensional volume in the air above earth used to indicate where aircarfat should stay within, or stay out of",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoRenderable"
        },
        {
          "properties": {
            "acmType": {
              "description": "Type of air control measure to create",
              "enum": [
                "ROUTE",
                "CYLINDER",
                "ORBIT",
                "POLYGON",
                "RADARC",
                "POLYARC",
                "TRACK",
                "CURTAIN"
              ]
            },
            "attributes": {
              "type": "object",
              "langType": {
                "java": "java.util.HashMap<IGeoAirControlMeasure.Attribute, String>"
              },
              "typeExtension": {
                "type": "enum",
                "name": "attribute"
              },
              "properties": {
                "RADIUS": {
                  "type": "string"
                },
                "INNER_RADIUS": {
                  "type": "string"
                },
                "TURN": {
                  "type": "string"
                },
                "MIN_ALT": {
                  "type": "string"
                },
                "MAX_ALT": {
                  "type": "string"
                },
                "LEFT_AZIMUTH": {
                  "type": "string"
                },
                "RIGHT_AZIMUTH": {
                  "type": "string"
                },
                "WIDTH": {
                  "type": "string"
                },
                "LEFT_WIDTH": {
                  "type": "string"
                },
                "RIGHT_WIDTH": {
                  "type": "string"
                }
              }
            }
          },
          "required": [
            "acmType",
            "attributes"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "ACM"
        }
      }
    },
    "IGeoDocument": {
      "description": "File containing geospatial feature data in a known format such as KML or GeoJSON",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "properties": {
            "documentContent": {
              "description": "document content.  If the document is not text based such as GeoJSON, or KML, the documentContent property should be a base64 binary string of the document.",
              "type": "string"
            },
            "documentMIMEType": {
              "description": "MIME Type of document.  Common Types are KML (application/vnd.google-earth.kml+xml), and GeoJSON (application/vnd.geo+json)",
              "type": "string"
            }
          },
          "required": [
            "documentURI",
            "documentType"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "DOCUMENT"
        }
      }
    },
    "IGeoDocumentLink": {
      "description": "URL to a file containing geospatial feature data in a known format such as KML or GeoJSON",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "properties": {
            "documentURI": {
              "description": "URL the document should be loaded from, or a dataURI encoding of the resource embedded as the value defined by RFC 2397 (see https://tools.ietf.org/html/rfc2397)",
              "type": "string"
            },
            "documentMIMEType": {
              "description": "MIME Type of document.  Common Types are KML (application/vnd.google-earth.kml+xml), and GeoJSON (application/vnd.geo+json)",
              "type": "string"
            }
          },
          "required": [
            "documentURI",
            "documentType"
          ]
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "DOCUMENT_LINK"
        }
      }
    },
    "IGeoWMS": {
      "description": "OGC Web Map Service",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoService"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "OGC_WMS"
        }
      }
    },
    "IGeoWMTS": {
      "description": "OGC Web Map Tile Service",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoService"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "WMTS"
        }
      }
    },
    "IGeoWCS": {
      "description": "OGC Web Map Coverage Service",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoService"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "WFS"
        }
      }
    },
    "IGeoWFS": {
      "description": "OGC Web Feature Service",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoService"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "WFS"
        }
      }
    },
    "IGeoESRIRest": {
      "description": "ESRI REST Service",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoService"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "ESRI_REST"
        }
      }
    },
    "IGeoTMS": {
      "description": "Tiled Map Service",
      "allOf": [
        {
          "$ref": "#/primitives/IGeoService"
        }
      ],
      "setInhertitedDefaults": {
        "geoType": {
          "value": "TMS"
        }
      }
    },
    "IGeoClusterPointStyle": {
      "description": "Style definitons for point visualization in overlay icon clustering",
      "properties": {
        "color": {
          "$ref": "#/primitives/IGeoColor"
        },
        "radius": {
          "type": "number",
          "default": 6
        }
      }
    },
    "IGeoClusterStyle": {
      "description": "Style definitons for overlay icon clustering",
      "properties": {
        "label": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "pointStyle": {
          "$ref": "#/primitives/IGeoClusterPointStyle"
        },
        "iconStyle": {
          "$ref": "#/primitives/IGeoIconStyle"
        }
      }
    },
    "IGeoClusterStrategy": {
      "allOf": [
        {
          "$ref": "#/primitives/IGeoBase"
        },
        {
          "properties": {
            "threshold": {
              "type": "integer",
              "minimum": 2,
              "default": 2
            },
            "distance": {
              "type": "integer",
              "minimum": 1,
              "default": 50
            },
            "clusterStyle": {
              "$ref": "#/primitives/IGeoClusterStyle"
            }
          }
        }
      ]
    },
    "IGeoScreenPosition": {
      "description": "x, y screen poistion in pixels ",
      "type": "object",
      "properties": {
        "x": {
          "description": "Screen position on the x plane in pixels",
          "type": "number"
        },
        "y": {
          "description": "Screen position on the y plane in pixels",
          "type": "number"
        }
      }
    },
    "IGeoMessage": {
      "description": "Generic envelope for all messages.  The channel will dictate the object contained in the payload property.",
      "properties": {
        "channel": {
          "description": "The unique name of the channel the message is associated with",
          "protoIndex": 85,
          "type": "string"
        },
        "senderId": {
          "type": "string",
          "description": "Id of the attached client sending the message. The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid refernces by ID to break.",
          "protoIndex": 86,
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        },
        "targetId": {
          "type": "string",
          "description": "Id of the attached client sending the message. The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid refernces by ID to break.",
          "protoIndex": 86,
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        },
        "messageId": {
          "type": "string",
          "description": "The messageId is used to coorelate multiple messages that may occur as a result of another message such as acknowledgements, status, or messagin that requires multiple steps to complete an overall task. The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All messageId values that match will be treated as related messages.",
          "protoIndex": 87,
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        },
        "payload": {
          "description": "Payload dictated by the channel this message will use",
          "type": "object",
          "langType": {
            "java": "java.lang.Object",
            "js": "bytes"
          }
        }
      },
      "required": [
        "channel",
        "senderId",
        "messageId",
        "payload"
      ]
    }
  },
  "events": {
    "IGeoEvent": {
      "description": "Abstract definition of CMAPI Geo Events",
      "type": "object",
      "properties": {
        "eventType": {
          "type": "string",
          "readOnly": true
        }
      }
    },
    "IGeoUserInteractionEvent": {
      "description": "",
      "properties": {
        "position": {
          "$ref": "#/primitives/IGeoPosition"
        },
        "point": {
          "$ref": "#/primitives/IGeoScreenPosition"
        },
        "button": {
          "type": [
            "string",
            "enum"
          ],
          "enum": [
            "LEFT",
            "MIDDLE",
            "RIGHT"
          ],
          "default": "left"
        },
        "type": {
          "type": [
            "string",
            "enum"
          ],
          "enum": [
            "CLICKED",
            "DOUBLE_CLICKED",
            "LONG_PRESS",
            "MOUSE_DOWN",
            "MOUSE_UP",
            "DRAG",
            "DRAG_COMPLETE"
          ],
          "default": "single"
        },
        "keys": {
          "type": "array",
          "uniqueItems": true,
          "default": [
            "NONE"
          ],
          "items": {
            "enum": [
              "SHIFT",
              "CTRL",
              "ALT",
              "NONE"
            ]
          }
        }
      },
      "required": [
        "position",
        "point",
        "button",
        "type",
        "keys"
      ]
    }
  },
  "channels": {
    "cmapi2.overlay.create": {
      "description": "Create an overlay into which other IgeoContainer and IGeoRenerables can be contained by.  Overlays act as container for other data and have nor visual representation on a map.  Typically hiearchical lists of overlays and their child overlays and features would be displayed in a table of contents in something like a tree view.",
      "properties": {
        "overlay": {
          "$ref": "#/primitives/IGeoContainer"
        }
      }
    },
    "cmapi2.overlay.remove": {
      "description": "Provide Unique geoId of the Overlay to remove all instances of this overlay from the cmapi2.  If the overlay has been associated to more than one parent container, all of these references should be removed and all of the overlays contents should be removed.  If content within this overlay is also associated with other overlays that will remian on the map, then those items should reamin on the map untial all associations are removed.",
      "properties": {
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to be removed.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.show": {
      "description": "Set the visibility of an overlay instance to true.",
      "properties": {
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to be shown.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.hide": {
      "description": "Set the visibility of an overlay instance to false.",
      "properties": {
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to be hidden. ",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.update.name": {
      "description": "Rename an overlay",
      "properties": {
        "name": {
          "description": "New name for the overlay.",
          "type": "string"
        },
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to be renamed.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.associate": {
      "description": "Create a new association of an existing overlay to make the overlay appear as a child to the overlay refenred by the parentId.  Associations allow an overlay or feature to be refernced by more than one parent without having to maintain multiple copies of the refernced object.",
      "properties": {
        "parentId": {
          "description": "ID of the overlay to treat as the parent",
          "type": "string"
        },
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to be associated as a child .",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.disassociate": {
      "description": "Remove an association to remove the overlay defined in the IGeoInstnace to no longer appear as a child to the overlay refenred by its geoId.",
      "properties": {
        "parentId": {
          "description": "ID of the overlay to treat as the parent",
          "type": "string"
        },
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to be associated as a child .",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.cluster.set": {
      "description": "Sets the clustering rule for a specified overlay",
      "properties": {
        "IGeoClusterStrategy": {
          "description": "The IGeoClusterStrategy to be applied to the overlay",
          "$ref": "#/primitives/IGeoClusterStrategy"
        },
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to apply the cluster strategy to.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.cluster.remove": {
      "description": "Remove clustering rule from the specified overlay",
      "properties": {
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to apply the cluster strategy to.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.cluster.activate": {
      "description": "Remove clustering rule from the specified overlay",
      "properties": {
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to apply the cluster strategy to.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.overlay.deactivate": {
      "description": "Remove clustering rule from the specified overlay",
      "properties": {
        "overlayId": {
          "type": "string",
          "description": "Id of the overlay to apply the cluster strategy to.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.plot": {
      "properties": {
        "containerId": {
          "type": "string",
          "description": "Id of the conatiner this feature will initially be associated with.  Once the feature has been polotted to the map with this intial association, it can be assiocited to other parent containers as well using the cmapi.feature.associate channel",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        },
        "features": {
          "description": "An array of features that are derived from IGeoRenderable",
          "type": "array",
          "anyOf": [
            {
              "$ref": "#/primitives/IGeoRenderable"
            }
          ]
        },
        "zoom": {
          "description": "",
          "type": "boolean",
          "default": false
        },
        "initialVisibility": {
          "description": "An initial visibility marking if the array of IGeoRenderables will be visible by default",
          "type": "boolean",
          "default": true
        }
      },
      "required": [
        "featureId",
        "feature"
      ]
    },
    "cmapi2.feature.associate": {
      "properties": {
        "payload": {
          "description": "Content based on the selected channel for the message",
          "protoIndex": 89,
          "type": "object",
          "langType": {
            "proto": "bytes"
          },
          "properties": {
            "containerId": {
              "type": "string"
            },
            "featureGeoIds": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "The geoId Id of the feature to remove form the map.  This will remove ALL associations and act as an atomic remove",
                "langType": {
                  "java": "java.util.UUID",
                  "js": "IGeo.randomUUID"
                }
              }
            }
          }
        }
      }
    },
    "cmapi2.feature.unplot": {
      "properties": {
        "containerId": {
          "type": "string"
        },
        "featureId": {
          "type": "string",
          "description": "The geoId Id of the feature to remove form the map.  This will remove ALL associations and act as an atomic remove",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.show": {
      "description": "Change the visibility state of one or more IGeoRenderable objects",
      "properties": {
        "features": {
          "type": "array",
          "anyOf": [
            {
              "$ref": "#/primitives/IGeoInstances"
            }
          ]
        }
      }
    },
    "cmapi2.feature.update.name": {
      "description": "Rename a feature",
      "properties": {
        "name": {
          "description": "New name for the overlay.",
          "type": "string"
        },
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature to be renamed.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.update.position": {
      "description": "Update the postion of a feature without having to send the entire feature",
      "properties": {
        "positions": {
          "description": "New position of the feature.",
          "$ref": "#/primitives/IGeoPositionGroup"
        },
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature to be updated.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.edit.start": {
      "description": "Place an exisitng feature into an editable state.  The map shall facilitate the user interaction and dispatch events as the feature is edited",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature to be edited.  Edit events for start, progress, cancel, and complete will come over the cmapi2.event.feature.edit channels",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.edit.complete": {
      "description": "Tell the map to finish the edit operation and return to a normal display state.  the map will dispatch an edit complete event over the cmapi2.event.feature.edit.completed channel",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.  Edit events for start, progress, cancel, and complete will come over the cmapi2.event.feature.edit channels",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.edit.cancel": {
      "description": "Tell the map to cancel the edit operation and return to a normal display state.  The feature shall return to its original state before the edit operation began. The map will dispatch an edit cancel event over the cmapi2.event.feature.edit.completed channel",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.select": {
      "description": "Add the identifed feature to the maps list of selected items.  The map should display a visual difference (such as a colored outline) for each selected item to allow the user to visually identify selected features.  The map should dispatch a feature selected event over the cmapi2.evet.feature.selected channel",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature to be selected.  the map will reatina collection of all selected fetures which can be accessd via the cmapi2.state.selected.get channel.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.deselect": {
      "description": "Add the identifed feature to the maps list of selected items.  The map should display a visual difference (such as a colored outline) for each selected item to allow the user to visually identify selected features.  The map should dispatch a feature deselected event over the cmapi2.evet.feature.deselected channel",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature to be selected.  the map will reatina collection of all selected fetures which can be accessd via the cmapi2.state.selected.get channel.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.get": {
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature to be retrieved.  A response with the feature definition IGeoRenderable sub type shall be retuned on the cmapi2.event.message.response channel",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.feature.list.get": {
      "properties": {
        "containerGeoId": {
          "type": "string",
          "description": "geoId of the container to get a list of children from.  A response with an array of IGeoInstances shall be retuned on the cmapi2.event.message.response channel",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.container.get": {
      "allOf": [
        {
          "$ref": "#/primitives/IGeoMessage"
        },
        {
          "properties": {
            "payload": {}
          }
        }
      ]
    },
    "cmapi2.container.list.get": {
      "allOf": [
        {
          "$ref": "#/primitives/IGeoMessage"
        },
        {
          "properties": {
            "payload": {}
          }
        }
      ]
    },
    "cmapi2.service.get": {
      "allOf": [
        {
          "$ref": "#/primitives/IGeoMessage"
        },
        {
          "properties": {
            "payload": {}
          }
        }
      ]
    },
    "cmapi2.document.get": {
      "allOf": [
        {
          "$ref": "#/primitives/IGeoMessage"
        },
        {
          "properties": {
            "payload": {}
          }
        }
      ]
    },
    "cmapi2.view.set.camera": {
      "description": "Set the maps view with an IGeoCamera definition",
      "properties": {
        "camera": {
          "description": "Camera definiton that will dictate the maps view",
          "$ref": "#/primitives/IGeoCamera"
        }
      }
    },
    "cmapi2.view.set.lookat": {
      "description": "Set the maps view with an IGeoLookAt definition",
      "properties": {
        "camera": {
          "description": "LookAt definiton that will dictate the maps view",
          "$ref": "#/primitives/IGeoLookAt"
        }
      }
    },
    "cmapi2.view.set.center": {
      "description": "Set the maps view with an IGeoPosition definition",
      "properties": {
        "camera": {
          "description": "A geospatial position definiton that will dictate the maps view.  The altitue property of the IGeoPostion should represent the range away from the map",
          "$ref": "#/primitives/IGeoPosition"
        }
      }
    },
    "cmapi2.state.view.get": {
      "properties": {
        "target": {
          "enum": [
            "VIEW",
            "SELECTION",
            "INITIALIZATION",
            "ABOUT"
          ]
        }
      }
    },
    "cmapi2.state.selection.get": {
      "properties": {
        "event": {
          "$ref": "#/primitives/IGeoUserInteractionEvent"
        },
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.state.initialization.get": {
      "properties": {
        "event": {
          "$ref": "#/primitives/IGeoUserInteractionEvent"
        },
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.state.about.get": {
      "properties": {
        "event": {
          "$ref": "#/primitives/IGeoUserInteractionEvent"
        },
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.event.feature.selection": {
      "properties": {
        "event": {
          "$ref": "#/primitives/IGeoUserInteractionEvent"
        },
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.event.feature.interaction": {
      "description": "Response to indicate the status of the message and any errors that may have occured",
      "properties": {
        "event": {
          "$ref": "#/primitives/IGeoUserInteractionEvent"
        },
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.event.message.response": {
      "description": "Response to indicate the status of the message and any errors that may have occured",
      "properties": {
        "originChannel": {
          "type": "string"
        },
        "originMessageId": {
          "type": "string"
        },
        "originSenderId": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "success",
            "error"
          ]
        },
        "errors": {
          "type": "array",
          "description": "An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions",
          "items": {
            "type": "object",
            "properties": {
              "errorType": {
                "description": "Category of error which occured",
                "type": "string"
              },
              "errorMessage": {
                "description": "Message contaning detials of why this error has occurred to simplify troublshooting",
                "type": "string"
              }
            }
          }
        }
      },
      "required": [
        "originChannel",
        "originMessageId",
        "originSenderId",
        "status"
      ]
    },
    "cmapi2.event.feature.edit.progress": {
      "description": "Response to indicate the status of the message and any errors that may have occured",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.event.feature.edit.completed": {
      "description": "Response to indicate the status of the message and any errors that may have occured",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.event.feature.edit.started": {
      "description": "Response to indicate the status of the message and any errors that may have occured",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        }
      }
    },
    "cmapi2.event.feature.clicked": {
      "description": "Response to indicate the status of the message and any errors that may have occured",
      "properties": {
        "featureGeoId": {
          "type": "string",
          "description": "geoId of the feature being edited.",
          "langType": {
            "java": "java.util.UUID",
            "js": "IGeo.randomUUID"
          }
        },
        "event": {
          "description": "IGeoUserInteractionEvent describing state of user interaction",
          "$ref": "#/primitives/IGeoUserInteractionEvent"
        }
      }
    }
  }
}