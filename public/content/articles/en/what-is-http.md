![HTTP](../../img/http.png)

**HTTP (Hyper-Text Transfer Protocol)** is a TCP/IP-based application layer communication protocol that standardizes how a client and a server communicate with each other. It defines how content is requested and transmitted over the Internet. By default, the HTTP protocol operates over **TCP port 80**. In contrast, **HTTPS (HTTP Secure)**, which provides secure communication, **uses port 443**.

## Establishing the TCP Connection and the Three-Way Handshake

Before HTTP communication begins, a **TCP connection** is established between the client and the server. To ensure the reliability of this connection, a process known as the **three-way handshake** takes place. This process allows the client and the server to mutually confirm that they are ready for data transmission.

![3-way handshake](../../img/tcp-handshake.png)

After the connection is established and a secure communication environment is ensured, data exchange begins over HTTP through **request** and **response** messages.

## HTTP Message Structure

As a protocol, HTTP defines the **format, order, and rules** according to which messages are transmitted. In this way, the client and the server can communicate as if they were speaking the same language.

The general structure of an HTTP request is as follows:

`METHOD request-target HTTP/x`

For example:

`GET /doc HTTP/1.1`

In this line:

- **METHOD** indicates the operation to be performed
- **Request target** represents the requested resource
- **HTTP/x** specifies the HTTP version being used

## HTTP Methods

![General HTTP structure example](../../img/http-structure-en.png)

Within the HTTP protocol, there are various methods that serve different purposes. The most commonly used ones are as follows:

| Method  | Description                                                                                                                                                                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Used to **retrieve data** from the server (READ). It may return a page, JSON data, a file, and so on. It should not produce side effects (safe), and repeating the same request should not change the result (idempotent). |
| HEAD    | Performs the same operation as GET, but **does not return a response body**; only **header information** is retrieved. It is used for cache validation, file size checking, and verifying the existence of a resource.     |
| POST    | Used to **send data** to the server. It is used for creating new records (CREATE), submitting forms, or triggering operations. It is **not idempotent**.                                                                   |
| PUT     | **Creates or replaces** a specific resource. It updates the resource by replacing it entirely. Repeating the same request does not change the result (idempotent).                                                         |
| DELETE  | Requests the **deletion** of the specified resource.                                                                                                                                                                       |
| PATCH   | **Partially updates** a specific resource. Unlike PUT, it performs a **partial update** rather than replacing the entire resource.                                                                                         |
| TRACE   | Used to **observe how a request changes** as it travels to the server. It is intended for debugging purposes and is disabled on most servers due to security concerns.                                                     |
| CONNECT | Opens a **bidirectional tunnel** between the client and the server. Its most common use case is proxy connections over HTTPS.                                                                                              |
| OPTIONS | Used to learn which **HTTP methods and options** are supported by a specific endpoint. It is commonly used in CORS preflight requests.                                                                                     |
|         |

For example, the **GET** method allows a client to request a web page, document, or another resource from the server.

## HTTP Header Fields

HTTP requests and responses include various **header** fields that define the details of the communication:

**1- Host:** Specifies the website to which the request is being made

**2- Connection:** Defines how the connection should be maintained

The connection behavior can be specified in two ways:

- If the connection is set to `close`, the connection is terminated after the response to the request is received.
- If it is set to `keep-alive`, the connection remains open.

> Since the `close` option requires a new connection to be established for each request, it is disadvantageous in terms of performance and resource usage.

**3- User-Agent:** Identifies the client (browser or application)

**4- Accept-Language:** Contains the preferred language information

Based on this information, the server can provide client-specific content or configurations. In addition to the header fields discussed above, there are many other header fields; the complete list can be found on [this page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers).

## HTTP Responses and Status Codes

Responses returned from the server are also in HTTP format. The first line of the response contains a **status code**.

The **status code** indicates the compatibility between the request and the response. These codes are grouped into categories. Codes starting with 100 are informational, codes starting with 200 indicate successful execution, codes starting with 300 are used for redirection and require the client to take action according to the redirect, codes starting with 400 indicate client errors such as requesting an incorrect resource, and codes starting with 500 indicate server errors, which are returned when a problem occurs on the server. Some example status codes are as follows:

| Status Code | Description                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 102         | Indicates that the request has been received and processing is ongoing. It is informational (1xx) and is rarely used.                    |
| 200         | The request has been successfully processed. The requested result is returned to the client (if applicable, along with a response body). |
| 301         | The requested resource has been permanently moved. The new address is provided to the client in the `Location` header.                   |
| 400         | The request is invalid. The server cannot process the request due to incorrect syntax, malformed data, or missing parameters.            |
| 404         | The requested resource does not exist on the server, or the server does not wish to disclose its existence.                              |
| 503         | The server is temporarily unable to handle the request (maintenance, excessive load, etc.).                                              |
|             |

### HTTP Response Header Fields

HTTP response messages may optionally include various headers. These headers enable the client to correctly process the received data. Some of them are:

- **Server:** Contains information about the server software and operating system. Since this header is not mandatory, it is often omitted from HTTP responses.
- **Last-Modified:** Indicates the last modification time of the requested resource.
- **Content-Length:** Specifies the size of the transmitted content in bytes. The purpose of this header is to inform the client that data is still being transmitted when the content arrives in segments.
- **Set-Cookie:** Contains cookie information generated by the server.
- **Content-Type:** Specifies the type of the transmitted data (e.g., `text/html`, `application/json`).

### HTTP Body Section

After the header fields, the **body** section follows. If the status code indicates success (`200 OK`), the body contains the content requested by the client. The format of the body content is determined by the **Content-Type** value specified in the header section.

In the image below, we observe a scenario in which the client requests a file from the server and then makes new requests based on the returned status codes. The arrows show the methods used, and the explanations on the sides describe the progression of the scenario.

![Client-server communication example](../../img/server-client-en.png)

## Inspection of HTTP Traffic

In everyday use, we are generally unaware of HTTP traffic; however, modern browsers allow us to inspect it. By pressing **F12** in the browser, all requests and responses can be viewed under the **Network** tab in the developer tools.

![Network tab](../../img/network-tab.png)

When clicking on any request, the following details can be viewed:

- Header information
- Response preview
- Body content (Response)
- Timing details
- Cookie information

![Network details](../../img/network-tab-detail.png)

---

HTTP is a fundamental protocol that supports the web ecosystem, even though we often use it without noticing. Opening a web page, executing an API request, or downloading a file—all of these rely on this disciplined communication established between the client and the server. The preparation of a secure foundation through TCP’s three-way handshake, followed by HTTP’s request–response model managing data exchange, demonstrates that the Internet is not chaotic, but rather a highly structured system.

Understanding HTTP message structures, headers, and status codes is not merely theoretical knowledge. It is a practical mental tool actively used when analyzing performance issues, debugging errors, or designing secure and scalable systems. For anyone who truly wants to understand the Web, HTTP is not just something to be learned—it is a cornerstone that must be internalized.

---

Stay tuned for articles that explain Internet concepts in greater detail.

See you in the next article 👋

**References:**

- [HTTP Protocol](https://umuttosun.com/http-protokolu/)
