![HTTP-HTTPS](/img/http-https.png)

**HTTP (Hypertext Transfer Protocol)** is a TCP/IP-based communication protocol that operates at the application layer and standardizes communication between a client and a server. It defines how content is requested and delivered over the internet.

HTTP operates by default over **TCP port 80**. Its secure variant, HTTPS, uses TLS (Transport Layer Security) and communicates by default over **TCP port 443**.

## HTTP/0.9 (1991)

The first documented version of HTTP is [HTTP/0.9](https://www.w3.org/Protocols/HTTP/AsImplemented.html), which has a simple structure. In this version:

- Only the **GET** method is available.
- There is no header structure.
- The server returns only HTML content.
- The connection is closed after the response is sent.

Example request:

```bash
GET /index.html
```

The server responds by sending the HTML content and then terminates the connection:

```bash
(response body)
(connection closed)
```

This version was designed solely for basic document transfer and is far from meeting modern web requirements.

## HTTP/1.0 (1996)

HTTP/1.0 introduced significant improvements over the previous version. With this release:

- Support was added for images, video, and various data types beyond HTML, enabling richer website content.
- New HTTP methods such as POST and HEAD were introduced.
- The HTTP header structure began to be used in both requests and responses.
- Status codes were defined.
- Numerous features such as authorization, caching, and content encoding were added.

**Example Request:**

```bash
GET / HTTP/1.0
Host: aysedemirel.info
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
```

As seen in the example above, the client now sends additional information along with the request. In version 0.9, such information could not be transmitted due to the absence of headers.

**Example Response:**

```bash
HTTP/1.0 200 OK
Content-Type: text/plain
Content-Length: 137582
Expires: Thu, 05 Dec 1997 16:00:00 GMT
Last-Modified: Wed, 5 August 1996 15:55:28 GMT
Server: Apache 0.84

(response body)
(connection closed)
```

When examining this response example, it becomes clear that version 0.9 returned only HTML-based responses. In version 1.0, however, the inclusion of headers allows much more information to be conveyed. The response begins with the status code **200**, followed by its explanation **OK**. The header section is encoded in ASCII, but the response body is no longer limited to text and may include images, video, and other media types. Although the protocol was initially named hypertext, **it evolved beyond transporting plain text and began to support multiple media formats**.

### The Fundamental Problem of HTTP/1.0

In HTTP/1.0, a separate TCP connection must be established for each request. If a web page contains multiple resources (images, CSS, JavaScript, etc.), a separate connection is opened for each resource. As seen in the example above, the connection is terminated at the end of each response.

This leads to the following issues:

- Additional TCP three-way handshakes
- Increased latency
- Reduced performance

### TCP Three-way Handshake

TCP is a protocol designed to ensure reliable data transmission. Communication over the internet follows the TCP/IP model. Before data is exchanged over a TCP connection, a series of packet exchanges occurs between the client and the server. This process is known as the **three-way handshake**.

![3-way handshake](../../img/tcp-handshake.png)

In the diagram above, the flow of the three-way handshake can be examined from top to bottom:

- **SYN:** The client selects a random number (denoted as x) and sends it to the server along with a connection request.
- **SYN-ACK:** The server acknowledges receipt of the client’s number by selecting its own random number (denoted as y) and sending it back to the client together with x + 1. This confirms the connection request.
- **ACK:** The client responds by sending y + 1 back to the server. At this point, the TCP secure connection is established, and the channel for data transmission is opened.

### Stateless

HTTP is a **stateless protocol**. The server does not retain information about previous client requests. As a result, each HTTP request is independent and must contain all necessary information within itself.

> In summary, for HTTP/1.0, the requirement to establish a new connection for each request and the lack of server-side state result in repeated transmission of redundant information, increasing bandwidth consumption.

## HTTP/1.1 (1999)

HTTP/1.1 aimed to reduce the performance limitations of HTTP/1.0. The main changes introduced in HTTP/1.1 include:

- **New HTTP methods:** PUT, PATCH, OPTIONS, DELETE
- The **Host header** became mandatory.
- **Persistent connections:** In version 1.0, establishing a new connection for each request negatively affected performance and increased latency. With HTTP/1.1, connections are kept open by default, allowing multiple sequential requests over the same connection. To explicitly close a connection, the **"Connection: close"** header was introduced.
- **Pipelining support:** The client can send multiple requests over the same connection without waiting for responses. The server returns responses in the order received. The client determines where one response ends and the next begins using the Content-Length header. If the response data is dynamic and the total length is unknown in advance, the server uses **_chunked encoding_**.

![Difference with and without pipelining](../../img/pipelining.png)

- **Chunked transfer encoding:** When dealing with dynamic content, the server uses Content-Length to indicate the size of transmitted data. Once all content is sent, an empty chunk is transmitted, indicating the end of the transfer. The header **"Transfer-Encoding: chunked"** informs the client that chunked transfer encoding is in use.
- HTTP/1.0 supported only basic authentication, whereas HTTP/1.1 introduced **digest and proxy authentication**.
- Caching support
- Byte ranges
- Character set specification
- Language negotiation
- Client cookies
- Improved compression support
- New status codes
- And more

For further details on the differences between HTTP/1.0 and HTTP/1.1, see:

- [Key differences between HTTP=1.0 and HTTP=1.1](http://www.ra.ethz.ch/cdstore/www8/data/2136/pdf/pd1.pdf)
- [Hypertext Transfer Protocol -- HTTP/1.1](https://tools.ietf.org/html/rfc2616)

### The Pipelining Problem

Even modern web pages may involve more than 30 client–server connections. Why does this happen if the problem was supposedly addressed?

**HTTP/1.1 allows only a single large connection at any given time**. Pipelining attempted to address this issue, but slow or large requests blocked subsequent ones, resulting in **head-of-line blocking**. Consequently, the inefficiency persisted.

As a workaround, developers adopted techniques such as sprite sheets, large CSS/JS bundles, and [domain sharding](https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding).

## SPDY (2009)

Google initiated work on alternative protocols to reduce web latency while improving security. The result was **SPDY** (a Google brand name, not an acronym).

The core idea behind SPDY is as follows:

> Increasing bandwidth does not always improve performance, whereas reducing latency can significantly enhance performance.

**Latency** refers to the time it takes for data to travel from source to destination. Lower latency results in better performance and is measured in milliseconds.

**Bandwidth** refers to the amount of data transmitted per second. Higher bandwidth generally improves performance and is measured in **bits per second (bps)**.

SPDY also introduced concepts such as multiplexing, compression, prioritization, and security. It can be considered the inspiration for HTTP/2. SPDY did not aim to replace HTTP; instead, it was implemented as a translation layer on top of HTTP at the application layer, modifying requests before they were sent over the network. Although never standardized, it was widely adopted by browsers at the time. Eventually, **HTTP and SPDY were merged into HTTP/2**.

## HTTP/2 (2015)

HTTP/2 was designed to enable low-latency content delivery.

**Core Features**

- Binary protocol instead of text-based
- Multiplexing — multiple HTTP requests over a single connection
- Header compression using HPACK
- Server Push — multiple responses for a single request
- Request prioritization
- Strong security support with TLS

![HTTP/2 layer](../../img/http-2.png)

The core features are examined in detail below:

### 1. BINARY PROTOCOL

Binary protocols are easier to parse programmatically, although they are less readable to humans compared to HTTP/1.x. In HTTP/2, the fundamental units are "frames and streams".

#### Frame and Stream

- Data is divided into frames. HTTP messages consist of one or more frames. **HEADERS** frames carry metadata, while **DATA** frames carry the payload. [Additional frame](https://httpwg.org/specs/rfc7540.html#FrameTypes) types include **RST_STREAM**, **SETTINGS**, and **PRIORITY** (see frame types).
- Frames are transmitted within streams.
- Each stream has a unique identifier.
- Client-initiated stream IDs are odd numbers; server-initiated stream IDs are even numbers.
- Using the **RST_STREAM** frame, unwanted streams can be terminated without closing the entire connection. When the client no longer needs a stream, it can notify the server accordingly. Thus, **the connection remains open while unnecessary streams are closed**.

### 2. MULTIPLEXING

As long as the TCP connection remains open, requests can be sent to streams without strict ordering. All requests share the same connection, eliminating the need for additional connections. Similarly, the server sends responses without enforcing order. Stream IDs allow responses to be correctly associated with their respective requests.

By enabling multiple simultaneous requests over a single TCP connection, **HTTP/2 largely mitigates the head-of-line blocking problem**.

![HTTP/1 & HTTP/2 Multiplexing](../../img/multiplexing.png)

### 3. HEADER COMPRESSION WITH HPACK

HPACK is defined in a separate RFC and aims to optimize transmitted headers.

**RFC (Request for Comments)** documents are standardized specifications used in TCP/IP definitions. [The reference](https://datatracker.ietf.org/doc/html/rfc2616) previously provided for HTTP/1.1 is an example of an RFC.

![Header compression with HPACK](../../img/hpack.png)

Repeated requests from the same client often result in redundant header data, sometimes amplified by cookies. **This increases bandwidth usage and latency**. To address this, HTTP/2 introduced **header compression**.

![Header compression using Huffman coding (HPACK)](../../img/huffman-code.png)

Unlike request and response bodies, headers are not compressed using gzip or similar methods. Instead, **Huffman coding** is used. Both client and server maintain a shared header table, allowing repeated headers (such as User-Agent) to be omitted in subsequent requests.

Aside from certain pseudo-headers (:method, :scheme, :host, :path), HTTP/2 does not introduce fundamentally new headers compared to HTTP/1.1.

### 4. SERVER PUSH

Server Push is one of the most significant features introduced with HTTP/2. The server can proactively send resources to the client when it anticipates that the client will request them.

For example, when a browser loads a web page, it typically requests multiple resources sequentially. Server Push reduces round-trip communication by delivering related resources without explicit client requests.

The server uses a special frame called **PUSH_PROMISE**, which contains the stream ID associated with the promised resource.

### 5. REQUEST PRIORITIZATION

The client can assign priorities to streams. Priority information is included in the **HEADERS** frame. The client may later adjust priorities by sending a **PRIORITY** frame.

Without priority information, the server processes requests as efficiently as possible without differentiation. When priorities are specified, the server allocates resources accordingly.

### 6. SECURITY

The use of TLS with HTTP/2 was widely debated. Ultimately, it was decided that TLS should not be mandatory, although it became the default as a best practice.

When HTTP/2 is used over TLS, certain requirements apply: TLS version 1.2 or higher must be used, minimum key sizes must be met, and ephemeral keys are required, etc.

---

- To observe performance differences between HTTP/1.1 and HTTP/2:
  [HTTP/2 technology demo](http://www.http2demo.io/)

- To compare browser support for HTTP/2:
  [Can I use HTTP2?](https://caniuse.com/?search=http2)

- Evolution of HTTP in a single timeline:

![Secure web timeline](../../img/web-timeline.png)

---

With its gradually increasing adoption, HTTP/2 has surpassed SPDY. In the next article, the evolution of HTTP will be continued with HTTP/3, representing the latest stage in this progression.

Stay tuned for more in-depth explanations of internet concepts.

See you in the next article 👋

**References:**

- [What Is HTTP/3 – Lowdown on the Fast New UDP-Based Protocol](https://kinsta.com/blog/http3/)
- [HTTP/3: From root to tip](https://blog.cloudflare.com/http-3-from-root-to-tip/)
