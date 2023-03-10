
GetProduto(){
    debugger
    let endereco = '@(Model.GatewayServico + @Model.GatewayServicoApi + '/' + "PesquisarProdutoUnidade")' + '/' + app@(modelName).scope@(pcEmpresa.Id).chavePesquisa + '/' + app@(modelName).scope@(pcProduto.Id).chavePesquisa + '/' + app@(modelName).scope@(pcUnidade.Id).chavePesquisa;

    debugger
    $.ajax({
        url: endereco,
        type: AjaxTypeEnum.Get,
        headers: ValidationToken.getJWTToken(),
        erro: (err) => {
debugger
            // Não autorizado
            if (err.responseJSON.status === statusRetornoEnum.Unauthorized) {

                // Atualizando o token
                if (Ambiente.gatewayServico) {
                    Ambiente.AtualizarToken();
                }
            }
            else {
                // Mensagem de feedback para o usuário.
                smartBox.Alerta(null, ExclamacaoEnum.Cancelado, errConcluirOperacaoCons, TempoMensagemEnum.Medio);
            }
        },
        success: function (response) {
            debugger
            if (response == null) {
    
            }
        }
    })


},
