describe('HomeScreen', () => {
  it('loads default mediations', () => {
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

    cy.contains('ANXIETY')
    cy.contains('Deep and Quick Relaxation')
    cy.contains('Love and Peace')

    cy.contains('Calming Medition')
    cy.contains('Deep Relaxation')

    cy.contains('Candle Relaxation')
    cy.contains('Get Some Rest')

    cy.contains('SLEEP')
    cy.contains('Deep Sleep')
    cy.contains('Wake Up Refreshed')

    cy.contains('Short Sleep')
    cy.contains('For Taking a Nap')

    cy.contains('Good Sleep')
    cy.contains('Drift Off To Sleep')
  })

  it('can save favourite meditations to home screen', () => {
    cy.visit('/')

    cy.contains('Power of Love').click()

    cy.get('.r-right-8eqzbf').click()

    cy.get('a').contains('Home').click()

    cy.contains('FAVOURITE')

    cy.contains('Power of Love')
    cy.contains('Love and Peace')
  })
})
