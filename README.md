# GraphQL Library Management

## Description

A GraphQL-based library management system that allows users to manage clients, books, authors, libraries, and borrowed books efficiently.

## Features

- **Client Management**: Add, update, and delete client information.
- **Book Management**: Manage books, including adding new books, updating details, and deleting entries.
- **Author Management**: Maintain author information and associate authors with books.
- **Library Management**: Manage libraries, including what books each of them contains.
- **Borrowed Book Management**: Track borrowed books, including due dates and client information.

## Technologies Used

- **GraphQL**: A query language for your API.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A web application framework for Node.js.
- **Apollo Client**: A GraphQL client library for Node.js.
- **React Apollo**: A GraphQL client for React.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone both the server and client repository:

   ```bash
   git clone https://github.com/OlteanBianca/Framework-Design-Server.git

   git clone https://github.com/OlteanBianca/Framework-Design-Client.git
   ```

2. Start the applications:

   ```bash
   //for the server app: 
   node src/index.js

   //for the client app:
   npm start
   ```

3. Access and test the server application in your web browser at `http://localhost:4000/graphql`.

    Access the client applications at `http://localhost:3000` (Both server and client application need to run at the same time)

## Usage

After starting both applications and opening the page `http://localhost:3000` a simple interface will appear.

The client application is using the Appollo Client Library to connect to the server application:

```bash
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});
```

To access the queries from the server application the GQL function is being used:

```bash
export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      borrowedBooks {
        id
        book {
          id
          title
        }
      }
    }
  }
`;
```
After that the Query GET_CLIENTS can be used in the components to display the data:

```bash
const { loading, error, data } = useQuery(GET_CLIENTS);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return (
    <ul>
      {data.clients.map((client) => (
        <li key={client.id}>
          Title: {client.name}
        </li>
      ))}
    </ul>
  );
 ```