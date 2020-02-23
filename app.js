
let calculadoraId = '';

// Listem for Calculator type
document.getElementById('tipodecalculadora-select').addEventListener('change', function(e) {
 
  calculadoraId = e.target.value;
  showOrHideParameters(calculadoraId);

});

// Listem for submit
document.getElementById('calc-form').addEventListener('submit', function(e) {
  // Hide results and sow loading
  showOrHideResultsOrLoading(calculate, 'none', 'block');

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Exibe os parâmetros da calculadora escolhida
function showOrHideParameters(calculadoraId) {
      
  let paramToShowUI;
  let functionName;
  // Hide all parameters
  calculadoras.forEach(function(calc) {
    const divUI = document.getElementById(calc.param.ui);
    divUI.style.display = 'none';
    if (calc.id === calculadoraId) {
      paramToShowUI = divUI
      functionName = calc.param.function;
    } 
  });
  
  if (paramToShowUI !== undefined) {
    if (functionName !== undefined) {
      window[functionName](paramToShowUI);
    }
    paramToShowUI.style.display = 'block';
  }
  
}

// show or hide tx anual to tx mensal
function showHideTxAnualToMonthlyConverterParam(paramUI) {
  const inputParamUI = document.getElementById('taxa');
  inputParamUI.placeholder = 'Taxa anual';
}

// show or hide tx mensal to tx anual
function showHideTxMonthlyToAnualConverterParam(paramUI) {
  const inputParamUI = document.getElementById('taxa');
  inputParamUI.placeholder = 'Taxa mensal';
}

// Exibe ou esconde os resultados e o loading gif
function showOrHideResultsOrLoading(results, loading) {
   // Show or Hide results
   element.style.display = results;
   document.getElementById('loading').style.display = loading;
}

// Calculate tx mensal to anual
function exibeCalculoTxAnualFromTxMensal() {

  const taxaUI = document.getElementById('taxa');
  const resultsDivUI = document.getElementById('results-txconverter');
  const txConvertidaUI = document.getElementById('txConvertida');

  const txMensal = parseFloat(taxaUI.value);
  const txAnual = getTxAnualFromTxMensal(txMensal);

  if (isFinite(txAnual)) {
    txConvertidaUI.value = txAnual.toFixed(2);

    // Show results and hide loading
    showOrHideResultsOrLoading(resultsDivUI, 'block', 'none'); 
  } else {
    showError('Taxa inválida ou não informada.');
  }

}

// Calculate tx mensal to anual
function exibeCalculoTxMonthlyFromTxAnual() {

  const taxaUI = document.getElementById('taxa');
  const resultsDivUI = document.getElementById('results-txconverter');
  const txConvertidaUI = document.getElementById('txConvertida');

  const txAnual = parseFloat(taxaUI.value);
  const txMensal = getTxMensalFromTxAnual(txAnual);

  if (isFinite(txMensal)) {
    txConvertidaUI.value = txMensal.toFixed(2);

    // Show results and hide loading
    showOrHideResultsOrLoading(resultsDivUI, 'block', 'none'); 
  } else {
    showError('Taxa inválida ou não informada.');
  }

}

//Calculate Results
function calculateResults() {
  console.log(calculate);
  
  switch (calculate) {
    case 'txAnualToTxMensal':
      exibeCalculoTxAnualFromTxMensal() ;
      break;
    case 'txMensalToTxAnual':
      showHideTxMonthlyToAnualConverterParam('block');
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
  setTimeout(clearError, 2000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}

