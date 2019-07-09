// gql is a utility function that handles gql queries
import gql from 'graphql-tag';

import { OfflineClient } from '@aerogear/voyager-client';

// connect to the local service.
let config = {
  httpUrl: "http://localhost:4000/graphql",
  wsUrl: "ws://localhost:4000/graphql",
}

async function addPerson() {

  // Actually create the client
  let offlineClient = new OfflineClient(config);
  let client = await offlineClient.init();

  // Execute the mutation
  client.mutate({
      mutation: gql`
       mutation {
         post(name: "John Doe", address: "1 Red Hill") {
           id
         }
       }
       `
    })
    //Print the response of the query
    .then( ({data}) => {
      document.write(JSON.stringify(data))
    });
}

addPerson();
