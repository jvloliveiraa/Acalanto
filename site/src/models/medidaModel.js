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


module.exports = {
    buscarUltimasMedidas,
    autenticarSensor,
    autenticarRefrigerador,
    buscarMedidasEmTempoReal
}