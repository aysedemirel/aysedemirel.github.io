![internet](/img/tcp.png)

Önceki yazılarda bir cihazdan diğerine veri iletişiminin doğrudan gerçekleştiğini anlatmıştık. Ancak gerçek hayatta, internet trafiği daha karmaşıktır. Bunu, trafikle dolu bir yolda farklı güzergâh seçenekleri arasından en hızlısını tercih etmeye benzetebiliriz. İnternette veri, bitler halinde paketler şeklinde iletilir ve bu paketler varış noktasına en hızlı şekilde ulaşacak yolları seçer.

Paketlerin boyutu sınırlıdır. Büyük veriler tek bir pakette taşınamaz; güvenlik ve verimlilik sorunları ortaya çıkar. Bu nedenle veriler birden çok pakete bölünür. Her paketin içinde kaynak ve hedef IP adresleri bulunur. Böylece paketler farklı yolları izleseler veya farklı zamanlarda varış noktasına ulaşsalar bile, tüm paketler hedefe ulaştığında bilgi yeniden birleştirilir.

Veri trafiğini yöneten cihazlar **router** olarak adlandırılır Router’lar, ağ üzerindeki trafiği izler ve paketleri en uygun yollara yönlendirir. Her router birden çok yolun denetimini yapar. Gelen veriyi, kontrol ettiği yollardan hangisinden kolayca gidebileceğine göre yönlendirir.

> Birden fazla yol seçeneği olması, sistemi arızaya dayanıklı ve güvenilir kılar.

![internet](/img/ip-router.png)

## TCP (Transmission Control Protocol)

Verinin eksiksiz iletilip iletilmediğini kontrol etmek için **TCP** kullanılır. TCP, paketlerin sıralı ve eksiksiz biçimde gönderilip alındığından emin olur. Her paket alındığında bir onay mesajı geri gönderilir; eğer paket eksikse kaynak cihaz tekrar gönderim yapar. TCP onaylarsa işlem tamamlanır, değilse paketler tekrar tekrar gönderilir. Bu mekanizma sayesinde veri güvenli ve eksiksiz iletilir.

> TCP ve router’ların en önemli avantajı, **"ölçeklenebilir"** olmalarıdır.

Sistem küçük bir ağda da, milyonlarca cihazın bulunduğu büyük ağda da sorunsuz çalışır. Router’lar ve TCP sayesinde internet, **bağlantı (Connect)**, **iletişim (Communication)** ve **iş birliği (Collaborate)** ilkeleri çerçevesinde cihazları birbirine bağlar.

## HTTP ve Web Sayfası İletişimi

Bir web sitesine erişmek için tarayıcılar (Chrome, Firefox vb.) kullanılır. Tarayıcıya **URL (Uniform Resource Locator)** yazdığınızda, cihaz ile sunucu arasında **HTTP (HyperText Transfer Protocol)** kullanılarak iletişim kurulur. HTTP, cihazların sunuculardan doküman talep etmesi için kullanılan bir protokoldür.

İnternette iletişim kuran sunucu ve bilgisayar arasındaki kodlara bakılırsa çoğunluğu **"GET istekleri"**dir. "`GET istenilen-doküman-ismi`" gibi basit bir yapısı vardır. Örneğin giriş sayfasını açmak istediğimiz siteye "`GET /login`" isteğinde bulunulur.

Bir web sitesindeki içeriğin nasıl görüneceği temel olarak **HTML (HyperText Markup Language)** ile belirlenir. Harfler kalın mı italik mi, sağda mı solda mı gibi temel görünüşler HTML ile ayarlanır. Bir web sayfasının metni doğrudan HTML içerisinde yer alırken, görseller ve videolar başka bir URL'den gelir. Tarayıcı, görselleri ve videoları açmak için her biri için ayrı HTTP istekleri gönderir. İsteğe olumlu cevap geldiğinde gösterir.

> Bir web sayfasında görsel veya video ne kadar çoksa o kadar çok HTTP isteği olacak demektir. Bu da sayfanın yavaş yüklenmesine neden olur.

İnternette gezinirken sadece görüntüleme yapılmaz. Bazen form doldurulur, bazen arama yapılır. Bu tarz istekler için HTTP üzerinde **POST** talebi kullanılır. Örneğin kedi videosu ararken "`POST /search HTTP/1.1 Query=Kedi+Videosu`" talebi gider. Gelen sonuç olumlu ise ekrana video yansır.

Giriş sayfası örneğinden devam edersek, giriş sayfasında kullanıcı adı ve parola bilgileri girilip tamam denildiğinde POST isteği kullanıcı adı ve parola ile sunucuya gider. Eğer sunucu bu bilgileri doğrularsa kullanıcıya özel sayfa açılır. Bağlantı sonrası sunucu web sayfasına **çerez (cookie)** verileri gönderir. Bu veriler, web sayfasının sizin kim olduğunuzu hatırlaması için gereklidir. Web sayfası bu veriyi saklar ve sayfayı yenilediğinizde giriş yapmış olarak sayfa açılır. Eğer bu veri saklanmasaydı her sayfayı yenilediğinde giriş yapmak zorunda kalırdık. Çerez veriler bir nevi web sayfası için kimlik kartıdır.

## Güvenlik: SSL, TLS ve HTTPS

İnternet iletişimi herkes tarafından erişilebilir ve varsayılan olarak düz metin halinde gerçekleşir. Bu durum, **bilgilerin ele geçirilmesi amaçlı gözetleme (snooping)** veya **onay olmadan değişiklik (tampering)** gibi riskleri doğurur.

Güvenilir web siteleri bu tehlikelerin önüne geçmek için **SSL (Secure Sockets Layer)** ve **TLS (Transport Layer Security)** kullanarak güvenli kanalda iletişim kurmayı sağlar. İletişiminizin gözetlenmesini veya izniniz olmadan değiştirilmesini istemediğiniz için önleyici katmanlar olarak SSL ve TLS katmanlarını düşünülebilirsiniz.Tarayıcıda URL’nin başında **HTTPS ve kilit simgesi** gördüğünüzde, veri bu protokollerle korunuyordur. **HTTPS(HyperText Transfer Protocol Secure)**, HTTP taleplerinin güvenli ve korunduğundan emin olan protokoldür.

Web sitesi güvenilir bir bağlantı oluşturmak için tarayıcıya **"Dijital Sertifika"** sunar. Bu sertifika, iddia ettiği web sitesi olduğunu kanıtlayan resmi bir kimlik kartı gibidir. Bu sertifikalar, sertifika otoriteleri tarafından yayınlanır. Eğer bir web sitesinin sertifikası yoksa ve güvenilir bağlantıya geçmeye çalışırsa tarayıcı sizi uyarır.

## İnternet 101 Serisinin Özeti

İnternet 101 serisini özetlersek, şu ana kadar öğrendiklerimiz temel olarak şöyleydi:

- **HTTP & DNS** → Veri iletimini sağlar
- **TCP/IP & Routing** → Hedefin belirlenmesini ve paketlerin doğru şekilde yönlendirilmesini sağlar
- **Kablolar, Ağlar & Wi-Fi** → Tüm iletişim için fiziksel altyapıyı sağlar

Tüm bu bileşenler bir araya geldiğinde **internet**in çalışmasını mümkün kılar.

---

Bu yazıda internet üzerindeki verinin iletimini, protokolleri ve güvenlik mekanizmalarını inceledik. İnternetin işleyişine dair daha fazla kavramı anlamak istiyorsanız, serinin devam yazılarını takip edebilirsiniz.

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- https://roadmap.sh/guides/what-is-internet
- https://medium.com/hackernoon/tcp-three-way-handshake-4161eb8aba32
- http://ithare.com/packet-loss-for-an-app-level-developer-part-i-router-failures-bgp-convergence-time-aqm-traffic-shapers/
