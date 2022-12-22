const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const visitaController = require("../controllers/visitaController");
const assertLoggedMiddleware = require("../middlewares/assertLoggedMiddleware")
const assertAdminMiddleware = require('../middlewares/assertAdminMiddleware');
const logDBMiddleware = require("../middlewares/logDBMiddleware");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/../public/images/visitas");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage: storage });

router.get("/", visitaController.index);

router.get("/create/Casa-Principal", assertLoggedMiddleware, visitaController.showCreateCasaPrincipal);

router.get("/create/Ex-Agroinsumos", assertLoggedMiddleware, visitaController.showCreateExAgroinsumos);

router.get("/create/Taller", assertLoggedMiddleware, visitaController.showCreateTaller);

router.get("/create/Hangar", assertLoggedMiddleware, visitaController.showCreateHangar);

router.get("/create/Hangar-Oficina", assertLoggedMiddleware, visitaController.showCreateHangarOficina);

router.get("/create/Balanza", assertLoggedMiddleware, visitaController.showCreateBalanza);

router.get("/create/Agroinsumos", assertLoggedMiddleware, visitaController.showCreateAgroinsumos);

router.get("/create/Camaras", assertLoggedMiddleware, visitaController.showCreateCamaras);

router.get("/edit/:id", assertAdminMiddleware, visitaController.showEdit);

router.get("/delete/:id", assertAdminMiddleware, visitaController.showDelete);

router.get("/detailcp/:id/", visitaController.detailCasaPrincipal);

router.get("/detailea/:id/", visitaController.detailExAgroinsumos);

router.get("/detailt/:id/", visitaController.detailTaller);

router.get("/detailh/:id/", visitaController.detailHangar);

router.get("/detailho/:id/", visitaController.detailHangarOficina);

router.get("/detailb/:id/", visitaController.detailBalanza);

router.get("/detaila/:id/", visitaController.detailAgroinsumos);

router.get("/detailca/:id/", visitaController.detailCamaras);

router.post("/", [upload.any(), logCreateMiddleware], visitaController.create);

router.post("/", visitaController.store);

router.put("/:id", logEditMiddleware, visitaController.update);

router.delete("/:id", logDeleteMiddleware, visitaController.delete);

module.exports = router;
