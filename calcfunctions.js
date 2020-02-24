
// Converter uma taxa mensal para anual
function getTxAnualFromTxMensal(txMensal) {
  return (Math.pow((1 + (txMensal/100)), 12) - 1) * 100;
}

// Converter uma taxa anual para mensal
function getTxMensalFromTxAnual(txAnual) {
  return (Math.pow((1 + (txAnual/100)), (1/12)) - 1) * 100;
}

function getTxConvertida(periodoAtual, txAtual, periodoDesejado) {
  return (Math.pow((1 + (txAtual/100)), (periodoDesejado / periodoAtual)) - 1) * 100;;
}