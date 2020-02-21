
// Converter uma taxa mensal para anual
function getTxAnualFromTxMensal(txMensal) {
  return Math.pow((1 + txMensal), 12) - 1;
}

// Converter uma taxa anual para mensal
function getTxMensalFromTxAnual(params) {
  return Math.pow(1 + txMensal), (1/12) - 1;
}