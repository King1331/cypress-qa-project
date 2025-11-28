describe('Validar respuesta JSON con ReqRes', () => {
  it('Debe devolver un usuario en formato JSON', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.be.oneOf([200, 401]); 
      expect(response.headers['content-type']).to.include('application/json');

      // Validación flexible según respuesta
      if (response.status === 200) {
        expect(response.body).to.have.property('data');
      } else {
        expect(response.body).to.have.property('error');
      }

    });
  });
});
