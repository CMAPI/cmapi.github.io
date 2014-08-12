cmapi.channel["map.feature.plot.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.plot.batch",
    "description": "Plots a batch of feature data on the map.",
    "type": "object",
    "properties": {
      "payloads": {
        "description": "array of map.feature.plot payload objects.  See map.feature.plot for details",
        "type": "array"
      },
      "overlayId": {
        "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget’s ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "readOnly": {
        "description": "Valid values are “true” or “false”. If “true”, then the end user MUST NOT be able to edit the feature from the map’s user interface, if “false” the end user MAY edit the feature from the map’s user interface. Default value is “true”.   If an edit takes place, the map SHOULD dispatch a map.feature.plot with the updated feature to ensure other widgets are aware that a change took place.",
        "type": "boolean",
        "default": true
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  If sent in a request, the map widget MUST respond with a map.message.complete message (see map.message.complete channel) using this messageId to indicate which batch the map.message.complete message applies to.  This message will maintain the id throughout the lifetime of the message until a map.message.complete is called.",
        "type": "string"
      }
    },
    "required": ["features"]
  },
  notes: [
    'Feature object properties are defined in map.feature.plot ',
    'For overlayId and readOnly when included at the batch level, these values SHALL be applied to all feature objects in the features array that don’t include the corresponding element i.e. similar behavior to CSS.  See map.feature.plot for definitions of these properties. '
  ]
};