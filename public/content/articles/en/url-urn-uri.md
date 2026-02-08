![HTTP](../../img/url-uri-urn.png)

**URI (Uniform Resource Identifier)** denotes a uniquely identifiable resource. For example, it may represent the identity of an image, document, video, or any other digital resource available on the internet. A URI is a superset of both URL and URN and may encompass either or both of these identifier types.

**URL (Uniform Resource Locator)** specifies how a resource can be accessed. It includes the protocol used (such as HTTP, HTTPS, FTP, Telnet, etc.) as well as the resource’s location within a network. In this respect, a URL can be compared to a physical address in the real world: it describes the route by which a specific location can be reached.

**URN (Uniform Resource Name)**, on the other hand, specifies what is being accessed rather than where it is located. Its purpose is to provide a location-independent and persistent naming mechanism. In theory, if a name were globally unique, it could be considered an example of a URN.

> These relationships can be summarized as follows:
> All URLs and URNs are URIs; however, not every URI is necessarily a URL or a URN. Some URIs serve purely as identifiers and do not explicitly fulfill an access or naming function. Nevertheless, a particular URI may simultaneously exhibit characteristics of both a URL and a URN.

When this conceptual structure is visualized, it becomes clear that URI forms the superset, while URL and URN constitute subsets within that set.

![URI URN URL](../../img/uri-url-urn-exp-en.png)

Examples are provided below, all of which are also examples of **URIs**:

- URL: http://www.ietf.org/rfc/rfc2396.txt
- URL: telnet://192.0.2.16:80/
- URN (not a URL): urn:oasis:names:specification:docbook:dtd:xml:4.1.2

---

Stay tuned for articles that explain Internet concepts in greater detail.

See you in the next article 👋

**References:**

- [The Real Difference Between a URL and a URI](https://danielmiessler.com/study/difference-between-uri-url/)
- [What is the difference between a URI, a URL, and a URN? (1)](https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn)
- [What is the difference between a URI, a URL, and a URN? (2)](https://stackoverflow.com/questions/4913343/what-is-the-difference-between-uri-url-and-urn)
