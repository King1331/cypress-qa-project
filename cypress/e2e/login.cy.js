describe('Login Test', () => {
  it('Login exitoso', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');  
    cy.get('#password').type('secret_sauce');   ///Puse in signo de dolar para que el test fallara 
    cy.get('#login-button').click();

    // Validación de que entró correctamente
    cy.url().should('include', '/inventory');
    cy.get('.title').should('have.text', 'Products');
  });
});


describe('Validación de productos en SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');  
    
    cy.get('#login-button').click();
  });

  it('Valida que los productos se muestren correctamente', () => {
    // Verifica que la URL es correcta
    cy.url().should('include', '/inventory');

    // Validar que hay productos en pantalla
    cy.get('.inventory_item').should('have.length.greaterThan', 0);

    // Validar el primer producto
    cy.get('.inventory_item').first().within(() => {
      // Nombre del producto
      cy.get('.inventory_item_name')
        .should('be.visible')
        .and('not.be.empty');

      // Precio del producto
      cy.get('.inventory_item_price')
        .should('be.visible')
        .and('contain', '$'); // asegura formato correcto

      // Botón "Add to cart"
      cy.contains('Add to cart').should('be.visible');
    });
  });

});
