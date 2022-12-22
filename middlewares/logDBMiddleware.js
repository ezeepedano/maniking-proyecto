const fs = require("fs");
// Guarda logs de las paginas a las que se ingresan ignorando los pedidos de /favicon.ico
logCreateMiddleware = (req, res, next) => {
    fs.appendFileSync(
        "logDB.txt",
        "Se creó el visita " + req.body.name + "\r\n"
    );

    next();
};

logDeleteMiddleware = (req, res, next) => {
    fs.appendFileSync("logDB.txt", "Se eliminó un visita!" + "\r\n");

    next();
};

logEditMiddleware = (req, res, next) => {
    fs.appendFileSync(
        "logDB.txt",
        "Se editó el visita " + req.body.name + "\r\n"
    );

    next();
};

module.exports = {
    logCreateMiddleware,
    logDeleteMiddleware,
    logEditMiddleware,
};
