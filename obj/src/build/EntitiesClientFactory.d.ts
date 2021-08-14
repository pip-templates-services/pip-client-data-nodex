/** @module build */
import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
export declare class EntitiesClientFactory extends Factory {
    static NullClientDescriptor: Descriptor;
    static DirectClientDescriptor: Descriptor;
    static CommandableHttpClientDescriptor: Descriptor;
    static CommandableGrpcClientV1Descriptor: Descriptor;
    static CommandableLambdaClientV1Descriptor: Descriptor;
    static LambdaClientV1Descriptor: Descriptor;
    static GrpcClientV1Descriptor: Descriptor;
    static RestClientV1Descriptor: Descriptor;
    static EntitiesMockClientV1Descriptor: Descriptor;
    constructor();
}
