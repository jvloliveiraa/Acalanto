var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeEmpresa, cnpjEmpresa, logradouroEmpresa, bairroEmpresa, cepEmpresa,
    cidadeEmpresa, estadoEmpresa, complementoEmpresa, telefoneEmpresa) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO empresa (nomeEmpresa, cnpj, cep, estado, cidade, bairro, logradouro, complemento, telefone_fixo) VALUES ('${nomeEmpresa}', '${cnpjEmpresa}', '${cepEmpresa}',
    '${estadoEmpresa}',  '${cidadeEmpresa}', '${bairroEmpresa}', '${logradouroEmpresa}',
    '${complementoEmpresa}', '${telefoneEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarUsuario(nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, empresaUsuario) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO usuario (nomeUsuario, sobrenome, email, senha, fkEmpresa) VALUES 
    ('${nomeUsuario}', '${sobrenomeUsuario}', '${emailUsuario}', '${senhaUsuario}', ${empresaUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarRelatorio(qtd_estoque, qtd_doacao, qtd_desperdicio, observacao,
    fkUsuario, fkEmpresa, fkRefrigerador) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO relatorioDiario (fkUsuario, fkEmpresa, fkRefrigerador, totalLeite, leiteRecebido, leitePerdido, observacao) VALUES 
    (${fkUsuario}, ${fkEmpresa}, ${fkRefrigerador}, '${qtd_estoque}', '${qtd_doacao}', '${qtd_desperdicio}',
    '${observacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarRefrigerador(marcaRefrigerador, tipoRefrigerador, localizacaoRefrigerador, chaveUsuario, chaveEmpresa) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO refrigerador (marcaRefrigerador, tipoRefrigerador, localizacao, fkUsuario, fkEmpresa) VALUES 
    ('${marcaRefrigerador}', '${tipoRefrigerador}', '${localizacaoRefrigerador}', ${chaveUsuario}, ${chaveEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarSensor(nomeSensor, tipoSensor, chaveRefrigerador) {
    //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO sensor (nomeSensor, tipoSensor, fkRefrigerador) VALUES 
    ('${nomeSensor}', '${tipoSensor}', ${chaveRefrigerador});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    entrar,
    cadastrar,
    cadastrarUsuario,
    cadastrarRefrigerador,
    cadastrarSensor,
    cadastrarRelatorio,
    listar,
};