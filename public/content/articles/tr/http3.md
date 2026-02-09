![HTTP/3](/img/http3.png)

İnternet protokollerinde yenilik yaparken, sıkça “Yumurta mı tavuktan, tavuk mu yumurtadan?” olarak bilinen klasik problemle karşılaşılınır. Bu bağlamda sorun şudur: Yeni bir protokolün benimsenmesi için sunucu mu önce destek vermelidir, yoksa istemci mi?

İstemci ve sunucu arasındaki iletişim, iki tarafın da aynı protokolü desteklemesini gerektirir. Taraflardan yalnızca birinin yeni bir protokole geçmesi, iletişimin kurulması için yeterli değildir. Bu nedenle protokol düzeyindeki yenilikler, tek taraflı değil; istemci ve sunucu ekosisteminin birlikte hareket etmesini gerektirir. HTTP/3’ün ortaya çıkışı ve yaygınlaşması da bu eşgüdüm ihtiyacının somut bir örneğidir.

## HTTP/3 Neler Getirdi?

HTTP/3, **taşıma (transport) katmanında TCP yerine QUIC (Quick UDP Internet Connections)** protokolünü kullanır. QUIC, UDP üzerinde çalışan modern bir taşıma protokolüdür ve akışları (stream) taşıma katmanında birinci sınıf bir kavram olarak ele alır.

QUIC’te birden fazla stream, tek bir QUIC bağlantısı üzerinden eşzamanlı olarak taşınabilir. Yeni bir stream oluşturmak için ek bir bağlantı kurulmasına veya yeni bir handshake sürecine ihtiyaç duyulmaz. Ayrıca TCP’de görülen “slow start” mekanizması her stream için tekrar uygulanmaz. En önemli farklardan biri, stream’lerin birbirinden bağımsız çalışmasıdır. Bir stream üzerinde yaşanan paket kaybı, diğer stream’leri etkilemez.

Bu yapı, QUIC paketlerinin UDP datagramları içine kapsüllenmesi (encapsulation) ile mümkün olur. Başka bir ifadeyle **QUIC; TCP, TLS ve HTTP/2’nin sunduğu işlevleri UDP üzerinde daha bütünleşik ve modern bir şekilde yeniden inşa eder**.

## Head-of-Line Blocking Probleminin Çözümü

![HTTP 2 ve HTTP 3 protocol farkı](../../img/http3/http2-http3.png)

HTTP/2, uygulama katmanında çoklu akış (multiplexing) desteği sunsa da, TCP kullanımı nedeniyle taşıma katmanında head-of-line blocking probleminden tam olarak kaçınamaz. TCP’de bir paket kaybı yaşandığında, sonraki tüm paketler sıraya girer ve bu durum tüm stream’leri etkiler.

QUIC ise bu problemi taşıma katmanında çözer. Her stream bağımsız olarak ele alındığı için, bir stream’in tıkanması diğerlerini durdurmaz. HTTP/3, HTTP/2’nin çoklu akış avantajlarını QUIC üzerinden sunarak, head-of-line blocking sorununu ortadan kaldırır.

![TCP ile HTTP 2 ulaşım (head-of-line blocking sorunu var)](../../img/http3/http2-tcp.png)

![QUIC ile HTTP 3 ulaşım (head-of-line blocking sorunu yok)](../../img/http3/http3-quic.png)

## Daha Hızlı ve Güvenli Bağlantı Kurulumu

QUIC, TCP’de kullanılan üç aşamalı el sıkışma (3-way handshake) ile TLS 1.3 el sıkışma sürecini birleştirir. Bunun sonucu olarak **şifreleme ve kimlik doğrulama varsayılan hâle gelir ve bağlantı kurulumu daha kısa sürede tamamlanır**.

Yeni bir HTTP oturumu başlatıldığında, ilk istek için gereken gecikme süresi, TLS kullanan klasik TCP bağlantılarına kıyasla daha düşüktür. Özellikle gecikmeye duyarlı uygulamalar için bu fark önemli bir kazanım sağlar.

![QUIC üzerinden HTTP isteği](../../img/http3/quic.png)

## Header Sıkıştırma: QPACK

QUIC, tek bir stream içinde baytların sıralı teslimini garanti eder; ancak farklı stream’ler arasında böyle bir zorunluluk yoktur. HTTP/2’de kullanılan HPACK header sıkıştırma mekanizması, sıralı teslim varsayımına dayanır. Bu nedenle HPACK, QUIC ile her senaryoda uyumlu değildir.

Bu problemi çözmek için HTTP/3 ile birlikte **QPACK** adlı yeni bir header sıkıştırma mekanizması tanıtıldı. QPACK, HTTP/3’ün stream tabanlı ve sırasız yapısına uygun şekilde tasarlanmıştır.

## QUIC Uygulamaları ve Kütüphaneler

![Quiche kütüphanesi](../../img/http3/quiche.png)

QUIC’in pratikte nasıl uygulandığını incelemek isteyenler için Cloudflare tarafından geliştirilen [quiche](https://github.com/cloudflare/quiche) kütüphanesi iyi bir referans noktasıdır. QUIC ve HTTP/3 ekosistemine ait farklı uygulamaların listesi:

| İsmi     | İstemci/Sunucu | Programlama Dili | Şirket     | Depo                                                                                                                   |
| -------- | -------------- | ---------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| aioquic  | Both           | Python           |            | [https://github.com/aiortc/aioquic](https://github.com/aiortc/aioquic)                                                 |
| Cronet   | Both           | C++              | Google     | [https://github.com/chromium/chromium/tree/master/net/quic](https://github.com/chromium/chromium/tree/master/net/quic) |
| Flupke   | Client         | Java             |            | [https://bitbucket.org/pjtr/flupke](https://bitbucket.org/pjtr/flupke)                                                 |
| h2o      | Server         | C                |            | [https://github.com/h2o/h2o](https://github.com/h2o/h2o)                                                               |
| http3    | Both           | Haskell          |            | [https://github.com/kazu-yamamoto/http3](https://github.com/kazu-yamamoto/http3)                                       |
| libcurl  | Client         | C                |            | [https://github.com/curl/curl](https://github.com/curl/curl)                                                           |
| lsquic   | Both           | C                | LiteSpeed  | [https://github.com/litespeedtech/lsquic](https://github.com/litespeedtech/lsquic)                                     |
| MsQuic   | Both           | C                | Microsoft  | [https://github.com/microsoft/msquic](https://github.com/microsoft/msquic)                                             |
| neqo     | Both           | Rust             | Mozilla    | [https://github.com/mozilla/neqo](https://github.com/mozilla/neqo)                                                     |
| nghttp3  | Partial        | C                |            | [https://github.com/ngtcp2/nghttp3](https://github.com/ngtcp2/nghttp3)                                                 |
| proxygen | Server         | C++              | Facebook   | [https://github.com/facebook/proxygen#quic-and-http3](https://github.com/facebook/proxygen#quic-and-http3)             |
| quic-go  | Both           | Go               |            | [https://github.com/lucas-clemente/quic-go](https://github.com/lucas-clemente/quic-go)                                 |
| quiche   | Both           | Rust             | Cloudflare | [https://github.com/cloudflare/quiche](https://github.com/cloudflare/quiche)                                           |
| quinn    | Both           | Rust             |            | [https://github.com/quinn-rs/quinn](https://github.com/quinn-rs/quinn)                                                 |

HTTP/3 için daha fazla uygulama görmek için kontrol edin: [Implementations](https://github.com/quicwg/base-drafts/wiki/Implementations)

## HTTP/3 ile Gelen Yenilikler

HTTP/3’ün öne çıkan yenilikleri şu şekilde özetlenebilir:

- Bağlantı kurulumu sırasında oluşan gecikmeler azaltılmıştır.
- Birden fazla bağımsız akış sayesinde head-of-line blocking problemi ortadan kaldırılmıştır.
- TLS 1.3 zorunlu hâle getirilerek yalnızca güvenli veri iletimi desteklenmiştir.
- Bağlantı geçişi (connection migration) desteklenir. İstemcinin IP adresi değişse bile, 64 bitlik bağlantı kimliği sayesinde mevcut bağlantı kesintiye uğramadan devam edebilir. Bu özellik özellikle mobil cihazlarda Wi-Fi ve hücresel ağ geçişlerinde önemli bir avantaj sağlar.
- Sıfır gidiş–dönüş süresi (0-RTT) ile yeniden başlatma desteği sunar. Handshake süreci tamamlanmadan HTTP isteklerinin gönderilmesine izin verilir. (Cloudflare sitesinde henüz QUIC için hazırlanmadığı ama çalışma yapıldığı yazıyor)

## HTTP/3 Nasıl Etkinleştirilir?

HTTP/3’ü etkinleştirme süreci, kullanılan CDN veya sunucu altyapısına göre değişiklik gösterebilir. Örneğin Cloudflare kullananlar, ilgili dokümantasyonda yer alan “[How do I enable HTTP/3 for my domain?](https://blog.cloudflare.com/http3-the-past-present-and-future/)” başlığını inceleyerek gerekli adımları takip edebilir.

---

İnternet kavramlarının daha ayrıntılı açıklandığı yazılar için takipte kalın.

Sonraki yazılarda görüşmek üzere 👋

**Kaynaklar:**

- [HTTP/3: the past, the present, and the future](https://blog.cloudflare.com/http3-the-past-present-and-future/)
- [The Road to QUIC](https://blog.cloudflare.com/the-road-to-quic/)
- [Enjoy a slice of QUIC, and Rust!](https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/)
- [Github quiche](https://github.com/cloudflare/quiche)
- [MULTIPLEXED STREAM TRANSPORT OVER UDP](https://docs.google.com/document/d/1RNHkx_VvKWyWg6Lr8SZ-saqsQx7rFV-ev2jRFUoVD34/edit)
- [HTTP’nin yeni hali: HTTP/3](https://medium.com/@gktnkrdg/httpnin-yeni-hali-http-3-e658c45c8420)
- [HTTP/3 RFC](https://tools.ietf.org/html/draft-ietf-quic-http-33)
