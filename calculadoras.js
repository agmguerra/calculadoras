const calculadoras = [
  {
    id: 'txMensalFromTxAnual', 
    param: { ui: 'txconverter-param', 
             config: function() {
               const inputParamUI = document.getElementById('taxa');
               inputParamUI.placeholder = 'Taxa anual';
             }
           },
    result: { ui: 'results-txconverter', 
              config: undefined
            }
  },
  {
    id: 'txAnualFromTxMensal', 
    param: { ui: 'txconverter-param', 
             config: function() {
               const inputParamUI = document.getElementById('taxa');
               inputParamUI.placeholder = 'Taxa mensal';
             }
           },
    result: { ui: 'results-txconverter', 
              config: undefined
            }
  }
];
