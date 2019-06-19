// gql is a utility function that handles gql queries
import gql from 'graphql-tag';

import { OfflineClient } from '@aerogear/voyager-client';

// For our client application, we will connect to the local service.
let config = {
  httpUrl: "http://data-sync-app-mutations-docs-test.comm2.skunkhenry.com/graphql",
  wsUrl: "ws://data-sync-app-mutations-docs-test.comm2.skunkhenry.com/graphql",
}

async function queryPeople() {

  // Actually create the client
  let offlineClient = new OfflineClient(config);
  let client = await offlineClient.init();

  // Execute the query
  client.query({
      fetchPolicy: 'network-only',
      query: gql`
      {
        addressBook {
          name
          address

        }
      }
      `
    })
    //Print the response of the query
    .then( ({data}) => {
      console.log(data.addressBook)
    });
}

queryPeople();
