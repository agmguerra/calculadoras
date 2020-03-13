function verifyBrackets(str) {

  let stack = [];
  let cont = 0;

  for (let index = 0; index < str.length; index++) {
    const dig = str[index];
    switch (dig) {
      case '(': case '{': case '[':
        pilha.unshift(dig);
        cont++;
        
        break;
      case ')': case '}': case ']':
        pair = pilha.shift() + dig;        
        if ((pair === '()') || (pair === '{}') || (pair === '[]')) { 
          cont--
        }
        
        break;
    }
    if (!cont) break;
    
  }

  console.log(cont);
  
  return cont === 0;

}

function verifyBrackets2(str) {
  let stack = [];
  let ok = undefined;

  for (let index = 0; index < str.length; index++) {
    const dig = str[index];
    if ((dig === '{') || (dig === '[') || (dig === '(')) {
      stack.unshift(dig);
    }

    if (dig === ')') {
      if (stack.shift() !== '(') {
        ok = false;
        break;
      }
    }

    if (dig === ']') {
      if (stack.shift() !== '[') {
        ok = false;
        break;
      }
    }

    if (dig === '{') {
      if (stack.shift() !== '}') {
        ok = false;
        break;
      }
    }

  }
  if (ok === undefined && stack.length === 0) {
    ok = true;
  }

  return ok;
}

console.log(verifyBrackets2('a'));