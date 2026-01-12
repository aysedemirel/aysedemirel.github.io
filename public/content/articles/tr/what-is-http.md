![HTTP](../../img/http.png)

**HTTP (Hyper-TextTransfer Protocol)**, istemci ve sunucunun birbiri ile nasıl iletişim kurduğunu standartlaştıran TCP/IP tabanlı application layer (uygulama katmanlı) iletişim protokolüdür. İçeriğin internet üzerinden nasıl talep edildiğini ve iletildiğini tanımlar. HTTP protokolü varsayılan olarak **TCP port 80** üzerinden çalışır. Güvenli iletişim sağlayan **HTTPS (HTTP Secure)** ise **443 numaralı portu** kullanır.

## TCP Bağlantısının Kurulması ve Three-Way Handshake

HTTP iletişimi başlamadan önce istemci ve sunucu arasında bir **TCP bağlantısı** kurulur. Bu bağlantının güvenilirliğini sağlamak amacıyla **three-way handshake (üçlü el sıkışma)** olarak adlandırılan bir süreç gerçekleşir. Bu süreç, istemci ve sunucunun veri iletimine hazır olduğunu karşılıklı olarak doğrulamasını sağlar.

![3-way handshake](../../img/tcp-handshake.png)

Bağlantı kurulduktan ve güvenli iletişim ortamı sağlandıktan sonra, HTTP üzerinden **istek (request)** ve **cevap (response)** mesajları ile veri alışverişi başlar.

## HTTP Mesaj Yapısı

HTTP bir protokol olarak, mesajların **hangi formatta, hangi sırayla ve hangi kurallar çerçevesinde** iletileceğini tanımlar. Böylece istemci ve sunucu, aynı dili konuşuyormuş gibi iletişim kurabilir.

Bir HTTP isteğinin genel yapısı şu şekildedir:

`METHOD istek-hedefi HTTP/x`

Örneğin:

`GET /doc HTTP/1.1`

Bu satırda:

- **METHOD**, yapılacak işlemi belirtir
- **İstek hedefi**, talep edilen kaynağı ifade eder
- **HTTP/x**, kullanılan HTTP sürümünü gösterir

## HTTP Metotları

![HTTP genel yapı örneği](../../img/http-structure-tr.png)

HTTP protokolü içerisinde farklı amaçlara hizmet eden çeşitli metotlar bulunmaktadır. En yaygın kullanılanlar şunlardır:

| Method  | Açıklama                                                                                                                                                                           |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Sunucudan **veri almak** için kullanılır (READ). Sayfa, JSON, dosya vb. dönebilir. Yan etki üretmemelidir (safe) ve aynı istek tekrarlandığında sonuç değişmemelidir (idempotent). |
| HEAD    | GET ile aynı işlemi yapar ancak **response body dönmez**, sadece **header bilgileri** alınır. Cache kontrolü, dosya boyutu ve kaynağın varlığı için kullanılır.                    |
| POST    | Sunucuya **veri göndermek** için kullanılır. Yeni kayıt oluşturma (CREATE), form gönderme veya bir işlem tetikleme amacıyla kullanılır. **Idempotent değildir**.                   |
| PUT     | Belirli bir kaynağı **tamamen oluşturur veya günceller**. Var olan kaynağı **baştan sona değiştirir (replace)**. Aynı istek tekrarlandığında sonuç değişmez (idempotent).          |
| DELETE  | Belirtilen kaynağın **silinmesini** talep eder.                                                                                                                                    |
| PATCH   | Belirli bir kaynağın **sadece bir kısmını günceller**. PUT’tan farkı, tüm kaynağı değil **partial update** yapmasıdır.                                                             |
| TRACE   | İsteğin sunucuya giderken **nasıl değiştiğini görmek** için kullanılır. Debug amaçlıdır, güvenlik nedeniyle çoğu sunucuda kapalıdır.                                               |
| CONNECT | İstemci ile sunucu arasında **iki yönlü bir tünel** açar. En yaygın kullanım alanı HTTPS üzerinden proxy bağlantılarıdır.                                                          |
| OPTIONS | Belirli bir endpoint’in **desteklediği HTTP method’larını ve seçenekleri** öğrenmek için kullanılır. CORS preflight isteklerinde yaygındır.                                        |

Örneğin **GET** metodu, istemcinin sunucudan bir web sayfası, belge veya başka bir kaynağı talep etmesini sağlar.

## HTTP Header Alanları

HTTP istek ve cevaplarında çeşitli **header (başlık)** alanları yer alır. Bunlar iletişimin detaylarını belirler:

**1- Host:** İsteğin hangi web sitesine yapıldığını belirtir

**2- Connection:** Bağlantının nasıl sürdürüleceğini tanımlar

Bağlantının nasıl sürdürüleceği iki türlü belirlenebilir:

- `close` olarak bağlantı kurulmuşsa istek için cevap gelince bağlantı sonlandırılır.

- `keep-alive` olarak kurulmuşsa bağlantı devam eder.

> `close` seçeneği her istek için yeni bağlantı kurulmasını gerektirdiğinden performans ve kaynak kullanımı açısından dezavantajlıdır.

**3- User-Agent:** İstemcinin (tarayıcı veya uygulama) kimliğini bildirir

**4- Accept-Language:** Tercih edilen dil bilgisini içerir

Bu bilgiler sayesinde sunucu, istemciye özel içerik veya ayarlamalar sunabilir. Yukarıda incelediğimiz header alanlarından başka header alanları da vardır, [bu sayfadan](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers) tamamına ulaşabilirsiniz.

## HTTP Cevapları ve Durum Kodları

Sunucudan dönen cevaplar da HTTP formatındadır. Cevabın ilk satırında **durum kodu (status code)** bulunur.

**Durum kodu(status code)**, isteğimiz ile cevabın uyumunu gösterir. Bu kodlar gruplar halindedir. 100 ile başlayan kodlar “Bilgi” amaçlı, 200 ile başlayan kodlar “Başarı” ile gerçekleşen komut bildirmek amaçlı, 300 ile başlayan kodlar “Yönlendirme” amaçlı gönderilir bu kodu gördüğümüzde yönlendirdiği şekilde aksiyon alırız, 400 ile başlayan kodlar “İstemci Hatası” bildirmek içindir yanlış kaynağı istemiş olmak gibi, 500 ile başlayan kodlar “Sunucu Hatası” bildirmek amaçlıdır sunucuda problem olduğunda verilir. Örnek olarak bazı durum kodları şunlardır:

| Durum Kodu | Açıklama                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| 102        | İsteğin alındığını ve işlemenin devam ettiğini belirtir. Bilgilendirme (1xx) amaçlıdır, nadiren kullanılır.  |
| 200        | İstek başarıyla gerçekleştirilmiştir. İstemciye istenen sonuç (varsa response body ile birlikte) döndürülür. |
| 301        | İstenen kaynağın yeri kalıcı olarak değişmiştir. Yeni adres `Location` header içinde istemciye bildirilir.   |
| 400        | İstek geçersizdir. Hatalı sözdizimi, bozuk veri veya eksik parametre nedeniyle sunucu isteği işleyemez.      |
| 404        | İstenen kaynak sunucu üzerinde bulunmamaktadır ya da sunucu bu bilginin paylaşılmasını istemiyordur.         |
| 503        | Sunucu geçici olarak hizmet verememektedir (bakım, aşırı yük vb.).                                           |

### HTTP Cevap Header Alanları

HTTP cevap mesajlarında isteğe bağlı olarak çeşitli başlıklar yer alabilir. Bu başlıklar, istemcinin gelen veriyi doğru şekilde işlemesini sağlar. Başlıklardan bazıları:

- **Server:** Sunucu yazılımı ve işletim sistemi bilgisi yer alır. Bu başlık zorunlu olmadığı için genelde HTTP cevap mesajında bulunmaz.
- **Last-Modified:** İstenilen kaynağın son değiştirilme zamanı bilgisidir.
- **Content-Length:** Gönderilen içeriğin byte cinsinden boyutu bilgisidir. Bu header kullanım amacı veri parça parça geldiğinde istemciye ‘Veri akmaya devam ediyor,cevap bitmedi.’ mesajını vermektir.
- **Set-Cookie:** Sunucu tarafından oluşturulan çerez(cookies) bilgisi
- **Content-Type:** Gönderilen verinin türü (ör. `text/html`, `application/json`)

### HTTP Body Bölümü

Header alanlarının ardından **body (gövde)** kısmı gelir. Eğer durum kodu başarılıysa (`200 OK`), body içerisinde istemci tarafından talep edilen içerik yer alır. Body içeriğinin formatı, header bölümünde belirtilen **Content-Type** bilgisine göre belirlenir.

Aşağıdaki görselde de istemcinin sunucudan dosyayı istemesi gelen kodlara göre istemcinin yeni isteklerde bulunması senaryosunu görüyoruz. Oklar üzerinde metodları, kenarlardaki açıklamada da senaryonun ilerleyişini görebiliriz.

![İstemci-Sunucu haberleşme örneği](../../img/server-client-tr.png)

## HTTP Trafiğinin İncelenmesi

HTTP trafiğini günlük kullanımda fark etmeyiz; ancak modern tarayıcılar bu trafiği incelememize olanak tanır. Tarayıcıda **F12** tuşuna basıldığında açılan geliştirici araçlarında **Network** sekmesi üzerinden tüm istek ve cevapları görmek mümkündür.

![Network sekmesi](../../img/network-tab.png)

Herhangi bir isteğin üzerine tıklandığında:

- Header bilgileri
- Cevap ön izlemesi (Preview)
- Body içeriği (Response)
- Zamanlama detayları (Timing)
- Çerez bilgileri (Cookies)
  gibi ayrıntılar görüntülenebilir.

![Network içeriği](../../img/network-tab-detail.png)

---

HTTP, çoğu zaman fark etmeden kullandığımız ama web dünyasını ayakta tutan temel protokoldür. Bir sayfanın açılması, bir API isteğinin çalışması ya da bir dosyanın indirilmesi; hepsi istemci ile sunucu arasında kurulan bu disiplinli iletişime dayanır. TCP’nin three-way handshake ile güvenli bir zemin hazırlaması, ardından HTTP’nin istek–cevap düzeniyle veri alışverişini yönetmesi, internetin kaotik değil aksine son derece kurallı bir yapı olduğunu gösterir.

HTTP mesaj yapısını, header’ları ve durum kodlarını anlamak; sadece teorik bilgi değildir. Performans sorunlarını analiz ederken, hata ayıklarken ya da güvenli ve ölçeklenebilir sistemler tasarlarken doğrudan sahada kullanılan bir zihinsel araçtır. Web’i gerçekten anlamak isteyen herkes için HTTP, öğrenilmesi değil içselleştirilmesi gereken bir temel taştır.

---

İnternet kavramlarının daha ayrıntılı açıklandığı yazılar için takipte kalın.

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- [HTTP Protokolü](https://umuttosun.com/http-protokolu/)
