const fs = require("fs");
const path = require("path");

const getVisitas = (req, res) => {
    const dbJson = fs.readFileSync(
        path.resolve(__dirname, "../data/visitaDataBase.json"),
        { encoding: "utf-8" }
    );
    return JSON.parse(dbJson);
};

module.exports = getVisitas;
