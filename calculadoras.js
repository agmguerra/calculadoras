const calculadoras = [
  {
    id: 'txMensalFromTxAnual', 
    param: { ui: 'txconverter-param', 
             config: function() {
               const inputParamUI = document.getElementById('taxa');
               inputParamUI.value = null;
               inputParamUI.placeholder = 'Taxa anual';
             }
           },
    result: { ui: 'results-txconverter', 
              config: undefined
            },
    calculate: function(txAnual) {
      return (Math.pow((1 + (txAnual/100)), (1/12)) - 1) * 100;
    }
  },
  {
    id: 'txAnualFromTxMensal', 
    param: { ui: 'txconverter-param', 
             config: function() {
               const inputParamUI = document.getElementById('taxa');
               inputParamUI.value = null;
               inputParamUI.placeholder = 'Taxa mensal';
             }
           },
    result: { ui: 'results-txconverter', 
              config: undefined
            },
    calculate: function(periodoAtual, txAtual, periodoDesejado) {
      return (Math.pow((1 + (txAtual/100)), (periodoDesejado / periodoAtual)) - 1) * 100;;
    }
  }
];
