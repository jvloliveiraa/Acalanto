var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeEmpresa = req.body.nomeServer;
    var cnpjEmpresa = req.body.cnpjServer;
    var logradouroEmpresa = req.body.logradouroServer;
    var bairroEmpresa = req.body.bairroServer;
    var cepEmpresa = req.body.cepServer;
    var cidadeEmpresa = req.body.cidadeServer;
    var estadoEmpresa = req.body.estadoServer;
    var complementoEmpresa = req.body.complementoServer;
    var telefoneEmpresa = req.body.telefoneServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(nomeEmpresa, cnpjEmpresa, logradouroEmpresa, bairroEmpresa, cepEmpresa,
        cidadeEmpresa, estadoEmpresa, complementoEmpresa, telefoneEmpresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeUsuario = req.body.nomeUsuarioServer;
    var sobrenomeUsuario = req.body.sobrenomeUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var empresaUsuario = req.body.empresaUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarUsuario(nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, empresaUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarRefrigerador(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var marcaRefrigerador = req.body.marcaRefrigeradorServer;
    var tipoRefrigerador = req.body.tipoRefrigeradorServer;
    var localizacaoRefrigerador = req.body.localizacaoRefrigeradorServer;
    var chaveUsuario = req.body.chaveUsuarioServer;
    var chaveEmpresa = req.body.chaveEmpresaServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarRefrigerador(marcaRefrigerador, tipoRefrigerador, localizacaoRefrigerador, chaveUsuario, chaveEmpresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarSensor(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    
    var nomeSensor = req.body.nomeSensorServer;
    var tipoSensor = req.body.tipoSensorServer;
    var chaveRefrigerador = req.body.chaveRefrigeradorServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarSensor(nomeSensor, tipoSensor, chaveRefrigerador)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarUsuarioNovoUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeUsuario = req.body.nomeUsuarioServer;
    var sobrenomeUsuario = req.body.sobrenomeUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var empresaUsuario = req.body.empresaUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarUsuario(nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, empresaUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarRelatorio(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    
    var qtd_estoque = req.body.qtd_estoqueServer;
    var qtd_doacao = req.body.qtd_doacaoServer;
    var qtd_desperdicio = req.body.qtd_desperdicioServer;
    var observacao = req.body.observacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    var fkRefrigerador = req.body.fkRefrigeradorServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarRelatorio(qtd_estoque, qtd_doacao, qtd_desperdicio, observacao,
        fkUsuario, fkEmpresa, fkRefrigerador)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarUsuario,
    cadastrarRefrigerador,
    cadastrarSensor,
    cadastrarUsuarioNovoUsuario,
    cadastrarRelatorio,
    listar,
    testar
}