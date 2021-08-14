
import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { EntitiesMemoryPersistence } from 'pip-service-data-nodex';
import { EntitiesController } from 'pip-service-data-nodex';
import { EntitiesDirectClientV1 } from '../../src/version1/EntitiesDirectClientV1';
import { EntitiesClientV1Fixture } from './EntitiesClientV1Fixture';

suite('EntitiesDirectClientV1', () => {
    let persistence: EntitiesMemoryPersistence;
    let controller: EntitiesController;
    let client: EntitiesDirectClientV1;
    let fixture: EntitiesClientV1Fixture;

    setup(async () => {
        persistence = new EntitiesMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new EntitiesController();
        controller.configure(new ConfigParams());

        client = new EntitiesDirectClientV1();

        let references = References.fromTuples(
            new Descriptor('pip-service-data', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-service-data', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-service-data', 'client', 'direct', 'default', '1.0'), client
        );

        controller.setReferences(references);
        client.setReferences(references);

        fixture = new EntitiesClientV1Fixture(client);

        await persistence.open(null);
    });

    teardown(async () => {
        await persistence.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});