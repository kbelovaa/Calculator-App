describe('Home CC E2E', () => {
  it('CC home page successfully loads', () => {
    cy.visit('/');
  });

  it('should display entered value', () => {
    cy.get('[data-cy="btn5"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', '5');
  });

  it('should display expression and clear input after enter of operation', () => {
    cy.get('[data-cy="btn+"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '5+');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should perform addition of two numbers', () => {
    cy.get('[data-cy="btn2"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '5+2=');
    cy.get('[data-cy="displayInput"]').should('have.text', '7');
  });

  it('should write expression to the history', () => {
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '5+2');
  });

  it('should clear input after pressing C', () => {
    cy.get('[data-cy="btnC"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '5+2=');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should display two-digit number', () => {
    cy.get('[data-cy="btn1"]').click();
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '10');
  });

  it('should perform substraction of two numbers', () => {
    cy.get('[data-cy="btn-"]').click();
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '10-6=');
    cy.get('[data-cy="displayInput"]').should('have.text', '4');
  });

  it('should write new expression to the beginning of the history', () => {
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '10-6');
    cy.get('[data-cy="historyList"] > :last-child').should('have.text', '5+2');
  });

  it('should clear display after pressing CE', () => {
    cy.get('[data-cy="btnCE"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should delete last digit of value after pressing Del', () => {
    cy.get('[data-cy="btn8"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btnDel"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '8');
  });

  it('should perform multiplication of two numbers', () => {
    cy.get('[data-cy="btn*"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '8*3=');
    cy.get('[data-cy="displayInput"]').should('have.text', '24');
  });

  it('should change sign of a value', () => {
    cy.get('[data-cy="btn+-"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '-24');
  });

  it('should perform division of two numbers', () => {
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '-24/6=');
    cy.get('[data-cy="displayInput"]').should('have.text', '-4');
  });

  it('should calculate remainder of the division', () => {
    cy.get('[data-cy="btn%"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '-4%3=');
    cy.get('[data-cy="displayInput"]').should('have.text', '-1');
  });

  it('should prevent division by zero', () => {
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', "Can't divide by zero");
  });

  it('should enter a value after error without pressing C or CE', () => {
    cy.get('[data-cy="btn7"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '7');
  });

  it('should prevent calculating the remainder from dividing by zero', () => {
    cy.get('[data-cy="btn%"]').click();
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', "Can't divide by zero");
  });

  it('should write only one point in a number', () => {
    cy.get('[data-cy="btn."]').click();
    cy.get('[data-cy="btn."]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '.');
  });

  it('should correctly perceive real numbers starting with a dot', () => {
    cy.get('[data-cy="btn9"]').click();
    cy.get('[data-cy="btn+"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '0.9+');
  });

  it('should output zero when executing +/- with an empty string', () => {
    cy.get('[data-cy="btn+-"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '0');
  });

  it('should write only one zero to an empty input', () => {
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '0');
  });

  it('should perform operations on more than two numbers', () => {
    cy.get('[data-cy="btn."]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '0.9+0.3');
    cy.get('[data-cy="displayExpr"]').should('have.text', '1.2/');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '1.2/6');
    cy.get('[data-cy="displayExpr"]').should('have.text', '1.2/6=');
    cy.get('[data-cy="displayInput"]').should('have.text', '0.2');
  });

  it('should round to three digits after the dot', () => {
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '0.067');
  });

  it('should use zero as the first operand after performing the operation with an empty input', () => {
    cy.get('[data-cy="btnCE"]').click();
    cy.get('[data-cy="btn+"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '0+');
  });

  it('should hide history', () => {
    cy.get('[data-cy="btnOpenHist"]').click();
    cy.get('[data-cy="historyWrap"]').should('not.exist');
  });

  it('should open history', () => {
    cy.get('[data-cy="btnOpenHist"]').click();
    cy.get('[data-cy="historyWrap"]').should('be.visible');
  });

  it('should clear history and display', () => {
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btnClearAllHist"]').click();
    cy.get('[data-cy="historyList"]').should('have.text', '');
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should move through the navigation pages', () => {
    cy.get('[data-cy="linkSettings"]').click();
    cy.url().should('eq', 'http://localhost:3000/settings');
    cy.get('[data-cy="linkHomeFC"]').click();
    cy.url().should('eq', 'http://localhost:3000/FC');
    cy.get('[data-cy="linkHomeCC"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

describe('Home FC E2E', () => {
  it('FC home page successfully loads', () => {
    cy.visit('/FC');
  });

  it('should display entered value', () => {
    cy.get('[data-cy="btn5"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', '5');
  });

  it('should display expression and clear input after enter of operation', () => {
    cy.get('[data-cy="btn+"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '5+');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should perform addition of two numbers', () => {
    cy.get('[data-cy="btn2"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '5+2=');
    cy.get('[data-cy="displayInput"]').should('have.text', '7');
  });

  it('should write expression to the history', () => {
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '5+2');
  });

  it('should clear input after pressing C', () => {
    cy.get('[data-cy="btnC"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '5+2=');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should display two-digit number', () => {
    cy.get('[data-cy="btn1"]').click();
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '10');
  });

  it('should perform substraction of two numbers', () => {
    cy.get('[data-cy="btn-"]').click();
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '10-6=');
    cy.get('[data-cy="displayInput"]').should('have.text', '4');
  });

  it('should write new expression to the beginning of the history', () => {
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '10-6');
    cy.get('[data-cy="historyList"] > :last-child').should('have.text', '5+2');
  });

  it('should clear display after pressing CE', () => {
    cy.get('[data-cy="btnCE"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should delete last digit of value after pressing Del', () => {
    cy.get('[data-cy="btn8"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btnDel"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '8');
  });

  it('should perform multiplication of two numbers', () => {
    cy.get('[data-cy="btn*"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '8*3=');
    cy.get('[data-cy="displayInput"]').should('have.text', '24');
  });

  it('should change sign of a value', () => {
    cy.get('[data-cy="btn+-"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '-24');
  });

  it('should perform division of two numbers', () => {
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '-24/6=');
    cy.get('[data-cy="displayInput"]').should('have.text', '-4');
  });

  it('should calculate remainder of the division', () => {
    cy.get('[data-cy="btn%"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '-4%3=');
    cy.get('[data-cy="displayInput"]').should('have.text', '-1');
  });

  it('should prevent division by zero', () => {
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', "Can't divide by zero");
  });

  it('should enter a value after error without pressing C or CE', () => {
    cy.get('[data-cy="btn7"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '7');
  });

  it('should prevent calculating the remainder from dividing by zero', () => {
    cy.get('[data-cy="btn%"]').click();
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', "Can't divide by zero");
  });

  it('should write only one point in a number', () => {
    cy.get('[data-cy="btn."]').click();
    cy.get('[data-cy="btn."]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '.');
  });

  it('should correctly perceive real numbers starting with a dot', () => {
    cy.get('[data-cy="btn9"]').click();
    cy.get('[data-cy="btn+"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '0.9+');
  });

  it('should output zero when executing +/- with an empty string', () => {
    cy.get('[data-cy="btn+-"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '0');
  });

  it('should write only one zero to an empty input', () => {
    cy.get('[data-cy="btn0"]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '0');
  });

  it('should perform operations on more than two numbers', () => {
    cy.get('[data-cy="btn."]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '0.9+0.3');
    cy.get('[data-cy="displayExpr"]').should('have.text', '1.2/');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '1.2/6');
    cy.get('[data-cy="displayExpr"]').should('have.text', '1.2/6=');
    cy.get('[data-cy="displayInput"]').should('have.text', '0.2');
  });

  it('should round to three digits after the dot', () => {
    cy.get('[data-cy="btn/"]').click();
    cy.get('[data-cy="btn3"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="displayInput"]').should('have.text', '0.067');
  });

  it('should use zero as the first operand after performing the operation with an empty input', () => {
    cy.get('[data-cy="btnCE"]').click();
    cy.get('[data-cy="btn+"]').click();
    cy.get('[data-cy="displayExpr"]').should('have.text', '0+');
  });

  it('should hide history', () => {
    cy.get('[data-cy="btnOpenHist"]').click();
    cy.get('[data-cy="historyWrap"]').should('not.exist');
  });

  it('should open history', () => {
    cy.get('[data-cy="btnOpenHist"]').click();
    cy.get('[data-cy="historyWrap"]').should('be.visible');
  });

  it('should clear history and display', () => {
    cy.get('[data-cy="btn6"]').click();
    cy.get('[data-cy="btnClearAllHist"]').click();
    cy.get('[data-cy="historyList"]').should('have.text', '');
    cy.get('[data-cy="displayExpr"]').should('have.text', '');
    cy.get('[data-cy="displayInput"]').should('have.text', '');
  });

  it('should move through the navigation pages', () => {
    cy.get('[data-cy="linkSettings"]').click();
    cy.url().should('eq', 'http://localhost:3000/settings');
    cy.get('[data-cy="linkHomeCC"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('[data-cy="linkHomeFC"]').click();
    cy.url().should('eq', 'http://localhost:3000/FC');
  });
});

describe('Settings E2E', () => {
  it('Settings page successfully loads', () => {
    cy.visit('/settings');
  });

  it('should change the theme', () => {
    cy.get('[data-cy="themeSelect"]').select('colored');
    cy.get('[data-cy="headerWrap"]').should('have.css', 'background-color', 'rgb(32, 23, 91)');
    cy.get('[data-cy="appWrap"]').should('have.css', 'background-color', 'rgb(94, 122, 195)');
    cy.get('[data-cy="linkHomeCC"]').should('have.css', 'color', 'rgb(69, 87, 133)');
    cy.get('[data-cy="btnClearHist"]').should('have.css', 'background-color', 'rgb(182, 207, 255)');
    cy.get('[data-cy="appWrap"]').should('have.css', 'color', 'rgb(40, 36, 67)');
    cy.get('[data-cy="themeSelect"]').select('dark');
    cy.get('[data-cy="headerWrap"]').should('have.css', 'background-color', 'rgb(47, 47, 47)');
    cy.get('[data-cy="appWrap"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('[data-cy="linkHomeCC"]').should('have.css', 'color', 'rgb(133, 128, 128)');
    cy.get('[data-cy="btnClearHist"]').should('have.css', 'background-color', 'rgb(75, 74, 74)');
    cy.get('[data-cy="appWrap"]').should('have.css', 'color', 'rgb(255, 255, 255)');
    cy.get('[data-cy="themeSelect"]').select('light');
    cy.get('[data-cy="headerWrap"]').should('have.css', 'background-color', 'rgb(75, 74, 74)');
    cy.get('[data-cy="appWrap"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-cy="linkHomeCC"]').should('have.css', 'color', 'rgb(189, 187, 187)');
    cy.get('[data-cy="btnClearHist"]').should('have.css', 'background-color', 'rgb(231, 231, 231)');
    cy.get('[data-cy="appWrap"]').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('should clear calculator history', () => {
    cy.visit('/');
    cy.get('[data-cy="btn2"]').click();
    cy.get('[data-cy="btn+"]').click();
    cy.get('[data-cy="btn8"]').click();
    cy.get('[data-cy="btn="]').click();
    cy.get('[data-cy="historyList"] > :first-child').should('have.text', '2+8');
    cy.visit('/settings');
    cy.get('[data-cy="btnClearHist"]').click();
    cy.visit('/');
    cy.get('[data-cy="historyList"]').should('have.text', '');
  });
});
