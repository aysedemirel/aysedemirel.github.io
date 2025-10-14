![DNS](/img/dns.png)

Devices connected to the Internet communicate through **IP (Internet Protocol) addresses**. An IP address functions as a unique identifier for each device. When data is transferred from one device to another, the path it follows is determined based on these IP addresses. Therefore, whether communication occurs over the Internet or through a local network (Ethernet), an IP address is required for data transmission.

## Internet and Data Transmission

The common foundation of every activity performed on the Internet is **data exchange**. Watching videos on YouTube, browsing photos on Instagram, or conducting research on a website—all rely on the transmission of data.

Since this data is not stored locally on our devices, it must be requested from the relevant servers when accessed. For example, when viewing a photo on Instagram, the browser or application sends a **data request** to the server where the image is stored. The server responds to this request by sending the relevant data, i.e., the photo, back to our device.

At the core of this process lie IP addresses. However, users do not manually enter IP addresses while browsing the web. Instead of typing “172.217.169.14”, we simply enter www.google.com.

So, who translates these human-friendly names into IP addresses? The answer is simple: **DNS (Domain Name System)**.

## The Role of DNS

DNS can be described as the “phonebook of the Internet". While we use domain names (e.g., www.google.com or www.instagram.com) to navigate the web, computers require numerical IP addresses to communicate.

DNS servers establish a mapping between domain names and their corresponding IP addresses. When a user enters a domain name into a browser, the browser sends this information to a DNS server. The DNS server locates the IP address associated with that domain and returns it to the browser. The browser then uses this IP address to connect to the destination server and begin data transmission.

**In summary, the process works as follows:**

> Domain name (entered by user) → Browser (e.g., Chrome, Firefox) → DNS (resolves to IP address) → Browser (sends request to target IP) → Server (returns data)

![URL](/img/url.png)

## Hierarchy of DNS Servers

The DNS system does not rely on a single server; it is a **distributed and hierarchical network**. This structure allows billions of DNS queries from around the world to be resolved within seconds. DNS servers operate in a defined hierarchy, and queries are processed according to this order.

## DNS Query Process

### 1. Browser Cache

Before sending a new DNS query, the browser first checks its local cache. If a resolution for the same domain name already exists and the IP address remains valid, the browser uses the cached address directly without initiating a new DNS request.

### 2. Local Network Cache

If the browser cache does not contain the information, the system checks the local network (e.g., the modem or router). Many routers store frequently accessed domain names in their memory to reduce lookup time.

### 3. Root DNS Servers

If the IP address is still unresolved, the request is forwarded to the **Root DNS servers**. These servers identify which **TLD (Top-Level Domain)** is responsible for the requested domain. For example:

- `.com` domains are handled by specific TLD servers,
- while `.org`, `.io`, `.me`, and other extensions have their own respective TLD servers.

The Root DNS then provides the address of the appropriate TLD server and directs the query there.

### 4. Final IP Resolution

The TLD server points to the **authoritative DNS server** responsible for the domain. In this final step, the correct IP address is obtained and returned to the browser. The browser then connects to the target server using this IP address and initiates data transmission.

> Browser → Root DNS → TLD Servers → Authoritative DNS → IP Address

![DNS Servers](/img/dns-servers.png)

---

DNS is one of the Internet’s most vital yet invisible components. It enables users to navigate the web without memorizing complex IP addresses. When a user types “www.google.com”, the system actually triggers a precisely orchestrated request across a vast, global network of distributed servers.

If you want to gain a deeper understanding of the technical infrastructure and security principles of the internet, you can follow the rest of the series. For more comprehensive information, you can check out the following articles:

- [What is the internet, how does it work? Who owns it?](https://aysedemirel.github.io/#/blog/what-is-the-internet)
- [Internet 101 — IP and DNS](https://aysedemirel.github.io/#/blog/ip-dns)
- [Internet 101 - How is data transmitted?](https://aysedemirel.github.io/#/blog/how-to-transfer-data)
- [Internet 101 — Encryption and Security](https://aysedemirel.github.io/#/blog/encryption-security)
- [How do you find a website's IP address?](https://aysedemirel.github.io/#/blog/how-find-website-ip)

For a visual and humorous explanation of the DNS process, the following resource is particularly helpful:

[How DNS works](https://howdns.works/)

See you in the next article 👋

**References:**

- [What is a TLD?](https://www.quora.com/What-is-a-TLD)
- [What are root name servers?](https://www.netnod.se/i-root/what-are-root-name-servers)
- [DNS in One Picture](https://roadmap.sh/guides/dns-in-one-picture)
