cmapi.channel["map.feature.unplot.batch"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.feature.unplot.batch",
        "description": "Removes multiple features from the map.",
        "type": "object",
        "properties": {
                  "overlayId": {
                    "description": "The ID of the overlay where the feature to be removed is found. If no overlayId is included, default overlay with an ID equal to sending widget's ID is assumed.",
                    "type": "string",
					"default": "sending widget's ID"
                },
                "payloads": {
                    "description": "array of map.feature.unplot payload objects.  See map.feature.unplot for details",
                    "type": "array"
                },
                "messageId" : {
                    "description" : "A globally unique ID that identifies a particular message.  If sent in a request, the map widget MUST respond with a map.message.complete message (see map.message.complete channel) using this messageId to indicate which batch the map.message.complete message applies to.  This message will maintain the id throughout the lifetime of the message until a map.message.complete is called.",
                    "type" : "string"
                }
        },
        "required": ["payloads"]
    },
    notes: []
}


