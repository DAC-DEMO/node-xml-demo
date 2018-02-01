let tt = require("./tallytrasnser.master");

function main() {
    try {
        console.log(tt.NAME);
        console.log(tt.NAME);

        let xml_str = tt.exportMasterDemo2();
        console.log(xml_str);
    } catch (err) {
        console.log(err);
    }
};

main();