var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {
    instrucaoSql = `select top ${limite_linhas} temperaturaAtual, dtHora, CONVERT(varchar, dtHora, 108)
                    as momento_grafico from registro
                    where fkSensor = ${idSensor}
                    order by idRegistro desc`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    instrucaoSql = `select top 1 temperaturaAtual,dtHora, CONVERT(varchar, dtHora, 108)
    as momento_grafico from registro where
    fkSensor = ${idSensor} order by idRegistro desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarSensor(empresa) {
    instrucaoSql = `select TOP 4 idSensor from sensor join refrigerador on fkRefrigerador = idRefrigerador
    where fkEmpresa = ${empresa};`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarRefrigerador(empresa) {
    instrucaoSql = `select TOP 4 idRefrigerador from refrigerador where fkEmpresa = ${empresa};`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterLitro0(idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    select count(*) as contagem from [dbo].[RelatorioDiario] where leitePerdido = 0 and fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterLitro10(idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    select count(*) as contagem from [dbo].[RelatorioDiario] where leitePerdido >= 5 and leitePerdido <=10
     and fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterLitro20(idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    select count(*) as contagem from [dbo].[RelatorioDiario] where leitePerdido >= 15 and leitePerdido <=20
     and fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarUltimasMedidas,
    autenticarSensor,
    autenticarRefrigerador,
    buscarMedidasEmTempoReal,
    obterLitro0,
    obterLitro10,
    obterLitro20
}