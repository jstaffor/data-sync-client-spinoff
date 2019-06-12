// gql is a utility function that handles gql queries
import gql from 'graphql-tag';

import { OfflineClient } from '@aerogear/voyager-client';

// For our client application, we will connect to the local service.
let config = {
  httpUrl: "http://localhost:4000/graphql",
  wsUrl: "ws://localhost:4000/graphql",
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
        listEmployees
        {
      		employee_id,
          employee_name,
        }
      }
      `
    })
    //Print the response of the query
    .then( ({data}) => {
      console.log(data.listEmployees)
    });
}

queryPeople();
