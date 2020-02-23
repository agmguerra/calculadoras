
// Converter uma taxa mensal para anual
function getTxAnualFromTxMensal(txMensal) {
  const res = (Math.pow((1 + (txMensal/100)), 12) - 1) * 100;
  console.log('Anual = ' + res);
  
  return res;
}

// Converter uma taxa anual para mensal
function getTxMensalFromTxAnual(txAnual) {
  const res = (Math.pow((1 + (txAnual/100)), (1/12)) - 1) * 100;
  console.log('Mensal = ' + res);
  return res;
}

function getTxConvertida(periodoAtual, txAtual, periodoDesejado) {
  const tx =  (Math.pow((1 + (txAtual/100)), (periodoDesejado / periodoAtual)) - 1) * 100;
  return tx;
}