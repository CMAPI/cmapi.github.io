/*global window, cmapi, tv4, alert */

var cmapi_channel_renderer = (function() {
    var publicInterface,
        baseUrl = "../src/schemas/",
        currentSchema,
        currentChannel,
        currentOverview;





    // Creates an HTML table for the schema with embedded tables via recursion for properties with sub-properties
    function getObjectRows(schema, output, parent) {
        var prop,
            propVal,
            optional,
            type,
            defaultVal = "",
            len,
            i,
            subProp,
            j,
            options,
            opLen,
            opt,
            description,
            allProp,
            refArr,
            props,
            appendedRows = [];


        if (schema.hasOwnProperty("properties")) {
            props = schema.properties;
        } else if (schema.hasOwnProperty("allOf")) {
            //output.push(' (<span style="font-weight:600;">' + 'Inherits properties from:');
            for (allProp in schema.allOf) {

                if (schema.allOf[allProp].hasOwnProperty("properties")) {
                    props = schema.allOf[allProp].properties;
                } else if (schema.allOf[allProp].hasOwnProperty("$ref")) {
                    refArr = schema.allOf[allProp]["$ref"].split("/");

                    //output.push(' (<a href="#' + refArr[1] + '/' + refArr[2] + '"" >' + refArr[2] + '</a>');

                    // output.push('<tr>');
                    // output.push('<td colSpan="3" class="mdl-data-table__cell--non-numeric">');
                    appendedRows.push(getObjectRows(cmapi2[refArr[1]][refArr[2]], output));
                    // output.push('</td>');
                    // output.push('</tr>');
                }
            }
            //output.push(' </span>)');
        }

        output.push(appendedRows.join(""));

        // DO NOT wrap in if hasOwnProperty as JSLint may suggest or no properties will get enumerated
        for (prop in props) {
            defaultVal = "";
            propVal = props[prop];

            if (propVal.hasOwnProperty('default')) {
                defaultVal = propVal.default;
            }
            if(schema.hasOwnProperty("setInhertitedDefaults")){
                if(schema.setInhertitedDefaults.hasOwnProperty(prop)){
                   defaultVal = schema.setInhertitedDefaults[prop].value;
                }
            }
            if ($.isArray(propVal)) {
                output.push('<tr>');
                output.push('<td colSpan="3" class="mdl-data-table__cell--non-numeric">' + prop + '</td>');
                len = propVal.length;
                for (i = 0; i < len; i += 1) {
                    output.push('<tr>');
                    output.push('<td colSpan="3" class="mdl-data-table__cell--non-numeric">');
                    // output.push(getObjectTable(propVal[i], output, schema));
                    output.push("Propval is an array...")
                    output.push('</td>');
                    output.push('</tr>');
                }
                output.push('</td>');
                output.push('</tr>');
            } else {
                output.push('<td class="mdl-data-table__cell--non-numeric">' + prop + '</td>');
                if (propVal.type === "array") {
                    if (propVal.hasOwnProperty("items")) {
                        if (propVal.items.hasOwnProperty("$ref")) {
                            refArr = propVal.items.$ref.split("/");
                            output.push('<td class="mdl-data-table__cell--non-numeric">' + propVal.type + ' of <br/><a href="#' + refArr[1] + '/' + refArr[2] + '"" >' + refArr[2] + '</a></td>');
                        }
                    }
                } else if (propVal.hasOwnProperty("$ref")) {
                    refArr = propVal.$ref.split("/");
                    output.push('<td class="mdl-data-table__cell--non-numeric"><a href="#' + refArr[1] + '/' + refArr[2] + '"" >' + refArr[2] + '</a></td>');
                    if(!propVal.hasOwnProperty("description")){
                        try{
                    propVal.description = cmapi2[refArr[1]][refArr[2]].description;
                } catch (e) {
                    propVal.description = "";
                    }
                }
                } else if (propVal.hasOwnProperty("enum")) {

                    var enumOps = "";
                    for (var i = 0; i < propVal.enum.length; i++) {
                        enumOps += propVal.enum[i] + "<br/>"
                    }
                    // output.push(' (<span style="font-weight:600;">' + 'Inherits properties from: <a href="#' + refArr[1] + '/' + refArr[2] + '"" >' + refArr[2] + '</a></span>)');
                    output.push('<td class="mdl-data-table__cell--non-numeric">enumeration:<br/>' + enumOps + '</td>');
                    //propVal.description = cmapi2[refArr[1]][refArr[2]].description;
                } else {
                    output.push('<td class="mdl-data-table__cell--non-numeric">' + propVal.type + '</td>');
                }

                output.push('<td class="mdl-data-table__cell--non-numeric"><p>' + propVal.description + '</p>');


                if (defaultVal !== "") {
                    output.push('<p><strong>Default Value: </strong>' + defaultVal + '</p>');
                }

                output.push('</td>');
                output.push('</tr>');
                if (propVal.hasOwnProperty("properties")) {
                    subProp = propVal;

                    output.push('<tr>');
                    output.push('<td colSpan="3" class="mdl-data-table__cell--non-numeric">');
                    output.push('<table class="mdl-data-table  mdl-js-data-table" style="white-space: normal;"><thead><tr>');
                    output.push('<th class="mdl-data-table__cell--non-numeric">Name</th>');
                    output.push('<th class="mdl-data-table__cell--non-numeric">Type</th>');
                    output.push('<th>Description</th>');
                    output.push('</tr></thead><tbody>');
                    output.push(getObjectRows(subProp, output));
                    output.push('</tbody></table>');
                    output.push('</td>');
                    output.push('</tr>');

                } else if (propVal.hasOwnProperty("oneOf")) {
                    options = propVal.oneOf;
                    opLen = options.length;
                    output.push('<tr>');
                    output.push('<td colSpan="3" class="mdl-data-table__cell--non-numeric">');
                    output.push('One Of: <br/>');
                    for (j = 0; j < opLen; j += 1) {
                        opt = options[j];
                        output.push(options[j].title + ' <br/>');
                        output.push('<table class="mdl-data-table  mdl-js-data-table" style="white-space: normal;"><thead><tr>');
                        output.push('<th class="mdl-data-table__cell--non-numeric">Name</th>');
                        output.push('<th class="mdl-data-table__cell--non-numeric">Type</th>');
                        output.push('<th>Description</th>');
                        output.push('</tr></thead><tbody>');
                        output.push(getObjectRows(opt, output));
                        output.push('</tbody></table>');
                    }
                    output.push('</td>');
                    output.push('</tr>');
                }
            }
        }
    }




    //Creates the overall HTML template to render to page
    function render(schema, title) {

        var output = [],
            i = 0,
            noteLen = 0;

        output.push('<div class="mdl-card mdl-shadow--2dp" style="width:100%; margin-top: 24px; margin-bottom: 48px; padding: 24px;">');

        output.push('<h3>' + title + '</h3>');
        if (schema.hasOwnProperty("description")) {
            output.push('<p>' + schema.description + '</p>');
        }

        output.push('<h4>Properties</h4><br/>');

        output.push('<table class="mdl-data-table  mdl-js-data-table" style="white-space: normal;"><thead><tr>');
        output.push('<th class="mdl-data-table__cell--non-numeric">Name</th>');
        output.push('<th class="mdl-data-table__cell--non-numeric">Type</th>');
        // output.push('<th>Default</th>');
        output.push('<th>Description</th>');
        output.push('</tr></thead><tbody>');

        getObjectRows(schema, output, schema);

        output.push('</tbody></table>');
        output.push('</div>');
        output.push('<div class="mdl-card mdl-shadow--2dp" style="width:100%; margin-top: 24px; margin-bottom: 48px; padding: 24px;">');
        output.push('<h4>' + title + ' Schema</h4>');
        output.push('<pre><code class="javascript">');

        output.push(JSON.stringify(schema, undefined, 2));
        output.push('</code></pre>');
        output.push('</div>');
        // output.push('</div>');

        //  output.push(' </div>');

        // output.push('</div>');


        return output.join("");
    }


    function channelLoaded(args) {
        var schema = cmapi2[args.type][args.key];
        currentChannel = args.channel;
        currentSchema = schema; //.schema;
        $('#main').html(render(schema, args.key));
        window.scrollTo(0, 0);
    }

    publicInterface = {
        loadContent: function(target) {
            $('#main').html('<img src="img/loading.gif" />');
            if (!target.hasOwnProperty("type")) {
                target.type = "";
            }
            switch (target.type) {
                case "overview":
                    loadOverview(target.key);
                    break;
                default:
                    channelLoaded(target);
                    break;
            }
        },
        renderMarkdown: function(text) {
            var output = [];
            output.push('<div class="mdl-card mdl-shadow--2dp" style="width:100%; margin-top: 24px; margin-bottom: 48px; padding: 24px;">');
            output.push(marked(text));
            output.push('</div>');

            $('#main').html(output.join(""));

        }
    };

    return publicInterface;
}());
