![HTTP-HTTPS](/img/http-https.png)

**HTTP (Hypertext Transfer Protocol)**, istemci (client) ile sunucu (server) arasındaki iletişimi standartlaştıran, TCP/IP tabanlı ve uygulama katmanında (application layer) çalışan bir iletişim protokolüdür. İnternet üzerinden içeriklerin nasıl talep edildiğini ve sunulduğunu tanımlar.

HTTP varsayılan olarak **TCP port 80** üzerinden çalışır. Güvenli sürümü olan HTTPS ise TLS (Transport Layer Security) kullanır ve varsayılan olarak **TCP port 443** üzerinden iletişim kurar.

## HTTP/0.9 (1991)

HTTP’nin belgelenmiş ilk sürümü [HTTP/0.9](https://www.w3.org/Protocols/HTTP/AsImplemented.html)’dur ve oldukça basit bir yapıya sahiptir. Bu sürümde:

- Yalnızca **GET** metodu bulunmaktadır.
- Header yapısı yoktur.
- Sunucu yalnızca HTML içerik döndürür.
- Yanıt gönderildikten sonra bağlantı kapatılır.

Örnek istek:

```bash
GET /index.html
```

Sunucu, isteğe karşılık HTML içeriği gönderir ve ardından bağlantıyı sonlandırır:

```bash
(response body) -> cevap içeriği
(connection closed)-> bağlantı kapatılacak
```

Bu sürüm, yalnızca temel belge aktarımı için tasarlanmış olup modern web ihtiyaçlarını karşılamaktan uzaktır.

## HTTP/1.0 (1996)

HTTP/1.0, önceki sürüme kıyasla önemli ölçüde geliştirilmiştir. Bu sürümle birlikte:

- HTML dışında görsel, video ve farklı veri türleri desteklendi. Böylelikle web site içerikleri de zenginleşti.
- POST, HEAD gibi yeni HTTP metodları eklendi.
- HTTP header yapısı hem istek hem yanıt tarafında kullanılmaya başlandı.
- Durum kodları (status codes) tanımlandı.
- Yetkilendirme (authorization), önbellekleme (caching), içerik kodlama (encoding) gibi birçok özellik eklendi.

**Örnek istek:**

```bash
GET / HTTP/1.0
Host: aysedemirel.info
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
```

Yukarıdaki örnekte de görüldüğü üzere istemci istek ile beraber kendi kişisel bilgilerini de gönderir hale geldi. 0.9 sürümünde header olmadığı için bu tarz bilgileri gönderemiyordu.

**Örnek Cevap:**

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

Yukarıdaki cevap örneğini incelersek: 0.9 sürümünde sadece HTML tabanlı yanıt vardı. 1.0 sürümünde ise header eklendiği için daha fazla bilgi görmekteyiz. En başta 200 ile durum kodu görülüyor. Durum kodunu "OK" açıklaması takip ediyor. Header kısmı ASCII ile şifrelenmiş olarak duruyor, ama yanıt artık sadece metin değil görsel, video vb. de olabilir. İlk başta protokol hypertext olarak adlandırılsa da ilerledikçe **sadece metin taşımaktan çıkıp farklı medya tiplerini de destekler hale geldi**.

### HTTP/1.0’ın Temel Problemi

HTTP/1.0’da her istek için ayrı bir TCP bağlantısı kurulması gerekir. Bir web sayfasının birden fazla kaynak (resim, CSS, JavaScript vb.) içermesi durumunda, her kaynak için ayrı bağlantı açılır. Yukarıdaki örnekte de bu durumun bir özetini görebiliriz, isteğe karşılık gelen cevabın sonuna bağlantı sonlandırılmıştı.

Bu problem şu anlamlara gelir:

- Fazladan TCP three-way handshake
- Artan gecikme (latency)
- Düşük performans

### TCP Three-way Handshake

TCP bağlantısı, verilerin güvenli bir şekilde iletilmesini sağlamak için geliştirilmiş bir protokoldür. İnternet üzerindeki iletişim de TCP/IP modeline göre gerçekleşir. TCP bağlantısı ile veri paylaşılmadan önce istemci ve sunucu arasında bir dizi paket alışverişi olur. Bu alışverişe **three-way handshake(üçlü el sıkışma)** denir.

![3-way handshake](../../img/tcp-handshake.png)

Yukarıdaki örnekte 3-way handshake için bir şema görmekteyiz. Akışı yukarıdan aşağıya incelersek:

- **SYN:** İstemci(client) rastgele bir sayı şeçer (diyelim ki x olsun) ve sunucuya(server) bağlantı isteği ile beraber gönderir.
- **SYN ACK:** Sunucu istemciden sayıyı aldığını doğrulamak için rastgele bir sayı seçer(diyelim ki y olsun) ve bu sayı ile birlikte istemcinin gönderdiği sayının bir fazlasını da istemciye gönderir. Bu bağlantının onaylandığını gösterir.
- **ACK:** İstemci doğrulamak için sunucudan aldığı rastgele değerin bir fazlasını sunucuya gönderir. Bu adımla birlikte TCP güvenli bağlatısı doğrulanmış olur ve verilerin gidebileceği kanal açılmıştır.

### Stateless (Durumsuzluk)

HTTP **durumsuz (stateless)** bir protokoldür. Sunucu, istemcinin önceki istekleri hakkında bilgi tutmaz. Bu nedenle her HTTP isteği bağımsızdır ve gerekli tüm bilgileri kendi içinde taşımak zorundadır.

> HTTP 1.0 için sorunu özetlersek her istek için bağlantı açılması ve sunucu bilgi tutmadığı için her seferinde gereksiz bilgi aktarımı yapılacak olması bant genişliğinin (bandwidth) artmasına sebep olacak.

## HTTP/1.1 (1999)

HTTP/1.1, HTTP/1.0’daki performans sorunlarını azaltmayı hedefledi. HTTP/1.1'deki başlıca değişiklikler:

- **Yeni HTTP metodları:** PUT, PATCH, OPTIONS, DELETE
- **Host header** zorunlu hale gelmiştir.
- **Kalıcı bağlantılar (persistent connections):** 1.0 sürümünde her istek için ayrı bağlantı kurulması performansı etkiliyordu ve gecikme problemi ortaya çıkarıyordu. 1.1 ile bağlantıların varsayılan şekilde kapatılması engellendi. Birden fazla ardışık isteğe izin verecek şekilde bağlantı açık bırakıldı. Bağlantının kapatılması için **"Connection: close"** header’ı eklendi.
- **Pipelining desteği:** İstemci birden fazla isteği aynı bağlantı içinde sunucudan yanıt gelmeden gönderebilir.Sunucu yanıtları gönderirken aldığı sıra ile geri gönderir. Peki istemci ilk yanıtın bitip ikincinin başladığını nereden bilebilir? Cevap “Content-lenght” header. Bu header ile birlikte istemci birinci yanıtın nerede bittiğini bilir ve ikinci yanıtı bekler. Peki sunucu tarafından gönderilecek veri dinamikse uzunluğu sunucu nasıl bilecek ve gönderecek? Cevap: **_Chunked encoding_**

![Pipelining olup olmaması farkı](../../img/pipelining.png)

- **Chunked transfer encoding:** Dinamik içerik söz konusu olduğunda sunucu içerik uzunluğunun nerede başlayıp nerede bittiğini bulmak için “Content-Length” kullanır, gönderdiği içeriklere de bu bilgiyi ekler. Tüm içerik gönderildiğinde ve transfer bittiğinde ise boş içerik gönderir ve bu boş içerikte uzunluk(Content-lenght) boş olarak işaretlenmiş olarak gönderilir. Bu toplu aktarımda istemciyi bilgilendirmek için bir header vardır: **"Transfer-Encoding: chunked"**.
- HTTP/1.0 sadece temel kimlik doğrulamasına sahipti. HTTP/1.1 ise **özet ve proxy(vekil)** kimlik doğrulaması içerir.
- Ön bellekte tutma (caching)
- Byte Aralığı
- Karakter seti
- Dil uzlaşması
- İstemci çerezleri
- Geliştirilmiş sıkıştırma desteği
- Yeni durum kodu
- Ve daha fazlası ….

HTTP/1.0 ve HTTP/1.1 arasındaki farklara daha fazla bakmak isterseniz linkler:

- [Key differences between HTTP=1.0 and HTTP=1.1](http://www.ra.ethz.ch/cdstore/www8/data/2136/pdf/pd1.pdf)
- [Hypertext Transfer Protocol -- HTTP/1.1](https://tools.ietf.org/html/rfc2616)

### Pipelining Problemi

Günümüzde basit web sayfalarında bile 30’dan fazla sunucu-istemci bağlantısı olduğu görülebilir. Peki neden bu kadar bağlantı var, bu sorun çözülmemiş miydi?

**HTTP/1.1, herhangi bir zaman diliminde bir tane büyük bağlantıya sahip olabilir.** Bu sorunu pipelining ile çözmeye çalıştı, ama yavaş ve büyük istekler diğerler istekleri blokladı ve **pipelining tıkandığı için (head-of-line blocking)** diğer istekler beklemek zorunda kaldı. Sonuç olarak sorun çözülemedi, verimsizlik devam etti.

Bu nedenle geliştiriciler sprite sheet kullanımı, büyük CSS/JS dosyaları, [domain sharding](https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding) gibi geçici çözümler üretti.

## SPDY (2009)

Google alternatif protokol çalışmalarına başladı. Daha hızlı web sayfaları, web sayfalarındaki gecikmeleri azaltırken web güvenliği gibi konular üzerine çalışıldı. Ve sonuç olarak **SPDY**(Google markası kısaltma değil) ortaya çıktı.

SPDY'nin temel fikiri şu:

> Bant genişliğini artırmak her zaman performansı artırmaz, ancak gecikmeyi azaltmak performansı ciddi biçimde artırır.

**Gecikme(Latency)**, kaynak ve hedef arasında verinin ne kadar sürede gittiğidir. Ne kadar hızlı giderse gecikme o kadar küçük çıkar ve performans artar. Milisaniye cinsinden ölçülür.

**Bant genişliği(Bandwidth)** ise saniyede aktarılan veri miktarıdır. Ne kadar çok veri aktarılırsa bant genişliği o kadar çok çıkar ve bu da performansı artırır. **Bits Per Second(bps)** ile ifade edilir.

SPDY aynı zaman da multiplexing, sıkıştırma, önceliklendirme, güvenlik vb. konularını da içeriyordu. “HTTP/2 için ilham kaynağıdır.” denilebilir. HTTP’nin yerini almaya çalışmadı, application layer’daki HTTP üzerinde translation layer olarak geliştirildi, ağa istek gitmeden önce değiştiriyordu. Resmi bir standart olmasa da çıktığı yıllarda tüm tarayıcılar kullanmaya başladı. Sonradan **HTTP ve SPDY birleşip HTTP/2** olarak yola devam edildi.

## HTTP/2 (2015)

HTTP/2, düşük gecikmeli içerik aktarımı için tasarlandı.

**Temel Özellikler**

- Metin tabanlı değil, binary protokol
- Multiplexing — Tek bağlantı üzerinde birden fazla HTTP isteği
- HPACK kullanarak header sıkıştırma
- Server Push — Tek istek için çoklu yanıt
- İstek önceliklendirme
- TLS ile güçlü güvenlik desteği

![HTTP 2 layer](../../img/http-2.png)

Temel özellikleri detaylı inceleyelim:

### 1. BINARY PROTOCOL

Binary protokol ile parse etmek daha kolaydır. Fakat HTTP/1.x’e nazaran insan gözüyle okunması daha zordur. HTTP/2'de ana bloklar “Frame ve stream”ler.

#### Frame ve Stream

- Veri frame’lere bölünür. HTTP mesajları bir yada daha fazla frame’den oluşur. **HEADERS frame**, meta veri için ve **DATA frame** ise yararlı yük içindir. **RST_STREAM,SETTINGS, PRIORITY** gibi [başka frameler](https://httpwg.org/specs/rfc7540.html#FrameTypes) de vardır.
- Frame’ler stream’ler içinde taşınır.
- Her stream benzersiz bir ID’ye sahiptir.
- İstemci stream ID’leri tek, sunucu stream ID’leri çift sayıdır.
- **RST_STREAM** frame’i sayesinde istenmeyen stream’ler kapatılabilir; bağlantının tamamen kapatılması gerekmez. İstemci stream’e ihtiyacı kalmadığında sunucuya haber vermek için bu header’ı kullanır. **Böylelikle bağlantı açık kalır ama istenmeyen stream sonlandırılır.**

### 2. MULTIPLEXING

TCP bağlantısı açık olduğu sürece, stream’lere sıralı olmadan istekler gönderilir. Tüm istekler aynı bağlantıda gerçekleşir, ek bağlantıya ihtiyaç duyulmaz. Sunucu ise aynı şeklide cevapları sıraya almadan gönderir. Stream id sayesinde sıraya konulur ve hangi istek hangi pakete ait görülür.

Tek bir TCP bağlantısı üzerinden birden fazla isteğin eş zamanlı iletilmesi sağlanır. HTTP/2 ile stream id geldiği için bir bağlantıda birden fazla HTTP isteği gider gelir, yol tıkanmaz. Bu sayede **head-of-line blocking problemi büyük ölçüde çözülmüştür**.

![HTTP 1 & HTTP 2 Multiplexing](../../img/multiplexing.png)

### 3. HPACK İLE HEADER SIKIŞTIRMA

Gönderilen header’ları optimize etmeyi amaçlayan ayrı bir RFC’dir.

**RFC (Request For Comments)**, TCP/IP tanımlamasında kullanılan standart numaralara sahip dokümanlardır. Yukarıda HTTP/1.1 için verdiğimiz [ek kaynak](https://datatracker.ietf.org/doc/html/rfc2616) bir RFC idi.

![HPACK ile header sıkıştırma](../../img/hpack.png)

Aynı istemciden sunucuya sürekli olarak eriştiğimizde, header ile tekrar tekrar gönderdiğimiz çok fazla gereksiz veri olur. Bazen başlıkların boyutunu artıran çerezler(cookies) de olabilir. Bu da **bant genişliği kullanımına ve gecikmenin artmasına neden olur**. HTTP/2 ile bunun çözmek için **“Header sıkıştırma”** duyuruldu.

![Huffman kod ile header sıkıştırma (HPACK)](../../img/huffman-code.png)

İstek ve cevapların aksine header’lar gzip veya compress formatları ile sıkıştırılmazlar. Header sıkıştırma için farklı bir mekanizma vardır: **Huffman kod**.

Huffman kodlama ile bir header tablosu istemci ve sunucu tarafında korunur. Hem istemci hem sunucu sonraki isteklerde tekrarlayan header’ları(örneğin user agent) atlar.

Bu noktada şunu bilmekte fayda var, bazı pseudo header(:method, :scheme, :host, :path) hariç HTTP/1.1’den farklı bir header yoktur.

### 4. SERVER PUSH

Server push, HTTP/2 ile gelmiş en önemli özelliklerden biridir. Sunucu, istemcinin belirli bir kaynağı isteyeceğini bilerek, o istemeden istemciye bu kaynağı yönlendirebilir.

Örneğin bir tarayıcı bir web sayfasını yüklerken sunucudan tüm içeriği almak için sayfadaki içerikleri parça parça isteyecek ve sunucudan cevap alacaktı. Sunucu-istemci arasındaki gidiş dönüş sayısını azaltmak için server push özelliği devreye giriyor.

Sunucu **PUSH_PROMISE** adında özel bir frame kullanır. PUSH_PROMISE frame’i söz verilen stream(akış) ID’sini içerir, sunucunun göndereceği kaynağın bulunduğu stream belirtilmiş olur.

### 5. İSTEK ÖNCELİKLENDİRME

İstemci bir stream için öncelik belirleyebilir. Bu öncelik bilgisi **HEADERS frame içerisinde önceliklendirme** bilgisinde tutulur. Sonradan değiştirmek için istemci **PRIORITY** frame göndererek stream önceliğini değiştirebilir.

Öncelik bilgisi olmadan sunucu istekleri en hızlı olacak şekilde sıraya koymadan işler. Eğer öncelik bilgisi gelirse, sunucu hangi isteği işlemek için ne kadar kaynak vermesi gerektiğini belirler buna göre işleme devam eder.

### 6. GÜVENLİK

HTTP/2 için TLS ile güvenlik olup olmaması konusu geniş çaplı tartışıldı. Tartışmalar sonucu zorunlu olmaması gerektiği düşünüldü. Zorunlu olmasa da iyi pratik düşüncesiyle varsayılan olarak uygulanmaya başlandı.

HTTP/2, TLS üzerinden uygulandığında bazı gereksinimler gerektirir: TLS versiyonu olarak 1.2 veya daha yukarı sürüm kullanılmalıdır, belirli bir anahtar boyut seviyesi olmalıdır, geçici anahtar gereklidir,…

---

- HTTP/1.1 ve HTTP/2 arasındaki performans farkına bakmak için:
  [HTTP/2 technology demo](http://www.http2demo.io/)

- HTTP/2 protokolüne tarayıcılar üzerinde karşılaştırma yapmak için:
  [Can I use HTTP2?](https://caniuse.com/?search=http2)

- HTTP gelişmeleri tek akışta:

![Secure web timeline](../../img/web-timeline.png)

---

HTTP/2 yavaş yavaş artan adaptasyon süreci ile SPDY’yi geçti. Bir sonraki yazıda HTTP/3 ile HTTP'nin gelişiminin son noktasını da ele alacağım.

İnternet kavramlarının daha ayrıntılı açıklandığı yazılar için takipte kalın.

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- [What Is HTTP/3 – Lowdown on the Fast New UDP-Based Protocol](https://kinsta.com/blog/http3/)
- [HTTP/3: From root to tip](https://blog.cloudflare.com/http-3-from-root-to-tip/)
