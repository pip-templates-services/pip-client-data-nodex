# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Client library for sample data microservice

This is a client library to the sample data microservice. This library shall be used
as a template to create clients to general purpose data microservices.

Supported functionality:
* Null and Mock clients for testing
* HTTP clients: REST and Commandable
* GRPC clients: Plain and Commandable
* AWS Lambda clients: Plain and Commandable

Key patterns implemented in this library:

**Zero-time onboarding:** A new developer doesn't have to have a prior khowledge of the code
nor preinstalled and preconfigured development environment.
To get started with any component he/she just need to do 3 simple steps:
+ Checkout the code
+ Launch dependencies via [docker-compose.dev.yml](docker/docker-compose.dev.yml)
+ Execute **npm test**. 

**Automated build and test processes:** Clear, build and test actions are dockerized and scripted.
The scripts shall be run before committing the code. And the same scripts shall be executed in automated
CI/CD pipelines. That approach allows to make identical build and test actions across the entire delivery
pipeline. And have a clear separation between developer and DevOps roles (developers are responsible
for individual components, their build, test and packaging. DevOps are responsible for running CI/CD pipelines, assembling and testing entire system from individual components).

**Multiple communication protocols:** The library contains clients that allow to connect to the microservice several different ways, depending on the environment or client requirements. For instance: on-premises the microservice can be deployed as a docker container. Locally it can be called via GRPC interface and externally via REST. When the same microservice is deployed on AWS cloud as a Lambda function, it can be called using the LambdaClient. Moreover, several microservice can be packaged into a single process, essentially represending a monolith. In that scenario, then can be called using in-process calls using the DirectClient.

**Monitoring and Observability:** All clients are instrumented to collect logs of called operations, metrics that collect number of calls, average call times and number of erors, and traces. Depending on the deployment configuration that information can be sent to different destinations: console, Promethous, DataDog service, ApplicationInsights, CloudWatch and others.

**Versioning:** Data objects and clients are versioned from the beginning. When breaking changes are introduced into the microservice, it shall keep the old version of the interface for backward-compatibility and expose a new version of the interface simultaniously. Then client library will have a new set of objects and clients for the new version, while keeping the old one intact. That will provide a clear versioning and backward-compatibility for users of the microservice.

<a name="links"></a> Quick links:

* Communication Protocols:
  - [gRPC Version 1](https://github.com/pip-templates-services/pip-service-data-nodex/src/protos/entities_v1.proto)
  - [HTTP Version 1](https://github.com/pip-templates-services/pip-service-data-nodex/src/swagger/entities_v1.yaml)
* [Microservice](https://github.com/pip-templates-services/pip-service-data-nodex)
* [API Reference](https://pip-templates-services.github.io/pip-client-data-nodex/globals.html)
* [Change Log](CHANGELOG.md)


## Contract

The contract of the microservice is presented below. 

```javascript
export class EntityV1 implements IStringIdentifiable {
    public id: string;          // Entity ID
    public site_id: string;     // ID of a work site (field installation)
    public type?: string;       // Entity type: Type2, Type1 or Type3
    public name?: string;      // Human readable name
    public content?: string;   // String content
}

export interface IEntitiesClientV1 {
    getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>>;

    getEntityById(correlationId: string, entityId: string): Promise<EntityV1>;

    getEntityByName(correlationId: string, entityId: string): Promise<EntityV1>;

    createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1>;

    updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1>;

    deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1>;
}

```

## Get

Get the client library source from GitHub:
```bash
git clone git@github.com:pip-templates-services/pip-client-data-nodex.git
```

Install the client library as a binary dependency:
```bash
npm install pip-client-data-nodex
```

## Use

Install the client NPM package as
```bash
npm install pip-client-data-nodex
```

Inside your code get the reference to the client SDK
```javascript
import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { EntityV1 } from 'pip-client-data-nodex';
import { EntityTypeV1 } from 'pip-client-data-nodex';
import { EntitiesRestClientV1 } from 'pip-client-data-nodex';
```

Instantiate the client
```javascript
// Create the client instance
let client = new EntitiesRestClientV1();
```

Define client connection parameters
```javascript
// Client configuration
let httpConfig = ConfigParams.fromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080
);
// Configure the client
client.configure(httpConfig);
```

Connect to the microservice
```javascript
// Connect to the microservice
await client.open(null);
    
// Work with the microservice
...
```

Call the microservice using the client API
```javascript
// Define a entity
let entity: EntityV1 = {
    id: '1',
    site_id: '1',
    type: EntityTypeV1.Type1,
    name: '00001',
    content: 'ABC'
};

// Create the entity
let entity = await this.client.createEntity(null, ENTITY1);

// Do something with the returned entity...

// Get a list of entities
let page = await this.client.getEntities(
    null,
    FilterParams.fromTuples(
        "name", "TestEntity",
    ),
    new PagingParams(0, 10)
);

// Do something with the returned page...
// E.g. entity = page.data[0];
```

## Develop

For development you shall install the following prerequisites:
* Node.js
* Visual Studio Code or another IDE of your choice
* Docker
* Typescript

Install dependencies:
```bash
npm install
```

Compile the microservice:
```bash
tsc
```

Before running tests launch infrastructure services and required microservices:
```bash
docker-compose -f ./docker-compose.dev.yml up
```

Run automated tests:
```bash
npm test
```

Run automated benchmarks:
```bash
npm run benchmark
```

Generate GRPC protobuf stubs:
```bash
./protogen.ps1
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

## Contacts

This microservice was created and currently maintained by *Sergey Seroukhov* and *Danil Prisyzhniy*.
