/**
 * UI para as calculadoras
 */

class UI {

  hideAll(calculadoras) {
    console.log(calculadoras);
    console.log(calculadoras[0].param.ui);
    
    
    // Hide all parameters and results
    calculadoras.forEach(function (calc) {
      const divParamUI = document.getElementById(calc.param.ui);
      const divResultUI = document.getElementById(calc.result.ui);
      console.log(divParamUI);
      
      divParamUI.style.display = 'none';
      divResultUI.style.display = 'none';
    });
    document.getElementById('loading').style.display = 'none';
    document.querySelector('.btn').disabled = true;
  }

  showParameters(calc) {
    const paramToShowUI = document.getElementById(calc.param.ui);

    if (paramToShowUI !== undefined) {
      if (typeof calc.param.config === 'function') {
        calc.param.config();
      }
      paramToShowUI.style.display = 'block';
    }
    document.querySelector('.btn').disabled = false;
  }

  showOrHideResultsOrLoading(calc, results, loading) {
      
    // Show or Hide results
    if (calc === undefined) {
      const results = document.getElementsByName('results');
      results.forEach(function (res) {
        console.log(res.style);
        
        res.style.display = results;
      });
    } else {
      document.getElementById(calc.result.ui).style.display = results
      document.getElementById('loading').style.display = loading;
    }
  }

  showError(error) {
    // hide results and hide loader
    this.showOrHideResultsOrLoading('none', 'none');
  
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
  clearError() {
    document.querySelector('.alert').remove();
  }
}