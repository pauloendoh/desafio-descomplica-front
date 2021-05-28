/// <reference types="cypress" />


context('Desafio Descomplica - Front', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Deve renderizar a <table>', () => {
        cy.get('table')
    })

    it("Deve retornar pelo um registro se escrever nome = 'ambur'", () => {
        cy.get("#text-filter").type("ambur")
        cy.wait(1000)
        cy.get('tbody tr').should(($tr) => {
            expect($tr).to.have.length(1)
        })
    })

    it("Deve retornar um registro se escrever cpf = '028'", () => {
        cy.get('#select-filter').click()
        cy.get('[data-value="cpf"]').click()

        cy.get('#text-filter').type("028")
        cy.wait(1000)
        cy.get('tbody tr').should(($tr) => {
            expect($tr).to.have.length(1)
        })
    })

    it("Deve retornar um registro se escrever email = 'acast'", () => {
        cy.get('#select-filter').click()
        cy.get('[data-value="email"]').click()

        cy.get('#text-filter').type("acast")
        cy.wait(1000)
        cy.get('tbody tr').should(($tr) => {
            expect($tr).to.have.length(1)
        })
    })
})