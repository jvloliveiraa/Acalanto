var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/cadastrarRefrigerador", function (req, res) {
    usuarioController.cadastrarRefrigerador(req, res);
})

router.post("/cadastrarSensor", function (req, res) {
    usuarioController.cadastrarSensor(req, res);
})

router.post("/cadastrarUsuarioNovoUsuario", function (req, res) {
    usuarioController.cadastrarUsuarioNovoUsuario(req, res);
})

router.post("/cadastrarRelatorio", function (req, res) {
    usuarioController.cadastrarRelatorio(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;