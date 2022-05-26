var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/sensor/:empresa", function (req, res) {
    medidaController.autenticarSensor(req, res);
})

router.get("/refrigerador/:empresa", function (req, res) {
    medidaController.autenticarRefrigerador(req, res);
})

router.get("/litro0/:idEmpresa", function (req, res) {
    medidaController.obterLitro0(req, res);
})

router.get("/litro10/:idEmpresa", function (req, res) {
    medidaController.obterLitro10(req, res);
})

router.get("/litro20/:idEmpresa", function (req, res) {
    medidaController.obterLitro20(req, res);
})

module.exports = router;