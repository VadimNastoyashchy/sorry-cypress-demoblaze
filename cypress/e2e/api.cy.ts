import Demoblaze from '../src/endpoints/Demoblaze';
import Api from '../src/Api';

describe('API tests', () => {

    describe(`Check ${Demoblaze.bycat} api endpoint`, () => {
        const requestBody = {
            phone: {
                cat: 'phone'
            },
            notebook: {
                cat: 'notebook'
            },
            monitor: {
                cat: 'monitor'
            }
        };

        const checkStatusCodeAndResponseParams = (response: Cypress.Response<any>, uniqKey: string): void => {
            expect(response.status).to.eq(200);
            expect(response.body.Items[0]).to.have.property('cat', uniqKey);
        };

        it(`Check cat ${requestBody.phone.cat} category`, () => {
            Api.POST(Demoblaze.bycat, requestBody.phone)
                .then((resp) => {
                    checkStatusCodeAndResponseParams(resp, requestBody.phone.cat);
                });
        });

        it(`Check cat ${requestBody.notebook.cat} category`, () => {
            Api.POST(Demoblaze.bycat, requestBody.notebook)
                .then((resp) => {
                    checkStatusCodeAndResponseParams(resp, requestBody.notebook.cat);
                });
        });

        it(`Check cat ${requestBody.monitor.cat} category`, () => {
            Api.POST(Demoblaze.bycat, requestBody.monitor)
                .then((resp) => {
                    checkStatusCodeAndResponseParams(resp, requestBody.monitor.cat);
                });
        });
    });
});
