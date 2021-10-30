describe('HomeScreen', () => {
  it('loads mediations', () => {
    cy.visit('/')

    cy.contains('Home')

    cy.contains('POPULAR')

    cy.contains('Power of Love')
    cy.contains('Love and Peace')

    cy.contains('Quick Powerful Meditation')
    cy.contains('Busy At Work')

    cy.contains('Deep Breathing')
    cy.contains('Just Breath')

    cy.contains('Yawn and Stretch')
    cy.contains('Rise and Shine')
  })

  it('can save favourite meditations', () => {
    cy.visit('/')

    cy.contains('Power of Love').click()

    cy.get('.r-right-8eqzbf').click()

    cy.get('a').contains('Home').click()

    cy.contains('FAVOURITE')

    cy.contains('Power of Love')
    cy.contains('Love and Peace')
  })
})
