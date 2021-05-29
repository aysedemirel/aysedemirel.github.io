# JAVASCRIPT BAŞLANGIÇ

Javascript öğrenmek için hazır mıyız ? Evet,evet,evet!!! O zaman başlayalım...

Bu yazımızda değişken atamaları ve küçük örnekler ile başlıyoruz yolculuğa. Güzel örnekler yazıdan daha çok şey anlatır diye düşünürüm hep. Öğrenme sürecimiz devam ettikçe örnek sayılarımızda gittikçe çoğalacak.

- Öncelikle yorum cümlesi yazarken iki tip yorum yazabiliyoruz:

``// yorum tipi 1``

``/* yorum tipi 2*/``

- Değişken tanımlamadan önce **data tipleri** aşağıdakiler:

  - undefined
  - null
  - boolean
  - string
  - symbol
  - bigint
  - number
  - object

- String tanımlaması yaparken istersek çift tırnak(") istersek de tek tırnak kullanabiliriz ('). Başı ve sonu aynı olsun yeter.

  ``var isim = "ayse";``

  ``var isim = 'ayse';``

JavaScript'te değişken tipi yok. Belli değişken atama ifadeleri var onlar kullanılıyor, değişkene değer atadığınızda da o tipe eşleniyor. Yani nasıl dediğinizi duyar gibiyim. Özellikle Java,C,C++'dan sonra çok garip geliyor belirli değişken tipinin olmayışı. Unutmamakta fayda var değer atanmadığında da "undefined" oluyor değişkenimiz. 

Değişken belirlemek için neler kullanıyoruz o zaman:  *var, let, const*

**VAR:** Değişken tanımlaması yapılırken *function scope(fonksiyon skopunda)* olmasını istiyorsak kullanabiliriz. Tanımlama yaptık değişkene değer atamadıysak *undefined* olarak değer tutuyor. Değer atamadan değişken atadıysak *variable declaration(değişken tanımlama)*, değer atadıysak da *variable initialization(değişken değer atama)* diyoruz. 

``var isim="Ayse";`` -> Direkt değer atayabiliriz

``var soyIsim;`` -> Değer olmadan undefined tanımlayabiliriz.

``soyIsim=isim;`` -> Değer ataması yapmadığımız değişkene sonradan değer atayabiliriz. Değişkenimiz String tipinde oldu artık.

**LET:** Değişken tanımlarken *block scope(blok skopunda)* tanımlamak istiyorsak kullanabiliriz. Yani tanımladığımız süslü parantezler içinde geçerli bu arkadaşlar. Dışına çıktığımız an öyle bir şey yok.

``let num=5;`` -> Tanımlamayı değer vererek ya da vermeyerek yapabiliriz. 

var ile let farkını aşağıdaki örnekte net bir şekilde görebiliriz. Örnekteki kodlarda değişken değerlerini görebilmek için console.log() kullanacağız. Print edeceğiz yani başka bir işlevi yok konsola basıyor (Örneğin Java'daki System.out.print() ile aynı). 

```javascript
function farklariGorelim()
{
	{
		var ornek="Değişkenimiz doğdu."
		console.log(ornek);
	}
	console.log(ornek);
}
```

Çalıştırdığımızda sonuç:

``` 
Değişkenimiz doğdu.
Değişkenimiz doğdu.
```

İki defa aynı sonucu aldık çünkü var değişkeni function scope olduğu için fonksiyon içinde yaşamaya devam etti. Eğer başka fonksiyondan çağırsak hata alırdık. Fonskiyonun içinde açtığımız ekstra {} ile blok oluşturmak için.

```javascript
function letIleCosmaca()
{
	{
		let ornek="Değişkenimiz let ile doğdu."
		console.log(let);
	}
	console.log(let);
}
```

Yukarıdaki örnekte blok içinde let ile tanımladık veeee hata aldık. Neden ? Çünkü let ile tanımlanan blok içinde yaşar. Blok dışına çıktığımız zaman artık kaybolmuştur. 

**CONST:** Sabit değer ataması yapmak için kullanılır, sonradan farklı tiplerde atama yapılmaz. İçindeki değer değişebilir ama. 

``const isim = "Mustafa" `` -> Const ile atamamızı yaptık.

``isim="Ayse"`` -> Bu şekilde aynı değişken tipindeki farklı bir değer ile değiştirebiliriz.

``isim={}`` -> Bunu yapamayız tekrardan atama yapılmaz. 



Şimdilik değişken atamalarımız yaptık, bir sonraki yazımızda diziler(array) ve fonksiyonlar ile devam edeceğiz. Sonraki yazıya aşağıdaki bağlantıdan ulaşabilirsiniz:

[YAZI LİNKİ EKLENECEK]()

Burada kullandığımız kod örneklerine ve daha fazlasına aşağıdaki Github projemden erişebilirsiniz:

[GITHUB LINKI EKLENECEK]() 



