/**
* @namespace 
*/
 cmapi = cmapi || {};
/**
* @namespace 
*/
cmapi.enums = {
/**
* @readonly
* @enum {string}
*/  altitudeMode : {
    CLAMP_TO_GROUND : "CLAMP_TO_GROUND",
    RELATIVE_TO_GROUND : "RELATIVE_TO_GROUND",
    ABSOLUTE : "ABSOLUTE"
  },
/**
* @readonly
* @enum {string}
*/  fillPattern : {
    solid : "solid",
    hatched : "hatched",
    crossHatched : "crossHatched"
  },
/**
* @readonly
* @enum {string}
*/  justification : {
    LEFT : "LEFT",
    CENTER : "CENTER",
    RIGHT : "RIGHT"
  },  justification : {
    LEFT : "LEFT",
    CENTER : "CENTER",
    RIGHT : "RIGHT"
  }  typeface : {
    REGULAR : "REGULAR",
    BOLD : "BOLD",
    ITALIC : "ITALIC",
    BOLDITALIC : "BOLDITALIC"
  },
/**
* @readonly
* @enum {string}
*/  pathType : {
    GREAT_CIRCLE : "GREAT_CIRCLE",
    LINEAR : "LINEAR",
    RHUMB_LINE : "RHUMB_LINE"
  },
/**
* @readonly
* @enum {string}
*/  symbolStandard : {
    MIL_STD_2525C : "2525c",
    MIL_STD_2525B : "2525b"
  },
/**
* @readonly
* @enum {string}
*/  acmType : {
    ROUTE : "ROUTE----------",
    CYLINDER : "CYLINDER-------",
    ORBIT : "ORBIT----------",
    POLYGON : "POLYGON--------",
    RADARC : "RADARC---------",
    POLYARC : "POLYARC--------",
    TRACK : "TRACK----------",
    CURTAIN : "CURTAIN--------"
  }
 };/**
* Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @interface
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoAltitudeMode} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoAltitudeMode = function ( args ) {

  "use strict";

  var _altitudeMode;
  Object.defineProperty(this,"altitudeMode",{

    enumerable: true,
    get: function() { return _altitudeMode; },

    set: function(value) { _altitudeMode = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Defines a range in time that represents a beginning and end.  This can be used to describe things such as availability, visibility, active/inactive for provided periods of time.  From a filtering point of view, if a time filter is applied a feature would only be visible on a map view within the defined timespan(s)
* @interface
* @property {string} begin  - Starting date time value as defined by http://tools.ietf.org/html/rfc3339
* @property {string} end  - Ending date time value as defined by http://tools.ietf.org/html/rfc3339
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoTimeSpan} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoTimeSpan = function ( args ) {

  "use strict";

  var _begin;
  Object.defineProperty(this,"begin",{

    enumerable: true,
    get: function() { return _begin; },

    set: function(value) { _begin = value; }

  });

  var _end;
  Object.defineProperty(this,"end",{

    enumerable: true,
    get: function() { return _end; },

    set: function(value) { _end = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Defines a specific geospatial position derived using WGS-84 latitude longitude and alitude in meters
* @interface
* @property {number} latitude  - Latitude value in degrees decimal (i.e. 23.4567) derived from WGS-84
* @property {number} longitude  - Longitude value in degrees decimal (i.e. 23.4567) derived from WGS-84
* @property {number} altitude  - A value in meters representing the altitude of the associated position.  This will be interpreted base on the altitudeMode provided in the IGeoAltitudeMode enumeration
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoPosition} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoPosition = function ( args ) {

  "use strict";

  var _latitude =  0;
  Object.defineProperty(this,"latitude",{

    enumerable: true,
    get: function() { return _latitude; },

    set: function(value) { _latitude = value; }

  });

  var _longitude =  0;
  Object.defineProperty(this,"longitude",{

    enumerable: true,
    get: function() { return _longitude; },

    set: function(value) { _longitude = value; }

  });

  var _altitude =  0;
  Object.defineProperty(this,"altitude",{

    enumerable: true,
    get: function() { return _altitude; },

    set: function(value) { _altitude = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* An ordered list of positions representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single position
* @interface
* @augments cmapi.IGeoAltitudeMode
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoPositionGroup} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoPositionGroup = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoAltitudeMode(),this);

  var _positions;
  Object.defineProperty(this,"positions",{

    enumerable: true,
    get: function() { return _positions; },

    set: function(value) { _positions = value; }

  });

  var _timeStamp;
  Object.defineProperty(this,"timeStamp",{

    enumerable: true,
    get: function() { return _timeStamp; },

    set: function(value) { _timeStamp = value; }

  });

  var _timeSpans;
  Object.defineProperty(this,"timeSpans",{

    enumerable: true,
    get: function() { return _timeSpans; },

    set: function(value) { _timeSpans = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* An ordered collection of IGeoPositionGroup objects
* @interface
* @property {cmapi.IGeoPositionGroup[]} positionHistory  - 
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoPositionHistory} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoPositionHistory = function ( args ) {

  "use strict";

  var _positionHistory;
  Object.defineProperty(this,"positionHistory",{

    enumerable: true,
    get: function() { return _positionHistory; },

    set: function(value) { _positionHistory = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Defines the virtual camera that views the scene. This element defines the position of the camera relative to the Earth's surface as well as the viewing direction of the camera. The camera position is defined by <longitude>, <latitude>, <altitude>, and either <altitudeMode>. The viewing direction of the camera is defined by <azimuth>, <tilt>, and <roll>. An IGeoCamera provides full six-degrees-of-freedom control over the view, so you can position the Camera in space and then rotate it around the X, Y, and Z axes. Most importantly, you can tilt the camera view so that you're looking above the horizon into the sky. The order of rotation is important. By default, the camera is looking straight down the −Z axis toward the Earth. Before rotations are performed, the camera is translated along the Z axis to <altitude>. The order of transformations is as follows: <altitude> - translate along the Z axis to <altitude><azimuth> - rotate around the Z axis.<tilt> - rotate around the X axis.<roll> - rotate around the Z axis (again). Note that each time a rotation is applied, two of the camera axes change their orientation.
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {number} latitude  - Latitude value in degrees decimal (i.e. 23.4567) derived from WGS-84
* @property {number} longitude  - Longitude value in degrees decimal (i.e. 23.4567) derived from WGS-84
* @property {number} altitude  - A value in meters representing the altitude of the associated position.  This will be interpreted base on the altitudeMode provided in the IGeoAltitudeMode enumeration
* @property {number} tilt  - Rotation, in degrees, of the camera around the X axis. A value of 0 indicates that the view is aimed straight down toward the earth (the most common case). A value for 90 for <tilt> indicates that the view is aimed toward the horizon. Values greater than 90 indicate that the view is pointed up into the sky. Values for <tilt> are clamped at +180 degrees
* @property {number} roll  - Rotation, in degrees, of the camera around the Z axis. Values range from −180 to +180 degrees
* @property {number} heading  - Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoCamera} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoCamera = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);

  var _altitudeMode;
  Object.defineProperty(this,"altitudeMode",{

    enumerable: true,
    get: function() { return _altitudeMode; },

    set: function(value) { _altitudeMode = value; }

  });

  var _latitude =  0;
  Object.defineProperty(this,"latitude",{

    enumerable: true,
    get: function() { return _latitude; },

    set: function(value) { _latitude = value; }

  });

  var _longitude =  0;
  Object.defineProperty(this,"longitude",{

    enumerable: true,
    get: function() { return _longitude; },

    set: function(value) { _longitude = value; }

  });

  var _altitude =  0;
  Object.defineProperty(this,"altitude",{

    enumerable: true,
    get: function() { return _altitude; },

    set: function(value) { _altitude = value; }

  });

  var _tilt =  0;
  Object.defineProperty(this,"tilt",{

    enumerable: true,
    get: function() { return _tilt; },

    set: function(value) { _tilt = value; }

  });

  var _roll =  0;
  Object.defineProperty(this,"roll",{

    enumerable: true,
    get: function() { return _roll; },

    set: function(value) { _roll = value; }

  });

  var _heading =  0;
  Object.defineProperty(this,"heading",{

    enumerable: true,
    get: function() { return _heading; },

    set: function(value) { _heading = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* The LookAt element positions the 'camera' in relation to the IGeoPosition that is being viewed
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {number} latitude  - Latitude value in degrees decimal (i.e. 23.4567) derived from WGS-84
* @property {number} longitude  - Longitude value in degrees decimal (i.e. 23.4567) derived from WGS-84
* @property {number} altitude  - A value in meters representing the altitude of the associated position.  This will be interpreted base on the altitudeMode provided in the IGeoAltitudeMode enumeration
* @property {number} tilt  - Rotation, in degrees, of the camera around the X axis. A value of 0 indicates that the view is aimed straight down toward the earth (the most common case). A value for 90 for <tilt> indicates that the view is aimed toward the horizon. Values greater than 90 indicate that the view is pointed up into the sky. Values for <tilt> are clamped at +180 degrees. 
* @property {number} heading  - Direction (that is, North, South, East, West), in degrees. Default=0 (North). Values range from 0 to 360 degrees
* @property {number} range  - Distance in meters from the point specified by IGeoPosition to the LookAt position
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoLookAt} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoLookAt = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);

  var _altitudeMode;
  Object.defineProperty(this,"altitudeMode",{

    enumerable: true,
    get: function() { return _altitudeMode; },

    set: function(value) { _altitudeMode = value; }

  });

  var _latitude =  0;
  Object.defineProperty(this,"latitude",{

    enumerable: true,
    get: function() { return _latitude; },

    set: function(value) { _latitude = value; }

  });

  var _longitude =  0;
  Object.defineProperty(this,"longitude",{

    enumerable: true,
    get: function() { return _longitude; },

    set: function(value) { _longitude = value; }

  });

  var _altitude =  0;
  Object.defineProperty(this,"altitude",{

    enumerable: true,
    get: function() { return _altitude; },

    set: function(value) { _altitude = value; }

  });

  var _tilt =  0;
  Object.defineProperty(this,"tilt",{

    enumerable: true,
    get: function() { return _tilt; },

    set: function(value) { _tilt = value; }

  });

  var _heading =  0;
  Object.defineProperty(this,"heading",{

    enumerable: true,
    get: function() { return _heading; },

    set: function(value) { _heading = value; }

  });

  var _range =  1000000;
  Object.defineProperty(this,"range",{

    enumerable: true,
    get: function() { return _range; },

    set: function(value) { _range = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A rectangular box representing a geospatial area
* @interface
* @property {number} west  - The western most longitude of the rectangle
* @property {number} east  - The eastern most longitude of the rectangle
* @property {number} north  - The nothern most latitude of the rectangle
* @property {number} south  - The southern most latitude of the rectangle
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoBounds} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoBounds = function ( args ) {

  "use strict";

  var _west;
  Object.defineProperty(this,"west",{

    enumerable: true,
    get: function() { return _west; },

    set: function(value) { _west = value; }

  });

  var _east;
  Object.defineProperty(this,"east",{

    enumerable: true,
    get: function() { return _east; },

    set: function(value) { _east = value; }

  });

  var _north;
  Object.defineProperty(this,"north",{

    enumerable: true,
    get: function() { return _north; },

    set: function(value) { _north = value; }

  });

  var _south;
  Object.defineProperty(this,"south",{

    enumerable: true,
    get: function() { return _south; },

    set: function(value) { _south = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* List of objects that describe the overall view of a map
* @interface
* @property {cmapi.IGeoCamera} camera  - 
* @property {cmapi.IGeoLookAt} lookAt  - 
* @property {cmapi.IGeoBounds} bounds  - 
* @property {number} scale  - Approximate map scale of current view
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoView} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoView = function ( args ) {

  "use strict";

  var _camera;
  Object.defineProperty(this,"camera",{

    enumerable: true,
    get: function() { return _camera; },

    set: function(value) { _camera = value; }

  });

  var _lookAt;
  Object.defineProperty(this,"lookAt",{

    enumerable: true,
    get: function() { return _lookAt; },

    set: function(value) { _lookAt = value; }

  });

  var _bounds;
  Object.defineProperty(this,"bounds",{

    enumerable: true,
    get: function() { return _bounds; },

    set: function(value) { _bounds = value; }

  });

  var _scale;
  Object.defineProperty(this,"scale",{

    enumerable: true,
    get: function() { return _scale; },

    set: function(value) { _scale = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Object containing three color channels for red, green, and blue as well as an alpha channel for opacity
* @interface
* @property {number} red  - Value for red color channel. Integer ranging between 0 and 255
* @property {number} green  - Value for green color channel. Integer ranging between 0 and 255
* @property {number} blue  - Value for blue color channel. Integer ranging between 0 and 255
* @property {number} alpha  - Value for alpha channel to control opacity. Decimal ranging from 0 to 1
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoColor} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoColor = function ( args ) {

  "use strict";

  var _red =  0;
  Object.defineProperty(this,"red",{

    enumerable: true,
    get: function() { return _red; },

    set: function(value) { _red = value; }

  });

  var _green =  0;
  Object.defineProperty(this,"green",{

    enumerable: true,
    get: function() { return _green; },

    set: function(value) { _green = value; }

  });

  var _blue =  0;
  Object.defineProperty(this,"blue",{

    enumerable: true,
    get: function() { return _blue; },

    set: function(value) { _blue = value; }

  });

  var _alpha =  0.8;
  Object.defineProperty(this,"alpha",{

    enumerable: true,
    get: function() { return _alpha; },

    set: function(value) { _alpha = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Style attributes for strokes
* @interface
* @property {cmapi.IGeoColor} strokeColor  - 
* @property {number} stipplingPattern  - specifies a number whose lower 16 bits define a pattern of which pixels in the image are white and which are transparent. Each bit corresponds to a pixel, and the pattern repeats after every n*16 pixels, where n is the factor. For example, if the factor is 3, each bit in the pattern is repeated three times before using the next bit
* @property {number} stipplingFactor  - specifies the number of times each bit in the pattern is repeated before the next bit is used. For example, if the factor is 3, each bit is repeated three times before using the next bit. The specified factor must be either 0 or an integer greater than 0. A factor of 0 indicates no stippling
* @property {number} strokeWidth  - Width of the stroke on the screen in pixels
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoStrokeStyle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoStrokeStyle = function ( args ) {

  "use strict";

  var _strokeColor;
  Object.defineProperty(this,"strokeColor",{

    enumerable: true,
    get: function() { return _strokeColor; },

    set: function(value) { _strokeColor = value; }

  });

  var _stipplingPattern =  0;
  Object.defineProperty(this,"stipplingPattern",{

    enumerable: true,
    get: function() { return _stipplingPattern; },

    set: function(value) { _stipplingPattern = value; }

  });

  var _stipplingFactor =  0;
  Object.defineProperty(this,"stipplingFactor",{

    enumerable: true,
    get: function() { return _stipplingFactor; },

    set: function(value) { _stipplingFactor = value; }

  });

  var _strokeWidth =  3;
  Object.defineProperty(this,"strokeWidth",{

    enumerable: true,
    get: function() { return _strokeWidth; },

    set: function(value) { _strokeWidth = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Style properties for the fill of a feature.  This can either be the interior of a shape such as a polygon or circle, or can also be applied to the fill of an a MIL-STD-2525 Icon to override the default affiliation color
* @interface
* @property {cmapi.IGeoColor} fillColor  - 
* @property {string} fillPattern  - Fill patterns allow for alternatives to a solid fill color
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoFillStyle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoFillStyle = function ( args ) {

  "use strict";

  var _fillColor;
  Object.defineProperty(this,"fillColor",{

    enumerable: true,
    get: function() { return _fillColor; },

    set: function(value) { _fillColor = value; }

  });

  var _fillPattern =  "solid";
  Object.defineProperty(this,"fillPattern",{

    enumerable: true,
    get: function() { return _fillPattern; },

    set: function(value) { _fillPattern = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Style attributes associated with icons
* @interface
* @property {number} size  - Size in pixels at 96 ppi.  If the system rendering the text is running at a screen resolution other than 96 ppi, a translation should be done to make the icon larger of smaller to represent the same amount of physical space as if the screen were at 96 ppi. If the icon is not square, the size will represent the larger value of the rectangle
* @property {number} offSetX  - X Offest of icon in pixels derived from the lower left point of the icon
* @property {number} offSetY  - X Offest of icon in pixels derived from the lower left point of the icon
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoIconStyle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoIconStyle = function ( args ) {

  "use strict";

  var _size =  32;
  Object.defineProperty(this,"size",{

    enumerable: true,
    get: function() { return _size; },

    set: function(value) { _size = value; }

  });

  var _offSetX =  0;
  Object.defineProperty(this,"offSetX",{

    enumerable: true,
    get: function() { return _offSetX; },

    set: function(value) { _offSetX = value; }

  });

  var _offSetY =  0;
  Object.defineProperty(this,"offSetY",{

    enumerable: true,
    get: function() { return _offSetY; },

    set: function(value) { _offSetY = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Style properties for the optional text labels that may display next to feature data on a map
* @interface
* @property {number} size  - Size of the font in pixels asumming 96 ppi. If the system rendering the text is running at a screen resolution other than 96 ppi, a translation should be done to make the text larger of smaller to represent the same amount of physical space as if the screen were at 96 ppi.  For example if the screen resolution of the target device rednering the text is 126 ppi, you would use the following formula to get a proper pixel value: ( devicePixelsPerInch / 96 ) x IGeoLabelStyle.size = ActucalPixelSize or ( 126 / 96 ) * 12 = 16
* @property {cmapi.IGeoColor} color  - 
* @property {cmapi.IGeoColor} outlineColor  - 
* @property {string} justification  - Position to align text in relation to the associated geospatial coordinate
* @property {string} fontFamily  - Name of the font family to be used.  In the case that the system rendering this text does not have the font family, it shall use a defalt font and still display the text
* @property {string} typeface  - Typeface design to be used for the font
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoLabelStyle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoLabelStyle = function ( args ) {

  "use strict";

  var _size =  12;
  Object.defineProperty(this,"size",{

    enumerable: true,
    get: function() { return _size; },

    set: function(value) { _size = value; }

  });

  var _color;
  Object.defineProperty(this,"color",{

    enumerable: true,
    get: function() { return _color; },

    set: function(value) { _color = value; }

  });

  var _outlineColor;
  Object.defineProperty(this,"outlineColor",{

    enumerable: true,
    get: function() { return _outlineColor; },

    set: function(value) { _outlineColor = value; }

  });

  var _justification =  "LEFT";
  Object.defineProperty(this,"justification",{

    enumerable: true,
    get: function() { return _justification; },

    set: function(value) { _justification = value; }

  });

  var _fontFamily;
  Object.defineProperty(this,"fontFamily",{

    enumerable: true,
    get: function() { return _fontFamily; },

    set: function(value) { _fontFamily = value; }

  });

  var _typeface =  "REGULAR";
  Object.defineProperty(this,"typeface",{

    enumerable: true,
    get: function() { return _typeface; },

    set: function(value) { _typeface = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* This is the base object all containers and features are derived from
* @interface
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoBase} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoBase = function ( args ) {

  "use strict";

  var _name =  "";
  Object.defineProperty(this,"name",{

    enumerable: true,
    get: function() { return _name; },

    set: function(value) { _name = value; }

  });

  var _geoId =  IGeo.randomUUID();
  Object.defineProperty(this,"geoId",{

    enumerable: true,
    get: function() { return _geoId; },

    set: function(value) { _geoId = value; }

  });

  var _geoType;
  Object.defineProperty(this,"geoType",{

    enumerable: true,
    get: function() { return _geoType; },

  });

  var _dataProviderId;
  Object.defineProperty(this,"dataProviderId",{

    enumerable: true,
    get: function() { return _dataProviderId; },

    set: function(value) { _dataProviderId = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Geo containers are designed to be a base interface for anything that can contain a children list of IGeoBase objects.  This facilitates the concept of Containers such as overlays, as well as features such as a point that can contain child features.
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoContainer} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoContainer = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);

  var _children;
  Object.defineProperty(this,"children",{

    enumerable: true,
    get: function() { return _children; },

  });

  var _readOnly =  false;
  Object.defineProperty(this,"readOnly",{

    enumerable: true,
    get: function() { return _readOnly; },

    set: function(value) { _readOnly = value; }

  });

  var _description =  "";
  Object.defineProperty(this,"description",{

    enumerable: true,
    get: function() { return _description; },

    set: function(value) { _description = value; }

  });

  var _properties;
  Object.defineProperty(this,"properties",{

    enumerable: true,
    get: function() { return _properties; },

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* 
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoService} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoService = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* 
* @interface
* @augments cmapi.IGeoContainer
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoRenderable} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoRenderable = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoContainer(),this);

  var _altitudeMode;
  Object.defineProperty(this,"altitudeMode",{

    enumerable: true,
    get: function() { return _altitudeMode; },

    set: function(value) { _altitudeMode = value; }

  });

  var _positions;
  Object.defineProperty(this,"positions",{

    enumerable: true,
    get: function() { return _positions; },

    set: function(value) { _positions = value; }

  });

  var _timeStamp;
  Object.defineProperty(this,"timeStamp",{

    enumerable: true,
    get: function() { return _timeStamp; },

    set: function(value) { _timeStamp = value; }

  });

  var _timeSpans;
  Object.defineProperty(this,"timeSpans",{

    enumerable: true,
    get: function() { return _timeSpans; },

    set: function(value) { _timeSpans = value; }

  });

  var _labelStyle;
  Object.defineProperty(this,"labelStyle",{

    enumerable: true,
    get: function() { return _labelStyle; },

    set: function(value) { _labelStyle = value; }

  });

  var _strokeStyle;
  Object.defineProperty(this,"strokeStyle",{

    enumerable: true,
    get: function() { return _strokeStyle; },

    set: function(value) { _strokeStyle = value; }

  });

  var _fillStyle;
  Object.defineProperty(this,"fillStyle",{

    enumerable: true,
    get: function() { return _fillStyle; },

    set: function(value) { _fillStyle = value; }

  });

  var _extrude =  false;
  Object.defineProperty(this,"extrude",{

    enumerable: true,
    get: function() { return _extrude; },

    set: function(value) { _extrude = value; }

  });

  var _tessellate =  true;
  Object.defineProperty(this,"tessellate",{

    enumerable: true,
    get: function() { return _tessellate; },

    set: function(value) { _tessellate = value; }

  });

  var _buffer =  0;
  Object.defineProperty(this,"buffer",{

    enumerable: true,
    get: function() { return _buffer; },

    set: function(value) { _buffer = value; }

  });

  var _azimuth =  0;
  Object.defineProperty(this,"azimuth",{

    enumerable: true,
    get: function() { return _azimuth; },

    set: function(value) { _azimuth = value; }

  });

  var _pathType =  "GREAT_CIRCLE";
  Object.defineProperty(this,"pathType",{

    enumerable: true,
    get: function() { return _pathType; },

    set: function(value) { _pathType = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Intances allow for specific state within a container such as visibility while still referenceing a single shared renderable.  For example a single polygon may appear as a child of two different containers on the same cmapi2.  In this case there will two IGeoRenderableInstances (one for each container) and they can have seperate visibility state.  If all instances have a visibility of false, the map should hide the IGeoRenderable, else if  one or more of the instances have a visibility of true then the IGeoRenderable should be visible on the cmapi2.  Instances are used as weak refernces to return specfic state based on a specific relationship with a parent container.
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {string} parentContainerId  - ID of the IGeoContainer this IGeoInstance is associcated with.
* @property {boolean} visibility  - Visibility of this instance in relationship to its parent container.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoInstance} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoInstance = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);

  var _parentContainerId =  "false";
  Object.defineProperty(this,"parentContainerId",{

    enumerable: true,
    get: function() { return _parentContainerId; },

    set: function(value) { _parentContainerId = value; }

  });

  var _visibility =  false;
  Object.defineProperty(this,"visibility",{

    enumerable: true,
    get: function() { return _visibility; },

    set: function(value) { _visibility = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A feature to be represented as a geospatial location with an icon
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {cmapi.IGeoIconStyle} iconStyle  - 
* @property {string} iconURI  - Indicates the URL to request the icon image image or dataURI encoding of the icon image embedded as the value defined by RFC 2397 (see https://tools.ietf.org/html/rfc2397)
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoPoint} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoPoint = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _iconStyle;
  Object.defineProperty(this,"iconStyle",{

    enumerable: true,
    get: function() { return _iconStyle; },

    set: function(value) { _iconStyle = value; }

  });

  var _iconURI;
  Object.defineProperty(this,"iconURI",{

    enumerable: true,
    get: function() { return _iconURI; },

    set: function(value) { _iconURI = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A text annotation with a geospatial location
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoText} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoText = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A polygon represented by three or more geospatial locations
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {cmapi.IGeoPositionGroup[]} innerBoundaries  - Defines one or more inner boundaries for the polygon which will act as exclusion areas, or holes in the polygon
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoPolygon} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoPolygon = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _innerBoundaries;
  Object.defineProperty(this,"innerBoundaries",{

    enumerable: true,
    get: function() { return _innerBoundaries; },

    set: function(value) { _innerBoundaries = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A path AKA polyline represented by line connecting two or more geospatial locations or vertices
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoPath} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoPath = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A circular based form a single geospatial location as the center with a radius in meters
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {number} radius  - Radius of the circle in meters
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoCircle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoCircle = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _radius =  100;
  Object.defineProperty(this,"radius",{

    enumerable: true,
    get: function() { return _radius; },

    set: function(value) { _radius = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* An ellipse represented by a geospatial center point location with a semi-major and semi-minor radius in meters
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {number} semiMajor  - The magnitude of the semi-major axis - Radius of the ellipse in meters on the x axis (width)
* @property {number} semiMinor  - The magnitude of the semi-minor axis - Radius of the ellipse in meters on the y axis (height)
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoEllipse} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoEllipse = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _semiMajor =  150;
  Object.defineProperty(this,"semiMajor",{

    enumerable: true,
    get: function() { return _semiMajor; },

    set: function(value) { _semiMajor = value; }

  });

  var _semiMinor =  75;
  Object.defineProperty(this,"semiMinor",{

    enumerable: true,
    get: function() { return _semiMinor; },

    set: function(value) { _semiMinor = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A geospatial rectangle represented by a center point location, width and height in meters
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {number} width  - Width of the rectangle in meters on the x axis
* @property {number} height  - Height of the rectangle in meters on the y axis
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoRectangle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoRectangle = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _width =  150;
  Object.defineProperty(this,"width",{

    enumerable: true,
    get: function() { return _width; },

    set: function(value) { _width = value; }

  });

  var _height =  75;
  Object.defineProperty(this,"height",{

    enumerable: true,
    get: function() { return _height; },

    set: function(value) { _height = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* A geospatial square represented by a center point location and width in meters
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {number} width  - Width of the square in meters on the x and y axis 
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoSquare} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoSquare = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _width =  100;
  Object.defineProperty(this,"width",{

    enumerable: true,
    get: function() { return _width; },

    set: function(value) { _width = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* 
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {string} imageURI  - Indicates the URL to request the image or base 64 dataURI encoding of the icon image embedded as the value defined by RFC 2397 (see https://tools.ietf.org/html/rfc2397)
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoImageOverlay} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoImageOverlay = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _imageURI;
  Object.defineProperty(this,"imageURI",{

    enumerable: true,
    get: function() { return _imageURI; },

    set: function(value) { _imageURI = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Feature to represent MIL-STD-2525 B and C symbols for the entire symbology standard
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {string} symbolStandard  - Version of the MIL-STD-2525 standard to use
* @property {string} symbolCode  - Symbol code as defined by MIL-STD-2525
* @property {cmapi.modifiers} modifiers  - 
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoMilSymbol} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoMilSymbol = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _symbolStandard =  "MIL_STD_2525C";
  Object.defineProperty(this,"symbolStandard",{

    enumerable: true,
    get: function() { return _symbolStandard; },

    set: function(value) { _symbolStandard = value; }

  });

  var _symbolCode =  "SUGP-----------";
  Object.defineProperty(this,"symbolCode",{

    enumerable: true,
    get: function() { return _symbolCode; },

    set: function(value) { _symbolCode = value; }

  });

  var _modifiers;
  Object.defineProperty(this,"modifiers",{

    enumerable: true,
    get: function() { return _modifiers; },

    set: function(value) { _modifiers = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Air control measures (ACM) represent a three dimensional volume in the air above earth used to indicate where aircarfat should stay within, or stay out of
* @interface
* @augments cmapi.IGeoRenderable
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {cmapi.IGeoInstance[]} children  - A list of IGeoInstance that are children to this container.  Numerous IGeoInstance objets can have a weak refernce to a single actual instance of a IGeoContainer or IGeoRenderable.  This enables serialization of relationships without having to embed the related objects directly.  In cases where an IGeoRenderable has multiple parents, each parent stores an IGeoInstance which hs instance specific properties such as visibility.
* @property {boolean} readOnly  - Indicates if the object is intended to be read only (true) or allow changes to the values ot its properties (false)
* @property {string} description  - A simple string, or HTML formatted string that can be displayed to describe the IGeoBase.  In the case of a feature the description property can be used to store the content that should display in a pop up window after clicking on a feature.
* @property {cmapi.properties} properties  - A key value pair where both the key and value where the key is a unique string and the value is an object that can be stored as and read from a string.  In cases where an IGeoBase will be serialized all of the values will be serialized using the objects toString() method.  It is the resposibility of the applications accessing values stored in the properties hash map to determine if the value is in a string format and convert back to whatever object type the string was derived from.  The object should not contain any references to other objects where that relationship is expected to exist beyond copying a current value of a simple type as the relationship will not be properly restored when deserialization occurs.  IGeo will not use the properties hash for any internal purpose, it will simply allow 3rd party data to pass additional attributes that will stay associated with the IGeo object as it moves between applications and systems.
* @property {string} altitudeMode  - Enumeration of altitude modes to define how the altitude value in an IGeoPosition alt (altitude) property will be interpreted
* @property {cmapi.IGeoPosition[]} positions  - An ordered list of IGeoPosition objects representing a 1 or more positions with an associated IGeoAltitudeMode to interpret the altitude values.  In the case of a point, a single position will create a single icon, wheras mulitple positions will create the same icon at multiple positions to be interpreted as a composite feature. For consistency, and IGeoRenderables use an IGeoPositionGroup even when only containing a single positions
* @property {string} timeStamp  - Defines a point in time that something occurred, was created, or was last updated time value as defined by http://tools.ietf.org/html/rfc3339
* @property {cmapi.IGeoTimeSpan[]} timeSpans  - Defines one or more periods of time something occured, or was active.
* @property {cmapi.IGeoLabelStyle} labelStyle  - 
* @property {cmapi.IGeoStrokeStyle} strokeStyle  - 
* @property {cmapi.IGeoFillStyle} fillStyle  - 
* @property {boolean} extrude  - A curtain is formed below each point or line segment and extends to the ground
* @property {boolean} tessellate  - Value determines if the item will follow the terrain and drape, or follow a straight plane cutting through terrain above the altitude of the line segment.  This property is ignored for single position items.
* @property {number} buffer  - Indicates if a buffer object in meters can be applied to a single, or list of positions as an extension outwards from the original position(s)
* @property {number} azimuth  - The direction a feature will be oriented in degrees
* @property {string} pathType  - Enumeration of path rendering types that affect the way the map will interpret for paths and polygon boundaries. GREAT_CIRCLE - A great circle arc between two locations. LNEAR - Simple linear interpolation between two locations which will paass through ground.  It represents the shortest distance between two points passing through the globe. RHUMB_LINE - A line of constant bearing between two locations.  Default is GREAT_CRICLE
* @property {string} acmType  - Type of air control measure to create
* @property {cmapi.attributes} attributes  - 
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoAirControlMeasure} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoAirControlMeasure = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoRenderable(),this);

  var _acmType;
  Object.defineProperty(this,"acmType",{

    enumerable: true,
    get: function() { return _acmType; },

    set: function(value) { _acmType = value; }

  });

  var _attributes;
  Object.defineProperty(this,"attributes",{

    enumerable: true,
    get: function() { return _attributes; },

    set: function(value) { _attributes = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* File containing geospatial feature data in a known format such as KML or GeoJSON
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {string} documentContent  - document content.  If the document is not text based such as GeoJSON, or KML, the documentContent property should be a base64 binary string of the document.
* @property {string} documentMIMEType  - MIME Type of document.  Common Types are KML (application/vnd.google-earth.kml+xml), and GeoJSON (application/vnd.geo+json)
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoDocument} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoDocument = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);

  var _documentContent;
  Object.defineProperty(this,"documentContent",{

    enumerable: true,
    get: function() { return _documentContent; },

    set: function(value) { _documentContent = value; }

  });

  var _documentMIMEType;
  Object.defineProperty(this,"documentMIMEType",{

    enumerable: true,
    get: function() { return _documentMIMEType; },

    set: function(value) { _documentMIMEType = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* URL to a file containing geospatial feature data in a known format such as KML or GeoJSON
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {string} documentURI  - URL the document should be loaded from, or a dataURI encoding of the resource embedded as the value defined by RFC 2397 (see https://tools.ietf.org/html/rfc2397)
* @property {string} documentMIMEType  - MIME Type of document.  Common Types are KML (application/vnd.google-earth.kml+xml), and GeoJSON (application/vnd.geo+json)
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoDocumentLink} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoDocumentLink = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);

  var _documentURI;
  Object.defineProperty(this,"documentURI",{

    enumerable: true,
    get: function() { return _documentURI; },

    set: function(value) { _documentURI = value; }

  });

  var _documentMIMEType;
  Object.defineProperty(this,"documentMIMEType",{

    enumerable: true,
    get: function() { return _documentMIMEType; },

    set: function(value) { _documentMIMEType = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* OGC Web Map Service
* @interface
* @augments cmapi.IGeoService
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoWMS} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoWMS = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoService(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* OGC Web Map Tile Service
* @interface
* @augments cmapi.IGeoService
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoWMTS} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoWMTS = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoService(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* OGC Web Map Coverage Service
* @interface
* @augments cmapi.IGeoService
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoWCS} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoWCS = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoService(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* OGC Web Feature Service
* @interface
* @augments cmapi.IGeoService
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoWFS} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoWFS = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoService(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* ESRI REST Service
* @interface
* @augments cmapi.IGeoService
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoESRIRest} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoESRIRest = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoService(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Tiled Map Service
* @interface
* @augments cmapi.IGeoService
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoTMS} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoTMS = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoService(),this);



  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Style definitons for point visualization in overlay icon clustering
* @interface
* @property {cmapi.IGeoColor} color  - 
* @property {number} radius  - 
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoClusterPointStyle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoClusterPointStyle = function ( args ) {

  "use strict";

  var _color;
  Object.defineProperty(this,"color",{

    enumerable: true,
    get: function() { return _color; },

    set: function(value) { _color = value; }

  });

  var _radius =  6;
  Object.defineProperty(this,"radius",{

    enumerable: true,
    get: function() { return _radius; },

    set: function(value) { _radius = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Style definitons for overlay icon clustering
* @interface
* @property {string} label  - 
* @property {string} title  - 
* @property {string} summary  - 
* @property {string} description  - 
* @property {cmapi.IGeoClusterPointStyle} pointStyle  - 
* @property {cmapi.IGeoIconStyle} iconStyle  - 
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoClusterStyle} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoClusterStyle = function ( args ) {

  "use strict";

  var _label;
  Object.defineProperty(this,"label",{

    enumerable: true,
    get: function() { return _label; },

    set: function(value) { _label = value; }

  });

  var _title;
  Object.defineProperty(this,"title",{

    enumerable: true,
    get: function() { return _title; },

    set: function(value) { _title = value; }

  });

  var _summary;
  Object.defineProperty(this,"summary",{

    enumerable: true,
    get: function() { return _summary; },

    set: function(value) { _summary = value; }

  });

  var _description;
  Object.defineProperty(this,"description",{

    enumerable: true,
    get: function() { return _description; },

    set: function(value) { _description = value; }

  });

  var _pointStyle;
  Object.defineProperty(this,"pointStyle",{

    enumerable: true,
    get: function() { return _pointStyle; },

    set: function(value) { _pointStyle = value; }

  });

  var _iconStyle;
  Object.defineProperty(this,"iconStyle",{

    enumerable: true,
    get: function() { return _iconStyle; },

    set: function(value) { _iconStyle = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* 
* @interface
* @augments cmapi.IGeoBase
* @property {string} name  - Name is used to display text labels alongside to a feature and can be used in user interfaces that manage the data on the map
* @property {IGeo.randomUUID} geoId  - The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid references by ID to break
* @property {string} geoType  - This is a value that will be set to a unique string for the spefic type
* @property {string} dataProviderId  - This is a free form string that can represent an ID specific to this piece of data as it is tracked uniquely by the system providing this data.  This is different from GeoId as the GeoId is of type UUID.  Some systems may use IDs formatted in a way that it cannot be stored in a UUID.  In this case, this property can be used by the system to track this psece of data by the ID they use internally.  The GeoID property will be used by CMAPI as the unique ID and this ID is for the benefit of the system providing the data.
* @property {string} threshold  - 
* @property {string} distance  - 
* @property {cmapi.IGeoClusterStyle} clusterStyle  - 
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoClusterStrategy} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoClusterStrategy = function ( args ) {

  "use strict";

  cmapi.inherit(new cmapi.IGeoBase(),this);

  var _threshold =  "2";
  Object.defineProperty(this,"threshold",{

    enumerable: true,
    get: function() { return _threshold; },

    set: function(value) { _threshold = value; }

  });

  var _distance =  "50";
  Object.defineProperty(this,"distance",{

    enumerable: true,
    get: function() { return _distance; },

    set: function(value) { _distance = value; }

  });

  var _clusterStyle;
  Object.defineProperty(this,"clusterStyle",{

    enumerable: true,
    get: function() { return _clusterStyle; },

    set: function(value) { _clusterStyle = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* x, y screen poistion in pixels 
* @interface
* @property {number} x  - Screen position on the x plane in pixels
* @property {number} y  - Screen position on the y plane in pixels
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoScreenPosition} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoScreenPosition = function ( args ) {

  "use strict";

  var _x;
  Object.defineProperty(this,"x",{

    enumerable: true,
    get: function() { return _x; },

    set: function(value) { _x = value; }

  });

  var _y;
  Object.defineProperty(this,"y",{

    enumerable: true,
    get: function() { return _y; },

    set: function(value) { _y = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
/**
* Generic envelope for all messages.  The channel will dictate the object contained in the payload property.
* @interface
* @property {string} channel  - The unique name of the channel the message is associated with
* @property {IGeo.randomUUID} senderId  - Id of the attached client sending the message. The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid refernces by ID to break.
* @property {IGeo.randomUUID} targetId  - Id of the attached client sending the message. The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All id values SHALL be unique regardless of type and conflicting id values will be treated as the same element.  Once this ID is set, it should not be changed to avoid refernces by ID to break.
* @property {IGeo.randomUUID} messageId  - The messageId is used to coorelate multiple messages that may occur as a result of another message such as acknowledgements, status, or messagin that requires multiple steps to complete an overall task. The id value should be a UUID (see https://www.ietf.org/rfc/rfc4122.txt) to avoid conflict of data from multiple sources.  All messageId values that match will be treated as related messages.
* @property {bytes} payload  - Payload dictated by the channel this message will use
* @param {object} args - An optional object containing any mixture of the properties that belong to {@link cmapi.IGeoMessage} or the parent classes it inherits properties from.  Any properties in the args object that are not known properties will be ignored 
*/
cmapi.IGeoMessage = function ( args ) {

  "use strict";

  var _channel;
  Object.defineProperty(this,"channel",{

    enumerable: true,
    get: function() { return _channel; },

    set: function(value) { _channel = value; }

  });

  var _senderId =  IGeo.randomUUID();
  Object.defineProperty(this,"senderId",{

    enumerable: true,
    get: function() { return _senderId; },

    set: function(value) { _senderId = value; }

  });

  var _targetId =  IGeo.randomUUID();
  Object.defineProperty(this,"targetId",{

    enumerable: true,
    get: function() { return _targetId; },

    set: function(value) { _targetId = value; }

  });

  var _messageId =  IGeo.randomUUID();
  Object.defineProperty(this,"messageId",{

    enumerable: true,
    get: function() { return _messageId; },

    set: function(value) { _messageId = value; }

  });

  var _payload =  bytes();
  Object.defineProperty(this,"payload",{

    enumerable: true,
    get: function() { return _payload; },

    set: function(value) { _payload = value; }

  });


  this.patchProps = function(update) {
    var prop,
      propVal;
    for (prop in update) {
         propVal = update[prop];
         if(propVal !== undefined && propVal !== 'undefined'){
           this[prop] = propVal;
         }
      }
  };

  if( args ){ 
  this.patchProps( args );
  }

};
cmapi.inherit = function(source,target) {
  var prop;
  for (prop in source) {
    target[prop] = source[prop];
  }
};
cmapi.randomUUID = function() {
  function s(n) {
    return h((Math.random() * (1 << (n << 2))) ^ Date.now()).slice(-n); }
  function h(n) {
    return (n | 0).toString(16); }
  return [
    s(4) + s(4), s(4),
    '4' + s(3), // UUID version 4 
    h(8 | (Math.random() * 4)) + s(3), // {8|9|A|B}xxx 
    // s(4) + s(4) + s(4), 
    Date.now().toString(16).slice(-10) + s(2) // Use timestamp to avoid collisions 
  ].join('-');
};
