describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    // o .get permite selecionar um elemento como um seletor css
    // aqui ele vai selecionar o primeiro link que o href comece com /product
    cy.get('a[href^="/product"]').first().click()

    // aqui, quero garantir que após clicar, a url (parte após baseUrl) deve ter o /product
    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    // quero garantir que após o clique acima, devemos ter um item no carrinho
    cy.contains('Cart (1)').should('exist')
  })
  it('should not count dubplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    // aqui clico duas vezes pra verificar se está duplicando no carrinho
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
