"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesClientFactory = void 0;
/** @module build */
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const EntitiesNullClientV1_1 = require("../version1/EntitiesNullClientV1");
const EntitiesDirectClientV1_1 = require("../version1/EntitiesDirectClientV1");
const EntitiesCommandableHttpClientV1_1 = require("../version1/EntitiesCommandableHttpClientV1");
const EntitiesCommandableGrpcClientV1_1 = require("../version1/EntitiesCommandableGrpcClientV1");
const EntitiesCommandableLambdaClientV1_1 = require("../version1/EntitiesCommandableLambdaClientV1");
// import { EntitiesGrpcClientV1 } from '../version1/EntitiesGrpcClientV1.ts.bak';
// import { EntitiesRestClientV1 } from '../version1/EntitiesRestClientV1.ts.bak';
// import { EntitiesLambdaClientV1 } from '../version1/EntitiesLambdaClientV1.ts.bak';
const EntitiesMockClientV1_1 = require("../version1/EntitiesMockClientV1");
class EntitiesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(EntitiesClientFactory.NullClientDescriptor, EntitiesNullClientV1_1.EntitiesNullClientV1);
        this.registerAsType(EntitiesClientFactory.EntitiesMockClientV1Descriptor, EntitiesMockClientV1_1.EntitiesMockClientV1);
        this.registerAsType(EntitiesClientFactory.DirectClientDescriptor, EntitiesDirectClientV1_1.EntitiesDirectClientV1);
        this.registerAsType(EntitiesClientFactory.CommandableHttpClientDescriptor, EntitiesCommandableHttpClientV1_1.EntitiesCommandableHttpClientV1);
        this.registerAsType(EntitiesClientFactory.CommandableGrpcClientV1Descriptor, EntitiesCommandableGrpcClientV1_1.EntitiesCommandableGrpcClientV1);
        this.registerAsType(EntitiesClientFactory.CommandableLambdaClientV1Descriptor, EntitiesCommandableLambdaClientV1_1.EntitiesCommandableLambdaClientV1);
        // this.registerAsType(EntitiesClientFactory.RestClientV1Descriptor, EntitiesRestClientV1);
        // this.registerAsType(EntitiesClientFactory.GrpcClientV1Descriptor, EntitiesGrpcClientV1);
        // this.registerAsType(EntitiesClientFactory.LambdaClientV1Descriptor, EntitiesLambdaClientV1);
    }
}
exports.EntitiesClientFactory = EntitiesClientFactory;
EntitiesClientFactory.NullClientDescriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'null', '*', '1.0');
EntitiesClientFactory.DirectClientDescriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'direct', '*', '1.0');
EntitiesClientFactory.CommandableHttpClientDescriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'commandable-http', '*', '1.0');
EntitiesClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'commandable-grpc', '*', '1.0');
EntitiesClientFactory.CommandableLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'commandable-lambda', '*', '1.0');
EntitiesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'lambda', 'default', '1.0');
EntitiesClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'grpc', '*', '1.0');
EntitiesClientFactory.RestClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'rest', '*', '1.0');
EntitiesClientFactory.EntitiesMockClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'client', 'mock', '*', '1.0');
//# sourceMappingURL=EntitiesClientFactory.js.map