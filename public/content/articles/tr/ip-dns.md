![internet](/img/internet2.png)

İnternet üzerinde çalışan her cihazın, ağ üzerinde onu tanımlayan benzersiz bir adresi bulunur. Bu adresler, cihazların kimliği niteliğindedir ve iletişimin doğru hedefe yönlendirilmesini sağlar.

Bunu, gerçek dünyada bir adrese gitmeye benzetebiliriz: Gideceğiniz yerin adını tam olarak bilmeseniz bile, adres bilgisi ve haritalar yardımıyla oraya ulaşabilirsiniz. İnternetteki adresleme sistemi de benzer şekilde çalışır; verinin hedef cihaza ulaşmasını sağlayan şey bu adreslerdir.

## IP Nedir?

İnternet üzerindeki veri iletişimi, belirli kurallar ve protokoller çerçevesinde gerçekleşir. Bu protokollerden en temeli **IP (Internet Protocol)** — yani İnternet Protokolüdür. İnternete bağlanan her cihazın, bu protokol tarafından belirlenen bir **IP adresi** vardır. Basit bir örnekle açıklayalım:

Google’da bir arama yaptığınızda, başka bir bilgisayardan bilgi talep etmiş olursunuz. Bu bilgiler tek bir sunucuda değil, dünyanın farklı yerlerindeki binlerce sunucuda depolanır. Sunucular, evdeki bilgisayarlarımızın çok daha güçlü versiyonları olarak düşünülebilir. Arama yaptığınızda, bu sunucular size en uygun sonuçları döndürmek için çalışır.

Bir cihazdan diğerine veri gönderilebilmesi için hedef cihazın **IP adresi** bilinmelidir. Aynı şekilde, kaynak cihaz da kendi IP adresini gönderir ki karşı taraf yanıtın nereye iletileceğini bilsin. Aynı zamanda gönderilen IP adresine bakarak güvenilirliği de ölçer. Bu sistem, hem yönlendirme hem de güvenlik açısından kritik bir mekanizmadır.

## IP Adresi

Bir IP adresi sayılardan oluşur ve bu sayılar bit’lere dönüştürülür. Klasik IP adresleri 32 bit uzunluğundadır. Örneğin `"175.128.15.121"` adresinde noktalarla ayrılmış her bir bölüm için 8 bit dönüşümü yapılır ve `"10101111 10000000 00001111 01111001"` ifadesine dönüşür.

IP adreste baştaki sayılar genellikle cihazın ülke ve bölge ağlarını belirtir. Ardından alt ağlar ve son olarak o cihazın adresi gelir. Bu IP adres verme biçimine **IPv4** denir ve 1973'te tasarlanmıştır. Noktalarla ayrılmış 4 bölümden oluşur ve her bölüm [0–255] aralığındadır.

IPv4 adresleme sistemi 4 milyar cihaz için benzersiz adres sağlar. Ancak günümüzde 4 milyardan fazla internete bağlanan cihaz bulunmaktadır. Bu nedenle daha uzun bir format sağlayan **IPv6** formatına ihtiyaç duyulmuştur. IPv4 ile 32 bit uzunluk sağlanırken IPv6 ile 128 bit uzunluk sağlanır. Bu uzunluk artışı, 4 milyar cihaza yetecek kadar olan IP adres sayısını, dünyadaki kum taneciklerine yetecek kadar IP adres sayısına çıkarmıştır.

## IP Adresimizi Nasıl Buluruz?

“https://medium.com/@aysedemirel” adresi benim medium üzerindeki fiziksel adresim. Bu adrese başvurarak profilimi barındıran sunucudan yazılarıma ulaşabiliyorsunuz. Bu hali hatırlanabilir, insan dostu hali. Sayılardan oluşan IP adresi hatırlamak zor olduğu için sonradan işleri kolaylaştırma amaçlı geliştirilen bir sistem. Gerçekte bu sitenin IP adresi "162.159.153.4" şeklindedir. (Bu adres, Medium’un ABD’deki veri merkezlerinden birini gösterir)

Windows işletim sisteminde kendi IP adresinizi görmek için şu adımları izleyebilirsiniz:

- **Windows + R** tuşlarına basın ve Çalıştır penceresini açın.

- “`cmd`” yazarak Komut İstemini açın.

- Komut satırına `ipconfig` yazın.

- Sonuçlarda “IPv4 Address” veya “IPv6 Address” satırında cihazınıza atanmış IP adresini görebilirsiniz.

## Dynamic Host Configuration Protocol (DHCP)

IP adresleri genellikle kullanıcı tarafından manuel olarak atanmaz. Bu görevi **DHCP (Dynamic Host Configuration Protocol)** üstlenir.

DHCP sunucuları, internete bağlanan cihazlara otomatik olarak benzersiz IP adresleri atar. Bu süreç kullanıcı müdahalesi olmadan gerçekleşir.
Atanan IP adresi, tıpkı kimlik numarası gibi, cihazın o anda ağ üzerindeki tanımlayıcısıdır.

## Domain Name System (DNS)

Peki hiç IP adresi girmeden internette dolaşabiliyorsak, bu nasıl mümkün oluyor?
Cevap **DNS (Domain Name System)**, yani Alan Adı Sistemidir. DNS, hatırlanması zor IP adreslerini, insanlar için anlamlı alan adlarına dönüştürür.

Örneğin, Google’a ulaşmak için “`216.58.214.132`” yazmak yerine sadece www.google.com
yazmamız yeterlidir. Süreci adım adım inceleyelim:

1. Tarayıcıya www.google.com yazdık ve isteği gönderdik.

> İsteğimiz içerisine kendi IP adresimiz de ekleniyor. Böylelikle veriye ulaşıldığında nereye dönmesi gerektiği biliniyor. Eğer IP adresimiz eklenmemiş olursa istenilen adrese isteğimiz ulaşır ama bize yanıt dönemez. İnternet ortamı düzenli bir kaos ortamıdır. Eğer aranılan ve dönülecek adres belliyse sistem aksamadan işler. Değilse kaos ortamında kaybolur gider.

2. İsteğimiz önce DNS sunucusuna gider. "www.google.com" alan adı için IP adresi bulunur. Alan adı ve aradığımız adres eşleşir.

3. Tarayıcı, bulunan IP adresine isteği yönlendirir.

4. Sunucu, yanıt paketini oluşturur ve istekte belirtilen IP adresine geri gönderir.

5. Tarayıcı gelen veriyi işler ve Google ana sayfası ekranda görüntülenir.

Bu sistem sayesinde internet “düzenli bir kaos” içinde bile tutarlı biçimde çalışabilir; çünkü her isteğin hedefi ve dönüş adresi bellidir.

## Dağıtık Hiyerarşi

Tüm web sitelerine giriş için alan adlarını kullandığımızı düşünürsek, tek bir DNS sunucusu olması imkansız gibi değil mi? Eğer bir tane sunucu olsaydı büyük ihtimalle bir yere ulaşmak günler sürebilirdi. Birden çok DNS sunucusu varsa isteğimiz hangisine gideceğini nasıl biliyor?

İnternetin genel mimarisi olan **"Dağıtık Hiyerarşi"**, DNS sunucularının mimarisinde de karşımıza çıkıyor. DNS sunucuları bölgelere ayrılıp ".org, .com, .net" gibi ana alanların sorumluluğunu alıyor. İsteğimizdeki alan adları da sunucuların bu sorumluluklarına göre yönlendiriliyor.

## DNS Spoofing

DNS sisteminin herkese açık olması, bazı güvenlik açıklarını da beraberinde getirir. **DNS Spoofing (DNS zehirlenmesi)**, bu açıkların en bilinen örneklerinden biridir.
Bu saldırıda kötü niyetli kişiler, DNS kayıtlarını manipüle ederek alan adını yanlış bir IP adresiyle eşleştirir. Kullanıcı, örneğin www.google.com adresine girdiğini düşünürken, aslında sahte bir siteye yönlendirilir.
Bu yöntem genellikle kimlik avı (phishing) saldırılarında veya veri hırsızlığında kullanılır.

---

Bu yazıda IP ve DNS kavramlarını teknik yönleriyle ele aldık. İnternetin işleyişine dair daha fazla kavramı anlamak istiyorsanız, serinin devam yazılarını takip edebilirsiniz.

Sonraki yazılarda görüşmek üzere 👋
