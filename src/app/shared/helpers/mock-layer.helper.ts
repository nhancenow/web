import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        
        // test data...
        let testUser = { username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };
		let testDKs = [{
			digitalKitCode: "10000411", brand: "nxnjjf", modelNumber: "", customerName: "Rahul", status:"Active"
		}, {
			digitalKitCode: "10000215", brand: "Maruti suzuki", modelNumber: "RS624", customerName: "Saroj", status:"InActive"
		}];
		
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // fake authenticate api end point
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());

                // check user credentials and return fake jwt token if valid
                if (params.username === testUser.username && params.password === testUser.password) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })
                    ));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200 })
                    ));
                }
            }

            // fake users api end point
            if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: [testUser] })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }
            
            // fake dk api end point
            if (connection.request.url.endsWith('/api/digitalKit') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return test dk if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: testDKs })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }
            
            // fake dk api end point
            if (connection.request.url.endsWith('/api/digitalKit') && connection.request.method === RequestMethod.Post) {
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200, body: { message: 'Digital Kit added success' } })
                    // new ResponseOptions({ status: 401, body: { message: 'Digital Kit issue failed' } })
                ));
            }
			
        }, 500);

    });
    return new Http(backend, options);
}

export let MockLayerHelper = {
    // use mock backend in place of Http service for backend-less development
    provide: Http,
    useFactory: mockBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};