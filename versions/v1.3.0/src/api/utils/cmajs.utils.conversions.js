/*
The magic number 10.5 seems to be a fairly relaible number to use for transformations between map scale and camera range
*/

// Range is in meters
function scaleFromRange(range) {
    return Math.round(range * 10.5);
}


function rangeFromScale(scale) {
    return Math.round(scale / 10.5);
}
/*
Scales that map to zoom levels was extracted fom this link:
https://wiki.openstreetmap.org/wiki/Zoom_levels
If using a differnt tile scheme with differnt zoom level to scale mapping you would need to change the scals array accordingly
*/
function zoomLevelFromRange(range) {
    // Array of scale mapping to zoom level in order of 0 to 19
    var scales = [500000000, 250000000, 150000000, 70000000, 35000000, 15000000, 10000000, 4000000, 2000000, 1000000, 500000, 250000, 150000, 70000, 35000, 15000, 8000, 4000, 2000, 1000];
    var zoomLevel = 0;
    var scale = scaleFromRange(range);
    var diff, i, len = scales.length;
    // loop through scales to see shat zoom level is closet to this scale

    for (i = 0; i < len; i += 1) {
        if (i < (len - 1)) {
            if (scale < scales[i] && scale > scales[i + 1]) {
                diff = (scales[i] - scales[i + 1]) / 2;
                if ((scales[i] - scale) < diff) {
                    zoomLevel = i;
                } else {
                    zoomLevel = i + 1;
                }
                break;
            }
        }
    }
    return zoomLevel;
}

function rangeFromZoomLevel(zoomLevel) {
    // Array of scale mapping to zoom level in order of 0 to 19
    var scales = [500000000, 250000000, 150000000, 70000000, 35000000, 15000000, 10000000, 4000000, 2000000, 1000000, 500000, 250000, 150000, 70000, 35000, 15000, 8000, 4000, 2000, 1000, 500, 250, 125];
    var range = 0;
    var scale = scales[zoomLevel];
    range = rangeFromScale(scale);

    return range;
}

alert("Here is the zoom level for a camera aith range of 1600 meters:  " + zoomLevelFromRange(1600));
alert("Here is the camera range in meters for the zoom level of 15:  " + rangeFromZoomLevel(15));
//https://jsfiddle.net/e82t0xzc/11/