import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { EntitiesMemoryPersistence } from 'pip-service-data-nodex';
import { EntitiesController } from 'pip-service-data-nodex';
import { EntitiesCommandableGrpcServiceV1 } from 'pip-service-data-nodex';

import { EntitiesCommandableGrpcClientV1 } from '../../src/version1/EntitiesCommandableGrpcClientV1';
import { EntitiesClientV1Fixture } from './EntitiesClientV1Fixture';

let grpcConfig = ConfigParams.fromTuples(
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 3000
);

suite('EntitiesCommandableGrpcClientV1', () => {
    let persistence: EntitiesMemoryPersistence;
    let controller: EntitiesController;
    let service: EntitiesCommandableGrpcServiceV1;
    let client: EntitiesCommandableGrpcClientV1;
    let fixture: EntitiesClientV1Fixture;

    setup(async () => {
        persistence = new EntitiesMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new EntitiesController();
        controller.configure(new ConfigParams());

        service = new EntitiesCommandableGrpcServiceV1();
        service.configure(grpcConfig);

        client = new EntitiesCommandableGrpcClientV1();
        client.configure(grpcConfig);

        let references = References.fromTuples(
            new Descriptor('pip-service-data', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-service-data', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-service-data', 'service', 'grpc', 'default', '1.0'), service,
            new Descriptor('pip-service-data', 'client', 'grpc', 'default', '1.0'), client
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