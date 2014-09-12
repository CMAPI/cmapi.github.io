cmapi.overview["cmapi.appendix.d"] = {
  "title": "Appendix D: Unique Identifiers",
  "sections": [{
    "title": "Unique Identifiers",
    "paragraphs": [
      "Because many different widgets may send messages over the CMAPI asynchronously, the importance of being able to ensure items such as overlayId and messageId are globally unique cannot be stressed enough.  If items that the CMAPI indicates SHOULD or MUST be globally unique, or unique to an overlay, etc., are not in fact unique, “strange” behavior becomes a real possibility.  Although guaranteeing true global uniqueness is not possible, to achieve the highest probable possibility of global uniqueness, identifiers SHOULD use UUID (also referred to as GUID) formatted identifiers generated according to RFC 4122 (<a href=\"http://www.ietf.org/rfc/rfc4122.txt\">http://www.ietf.org/rfc/rfc4122.txt</a>). Widgets MAY format identifiers any way they choose (e.g., human readable), but widgets SHOULD either prepend or append the RFC 4122 conformant UUID to the chosen identifier.  In any case, the component sending the message SHALL be responsible for handling errors relating to identifier conflicts generated by the receiving application.",
      "Some Environments such as the OWF 7 OWF.Util.guid() method provide a utility to generate valid UUIDs.  It is recommended applications utilize existing well known UUID generators when possible."
    ]
  }]
};
