class Api {
    public static POST(requestUrl: string, requestBody: Cypress.RequestBody): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: 'POST',
            url: requestUrl,
            body: requestBody
        });
    }
}

export default Api;