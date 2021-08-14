import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { EntitiesMemoryPersistence } from 'pip-service-data-nodex';
import { EntitiesController } from 'pip-service-data-nodex';
import { EntitiesCommandableHttpServiceV1 } from 'pip-service-data-nodex';

import { EntitiesCommandableHttpClientV1 } from '../../src/version1/EntitiesCommandableHttpClientV1';
import { EntitiesClientV1Fixture } from './EntitiesClientV1Fixture';

let httpConfig = ConfigParams.fromTuples(
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 3000
);

suite('EntitiesCommandableHttpClientV1', () => {
    let persistence: EntitiesMemoryPersistence;
    let controller: EntitiesController;
    let service: EntitiesCommandableHttpServiceV1;
    let client: EntitiesCommandableHttpClientV1;
    let fixture: EntitiesClientV1Fixture;

    setup(async () => {
        persistence = new EntitiesMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new EntitiesController();
        controller.configure(new ConfigParams());

        service = new EntitiesCommandableHttpServiceV1();
        service.configure(httpConfig);

        client = new EntitiesCommandableHttpClientV1();
        client.configure(httpConfig);

        let references = References.fromTuples(
            new Descriptor('pip-service-data', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-service-data', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-service-data', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('pip-service-data', 'client', 'http', 'default', '1.0'), client
        );
        controller.setReferences(references);
        service.setReferences(references);
        client.setReferences(references);

        fixture = new EntitiesClientV1Fixture(client);

        await persistence.open(null);
        await service.open(null);
        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
        await service.close(null);
        await persistence.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});