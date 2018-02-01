var js2xmlparser = require("js2xmlparser");

let tallytransfer = {
    "NAME": "TALLY TRANSFER",

    "exportMasterDemo1": function() {
        return "<tally></tally>";
    },


    "exportMasterDemo2": function() {

        let refobj = {
            "firstName": "Affixus",
            "lastName": "Systems"
        }

        return js2xmlparser.parse("person", refobj);
    }
};


module.exports = tallytransfer;