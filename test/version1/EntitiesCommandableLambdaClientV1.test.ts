import { ConfigParams } from 'pip-services3-commons-nodex';

import { EntitiesCommandableLambdaClientV1 } from '../../src/version1/EntitiesCommandableLambdaClientV1';
import { EntitiesClientV1Fixture } from './EntitiesClientV1Fixture';

suite('EntitiesCommandableLambdaClientV1', () => {
    let client: EntitiesCommandableLambdaClientV1;
    let fixture: EntitiesClientV1Fixture;

    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    setup(async () => {
        client = new EntitiesCommandableLambdaClientV1();

        let lambdaConfig = ConfigParams.fromTuples(
            "connection.protocol", "aws",
            "connection.arn", AWS_LAMDBA_ARN,
            "credential.access_id", AWS_ACCESS_ID,
            "credential.access_key", AWS_ACCESS_KEY,
            "options.connection_timeout", 30000
        );
        client.configure(lambdaConfig);

        fixture = new EntitiesClientV1Fixture(client);

        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});