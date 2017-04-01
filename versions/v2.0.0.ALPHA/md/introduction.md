# Common Map API version 2

This is an early draft of CMAPI v2 concepts to be used a starting point for defnition of an inital CMAPI 2.0.0 release.  Everything contained in this document is subject to change without notice

## Overview 
Common Map API v2 is a follow on solution to CMAPI 1.3.0 that expands the scope of what CMAPI can be used for and provides a more concise API that adresses a number of deficiencies found in previous versions.

CMAPI v2 will attempt to create a new set of geospatial primitive objects that are reusable and effective for rich interaction between the data provider and map over CMAPI.  CMAPI v2 departs from the reliance on text document formatted data such as KML and GeoJSON and provides rich interaction for only data provided via the primitive mechinism.

CMAPI v2 will allow documents such as KML and GeoJSON to be passed to a map, but only for display.  Any application desiring to have interaction usch as click events, eding, selction will need to use the geo primitive objects.  Passing large blobs of KML with nor way to gaurantee existence of ids, and now ay to enforce unique ids has created a problematic msituation for devlopers to create consitent behavior when interacting with data that is not uniquely adressable.

CMAPI v2 aslo aims to provide actual language implmentations of these geospatial primitives that are auto generated from the same JSON Schmea that this documentaiton id generated from.  These code geernated obecjts adhere to the desing documented here, but are provided in target programming languages for dvelopment use.  There is also a Google Protocal Buffers binary serialization capability that allows these geo primitive objects to be tranaslated tfrom any supported language to a binary form and desrialized in a differnt programming lanuge runtime.

The current supported languages are Java and JavaScript.  


-------------------------------------------
See the [CMAPI Github][1] space for source code 

Visit [cmapi.org][2] for more information about previous versions of CMAPI 

  [1]: https://github.com/cmapi/cmapi2
  [2]: http://cmapi.org

