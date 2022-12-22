const fs = require("fs");
const getVisitas = require("../utils/getVisitas");
const toThousand = require("../utils/toThousand");

const visitaController = {
    index: (req, res) => {
        const database = getVisitas();
        res.render("visita-list", { visitas: database });
    },
    detailCasaPrincipal: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-cp", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    detailExAgroinsumos: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-ea", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    detailTaller: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-t", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    detailHangar: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-h", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    detailHangarOficina: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-ho", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    detailBalanza: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-b", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    detailAgroinsumos: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-a", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    detailCamaras: (req, res) => {
        const loggedUser = res.locals.user;
        const database = getVisitas();
        const selectVisita = database.find((visita) => {
            return req.params.id == visita.id;
        });
        console.log(loggedUser)
        res.render("visita-detail-ca", {
            visita: selectVisita,
            loggedUser: loggedUser,
            toThousand: toThousand,
        });
    },
    
    showCreateCasaPrincipal: (req, res) => {
        res.render("Casa-Principal");
    },
    showCreateExAgroinsumos: (req, res) => {
        res.render("Ex-Agroinsumos");
    },
    showCreateTaller: (req, res) => {
        res.render("Taller");
    },
    showCreateHangar: (req, res) => {
        res.render("Hangar");
    },
    showCreateHangarOficina: (req, res) => {
        res.render("Hangar-Oficina");
    },
    showCreateBalanza: (req, res) => {
        res.render("Balanza");
    },
    showCreateAgroinsumos: (req, res) => {
        res.render("Agroinsumos");
    },
    showCreateCamaras: (req, res) => {
        res.render("Camaras");
    },

    create: (req, res) => {
        //1. Lee lo que ya hay en la db y lo descomprime en un array
        const database = getVisitas();

        //2. Itera el JSON para agregar un nuevo ID a cada visita. Agrega los datos que recibe del formulario a newVisita.

        const newVisita = {
            id: database[database.length - 1].id + 1,
            opcionesrplcp: req.body.opcionesrplcp,
            obsrplcp: req.body.obsrplcp,
            opcionesrpocp: req.body.opcionesrpocp,
            obsrpocp: req.body.obsrpocp,
            opcionesfapcp: req.body.opcionesfapcp,
            obsfapcp: req.body.obsfapcp,
            opcionesftcp: req.body.opcionesftcp,
            obsftcp: req.body.obsftcp,
            opcionesupscp: req.body.opcionesupscp,
            obsupscp: req.body.obsupscp,
            opcionesrplea: req.body.opcionesrplea,
            obsrplea: req.body.obsrplea,
            opcionesrpoea: req.body.opcionesrpoea,
            obsrpoea: req.body.obsrpoea,
            opcionesfapea: req.body.opcionesfapea,
            obsfapea: req.body.obsfapea,
            opcionesrplt: req.body.opcionesrplt,
            obsrplt: req.body.obsrplt,
            opcionesrpot: req.body.opcionesrpot,
            obsrpot: req.body.obsrpot,
            opcionesftt: req.body.opcionesftt,
            obsftt: req.body.obsftt,
            opcionesfapt: req.body.opcionesfapt,
            obsfapt: req.body.obsfapt,
            opcionesrplh: req.body.opcionesrplh,
            obsrplh: req.body.obsrplh,
            opcionesrpoh: req.body.opcionesrpoh,
            obsrpoh: req.body.obsrpoh,
            opcionesfaph: req.body.opcionesfaph,
            obsfaph: req.body.obsfaph,
            opcionesfth: req.body.opcionesfth,
            obsfth: req.body.obsfth,
            opcionesftho: req.body.opcionesftho,
            obsftho: req.body.obsftho,
            opcioneslpcho: req.body.opcioneslpcho,
            obslpcho: req.body.obslpcho,
            opcionesacho: req.body.opcionesacho,
            obsacho: req.body.obsacho,
            opcionesrplb: req.body.opcionesrplb,
            obsrplb: req.body.obsrplb,
            opcionesrpob: req.body.opcionesrpob,
            obsrpob: req.body.obsrpob,
            opcionesfapb: req.body.opcionesfapb,
            obsfapb: req.body.obsfapb,
            opcioneslpcb: req.body.opcioneslpcb,
            obslpcb: req.body.obslpcb,
            opcionesupsb: req.body.opcionesupsb,
            obsupsb: req.body.obsupsb,
            opcionesftb: req.body.opcionesftb,
            obsftb: req.body.obsftb,
            opcionesfapa: req.body.opcionesfapa,
            obsfapa: req.body.obsfapa,
            opcioneschvca: req.body.opcioneschvca,
            obschvca: req.body.obschvca,
            imagecp: req.files[0].filename,
        };

        //3. Agrega newVisita al final del array database
        database.push(newVisita);

        //4. Vuelve a pasar a string la base de datos para escribir el contenido nuevo.
        const databaseJSON = JSON.stringify(database, null, 4);

        //5. Escribe el nuevo contenido en la base de datos sobrescribiendo lo anterior
        fs.writeFileSync(
            __dirname + "/../data/visitaDataBase.json",
            databaseJSON
        );


        
    },
    store: (req, res) => {
        // Ruta de almacenamiento de visita
    },
    showEdit: (req, res) => {
        const database = getVisitas();
        const selectedVisita = database.find((visita) => {
            return visita.id == req.params.id;
        });

        if (selectedVisita == null) {
            return res.send("Error 404 - Visita no encontrada");
        }
        res.render("visita-edit", {
            visita: selectedVisita,
            toThousand: toThousand,
        });
    },
    update: (req, res) => {
        //1. Lee lo que ya hay en la db y lo descomprime en un array
        const database = getVisitas();

        //2. Guarda el visitao requerido por ID en una variable
        const selectedVisita = database.find((visita) => {
            return visita.id == req.params.id;
        });

        //3. Crea una visita editado con las modificaciones realizadas conservando el ID original
        const editedVisita = {
            id: selectedVisita.id,
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: selectedVisita.image,
            category: selectedVisita.category,
        };

        //4. Inserta el visita editado en el indice donde se encontraba el visitao requerido
        database.splice(database.indexOf(selectedVisita), 1, editedVisita);

        //5. Vuelve a pasar a string la base de datos para escribir el contenido nuevo.
        const databaseJSON = JSON.stringify(database, null, 4);

        //6. Escribe el nuevo contenido en la base de datos sobrescribiendo lo anterior
        fs.writeFileSync(
            __dirname + "/../data/visitasDataBase.json",
            databaseJSON
        );

        res.redirect("/visitas/detail/" + editedVisita.id);
    },
    showDelete: (req, res) => {
        const database = getVisitas();
        const selectedVisita = database.find((visita) => {
            return visita.id == req.params.id;
        });

        if (selectedVisita == null) {
            return res.send("Error 404 - Visita no encontrado");
        }

        res.render("visita-delete", {
            visita: selectedVisita,
        });
    },
    delete: (req, res) => {
        const database = getVisitas();
        const selectedVisita = database.find((visita) => {
            return visita.id == req.params.id;
        });

        database.splice(database.indexOf(selectedVisita), 1);

        const databaseJSON = JSON.stringify(database, null, 4);

        fs.writeFileSync(
            __dirname + "/../data/viDataBase.json",
            databaseJSON
        );

        res.redirect("/visitas");
    },
};

module.exports = visitaController;
