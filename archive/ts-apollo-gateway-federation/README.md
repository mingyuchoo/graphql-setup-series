## Apollo Federation Demo

This repository is a demo of using Apollo Federation to build a single schema on top of multiple services. The microservices are located under the [`./services`](./services/) folder and the gateway that composes the overall schema is in the [`gateway.js`](./gateway.js) file.

### Reference

- https://youtu.be/OFT9bSv3aYA
- https://www.apollographql.com/docs/federation/gateway/
- https://github.com/apollographql/federation-demo
- https://dev.to/mandiwise/getting-started-with-apollo-federation-and-gateway-4739
- https://medium.com/@dandobusiness/setting-up-typescript-in-a-mono-repo-cd49a38d6030
- https://github.com/patrick91/apollo-federation-local-services

### Installation

To run this demo locally, pull down the repository then run the following commands:

```bash
npm install
```

This will install all of the dependencies for the gateway and each underlying service.

```bash
npm run start:services
```

This command will run all of the microservices at once. They can be found at http://localhost:4001, http://localhost:4002, http://localhost:4003, and http://localhost:4004.

In another terminal window, run the gateway by running this command:

```bash
npm run start:gateway
```

This will start up the gateway and serve it at http://localhost:4000

### What is this?

This demo showcases four partial schemas running as federated microservices. Each of these schemas can be accessed on their own and form a partial shape of an overall schema. The gateway fetches the service capabilities from the running services to create an overall composed schema which can be queried.

To see the query plan when running queries against the gateway, click on the `Query Plan` tab in the bottom right hand corner of [GraphQL Playground](http://localhost:4000)

To learn more about Apollo Federation, check out the [docs](https://www.apollographql.com/docs/apollo-server/federation/introduction)
