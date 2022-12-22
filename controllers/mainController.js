const getVisitas = require("../utils/getVisitas");

const mainController = {
    main: (req, res) => {
        const visitas = getVisitas();
        res.render("index", {
            visitas: visitas,
        });
    },
    search: (req, res) => {
        const database = getVisitas();
        let keyword = req.query.busqueda;
        let results = [];

        for (let i = 0; i < database.length; i++) {
            if (
                database[i].name.toLowerCase().includes(keyword.toLowerCase())
            ) {
                results.push(database[i]);
            }
        }

        res.render("visita-search", {
            results: results,
            keyword: keyword,
        });
    },
};

module.exports = mainController;
