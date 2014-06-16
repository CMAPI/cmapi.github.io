var cmapi = cmapi || {};
cmapi.channels = cmapi.channel || {};

cmapi.channels.["map.feature.plot"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.feature.plot",
        "description": "Plots feature data on the map.",
        "type": "object",
        "properties": {
                  "overlayId": {
                    "description": "The ID of the overlay this feature should be loaded into. If an overlay with this ID already exists, the new feature is merged into existing overlay; otherwise, a new overlay is created. If no overlayId is included, default overlay with ID equal to sending widget’s ID is used. If an overlay exists, it will retain its status (whether visible or hidden). If an overlay is created, it will be made visible.",
                    "type": "string"
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
                    "description": "Data format of the given feature. If no format is specified, the format defaults to “kml.” A list of formats supported by a particular map implementation may be obtained by querying the map using the map.status channel (see map.status). Note that for this version of the Common Map Widget API, the only format that all map implementations must support is KML.",
                    "type": "string"
                },
                "feature": {
                    "description": "Feature data to be loaded into the map.",
                    "type": "object"
               },
                "zoom": {
                    "description": "true if map should zoom to newly loaded feature data, false if not. Default is false.",
                    "type": "boolean"
                }
        },
        "required": ["featureId", "feature"]
    },
    notes: [
    'If using the channel shouter to send a feature, embedded quotes in KML MUST be escaped with a backward slash (that is, use \" instead of ").',
    'If sending GeoJSON follow the guidance in Appendix B for style information.',
    'When plotting an Area of Interest, the format MUST be “geojson” AND the aoi object defined in Appendix B MUST be included as part of the GeoJSON parameters object.'
    ]
};


cmapi.channel.renderer = (function (){
var publicInterface;
function checkRequired (prop,schema){
	var i,len,returnValue = "optional";
	len = schema.required.length;
	for(i=0;i<len;i++){
		if(prop === schema.required[i]){
			returnValue = 'required';
			break;
		}
	}
	return returnValue;
}
publicInterface = {
	render: function (channelDef){
		var output = [],
		i=0,
		prop,
		propVal,
		optional,
		schema = channelDef.schema,
		noteLen = channelDef.notes.length;

		output.push('<h2 id="toc_0">'+schema.title+'</h2>');

		output.push('<h5 id="toc_1">Purpose:</h5>');

		output.push('<p>'+schema.description+'</p>');

		output.push('<h5 id="toc_2">Channel:</h5>');

		output.push('<p>'+schema.title+'</p>');

		output.push('<h5 id="toc_3">Payload:</h5>');

		output.push('<pre><code class="javascript">');
		output.push('{');
		for(prop in schema["properties"]){
			if(i>0 ){
				output.push(", ");
			}
			optional = checkRequired(prop,schema);
			output.push(prop+": ("+optional+" | "+schema["properties"][prop].type+")");
			
			i++;
		}
		i=0;
		output.push('}');
		output.push('</code></pre>');

		output.push('<table><thead><tr><th>Property</th><th>Required</th><th>type</th><th>Description</th></tr></thead><tbody>');

		for(prop in schema.properties){

			propVal = schema.properties[prop];
			optional = checkRequired(prop,schema);
			output.push('<tr>');
			output.push('<td>'+prop+'</td>');
			output.push('<td>'+optional+'</td>');
			output.push('<td>'+propVal.type+'</td>');
			output.push('<td>'+propVal.description+'</td>');
			output.push('</tr>');


		}
		output.push('</tbody></table>');
		output.push('<h5 id="toc_4">Notes</h5>');

		for(i=0;i<noteLen;i++){

			output.push(<p>i+':  <em>'+channelDef.notes[i]+'</em></p>');
		}
		
		return output.join("");
	}
};
return publicInterface;
}());