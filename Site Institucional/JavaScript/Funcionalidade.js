/* Função do Simulador Financeiro */

function simular_prejuizo() {
    if (input_frasco_recebido.value == "" || input_frasco_perdido.value == "") {
        alert("Por favor preencha os campos apenas com números");
        input_frasco_recebido.value = "";
        input_frasco_perdido.value = "";
    }
    else if (Number(input_frasco_recebido.value) < Number(input_frasco_perdido.value)) {
        alert("Quantidade de frascos perdidos não podem ser maiores que frascos recebidos")
        input_frasco_recebido.value = "";
        input_frasco_perdido.value = "";
    }
    else {
        var frasco_recebido = Number(input_frasco_recebido.value);
        var frasco_perdido = Number(input_frasco_perdido.value);
        var frasco_media = Number(select_frasco_media.value);

        var frasco_restante = frasco_recebido - frasco_perdido;
        var porc_frasco_restante = (frasco_restante * 100) / frasco_recebido;
        var porc_frasco_perdido = (frasco_perdido * 100) / frasco_recebido;
        var prejuizo = frasco_media * frasco_perdido;

        p_simulador.innerHTML = ` 
        O número de doações de leites maternos recebidos foram de <b style="color:white"><u>${frasco_recebido}</u> frascos</b>, destas doações apenas <b style="color:white"><u>${porc_frasco_restante.toFixed(2)}</u>%</b> foram conservados adequadamente, os outros <b style="color:white"><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> foram descartados. 
        Para suprir a necessidade destes <b style="color:white"> <u>${porc_frasco_perdido.toFixed(2)}</u>%</b>, é utilizado o suplemento alimentar, tendo uma média de valor de <b style="color:white"><u>R$${frasco_media.toLocaleString("pt-BR", { currency: 'BRL' })}</u></b>. Ou seja, por mês o valor gasto é de <b style="color:white"><u>R$${prejuizo.toLocaleString("pt-BR", { currency: 'BRL' })}</u></b>. 
        Nós da Acalanto vamos te ajudar a reduzir estes <b style="color:white"><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> monitorando o leite materno de forma adequada. Sendo assim, os <b style="color:white"><u>${porc_frasco_perdido.toFixed(2)}</u>%</b> que você teve de perda e os gastos com os suplementos poderão diminuir em até 50% (que já serão notados em 3 meses após a implementação). 
        `
    }
}

/* Término da função do Simulador Financeiro */