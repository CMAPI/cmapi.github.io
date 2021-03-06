cmapi.channel["map.feature.update"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.update",
    "type": "object",
    "properties": {
      "overlayId": {
        "type": "string"
      },
      "featureId": {
        "type": "string",
      },
      "name": {
        "type": "string"
      },
      "newOverlayId": {
        "type": "string",
      },
      "properties": {
        "additionalProperties": true,
        "type": "object"
      }
    },
    "required": ["featureId"]
  }
};
