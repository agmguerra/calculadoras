let calculadoraId = '';
let calculadora;
const ui = new UI();

// Listem for Calculator type
document.getElementById('tipodecalculadora-select').addEventListener('change', function (e) {

  ui.hideAll(calculadoras);
  calculadora = undefined;
  calculadoraId = e.target.value;
  
  if (calculadoraId !== '') {
    calculadora = getCalculadora(calculadoraId);
    ui.showParameters(calculadora);
  }
  e.preventDefault();
});

// Listem for submit
document.getElementById('calc-form').addEventListener('submit', function (e) {
  // Hide results and sow loading
  ui.showOrHideResultsOrLoading(calculadora, 'none', 'block');

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Define a calculadora escolhida
function getCalculadora(calcId) {
  let calcEscolhida;
  for (let index = 0; index < calculadoras.length; index++) {
    if (calculadoras[index].id === calculadoraId) {
      calcEscolhida = calculadoras[index];
      break;
    } 
  }
  return calcEscolhida;
}

// Calculate tx mensal to anual
function exibeCalculoTxAnualFromTxMensal() {

  const taxaUI = document.getElementById('taxa');
  const txConvertidaUI = document.getElementById('txConvertida');

  const txMensal = parseFloat(taxaUI.value);
  const txAnual = calculadora.calculate(txMensal);

  if (isFinite(txAnual)) {
    txConvertidaUI.value = txAnual.toFixed(2);

    // Show results and hide loading
    ui.showOrHideResultsOrLoading(calculadora, 'block', 'none');
  } else {
    ui.showError('Taxa inválida ou não informada.');
  }

}

// Calculate tx mensal to anual
function exibeCalculoTxMensalFromTxAnual() {

  const taxaUI = document.getElementById('taxa');
  const txConvertidaUI = document.getElementById('txConvertida');

  const txAnual = parseFloat(taxaUI.value);
  const txMensal = calculadora.calculate(txAnual);

  if (isFinite(txMensal)) {
    txConvertidaUI.value = txMensal.toFixed(2);

    // Show results and hide loading
    ui.showOrHideResultsOrLoading(calculadora, 'block', 'none');
  } else {
    ui.showError('Taxa inválida ou não informada.');
  }

}

//Calculate Results
function calculateResults() {
  if (calculadora === undefined) {
    ui.showError('Nenhuma calculadora foi escolhida.');
    return ;
  }

  switch (calculadora.id) {
    case 'txAnualFromTxMensal':
      exibeCalculoTxAnualFromTxMensal();
      break;
    case 'txMensalFromTxAnual':
      exibeCalculoTxMensalFromTxAnual();
      break;
    default:

  }

}