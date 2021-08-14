import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConnectionResolver, ConsoleLogger } from 'pip-services3-components-nodex';

import { EntitiesMemoryPersistence } from 'pip-service-data-nodex';
import { EntitiesRestServiceV1 } from 'pip-service-data-nodex';
import { EntitiesController } from 'pip-service-data-nodex';

import { EntitiesClientV1Fixture } from './EntitiesClientV1Fixture';
import { EntitiesRestClientV1 } from '../../src/version1/EntitiesRestClientV1';

let httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EntitiesRestClientV1', ()=> {
    let service: EntitiesRestServiceV1;
    let client: EntitiesRestClientV1;
    let fixture: EntitiesClientV1Fixture;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new EntitiesMemoryPersistence();
        let controller = new EntitiesController();

        service = new EntitiesRestServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-service-data', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-service-data', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-service-data', 'service', 'rest', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EntitiesRestClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EntitiesClientV1Fixture(client);

        try {
            await service.open(null);
            await client.open(null);
        } catch (err) {
            console.log(err);
            throw err;
        }
    });

    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });
    
    test("CRUD Operations", async () => {
        fixture.testCrudOperations();
    });

});
