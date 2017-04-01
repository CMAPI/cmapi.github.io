# CMAPI2 Geo Primitives

The CMAPI2 Geo Primitives are resuable objects that define the basic constructs bneeded to define most geospatial visualizations on a map.  These primitves are designed to support programming language specifc definitions that can transfer between applications via a common binary format based on Google Protocal Buffers.

The primitives are generated for each language by a code generator that reads the JSON schema definitions of the obejcts and outputs Java and JavaScript code libraries.  The code generator is designed to be extensible but only two langauges and the protocal buffer file output are the target for the CMAPI 2 Alpha prototype.

In the future autoi generated Java Docs and JS Docs will augment the general definitions provided by the schemas in this documentation

