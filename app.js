
let calculate = '';

// Listem for Calculator type
document.getElementById('tipodecalculadora-select').addEventListener('change', function(e) {
  calculate = e.target.value;
  showOrHideParameters(e.target.value);
});

// Listem for submit
document.getElementById('calc-form').addEventListener('submit', function(e) {
  // Hide results and sow loading
  showOrHideResultsOrLoading('none', 'block');

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Exibe os parâmetros da calculadora escolhida
function showOrHideParameters(calcType) {
  let calculateFunction;
  console.log(document.getElementById('calc-param-txconverter').tagName);
  
  // Hide all parameters
  showHideTxAnualToMonthlyConverterParam('none');

  switch (calcType) {
    case 'txAnualToTxMensal':
      showHideTxAnualToMonthlyConverterParam('block');
      break;
    case 'txMensalToTxAnual':
      showHideTxMonthlyToAnualConverterParam('block');
      break;
    default:
  
  }
  console.log(calcType);
}

// show or hide tx anual to tx mensal
function showHideTxAnualToMonthlyConverterParam(showHide) {
  const divParamUI = document.getElementById('calc-param-txconverter');
  const inputParamUI = document.getElementById('taxa');
  
  inputParamUI.placeholder = 'Taxa anual';
  divParamUI.style.display = showHide;
}

// show or hide tx mensal to tx anual
function showHideTxMonthlyToAnualConverterParam(showHide) {
  const divParamUI = document.getElementById('calc-param-txconverter');
  const inputParamUI = document.getElementById('taxa');
  
  inputParamUI.placeholder = 'Taxa mensal';
  divParamUI.style.display = showHide;
}


// Exibe ou esconde os resultados e o loading gif
function showOrHideResultsOrLoading(element, results, loading) {
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

