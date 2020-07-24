describe('My home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  /*
   * TODO: make this test work
   */
  it('contains the text hello gatsby', () => {
    expect(cy.getByText('sup')).should('eq', 'Hello Gatsby')
  })
})
