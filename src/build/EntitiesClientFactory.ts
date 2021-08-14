/** @module build */
import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { EntitiesNullClientV1 } from '../version1/EntitiesNullClientV1';
import { EntitiesDirectClientV1 } from '../version1/EntitiesDirectClientV1';
import { EntitiesCommandableHttpClientV1 } from '../version1/EntitiesCommandableHttpClientV1';
import { EntitiesCommandableGrpcClientV1 } from '../version1/EntitiesCommandableGrpcClientV1';
import { EntitiesCommandableLambdaClientV1 } from '../version1/EntitiesCommandableLambdaClientV1';
// import { EntitiesGrpcClientV1 } from '../version1/EntitiesGrpcClientV1.ts.bak';
// import { EntitiesRestClientV1 } from '../version1/EntitiesRestClientV1.ts.bak';
// import { EntitiesLambdaClientV1 } from '../version1/EntitiesLambdaClientV1.ts.bak';
import { EntitiesMockClientV1 } from '../version1/EntitiesMockClientV1';


export class EntitiesClientFactory extends Factory{
    public static NullClientDescriptor = new Descriptor('pip-service-data', 'client', 'null', '*', '1.0');
    public static DirectClientDescriptor = new Descriptor('pip-service-data', 'client', 'direct', '*', '1.0');
    public static CommandableHttpClientDescriptor = new Descriptor('pip-service-data', 'client', 'commandable-http', '*', '1.0');
    public static CommandableGrpcClientV1Descriptor = new Descriptor('pip-service-data', 'client', 'commandable-grpc', '*', '1.0');
    public static CommandableLambdaClientV1Descriptor = new Descriptor('pip-service-data', 'client', 'commandable-lambda', '*', '1.0');
    public static LambdaClientV1Descriptor = new Descriptor('pip-service-data', 'client', 'lambda', 'default', '1.0');
    public static GrpcClientV1Descriptor = new Descriptor('pip-service-data', 'client', 'grpc', '*', '1.0');
    public static RestClientV1Descriptor = new Descriptor('pip-service-data', 'client', 'rest', '*', '1.0');
    public static EntitiesMockClientV1Descriptor = new Descriptor('pip-service-data', 'client', 'mock', '*', '1.0');

    constructor(){
        super();

        this.registerAsType(EntitiesClientFactory.NullClientDescriptor, EntitiesNullClientV1);
        this.registerAsType(EntitiesClientFactory.EntitiesMockClientV1Descriptor, EntitiesMockClientV1);
        this.registerAsType(EntitiesClientFactory.DirectClientDescriptor, EntitiesDirectClientV1);
        this.registerAsType(EntitiesClientFactory.CommandableHttpClientDescriptor, EntitiesCommandableHttpClientV1);
        this.registerAsType(EntitiesClientFactory.CommandableGrpcClientV1Descriptor, EntitiesCommandableGrpcClientV1);
        this.registerAsType(EntitiesClientFactory.CommandableLambdaClientV1Descriptor, EntitiesCommandableLambdaClientV1);
        // this.registerAsType(EntitiesClientFactory.RestClientV1Descriptor, EntitiesRestClientV1);
        // this.registerAsType(EntitiesClientFactory.GrpcClientV1Descriptor, EntitiesGrpcClientV1);
        // this.registerAsType(EntitiesClientFactory.LambdaClientV1Descriptor, EntitiesLambdaClientV1);
    }
}