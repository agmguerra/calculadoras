
let calculadoraId = '';
let calculadora;

// Listem for Calculator type
document.getElementById('tipodecalculadora-select').addEventListener('change', function (e) {

  hideAll();
  calculadora = undefined;
  calculadoraId = e.target.value;
  
  if (calculadoraId !== '') {
    calculadora = getCalculadora(calculadoraId);
    showParameters(calculadoraId);
  }

});

// Listem for submit
document.getElementById('calc-form').addEventListener('submit', function (e) {
  // Hide results and sow loading
  showOrHideResultsOrLoading('none', 'block');

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});


// Esconde param, results e loading
function hideAll() {
  // Hide all parameters and results
  calculadoras.forEach(function (calc) {
    const divParamUI = document.getElementById(calc.param.ui);
    const divResultUI = document.getElementById(calc.result.ui);
    divParamUI.style.display = 'none';
    divResultUI.style.display = 'none';
  });
  document.getElementById('loading').style.display = 'none';
  document.querySelector('.btn').disabled = true;
}

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

// Exibe os parâmetros da calculadora escolhida
function showParameters() {

  const paramToShowUI = document.getElementById(calculadora.param.ui);

  if (paramToShowUI !== undefined) {
    if (typeof calculadora.param.config === 'function') {
      calculadora.param.config();
    }
    paramToShowUI.style.display = 'block';
  }
  document.querySelector('.btn').disabled = false;
}

// Exibe ou esconde os resultados e o loading gif
function showOrHideResultsOrLoading(results, loading) {
  console.log(calculadora);
  
  // Show or Hide results
  if (calculadora === undefined) {
    const results = document.getElementsByName('results');
    results.forEach(function (res) {
      console.log(res.style);
      
      res.style.display = results;
    });
  } else {
    document.getElementById(calculadora.result.ui).style.display = results
    document.getElementById('loading').style.display = loading;
  }
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
    showOrHideResultsOrLoading('block', 'none');
  } else {
    showError('Taxa inválida ou não informada.');
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
    showOrHideResultsOrLoading('block', 'none');
  } else {
    showError('Taxa inválida ou não informada.');
  }

}

//Calculate Results
function calculateResults() {
  if (calculadora === undefined) {
    showError('Nenhuma calculadora foi escolhida.');
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

// Show error
function showError(error) {
  // hide results and hide loader
  showOrHideResultsOrLoading('none', 'none');

  // Create a div
  const errorDivUI = document.createElement('div');
  // Get elements
  const cardUI = document.querySelector('.card');
  const headingUI = document.querySelector('.heading');

  // Add a class
  errorDivUI.className = 'alert alert-danger';
  // Create text node and append to div
  errorDivUI.appendChild(document.createTextNode(error));

  //Insert error above heading
  cardUI.insertBefore(errorDivUI, headingUI);

  // Remove alert after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}

