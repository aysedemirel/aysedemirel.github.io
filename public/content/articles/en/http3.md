![HTTP/3](/img/http3.png)

When introducing innovations in internet protocols, one frequently encounters the classic dilemma commonly phrased as “Which came first, the chicken or the egg?” In this context, the problem can be stated as follows: for a new protocol to be adopted, should server-side support come first, or should the client side lead the transition?

Communication between a client and a server requires that both parties support the same protocol. A unilateral transition by only one side is insufficient to establish communication. For this reason, innovations at the protocol level cannot be deployed in isolation; instead, they require coordinated adoption across both the client and server ecosystems. The emergence and gradual adoption of HTTP/3 represent a concrete example of this need for synchronization.

## What Does HTTP/3 Introduce?

HTTP/3 uses the **QUIC (Quick UDP Internet Connections) protocol instead of TCP at the transport** layer. QUIC is a modern transport protocol built on top of UDP and treats streams as first-class entities at the transport layer.

In QUIC, multiple streams can be transmitted concurrently over a single QUIC connection. Creating a new stream does not require establishing an additional connection or performing a new handshake process. Furthermore, the TCP “slow start” mechanism is not applied repeatedly for each stream. One of the most critical differences is that streams operate independently: packet loss affecting one stream does not impact the others.

This architecture is made possible by encapsulating QUIC packets within UDP datagrams. In other words, QUIC reconstructs the functionality traditionally provided by **TCP, TLS, and HTTP/2 in a more integrated and modern form** on top of UDP.

## Solving the Head-of-Line Blocking Problem

![Comparison between HTTP/2 and HTTP/3 protocols](../../img/http3/http2-http3.png)

Although HTTP/2 provides multiplexing at the application layer, it cannot fully avoid the head-of-line blocking problem at the transport layer due to its dependency on TCP. In TCP, when packet loss occurs, subsequent packets are delayed, which affects all active streams.

QUIC addresses this issue at the transport layer. Because each stream is handled independently, congestion or packet loss in one stream does not block the others. By delivering the multiplexing advantages of HTTP/2 over QUIC, HTTP/3 effectively eliminates the head-of-line blocking problem.

![HTTP/2 over TCP (suffers from head-of-line blocking)](../../img/http3/http2-tcp.png)

![HTTP/3 over QUIC (resolves head-of-line blocking)](../../img/http3/http3-quic.png)

## Faster and More Secure Connection Establishment

QUIC combines the TCP three-way handshake with the TLS 1.3 handshake process. As a result, **encryption and authentication are enabled by default**, and **connection establishment is completed in a shorter time**.

When initiating a new HTTP session, the latency required for the first request is lower compared to traditional TCP connections secured with TLS. This improvement is particularly significant for latency-sensitive applications.

![HTTP request over QUIC](../../img/http3/quic.png)

## Header Compression: QPACK

QUIC guarantees in-order delivery of bytes within a single stream; however, it does not impose ordering constraints across different streams. The HPACK header compression mechanism used in HTTP/2 relies on assumptions of ordered delivery. Consequently, HPACK is not fully compatible with QUIC in all scenarios.

To address this limitation, HTTP/3 introduces a new header compression mechanism called **QPACK**. QPACK is specifically designed to operate efficiently within HTTP/3’s stream-based and unordered delivery model.

## QUIC Implementations and Libraries

![The quiche library](../../img/http3/quiche.png)

For those interested in examining practical implementations of QUIC, the [quiche](https://github.com/cloudflare/quiche) library developed by Cloudflare serves as a strong reference point. A selection of implementations within the QUIC and HTTP/3 ecosystem is listed below:

| Name     | Client/Server | Programming Language | Company    | Repository                                                                                                             |
| -------- | ------------- | -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| aioquic  | Both          | Python               |            | [https://github.com/aiortc/aioquic](https://github.com/aiortc/aioquic)                                                 |
| Cronet   | Both          | C++                  | Google     | [https://github.com/chromium/chromium/tree/master/net/quic](https://github.com/chromium/chromium/tree/master/net/quic) |
| Flupke   | Client        | Java                 |            | [https://bitbucket.org/pjtr/flupke](https://bitbucket.org/pjtr/flupke)                                                 |
| h2o      | Server        | C                    |            | [https://github.com/h2o/h2o](https://github.com/h2o/h2o)                                                               |
| http3    | Both          | Haskell              |            | [https://github.com/kazu-yamamoto/http3](https://github.com/kazu-yamamoto/http3)                                       |
| libcurl  | Client        | C                    |            | [https://github.com/curl/curl](https://github.com/curl/curl)                                                           |
| lsquic   | Both          | C                    | LiteSpeed  | [https://github.com/litespeedtech/lsquic](https://github.com/litespeedtech/lsquic)                                     |
| MsQuic   | Both          | C                    | Microsoft  | [https://github.com/microsoft/msquic](https://github.com/microsoft/msquic)                                             |
| neqo     | Both          | Rust                 | Mozilla    | [https://github.com/mozilla/neqo](https://github.com/mozilla/neqo)                                                     |
| nghttp3  | Partial       | C                    |            | [https://github.com/ngtcp2/nghttp3](https://github.com/ngtcp2/nghttp3)                                                 |
| proxygen | Server        | C++                  | Facebook   | [https://github.com/facebook/proxygen#quic-and-http3](https://github.com/facebook/proxygen#quic-and-http3)             |
| quic-go  | Both          | Go                   |            | [https://github.com/lucas-clemente/quic-go](https://github.com/lucas-clemente/quic-go)                                 |
| quiche   | Both          | Rust                 | Cloudflare | [https://github.com/cloudflare/quiche](https://github.com/cloudflare/quiche)                                           |
| quinn    | Both          | Rust                 |            | [https://github.com/quinn-rs/quinn](https://github.com/quinn-rs/quinn)                                                 |

For additional HTTP/3 implementations, see: [Implementations](https://github.com/quicwg/base-drafts/wiki/Implementations)

## Innovations Introduced with HTTP/3

The key advancements introduced by HTTP/3 can be summarized as follows:

- Latency during connection establishment has been significantly reduced.
- The head-of-line blocking problem has been eliminated through the use of multiple independent streams.
- TLS 1.3 has been made mandatory, ensuring that only secure data transmission is supported.
- Connection migration is supported. Even if the client’s IP address changes, the existing connection can continue uninterrupted using a 64-bit connection identifier. This feature is particularly advantageous for mobile devices transitioning between Wi-Fi and cellular networks.
- Support for zero round-trip time (0-RTT) session resumption is provided, allowing HTTP requests to be sent before the handshake process is fully completed. (At the time of writing, Cloudflare indicates that QUIC is not yet fully enabled for this feature, but active work is ongoing.)

## How to Enable HTTP/3

The process of enabling HTTP/3 varies depending on the CDN or server infrastructure in use. For example, users of Cloudflare can follow the steps outlined in the documentation under “[How do I enable HTTP/3 for my domain?](https://blog.cloudflare.com/http3-the-past-present-and-future/)”.

---

Stay tuned for more in-depth explanations of internet concepts.

See you in future articles 👋

**References:**

- [HTTP/3: the past, the present, and the future](https://blog.cloudflare.com/http3-the-past-present-and-future/)
- [The Road to QUIC](https://blog.cloudflare.com/the-road-to-quic/)
- [Enjoy a slice of QUIC, and Rust!](https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/)
- [Github quiche](https://github.com/cloudflare/quiche)
- [MULTIPLEXED STREAM TRANSPORT OVER UDP](https://docs.google.com/document/d/1RNHkx_VvKWyWg6Lr8SZ-saqsQx7rFV-ev2jRFUoVD34/edit)
- [HTTP/3 RFC](https://tools.ietf.org/html/draft-ietf-quic-http-33)
