cmapi.channel["map.feature.deselected.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.deselected.batch",
    "type": "object",
    "properties": {
       "features": {
        "type": "array"
      },
      "overlayId": {
        "type": "string"
      },
      "messageId": {
        "type": "string",
        "extension": "User Manipulation - Message Complete"
      } 
    },
    "required": ["features"]
  }
};
