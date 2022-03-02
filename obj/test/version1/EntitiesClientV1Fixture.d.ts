import { IEntitiesClientV1 } from '../../src/version1/IEntitiesClientV1';
export declare class EntitiesClientV1Fixture {
    private _client;
    constructor(client: IEntitiesClientV1);
    testCrudOperations(): Promise<void>;
}
