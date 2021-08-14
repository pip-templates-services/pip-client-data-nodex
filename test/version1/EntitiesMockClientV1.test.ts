import { EntitiesMockClientV1 } from "../../src/version1/EntitiesMockClientV1";
import { EntitiesClientV1Fixture } from "./EntitiesClientV1Fixture";

suite("EntitiesMockClientV1", () => {
    let client: EntitiesMockClientV1;
    let fixture: EntitiesClientV1Fixture;

    setup(() => {
        client = new EntitiesMockClientV1();
        fixture = new EntitiesClientV1Fixture(client);
    });
    
    teardown(() => {
    });

    test("CRUD Operations", async () => {
        await fixture.testCrudOperations();
    });
});
