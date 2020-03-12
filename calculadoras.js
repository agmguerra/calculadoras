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
    calculate: function(txMensal) {
      return (Math.pow((1 + (txMensal/100)), 12) - 1) * 100;
    }
  },
  {
    id: 'valorFuturo',
    param: {
      ui: 'valorfuturo-param',
      config: undefined
    },
    result: {
      ui: 'results-valorfuturo',
      config: undefined
    },
    calculate: (presentValue, taxa, periodo) => {
      return presentValue * Math.pow((1 + taxa), periodo);
    }
  }
];
