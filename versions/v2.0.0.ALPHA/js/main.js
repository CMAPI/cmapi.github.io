/*global cmapi_channel_renderer, cmapi */
function loadJSON(path, callback) {
    alert(path);
    var xobj = new XMLHttpRequest();
    //xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        alert(xobj.status);
        alert(xobj.readyState);
        if (xobj.readyState == 4 && xobj.status == 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


/*
    loadJSON('../geonotation.schema.json', function(cmapi) {

    });
    */
    
function listChannels(cmapiDef) {
    var cl = "<ol>";
    var chan;
    var treeNodes = [{
        "key": "introduction",
        "type": "markdown",
        "title": "Introduction"
    }, {
        "key": "channels",
        "type": "markdown",
        "folder": true,
        "title": "Channels",
        "expanded": false,
        "children": []
    }, {
        "key": "primitives",
        "type": "markdown",
        "folder": true,
        "title": "Primitives",
        "expanded": false,
        "children": []
    }];
    var curNode = {};

    for (chan in cmapiDef.channels) {
        if (cmapiDef.channels.hasOwnProperty(chan)) {
            treeNodes[1].children.push({
                "key": chan,
                "title": chan,
                "type": "channels",
                "expanded": true
            });

        }
    }

    for (chan in cmapiDef.primitives) {
        if (cmapiDef.primitives.hasOwnProperty(chan)) {
            treeNodes[2].children.push({
                "key": chan,
                "title": chan,
                "type": "primitives",
                "expanded": true
            });

        }
    }
    cl += "</ol>"
    initialize(treeNodes);

}
$(function() {
    listChannels(cmapi2);
});

function initialize(treeDef) {
    //var DT = $.ui.fancytree;
    if (!document.addEventListener) {
        var message = "You are using a browser that does not support modern web capabilities.  Please use a browser such as Firefox, Chrome, Safari, or IE 9(or newer) to view this page.";
        alert(message);
        $("body").html('<p style="color: #FF0000">' + message + '</p>');
    } else {
        $.ui.fancytree.debug("Using fancytree " + $.ui.fancytree.version);
        // attach to all instances
        $("#tree").fancytree({
            source: treeDef,
            checkbox: false,
            selectMode: 1,
            icons: false,
            minExpandLevel: 1,
            activate: function(event, data) {
                if (data.node.key !== "") {
                    location.hash = data.node.data.type + "/" + data.node.key;
                }
            }
        });

        var defaultView = location.hash;
                if (defaultView !== "") {
            defaultView = defaultView.replace("#", "");
            var typeArr = defaultView.split("/");

            reloadFromHash();
        } 
    }
}


function reloadFromHash() {
    var defaultView = location.hash;
    if (defaultView !== "") {
        document.getElementById("contentArea").scrollTop = 0;

        defaultView = defaultView.replace("#", "");
        var typeArr = defaultView.split("/");
        
        if (typeArr[0] === "markdown") {
            $.get("md/"+typeArr[1] + '.md', function(data) {
                cmapi_channel_renderer.renderMarkdown(data);
            });
        } else {
            cmapi_channel_renderer.loadContent({
                type: typeArr[0],
                key: typeArr[1]
            });
        }
    }
}
