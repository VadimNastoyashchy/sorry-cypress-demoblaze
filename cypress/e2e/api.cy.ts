import Demoblaze from '../src/endpoints/Demoblaze';
import Api from '../src/Api';
import {bycat} from '../fixtures/bycat';

describe('API tests', () => {

    describe(`Check ${Demoblaze.bycat} api endpoint`, () => {

        const checkStatusCodeAndResponseParams = (response: Cypress.Response<any>, uniqKey: string): void => {
            expect(response.status).to.eq(200);
            expect(response.body.Items[0]).to.have.property('cat', uniqKey);
        };

        it(`Check cat ${bycat.phone.cat} category`, () => {
            Api.POST(Demoblaze.bycat, bycat.phone)
                .then((resp) => {
                    checkStatusCodeAndResponseParams(resp, bycat.phone.cat);
                });
        });

        it(`Check cat ${bycat.notebook.cat} category`, () => {
            Api.POST(Demoblaze.bycat, bycat.notebook)
                .then((resp) => {
                    checkStatusCodeAndResponseParams(resp, bycat.notebook.cat);
                });
        });

        it(`Check cat ${bycat.monitor.cat} category`, () => {
            Api.POST(Demoblaze.bycat, bycat.monitor)
                .then((resp) => {
                    checkStatusCodeAndResponseParams(resp, bycat.monitor.cat);
                });
        });
    });
});
