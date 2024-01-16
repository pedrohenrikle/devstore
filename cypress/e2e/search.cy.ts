describe('add product to cart', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom')

    // garantindo que ao pesquisar, redireciona para a api com a rota /search e logo após, q=moletom
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page withou a search query', () => {
    // O redirect do Next é tratado como um throw e, pro Cypress, isso é um erro, por isso vamos tratar assim
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
