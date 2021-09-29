/// <reference types="Cypress" />

describe('Verify To Do Scenario', () => {


  before(function () {

  })


  it('Verify user can enter values in Input box', () => {

    cy.task('log', '---Open Web Page------')
    cy.openWebPage()

    cy.task('log', '---Enter task in Placeholder------')
    cy.fixture('input.json').as('data').then((data) => {
      /* Iterate taskname from json and enter in placeholder */
      data.taskName.forEach(function (element, index) {
        cy.enterValuesinTextBox({ inputValue: data.taskName[index] });

      })
    })

  }),

    it('Complete task by click on radio button', () => {

      cy.task('log', '---Mark task completed------')
      cy.checkTask({ taskneedtocheck: 3 })
    }),

    it('Verify task in completed list ', () => {

      cy.task('log', '---Click on link text------')
      cy.clickOnLinkText({ text: 'Completed' })

      cy.task('log', '---Goto Completed filters and check if listed number is correct ------')
      cy.checkLength({ selector: '.todo-list li', value: 3 })

    })

})
