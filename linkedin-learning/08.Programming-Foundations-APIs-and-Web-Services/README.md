# Section NOtes

## 01. Understanding Web Services:

==> way to make web services to talk to each others

### XML?

==> data communicate format between two nodes.

### web services advantages?

- code reusability.
- language transparency.
- deployability
- usability.

### latency?

==> the time a request take to return a response.

### partial failure?

==> when a server or network fails to respond.

### secure web services?

- authentication {like http protocol}:
  ==> validates identity of client {who access the resource}

* authorization:
  ==> determines level of clients access {does client can access or not a resource }

### all web services are APIs but not all APIs are web services.

### in descending order from more complex to more flat

- web services.
- micro-services.
- APIs.

## 02. Using RESTful APIs and HATEOAS:

==> a way to send/recive requests among client/server.

### API principles?

      * URI.
      * operations?
        * post {create a resource}.
        * get {retrieve a  resource}.
        * delete { remove a resource}.
        * update {update a resource}.
      * formats?
        * html.
        * xml.
        * plain-text.
      * stateless?
        ==>server will not store any state the client made.

### payload?

    ==> data sent between client and server.

### HATEOAS?

==> client interacts with a REST API entirely through the responses by the server.
==> resources should be discoverable through the publication of links.

- postman?
  ==> a software app used to test and consume web-services && APIs.

* Swagger?
  ==> a documentation tool for APIs to understand how they works

## 03. Using SOAP-Based {Simple-Object-Access-Protocol}Web Services {alternative for REStful}:
==> it provide a more complexity and more security compared to REStful.
### WSDLdocs {Web-Service-Description-Language}?

==> a service telling the client of all the operations that can performed by the web-service
==> contains information, like the data types being used in SOAP messages, and operations available via the web-service

### SOAP benefits?
    * used fot enterprise-level web services {like paypal}.
    * financial services.
    * payment gateway.
    * CRM software.
    * identity management.
    * telecommunication services.

### web-services applying methods?
    * Restful.
    * SOAP.
    * graphql.

### soapUI?
   a software tool used to test SOAP-based web-services

## 04. Developing APIs Using GraphQL:
  ==> its a query language for APIs
  ==> a syntax describing how to ask for data, which is usually used to load data based on queries.
  ==> a way to aggregate data from multiple resources

### mutation?
    ==> modifies server-side data.
### subscription?
    ==> notifies changes in data in real time.

