![internet](/img/internet2.png)

Every device operating on the Internet possesses a unique address that identifies it within the network. These addresses serve as the device’s identity and ensure that communication is accurately directed to its intended destination.

This can be compared to finding a physical address in the real world. Even if you do not know the exact name of a place, you can reach it using its address and a map. The addressing system of the Internet functions in a similar way; these addresses enable data to reach the target device.

## What is an IP?

Data communication over the Internet operates according to specific rules and protocols. The most fundamental of these is the **Internet Protocol (IP)**. Every device connected to the Internet is assigned an **IP address** defined by this protocol.

To illustrate with a simple example:
When you perform a search on Google, you are essentially requesting information from another computer. That information is not stored on a single server but distributed across thousands of servers around the world. These servers can be thought of as more powerful versions of our personal computers. When you submit a query, the servers work collectively to return the most relevant results.

For data to be transmitted from one device to another, the **IP address** of the destination device must be known. Similarly, the source device also sends its own IP address so that the receiving system knows where to send the response. This mechanism also helps measure trustworthiness based on the originating address. In this sense, IP addressing plays a critical role in both routing and network security.

## IP Address

An IP address consists of a series of numbers that are converted into bits. Traditional IP addresses are 32 bits long. For example, the address `"175.128.15.121"` can be represented as `"10101111 10000000 00001111 01111001"`, where each segment separated by dots corresponds to 8 bits.

The initial numbers in an IP address generally identify the country and regional networks of a device, followed by sub-networks and finally the device’s unique identifier. This addressing format is known as **IPv4**, designed in 1973. It consists of four dot-separated segments, each ranging from [0–255].

The IPv4 addressing system can provide approximately 4 billion unique addresses. However, today the number of Internet-connected devices far exceeds that. As a result, a new format — **IPv6** — was introduced to provide longer addresses. While IPv4 supports 32-bit addresses, IPv6 uses 128 bits, expanding the number of possible addresses from billions to a quantity comparable to the number of grains of sand on Earth.

## How to Find Your IP Address

The web address “https://medium.com/@aysedemirel” can be considered my digital address on Medium. When you visit this link, you reach the server hosting my profile. This is the human-readable, memorable version. Because numeric IP addresses are difficult to remember, a system was developed to simplify access. In reality, the site’s IP address might look like “162.159.153.4” (which corresponds to one of Medium’s data centers located in the United States).

To view your IP address on a Windows operating system:

- Press Windows + R to open the Run dialog.
- Type `“cmd”` to launch the Command Prompt.
- Type `ipconfig` and press Enter
- The “IPv4 Address” or “IPv6 Address” line in the results will display your assigned IP address.

## Dynamic Host Configuration Protocol (DHCP)

IP addresses are generally not assigned manually by users. This task is handled by the **Dynamic Host Configuration Protocol (DHCP)**.

DHCP servers automatically assign unique IP addresses to devices connecting to the Internet, without user intervention. The assigned IP address acts as the device’s identifier within the network at that specific time — much like an ID number.

## Domain Name System (DNS)

If we can browse the Internet without ever typing IP addresses, how is that possible?
The answer lies in the **Domain Name System (DNS)**. DNS converts hard-to-remember IP addresses into human-friendly domain names.

For example, instead of typing `“216.58.214.132”` to reach Google, we simply type “www.google.com.” Here’s a step-by-step outline of this process:

1. You type “www.google.com”
   into your browser and send the request.

> Your request includes your own IP address, which ensures that the response knows where to return. Without your IP, the request might reach the destination but the reply could never find its way back. The Internet is a system of organized chaos — it functions smoothly only when both the destination and return addresses are known.

2. The request first reaches a DNS server, which looks up the IP address associated with “www.google.com.”

3. The browser then directs the request to the identified IP address.

4. The server generates a response packet and sends it to the IP address specified in the request.

5. The browser processes the received data, and Google’s homepage appears on your screen.

Thanks to this mechanism, the Internet maintains consistency and order even amid its chaotic structure — because every request has a defined source and destination.

## Distributed Hierarchy

If we use domain names to access every website, having just one DNS server would be impractical, wouldn’t it? If there were only one, reaching any address could take days. But if there are multiple DNS servers, how does the system know which one to contact?

The Internet’s architectural principle of **Distributed Hierarchy** also applies to the DNS system. DNS servers are divided into regions, each responsible for specific top-level domains such as “.org,” “.com,” or “.net.” Requests are routed to the appropriate server based on this hierarchical structure.

## DNS Spoofing

The openness of the DNS system also introduces certain security vulnerabilities. One of the most well-known examples is **DNS Spoofing (DNS Cache Poisoning)**. In this type of attack, malicious actors manipulate DNS records to associate a legitimate domain name with a fraudulent IP address. As a result, a user attempting to visit “www.google.com”
may unknowingly be redirected to a fake website. This method is often used in phishing attacks or data theft attempts.

---

In this article, we examined the technical foundations of IP and DNS.
To further explore how the Internet functions, follow the upcoming articles in this series.

See you in the next chapter 👋
