![internet](/img/ip.png)

Bir web sitesinin alan adını biliyor, ancak IP adresini öğrenmek istiyorsanız, bunu komut satırı üzerinden kolayca yapabilirsiniz. Komut satırını açmak için **"Windows+R"** tuşlarına basarak veya arama çubuğuna **"Çalıştır"** yazarak başlayabilirsiniz. Gelen pencereye "`cmd`" yazın. Ardından _Enter_ tuşuna basarak komut satırını başlatın.

![internet](/img/how-to-find-ip/1.png)

Çalıştır penceresine `cmd` yazıyoruz. Komut satırını açmanın kısa yolu.

![internet](/img/how-to-find-ip/2.png)

Komut satırı (Command line)

## `nslookup` Komutu ile IP Adresi Sorgulama

Bir web sitesinin IP adresini öğrenmek için `nslookup` komutunu kullanabilirsiniz. Örneğin, Google’ın IP adresini bulmak için komut satırına şu komutu yazın:

```
nslookup www.google.com
```

Enter’a bastığınızda, bağlı olduğunuz Google sunucusunun IP adresi görüntülenecektir.

![internet](/img/how-to-find-ip/3.png)

Çıktının ilk kısmında **“Server”** satırında bilgisayarınızın bağlı olduğu DNS sunucusunun adresi yer alır. Komut satırında "`ipconfig`" yazarak bu bilgilerin doğruluğunu teyit edebilirsiniz.

**"Name"** ve **"Addresses"** kısımlarında ise IP adresini talep ettiğiniz sitenin (örneğin _google.com_) bilgileri yer alır. İsim ve adres bilgilerini burada eşleştirebilirsiniz. Bende gelen sonuçta **"172.217.169.196"** adresi görünüyor. Peki bu adres gerçekten doğru mu?

## `ping` Komutu ile Bağlantı Kontrolü

Bulunan IP adresiyle bağlantının gerçekten var olup olmadığını kontrol etmek için komut satırında "`ping 172.217.169.196`" yazarak bağlantıya cevap gelip gelmediğine bakalım.

![internet](/img/how-to-find-ip/4.png)

Bulduğum IP adresine ping komutu gönderiyorum

Eğer yanıt alıyorsanız, bağlantı başarılı demektir. Şimdi tarayıcınızı açın ve adres çubuğuna bu IP adresini yazın. Alan adı yerine doğrudan IP ile erişim sağlayabilirsiniz.

![internet](/img/how-to-find-ip/5.png)

Adres çubuğuna IP adresini yazıyorum

![internet](/img/how-to-find-ip/6.png)

Adres Google'a ait olduğu için yönlendirme başarıyla gerçekleşiyor

## Özet: Kullanılan Komutlar

- `ipconfig` - Bilgisayarın ağ yapılandırma bilgilerini görüntüler
- `nslookup <alan adı>` - Bir alan adının IP adresini sorgular
- `ping <ip adresi>` - Belirtilen IP adresine bağlantı testi yapar

Kısacası, herhangi bir web sitesinin URL’sini biliyorsanız, `nslookup` komutuyla IP adresini bulabilir, ardından `ping` komutuyla bağlantıyı doğrulayabilirsiniz.

---

Bu yazıda bir websitesinin IP adresini nasıl bulunur konusunu işledik. İnternetin teknik altyapısı daha derinlemesine anlamak istiyorsanız, serinin devam yazılarını takip edebilirsiniz.

Sonraki yazılarda görüşmek üzere 👋

**_Daha fazla bilgi için şu yazıya göz atabilirsiniz:_**

- [İnternet 101: IP ve DNS Nedir, Nasıl Çalışır?](https://aysedemirel.github.io/#/article/ip-dns)
