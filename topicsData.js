const topicsData = [
    {
        id: "1-ozel-gorecelilik",
        cat: "relativity",
        icon: "⚡",
        title: "1. Özel Görelilik ve Lorentz Dönüşümleri",
        desc: "Einstein'ın uzay ve zamanı birleştiren temel özel görelilik ilkeleri.",
        subitems: [
            { subtitle: "Işık Hızının Mutlak Sabitliği İlkesi", text: "Evrenin neresinde olunursa olunsun ve gözlemcinin hareket durumu ne kadar değişirse değişsin, boşluktaki ışık hızının tüm eylemsiz referans sistemlerinde evrensel ve değişmez bir sabit olduğunu ortaya koyan temel postülattır." },
            { subtitle: "Eylemsiz Referans Sistemlerinin Eşdeğerliği", text: "Üzerlerine etki eden net bir dış kuvvet bulunmayan, sabit hızla hareket eden ya da duran tüm gözlemciler için mekanik ve fizik yasalarının tamamen aynı biçimde geçerli olduğunu savunan temel fizik kuralıdır." },
            { subtitle: "Zaman Genişlemesi ve Dilarasyon", text: "Işık hızına yakın hızlarda hareket eden bir nesnenin veya gözlemcinin zamanının, durgun referans sistemindeki bir gözlemciye kıyasla çok daha yavaş akmasını ve esnemesini sağlayan göreli zaman etkisidir." },
            { subtitle: "Uzunluk Kısalması (Lorentz-Fitzgerald)", text: "Yüksek hızlarla hareket eden cisimlerin, hareket yönü boyunca uzay dokusu üzerinde sıkışarak orijinal boyutlarına kıyasla fiziksel olarak kısalması ve büzülmesi olgusudur." },
            { subtitle: "Eşzamanlılığın Göreliliği Kavramı", text: "Birbirine göre hareketli olan farklı gözlemciler için aynı anda gerçekleştiği düşünülen iki ayrı olayın, referans sistemlerinin konumuna bağlı olarak farklı zamanlarda algılanması durumudur." },
            { subtitle: "Lorentz Dönüşüm Matrisleri", text: "Newton mekaniğinin yetersiz kaldığı ışık hızı sınırlarındaki durumlarda, uzay ve zaman koordinatlarını bir sistemden diğerine hatasız bir şekilde dönüştüren matematiksel denklemlerdir." },
            { subtitle: "Göreceli Hız Toplama Yasası", text: "Klasik fizik hız toplama kurallarının ışık sınırına yaklaşırken geçersizleştiğini gösteren ve hızların asla c sınırını geçemeyeceğini matematiksel olarak garanti eden formülasyondur." },
            { subtitle: "Müon Bozunma Deneyleri", text: "Atmosferin üst katmanlarında oluşan kısa ömürlü müon parçacıklarının zaman genleşmesi sayesinde ışık hızına yakın hızla yeryüzüne kadar bozulmadan ulaşabilmesiyle göreliliği kanıtlamasıdır." },
            { subtitle: "Dört Boyutlu Minkowski Uzayı", text: "Üç boyutlu uzay koordinatları ile zaman ekseninin tek bir çatı altında birleştirilerek olayların geometrisinin pürüzsüz biçimde incelendiği uzay-zaman sürekliliğidir." },
            { subtitle: "Doğrusal Momentumun Hızla Artışı", text: "Bir cisme hız kazandırmak için uygulanan enerjinin bir kısmının kütle artışına benzer etkiler yaratarak cismi ışık hızına ulaştırmayı imkansız kılan dinamik sınırdır." }
        ]
    },
    {
        id: "2-kutle-enerji-esdegerliligi",
        cat: "relativity",
        icon: "💥",
        title: "2. Kütle ve Enerji Eşdeğerliği",
        desc: "Evrenin en ünlü denklemi olan kütle ile enerjinin dönüşüm prensibi.",
        subitems: [
            { subtitle: "Eşsiz Formülün Doğuşu (E=mc^2)", text: "Albert Einstein'ın özel görelilik teorisinden türettiği, kütle ile enerjinin aslında aynı fiziksel büyüklüğün iki farklı yüzü olduğunu ve birbirine tam olarak dönüşebileceğini gösteren denklemdir." },
            { subtitle: "Durgun Kütle Enerjisi Kavramı", text: "Hiçbir hareket etmeyen ve dışarıdan hiçbir kinetik enerji almayan bir cismin bile bünyesinde barındırdığı kütlesi sayesinde milyarlarca junluk devasa bir potansiyel enerji taşıdığını ifade eder." },
            { subtitle: "Nükleer Füzyon Süreçlerinin Temeli", text: "Güneş'in ve yıldızların merkezinde hidrojen atomlarının birleşerek helyuma dönüşmesi sırasında kaybolan küçük kütle miktarının devasa ışık enerjilerine dönüşüm mekanizmasıdır." },
            { subtitle: "Nükleer Fisyon ve Kütle Defekti", text: "Ağır radyoaktif elementlerin çekirdeklerinin bölünmesi sırasında açığa çıkan enerjinin, giren ve çıkan maddelerin kütleleri arasındaki hassas farktan (defekt) kaynaklandığını açıklar." },
            { subtitle: "Parçacık-Antiparçacık Yok Oluşu", text: "Bir elektron ile bir pozitron gibi madde ve antimadde çiftlerinin birbirleriyle karşılaşarak kütlelerini tamamen yüksek enerjili fotonlara dönüştürme olaydır." },
            { subtitle: "Kimyasal Bağ Enerjisi Katkısı", text: "Maddelerin kimyasal tepkimeler sırasında ısı yayarak bağ kurması veya koparması sürecinde kütlelerinde ölçülebilir ancak çok minik değişimler meydana geldiğini gösterir." },
            { subtitle: "Parçacık Hızlandırıcı Üretimleri", text: "CERN gibi devasa laboratuvarlarda ışık hızına yakın hızla çarpıştırılan protonların kinetik enerjilerinin yeni ve ağır temel parçacıklara dönüşmesini sağlar." },
            { subtitle: "Kozmik Işınların Etkileşimi", text: "Uzayın derinliklerinden gelen yüksek enerjili kozmik ışınların dünya atmosferindeki atom çekirdekleriyle çarpışarak saf enerjiden yeni maddeler yaratması sürecidir." },
            { subtitle: "Kütle Çekim Alanı Enerjisi", text: "Yoğun kütle çekim alanlarına sahip cisimlerin çevresinde biriken alan enerjisinin de genel görelilik ilkeleri gereğince sisteme kütlesel katkı sağladığını belirtir." },
            { subtitle: "Evrensel Enerji Korunumu", text: "Evrendeki toplam kütle ve enerji miktarının sabit olduğunu, sadece form değiştirdiğini ve hiçbir koşulda yoktan var veya var olanın yok edilemeyeceğini kanıtlar." }
        ]
    },
    {
        id: "3-genel-gorecelilik",
        cat: "relativity",
        icon: "🌐",
        title: "3. Genel Görelilik ve Çekim Geometrisi",
        desc: "Kütle çekimini bir kuvvet değil, uzay-zamanın bükülmesi olarak açıklayan teori.",
        subitems: [
            { subtitle: "Eşdeğerlik Prensibi Temeli", text: "Kapalı bir kabin içerisindeki bir gözlemcinin, yaşadığı yer çekimi ivmesi ile yukarı doğru hızlanan bir roketin yarattığı eylemsizlik kuvvetini birbirinden asla ayırt edemeyeceği ilkesidir." },
            { subtitle: "Uzay-Zaman Dokusunun Eğriliği", text: "Gezegenler, yıldızlar ve devasa kütleli tüm cisimlerin dört boyutlu uzay-zaman dokusunu ağırlıkları oranında esneterek bir çöküntü ve eğrilik yarattığını ifade eder." },
            { subtitle: "Jeodezik Yörünge Hareketleri", text: "Bükülmüş uzay-zaman dokusu üzerinde hareket eden gezegenlerin ve ışık ışınlarının, aslında hiçbir dış çekim kuvvetine maruz kalmadan en kısa yol olan jeodezik eğrileri izlemesidir." },
            { subtitle: "Merkür Günberi Kayması", text: "Newton mekaniğinin açıklayamadığı Merkür gezegeninin yörüngesindeki hassas kayma miktarının genel göreliliğin uzay bükülme denklemleriyle kusursuzca çözülmesidir." },
            { subtitle: "Kütle Çekimsel Kırmızıya Kayma", text: "Güçlü kütle çekim alanlarının merkezinden uzaklaşmaya çalışan fotonların enerji kaybederek dalga boylarının uzaması ve tayfın kırmızı ucuna kayması olayıdır." },
            { subtitle: "Zamanın Çekimle Yavaşlaması", text: "Kütle çekim potansiyelinin çok yüksek olduğu yerlerde (örneğin kara delik yakınlarında veya dünya yüzeyinde) zamanın uzay boşluğuna göre daha yavaş akmasıdır." },
            { subtitle: "Einstein Alan Denklemleri", text: "Evrendeki madde ve enerjinin dağılımını uzay-zamanın geometrik eğriliğiyle birbirine bağlayan, genel göreliliğin en temel matematiksel formül sistemidir." },
            { subtitle: "Güneş Tutulması Doğrulaması", text: "1919 yılında Arthur Eddington tarafından gerçekleştirilen güneş tutulması gözleminde, yıldız ışıklarının güneşin arkasından geçerken büküldüğünün kanıtlanmasıdır." },
            { subtitle: "GPS Uydularının Ayarları", text: "Yeryüzünden uzakta yüksek hızda dönen GPS uydularının saatlerinin, hem hız hem de zayıf çekim etkisi nedeniyle günlük mikrosaniye düzeyinde kalibre edilmesini sağlar." },
            { subtitle: "Çekimsel Dalga Potansiyeli", text: "Kütleli büyük cisimlerin ivmeli hareketleri sırasında uzay-zaman dokusunda dalgalanmalar yaratarak evrenin dört bir yanına enerji yayabileceğini öngörür." }
        ]
    },
    {
        id: "4-kutle-cekim-dalgalari",
        cat: "relativity",
        icon: "〰️",
        title: "4. Kütle Çekim Dalgaları",
        desc: "Uzay-zaman dokusunda yayılan devasa dalgalanmalar ve tespiti.",
        subitems: [
            { subtitle: "Einstein'ın Öngörüsü ve Kuşkuları", text: "Albert Einstein'ın 1915 yılında genel görelilik denklemlerini türetirken uzay-zaman dokusunun dalgalanabileceğini ilk kez teorik olarak fark etmesi ve uzun süre tartışmasıdır." },
            { subtitle: "İvmeli Kütlelerin Yarattığı Dalgalar", text: "Nötron yıldızları veya kara delikler gibi devasa kütlelerin hızla dönmesi veya çarpışması sonucunda uzay dokusunda kopan ve dışarı yayılan esneme dalgalarıdır." },
            { subtitle: "LIGO ve Virgo Dedektörleri", text: "Kilometrelerce uzunluğundaki lazer kolları ve aynalar yardımıyla uzay-zaman dokusundaki atom altı düzeydeki esnemeleri hassasiyetle ölçen devasa tesislerdir." },
            { subtitle: "İlk Doğrudan Tespit (GW150914)", text: "2015 yılında iki kara deliğin birleşmesi sırasında yayılan kütle çekim dalgalarının yeryüzündeki dedektörler tarafından ilk defa doğrudan kaydedilmesi devrimidir." },
            { subtitle: "Uzay-Zamanın Esneme Yönü", text: "Kütle çekim dalgaları bir yönde uzayı sıkıştırırken dik yönde genişleterek geçerken evrenin geometrisini anlık olarak deforme eder." },
            { subtitle: "İkili Pulsar Sistem Kayıpları", text: "Hulse ve Taylor tarafından keşfedilen ikili pulsar sistemlerinin kütle çekim dalgaları yayarak enerji kaybetmesi ve yörüngelerinin yavaşça daralmasıdır." },
            { subtitle: "Çoklu Messenger Astronomisi", text: "Kütle çekim dalgalarının tespiti ile aynı anda gelen ışık veya gama ışını sinyallerinin birleştirilerek evrenin aynı anda gözlemlenmesi yöntemidir." },
            { subtitle: "Evrensel Arka Plan Dalgaları", text: "Evrenin ilk dönemlerinden kalan ve tüm uzayı kaplayan primordial kütle çekim dalgalarının nanodereceli pulsar zamanlama dizileriyle aranmasıdır." },
            { subtitle: "Karasal Gürültü Engelleri", text: "Depremler, okyanus dalgaları ve insan faaliyetlerinin yarattığı titreşimlerin hassas kütle çekim dedektörlerinde sinyal karışıklığı yaratması sorunudur." },
            { subtitle: "Geleceğin Uzay Dedektörü (LISA)", text: "Uzay boşluğunda birbirini takip eden üç uzay aracından oluşan ve daha düşük frekanslı devasa kütle çekim dalgalarını yakalayacak olan projedir." }
        ]
    },
    {
        id: "5-kara-delikler",
        cat: "relativity",
        icon: "🕳️",
        title: "5. Kara Delikler ve Çekim Sınırları",
        desc: "Kütle çekiminin her şeyi, hatta ışığı bile hapsedebildiği yoğunluk noktaları.",
        subitems: [
            { subtitle: "Schwarzschild Yarıçapı Sınırı", text: "Herhangi bir kütlenin kendi üzerine çökerek ışığın bile kaçamayacağı bir olay ufkuna sahip olması için sıkıştırılması gereken kritik yarıçap sınırıdır." },
            { subtitle: "Olay Ufku ve Tek Yönlü Sınır", text: "Kara deliğin merkezindeki tekilliği dış dünyadan ayıran ve içeriye giren hiçbir şeyin (ışık dahil) geri dönemediği görünmez küresel sınırdır." },
            { subtitle: "Merkezi Tekillik Noktası", text: "Genel görelilik denklemlerine göre tüm kütlenin sıfır hacme ve sonsuz yoğunluğa sıkıştığı, fizik yasalarının tamamen çöküş yaşadığı noktadır." },
            { subtitle: "Stellar Türü Kara Delikler", text: "Büyük kütleli yıldızların ömürlerinin sonundaki süpernova patlamalarıyla kendi çekimleri altında çökerek oluşturdukları orta ölçekli kara deliklerdir." },
            { subtitle: "Süperkütleli Dev Kara Delikler", text: "Galaksilerin merkezinde yer alan ve milyonlarca hatta milyarlarca Güneş kütlesine sahip olan esrarengiz devasa kara delik yapılarıdır." },
            { subtitle: "Akış Diski ve X-Işını Yayılımı", text: "Kara deliğin yuttuğu gaz ve toz bulutlarının içeriye düşmeden önce etrafında dönerek sürtünmeyle milyonlarca dereceye ısınması ve X-ışını yaymasıdır." },
            { subtitle: "Relativistik Jet Akıntıları", text: "Kara deliklerin kutup bölgelerinden manyetik alanlar yardımıyla ışık hızına yakın hızlarda uzayın derinliklerine fırlatılan devasa madde püskürtmeleridir." },
            { subtitle: "Event Horizon Teleskobu", text: "Dünyanın dört bir yanındaki radyo teleskoplarının birleştirilmesiyle M87 ve Samanyolu merkezindeki kara deliklerin gölgelerinin ilk kez fotoğraflanmasıdır." },
            { subtitle: "Kerr Dönen Kara Delik Modeli", text: "Kendi ekseni etrafında dönen kara deliklerin uzay-zamanı beraberinde sürüklemesiyle oluşan ergostere sahip gelişmiş geometrik çözümdür." },
            { subtitle: "Orta Boyutlu Kara Delik Boşluğu", text: "Yıldız türü ile süperkütleli kara delikler arasında kalan ve evrende gözlemlenmesi en zor olan eksik kütleli kara delik kategorisidir." }
        ]
    },
    {
        id: "6-kuantum-mekanigi",
        cat: "quantum",
        icon: "⚛️",
        title: "6. Kuantum Mekaniğinin Temelleri",
        desc: "Atom altı dünyayı yöneten olasılıksal ve kesikli enerji kuralları.",
        subitems: [
            { subtitle: "Planck'ın Enerji Paketleri (Quanta)", text: "Max Planck'ın siyah cisim ışıması sorununu çözmek için enerjinin sürekli bir akış değil, kesikli paketler (kuantalar) halinde yayıldığını keşfetmesidir." },
            { subtitle: "Fotoelektrik Olay ve Fotonlar", text: "Işığın sadece dalga değil, aynı zamanda enerji paketçikleri (foton) taşıyan tanecikler olduğunu Albert Einstein'ın bu olayla kanıtlamasıdır." },
            { subtitle: "De Broglie Madde Dalgaları", text: "Louis de Broglie'nin tüm maddelerin ve elektronların tıpkı ışık gibi dalga özelliklerine sahip olduğunu öne süren devrimci dalga-parçacık ikiliği teorisidir." },
            { subtitle: "Heisenberg Belirsizlik İlkesi", text: "Bir parçacığın konumunun ve momentumunun aynı anda kusursuz bir hassasiyetle ölçülemeyeceğini, doğanın temelinde bir olasılık sınırı olduğunu gösterir." },
            { subtitle: "Schrödinger Dalga Denklemi", text: "Kuantum durumlarının zaman içerisindeki değişimini ve olasılık dalgalarının nasıl evrildiğini betimleyen kuantum mekaniğinin temel diferansiyel denklemidir." },
            { subtitle: "Dalga Fonksiyonunun Çökmesi", text: "Süperpozisyon durumundaki bir sistemin gözlem veya ölçüm yapıldığı anda olasılıklardan birini seçerek kesin bir fiziksel duruma dönüşmesidir." },
            { subtitle: "Kuantum Süperpozisyon Durumu", text: "Parçacıkların ölçülene kadar birden fazla farklı durumu veya konumu aynı anda aynı olasılıkla ihtiva etmesi durumudur." },
            { subtitle: "Kopenhag Yorumu Okulu", text: "Niels Bohr ve Werner Heisenberg öncülüğünde geliştirilen, kuantum dünyasının ölçülene kadar gerçek bir konuma sahip olmadığını savunan ana akım yorumdur." },
            { subtitle: "Kuantum Tünelleme Olayı", text: "Parçacıkların sahip oldukları klasik enerjinin yetmediği potansiyel bariyerlerini dalga doğaları sayesinde delip geçebilme mucizesidir." },
            { subtitle: "Ayrık Enerji Seviyeleri", text: "Atom çekirdeği etrafındaki elektronların sadece belirli ve sabit yörünge enerji düzeylerinde bulunabileceğini gösteren kuraldır." }
        ]
    },
    {
        id: "7-belirsizlik-ilkesi",
        cat: "quantum",
        icon: "🎲",
        title: "7. Heisenberg Belirsizlik İlkesi",
        desc: "Doğanın temelinde yatan ölçüm ve bilgi sınırlamaları.",
        subitems: [
            { subtitle: "Konum ve Momentum Takası", text: "Bir parçacığın konumunu ne kadar kesin bilirsek, momentumunu (hız ve kütle çarpımı) o kadar belirsiz hale getirmek zorunda olduğumuzu belirten temel kuraldır." },
            { subtitle: "Enerji ve Zaman İlişkisi", text: "Çok kısa bir zaman aralığında yapılan enerji ölçümlerinin kaçınılmaz olarak büyük belirsizlikler barındırdığını ve sanal parçacıklara zemin hazırladığını gösterir." },
            { subtitle: "Ölçüm Cihazı Etkisi Yanılgısı", text: "İlkenin sadece gözlemcinin cihaza dokunmasından kaynaklanan bir teknik hata değil, doğanın bilgi yapısına içkin temel bir özellik olduğunu açıklar." },
            { subtitle: "Sıfır Noktası Salınımları", text: "Hiçbir sistemin mutlak sıfırda bile tamamen duramayacağını, belirsizlik ilkesi gereği her zaman minimum bir titreşim enerjisi barındırdığını gösterir." },
            { subtitle: "Atomların Çökmesini Önleme", text: "Elektronların belirsizlik ilkesi sayesinde çekirdeğe yapışıp kalmadığını, sürekli bir bulut halinde etrafta salınarak kararlılık koruduğunu açıklar." },
            { subtitle: "Parçacık Yörüngesizlik", text: "Klasik fizikteki gibi net ve keskin yörüngelerin kuantum dünyasında var olamayacağını, sadece olasılık bulutlarının çizilebileceğini kanıtlar." },
            { subtitle: "Kuantum Vakum Dalgalanmaları", text: "Kısa zaman dilimlerindeki enerji belirsizliği sayesinde boş uzayda sanal parçacık çiftlerinin anlık olarak var olup yok olmasını tetikler." },
            { subtitle: "Determinizmin Sonu", text: "Evrenin saat gibi çalışan klasik determinist kader anlayışının yerini, her şeyin olasılıklara dayandığı kuantum bilimine bırakmasına yol açmıştır." },
            { subtitle: "Fiziksel Sabitlerin Sınırı", text: "Belirsizlik miktarının alt sınırını belirleyen temel faktörün Planck sabiti (h-bar) olduğunu ve bu sınırın asla aşılamayacağını gösterir." },
            { subtitle: "Kuantum Kriptografi Güvenliği", text: "Kuantum anahtar dağıtım sistemlerinde veriyi dinlemeye çalışan bir gözlemcinin belirsizlik ilkesi nedeniyle sistemi bozarak anında fark edilmesini sağlar." }
        ]
    },
    {
        id: "8-kuantum-dolanikligi",
        cat: "quantum",
        icon: "🔗",
        title: "8. Kuantum Dolanıklığı ve Uzaktan Etkileşim",
        desc: "Parçacıkların aralarındaki mesafeden bağımsız olarak anlık bağlantısı.",
        subitems: [
            { subtitle: "Einstein'ın Hayaletimsi Etkileşimi", text: "Albert Einstein'ın uzaktan etkileşimin ışık hızını aşamayacağı inancıyla kuantum dolanıklığını eleştirmek için kullandığı ünlü 'Hayaletimsi Uzaktan Etki' tanımıdır." },
            { subtitle: "Ortak Dalga Fonksiyonu Oluşumu", text: "Bir etkileşim sonucunda birbirine bağlanan iki parçacığın ayrı düşseler bile tek bir ortak kuantum sistemi olarak davranmaya devam etmesidir." },
            { subtitle: "Anlık Durum Belirlenmesi", text: "Dolanık çiftlerden birinin spin yönü ölçüldüğünde, diğer parçacığın aralarındaki ışıkyılı mesafeye rağmen anında ve gecikmesiz olarak kendi durumunu almasıdır." },
            { subtitle: "EPR Paradoksu Makalesi", text: "Einstein, Podolsky ve Rosen'ın kuantum mekaniğinin eksik olduğunu ve gizli değişkenler barındırması gerektiğini savundukları tarihi düşünce deneyi makalesidir." },
            { subtitle: "Bell Eşitsizlikleri Testleri", text: "John Bell'in geliştirdiği matematiksel testler sayesinde gizli değişkenlerin var olamayacağının ve kuantum dolanıklığının gerçek olduğunun kanıtlanmasıdır." },
            { subtitle: "Kuantum Işınlanma Teknolojisi", text: "Parçacığın kendisinin değil, taşıdığı kuantum bilgisinin dolanıklık yardımıyla başka bir konuma anlık olarak aktarılması ve kopyalanması sürecidir." },
            { subtitle: "Kuantum Bilgisayar Kübitleri", text: "Dolanıklık sayesinde birden fazla kübitin aynı anda devasa veri matrisleri işleyerek klasik bilgisayarları katbekat geride bırakan işlem gücü yaratmasıdır." },
            { subtitle: "Makroskobik Dolanıklık Deneyleri", text: "Günümüzde sadece atom altı parçacıklar değil, laboratuvarda gözle görülebilir nano nesnelerin bile kuantum dolanıklık durumuna getirilebilmesidir." },
            { subtitle: "No-Cloning (Kopyalanamazlık) Teoremi", text: "Dolanık veya bilinmeyen bir kuantum durumunun mükemmel bir kopyasının çıkarılamayacağını, ölçümün sistemi bozduğunu garanti eden yasadır." },
            { subtitle: "Kuantum İnternet Altyapısı", text: "Gelecekte hacklenmesi tamamen imkansız olan, dünya genelinde dolanık fotonlarla kuruşu esasına dayanan güvenli iletişim ağı projesidir." }
        ]
    },
    {
        id: "9-cift-yarik-deneyi",
        cat: "quantum",
        icon: "🌊",
        title: "9. Çift Yarık Deneyi ve Dalga-Parçacık",
        desc: "Maddenin hem dalga hem tanecik gibi davranmasını gösteren ünlü deney.",
        subitems: [
            { subtitle: "Thomas Young Işık Deneyi", text: "Orijinalinde ışığın dalga doğasını kanıtlamak için iki yarıktan geçirilen ışık ışınlarının girişim desenleri oluşturduğunu gösteren klasik fizik deneyidir." },
            { subtitle: "Elektronlarla Çift Yarık", text: "Sadece ışıkla değil, elektron gibi kütleli maddelerin de iki yarıktan geçirildiğinde ekranda girişim saçakları oluşturarak dalga gibi davrandığının kanıtlanmasıdır." },
            { subtitle: "Gözlemci Etkisi ve Çöküş", text: "Yarıkların hemen önüne elektronların hangi yoldan geçtiğini anlamak için bir dedektör yerleştirildiğinde dalga deseninin yok olup iki şerit oluşması mucizesidir." },
            { subtitle: "Girişim ve Olasılık Desenleri", text: "Parçacıklar teker teker gönderilse bile zamanla ekran üzerinde birikerek olasılık dalgalarının denklemlerine uygun girişim desenleri meydana getirmesidir." },
            { subtitle: "Feynman'ın Yol İntegralleri", text: "Richard Feynman'ın bir parçacığın A'dan B'ye giderken olası tüm yolları aynı anda ve aynı anda takip ettiğini savunan kuantum formülasyonudur." },
            { subtitle: "Gecikmeli Seçim Deneyleri", text: "John Wheeler tarafından önerilen ve ölçüm kararının foton yarıklardan geçtikten çok sonra bile dalga veya tanecik doğasını değiştirebildiğini kanıtlayan deneydir." },
            { subtitle: "Kuantum Silici Düzenekleri", text: "Hangi yoldan geçtiği bilgisi elde edilen bir parçacığın bu bilgisinin sonradan silinmesiyle dalga özelliğinin tekrar geri getirilmesi başarısıdır." },
            { subtitle: "Büyük Molekül Deneyleri", text: "Sadece elektronlar değil, buckyball adı verilen onlarca karbon atomundan oluşan devasa organik moleküllerin bile çift yarıkta dalga özelliği gösterdiğidir." },
            { subtitle: "Gerçeklik Algısının Sorgulanışı", text: "Deney sonuçları, evrendeki nesnelerin biz onlara bakmadığımız sürece kesin bir gerçekliğe sahip olmadığını, sadece olasılıklar dalgası olduğunu gösterir." },
            { subtitle: "Kuantum Optik Teknolojileri", text: "Çift yarık deneyinin temel prensiplerinin günümüzde modern lazer teknolojileri, yarı iletkenler ve nanoteknoloji üretiminde aktif olarak kullanılmasıdır." }
        ]
    },
    {
        id: "10-kuantum-tunelleme",
        cat: "quantum",
        icon: "🚇",
        title: "10. Kuantum Tünelleme ve Uygulamaları",
        desc: "Parçacıkların aşılmaz engelleri olasılık dalgalarıyla aşması.",
        subitems: [
            { subtitle: "Klasik Fizik Enerji Sınırı", text: "Klasik mekanikte yeterli kinetik enerjisi olmayan bir cismin yüksek bir dağın veya potansiyel bariyerinin tepesini aşamayarak geri dönmek zorunda olması kuralıdır." },
            { subtitle: "Dalga Fonksiyonunun Sızıntısı", text: "Kuantum mekaniğinde parçacıkların konumunun keskin bir duvarla sınırlanamayacağını, dalga fonksiyonunun bariyerin ötesine sızarak sıfırdan farklı olasılık yaratmasıdır." },
            { subtitle: "Yıldızlarda Nükleer Füzyon", text: "Güneş'in merkezindeki sıcaklığın protonları normalde birbirine kaynaştırmaya yetecek kadar yüksek olmamasına rağmen tünelleme sayesinde bu engeli aşarak füzyon yapmasıdır." },
            { subtitle: "Radyoaktif Alfa Bozunması", text: "Ağır elementlerin çekirdeklerinde yer alan alfa parçacıklarının çekirdek potansiyel bariyerini tünelleme yoluyla delerek dışarı fırlaması ve ışıma yapmasıdır." },
            { subtitle: "Tarama Tünelleme Mikroskobu (STM)", text: "Atomların yüzeyine çok yaklaşan iğne ucundan elektronların tünelleme yapması sayesinde tek bir atomun bile net görüntüsünün alınmasını sağlayan cihazdır." },
            { subtitle: "Güneş Pili ve Diyot Çalışması", text: "Modern elektronik devrelerdeki tünel diyotların ve güneş panellerinin elektron akışını hızlandırmak için kuantum tünellemeden yararlanmasıdır." },
            { subtitle: "Fotosentez ve Biyolojik Tünelleme", text: "Bitkilerin güneş ışığından enerji üretirken klorofil molekülleri içinde elektronların tünelleme yöntemiyle enerji kaybını sıfıra indirmesi mucizesidir." },
            { subtitle: "Flaş Bellek Hafıza Teknolojisi", text: "Günlük hayatta kullandığımız USB belleklerin ve SSD'lerin veri yazma ve silme işlemlerinde yalıtkan bariyerleri elektron tünellemesiyle geçmesidir." },
            { subtitle: "Kuantum Bilgisayar Kapıları", text: "Kuantum işlemcilerde kübitlerin enerji potansiyel çukurları arasında hızla geçiş yaparak karmaşık hesaplama algoritmalarını çalıştırmasını sağlar." },
            { subtitle: "Kozmik Enflasyon Dalgalanmaları", text: "Evrenin ilk evrelerindeki enflasyon sürecinde tünelleme etkilerinin vakum enerjisi geçişlerini ve galaksi tohumlarını tetiklemiş olabileceği teorisidir." }
        ]
    },
    {
        id: "11-sicak-cisim-isik",
        cat: "quantum",
        icon: "🔥",
        title: "11. Siyah Cisim Işıması ve Ultraviyole Felaketi",
        desc: "Klasik fiziği sarsan ve kuantum devrimini başfiten ışıma problemi.",
        subitems: [
            { subtitle: "Siyah Cisim Tanımı", text: "Üzerine düşen tüm elektromanyetik radyasyonu tamamen emen ve ısıtıldığında içindeki maddesel yapıdan bağımsız olarak evrensel bir ışıma yayan ideal cisim modelidir." },
            { subtitle: "Klasik Rayleigh-Jeans Yasası", text: "Klasik fizik denklemlerine göre ısıtılan bir siyah cismin yayacağı enerjinin dalga boyu küçüldükçe sonsuza gitmesi gerektiğini öngören hatalı yasadır." },
            { subtitle: "Ultraviyole Felaketi Krizi", text: "Klasik teorinin yüksek frekanslarda (ultraviyole bölgede) sonsuz enerji çıktısı öngörmesi ve bu durumun deneylerle tamamen çelişerek fizik dünyasını çıkmaza sokmasıdır." },
            { subtitle: "Max Planck'ın Çözüm Formülü", text: "Planck'ın enerjinin sürekli olmadığını, sadece belirli kesikli paketler (h x f) halinde alınıp verilebileceğini varsayan devrimci denklemini ortaya atmasıdır." },
            { subtitle: "Wien'in Yer Değiştirme Yasası", text: "Siyah cismin maksimum ışıma yaptığı dalga boyunun sıcaklığı ile ters orantılı olarak değiştiğini ve yıldız renklerinin sıcaklıklarını belirlediğini gösterir." },
            { subtitle: "Stefan-Boltzmann Yasası", text: "Siyah bir cismin birim yüzeyinden birim zamanda yayılan toplam enerjinin, mutlak sıcaklığının dördüncü kuvvetiyle doğru orantılı olduğunu kanıtlayan yasadır." },
            { subtitle: "Kozmik Mikrodalga Arka Plan", text: "Evrenin büyük patlamadan kalan ilk ışımasının kusursuz bir siyah cisim ışıması profili çizerek teorinin evrensel ölçekte doğrulanmasını sağlamasıdır." },
            { subtitle: "Yıldızların Yüzey Sıcaklıkları", text: "Gökyüzündeki yıldızların yaydıkları renk spektrumlarının incelenerek siyah cisim ışıması eğrileri üzerinden sıcaklıklarının hassasiyetle hesaplanmasıdır." },
            { subtitle: "Kuantum Fiziğinin Doğuşu", text: "Ultraviyole felaketini çözen bu yaklaşımın, 20. yüzyılın başında klasik fizikten kuantum mekaniğine geçişi tetikleyen ilk büyük kıvılcım olmasıdır." },
            { subtitle: "Termal Işıma Mühendisliği", text: "Günümüzde termal kameraların, gece görüş dürbünlerinin ve endüstriyel ısı ölçüm cihazlarının kalibre edilmesinde siyah cisim yasalarının aktif kullanımıdır." }
        ]
    },
    {
        id: "12-atom-modelleri",
        cat: "quantum",
        icon: "🎯",
        title: "12. Atom Modellerinin Evrimi ve Bohr",
        desc: "Thomson'dan kuantum mekaniksel orbital modeline atomun yapısı.",
        subitems: [
            { subtitle: "Dalton'un Bölünemez Küreleri", text: "John Dalton'un atomu maddelerin en küçük, içi dolu, bölünemez ve yok edilemez küresel yapı taşları olarak tanımlayan ilk bilimsel modelidir." },
            { subtitle: "Thomson Üzümlü Kek Modeli", text: "Elektronların keşfinden sonra atomun pozitif yüklü bir hamur içinde üzümler gibi gömülü negatif elektronlardan oluştuğunu öne süren hatalı modeldir." },
            { subtitle: "Rutherford Altın Levha Deneyi", text: "Alfa parçacıklarının altın levhadan geçerken büyük kısmının sapmadan geçmesi, merkezde çok küçük, yoğun ve pozitif bir çekirdek olduğunu kanıtlamıştır." },
            { subtitle: "Bohr Atom Modeli ve Yörüngeler", text: "Rutherford modelinin elektronların enerji kaybedip çekirdeğe çökme sorununu çözmek için elektronların sadece belirli kararlı dairesel yörüngelerde dönebileceğini öne sürer." },
            { subtitle: "Spektral Çizgilerin Açıklanması", text: "Bohr modelinin hidrojen atomunun ışıma yaparken elektronların üst yörüngeden alt yörüngeye atlayarak kesikli renk çizgileri yaymasını kusursuz açıklamasıdır." },
            { subtitle: "Sommerfeld Eliptik Yörüngeler", text: "Bohr modelinin dairesel yörüngelerini geliştirerek elektronların çekirdek etrafında eliptik yörüngeler çizebileceğini ve relativistik etkileri ekleyen modeldir." },
            { subtitle: "De Broglie Dalga Modeli", text: "Elektronların sadece tanecik değil, yörüngelerde duran dalgalar (boyutsal rezonans) gibi hareket ettiğini göstererek Bohr modeline derinlik kazandırmıştır." },
            { subtitle: "Schrödinger Kuantum Orbitalleri", text: "Elektronların kesin yörüngelerde değil, üç boyutlu uzayda bulunma olasılıklarını gösteren bulutlar (orbitaller) şeklinde yer aldığını kanıtlayan denklemdir." },
            { subtitle: "Pauli Dışlama İlkesi", text: "Bir atomdaki hiçbir elektronun dört kuantum sayısının (n, l, m, s) dördünün birden aynı olamayacağını, aynı orbitalde en fazla iki elektron kalabileceğini söyler." },
            { subtitle: "Periyodik Tablonun Kuantum Temeli", text: "Elementlerin kimyasal özelliklerinin ve periyodik tablonun yapısının elektronların kuantum orbitallerine dizilim kurallarıyla birebir örtüşmesidir." }
        ]
    },
    {
        id: "13-pauli-dislama",
        cat: "quantum",
        icon: "🛡️",
        title: "13. Pauli Dışlama İlkesi ve Madde Kararlılığı",
        desc: "Aynı kuantum durumunda bulunamayacak fermionların evrensel kuralı.",
        subitems: [
            { subtitle: "Wolfgang Pauli'nin Keşfi", text: "Fizikçi Wolfgang Pauli tarafından 1925 yılında atomlardaki elektron dizilimlerini açıklamak için ortaya atılan ve fermiyonların davranışını belirleyen temel yasadır." },
            { subtitle: "Fermiyonlar ve Bozonlar Ayrımı", text: "Yarım tamsayılı spin değerine sahip olan parçacıkların (elektron, proton, kuark) dışlama ilkesine uyarken, tamsayılı spinlilerin (foton, gluon) uymadığını gösterir." },
            { subtitle: "Aynı Durum Yasağı", text: "Evrende hiçbir iki özdeş fermiyonun aynı anda aynı kuantum devletinde, aynı konumda ve aynı enerji seviyesinde bulunamayacağını ifade eden kesin kuraldır." },
            { subtitle: "Maddenin Hacim Kaplama Özelliği", text: "Elektronların üst üste binememesi sayesinde maddelerin katı hacim kapladığını, iki cismin aynı anda aynı yeri işgal etmesini engelleyen temel bariyerdir." },
            { subtitle: "Elektron Denizi ve İletkenlik", text: "Metallerin içindeki serbest elektronların dışlama ilkesi nedeniyle en düşük enerji seviyelerini doldurarak üst düzeylere taşınması ve elektrik iletmesi." },
            { subtitle: "Beyaz Cüce Yıldız Dengesi", text: "Ömrünü tamamlamış yıldızların çekirdeklerindeki elektronların büzüşmeye karşı çıkarak yarattığı elektron dejenere basıncının yıldızı ayakta tutmasıdır." },
            { subtitle: "Nötron Yıldızları ve Pulsarlar", text: "Daha büyük yıldızların çökmesiyle elektronların çekirdeğe katılıp nötrona dönüşmesi ve nötronların dışlama basıncıyla devasa bir küre oluşturmasıdır." },
            { subtitle: "Kimyasal Çeşitliliğin Kaynağı", text: "Elektronların her katmanda sınırlı sayıda kalabilmesi ve üst katmanlara çıkmak zorunda olması, evrendeki zengin kimyasal bağ çeşitliliğini yaratır." },
            { subtitle: "Kuantum Sıvıları ve Süperakışkanlık", text: "Fermiyonların aksine bozonların aynı duruma girebilmesi Bose-Einstein yoğuşmasını yaratırken, fermiyonların direnci maddesel evreni kurar." },
            { subtitle: "Nükleer Kabuk Modeli", text: "Atom çekirdeğindeki proton ve nötronların da tıpkı elektronlar gibi enerji kabuklarına katmanlar halinde dizilmesini sağlayarak çekirdek kararlılığını belirler." }
        ]
    },
    {
        id: "14-bose-einstein-yogunlasmasi",
        cat: "quantum",
        icon: "🧊",
        title: "14. Bose-Einstein Yoğuşması (BEC)",
        desc: "Mutlak sıfıra yakın sıcaklıklarda atomların tek bir dev dalga gibi davranması.",
        subitems: [
            { subtitle: "Satyendra Nath Bose ve Einstein Öngörüsü", text: "Satyendra Nath Bose'un foton istatistikleri üzerine yazdığı makaleyi Einstein'a göndermesiyle, bu kuralın atomlara da uygulanabileceği teorisinin kurulmasıdır." },
            { subtitle: "Mutlak Sıfıra Yaklaşım", text: "Maddenin sıcaklığının mutlak sıfıra (-273.15 derece) milikelvin düzeyinde yaklaştırıldığı, atomik hareketlerin neredeyse tamamen durduğu olağanüstü fiziksel durumudur." },
            { subtitle: "Bozonların Kuantum Birleşmesi", text: "Tamsayılı spine sahip bozon türü atomların düşük sıcaklıkta bireysel kimliklerini kaybederek aynı en düşük enerji durumuna çökmesidir." },
            { subtitle: "Süper Atom veya Dev Dalga", text: "Milyonlarca ayrı atomun aralarındaki sınırların yok olarak tek bir devasa kuantum dalga fonksiyonu (süper atom) gibi hareket etmeye başlaması olayıdır." },
            { subtitle: "İlk Laboratuvar Sentezi (1995)", text: "Cornell ve Wieman tarafından rubidyum atomları kullanılarak lazer soğutma ve manyetik tuzaklama teknikleriyle ilk BEC halinin başarıyla üretilmesidir." },
            { subtitle: "Lazerle Atom Soğutma Yöntemi", text: "Atomların üzerine altı farklı yönden lazer ışınları tutularak foton momentumuyla atomların kinetik enerjisinin düşürülmesi ve frenlenmesidir." },
            { subtitle: "Sıfır Viskoziteli Akışkanlar", text: "Bose-Einstein yoğuşmalarının hiç sürtünme olmaksızın, engellerin etrafından veya kapların duvarlarından tırmanarak akabilme yeteneğidir." },
            { subtitle: "Kuantum Simülasyonları", text: "Karmaşık katı hal fiziği problemlerini ve süper iletkenlik mekanizmalarını laboratuvarda kontrollü şekilde incelemek için BEC sistemlerinin kullanılmasıdır." },
            { subtitle: "Atom Lazeri Teknolojisi", text: "Fotonlar yerine koherent (uyumlu) atom dalgalarını nokta atışı fırlatarak nanoteknolojide devrim yaratan atom lazerlerinin geliştirilmesidir." },
            { subtitle: "Kütle Çekim Dalgası Sensörleri", text: "BEC tabanlı hassas atom interferometreleri sayesinde uzaydaki en zayıf kütle çekim değişimlerinin ve ivmelerin yüksek doğrulukla ölçülmesidir." }
        ]
    },
    {
        id: "15-standart-model",
        cat: "physics",
        icon: "🧩",
        title: "15. Parçacık Fiziği ve Standart Model",
        desc: "Evreni oluşturan temel parçacıklar ve kuvvetleri sınıflandıran model.",
        subitems: [
            { subtitle: "Temel Yapı Taşları (Fermiyonlar)", text: "Maddeyi oluşturan ve kuarklar ile leptonlar olarak iki ana gruba ayrılan yarım spinli temel parçacık ailelerinin tamamıdır." },
            { subtitle: "Kuark Çeşitleri ve Renk Yükü", text: "Yukarı, aşağı, tılsımlı, garip, üst ve alt olmak üzere altı farklı çeşide sahip olan, güçlü nükleer kuvvetle etkileşen temel maddedir." },
            { subtitle: "Leptonlar ve Elektron Ailesi", text: "Güçlü kuvvetten etkilenmeyen; elektron, müon, tau ve bunların nötrinoları olmak üzere altı hafif parçacık türünü kapsayan sınıftır." },
            { subtitle: "Kuvvet Taşıyan Bozonlar", text: "Parçacıklar arasındaki etkileşimleri ve kuvvetleri taşıyan tam spinli alan parçacıkları olup doğanın iletişim ağını kurarlar." },
            { subtitle: "Elektromanyetizma ve Fotonlar", text: "Elektrik yüküne sahip parçacıklar arasındaki itme ve çekme kuvvetlerini taşıyan kütlesiz vektör bozonu fotonun rolüdür." },
            { subtitle: "Zayıf Nükleer Kuvvet ve W/Z", text: "Radyoaktif bozunmaları ve Güneş'teki füzyon reaksiyonlarını tetikleyen, kütleli W ve Z bozonları aracılığıyla etki eden kuvvettir." },
            { subtitle: "Güçlü Nükleer Kuvvet ve Gluonlar", text: "Kuarkları birbirine bağlayarak proton ve nötronları oluşturan, doğadaki en şiddetli etkileşimi gluonlar aracılığıyla sağlayan kuvvettir." },
            { subtitle: "Higgs Bozonu ve Kütle Kazanımı", text: "Evreni dolduran Higgs alanı ile etkileşime giren temel parçacıklara kütle kazandıran ve 2012'de keşfedilen ünlü bozonudur." },
            { subtitle: "Modelin Eksik Yönleri ve Karanlık", text: "Kütle çekim kuvvetini kapsayamaması, karanlık maddeyi ve karanlık enerjiyi açıklayamaması nedeniyle eksik kalan teorik yönleridir." },
            { subtitle: "CERN Büyük Hadron Çarpıştırıcısı", text: "Standart modelin tüm öngörülerini test etmek ve yeni parçacıklar keşfetmek amacıyla İsviçre-Fransa sınırında kurulan devasa yeraltı halkasıdır." }
        ]
    },
    {
        id: "16-kuarklar-ve-gluonlar",
        cat: "physics",
        icon: "⚛️",
        title: "16. Kuarklar, Hadronlar ve Renk Dinamiği",
        desc: "Proton ve nötronları oluşturan temel kuark bileşenleri ve güçlü etkileşimler.",
        subitems: [
            { subtitle: "Kuarkların Renk Yükü Kavramı", text: "Kuantum renk dinamiklerinde kuarkların birbirine bağlanmasını sağlayan kırmızı, yeşil ve mavi adı verilen üç farklı temel yük türünün teorik temelleridir." },
            { subtitle: "Kuark Hapsi (Confinement)", text: "Kuarkların hiçbir zaman doğada tek başına serbest halde bulunamayacağını, birbirinden uzaklaşmaya çalıştıklarında aradaki bağ enerjisinin yeni kuarklar ürettiğini belirten yasadır." },
            { subtitle: "Mezonlar ve Baryonlar Sınıfı", text: "Üç kuarkın birleşmesiyle oluşan baryonlar (proton ve nötron gibi) ile bir kuark ve bir antikuarkın birleşmesiyle oluşan mezonların yapısal özellikleridir." },
            { subtitle: "Asimptotik Özgürlük İlkesi", text: "Kuarklar birbirine çok yaklaştıklarında aralarındaki güçlü nükleer kuvvetin zayıfladığını ve adeta serbest parçacıklar gibi hareket edebildiklerini gösteren olgudur." },
            { subtitle: "Gluon Değiş Tokoş Mekaniği", text: "Kuarklar arasında güçlü kuvveti taşıyan kütlesiz vektör bozonları olan gluonların sürekli alınıp verilerek sistemi bir arada tutma süreçleridir." },
            { subtitle: "Deniz Kuarkları ve Sanal Bulut", text: "Protonların içinde sadece üç ana valans kuarkın bulunmadığını, aynı zamanda sürekli var olup yok olan sanal kuark-antikuark çiftlerinden oluşan bir deniz olduğunu ifade eder." },
            { subtitle: "Kuantum Renk Dinamiği (QCD)", text: "Güçlü nükleer kuvveti matematiksel olarak betimleyen ve kuarklar ile gluonların etkileşimlerini inceleyen standart model alt dalıdır." },
            { subtitle: "Derin Esnek Olmayan Saçılma", text: "Yüksek enerjili elektronların protonlara çarpıştırılarak içindeki noktasal kuark alt yapı parçasını ilk kez deneysel olarak kanıtlama yöntemidir." },
            { subtitle: "Kuark-Gluon Plazması", text: "Evrenin ilk mikro saniyelerinde ve aşırı sıcak yoğunluklarda kuarkların hapsinden kurtularak serbestçe dolaştığı aşırı sıcak sıvı halidir." },
            { subtitle: "Nükleer Kütle Kaynağı", text: "Protonun kütlesinin çok büyük kısmının içindeki kuarkların kütlesinden değil, onları tutan gluon alanlarının taşıdığı bağ enerjisinden kaynaklandığı gerçeğidir." }
        ]
    },
    {
        id: "17-notrinolar",
        cat: "physics",
        icon: "👻",
        title: "17. Nötrinolar ve Hayalet Parçacıklar",
        desc: "Neredeyse hiç etkileşime girmeden evreni geçip giden hayalet parçacıklar.",
        subitems: [
            { subtitle: "Wolfgang Pauli'nin Tahmini", text: "Beta bozunumunda kaybolduğu düşünülen enerjiyi korumak için Pauli tarafından hayaletimsi yüksüz bir parçacığın varlığının teorik olarak ortaya atılmasıdır." },
            { subtitle: "Yüksüz ve Zayıf Etkileşim", text: "Elektrik yükü sıfır olduğu için sadece zayıf nükleer kuvvet ve kütle çekimle etkileşen, maddelerin içinden adeta hiçe sayarak geçen parçacıklardır." },
            { subtitle: "Üç Nötrino Çeşidi (Flavors)", text: "Elektron, müon ve tau nötrinosu olmak üzere üç farklı lepton ailesiyle eşleşen salınım yapabilen temel parçacık türleridir." },
            { subtitle: "Nötrino Salınımı ve Kütle", text: "Nötrinoların uzayda ilerlerken bir türden diğerine dönüşebileceğinin keşfedilmesi ve bu sayede sıfırdan farklı çok küçük bir kütleye sahip olduklarının kanıtlanmasıdır." },
            { subtitle: "Güneş Nötrinoları ve Kayıp Sorunu", text: "Güneş'in merkezindeki füzyon tepkimelerinden yayılan nötrinoların yeryüzüne varışta eksik görünmesi krizinin salınımlarla çözülmesidir." },
            { subtitle: "Süpernova 1987A Patlaması", text: "Dünyadan milyonlarca ışık yılı uzaktaki bir süpernova patlamasından yayan nötrinoların, ışık fotonlarından bile birkaç saat önce yeryüzü dedektörlerine ulaşmasıdır." },
            { subtitle: "Yeraltı Su Dedektörleri (Super-Kamiokande)", text: "Devasa su tankları ve binlerce hassas fotomultiplikatör tüp yardımıyla dev dağların altında nötrino geçişlerini yakalama tesisleridir." },
            { subtitle: "Kozmik Arka Plan Nötrinoları", text: "Büyük patlamadan kalan ve evreni kaplayan, tespit edilmesi en zor olan primordial (ilk dönem) nötrino denizidir." },
            { subtitle: "Yüksek Enerjili Astrofizik Nötrinoları", text: "Galaksi merkezlerindeki karadeliklerden ve evrenin en uç noktalarından fırlatılarak Dünya'ya ulaşan ultra yüksek enerjili mesajcılardır." },
            { subtitle: "Steril Nötrino Hipotezi", text: "Standart modelin dışındaki zayıf etkileşimlere bile girmeyen, sadece kütle çekimiyle var olabilen dördüncü bir karanlık nötrino türü arayışıdır." }
        ]
    },
    {
        id: "18-antimadde",
        cat: "physics",
        icon: "🔄",
        title: "18. Antimadde Asimetrisi ve Evrenin Kökeni",
        desc: "Madde ile antimaddenin zıt özellikleri ve evrendeki madde fazlalığı.",
        subitems: [
            { subtitle: "Dirac Denklemi ve Pozitron", text: "Paul Dirac'ın kuantum mekaniği ile özel göreliliği birleştiren denklemlerinde elektronun elektrik yükü tersine çevrilmiş eşi olan pozitronun matematiksel olarak türetilmesidir." },
            { subtitle: "Madde-Antimadde Simetrisi", text: "Büyük patlama anında evrenin kusursuz bir simetriyle eşit miktarda madde ve antimadde ürettiği varsayılan teorik başlangıç durumudur." },
            { subtitle: "Baryon Asimetrisi Krizi", text: "Günümüz evreninde antimaddenin neredeyse hiç kalmamış, her şeyin maddeden ibaret olmasının bilim dünyasını düşündüren en büyük gizemidir." },
            { subtitle: "CP İhlali Prensipi", text: "Fizik yasalarının yük (C) ve parite (P) aynalarından ters çevrildiğinde tam simetrik davranmadığını, antimadde aleyhine küçük bozulmalar içerdiğini gösterir." },
            { subtitle: "CERN Antiproton Fabrikası", text: "Laboratuvar ortamında yüksek enerjili proton çarpışmalarıyla antiprotonlar üretilerek manyetik tuzaklarda hapsedilip incelenmesini sağlar." },
            { subtitle: "Antihidrojen Atomu Sentezi", text: "Pozitron ve antiprotonun laboratuvarda bir araya getirilerek en basit antimadde atomunun oluşturulması ve tayf çizgilerinin test edilmesidir." },
            { subtitle: "Kozmik Işın Üretimleri", text: "Yıldızlararası uzaydaki yüksek enerjili çarpışmalar sonucunda doğal yollarla minik miktarlarda pozitron ve antiparçacıkların üretilmesidir." },
            { subtitle: "Tıbbi PET Taramaları", text: "Nükleer tıpta pozitron yayan radyoaktif bileşiklerin hastaya verilerek vücuttaki kanserli hücrelerin görüntülenmesinde antimadde ilkelerinin kullanılmasıdır." },
            { subtitle: "Antimadde Roket Yakıtı Potansiyeli", text: "Madde ve antimaddenin birleşerek kütleyi yüzde yüz enerjiye dönüştürmesi nedeniyle geleceğin uzay seyahatleri için en yüksek potansiyelli yakıt biçimidir." },
            { subtitle: "Sakharov Koşulları", text: "Evrende madde asimetrisinin oluşması için baryon sayısının korunumu, C-CP ihlali ve ısıl denge dışı durumların şart olduğunu belirten teoridir." }
        ]
    },
    {
        id: "19-coklu-evren",
        cat: "cosmology",
        icon: "🌌",
        title: "19. Çoklu Evren Teorileri ve Enflasyon",
        desc: "Bizim evrenimizin ötesinde var olabilecek farklı evren katmanları.",
        subitems: [
            { subtitle: "Kozmik Enflasyon Modeli", text: "Evrenin ilk çok küçük anında ışık hızından katbekat hızlı bir şekilde üstel olarak şişerek günümüzdeki devasa boyutuna ulaşmasını sağlayan teoridir." },
            { subtitle: "Seviye 1 Çoklu Evren (Ufuk Ötesi)", text: "Işık hızının sonlu olması nedeniyle görebildiğimiz evren sınırlarının ötesinde, sonsuz uzay dokusunda benzer alanların tekrar etmesi durumudur." },
            { subtitle: "Seviye 2 Çoklu Evren (Kabarcık Evrenler)", text: "Enflasyon alanının farklı bölgelerde durularak ayrı kabarcıklar oluşturduğu ve her birinde farklı fizik sabitlerinin geçerli olduğu çoklu evrendir." },
            { subtitle: "Kuantum Çoklu Evren (Everett Yorumu)", text: "Hugh Everett'in kuantum dalga fonksiyonunun çökmediğini, her karar anında evrenin alternatif kollara ayrılarak dallandığını öne süren yorumudur." },
            { subtitle: "Sicim Teorisi Manifoldu", text: "M-teorisi ve sicim teorisinin gereği olarak uzayın ekstra boyutlarının farklı şekillerde kıvrılmasıyla bambaşka evren yasaları üretebilmesidir." },
            { subtitle: "Kozmik Mikrodalga İzleri", text: "Kabarcık evrenlerin geçmişte bizim evrenimizle çarpışmış olabileceği ihtimalinin kozmik arka plan ışımasında bıraktığı dairesel izlerin aranmasıdır." },
            { subtitle: "Antropik İlke Yaklaşımı", text: "Evrenimizdeki fizik sabitlerinin tam da yaşamın oluşmasına izin verecek kadar hassas olmasının, çoklu evren içinde bizim bulunduğumuz yer olmamızla açıklanmasıdır." },
            { subtitle: "Sicim Ekpyrotic Modeli", text: "İki paralel brane (zar) evrenin birbirine çarpması sonucunda büyük patlamaların periyodik olarak yeniden tetiklendiği döngüsel evren modelidir." },
            { subtitle: "Bilimsel Test Edilebilirlik Tartışması", text: "Çoklu evren teorilerinin doğrudan gözlemlenememesi ve test edilememesi nedeniyle felsefi mi yoksa fiziksel mi olduğu konusundaki akademik tartışmalardır." },
            { subtitle: "Matematiksel Evren Hipotezi", text: "Max Tegmark'ın tüm matematiksel yapıların fiziksel birer evrene karşılık geldiğini ve bizim evrenimizin de bunlardan sadece biri olduğunu savunan tezidir." }
        ]
    },
    {
        id: "20-zamanda-yolculuk",
        cat: "relativity",
        icon: "⏳",
        title: "20. Zamanda Yolculuk ve Fiziksel Sınırlar",
        desc: "Genel görelilik yasaları çerçevesinde zamansal hareket olasılıkları.",
        subitems: [
            { subtitle: "Geleceğe Yolculuk (İkizler Paradoksu)", text: "Işık hızına yakın hızlarda seyahat eden veya güçlü kütle çekim alanlarında vakit geçiren bir kişinin geleceğe, dünyadaki ikizine göre çok daha genç dönmesidir." },
            { subtitle: "Kapalı Zaman Benzeri Eğriler (CTC)", text: "Genel görelilik denklemlerinde uzay-zaman dokusunun öyle bükülmesi ki, bir cismin kendi geçmişine geri dönebileceği yörüngelerin matematiksel olarak var olmasıdır." },
            { subtitle: "Görünmez Solucan Delikleri (Einstein-Rosen)", text: "Uzay-zamanın iki uzak noktasını birbirine bağlayan tünel yapıları olan Einstein-Rosen köprülerinin teorik olarak zamansal kestirmeler sunabilmesidir." },
            { subtitle: "Egzoz Madde ve Negatif Enerji", text: "Solucan deliklerinin kapanmadan açık kalabilmesi için normal maddenin aksine yer çekimi yerine itme kuvveti uygulayan egzotik negatif enerjiye ihtiyaç duyulmasıdır." },
            { subtitle: "Büyükbaba Paradoksu ve Nedensellik", text: "Geçmişe gidip kendi dedesinin hayatını sonlandıran bir kişinin kendi varoluşunu imkansız kılmasının yarattığı mantıksal nedensellik çelişkisidir." },
            { subtitle: "Novikov Kendini Tutarlılık İlkesi", text: "Fizik evreninin çelişkilere izin vermediğini, geçmişe giden birinin eylemlerinin zaten tarihin değişmez bir parçası olduğunu savunan fizik kuralıdır." },
            { subtitle: "Kuantum Çoklu Evren Çözümü", text: "Zamanda geriye gidip tarihi değiştiren bir kişinin aslında kendi evrenini değil, alternatif bir paralel evren kolunu dallandırarak çelişkileri önlediği teorisidir." },
            { subtitle: "Stephen Hawking Kronoloji Koruma", text: "Evrenin zaman yolculuğuna ve kapalı zaman eğrilerine izin vermeyecek şekilde doğa yasalarıyla korunduğunu öne süren ünlü hipotezidir." },
            { subtitle: "Işık Hızı Sınırı Engeli", text: "Hiçbir kütleli cismin c hız sınırını aşamaması nedeniyle evrenin içinde hızı aşan bir zamansal sıçrama yapmanın imkansızlığıdır." },
            { subtitle: "Kozmik Işın Zaman Gecikmeleri", text: "Yüksek hızlı parçacıkların ömürlerinin uzamasının zamansal yolculuğun en ilkel ve mikro düzeydeki doğal kanıtı olmasıdır." }
        ]
    },
    {
        id: "21-yildiz-evrimi",
        cat: "astronomy",
        icon: "🌟",
        title: "21. Yıldız Evrimi ve Süpernova Patlamaları",
        desc: "Yıldızların doğumundan ölümüne kadar geçirdikleri devasa dönüşüm süreçleri.",
        subitems: [
            { subtitle: "Dev Moleküler Bulutlar ve Çöküş", text: "Uzaydaki soğuk gaz ve toz bulutlarının (nebula) kendi kütle çekimleri altında yoğunlaşarak içlerinde prototiz maları tetiklemesi sürecidir." },
            { subtitle: "Ana Kol Evresi ve Hidrojen Yakma", text: "Yıldızın merkezindeki sıcaklık ve basıncın yeterli düzeye ulaşmasıyla hidrojenin helyuma füzyonla dönüşerek devasa enerji yaymaya başladığı kararlı dönemdir." },
            { subtitle: "Kırmızı Dev ve Süperdev Safhası", text: "Merkezindeki hidrojen yakıtı tükenen yıldızın çekirdeğinin büzüşürken dış katmanlarının genleşerek devasa boyutlara ulaşması halidir." },
            { subtitle: "Helyum ve Ağır Element Füzyonu", text: "Çekirdek sıcaklığının artmasıyla helyumun karbon, oksijen ve demire kadar uzanan daha ağır elementlere füzyon yoluyla dönüşme aşamalarıdır." },
            { subtitle: "Güneş Benzeri Yıldızların Sonu", text: "Orta büyüklükteki yıldızların dış katmanlarını uzaya gezegenimsi nebula olarak yayarken merkezde beyaz cüce olarak kalma sürecidir." },
            { subtitle: "Demir Çekirdek Krizi ve Çöküş", text: "Devasa kütleli yıldızların merkezinde demir üretildiğinde füzyonun enerji veremez hale gelmesi ve aniden dengeyi kaybederek çökmesidir." },
            { subtitle: "Core-Collapse Süpernova Patlaması", text: "Çekirdeğin milisaniyeler içinde kendi üzerine çökmesiyle dış katmanların uzaya devasa bir şok dalgasıyla fırlatıldığı muazzam patlamadır." },
            { subtitle: "Nötron Yıldızları ve Pulsar Kalıntıları", text: "Süpernova patlamasından geriye kalan, bir çorba kaşığı milyarlarca ton ağırlığında olan aşırı yoğun nötron küreleridir." },
            { subtitle: "Kara Delik Oluşum Eşiği", text: "Ogmalarından çok daha büyük kütleli yıldızların süpernova sonrasında durdurulamayarak doğrudan kara deliğe dönüştüğü kritik sınırdır." },
            { subtitle: "Ağır Elementlerin Kaynağı", text: "Evrendeki altından uranyuma kadar demirden ağır tüm elementlerin sadece süpernova patlamalarında ve nötron yıldızı çarpışmalarında üretilebilmesidir." }
        ]
    },
    {
        id: "22-notron-yildizlari",
        cat: "astronomy",
        icon: "💫",
        title: "22. Nötron Yıldızları ve Pulsar Mekanikleri",
        desc: "Evrenin en yoğun maddesel cisimleri olan nötron yıldızlarının fiziksel özellikleri.",
        subitems: [
            { subtitle: "Kütle Çekim Sıkışma Sınırı", text: "Süpernova geçiren bir yıldızın elektronlarının protonlarla birleşerek nötronları oluşturduğu ve atom altı mesafeye kadar sıkıştığı yoğunluktur." },
            { subtitle: "Pulsar Deniz Feneri Etkisi", text: "Kendi ekseni etrafında saniyede yüzlerce kez dönen nötron yıldızlarının kutuplarından güçlü radyo dalgaları demetleri yayarak yanıp sönmesidir." },
            { subtitle: "Manyetar ve Aşırı Manyetik Alan", text: "Normal nötron yıldızlarından milyonlarca kat daha güçlü manyetik alanlara sahip olan, uzayı manyetik olarak sarsan magnetar türleridir." },
            { subtitle: "Nötron Yıldızı Kabuk Yapısı", text: "Dış yüzeyinde demir çekirdeklerinden oluşan katı bir kabuk bulunurken alt tabakalarda süperakışkan nötron denizinin yer aldığı katmanlı yapıdır." },
            { subtitle: "Kütle Çekimsel Dev İvme", text: "Yüzeyindeki çekim ivmesinin dünyadakinden milyarlarca kat fazla olması nedeniyle üzerine düşen her nesneyi atomlarına ayıran çekim alanıdır." },
            { subtitle: "Pulsar Zamanlama Hassasiyeti", text: "Dönüş hızlarının devasa atom saatleri kadar kusursuz ve kararlı olması sayesinde uzaydaki en hassas doğal saatler olarak kullanılmalarıdır." },
            { subtitle: "Yıldız Depremleri (Starquakes)", text: "Nötron yıldızının kabuğundaki ani gerilmeler ve kırılmalar sonucunda yüzeyde büyük sarsıntılar oluşması ve dönme frekansının anlık değişmesidir." },
            { subtitle: "İkili Nötron Çarpışmaları", text: "İki nötron yıldızının spiral çizerek birbirine çarpması sonucunda kütle çekim dalgaları ve altın gibi ağır elementler üretmesi olayıdır." },
            { subtitle: "Tolman-Oppenheimer-Volkoff Sınırı", text: "Bir nötron yıldızının taşıyabileceği maksimum kütle sınırını belirleyen, bu sınırı aşanların karakeliğe çöktüğünü gösteren denklemdir." },
            { subtitle: "Rölativistik Hızda Dönüş", text: "Yıldızın ekvator bölgesinin kendi küçük yarıçapına rağmen ışık hızının kaydadeğer bir oranına ulaşacak kadar hızlı dönmesidir." }
        ]
    },
    {
        id: "23-otegezegenler",
        cat: "astronomy",
        icon: "🪐",
        title: "23. Ötegezegen Keşif Yöntemleri ve Dünyalar",
        desc: "Güneş sistemi dışındaki yıldızların etrafında dönen gezegenlerin keşif teknikleri.",
        subitems: [
            { subtitle: "Geçiş (Transit) Fotometrisi Yöntemi", text: "Bir gezegenin önünden geçtiği yıldızın ışığında yarattığı minik ve periyodik kararmaları hassas teleskoplarla tespit etme tekniğidir." },
            { subtitle: "Radyal Hız (Çekim Salınımı) Metni", text: "Gezegenin kütle çekimi nedeniyle etrafında döndüğü ana yıldızda yarattığı minik ileri-geri salınımların tayf kaymalarıyla ölçülmesidir." },
            { subtitle: "Doğrudan Görüntüleme Zorlukları", text: "Yıldızların parlak ışığı altında ezilen minik gezegenleri maskeleme coronagraf sistemleri kullanarak doğrudan fotoğraf olarak yakalama çabasıdır." },
            { subtitle: "Kütleçekimsel Mikrocekif (Microlensing)", text: "Ön plan yıldızının kütle çekiminin arka plandaki yıldız ışığını mercek gibi bükmesi sırasında etrafındaki gezegenin yarattığı ek parlama anıdır." },
            { subtitle: "Astrometrik Yıldız Takibi", text: "Yıldızın uzay boşluğundaki konumunun bir gezegenin kütle çekim çekmesiyle salınım yaparak sapmasının çok hassas koordinatlarla ölçülmesidir." },
            { subtitle: "Sıcak Jupiter Türü Gezegenler", text: "Yıldızlarına Mercury'den bile yakın mesafede dönen, yüzeyleri binlerce dereceye varan dev gaz kütlesi ötegezegen kategorisidir." },
            { subtitle: "Yaşanabilir Bölge (Goldilocks) Kriteri", text: "Bir yıldızın etrafında suyun sıvı halde kalabileceği ne çok sıcak ne de çok soğuk olan yörünge kuşağı bölgesidir." },
            { subtitle: "Ötegezegen Atmosfer Analizi", text: "Transit sırasında yıldız ışığının gezegen atmosferinden süzülerek geçmesiyle elde edilen tayf verilerinden su, metan ve karbondioksit aranmasıdır." },
            { subtitle: "Kayalık Dünya Benzeri Dünyalar", text: "Güneş benzeri veya kırmızı cüce yıldızlar etrafında dönen, Dünya ile benzer boyut ve yoğunluğa sahip potansiyel yaşam barındıran gezegenlerdir." },
            { subtitle: "Kepler ve TESS Uzay Teleskopları", text: "Uzay boşluğunda binlerce ötegezegeni keşfetmek için fırlatılmış ve gökyüzünü kesintisiz tarayan devasa NASA misyonlarıdır." }
        ]
    },
    {
        id: "24-astrobiyoloji",
        cat: "astronomy",
        icon: "🧬",
        title: "24. Astrobiyoloji ve Yaşanabilir Bölge Sınırları",
        desc: "Evrende yaşamın kökeni, evrimi ve dağılımını inceleyen bilim dalı.",
        subitems: [
            { subtitle: "Yaşamın Kimyasal Temelleri", text: "Karbon elementinin esnek bağ yapabilme yeteneği ve suyun evrensel çözücü özelliği sayesinde karmaşık organik moleküllerin temelini oluşturmasıdır." },
            { subtitle: "Aşırıcılar (Extremophiles) Dünyası", text: "Dünyada kaynar su kaynaklarında, radyoaktif atıklarda, buzulların altında ve oksijensiz derin okyanus tabanlarında yaşayabilen dayanıklı organizmalardır." },
            { subtitle: "Mars Gezegeni ve Su İzleri", text: "Kızıl gezegenin geçmişindeki nehir yatakları, göl havzaları ve yeraltı buz kütlelerinin mikrobiyolojik yaşam barındırma potansiyelidir." },
            { subtitle: "Europa ve Enceladus Buz Uyduları", text: "Jüpiter ve Satürn'ün buzla kaplı uydularının altında çekirdek ısıtmasıyla oluşan sıvı okyanusların astrobiyolojik önemidir." },
            { subtitle: "Titan'ın Metan Gölleri", text: "Satürn'ün uydusu Titan'da su yerine sıvı metan ve etan döngüsüne sahip, farklı bir biyokimyasal temele dayanabilecek yaşam ihtimalidir." },
            { subtitle: "Panspermia Hipotezi", text: "Yaşamın tohumlarının veya amino asitlerin göktaşları ve kuyrukluyıldızlar aracılığıyla uzaydan gezegenlere taşınmış olabileceği teorisidir." },
            { subtitle: "Biyogazete (Biosignature) Arayışı", text: "Ötegezegen atmosferlerinde doğal yollarla oluşması zor olan oksijen, metan ve endüstriyel gaz dengelerinin bir arada bulunma durumudur." },
            { subtitle: "SETI ve Akıllı Sinyal Taramaları", text: "Radyo teleskopları kullanarak uzaydaki olası gelişmiş medeniyetlerin gönderdiği yapay radyo dalgalarını ve sinyalleri dinleme projesidir." },
            { subtitle: "Drake Denklemi Hesaplamaları", text: "Galaksimizde iletişim kurabileceğimiz olası akıllı medeniyet sayısını tahmin etmek için kullanılan faktörel olasılık formülüdür." },
            { subtitle: "Prebiyotik Kimya Deneyleri", text: "Miller-Urey deneyinde olduğu gibi erken dünya atmosfer koşullarında inorganik gazlardan organik amino asitlerin sentezlenme süreçleridir." }
        ]
    },
    {
        id: "25-james-webb-teleskobu",
        cat: "astronomy",
        icon: "🔭",
        title: "25. James Webb Uzay Teleskobu ve Evrenin İlk Işıkları",
        desc: "Kızılötesi gözlem gücüyle evrenin en eski galaksilerini inceleyen dev teleskop.",
        subitems: [
            { subtitle: "Kızılötesi Gözlem Avantajı", text: "Evrenin genişlemesi nedeniyle uzak galaksilerden gelen görünür ışığın kızılötesi dalga boyuna kaymasını (redshift) yakalayabilme yeteneğidir." },
            { subtitle: "Beryllium Altın Kaplama Aynalar", text: "18 adet altıgen hafif beryllium parçadan oluşan ve üzerleri hassas altın katmanıyla kaplanarak kızılötesi ışığı kusursuz yansıtan dev aynasıdır." },
            { subtitle: "Beş Katmanlı Güneş Kalkanı", text: "Güneş, Dünya ve Ay'dan gelen ısı ve ışığı tamamen bloke ederek teleskop aynalarını mutlak sıfıra yakın soğuklukta tutan dev koruma perdesidir." },
            { subtitle: "Lagrange L2 Noktası Konumu", text: "Dünyadan 1.5 milyon kilometre uzakta, Güneş-Dünya çekim dengesinin sağlandığı ve kararlı gözlem imkanı veren yörünge bölgesidir." },
            { subtitle: "Kozmik Şafak ve İlk Galaksiler", text: "Büyük patlamadan sadece yüz milyonlarca yıl sonra oluşan ilk nesil galaksilerin ve yıldız kümelerinin doğuşunun görüntülenmesidir." },
            { subtitle: "Yıldız Oluşum Bölgeleri (Pillars)", text: "Kartal Bulutsusu ve Karina Bulutsusu gibi dev gaz bulutlarının derinliklerinde gizlenen yeni doğan yıldızların toz bulutları arkasından incelenmesidir." },
            { subtitle: "Ötegezegen Atmosfer Spektroskopisi", text: "Ötegezegenlerin atmosferlerinden süzülen yıldız ışığını analiz ederek su buharı ve organik moleküllerin benzeri görülmemiş hassasiyetle tespiti." },
            { subtitle: "Hubble Teleskobu Mirası", text: "Hubble'ın ömrünü tamamlamaya yaklaşması ve optik sınırlarını aşarak evrenin daha derin, karanlık ve yaşlı dönemlerini açığa çıkarma görevidir." },
            { subtitle: "Karanlık Madde Haritalaması", text: "Uzak galaksi kümelerinin kütle çekim mercekleme etkilerini hassas kızılötesi ile inceleyerek karanlık maddenin dağılımını modellemesidir." },
            { subtitle: "Evrenin Genişleme Hızı (Hubble Krizi)", text: "JWST'nin hassas ölçümleri sayesinde evrenin genişleme hızı (Hubble sabiti) konusundaki bilimsel veri tutarsızlıklarını çözme çabalarıdır." }
        ]
    },
    {
        id: "26-fermi-paradoksu",
        cat: "astronomy",
        icon: "👽",
        title: "26. Fermi Paradoksu ve Uzaylı Medeniyetleri",
        desc: "Evrenin devasa büyüklüğüne rağmen neden henüz akıllı yaşam izine rastlanmadığı.",
        subitems: [
            { subtitle: "Enrico Fermi'nin Tarihi Sorusu", text: "Fizikçi Enrico Fermi'nin öğle yemeğinde galaksinin yaşı ve büyüklüğü göz önüne alındığında 'Herkes nerede?' diyerek başlettiği ünlü çelişkidir." },
            { subtitle: "Büyük Filtre (Great Filter) Hipotezi", text: "Akıllı yaşamların teknolojik evrim sürecinde kesinlikle aşması gereken ve çoğunun yok olmasına yol açan tehlikeli bir evrensel bariyer teorisidir." },
            { subtitle: "Nadir Dünya Hipotezi", text: "Çok hücreli karmaşık yaşamın oluşması için gereken jeolojik, astronomik ve kimyasal koşulların evrende inanılmaz derecede nadir olduğunu savunur." },
            { subtitle: "Kardashev Medeniyet Ölçeği", text: "Uygarlıkların enerji tüketim kapasitelerine göre Tip 1 (gezegensel), Tip 2 (yıldızsal) ve Tip 3 (galaktik) olarak sınıflandırılmasıdır." },
            { subtitle: "Karanlık Orman (Dark Forest) Teorisi", text: "Evrendeki tüm akıllı medeniyetlerin diğerlerini potansiyel bir yok etme tehdidi olarak gördüğü için sessiz ve gizli kalmayı tercih ettiğini öne sürer." },
            { subtitle: "Galaktik Kolonizasyon Hızı", text: "Işık hızından yavaş seyahat teknolojileriyle bile galaksinin tamamının birkaç milyon yılda kolonize edilebileceği gerçeğiyle çelişen durumdur." },
            { subtitle: "Hayvanat Bahçesi Hipotezi", text: "Gelişmiş uzaylı medeniyetlerin dünyamızı ve insanlığı bilerek izole ettiğini, doğal evrimimize karışmamak için gözlemlediğini öne sürer." },
            { subtitle: "Sanal Gerçeklik ve Dijital Kaçış", text: "Gelişmiş uygarlıkların fiziksel uzayı keşfetmek yerine kendi yarattıkları kusursuz dijital simülasyon evrenlerde yaşamayı seçtiği teorisidir." },
            { subtitle: "Kendi Kendini Yok Etme Riski", text: "Teknolojik olarak gelişen her medeniyetin nükleer savaşlar, yapay zeka ayaklanmaları veya iklim krizleriyle kendi sonunu hazırlamasıdır." },
            { subtitle: "Teknolojik İmzalar (Technosignatures)", text: "Uzak yıldız sistemlerinde Dyson küreleri, yapay mega yapılar, endüstriyel kirlilik gazları veya radyo sızıntılarının aranması çalışmalarıdır." }
        ]
    },
    {
        id: "27-termodinamik-yasalar",
        cat: "physics",
        icon: "🌡️",
        title: "27. Termodinamiğin Temel Yasaları ve Entropi",
        desc: "Enerjinin korunumunu ve evrenin düzensizlik eğilimini yöneten yasalar.",
        subitems: [
            { subtitle: "Termodinamiğin Sıfırıncı Yasası", text: "İki ayrı sistem üçüncü bir sistemle ısıl dengedeyse, bu iki sistemin de kendi aralarında ısıl denge içinde olduğunu belirten temel denge kuralıdır." },
            { subtitle: "Birinci Yasa ve Enerji Korunumu", text: "Evrendeki toplam enerji miktarının sabit olduğunu, enerjinin asla yoktan var veya var olanın yok edilemeyeceğini sadece form değiştirdiğini kanıtlar." },
            { subtitle: "İkinci Yasa ve Entropi Artışı", text: "İzole bir sistemde toplam entropinin (düzensizliğin) her zaman artmak zorunda olduğunu ve zamanın tek yönlü akışını belirleyen temel yasadır." },
            { subtitle: "Clausius Isı Pompası Tanımı", text: "Isının kendiliğinden soğuk bir cisimden sıcak bir cisme akamayacağını, dışarıdan mekanik iş verilmesi gerektiğini belirten termodinamik ilkedir." },
            { subtitle: "Üçüncü Yasa ve Mutlak Sıfır Sınırı", text: "Bir sistemin sıcaklığı mutlak sıfıra yaklaştıkça entropisinin minimum sabit bir değere yaklaştığını ancak mutlak sıfıra asla ulaşılamayacağını söyler." },
            { subtitle: "Maxwell'in Cin Düşünce Deneyi", text: "Mikroskobik bir varlığın kapıları açıp kapatarak termodinamiğin ikinci yasasını ihlal edip edemeyeceğini sorgulayan ünlü kuantum-termodinamik paradoksudur." },
            { subtitle: "Evrenin Isıl Ölümü (Heat Death)", text: "Entropinin maksimum düzeye ulaşmasıyla evrendeki tüm enerjinin düzgün dağılarak iş yapamaz hale geleceği ve yaşamın biteceği teorik sondur." },
            { subtitle: "Bilgi Entropisi (Landauer İlkesi)", text: "Bilgisayarlarda bir veri bitinin silinmesinin bile termodinamik olarak kaçınılmaz bir ısı yayılımına ve entropi artışına yol açtığını gösterir." },
            { subtitle: "Biyolojik Sistemler ve Negentropi", text: "Canlı organizmaların dışarıdan besin ve enerji alarak kendi içlerindeki entropiyi düşük tutabildiklerini ve düzeni koruduklarını açıklar." },
            { subtitle: "Kara Delik Termodinamiği", text: "Bekenstein ve Hawking'in kara deliklerin bir yüzey alanına ve entropi değerine sahip olduğunu, hatta termodinamik yasalarına uyduklarını keşfetmesidir." }
        ]
    },
    {
        id: "28-superiletkenlik",
        cat: "physics",
        icon: "⚡",
        title: "28. Süperiletkenlik ve Meissner Etkisi",
        desc: "Elektriksel direncin tamamen ortadan kalktığı olağanüstü kuantum halleri.",
        subitems: [
            { subtitle: "Dirençsiz Akım Akışı", text: "Bazı metallerin ve alaşımların kritik sıcaklıkların altına soğutulduğunda elektriksel dirençlerini tamamen kaybederek akımı kayıpsız iletmesidir." },
            { subtitle: "Kamerlingh Onnes Keşfi (1911)", text: "Helyumun sıvılaştırılmasından sonra cıva metalinin elektrik direncini sıfırladığının Hollandalı fizikçi tarafından ilk kez gözlemlenmesidir." },
            { subtitle: "Meissner Manyetik Alan İtmesi", text: "Süperiletken malzemelerin içindeki tüm manyetik alanı tamamen dışarı itmesi ve mıknatısları havada (manyetik levitasyon) tutabilme yeteneğidir." },
            { subtitle: "Cooper Çiftleri Oluşumu", text: "Kuantum seviyesinde elektronların fononlar (örgü titreşimleri) aracılığıyla birbirine bağlanarak bosonsu çiftler oluşturup dirençten etkilenmeme mekanizmasıdır." },
            { subtitle: "Tip-1 ve Tip-2 Süperiletkenler", text: "Manyetik alanı tamamen dışlayan yumuşak Tip-1 malzemeler ile manyetik akı çizgilerinin içeriden delikler halinde geçmesine izin veren sert Tip-2 alaşımlardır." },
            { subtitle: "BCS Teorisi Açıklaması", text: "Bardeen, Cooper ve Schrieffer tarafından geliştirilen ve süperiletkenliği kuantum mekaniksel Cooper çiftleriyle açıklayan Nobel ödüllü teoridir." },
            { subtitle: "Yüksek Sıcaklık Süperiletkenleri", text: "Bakır oksit bazlı seramik malzemelerin sıvı nitrojen sıcaklıklarında bile süperiletken özellik gösterebilmesinin keşfiyle yaşanan devrimdir." },
            { subtitle: "Parçacık Hızlandırıcı Mıknatısları", text: "CERN gibi devasa hızlandırıcılarında proton demetlerini bükmek için güçlü süperiletken elektromıknatısların sıvı helyumla soğutularak kullanılmasıdır." },
            { subtitle: "MRI Tıbbi Görüntüleme Cihazları", text: "Hastane MR cihazlarının güçlü ve kararlı manyetik alanlar üretebilmek için süperiletken bobinlerden elektrik akımı geçirmesidir." },
            { subtitle: "Oda Sıcaklığı Süperiletkenlik Arayışı", text: "Basınç altında veya oda sıcaklığında kayıpsız enerji iletimi sağlayacak ideal malzemenin günümüzdeki en büyük teknolojik hedef olmasıdır." }
        ]
    },
    {
        id: "29-kaos-teorisi",
        cat: "physics",
        icon: "🌪️",
        title: "29. Kaos Teorisi ve Kelebek Etkisi",
        desc: "Doğrusal olmayan sistemlerin başlangıç koşullarına duyarlılığı ve karmaşık düzeni.",
        subitems: [
            { subtitle: "Kelebek Etkisi ve Duyarlılık", text: "Brezilya'da bir kelebeğin kanat çırpmasının atmosferde yarattığı minik değişimin haftalar sonra Teksas'ta kasırgaya yol açabileceğini anlatan hassasiyet ilkesidir." },
            { subtitle: "Doğrusal Olmayan Sistemler (Nonlinear)", text: "Çıktının girdiye doğrudan orantılı olmadığı, bileşenlerin birbirini üstel olarak etkilediği karmaşık fiziksel sistemlerin genel adıdır." },
            { subtitle: "Lorenz Çekicisi ve Garip Geometri", text: "Hava durumu modellerini inceleyen Edward Lorenz'in denklemlerinde rastlanan sonsuz döngülü ancak asla kesişmeyen garip çekici (strange attractor) yapısıdır." },
            { subtitle: "Fraktal Boyutlar ve Kendi Benzerlik", text: "Doğadaki bulguların (dağlar, kıyılar, bulutlar) her ölçekte birbirinin küçültülmüş kopyası olan fraktal geometri kurallarıyla modellenmesidir." },
            { subtitle: "Deterministik Kaos Kavramı", text: "Sistemlerin tamamen kurallı ve determinist denklemlerle yönetilmesine rağmen geleceğin öngörülemez derecede karmaşık davranabilmesi çelişkisidir." },
            { subtitle: "Bifurkasyon (Çatallanma) Diyagramları", text: "Sistem parametreleri değiştikçe kararlı durumların ani çatallanmalarla periodikten kaosa geçiş aşamalarını gösteren grafiklerdir." },
            { subtitle: "Hava Durumu Öngörü Sınırları", text: "Atmosferin kaos özellikleri nedeniyle hava tahminlerinin en fazla birkaç gün sonrasına kadar kesinlik taşıyabilmesi fiziksel sınırıdır." },
            { subtitle: "Çift Sarkaç Hareket Karışıklığı", text: "Basit bir sarkaç ucuna takılan ikinci bir sarkacın hareketinin tamamen kurallı olmasına rağmen asla tahmin edilemeyen kaotik salınımlar yapmasıdır." },
            { subtitle: "Kaotik Sistemlerde Kontrol", text: "Kaotik sistemlerin doğasındaki hassas dengelerden yararlanarak minik müdahalelerle sistemi istenen kararlı yörüngeye sokma mühendisliğidir." },
            { subtitle: "Kalp Ritmi ve Beyin Dalgaları", text: "İnsan kalbinin sağlıklı çalışmasının tamamen düzgün değil, hafif kaotik ve esnek bir ritim yapısına dayanmasının biyolojik önemi." }
        ]
    },
    {
        id: "30-akiskanlar-mekanigi",
        cat: "physics",
        icon: "🌊",
        title: "30. Akışkanlar Mekaniği ve Navier-Stokes Denklemleri",
        desc: "Sıvı ve gazların hareketini, akışını ve basınç dengelerini inceleyen matematik.",
        subitems: [
            { subtitle: "Navier-Stokes Denklemleri Temeli", text: "Akışkanların hareketini kütle ve momentum korunum yasalarıyla formüle eden, milenyum problemlerinden biri olan temel diferansiyel denklemlerdir." },
            { subtitle: "Viskozite ve İç Sürtünme", text: "Akışkanların akmaya karşı gösterdiği içsel direncin ve moleküller arası sürtünme kuvvetlerinin matematiksel olarak modellenmesidir." },
            { subtitle: "Laminer ve Türbülanslı Akış", text: "Akışkanların düzgün tabakalar halinde pürüzsüz akması (laminer) ile hızla girdaplar ve kaotik dalgalar oluşturarak akması (türbülans) durumudur." },
            { subtitle: "Bernoulli Prensibi ve Basınç", text: "Hızla akan akışkanların basıncının düştüğünü, bu sayede uçak kanatlarında kaldırma kuvvetinin ve sprey şişelerinin çalıştığını açıklayan yasadır." },
            { subtitle: "Reynolds Sayısı Boyutsuzu", text: "Atalet kuvvetlerinin viskoz kuvvetlere oranını vererek bir akışın laminer mi yoksa türbülanslı mı olacağını önceden belirleyen kritik sayıdır." },
            { subtitle: "Sınır Tabaka (Boundary Layer) Teorisi", text: "Bir cismin etrafından akan akışkanın yüzeye yakın ince bir katmanda sürtünme nedeniyle yavaşladığı ve sürüklenme yarattığı bölgedir." },
            { subtitle: "Aerodinamik Kaldırma ve Sürüklenme", text: "Uçak kanatlarının ve araçların şekillendirilerek hava akımı direncinden minimum etkilenmesi ve yukarı kaldırma kuvveti üretmesi bilimidir." },
            { subtitle: "Hidrodinamik Kaldırma (Arşimet)", text: "Sıvıların içine batırılan cisimlere uyguladıkları kaldırma kuvvetinin, yer değiştiren sıvının ağırlığına eşit olduğunu belirten prensiptir." },
            { subtitle: "Süpersonik Şok Dalgaları", text: "Ses hızını aşan nesnelerin önünde hava moleküllerinin sıkışarak oluşturduğu basınç duvarı ve sonik patlama (sonic boom) olaydır." },
            { subtitle: "Okyanus Akıntıları ve İklim", text: "Dünya genelindeki devasa okyanus akıntılarının ve atmosferik sirkülasyonların akışkanlar mekaniği denklemleriyle simüle edilmesidir." }
        ]
    },
    {
        id: "31-kuantum-bilgisayarlar",
        cat: "quantum",
        icon: "💻",
        title: "31. Kuantum Bilgisayarlar ve Kübit Teknolojisi",
        desc: "Klasik bilgisayarların sınırlarını aşan kuantum mekaniksel veri işleme sistemleri.",
        subitems: [
            { subtitle: "Kübit ve Süperpozisyon", text: "Bilginin sadece 0 ve 1 olmaktan çıkıp, aynı anda hem 0 hem 1 superposition durumunda bulunabilmesini sağlayan temel kuantum birimidir." },
            { subtitle: "Kuantum Dolanıklık Entegrasyonu", text: "Kübitlerin birbirine uzaktan kuantum bağıyla bağlanarak işlem kapasitesini üstel olarak artırma yeteneğidir." },
            { subtitle: "Süperiletken Kübit Devreleri", text: "Josephson eklemleri kullanılarak milikelvin sıcaklıklarda soğutulan ve mikrodalgalarla kontrol edilen kübit mimarisidir." },
            { subtitle: "İyon Tuzağı Teknolojisi", text: "Lazerlerle mutlak sıfıra yakın dondurulan yüklü atomların (iyonların) elektromanyetik alanlarda hapsedilerek kübit olarak kullanılmasıdır." },
            { subtitle: "Shor Algoritması ve Çarpanlara Ayırma", text: "Kuantum bilgisayarların büyük sayıları çarpanlarına ayırma hızını üstel olarak artırarak modern şifreleme sistemlerini kırma potansiyelidir." },
            { subtitle: "Grover Arama Algoritması", text: "Sıralanmamış veritabanlarında arama yapma süresini klasik bilgisayarlara göre karekök oranında hızlandıran kuantum algoritmasıdır." },
            { subtitle: "Kuantum Üstünlüğü (Quantum Supremacy)", text: "En güçlü süper bilgisayarların binlerce yılda çözebileceği karmaşık bir matematiksel problemi bir kuantum işlemcinin saniyeler içinde çözmesidir." },
            { subtitle: "Hata Düzeltme Kodları (QEC)", text: "Kuantum durumlarının dış etkenler (gürültü) yüzünden bozulmasını (decoherence) önlemek için kullanılan çoklu kübit koruma sistemleridir." },
            { subtitle: "Kuantum Çıkarsama ve Optimizasyon", text: "Lojistik, finans ve ilaç tasarımı gibi karmaşık optimizasyon problemlerinde en kısa sürede en iyi sonucu bulma yeteneğidir." },
            { subtitle: "Kuantum Donanım Kararlılığı", text: "Kübitlerin çevresel ısı ve elektromanyetik dalgalardan etkilenmemesi için yürütülen yalıtım ve ultra soğutma mühendisliğidir." }
        ]
    },
    {
        id: "32-kuantum-dolaniklik",
        cat: "quantum",
        icon: "🔗",
        title: "32. Kuantum Dolanıklık ve Uzaktan Etkileşim",
        desc: "Einstein'ın 'uzaktan ürkütücü eylem' olarak nitelendirdiği parçacık bağı.",
        subitems: [
            { subtitle: "EPR Paradoksu Tartışması", text: "Einstein, Podolsky ve Rosen'ın kuantum mekaniğinin eksik olduğunu savunmak için ortaya attığı ünlü düşünce deneyidir." },
            { subtitle: "Bell Eşitsizlikleri Testleri", text: "John Bell'in formüle ettiği ve yerel gizli değişkenlerin geçerli olup olmadığını deneysel olarak test eden matematiksel sınırlardır." },
            { subtitle: "Anında Durum Aktarımı", text: "Dolanık iki parçacıktan birinin durumu ölçüldüğünde, diğerinin aradaki mesafe ne olursa olsun anında tepki vermesi olgusudur." },
            { subtitle: "Kuantum Işınlama (Teleportation)", text: "Fiziksel nesnelerin değil, bir parçacığın sahip olduğu kuantum durumunun başka bir konuma eksiksiz aktarılması sürecidir." },
            { subtitle: "Aynasal Foton Çiftleri", text: "Özel kristallerden geçirilen lazer ışınlarının bölünmesiyle birbirine sıkıca dolanmış foton çiftleri elde etme yöntemidir." },
            { subtitle: "Makroskobik Dolanıklık", text: "Sadece atom altı dünyada değil, laboratuvarda insan gözüyle görülebilecek büyüklükteki nesneler arasında dolanıklık kurma çalışmalarıdır." },
            { subtitle: "Kuantum Ağları Altyapısı", text: "Dünya genelinde güvenli iletişim hatları kurmak için fotonların dolanıklık özelliklerinden yararlanan fiber optik ağ sistemleridir." },
            { subtitle: "Yerel Olmama (Non-locality) İlkesi", text: "Evrenin temel düzeyde uzaktan bağımsız olmadığını, her şeyin görünmez bağlarla birbirine tıkız bağlı olduğunu gösteren ilkedir." },
            { subtitle: "Kuantum Zarfleme Güvenliği", text: "Bilginin dolanık parçacıklar üzerinden aktarılması sırasında herhangi bir dinleme girişiminin sistemi anında bozarak fark edilmesini sağlar." },
            { subtitle: "Geleceğin Hesaplama Mimarisi", text: "Dolanıklık prensiplerinin çok çekirdekli kuantum işlemciler arasında veri akışını hızlandırmak için tasarlanma biçimidir." }
        ]
    },
    {
        id: "33-kuantum-kriptografi",
        cat: "quantum",
        icon: "🔐",
        title: "33. Kuantum Kriptografi ve Güvenli İletişim",
        desc: "Kıralamaz şifreleme yöntemleri ve kuantum anahtar dağıtım protokolleri.",
        subitems: [
            { subtitle: "BB84 Protokolü Temelleri", text: "Charles Bennett ve Gilles Brassard tarafından geliştirilen, fotonların kutupsallığını kullanarak güvenli anahtar oluşturan ilk protokoldür." },
            { subtitle: "Dinlemenin Tespit Edilmesi", text: "Kuantum mekaniği yasaları gereği, aktarılan bir anahtarı okumaya çalışan casusun sistemi değiştirmek zorunda kalması ve hemen yakalanmasıdır." },
            { subtitle: "Kuantum Anahtar Dağıtımı (QKD)", text: "İki tarafın şifreleme anahtarlarını tamamen güvenli bir şekilde paylaşmasını sağlayan fizik tabanlı sistemdir." },
            { subtitle: "Post-Kuantum Kriptografi", text: "Gelecekteki güçlü kuantum bilgisayarların kıramayacağı şekilde tasarlanmış yeni nesil matematiksel şifreleme algoritmalarıdır." },
            { subtitle: "Foton Kutuplanma Filtreleri", text: "Verilerin dikey, yatay veya çapraz filtrelerden geçirilerek şifrelenmesi ve alıcı tarafından doğru filtrenin seçilmesiyle çözülmesidir." },
            { subtitle: "Kuantum Rastgele Sayı Üreteçleri", text: "Doğal kuantum dalgalanmalarını kullanarak tamamen tahmin edilemez ve kusursuz rastgele sayılar üreten donanımlardır." },
            { subtitle: "Uydu Tabanlı QKD Ağları", text: "Yer istasyonları ile uzaktaki uydular arasında lazer fotonları gönderilerek küresel boyutta güvenli iletişim hatları kurulmasıdır." },
            { subtitle: "RSA Algoritmasının Tehdit Altında Olması", text: "Günümüz internet güvenliğinin temelini oluşturan RSA şifrelemesinin kuantum çarpanlara ayırma hızıyla çözülebilme riskidir." },
            { subtitle: "Kuantum Şifreli İletişim Uyduları", text: "Çin'in Micius uydusu gibi öncü projelerle uzaydan yeryüzüne güvenli kuantum anahtarları aktarma denemeleridir." },
            { subtitle: "Endüstriyel Veri Güvenliği Geçişi", text: "Finans ve devlet kurumlarının gelecekteki kuantum saldırılarına karşı altyapılarını şimdiden dönüştürme süreçleridir." }
        ]
    },
    {
        id: "34-nanoteknoloji",
        cat: "physics",
        icon: "🔬",
        title: "34. Nanoteknoloji ve Karbon Nanotüpler",
        desc: "Atomik boyutta malzeme tasarımı ve mikroskobik mühendislik harikaları.",
        subitems: [
            { subtitle: "Feynman'ın Vizyonu", text: "Richard Feynman'ın 1959 yılında yaptığı 'Aşağıda Daha Çok Yer Var' konuşmasıyla nanoteknolojinin teorik temellerini atmasıdır." },
            { subtitle: "Karbon Nanotüp Yapısı", text: "Grafen yapraklarının silindirik biçimde kıvrılmasıyla oluşan, çelikten katlarca sağlam ve hafif nanotüp malzemelerdir." },
            { subtitle: "Grafen Mucizesi", text: "Tek atom kalınlığındaki karbon tabakası olan grafenin olağanüstü elektrik ve ısı iletkenliği özellikleridir." },
            { subtitle: "Nanomakinalar ve Nano-robotlar", text: "Hücre düzeyinde ilaç taşıyabilen ve tıkalı damarları açabilen mikroskobik robotik sistem tasarımlarıdır." },
            { subtitle: "Kuantum Noktaları (Quantum Dots)", text: "Nanometre boyutundaki yarı iletken kristallerin boyutlarına göre farklı renklerde ışık yayma özelliğidir (QLED ekran teknolojisi)." },
            { subtitle: "Yüzey Hidrofobik Kaplamalar", text: "Nanoteknolojik yüzeyler sayesinde su ve kir tutmayan, kendi kendini temizleyen lotus etkisili malzemelerdir." },
            { subtitle: "Moleküler Kendi Kendine Montaj", text: "Atomların ve moleküllerin kimyasal etkileşimlerle dış müdahale olmadan kendi kendine kusursuz yapılar oluşturmasıdır." },
            { subtitle: "Nano-ilaç Dağıtım Sistemleri", text: "Kanser ilaçlarının doğrudan hastalıklı hücrelere ulaşmasını sağlayan akıllı nano-kapsül teknolojileridir." },
            { subtitle: "Yarı İletken Üretim Sınırları", text: "Mikroişlemci mimarilerinde nanometre sınırlarına (2nm, 1nm) ulaşıldığında ortaya çıkan kuantum sızıntı problemleridir." },
            { subtitle: "Uzay Asansörü Kablo Tasarımı", text: "Yeryüzünden uzaya uzanacak bir asansör için gereken dayanıklılığa sadece karbon nanotüplerin sahip olabileceği teorisidir." }
        ]
    },
    {
        id: "35-nukleer-fuzyon",
        cat: "physics",
        icon: "☀️",
        title: "35. Nükleer Füzyon ve Temiz Enerji Kaynağı",
        desc: "Yıldızların enerji kaynağı olan atom birleştirme süreçlerinin dünyada taklit edilmesi.",
        subitems: [
            { subtitle: "Füzyon Tepkimesi Mekaniği", text: "Hafif izotopların (deteryum ve trityum) aşırı sıcaklık ve basınç altında birleşerek helyum oluşturması ve devasa kütle açığa çıkarmasıdır." },
            { subtitle: "Güneş'in Enerji Sırrı", text: "Güneş çekirdeğindeki proton-proton zincirleme reaksiyonlarıyla milyarlarca yıldır kesintisiz enerji yayma sürecidir." },
            { subtitle: "Manyetik Hapis (Tokamak) Tasarımı", text: "100 milyon derecedeki plazmanın devasa toroid (halka) manyetik alanlar kullanılarak hiçbir duvara değdirilmeden tutulmasıdır." },
            { subtitle: "Ataletle Sıkıştırma (Laser Fusion)", text: "Güçlü lazerlerin yakıt pelletini her yönden aynı anda sıkıştırarak mikro patlamalarla füzyon tetiklemesi yöntemidir." },
            { subtitle: "ITER Projesi ve Uluslararası İşbirliği", text: "Fransa'da inşa edilen dünyanın en büyük deneysel tokamak reaktörü ile füzyonun ticari olarak sürdürülebilirliğini kanıtlama çabasıdır." },
            { subtitle: "Trityum Üretimi ve Lityum Battaniyeler", text: "Reaktör duvarlarında lityum kullanılarak tepkime için gereken az bulunan trityum yakıtının kendi kendine üretilmesidir." },
            { subtitle: "Radyoaktif Atık Avantajı", text: "Füzyon reaktörlerinin klasik nükleer fisyon gibi binlerce yıl süren uzun ömürlü ve tehlikeli radyoaktif atıklar üretmemesi avantajıdır." },
            { subtitle: "Q Katsayısı ve Net Enerji Çıktısı", text: "Reaktöre verilen enerjiden daha fazlasının (Q > 1) üretilmesi hedefine ulaşma mühendisliği yarışıdır." },
            { subtitle: "Helis Reaktörler (Stellarator)", text: "Tokamaklardan farklı olarak daha kararlı plazma akışı sağlayan bükümlü manyetik sargılara sahip alternatif füzyon tasarımıdır." },
            { subtitle: "Geleceğin Sınırsız Enerjisi", text: "Füzyon teknolojisinin başarıyla ticari hale gelmesiyle insanlığın tüm enerji krizlerini kalıcı olarak çözme potansiyelidir." }
        ]
    },
    {
        id: "36-kutle-cekim-dalgalari",
        cat: "astronomy",
        icon: "〰️",
        title: "36. Genel Görelilik ve Kütle Çekim Dalgaları",
        desc: "Uzay-zaman dokusunda kütlelerin hareketiyle oluşan dalgalanmaların tespiti.",
        subitems: [
            { subtitle: "Einstein'ın Öngörüsü (1915)", text: "Genel görelilik denklemlerinde büyük kütleli cisimlerin ivmelenmesinin uzay-zaman dokusunda dalgalar yayacağını ilk kez teorize etmesidir." },
            { subtitle: "LIGO ve Virgo Dedektörleri", text: "Kilometrelerce uzunluktaki lazer kolları kullanarak uzay-zaman dokusundaki atom altı esnemeleri ölçebilen dev interferometrelerdir." },
            { subtitle: "İlk Doğrudan Tespit (GW150914)", text: "2015 yılında iki kara deliğin çarpışmasından yayılan kütle çekim dalgalarının yeryüzündeki dedektörler tarafından ilk kez kaydedilmesidir." },
            { subtitle: "Nötron Yıldızı Birleşmeleri (Kilonova)", text: "İki nötron yıldızının çarpışmasının hem kütle çekim dalgası hem de gama ışını patlaması olarak aynı anda gözlemlenmesidir." },
            { subtitle: "Evrenin Sesini Duymak", text: "Astronominin sadece ışık (foton) gözleminden çıkıp uzay-zamanın akustik titreşimlerini dinleme dönemine geçişidir." },
            { subtitle: "Kozmik Arka Plan Dalgaları", text: "Büyük patlamadan kalan erken evren çalkantılarının kütle çekim dalgası izleriyle takip edilme çabalarıdır." },
            { subtitle: "Uzay Tabanlı LISA Projesi", text: "Gelecekte uzaya fırlatılacak üç uzay aracından oluşan dev lazer üçgeniyle daha düşük frekanslı dalgaların tespiti projesidir." },
            { subtitle: "Kara Deliklerin Çarpışma Mekaniği", text: "Birleşen kara deliklerin yaydığı enerji miktarının kütle-enerji denklemiyle evrendeki en büyük patlamalara denk gelmesidir." },
            { subtitle: "Hubble Sabiti Ölçüm Alternatifi", text: "Kütle çekim dalgalarının genlik verileri kullanılarak evrenin genişleme hızının bağımsız bir yöntemle hesaplanmasıdır." },
            { subtitle: "Genç Evrenin Periyotları", text: "Kütle çekim dalgaları sayesinde evrenin ilk milisaniyelerindeki opak döneme ait bilgilerin doğrudan elde edilebilmesidir." }
        ]
    },
    {
        id: "37-holografik-prensip",
        cat: "physics",
        icon: "🖼️",
        title: "37. Holografik Prensip ve Evrenin Sınırları",
        desc: "Üç boyutlu evrenimizin iki boyutlu bir sınır yüzeyin kodlanmış hali olabileceği teorisi.",
        subitems: [
            { subtitle: "Gerard 't Hooft Önerisi", text: "Kuantum kütle çekimi çalışmalarında evrenin hacmindeki bilginin sınır yüzeyindeki alanla sınırlı olduğunu öne süren teoridir." },
            { subtitle: "Bekenstein Sınırı ve Kara Delikler", text: "Bir bölgede depolanabilecek maksimum bilgi miktarının hacimle değil, o bölgeyi çevreleyen yüzey alanı ile sınırlı olması kuralıdır." },
            { subtitle: "AdS/CFT Karşılığı", text: "Anti-de Sitter uzayındaki kütle çekim teorisinin, o uzayın sınırındaki konformal alan teorisine matematiksel olarak tamamen denk olmasıdır." },
            { subtitle: "Juan Maldacena Keşfi", text: "Sicim teorisinde kütle çekimli iç evren ile sınırdaki kuantum alan teorisi arasında kurulan devrim niteliğindeki köprüdür." },
            { subtitle: "Evren Bir Hologram Mı?", text: "Üç boyutlu olarak algıladığımız fiziksel gerçekliğin aslında uzak iki boyutlu bir sınırda depolanan verilerin projeksiyonu olma ihtimalidir." },
            { subtitle: "Bilgi Korunumu ve Entropi", text: "Holografik prensibin kara delik bilgi paradoksunu çözmek için kullanılan en güçlü teorik araçlardan biri olmasıdır." },
            { subtitle: "Kuantum Düğümleri ve Uzay-Zaman", text: "Uzay-zaman dokusunun temel yapı taşlarının aslında bilgi entegrasyonları ve dolanık kuantum ağları olabileceği fikridir." },
            { subtitle: "Kozmik Holografik Gürültü", text: "Fermilab'da evrenin holografik piksel sınırlarını ve pikselli yapılarını test etmek için yürütülen hassas deneylerdir." },
            { subtitle: "Sicim Teorisi Entegrasyonu", text: "Holografinin kuantum mekaniği ile genel görelilik arasındaki çelişkileri gidermede teorisyenlere sunduğu matematiksel kolaylıktır." },
            { subtitle: "Felsefi Gerçeklik Algısı", text: "Madde ve uzay kavramlarının temel olmadığını, gerçeğin arkasında yatan asıl şeyin saf bilgi akışı olduğunu savunan görüştür." }
        ]
    },
    {
        id: "38-karanlik-madde",
        cat: "astronomy",
        icon: "🌑",
        title: "38. Karanlık Madde ve WIMP Parçacıkları",
        desc: "Evrenin çoğunluğunu oluşturan ancak ışıkla etkileşmeyen gizemli kütle unsuru.",
        subitems: [
            { subtitle: "Galaktik Dönme Eğrileri Anomalisi", text: "Galaksilerin dış kenarlarındaki yıldızların merkezdekilerle aynı hızda dönmesi nedeniyle içeride görünenden çok daha fazla kütle olması gerektiği keşfidir." },
            { subtitle: "Vera Rubin ve Keşif Katkısı", text: "Astronom Vera Rubin'in galaktik rotasyon hızlarını inceleyerek karanlık maddenin varlığına dair ilk güçlü kanıtları sunmasıdır." },
            { subtitle: "Kütleçekimsel Mercekleme Kanıtları", text: "Uzak galaksi kümelerinin arkasındaki ışığı beklenenden çok daha fazla bükmesiyle görünmeyen kütlelerin haritalandırılmasıdır." },
            { subtitle: "WIMP (Zayıf Etkileşen Ağır Parçacıklar)", text: "Karanlık maddenin adayı olan, sadece kütle çekimi ve zayıf nükleer kuvvetle etkileşen teorik temel parçacık sınıfıdır." },
            { subtitle: "Aksiyon (Axion) Hipotezi", text: "WIMP'lere alternatif olarak önerilen, çok düşük kütleli ancak evreni dolduran dalga benzeri başka bir karanlık madde adayıdır." },
            { subtitle: "Yeraltı Kısıt Dedektörleri", text: "XENON ve LUX gibi devasa yeraltı laboratuvarlarında saf xenon tankları kullanarak karanlık madde parçacığının çarpışmasının ışımasını arama çalışmalarıdır." },
            { subtitle: "Kozmik Ağ (Cosmic Web) Yapısı", text: "Karanlık maddenin evrende görünür galaksileri birbirine bağlayan devasa görünmez iskelet ağını oluşturmasıdır." },
            { subtitle: "Sıcak ve Soğuk Karanlık Madde", text: "Parçacıkların hareket hızlarına göre evrenin yapı taşlarını nasıl oluşturduklarını sınıflandıran kozmolojik modellerdir." },
            { subtitle: "MOND (Modifiye Newton Dinamiği)", text: "Karanlık maddeye ihtiyaç duymadan, Newton'un kütle çekim yasalarının düşük ivmelerde değiştirilmesi gerektiğini savunan alternatif teoridir." },
            { subtitle: "Evrenin Kütle Dağılımı", text: "Modern ΛCDM kozmoloji modeline göre evrenin yaklaşık yüzde 27'sinin karanlık maddeden oluştuğu gerçeğidir." }
        ]
    },
    {
        id: "39-karanlik-enerji",
        cat: "cosmology",
        icon: "✨",
        title: "39. Karanlık Enerji ve Evrenin İvmelenen Genişlemesi",
        desc: "Evreni hızla birbirinden uzaklaştıran gizemli itici güç.",
        subitems: [
            { subtitle: "Tip 1a Süpernova Gözlemleri", text: "Uzak süpernovaların uzaklık ve parlaklık ölçümlerinden yola çıkılarak evrenin genişlemesinin yavaşlamak yerine hızlandığının keşfidir." },
            { subtitle: "Kozmolojik Sabit (Lambda)", text: "Einstein'ın uzay dokusunun kendi içinden kaynaklanan itici gücü açıklamak için denklemlerine eklediği ancak sonradan hata dediği sabittir." },
            { subtitle: "Evrenin Hızlanan Genişlemesi", text: "Uzak galaksilerin birbirinden uzaklaşma hızının zamanla azlması gerekirken tersine katlanarak artma olgusudur." },
            { subtitle: "Karanlık Enerjinin Durumu", text: "Evrenin toplam enerji ve madde içeriğinin yaklaşık yüzde 68'ini oluşturan, uzaya homojen şekilde yayılmış itici güçtir." },
            { subtitle: "Karanlık Enerji vs Vakum Enerjisi", text: "Kuantum alan teorisinin öngördüğü vakum enerjisi ile gözlemlenen karanlık enerji değeri arasındaki 10 üzeri 120 katlık devasa çelişkidir." },
            { subtitle: "K Quintessence (Beşinci Element) Modeli", text: "Karanlık enerjinin sabit olmadığı, zamanla uzayda değişen dinamik bir skaler alan olabileceğini öne süren teoridir." },
            { subtitle: "Büyük Donma (Big Freeze) Senaryosu", text: "Karanlık enerjinin etkisiyle galaksilerin birbirinden o kadar uzaklaşacağı ki gökyüzünde başka yıldız görünmeyeceği son aşamadır." },
            { subtitle: "Büyük Yırtılma (Big Rip) Hipotezi", text: "İvmelenmenin ilerleyen milyarlarca yılda o kadar artacağı ki atomların, gezegenlerin ve galaksilerin bile parçalanacağı uç senaryodur." },
            { subtitle: "Kozmik Mikrodalga Arka Plan Verileri", text: "Planck teleskopunun evrenin erken dönem kalıntılarından elde ettiği haritalarla karanlık enerjinin oranını hassas ölçmesidir." },
            { subtitle: "Karanlık Enerji Spektroskopik Envanteri", text: "DESI gibi modern gökyüzü tarama projeleriyle karanlık enerjinin zaman içindeki değişim karakterini çözme çalışmalarıdır." }
        ]
    },
    {
        id: "40-sicim-teorisi",
        cat: "physics",
        icon: "🎻",
        title: "40. Sicim Teorisi ve Çok Boyutlu Evren",
        desc: "Parçacıkların yerine enerji sicimlerini koyarak tüm evreni birleştiren teori.",
        subitems: [
            { subtitle: "Nokta Parçacıklardan Sicimlere", text: "Fiziğin temel taşlarının sıfır boyutlu nokta parçacıklar değil, bir boyutlu titreşen enerji sicimleri olduğunu savunan yaklaşımdır." },
            { subtitle: "Titreşim Modları ve Parçacıklar", text: "Sicimlerin farklı frekanslarda titreşmesiyle elektron, kuark ve foton gibi farklı temel parçacıkların ortaya çıkmasıdır." },
            { subtitle: "On Boyutlu Uzay-Zaman", text: "Matematiksel tutarlılık için evrenin bildiğimiz 4 boyutuna ek olarak kıvrılmış 6 ekstra küçük boyuta ihtiyaç duyulmasıdır." },
            { subtitle: "M-Teorisi ve 11 Boyut", text: "Farklı 5 ayrı sicim teorisinin ve süperkütle çekimin 11 boyutlu tek bir çatı altında birleştirildiği üst teoridir." },
            { subtitle: "Kompaktifikasyon (Kıvrılma)", text: "Ekstra boyutların insan gözünün göremeyeceği kadar küçük Calabi-Yau manifoldları içinde kıvrılıp saklanmasıdır." },
            { subtitle: "Süpersimetri Şartı", text: "Her fermiyonun bir bozon eşi olduğunu öngören ve sicim teorisinin matematiksel temellerini koruyan simetri ilkesidir." },
            { subtitle: "Kütle Çekim ve Kuantum Birleşmesi", text: "Genel görelilik ile kuantum mekaniğini aynı matematiksel çerçevede barındırabilen en güçlü aday teoridir." },
            { subtitle: "Branlar (Zarlar) ve Çoklu Evren", text: "Sicim teorisinde evrenimizin çok boyutlu uzayda süzülen çok sayıda 3-zar (brane) yapısından biri olabileceği fikridir." },
            { subtitle: "Deneysel Test Edilebilirlik Sorunu", text: "Sicimlerin boyutunun Planck ölçeğinde çok küçük olması nedeniyle doğrudan test edilmesinin günümüz teknolojisiyle imkansızlığıdır." },
            { subtitle: "Kozmik Sicim Kalıntıları", text: "Evrenin ilk evrelerinden kalmış olabilecek makroskobik uzunluktaki saf enerji sicimlerinin uzayda aranmasıdır." }
        ]
    },
    {
        id: "41-dongusel-kucuk-cekim",
        cat: "physics",
        icon: "🕸️",
        title: "41. Döngüsel Kütle Çekim Kuramı",
        desc: "Uzay-zamanın pürüzsüz değil, minik ilmeklerden örülü olduğunu savunan teori.",
        subitems: [
            { subtitle: "Uzay-Zamanın Atomik Yapısı", text: "Uzayın boş bir sahne olmadığını, aksine Planck boyutu ölçeğinde ilmeklerden (loops) ve ağlardan oluşan kesikli bir yapı olduğunu savunur." },
            { subtitle: "Arka Plan Bağımsızlığı", text: "Sicim teorisinden farklı olarak arka planda hazır bir uzay-zaman kabul etmeyip, uzayın kendisinin bu döngülerden türediğini iddia eder." },
            { subtitle: "Hacim ve Alan Kuantizasyonu", text: "Uzaydaki alan ve hacim değerlerinin sürekli olmadığını, sadece belirli kesikli minimum birimler (kuantalar) alabileceğini belirtir." },
            { subtitle: "Karlo Rovelli ve Lee Smolin Katkısı", text: "Teorinin matematiksel altyapısını geliştirerek genel görelilik ile kuantum mekaniğini uzay bağımsızlığında buluşturan fizikçilerdir." },
            { subtitle: "Büyük Sıçrama (Big Bounce)", text: "Kara deliklerin merkezinde veya evrenin başlangıcında çöküşün sonsuz yoğunluğa (tekilliğe) varmadan kuantum yasalarıyla tersine dönüp genişlemeye başladığı modeldir." },
            { subtitle: "Kara Delik Çekirdek Çözümü", text: "Döngüsel kütle çekimine göre kara deliklerin içine düşen bilginin yok olmadığını, kuantum sıçramasıyla dışarı aktarılabileceğini söyler." },
            { subtitle: "Sürekli Akış Yerine Ağ Örgüsü", text: "Fiziksel uzayın pürüzsüz görünümünün mikroskobik ölçekte su moleküllerinden oluşan okyanus gibi ağ örgülü bir yapı olmasıdır." },
            { subtitle: "Kuantum Geometri Denklemleri", text: "Genel göreliliğin Einstein denklemlerinin ilmek ağları üzerinden yeniden yazılması ve çözülme süreçleridir." },
            { subtitle: "Gözlemsel İmza Arayışları", text: "Erken evren ışımalarında döngüsel kütle çekiminin bırakabileceği olası polarizasyon izlerinin tespiti çalışmalarıdır." },
            { subtitle: "Kuantum Kütle Çekim Alternatifi", text: "Sicim teorisinin en büyük rakibi olarak kabul edilen ve ekstra boyutlara ihtiyaç duymayan teorik fizikin önemli dalıdır." },
        ]
    },
    {
        id: "42-planck-olcegi",
        cat: "physics",
        icon: "📏",
        title: "42. Planck Ölçeği ve Fizik Yasalarının Sınırı",
        desc: "Evrenin en küçük anlamlı mesafe, zaman ve enerji sınırları.",
        subitems: [
            { subtitle: "Planck Uzunluğu Değeri", text: "10 üzeri eksi 35 metre değerinde olan, fiziksel olarak iki nokta arasında ölçülebilecek en küçük anlamlı mesafe sınırıdır." },
            { subtitle: "Planck Zamanı Sınırı", text: "Işığın bir Planck uzunluğunu kat etmesi için geçen süre olan 10 üzeri eksi 43 saniye, evrenin ölçülebilir en kısa anıdır." },
            { subtitle: "Planck Kütlesi ve Enerjisi", text: "Mikroskobik bir hacimde devasa kütle çekim etkilerinin ortaya çıktığı, kuantum kütle çekimin devreye girdiği kritik enerji sınırıdır." },
            { subtitle: "Klasik Fiziğin Çöküş Noktası", text: "Planck ölçeğinin altına inildiğinde genel görelilik ile kuantum mekaniğinin denklemlerinin tamamen geçersiz hale gelmesi durumudur." },
            { subtitle: "Kuantum Köpüğü (Quantum Foam)", text: "John Wheeler'ın önerdiği üzere Planck ölçeğinde uzay-zaman dokusunun sürekli çalkantılı, kaynayan ve delikli bir yapı olmasıdır." },
            { subtitle: "Bilgi Saklama Kapasitesi", text: "Planck hacminin taşıyabileceği maksimum bilgi miktarının evrenin termodinamik sınırlarını belirlemesidir." },
            { subtitle: "Büyük Patlama Başlangıç Noktası", text: "Evrenin doğduğu ilk anda tüm kütlenin bir Planck hacmine sıkışmış olduğu varsayılan kuantum tekillik durumudur." },
            { subtitle: "Neden Daha Küçüğü Yoktur?", text: "Bir cismin konumunu o ölçekte ölçmeye çalışırken gereken foton enerjisinin o kadar büyük olması ki yeni bir kara delik yaratması engelidir." },
            { subtitle: "Fizikte Birleşme Hedefi", text: "Tüm temel kuvvetlerin Planck ölçeğinde tek bir kusursuz süper kuvvet olarak birleştiği varsayılan simetri durumudur." },
            { subtitle: "Evrenin Temel Piksel Sınırı", text: "Doğanın kesintisiz (analog) değil, Planck birimlerinden oluşan dijital bir piksel yapısına sahip olabileceği düşüncesidir." }
        ]
    },
    {
        id: "43-biyofizik",
        cat: "biophysics",
        icon: "🧠",
        title: "43. Biyofizik ve Sinirsel Ağ Dinamiği",
        desc: "Canlı sistemlerin ve beyin sinyallerinin fiziksel ve matematiksel ilkeleri.",
        subitems: [
            { subtitle: "Aksiyon Potansiyeli ve İyon Kanalları", text: "Nöron hücre zarlarında sodyum ve potasyum iyonlarının yer değiştirmesiyle elektriksel sinyallerin iletilme fiziksel sürecidir." },
            { subtitle: "Hodgkin-Huxley Denklemleri", text: "Sinir hücrelerindeki elektriksel potansiyel değişimlerini ve aksiyon sinyallerinin yayılmasını formüle eden Nobel ödüllü denklemlerdir." },
            { subtitle: "Biyolojik Termodinamik Kuralları", text: "Canlı organizmaların dışarıdan serbest enerji alarak entropiye karşı nasıl düzen kurduğunu inceleyen fiziksel biyolojidir." },
            { subtitle: "Protein Katlanma Dinamiği", text: "Amino asit zincirlerinin fiziksel enerji minimizasyonu ilkelerine göre saniyeler içinde üç boyutlu kusursuz şekiller almasıdır." },
            { subtitle: "Nöral Ağlarda Kaos ve Senkronizasyon", text: "Milyarlarca nötrona sahip beyin korteksinin aynı anda senkronize çalışarak bilinç ve hafıza süreçlerini oluşturmasıdır." },
            { subtitle: "Biyomekanik ve Kas Kasılması", text: "Aktin ve miyozin filamentlerinin moleküler motorlar gibi birbirini kaydırarak mekanik güç üretme ilkeleridir." },
            { subtitle: "Zar Potansiyeli ve Nernst Eşitliği", text: "Hücre içi ve dışındaki iyon konsantrasyon farklarının yarattığı elektriksel voltajın matematiksel hesaplama yöntemidir." },
            { subtitle: "EEG ve Beyin Dalgası Frekansları", text: "Beyindeki milyonlarca nöronun ortak elektriksel salınımlarının kafa derisinden alfa, beta ve gama dalgaları olarak ölçülmesidir." },
            { subtitle: "Biyolojik Nanomotorlar", text: "Hücre içinde ATP moleküllerini mekanik enerjiye çeviren dönme ve yürüme özellikli protein motorlarının çalışmasıdır." },
            { subtitle: "Optogenetik Işık Kontrolü", text: "Genetik olarak ışığa duyarlı hale getirilen nöronların lazer ışınları yardımıyla açılıp kapatılarak sinyal yollarının haritalanmasıdır." }
        ]
    },
    {
        id: "44-kuantum-biyoloji",
        cat: "biophysics",
        icon: "🌿",
        title: "44. Kuantum Biyoloji ve Fotosentez Mekanizmaları",
        desc: "Canlı organizmaların kuantum etkilerinden (tünelleme ve dolanıklık) yararlanma biçimleri.",
        subitems: [
            { subtitle: "Kuantum Tünelleme ve Enzimler", text: "Enzimlerin katalizlediği kimyasal tepkimelerde elektronların ve protonların bariyerleri delerek (tünelleme) hızla karşı tarafa geçmesidir." },
            { subtitle: "Fotosentezde Kuantum Verimliliği", text: "Bitkilerin güneş ışığından aldığı enerjiyi reaksiyon merkezine %100'e yakın bir verimle aktarırken kuantum süperpozisyondan yararlanmasıdır." },
            { subtitle: "Kuşların Manyetik Pusulası (Cryptochrome)", text: "Göçmen kuşların göz retinasındaki kriptokrom proteinlerindeki dolanık elektronlar sayesinde Dünya'nın manyetik alanını görsel olarak algılamasıdır." },
            { subtitle: "Koku Alma Mekanizması Titreşimi", text: "İnsan burnundaki koku reseptörlerinin moleküllerin kimyasal şeklinden ziyade yaydığı kuantum titreşim frekanslarını algıladığı teorisidir." },
            { subtitle: "DNA Mutasyonlarında Proton Tünellemesi", text: "DNA bazları arasındaki hidrojen bağlarında protonların kuantum tünellemesiyle yer değiştirerek spontane genetik mutasyonlara yol açmasıdır." },
            { subtitle: "Biyolojik Dekolerasyon (Decoherence)", text: "Canlı ılık ve sulu ortamlarda kuantum durumlarının çok hızlı bozulmasına rağmen organizmaların bunu nasıl koruduğunun gizemidir." },
            { subtitle: "Avian Navigasyon Dolanıklığı", text: "Kuşların yön bulma yeteneğinin zayıf manyetik alanlar altındaki kuantum dolanık radikal çift mekanizmalarıyla çalışmasıdır." },
            { subtitle: "Kuantum Biyolojisinin Doğuşu", text: "Fizikçi Erwin Schrödinger'in 'Yaşam Nedir?' kitabında canlıların kuantum düzeni koruyan yapılarına dair öncü öngörüleridir." },
            { subtitle: "Yapay Fotosentez Tasarımları", text: "Bitkilerin kuantum verimlilik mekanizmalarından ilham alınarak yüksek verimli güneş panelleri geliştirme mühendisliğidir." },
            { subtitle: "Biyokimyada Kuantum Etki Sınırları", text: "Makroskobik canlıların içinde kuantum mekaniğinin ne dereceye kadar işlevsel olabileceğine dair deneysel laboratuvar testleridir." }
        ]
    },
    {
        id: "45-yapay-zeka-fizik",
        cat: "technology",
        icon: "🤖",
        title: "45. Yapay Zeka ve Fizik Simülasyonları",
        desc: "Yapay zeka modellerinin fizik yasalarını öğrenme ve simüle etme gücü.",
        subitems: [
            { subtitle: "Fizik Bilinçli Sinir Ağları (PINN)", text: "Yapay zeka modellerine verilerden öğrenirken aynı zamanda Navier-Stokes gibi temel fizik denklemlerine uyma zorunluluğunun getirilmesidir." },
            { subtitle: "AlphaFold ve Protein Katlanması", text: "DeepMind'ın yapay zekasının binlerce proteinin üç boyutlu katlanma yapılarını milisaniyeler içinde kusursuz tahmin etmesi devrimidir." },
            { subtitle: "Hava Durumu ve İklim Tahmini Modelleri", text: "GraphCast gibi yapay zeka sistemlerinin geleneksel sayısal simülasyonlardan bin kat hızlı ve doğru küresel hava tahmini yapmasıdır." },
            { subtitle: "Plazma Kontrolü ve Tokamak Yapay Zekası", text: "Füzyon reaktörlerindeki 100 milyon derecelik kararsız plazmayı milisaniyelik reflekslerle manyetik alanlarla kontrol eden yapay zeka algoritmalarıdır." },
            { subtitle: "Kuantum Kimyası ve Molekül Tasarımı", text: "Yapay zeka modellerinin yeni ilaç moleküllerini ve süperiletken alaşımları laboratuvar testine gerek kalmadan simüle etmesidir." },
            { subtitle: "Kozmolojik Veri Analizi ve Haritalama", text: "Evrenin devasa teleskop verilerindeki karanlık madde dağılımlarını ve galaksi kümelerini yapay zeka ile otomatik sınıflandırmadır." },
            { subtitle: "Akışkanlar Mekaniği Optimizasyonu", text: "Uçak kanatları ve araç gövdelerinin hava direncini minimuma indirecek aerodinamik şekillerinin yapay zeka ile evrimsel tasarlanmasıdır." },
            { subtitle: "Malzeme Biliminde Keşif Hızı", text: "Milyonlarca olası kristal yapısını tarayarak geleceğin pil teknolojileri için en uygun katı hal elektrolitlerini bulma süreçleridir." },
            { subtitle: "Parçacık Fiziği Çarpışma Filtreleme", text: "CERN dedektörlerinde saniyede milyarlarca çarpışma verisinden sadece en değerli anormallikleri ayırt eden yapay zeka filtreleridir." },
            { subtitle: "Bilimsel Keşiflerin Otomasyonu", text: "Yapay zekanın sadece veri analiz etmekle kalmayıp yeni fizik hipotezleri üretebilecek düzeye gelme evrimidir." }
        ]
    },
    {
        id: "46-blokzincir-ve-akilli-sozlesmeler",
        cat: "technology",
        icon: "⛓️",
        title: "46. Blokzincir ve Akıllı Sözleşmeler",
        desc: "Merkeziyetsiz veri tabanları ve güvenli dijital mutabakat sistemleri.",
        subitems: [
            { subtitle: "Kriptografik Hash Zincirleri", text: "Her bloğun bir önceki bloğun şifreli özetini (hash) içermesiyle verilerin geriye dönük değiştirilememesini sağlayan yapıdır." },
            { subtitle: "Akıllı Sözleşmeler (Smart Contracts)", text: "Önceden belirlenen şartlar yerine getirildiğinde otomatik olarak çalışan ve aracıları ortadan kaldıran kod bloklarıdır." },
            { subtitle: "Konsensüs (Mutabakat) Mekanizmaları", text: "Ağın güvenliğini sağlamak ve işlemlerin geçerliliğini onaylamak için kullanılan Proof of Work ve Proof of Stake gibi protokollerdir." },
            { subtitle: "Merkeziyetsiz Finans (DeFi)", text: "Geleneksel bankacılık sistemine ihtiyaç duymadan kripto varlıklar üzerinden borç alma, verme ve ticaret yapma sistemidir." },
            { subtitle: "Sıfır Bilgi Kanıtları (Zero-Knowledge Proofs)", text: "Bir bilginin doğruluğunu, bilginin kendisini açık etmeden karşı tarafa kanıtlama imkanı veren ileri düzey gizlilik teknolojisidir." },
            { subtitle: "Dağıtık Defter Teknolojisi (DLT)", text: "Verilerin tek bir merkezde değil, dünya genelindeki binlerce düğümde (node) eş zamanlı ve şeffaf şekilde saklanmasıdır." },
            { subtitle: "Tokenizasyon ve Dijital Varlıklar", text: "Fiziksel veya dijital varlıkların mülkiyet haklarının blokzincir üzerinde benzersiz token'lara (NFT vb.) dönüştürülmesidir." },
            { subtitle: "Ölçeklenebilirlik ve Katman Mimarileri", text: "Blokzincir ağlarının işlem hızını artırmak için geliştirilen Lightning Network ve Rollup gibi ikinci katman çözümleridir." },
            { subtitle: "Kurumsal Blokzincir Entegrasyonları", text: "Tedarik zinciri takibi ve lojistik süreçlerinde şeffaflık ve güven sağlamak için kurumsal düzeyde kullanılan ağlardır." },
            { subtitle: "Geleceğin Dijital Kimlik Altyapısı", text: "Kullanıcıların kendi verilerinin kontrolünü tamamen elinde tuttuğu merkeziyetsiz kimlik doğrulama sistemleridir." }
        ]
    },
    {
        id: "47-neuromorfik-bilgisayarlar",
        cat: "technology",
        icon: "🧠",
        title: "47. Nöromorfik Bilgisayarlar ve Beyin Çipleri",
        desc: "İnsan beyninin çalışma prensiplerini taklit eden yeni nesil işlemci mimarileri.",
        subitems: [
            { subtitle: "Biyolojik Mimari Taklidi", text: "Geleneksel Von Neumann mimarisinden farklı olarak hafıza ve işlem birimlerinin nöronlar gibi iç içe ve paralel tasarlandığı sistemlerdir." },
            { subtitle: "Spiking (Dürtüsel) Sinir Ağları", text: "Yapay nöronların sadece belirli bir elektrik eşiği aşıldığında sinyal (spike) üretmesiyle enerji tasarrufu sağlayan modeldir." },
            { subtitle: "Intel Loihi ve IBM TrueNorth", text: "Dünyanın önde gelen nöromorfik çip projeleri olup, milyonlarca yapay sinir hücresini düşük güç tüketimiyle simüle eder." },
            { subtitle: "Düşük Güç Tüketimi Avantajı", text: "İnsan beyninin sadece 20 watt enerjiyle yaptığı karmaşık hesaplamaları dijital dünyada mümkün kılma çabasıdır." },
            { subtitle: "Beyin-Bilgisayar Arayüzleri (BCI)", text: "İnsan beyni ile harici cihazlar arasında doğrudan sinyal akışı sağlayarak nölojik engelleri aşma teknolojileridir." },
            { subtitle: "Neuralink ve İmplant Teknolojileri", text: "Kafa derisine veya doğrudan beyin dokusuna yerleştirilen hassas elektrot dizileriyle düşünce hızında veri aktarımı hedefler." },
            { subtitle: "Olay Tabanlı Sensörler (Event-based)", text: "Sadece görüntüde bir değişiklik olduğunda piksel bazında veri üreten, biyonik göz benzeri kameralardır." },
            { subtitle: "Gerçek Zamanlı Öğrenme Yeteneği", text: "Çiplerin harici bulut sunucularına bağlanmadan, anlık deneyimlerle kendi üzerindeki sinaps bağlarını güncelleyebilmesidir." },
            { subtitle: "Nöro-Robotik Entegrasyonu", text: "Robotların insan reflekslerine benzer şekilde anlık ve sezgisel hareket kabiliyetleri kazanmasını sağlar." },
            { subtitle: "Bilişsel Bilgisayar Çağı", text: "Yapay zekanın sadece yazılım olmaktan çıkıp, donanımsal olarak da biyolojik beyinlere yaklaşma evresidir." }
        ]
    },
    {
        id: "48-gen-duzenleme-crispr",
        cat: "biotechnology",
        icon: "🧬",
        title: "48. Gen Düzenleme ve CRISPR-Cas9 Teknolojisi",
        desc: "DNA dizilimlerini hassas bir şekilde kesip değiştirme imkanı sunan devrimci biyoteknoloji.",
        subitems: [
            { subtitle: "Bakteriyel Bağışıklık Kökeni", text: "CRISPR sisteminin aslında bakterilerin virüslere karşı kullandığı doğal bir savunma mekanizmasından ilham alınarak keşfedilmesidir." },
            { subtitle: "Cas9 Enzimi ve Kılavuz RNA", text: "Kılavuz RNA'nın hedef DNA dizisini bulması ve Cas9 enziminin o bölgeyi makas gibi hassas bir şekilde kesmesidir." },
            { subtitle: "Genetik Hastalıkların Tedavisi", text: "Orak hücreli anemi ve musküler distrofi gibi kalıtsal genetik bozuklukların kökten düzeltilmesi potansiyelidir." },
            { subtitle: "Embriyonik Gen Düzenleme Tartışmaları", text: "İnsan embriyoları üzerinde yapılan genetik müdahalelerin doğurabileceği etik ve biyogüvenlik riskleridir." },
            { subtitle: "Tarımda Dayanıklı Ürünler", text: "İklim krizine, kuraklığa ve zararlı böceklere karşı dirençli gıda bitkilerinin laboratuvarda geliştirilmesidir." },
            { subtitle: "Gen Sürücüsü (Gene Drive) Teknolojisi", text: "Belirli genetik özellikleri popülasyonda hızla yayarak sıtma taşıyan sivrisineklerin neslini türetme projeleridir." },
            { subtitle: "Epigenetik Modifikasyonlar", text: "DNA dizilimini değiştirmeden, genlerin açılıp kapanma mekanizmalarını (metilasyon) kontrol etme yöntemleridir." },
            { subtitle: "Biyogüvenlik ve Düzenlemeler", text: "Genetiği değiştirilmiş organizmaların doğaya salınmasının ekosistem üzerindeki uzun vadeli etkilerinin denetlenmesidir." },
            { subtitle: "Kişiselleştirilmiş Gen Tedavileri", text: "Kireçlenme veya kanser gibi hastalıklarda hastanın kendi DNA yapısına özel genetik onarım planlarıdır." },
            { subtitle: "Sentetik Genom Projeleri", text: "Doğal organizmaların genetik kodlarının sıfırdan sentetik olarak tasarlanıp laboratuvarda üretilme aşamasıdır." }
        ]
    },
    {
        id: "49-uzay-kolonizasyonu",
        cat: "astronomy",
        icon: "🚀",
        title: "49. Uzay Kolonizasyonu ve Mars'ta Yaşam",
        desc: "İnsanlığın çok gezegenli bir tür haline gelme yolundaki yerleşim projeleri.",
        subitems: [
            { subtitle: "Mars'ın Yaşanabilirlik Şartları", text: "Kızıl Gezegen'in atmosferi, su kaynakları ve yüzey radyasyonu koşullarının insan yerleşimine uyarlanmasıdır." },
            { subtitle: "Terraforming (Dünyalaştırma)", text: "Mars gibi kurak ve soğuk gezegenlerin atmosfer basıncını ve sıcaklığını artırarak Dünya'ya benzer hale getirme teorisidir." },
            { subtitle: "Yeniden Kullanılabilir Roketler", text: "SpaceX Starship gibi sistemlerle uzaya taşımacılık maliyetlerinin dramatik biçimde düşürülmesidir." },
            { subtitle: "Ay Üssü ve Artemis Projeleri", text: "Ay'ın güney kutbunda kalıcı su buzları üzerinde kurulacak bilim ve yakıt ikmal istasyonu hazırlıklarıdır." },
            { subtitle: "Uzay Tarımı ve Hidroponik Sistemler", text: "Topraksız tarım ve yapay LED ışıklar altında uzay üslerinde taze gıda üretim teknolojileridir." },
            { subtitle: "Kapalı Çevre Yaşam Destek Sistemleri", text: "Oksijenin, suyun ve atıkların yüzde yüz geri dönüştürüldüğü ekosistem kabinlerinin tasarlanmasıdır." },
            { subtitle: "Düşük Yerçekimi Sağlık Sorunları", text: "Uzay ortamında uzun süre kalmanın kemik erimesi ve kas kaybı gibi fizyolojik etkileriyle mücadeledir." },
            { subtitle: "Radyoaktif Kalkan Mühendisliği", text: "Kozmik ışınlardan ve güneş fırtınalarından korunmak için yeraltı tüp habitatlarının inşa edilmesidir." },
            { subtitle: "Ticari Uzay İstasyonları", text: "Uluslararası Uzay İstasyonu'nun (ISS) emekliye ayrılmasıyla özel şirketlerin kuracağı yörünge otelleridir." },
            { subtitle: "Gezegenlerarası Medeniyet Vizyonu", text: "İnsanlığın olası küresel felaketlere karşı hayatta kalabilmesini sağlayacak çok gezegenli yaşam modelidir." }
        ]
    },
    {
        id: "50-otonom-sistemler",
        cat: "technology",
        icon: "🚗",
        title: "50. Otonom Sistemler ve İnsansız Araçlar",
        desc: "İnsan müdahalesi olmadan çevrelerini algılayıp kararlar alabilen akıllı makineler.",
        subitems: [
            { subtitle: "Otonom Sürüş Seviyeleri", text: "0'dan 5'e kadar sınıflandırılan ve tam otonomiye (direksiyonsuz araçlar) geçişi tanımlayan uluslararası standartlardır." },
            { subtitle: "LiDAR ve Sensör Füzyonu", text: "Lazer ışınları (LiDAR), kameralar ve radarlardan gelen verilerin yapay zeka ile birleştirilerek 3D çevre haritası çıkarılmasıdır." },
            { subtitle: "SLAM Algoritması", text: "Araçların yabancı bir ortamda hem eş zamanlı olarak kendi konumunu bulması (Localization) hem de haritalandırma (Mapping) yapmasıdır." },
            { subtitle: "İnsansız Hava Araçları (İHA/Drone)", text: "Askeri, lojistik ve tarımsal alanlarda otonom rota takibi yaparak yük taşıyan ve haritalayan uçan sistemlerdir." },
            { subtitle: "Otonom Deniz Taşıtları", text: "Okyanuslarda yük taşıyan, oşinografik araştırmalar yapan uzaktan kumandalı veya yapay zeka kaptanlı gemilerdir." },
            { subtitle: "Robotaksi ve Paylaşımlı Ulaşım", text: "Şehir içi yolcu taşımacılığında şoförsüz hizmet veren ticari otonom araç filolarıdır." },
            { subtitle: "Etik ve Karar Algoritmaları", text: "Trafik kazası kaçınılmaz olduğunda otonom aracın vereceği kararların ahlaki ve hukuki programlama boyutudur." },
            { subtitle: "Son Mil Teslimat Robotları", text: "Kargo ve yemek siparişlerini şehir içi kaldırımlardan yürüyerek alıcının kapısına usta ellerle getiren robotlardır." },
            { subtitle: "Otonom Tarım Makineleri", text: "Tarlaları GPS destekli haritalarla süren, ilaçlayan ve mahsulü insan eli değmeden toplayan akıllı traktörlerdir." },
            { subtitle: "Hava Trafik Yönetimi (UTM)", text: "Milyonlarca otonom drone ve uçan aracın şehir semalarında çarpışmadan uçmasını sağlayan dijital kontrol ağlarıdır." }
        ]
    },
    {
        id: "51-biyometrik-guvenlik",
        cat: "technology",
        icon: "👁️",
        title: "51. Biyometrik Güvenlik ve Dijital Kimlik",
        desc: "Bireylerin fiziksel ve davranışsal özellikleriyle benzersiz olarak tanınması.",
        subitems: [
            { subtitle: "Yüz Tanıma ve Derin Öğrenme", text: "Kamera görüntülerindeki yüz hatlarını binlerce referans noktasıyla analiz ederek kimlik doğrulaması yapan sistemlerdir." },
            { subtitle: "Parmak İzi ve Avuç İçi Tarama", text: "Deri altındaki damar yapılarını veya parmak izi kıvrımlarını optik/ultrasonik sensörlerle okuma teknolojisidir." },
            { subtitle: "İris ve Retina Taramaları", text: "Gözün renkli kısmındaki (iris) karmaşık desenlerin benzersizliğinden yararlanan en yüksek güvenlikli kimlik doğrulamadır." },
            { subtitle: "Davranışsal Biyometri", text: "Kullanıcının klavyeyi tuşlama hızı, akıllı telefonu tutuş açısı veya yürüyüş ritmi gibi alışkanlıklarıyla tanınmasıdır." },
            { subtitle: "Ses Doğrulama Sistemleri", text: "Ses tonunun frekans bileşenlerini analiz ederek telefon bankacılığı ve güvenlik sistemlerinde kimlik tespiti yapılmasıdır." },
            { subtitle: "Mahremiyet ve Veri Güvenliği", text: "Milyonlarca insanın hassas biyometrik verilerinin merkezi sunucularda saklanmasının yarattığı siber güvenlik riskleridir." },
            { subtitle: "Deepfake ve Biyometrik Tehditler", text: "Yapay zeka ile üretilen sahte yüz ve ses videolarının biyometrik güvenlik sistemlerini yanıltma tehlikesidir." },
            { subtitle: "Temassız Biyometrik Geçişler", text: "Havaalanları ve resmi binalarda kuyrukları kaldıran yüksek hızlı yürüyerek geçiş kapı sistemleridir." },
            { subtitle: "Merkeziyetsiz Biyometrik Kimlik", text: "Verilerin şifrelenerek sadece kullanıcının kendi cihazında saklandığı güvenli kimlik doğrulama modelleridir." },
            { subtitle: "Geleceğin Şifresiz Dünyası", text: "Karmaşık şifrelerin ve PIN kodlarının yerini tamamen biyometrik doğrulama katmanlarının almasıdır." }
        ]
    },
    {
        id: "52-bulut-bilisim-mimarileri",
        cat: "technology",
        icon: "☁️",
        title: "52. Bulut Bilişim ve Dağıtık Sistem Mimarileri",
        desc: "Verilerin ve işlem gücünün devasa veri merkezlerinde merkeziyetsiz olarak sunulması.",
        subitems: [
            { subtitle: "IaaS, PaaS ve SaaS Modelleri", text: "Altyapı, platform ve yazılımın hizmet olarak internet üzerinden esnek bir şekilde kiralanması mimarisidir." },
            { subtitle: "Mikroservis Mimarisi", text: "Büyük uygulamaların birbirine bağımlı olmayan küçük, bağımsız çalışan servisler şeklinde tasarlanmasıdır." },
            { subtitle: "Konteyner ve Docker Teknolojisi", text: "Uygulamaların tüm bağımlılıklarıyla birlikte izole paketler halinde her ortamda hatasız çalışmasını sağlayan sistemdir." },
            { subtitle: "Kubernetes ile Otomatik Yönetim", text: "Yüzlerce konteynerin yük durumuna göre otomatik olarak ölçeklenmesini ve yönetimini sağlayan orkestrasyon aracıdır." },
            { subtitle: "Sunucusuz Bilişim (Serverless)", text: "Geliştiricilerin sunucu yönetimiyle uğraşmadan sadece kod yazıp, çalıştığı kadar ödeme yaptığı bulut modelidir." },
            { subtitle: "Edge Computing (Uç Bilişim)", text: "Verilerin uzak bulut merkezlerine gitmeden, cihazın hemen yakınındaki uç sunucularda işlenerek gecikmenin azaltılmasıdır." },
            { subtitle: "Global Veri Merkezleri", text: "Kutup bölgelerine veya okyanus tabanlarına kurulan, devasa soğutma sistemlerine sahip enerji verimli sunucu tesisleridir." },
            { subtitle: "Yüksek Erişilebilirlik ve Felaket Kurtarma", text: "Sistemlerin bir veri merkezi çöktüğünde bile anında diğer bölgeden kesintisiz çalışmaya devam etme yeteneğidir." },
            { subtitle: "Bulut Güvenliği ve Şifreleme", text: "Bulutta depolanan hassas verilerin uçtan uca şifrelenerek yetkisiz erişimlere karşı korunmasıdır." },
            { subtitle: "Multi-Cloud Stratejileri", text: "Şirketlerin verilerini tek bir bulut sağlayıcısına bağımlı kalmadan birden fazla sağlayıcı arasında paylaştırmasıdır." }
        ]
    },
    {
        id: "53-metaverse-ve-vr",
        cat: "technology",
        icon: "🥽",
        title: "53. MetaVerse ve Sanal Gerçeklik Dünyaları",
        desc: "Fiziksel ve dijital gerçekliğin birleştiği sürükleyici 3 boyutlu ortak internet evreni.",
        subitems: [
            { subtitle: "Sanal Gerçeklik (VR) Başlıkları", text: "Kullanıcıyı tamamen dış dünyadan izole ederek 360 derece dijital ortamlara daldıran gözlük teknolojileridir." },
            { subtitle: "Artırılmış Gerçeklik (AR) Entegrasyonu", text: "Gerçek dünya görüşünün üzerine dijital bilgi, nesne ve grafiklerin anlık olarak bindirilmesi sistemidir." },
            { subtitle: "Karma Gerçeklik (MR) Deneyimi", text: "Sanal nesnelerin gerçek dünyadaki fiziksel nesnelerle etkileşime girebildiği gelişmiş görsel teknolojidir." },
            { subtitle: "Dijital Avatarlar ve Kimlikler", text: "Kullanıcıların sanal evrende kendilerini temsil etmek için kullandıkları 3 boyutlu özelleştirilebilir karakterlerdir." },
            { subtitle: "Haptik (Dokunma) Eldivenleri", text: "Sanal dünyadaki nesnelere dokunulduğunda kullanıcıya direnç ve sıcaklık hissederek gerçekçilik katan giyilebilir teknolojidir." },
            { subtitle: "3D Web ve Grafik Motorları", text: "Unreal Engine ve Unity gibi güçlü motorlar sayesinde web tarayıcılarında çalışan akıcı sanal dünyaların oluşturulmasıdır." },
            { subtitle: "Sanal Gayrimenkul ve Ekonomiler", text: "Metaverse evrenlerinde arsa alım satımı ve dijital para birimleriyle ticaret yapılması ekonomisidir." },
            { subtitle: "Uzaktan Çalışma ve Toplantı Alanları", text: "Farklı kıtalardaki ekiplerin aynı sanal odada avatarlarıyla bir araya gelerek ortak çalışmalar yürütmesidir." },
            { subtitle: "Sanal Eğitim ve Simülasyonlar", text: "Tıp öğrencilerinin sanal ortamda ameliyat pratiği yapması veya pilotların uçuş eğitimi alması süreçleridir." },
            { subtitle: "Birlikte Çalışabilirlik (Interoperability)", text: "Farklı şirketlerin sanal dünyaları arasında avatarların ve varlıkların sorunsuz seyahat edebilmesi standardizasyonudur." }
        ]
    },
    {
        id: "54-akilli-sebekeler",
        cat: "technology",
        icon: "⚡",
        title: "54. Yenilenebilir Enerji Şebekeleri ve Akıllı Gridler",
        desc: "Elektrik enerjisi üretim ve tüketimini dijital olarak optimize eden akıllı altyapılar.",
        subitems: [
            { subtitle: "Çift Yönlü Enerji Akışı", text: "Evlerin çatısındaki güneş panellerinden fazla elektriğin ana şebekeye geri satılabilmesini sağlayan akıllı sistemdir." },
            { subtitle: "Akıllı Sayaçlar (Smart Meters)", text: "Tüketim verilerini anlık olarak merkezî sisteme bildiren ve fiyat tarifelerine göre otomatik tasarruf sağlayan sayaçlardır." },
            { subtitle: "Yenilenebilir Enerji Entegrasyonu", text: "Rüzgar ve güneş gibi kesintili enerji kaynaklarının üretim dalgalanmalarını şebekede dengeleme mühendisliğidir." },
            { subtitle: "Büyük Ölçekli Batarya Depolama", text: "Üretimin fazla olduğu saatlerde elektriği depolayıp, talebin zirve yaptığı anlarda şebekeye veren dev lityum/akış bataryalarıdır." },
            { subtitle: "Elektrikli Araç V2G Teknolojisi", text: "Park halindeki elektrikli otomobillerin bataryalarındaki enerjinin ihtiyaç anında şebekeye geri verilebilmesidir." },
            { subtitle: "Yapay Zeka ile Yük Tahmini", text: "Hava durumu tahminleri ve geçmiş tüketim verilerine bakılarak enerji arz ve talebinin milisaniyeler içinde optimize edilmesidir." },
            { subtitle: "Mikroşebekeler (Microgrids)", text: "Küçük yerleşim yerlerinin veya fabrikaların ana şebekeden bağımsız olarak kendi enerjisini üretip yönetebildiği sistemlerdir." },
            { subtitle: "Şebeke Güvenliği ve Siber Savunma", text: "Enerji altyapılarının uzaktan siber saldırılara ve kesinti girişimlerine karşı yapay zeka ile korunmasıdır." },
            { subtitle: "Dağıtık Enerji Kaynakları", text: "Merkezi dev santraller yerine binlerce küçük ölçekli yeşil enerji üreticisinin bir arada çalıştığı sistem mimarisidir." },
            { subtitle: "Karbon Nötr Şehir Hedefleri", text: "Akıllı şebekelerin yaygınlaşmasıyla metropollerin karbon salınımlarını sıfıra indirme stratejisinin temel taşı olmasıdır." }
        ]
    },
    {
        id: "55-biyonik-organlar",
        cat: "biotechnology",
        icon: "🦾",
        title: "55. Biyonik Organlar ve Nöro-Prostetikler",
        desc: "İnsan vücudunun kaybedilen işlevlerini geri kazandıran mekanik ve biyolojik implantlar.",
        subitems: [
            { subtitle: "Düşünceyle Kontrol Edilen Protezler", text: "Ampute bireylerin kaslarından gelen zayıf elektrik sinyallerini algılayarak hareket eden robotik kollar ve bacaklardır." },
            { subtitle: "Biyonik Gözler ve Retinal İmplantlar", text: "Görme yetisini yitirmiş kişilere kameralardan gelen görüntüleri elektrik sinyallerine çevirerek aktaran sistemlerdir." },
            { subtitle: "Yapay Kalp ve Kan Pompaları", text: "Kalp yetmezliği yaşayan hastalar için sürekli ve titreşimsiz kan akışı sağlayabilen titanyum pompa mekanizmalarıdır." },
            { subtitle: "Koklear İmplantlar (Biyonik Kulak)", text: "İç kulaktaki hasarlı sinirleri baypas ederek doğrudan işitme sinirini uyaran ses dönüştürücü cihazlardır." },
            { subtitle: "Yapay Pankreas Sistemleri", text: "Diyabet hastaları için kan şekerini sürekli ölçüp otomatik olarak insülin salgılayan akıllı pompa cihazlarıdır." },
            { subtitle: "Biyouyumluluk ve Nano-Kaplamalar", text: "İnsan vücudunun mekanik implantları yabancı madde olarak reddetmesini önleyen özel yüzey teknolojileridir." },
            { subtitle: "Yenilenebilir Biyomateryaller", text: "Laboratuvarda hastanın kendi hücreleriyle üretilen dokuların organ iskelesi üzerine giydirilmesi yöntemidir." },
            { subtitle: "Sinirsel Geri Bildirim (Feedback)", text: "Biyonik el ile tutulan bir nesnenin sertliğini veya sıcaklığını kullanıcının beynine sinyal olarak geri göndermesidir." },
            { subtitle: "Yapay Karaciğer ve Böbrek Projeleri", text: "Vücudun toksin filtreleme ve metabolik temizlik görevlerini üstlenen taşınabilir biyolojik reaktörlerdir." },
            { subtitle: "Gelişmiş İnsan Yetenekleri", text: "Gelecekte biyonik organların sadece tedavi için değil, fiziksel gücü ve duyuları artırmak için de kullanılma potansiyelidir." }
        ]
    },
    {
        id: "56-uzay-teleskoplari",
        cat: "astronomy",
        icon: "🔭",
        title: "56. Uzay Teleskopları ve Derin Uzay Gözlemleri",
        desc: "Atmosferin engelleyici etkisinden uzakta evrenin sırlarını çözen optik devrim.",
        subitems: [
            { subtitle: "James Webb Uzay Teleskobu (JWST)", text: "Kızılötesi dalga boylarında gözlem yaparak ilk galaksilerin doğuşunu ve ötegezegen atmosferlerini inceleyen dev aynalı teleskoptur." },
            { subtitle: "Hubble'ın Mirası", text: "Otuz yılı aşkın süredir evrenin genişleme hızını, bulutsuları ve galaksi birleşmelerini gözlemleyerek çığır açan optik teleskoptur." },
            { subtitle: "Kızılötesi Gözlem Üstünlüğü", text: "Kozmik toz bulutlarının arkasını görebilme ve evrenin ilk dönemlerinden gelen kırmızıya kaymuş ışıkları yakalama yeteneğidir." },
            { subtitle: "Beryllium Ayna Teknolojisi", text: "Hafif ve aşırı soğuk uzay koşullarında formunu koruyan altıgen altın kaplama ayna segmentlerinin birleştirilmesidir." },
            { subtitle: "Lagrange Noktası (L2) Yerleşimi", text: "Dünya'nın güneş etrafındaki yörüngesinde yerçekimi dengesinin sağlandığı, ısı ve ışık yalıtımı için ideal olan 1.5 milyon kilometre uzaktaki konumdur." },
            { subtitle: "Ötegezegen Atmosfer Analizi", text: "Yıldızlarının önünden geçen ötegezegenlerin ışık süzüntülerinden su buharı ve metan gibi yaşam izlerinin spektroskopik tespitiidir." },
            { subtitle: "Evrenin Karanlık Çağı", text: "Büyük Patlama'dan sonra ilk yıldızların ve galaksilerin oluşmaya başladığı karanlık dönemin teleskoplarla aydınlatılmasıdır." },
            { subtitle: "Geleceğin Nancy Grace Roman Uzay Teleskobu", text: "Geniş alan tarama kapasitesiyle karanlık enerjinin doğasını ve binlerce yeni ötegezegeni keşfetmek için tasarlanan yeni nesil araçtır." },
            { subtitle: "Kritik Güneş Kalkanı Sistemi", text: "JWST'nin hassas kızılötesi ekipmanlarını Güneş ve Dünya'nın ısısından koruyan dev katmanlı yansıtıcı folyo şemsiyeleridir." },
            { subtitle: "Kozmik Evrimin Haritalandırılması", text: "Milyarlarca ışık yılı uzaklıktaki galaksilerin konumları incelenerek evrenin 13.8 milyar yıllık tarihinin adım adım çözülmesidir." }
        ]
    },
    {
        id: "57-kuresel-iklim-modelleri",
        cat: "cosmology",
        icon: "🌍",
        title: "57. Küresel İklim Modelleme ve Atmosferik Simülasyonlar",
        desc: "Dünya'nın iklim dinamiklerini ve gelecek senaryolarını öngören süper bilgisayar simülasyonları.",
        subitems: [
            { subtitle: "Atmosferik Sirkülasyon Modelleri", text: "Hava akımlarının, basınç merkezlerinin ve rüzgar sistemlerinin termodinamik denklemlerle küresel ölçekte modellenmesidir." },
            { subtitle: "Okyanus Akıntıları ve Termohalin Döngü", text: "Dünya'nın ısı dengesini koruyan okyanus sirkülasyonunun ve derin deniz akıntılarının simülasyon hesaplamalarıdır." },
            { subtitle: "Sera Gazı Radyatif Zorlaması", text: "Karbondioksit ve metan gibi gazların güneşten gelen ısının uzaya geri yansımasını engelleme oranının matematiksel formülasyonudur." },
            { subtitle: "Buzul Dinamikleri ve Deniz Seviyesi", text: "Kutuplardaki buz örtülerinin erime hızlarının ve okyanus seviyesi yükselme projeksiyonlarının takip edilmesidir." },
            { subtitle: "IPCC Raporları ve Bilimsel Konsensüs", text: "Dünya genelindeki binlerce iklim bilimcinin verilerini birleştirerek hazırladığı küresel ısınma risk raporlarıdır." },
            { subtitle: "Geri Besleme Döngüleri (Feedback)", text: "Permafrost erimesiyle açığa çıkan metanın ısınmayı daha da artırması gibi zincirleme iklim tepki mekanizmalarının analizidir." },
            { subtitle: "Aşırı Hava Olayları Tahminleri", text: "Küresel ısınmanın etkisiyle şiddeti artan kasırgaların, kuraklıkların ve sellerin yapay zeka ile önceden modellenmesidir." },
            { subtitle: "Paleoklimatoloji ve Geçmiş Veriler", text: "Buzul çekirdekleri ve ağaç halkaları incelenerek yüz binlerce yıllık geçmiş iklim döngülerinin günümüz modelleriyle karşılaştırılmasıdır." },
            { subtitle: "Jeomühendislik Çözüm Önerileri", text: "Güneş ışınlarını uzaya geri yansıtacak aerosol püskürtme gibi yapay iklim müdahalesi projelerinin simüle edilmesidir." },
            { subtitle: "Sürdürülebilir Karbon Bütçesi", text: "Küresel sıcaklık artışını 1.5 derece sınırında tutabilmek için insanlığın harcayabileceği kalan maksimum karbon miktarının hesaplanmasıdır." }
        ]
    },
    {
        id: "58-robotik-ve-ekosistemler",
        cat: "technology",
        icon: "🤖",
        title: "58. Gelişmiş Robotik ve İnsansı Makineler",
        desc: "Çevresiyle etkileşime giren, öğrenen ve fiziksel işleri üstlenen yapay zekalı robotlar.",
        subitems: [
            { subtitle: "İnsansı (Humanoid) Robot Mimarisi", text: "İki ayak üzerinde dengede durabilen, insan elleriyle karmaşık aletleri kullanabilen robotik gövde tasarımlarıdır." },
            { subtitle: "Boston Dynamics ve Dinamik Denge", text: "Zorlu zeminlerde koşabilen, takla atabilen ve dışarıdan gelen darbelere karşı dengesini anında koruyan robot sistemleridir." },
            { subtitle: "Tesla Optimus ve Endüstriyel Entegrasyon", text: "Fabrikalardaki monoton ve tehlikeli işleri insan gücüyle rekabet edecek maliyetlerle üstlenmesi hedeflenen robot projesidir." },
            { subtitle: "Hidrolik ve Elektrikli Aktüatörler", text: "Robot eklemlerinin yüksek tork ve hassasiyetle hareket etmesini sağlayan motor ve sıvı basınç sistemleridir." },
            { subtitle: "Kuvvet Geri Beslemeli Tutucular", text: "Yumuşak bir yumurtayı kırmadan tutabilen veya ağır bir demir çubuğu kavrayabilen akıllı robot parmak teknolojileridir." },
            { subtitle: "Sürü (Swarm) Robotik Sistemleri", text: "Yüzlerce küçük robotun aralarında merkeziyetsiz iletişim kurarak karınca kolonisi gibi ortak görevler üstlenmesidir." },
            { subtitle: "Endüstriyel Otomasyon ve Cobot'lar", text: "Fabrika bantlarında insanlarla doğrudan yan yana çalışabilen, güvenlik sensörlü işbirlikçi robotlardır." },
            { subtitle: "Arama-Kurtarma Robotları", text: "Deprem ve nükleer sızıntı gibi insan girişinin tehlikeli olduğu dar ve yıkık alanlara girerek hayat kurtaran sistemlerdir." },
            { subtitle: "Robot Etiği ve Hukuksal Boyut", text: "Gelişmiş yapay zekaya sahip robotların toplumsal yaşamdaki sorumluluklarının ve haklarının yasal çerçevesidir." },
            { subtitle: "Ev Tipi Yardımcı Robotlar", text: "Gelecekte yaşlı bakımını üstlenen, ev işlerini organize eden ve günlük yaşamı kolaylaştıran kişisel robot asistanlardır." }
        ]
    },
    {
        id: "59-akilli-malzemeler",
        cat: "physics",
        icon: "🧪",
        title: "59. Akıllı Malzemeler ve Şekil Hafızalı Alaşımlar",
        desc: "Çevresel uyaranlara göre form veya özellik değiştirebilen yenilikçi maddeler.",
        subitems: [
            { subtitle: "Şekil Hafızalı Alaşımlar (Nitinol)", text: "Büküldükten sonra ısıtıldığında orijinal fabrikasyon şekline geri dönebilen nikel-titanyum metal bileşimleridir." },
            { subtitle: "Piezoelektrik Malzemeler", text: "Üzerine mekanik baskı uygulandığında elektrik akımı üreten, elektrik verildiğinde ise şekil değiştiren kristal yapılardır." },
            { subtitle: "Kendi Kendini Onaran Polimerler", text: "Çatladığında veya hasar gördüğünde içindeki kimyasal kapsüllerin patlayarak malzemeyi onardığı akıllı plastiklerdir." },
            { subtitle: "Kromik Malzemeler (Termokromik/Fotokromik)", text: "Sıcaklığa veya ışığa maruz kaldığında rengini değiştiren, akıllı cam ve gözlük teknolojilerinde kullanılan maddelerdir." },
            { subtitle: "Manyetoreolojik Sıvılar", text: "Manyetik alanla karşılaştığında saniyeler içinde sıvı halden katı kıvama geçebilen akıllı amortisör sıvılarıdır." },
            { subtitle: "Elektroaktif Polimerler", text: "Elektrik sinyalleri aldığında kaslar gibi kasılıp gevşeyebilen yapay kas ve yumuşak robotik malzemeleridir." },
            { subtitle: "Nanokompozit Hafif Yapılar", text: "Havacılık ve uzay araçlarında kullanılan, aşırı hafif olmalarına rağmen çelikten sağlam akıllı kompozit panellerdir." },
            { subtitle: "Faz Değiştiren Malzemeler (PCM)", text: "Isıyı emerek veya salarak sıcaklık dengelemesi yapan, akıllı binalarda enerji tasarrufu sağlayan maddelerdir." },
            { subtitle: "Biyouyumlu Şekil Hafızalı Stentler", text: "Damar içine dar sokulduktan vücut ısısıyla genişleyerek tıkalı damarları açık tutan tıp mühendisliği ürünleridir." },
            { subtitle: "Geleceğin Adaptif Yapıları", text: "Dış hava koşullarına göre formunu değiştiren binalar ve dış yüzeyler tasarlamakta kullanılan yenilikçi mühendisliktir." }
        ]
    },
    {
        id: "60-uzay-madenciligi",
        cat: "astronomy",
        icon: "☄️",
        title: "60. Uzay Madenciliği ve Asteroit Ekonomisi",
        desc: "Göktaşlarından ve Ay'dan değerli maden ile su kaynaklarının çıkarılması.",
        subitems: [
            { subtitle: "Asteroitlerin Madensel İçeriği", text: "Metalik asteroitlerin içerisindeki trilyonlarca dolarlık platin, altın ve nikel gibi nadir element rezervleridir." },
            { subtitle: "Ay'da Su Buzulu Çıkarımı", text: "Kutup kraterlerindeki buzların eritilerek roket yakıtı için hidrojen ve oksijene dönüştürülmesi projesidir." },
            { subtitle: "Helyum-3 İzotopu ve Füzyon Yakıtı", text: "Ay topraklarında (regolit) bolca bulunan ve geleceğin temiz füzyon reaktörlerinde kullanılacak olan izotoptur." },
            { subtitle: "Düşük Yerçekiminde Madencilik", text: "Dünya'dan farklı olarak yerçekiminin neredeyse ol olmadığı ortamlarda kayaç ve cevher toplama mekanizmalarının tasarımıdır." },
            { subtitle: "Yörüngeye Asteroit Çekme Projeleri", text: "Küçük ölçekli asteroitlerin güvenli yörüngelere taşınarak Dünya'ya yakın maden ocakları haline getirilmesi fikridir." },
            { subtitle: "Uzay Hukuku ve Mülkiyet Hakları", text: "Uluslararası anlaşmalara göre uzaydaki gök cisimlerinin mülkiyetinin ve çıkarılan madenlerin sahiplik haklarının düzenlenmesidir." },
            { subtitle: "Özel Uzay Madenciliği Şirketleri", text: "NASA ve ESA destekli olarak göktaşlarını hedefleyen ticari girişimlerin teknoloji yatırımlarıdır." },
            { subtitle: "Dünya'nın Tükenen Kaynaklarına Alternatif", text: "Endüstriyel hammaddelerin dünyadaki rezervlerinin azalmasına karşın uzaydan hammadde tedarik etme zorunluluğudur." },
            { subtitle: "Uzayda Yerinde Kaynak Kullanımı (ISRU)", text: "Astronotların başka gezegenlerde hayatta kalabilmek için çevredeki malzemeleri işleyerek kendi ihtiyaçlarını üretmesidir." },
            { subtitle: "Geleceğin Uzay Ekonomisi", text: "Milyarlarca dolarlık yeni nesil uzay ticaret pazarının kurulması ve trilyonerlik potansiyeli barındıran sektörleşmedir." }
        ]
    },
    {
        id: "61-fotosentetik-yakitlar",
        cat: "biotechnology",
        icon: "🍃",
        title: "61. Yapay Fotosentez ve Güneş Yakıtları",
        desc: "Güneş enerjisi ve karbondioksiti kullanarak temiz hidrokarbon yakıtlar üretme teknolojisi.",
        subitems: [
            { subtitle: "Yapay Yaprak Teknolojisi", text: "Güneş ışığını doğrudan kullanarak suyu hidrojen ve oksijene ayıran silikon ve katalizör tabanlı yaprak sistemleridir." },
            { subtitle: "Karbondioksit Yakalama ve Dönüştürme", text: "Atmosferden çekilen CO2'nin katalizörler yardımıyla metanol veya sentetik yakıta dönüştürülmesi sürecidir." },
            { subtitle: "Biyoyakıt Üreten Genetiği Değiştirilmiş Algler", text: "Laboratuvarda optimize edilmiş mikroalglerin güneş enerjisiyle doğrudan biyodizel üretmesini sağlayan sistemlerdir." },
            { subtitle: "Hidrojen Enerjisi Depolama Verimliliği", text: "Üretilen temiz hidrojenin depolanmasında yaşanan zorlukların akıllı kimyasal bağlarla aşılarak sıvı yakıta çevrilmesidir." },
            { subtitle: "Güneş Pili ve Kimyasal Entegrasyonu", text: "Fotovoltaik panellerin ürettiği elektriğin doğrudan su elektrolizinde kullanılarak kesintisiz yakıt depolanmasıdır." },
            { subtitle: "Katalizör Optimizasyonu", text: "Nadir ve pahalı platin yerine nikel ve demir gibi bol bulunan elementler kullanılarak verimli tepkime sağlama çalışmalarıdır." },
            { subtitle: "Karbon Nötr Yakıt Döngüsü", text: "Üretilen yakıt yakıldığında açığa çıkan CO2 miktarının üretimde tüketilen miktara eşit olmasıyla sıfır karbon dengesidir." },
            { subtitle: "Endüstriyel Ölçekli Güneş Çiftlikleri", text: "Çöllere kurulacak dev yapay yaprak tarlalarıyla geleceğin fosil yakıt ihtiyacının tamamını karşılama vizyonudur." },
            { subtitle: "Havacılık İçin Sentetik Kerosene", text: "Elektrikli uçuşun zor olduğu uzun mesafeli yolcu uçakları için güneş enerjisiyle üretilen yeşil jet yakıtlarıdır." },
            { subtitle: "Doğanın Fotosentez Verim Sınırları", text: "Doğal bitkilerin %1-2 olan güneş enerjisini kimyasal enerjiye çevirme veriminin yapay sistemlerle %10'un üzerine çıkarılmasıdır." }
        ]
    },
    {
        id: "62-mikrobiyal-yakit-hucreleri",
        cat: "biotechnology",
        icon: "⚡",
        title: "62. Mikrobiyal Yakıt Hücreleri ve Biyoelektrik",
        desc: "Bakterilerin organik atıkları parçalarken elektrik enerjisi üretmesini sağlayan sistemler.",
        subitems: [
            { subtitle: "Elektrojenik Bakteri Türleri", text: "Metabolik faaliyetleri sırasında elektronları hücre dışına aktarabilen özel bakteri türlerinin (Geobacter vb.) kullanımıdır." },
            { subtitle: "Atıksu Arıtımı ve Enerji Üretimi", text: "Şehir kanalizasyon sularının arıtılması sırasında aynı zamanda elektrik enerjisi elde edilmesini sağlayan ikili sistemdir." },
            { subtitle: "Atıkların Temiz Elektriğe Dönüşümü", text: "Gıda atıkları ve organik çamurların bakteriler tarafından tüketilerek elektron akışı (akım) yaratması prensibidir." },
            { subtitle: "Biyosensör Uygulamaları", text: "Su kaynaklarındaki toksik maddelerin veya kirliliğin mikrobiyal akım değişimleriyle anında tespit edilmesidir." },
            { subtitle: "Toprak Temelli Yakıt Hücreleri", text: "Tarım arazilerindeki mikroorganizmalardan yararlanarak sensörler için küçük çaplı sürekli elektrik üretilmesidir." },
            { subtitle: "Anod ve Katod Bölme Mühendisliği", text: "Bakterilerin bulunduğu anot odası ile oksijenin bulunduğu katod odasının proton değiştirici membranla ayrılmasıdır." },
            { subtitle: "Düşük Güç Tüketen Cihaz Beslemesi", text: "Uzaktan veri gönderen çevresel sensörlerin pilsiz olarak doğrudan çevrelerindeki mikroorganizmalarla çalıştırılmasıdır." },
            { subtitle: "Biyofilmlerin Elektriksel İletkenliği", text: "Bakterilerin yüzeylerde oluşturduğu film tabakalarının iletken nano-teller aracılığıyla akım iletme yeteneğidir." },
            { subtitle: "Geleceğin Yeşil Binaları", text: "Evsel atık suların binanın bodrumundaki mikrobiyal hücrelerden geçirilerek bina aydınlatma enerjisine katkı sağlamasıdır." },
            { subtitle: "Sürdürülebilir Biyoteknolojik Arıtım", text: "Enerji tüketen geleneksel arıtma tesislerinin yerini kendi enerjisini üreten ekolojik tesislerin almasıdır." }
        ]
    },
    {
        id: "63-manyetik-levitasyon",
        cat: "physics",
        icon: "🚄",
        title: "63. Manyetik Levitasyon (Maglev) ve Süperiletkenlik",
        desc: "Sürtünmesiz trenler ve süperiletken mıknatıslarla ulaşım devrimi.",
        subitems: [
            { subtitle: "Meissner Etkisi ve Manyetik İtme", text: "Süperiletken malzemelerin kritik sıcaklığın altında içlerindeki manyetik alanı tamamen dışlayarak havada asılı kalmasıdır." },
            { subtitle: "Sürtünmesiz Ulaşım Sistemleri", text: "Tekerlek ve ray temasının tamamen ortadan kalkmasıyla mekanik aşınmanın sıfırlanması ve ultra yüksek hızlara ulaşılmasıdır." },
            { subtitle: "Yüksek Hızlı Maglev Trenleri", text: "Saatte 600 kilometre hızı aşabilen, manyetik alanlar üzerinde kayarak giden geleceğin demiryolu teknolojisidir." },
            { subtitle: "Sıvı Azot Soğutma Sistemleri", text: "Yüksek sıcaklık süperiletkenlerinin (HTS) iletken özelliklerini koruması için sıvı azotla kritik soğuklukta tutulmasıdır." },
            { subtitle: "Elektrodinamik Süspansiyon (EDS)", text: "Tren hızlandıkça raylardaki mıknatıslarla oluşan itme kuvvetinin kendiliğinden dengeyi sağlaması sistemidir." },
            { subtitle: "Elektromanyetik Süspansiyon (EMS)", text: "Rayları alttan saran mıknatıslar aracılığıyla trenin rayı alttan çekerek havada asılı kalmasını sağlayan tasarımdır." },
            { subtitle: "Şehirlerarası Hat Verimliliği", text: "Uçak yolculuğuna alternatif olarak metropoller arasında hızlı, güvenli ve karbon salınımsız seyahat koridorları kurmaktır." },
            { subtitle: "Vakumlu Tüp (Hyperloop) Entegrasyonu", text: "Maglev trenlerinin havası boşaltılmış tünellerde sürtünmesiz şekilde ses hızını aşarak ilerletilme projesidir." },
            { subtitle: "Enerji Tüketim Optimizasyonu", text: "Kalkış anında yüksek enerji harcasa da hareket halindeyken kinetik enerjinin geri kazanılması (rejeneratif frenleme)." },
            { subtitle: "Oda Sıcaklığı Süperiletkenlik Arayışı", text: "Ekstrem soğutma gerektirmeyen yeni malzemelerin keşfiyle Maglev teknolojisinin maliyetlerinin dramatik biçimde düşürülmesidir." }
        ]
    },
    {
        id: "64-metamalzemeler-ve-gorunmezlik",
        cat: "physics",
        icon: "🫥",
        title: "64. Metamalzemeler ve Optik Görünmezlik Pelerinleri",
        desc: "Doğada bulunmayan özelliklere sahip yapay atomik yapılı maddeler.",
        subitems: [
            { subtitle: "Negatif Kırılma İndeksi", text: "Işığın normal maddelerin aksine ters açıyla kırılmasını sağlayarak optik yasalarını büken yapay yapılardır." },
            { subtitle: "Optik Görünmezlik Pelerinleri", text: "Işık dalgalarını nesnenin etrafından tıpkı suyun taştın etrafından akması gibi dolaştırarak görünmez kılan kalkan tasarımlarıdır." },
            { subtitle: "Mikrodalga ve Radar Maskeleme", text: "Askeri araçların radar dalgalarını emerek veya etrafa saçarak düşman ekranlarında yok olmasını sağlayan kaplamalardır." },
            { subtitle: "Yapay Atomik Yapılar (Meta-atomlar)", text: "Işığın dalga boyundan daha küçük ölçekte tasarlanan ve ışığı yönlendiren mikroskobik birim hücreleridir." },
            { subtitle: "Süper Lensi Teknolojisi", text: "Işığın kırınım sınırını aşarak atom altı detayları bile net bir şekilde gösterebilen kusursuz odaklama lensleridir." },
            { subtitle: "Akustik Metamalzemeler", text: "Sadece ışığı değil, ses dalgalarını da yönlendiren, ses yalıtımında çığır açan labirent yapıdaki malzemelerdir." },
            { subtitle: "Termal Işıma Kontrolü", text: "Isı dalgalarını istendiği gibi yönlendirerek termal kameralardan tamamen gizlenebilen malzemelerin üretilmesidir." },
            { subtitle: "Nano-Fotoniğin Gelişimi", text: "Işığı fiber kablolar yerine mikroçipler üzerinde nanometre boyutunda yönlendiren optik bilgisayar altyapılarıdır." },
            { subtitle: "Deprem Dalgalarını Saptırma", text: "Binaların etrafına yerleştirilen metamalzeme kazıklarıyla sismik dalgaların yapının etrafından dolaştırılması teorisidir." },
            { subtitle: "Geleceğin Işık Manipülasyonu", text: "Görünmezlik teknolojilerinin savunma sanayiinden medikal görüntülemeye kadar geniş bir yelpazede entegre edilmesidir." }
        ]
    },
    {
        id: "65-biyometrik-veri-guvenligi",
        cat: "technology",
        icon: "🛡️",
        title: "65. Biyometrik Kriptografi ve Güvenli Veri Saklama",
        desc: "Biyometrik verilerin çalınmasını önleyen şifreli ve merkeziyetsiz koruma sistemleri.",
        subitems: [
            { subtitle: "Biyometrik Şablon Koruması", text: "Parmak izi veya yüz verilerinin ham haliyle değil, geri döndürülemez matematiksel özetler halinde saklanmasıdır." },
            { subtitle: "Bulanık Bulut (Fuzzy Vault) Algoritmaları", text: "Biyometrik verilerde yaşlanma veya yaralanma nedeniyle oluşan küçük değişikliklerin doğrulama başarısını engellememesini sağlar." },
            { subtitle: "İptal Edilebilir Biyometri", text: "Saklanan biyometrik şablon ele geçirilirse, anahtarın değiştirilerek yeni bir benzersiz kimlik türetilebilmesi teknolojisidir." },
            { subtitle: "Homomorfik Şifreleme Entegrasyonu", text: "Biyometrik verilerin şifresi çözülmeden, doğrudan şifreli veri üzerinde kimlik eşleştirme yapılmasına olanak tanır." },
            { subtitle: "Merkeziyetsiz Kimlik Doğrulama", text: "Biyometrik şifrelerin dev sunucularda hacklenme riskine karşı kullanıcının kendi cihazında şifrelenerek tutulmasıdır." },
            { subtitle: "Canlılık (Liveness) Testleri", text: "Fotoğraf veya Deepfake videolarla yapılan kimlik sahteciliğini önlemek için göz kırpma ve ısı haritası analizi yapılmasıdır." },
            { subtitle: "Donanım Tabanlı Güvenli Alanlar", text: "Biyometrik eşleştirme işlemlerinin telefonlardaki izole çip alanlarında (Secure Enclave) internete kapalı yürütülmesidir." },
            { subtitle: "Sıfır Güven (Zero Trust) Mimarisi", text: "Sistem içerisindeki hiçbir kullanıcının veya cihazın kimliğine peşinen güvenilmeyerek sürekli biyometrik teyit istenmesidir." },
            { subtitle: "Etik Mahremiyet Standartları", text: "Biyometrik verilerin şirketler veya devletler tarafından izinsiz toplanmasını ve takip edilmesini sınırlayan yasalardır." },
            { subtitle: "Geleceğin Şifresiz Ekosistemi", text: "Kullanıcıların şifre ezberleme derdinden kurtulduğu, tamamen gizlilik odaklı ve kırılmaz biyometrik güvenlik ağlarıdır." }
        ]
    },
    {
        id: "66-mrna-ve-biyoteknolojik-asilar",
        cat: "biotechnology",
        icon: "🧬",
        title: "66. mRNA Teknolojisi ve Biyoteknolojik Aşılar",
        desc: "Hücrelere genetik talimatlar vererek bağışıklık sistemini eğiten devrimci tıp teknolojisi.",
        subitems: [
            { subtitle: "mRNA Molekülünün Yapısı", text: "Hücre çekirdeğine girmeden ribozomlarda doğrudan protein sentezlenmesini sağlayan geçici haberci moleküldür." },
            { subtitle: "Lipid Nanoparitkl Kalkanı", text: "Hassas mRNA molekülünün vücutta parçalanmadan hedef hücrelere güvenle taşınmasını sağlayan mikroskobik yağ kürecikleridir." },
            { subtitle: "Antijen Üretim Mekanizması", text: "Vücudun kendi hücrelerinin virüsün zararsız bir parçasını üreterek bağışıklık hafızası oluşturması sürecidir." },
            { subtitle: "Hızlı Üretim ve Tasarım", text: "Yeni bir salgın ortaya çıktığında genetik kodun çözülmesiyle haftalar içinde yeni aşıların tasarlanabilme esnekliğidir." },
            { subtitle: "Kanser Aşıları Araştırmaları", text: "Kişiye özel tümör mutasyonları hedef alınarak bağışıklık sisteminin kanser hücrelerini yok etmesi sağlanan tedavilerdir." },
            { subtitle: "Soğuk Zincir Depolama Zorunluluğu", text: "mRNA yapısının bozulmaması için ultra soğuk (-80°C) özel dondurucularda nakliye ve saklanma gereksinimidir." },
            { subtitle: "Genetik Terapi Entegrasyonu", text: "Eksik veya hatalı proteinlerin vücutta üretilmesi için genetik talimatların tedavi amaçlı hücrelere aktarılmasıdır." },
            { subtitle: "Bağışıklık Yanıtı Optimizasyonu", text: "T hücresi ve antikor üretimini aynı anda tetikleyerek uzun süreli ve güçlü bir koruma kalkanı sağlanmasıdır." },
            { subtitle: "Kritik Güvenlik Testleri", text: "Klinik deneylerde milyonlarca gönüllü üzerinde test edilerek olası yan etkilerin minimize edilmesi süreçleridir." },
            { subtitle: "Geleceğin Pandemi Savunması", text: "Küresel sağlık krizlerine karşı tıp dünyasının elindeki en hızlı ve ölçeklenebilir biyoteknolojik silahtır." }
        ]
    },
    {
        id: "67-kuantum-sensorler",
        cat: "quantum",
        icon: "⏱️",
        title: "67. Kuantum Sensörler ve Hassas Ölçüm Teknolojileri",
        desc: "Kuantum durumlarındaki değişimleri kullanarak imkansız hassasiyette ölçüm yapan cihazlar.",
        subitems: [
            { subtitle: "Atomik Saatler ve Zaman Hassasiyeti", text: "Sezyum ve stronsiyum atomlarının salınımlarını kullanarak milyarlarca yılda bir saniye bile şaşmayan zaman ölçümüdür." },
            { subtitle: "Kuantum Manyetometreler", text: "Çok zayıf manyetik alanları bile algılayabilen, beyin dalgalarını ve yeraltı madenlerini haritalandıran sensörlerdir." },
            { subtitle: "GPS Olumsuzluklarına Alternatif", text: "Uydu sinyallerinin kesildiği veya karıştırıldığı ortamlarda kuantum atalet sensörleriyle hassas yön bulma sistemleridir." },
            { subtitle: "Kuantum Gravimetreler", text: "Yerçekimi ivmesindeki en ufak değişimleri ölçerek yeraltı mağaralarını, magma hareketlerini ve su kaynaklarını tespit eder." },
            { subtitle: "Optik Örgü Saatleri", text: "Lazerlerle hapsedilen atomlar sayesinde klasik atom saatlerinden yüz kat daha hassas zaman dilimleri ölçme teknolojisidir." },
            { subtitle: "Nörolojik Görüntüleme Gelişmeleri", text: "Kuantum sensörler sayesinde kafatasına zarar vermeden beyin içi elektriksel aktivitelerin anlık haritasının çıkarılmasıdır." },
            { subtitle: "Kritik Altyapı Güvenliği", text: "Finansal işlemler ve telekomünikasyon ağları için kusursuz zaman senkronizasyonu sağlayan altyapı bileşenleridir." },
            { subtitle: "Mikroskobik Kusur Tespiti", text: "Malzemelerin içindeki nano boyutundaki çatlakları ve gerilmeleri henüz büyümeden tespit eden tarama sistemleridir." },
            { subtitle: "Kuantum Durum Korunumu", text: "Sensörlerin dış çevredeki gürültülerden etkilenmemesi için uygulanan gelişmiş yalıtım ve lazer kilitleme yöntemleridir." },
            { subtitle: "Endüstriyel Ölçüm Devrimi", text: "Bilimsel araştırmalardan günlük mühendislik uygulamalarına kadar ölçüm standartlarını yeniden tanımlayan teknolojidir." }
        ]
    },
    {
        id: "68-akilli-tekstiller",
        cat: "technology",
        icon: "👕",
        title: "68. Akıllı Tekstiller ve Giyilebilir Elektronik",
        desc: "İletken iplikler ve entegre sensörlerle donatılmış fonksiyonel akıllı giysiler.",
        subitems: [
            { subtitle: "İletken Nano-İplikler", text: "Kumaş dokusuna işlenen gümüş veya karbon bazlı iplikler sayesinde elektrik akımının kıyafet üzerinde iletilmesidir." },
            { subtitle: "Biyometrik Sağlık Takibi", text: "Kalp atış hızını, vücut ısısını ve solunum ritmini doğrudan deriden anlık olarak ölçen sporcu giysileridir." },
            { subtitle: "Kendi Enerjisini Üreten Kumaşlar", text: "Sürtünme veya güneş enerjisiyle çalışan, hareket halindeyken telefonları şarj edebilen tekstil yüzeyleridir." },
            { subtitle: "Sıcaklık Ayarlayan Akıllı Lifler", text: "Dış hava koşullarına göre genleşerek veya büzülerek vücut ısısını dengede tutan termal kumaş teknolojileridir." },
            { subtitle: "Esnek Ekran Entegrasyonu", text: "Kıyafetlerin üzerine örülen mikro LED'ler sayesinde görsel değiştirebilir veya mesaj yansıtabilir yüzeylerdir." },
            { subtitle: "Yıkanabilir Devre Kartları", text: "Suya, çamaşır makinesine ve deterjanlara dayanıklı, esnek elektronik bileşenlerin kumaşa entegre edilmesidir." },
            { subtitle: "Askeri Kamuflaj ve Isı Maskeleme", text: "Askerlerin termal kameralardan gizlenmesini veya çevre rengine göre renk değiştirmesini sağlayan örtülerdir." },
            { subtitle: "Dokunmatik Kumaş Yüzeyler", text: "Kolluk kısımlarına dokunarak telefon araması yapmayı veya müzik değiştirmeyi sağlayan interaktif dokuma alanlarıdır." },
            { subtitle: "Biyouyumlu Yara Örtüleri", text: "İyileşme sürecini izleyen ve gerektiğinde ilaç salgılayan akıllı medikal bandaj ve tekstil ürünleridir." },
            { subtitle: "Geleceğin Giyilebilir Bilgisayarları", text: "Ayrı bir cihaz taşımaya gerek kalmadan tüm teknolojinin giysilerin içine sorunsuz bir şekilde harmanlanmasıdır." }
        ]
    },
    {
        id: "69-uzay-coplugu-temizligi",
        cat: "astronomy",
        icon: "🛰️",
        title: "69. Uzay Çöplüğü ve Yörünge Temizliği",
        desc: "Dünya yörüngesinde biriken tehlikeli inaktif uydu ve roket artıklarının temizlenmesi.",
        subitems: [
            { subtitle: "Kessler Sendromu Riski", text: "Yörüngedeki çöplerin birbiriyle çarpışarak zincirleme bir enkaz bulutu yaratması ve uzay uçuşlarını imkansız kılma tehlikesidir." },
            { subtitle: "Lazerle Çöp İtme Sistemleri", text: "Yeryüzünden veya uydulardan gönderilen yüksek güçlü lazerlerle küçük enkazların yörüngesinin değiştirilerek yanması sağlanmasıdır." },
            { subtitle: "Robotik Kollar ve Yakalama Ağları", text: "Aktif olmayan büyük parçaları ve uyduları yakalayarak atmosfere sokup güvenle yakan özel temizlik araçlarıdır." },
            { subtitle: "Zıpkın ve Harpoon Mekanizmaları", text: "Hızla hareket eden metal parçalarını güvenli mesafeden yakalamak için geliştirilen zıpkınlama sistemleridir." },
            { subtitle: "Manyetik Temizleme Yöntemleri", text: "Manyetik alanlar kullanarak metal atıkların yörüngeden saptırılıp atmosfere yönlendirilmesi çalışmalarıdır." },
            { subtitle: "Uluslararası Yörünge Kuralları", text: "Yeni fırlatılan uyduların görev süreleri bitince kendi kendine yanma veya mezar yörüngesine gitme zorunluluğudur." },
            { subtitle: "Radar ve Optik Takip Ağları", text: "Dünya genelindeki istasyonlardan binlerce küçük uzay çöpünün anlık konumlarının milimetrik olarak izlenmesidir." },
            { subtitle: "Kendi Kendini İmha Eden Uydular", text: "Görevi biten uydu malzemelerinin atmosferde tamamen eriyip toz olmasını sağlayan özel alaşımlı tasarımlardır." },
            { subtitle: "Ticari Uzay Temizliği Girişimleri", text: "Özel şirketlerin yörünge güvenliğini sağlamak için geliştirdiği yeni nesil temizlik servis pazarının kurulmasıdır." },
            { subtitle: "Sürdürülebilir Uzay Politikaları", text: "İnsanlığın uzay yolculuğu özgürlüğünü korumak için yörüngelerin temiz tutulmasının küresel bir zorunluluk haline gelmesidir." }
        ]
    },
    {
        id: "70-kok-hucre-ve-organ-uretimi",
        cat: "biotechnology",
        icon: "🫀",
        title: "70. Kök Hücre Teknolojisi ve Organ Üretimi",
        desc: "İnsan hücrelerinin laboratuvarda çoğaltılarak yedek organ ve dokulara dönüştürülmesi.",
        subitems: [
            { subtitle: "İndüklenmiş Çoğul Örnek Hücreler (iPSC)", text: "Yetişkin deri veya kan hücrelerinin genetik programla sıfırlanarak her türlü dokuya dönüşebilen kök hücre haline getirilmesidir." },
            { subtitle: "Biyolojik Organ İskeletleri", text: "Organların hücreleri arındırılarak geriye kalan bağ dokusu iskeletinin yeni hücrelerle yeniden doldurulması yöntemidir." },
            { subtitle: "Organoid ve Mini Organ Tasarımları", text: "Laboratuvarda petri kaplarında üretilen mercimek büyüklüğündeki çalışan mini beyin, karaciğer ve böbrek modelleridir." },
            { subtitle: "Organ Nakli Bekleme Listesi Çözümü", text: "Kadavra organ bağışına olan bağımlılığı ortadan kaldırarak hastaya özel kendi hücrelerinden organ üretilmesidir." },
            { subtitle: "Kalıtsal Hastalıkların Modellenmesi", text: "Hastadan alınan kök hücrelerle hastalıkların laboratuvarda simüle edilerek uygun ilaçların test edilmesidir." },
            { subtitle: "Doku Reddi (İmmün Tolerans) Sorunu", text: "Hastanın kendi hücreleri kullanılarak üretilen organlarda bağışıklık sistemi tarafından reddedilme riskinin sıfırlanmasıdır." },
            { subtitle: "Nörolojik Onarım Çalışmaları", text: "Omurilik yaralanmalarında ve Alzheimer tedavisinde kaybedilen sinir hücrelerinin kök hücrelerle yenilenmesidir." },
            { subtitle: "Biyoreaktör Kültür Ortamları", text: "Üretilen organların insan vücudundaki gibi sürekli besin, oksijen ve mekanik gerilime tabi tutularak olgunlaştırılmasıdır." },
            { subtitle: "Etik Sınırlar ve Yasal Düzenlemeler", text: "Kök hücre araştırmalarında insan embriyosu kullanımı ve genetik müdahale sınırlarının uluslararası yasalarla denetlenmesidir." },
            { subtitle: "Geleceğin Rejeneratif Tıbbı", text: "Yaşlanan veya hasar gören dokuların ilaçla değil, doğrudan yeni hücre ve organlarla yenilendiği tıp devrimidir." }
        ]
    },
    {
        id: "71-mri-ve-tibbi-goruntuleme",
        cat: "biophysics",
        icon: "🧲",
        title: "71. Manyetik Rezonans (MRI) ve İleri Tıbbi Görüntüleme",
        desc: "Güçlü manyetik alanlar ve radyo dalgalarıyla vücudun iç yapısının üç boyutlu haritalandırılması.",
        subitems: [
            { subtitle: "Nükleer Manyetik Rezonans Temelleri", text: "Vücuttaki hidrojen atomlarının güçlü manyetik alanda hizalanarak radyo frekans sinyalleri yayması prensibidir." },
            { subtitle: "Süperiletken Mıknatıs Bobinleri", text: "Sıvı helyumla mutlak sıfıra yakın soğutulan dev bobinlerin kesintisiz ve çok yüksek güçlü manyetik alan üretmesidir." },
            { subtitle: "Fonksiyonel MRI (fMRI) Teknolojisi", text: "Beynin hangi bölgelerinin düşünce ve eylem sırasında kan akışı değişimiyle aktifleştiğini gösteren tarama yöntemidir." },
            { subtitle: "Gradyan Bobinleri ve Konumlandırma", text: "Manyetik alana küçük değişimler eklenerek sinyallerin vücudun hangi koordinatından geldiğinin hassas hesaplanmasıdır." },
            { subtitle: "Radyasyon İçermeyen Güvenli Görüntü", text: "X-ışını (röntgen) gibi iyonizan radyasyon kullanmadığı için hamileler ve bebeklerde bile güvenle uygulanabilmesidir." },
            { subtitle: "Yapay Zeka ile Görüntü İyileştirme", text: "Tarama sürelerini yarı yarıya düşüren ve düşük kaliteli sinyallerden net 3D organ görüntüleri çıkaran AI algoritmalarıdır." },
            { subtitle: "Difüzyon Tensor Görüntüleme", text: "Beyindeki sinir lifi yollarının (akson bağlantılarının) su moleküllerinin hareketine bakılarak haritalandırılmasıdır." },
            { subtitle: "Ultra Yüksek Alan Sistemleri (7 Tesla)", text: "Piyasadaki standart cihazlardan çok daha güçlü manyetik alanlar kullanarak hücresel düzeyde detay yakalama sistemleridir." },
            { subtitle: "Cerrahi Planlama Entegrasyonu", text: "Beyin tümörlerinin ameliyat öncesi kritik sinir yollarına olan mesafesinin milimetrik olarak hesaplanmasıdır." },
            { subtitle: "Teşhiste Erken Teşhis Devrimi", text: "Erken evre kanser, MS ve damar tıkanıklıklarının henüz belirti göstermeden tespit edilmesindeki hayati rolüdür." }
        ]
    },
    {
        id: "72-nukleer-atik-donusumu",
        cat: "physics",
        icon: "⚛️",
        title: "72. Nükleer Atık Dönüşümü ve Transmutasyon",
        desc: "Uzun ömürlü radyoaktif atıkların güvenli elementlere dönüştürülmesi teknolojisi.",
        subitems: [
            { subtitle: "Transmutasyon Süreci Mekaniği", text: "Radyoaktif çekirdeklere nötron bombardımanı uygulanarak onları daha kısa ömürlü veya kararlı elementlere dönüştürme işlemidir." },
            { subtitle: "Hızlandırıcı Odaklı Sistemler (ADS)", text: "Parçacık hızlandırıcıları ve alt-kritik reaktörler kullanılarak nükleer atıkların kontrollü olarak yakılması teknolojisidir." },
            { subtitle: "Binlerce Yıllık Tehlikeyi Azaltma", text: "Yüz binlerce yıl radyoaktif kalan atıkların ömrünün transmutasyonla birkaç yüz yıla indirilmesi hedefidir." },
            { subtitle: "İkinci Nesil Nükleer Yakıt Döngüsü", text: "Kullanılmış yakıt çubuklarındaki hala kullanılabilir uranyum ve plütonyumun ayrılarak yeniden enerjiye dönüştürülmesidir." },
            { subtitle: "Hızlı Nötron Reaktörleri", text: "Termal reaktörlerin aksine yüksek enerjili nötronlar kullanarak atıkları yakıt olarak tüketen gelişmiş reaktör tasarımlarıdır." },
            { subtitle: "Aktinitlerin Ayrıştırılması (Partitioning)", text: "Atık içeriğindeki en tehlikeli radyoaktif elementlerin kimyasal yöntemlerle izole edilerek ayrı işleme tabi tutulmasıdır." },
            { subtitle: "Jeolojik Depolama İhtiyacını Azaltma", text: "Atıkların hacmi ve radyoaktif ömrü küçültüldüğü için yer altı depolama tesislerine olan baskının hafifletilmesidir." },
            { subtitle: "Yurttaşlık ve Çevre Güvenliği", text: "Nükleer enerjinin en büyük dezavantajı olan atık sorununu kalıcı olarak çözerek temiz enerjiye katkı sağlamaktır." },
            { subtitle: "Deneysel Yakma Tesisleri", text: "Dünyanın çeşitli laboratuvarlarında (Fransa, Belçika vb.) test edilen prototip transmutasyon reaktör projeleridir." },
            { subtitle: "Geleceğin Temiz Nükleer Vizyonu", text: "Atık üretmeyen veya ürettiği atığı kendi içinde yok eden kapalı devre nükleer enerji sistemlerinin kurulmasıdır." }
        ]
    },
    {
        id: "73-kuantum-internet",
        cat: "quantum",
        icon: "🌐",
        title: "73. Kuantum İnternet ve Dağıtık Kuantum Ağları",
        desc: "Fotonların dolanıklığı üzerinden kurulan, dinlenmesi fiziksel olarak imkansız iletişim ağı.",
        subitems: [
            { subtitle: "Kuantum Tekrarlayıcıları (Repeaters)", text: "Fotonların fiber optik kablolarda mesafe uzadıkça kaybolmasını önlemek için kuantum durumunu bozmadan çoğaltan cihazlardır." },
            { subtitle: "Kıralamaz Küresel İletişim Hatları", text: "İnternet verilerinin şifreleme anahtarları yerine doğrudan kuantum dolanık parçacıklarla mutlak güvenlikle aktarılmasıdır." },
            { subtitle: "Dağıtık Kuantum Hesaplama", text: "Farklı şehirlerdeki kuantum bilgisayarların dolanıklık bağıyla birbirine bağlanarak tek bir devasa süper bilgisayar gibi çalışmasıdır." },
            { subtitle: "Uydu Tabanlı Kuantum Ağları", text: "Yer istasyonları ile alçak dünya yörüngesindeki uydular arasında lazerle kuantum durumlarının transfer edilmesidir." },
            { subtitle: "Fotonik Bellek Sistemleri", text: "Kuantum bilgilerini geçici olarak depolayarak ağ içi veri akışının senkronize edilmesini sağlayan kuantum hafızalardır." },
            { subtitle: "Bell Durumu Ölçümleri", text: "Ağ düğümleri arasındaki dolanıklık bağlarının teyit edilmesi ve fotonların kuantum durumlarının eşleştirilmesidir." },
            { subtitle: "Siber Güvenlikte Yeni Çağ", text: "Geleneksel siber saldırıların, eavesdropping (dinleme) girişimlerinin fizik yasaları gereği anında tespit edilip engellenmesidir." },
            { subtitle: "Kuantum Sensör Ağları Entegrasyonu", text: "Dünya genelindeki hassas kuantum sensörlerin birleştirilerek deprem ve iklim değişimlerini anlık izlemesidir." },
            { subtitle: "Fiber Optik Altyapı Uyumu", text: "Mevcut fiber optik kablo hatlarının özel dalga boyları ve filtrelerle kuantum internet ile uyumlu hale getirilmesidir." },
            { subtitle: "Geleceğin İnternet Mimarisi", text: "Klasik internetin yerini almasa da devlet sırları, finans ve kritik veriler için global bir kuantum omurga kurulmasıdır." }
        ]
    },
    {
        id: "74-biopaski-ve-3d-organ",
        cat: "biotechnology",
        icon: "🖨️",
        title: "74. Biyo-baskı ve 3 Boyutlu Doku Mühendisliği",
        desc: "Canlı hücre mürekkep kullanarak katman katman yaşayan doku ve organ üretme teknolojisi.",
        subitems: [
            { subtitle: "Biyomürekkep (Bio-ink) Formülasyonu", text: "Canlı hücrelerin ve yapısal jellerin (aljinat, kolajen) yazıcılardan zarar görmeden akmasını sağlayan özel sıvı karışımlardır." },
            { subtitle: "Hücre Hasarlı Cilt Onarımı", text: "Ciddi yanık vakalarında hastanın kendi hücrelerinden üretilen biyo-mürekkeple doğrudan yara üzerine yeni deri basılmasıdır." },
            { subtitle: "Damar Ağı (Vaskülarizasyon) Basımı", text: "Üretilen kalın organların içinde kan dolaşımını sağlayacak mikroskobik damar kanallarının 3D yazıcıyla örülmesidir." },
            { subtitle: "İlaç Testlerinde Hayvan Deneyi Alternatifi", text: "Yeni ilaçların kanser veya karaciğer dokusu basılarak doğrudan insan hücreli modellerde test edilmesidir." },
            { subtitle: "Kemik ve Kıkırdak İmplantları", text: "Kaza veya hastalık sonucu kaybedilen kafatası ve eklem kıkırdaklarının hastaya özel ölçülerde basılıp nakledilmesidir." },
            { subtitle: "Çok Başlıklı Yazıcı Teknolojisi", text: "Aynı anda farklı hücre türlerini ve iskele malzemelerini kusursuz konumlarda birleştirebilen gelişmiş nozul sistemleridir." },
            { subtitle: "Biyouyumlu İskelet Yapıları", text: "Hücrelerin tutunup çoğalmasını sağlayan, zamanla vücut tarafından emilen polimerik taşıyıcı kafeslerin basılmasıdır." },
            { subtitle: "Tam Fonksiyonel Organ Hedefi", text: "Gelecekte kalp, böbrek gibi karmaşık organların laboratuvarda tam işlevsel olarak seri üretilebilmesi vizyonudur." },
            { subtitle: "Kişiselleştirilmiş Tıp Uygulamaları", text: "Her hastanın kendi genetik dokusuna birebir uyumlu yedek parça dokuların operasyon masasında üretilmesidir." },
            { subtitle: "Klinik Onay ve Etik Süreçler", text: "Biyo-baskılı doku ve organların insanlar üzerinde güvenle kullanılabilmesi için yürütülen yasal onay aşamalarıdır." }
        ]
    },
    {
        id: "75-atmosferik-karbon-yakalama",
        cat: "cosmology",
        icon: "🏭",
        title: "75. Atmosferik Doğrudan Karbon Yakalama (DAC)",
        desc: "Havadan karbondioksiti büyük fanlar ve kimyasal filtrelerle emerek hapsetme teknolojisi.",
        subitems: [
            { subtitle: "Dev Fan ve Filtre Sistemleri", text: "Milyonlarca metreküp havayı devasa vantilatörlerle çekerek içindeki CO2 moleküllerini tutan kimyasal filtreleme üniteleridir." },
            { subtitle: "Sıvı ve Katı Sorbent Teknolojileri", text: "Karbondioksiti kendine bağlayan özel kimyasal çözeltiler veya katı reçine bazlı filtreleme malzemeleridir." },
            { subtitle: "Yeraltı Mineralizasyon Depolaması", text: "Yakalanan CO2 gazının suyla karıştırılıp bazalt kayalara basılarak kalıcı olarak taşa (kalsit karbonata) dönüştürülmesidir." },
            { subtitle: "Endüstriyel Hammadde Kullanımı", text: "Habadan çekilen karbonun sentetik yakıt, karbonatlı içecekler veya yapı malzemeleri üretiminde yeniden değerlendirilmesidir." },
            { subtitle: "Net-Negatif Emisyon Hedefleri", text: "Mevcut salınımları durdurmanın ötesine geçerek geçmişteki karbonu atmosferden kalıcı olarak temizleme stratejisidir." },
            { subtitle: "Enerji Yoğunluğu Zorluğu", text: "DAC tesislerinin devasa fanları ve kimyasal ısıtma döngüleri için çok yüksek miktarda temiz enerjiye ihtiyaç duyulmasıdır." },
            { subtitle: "İklim Krizini Geri Çevirme Potansiyeli", text: "Küresel sıcaklık artışını kontrol altında tutmak için ormanlara ek olarak başvurulan endüstriyel ekolojik destek sistemidir." },
            { subtitle: "Dünyanın En Büyük DAC Tesisleri", text: "İzlanda ve ABD'de kurulan, yılda binlerce ton karbonu yeraltına hapseden öncü pilot tesis projeleridir." },
            { subtitle: "Maliyet ve Ölçeklenebilirlik", text: "Teknolojinin yaygınlaşarak ton başına düşen yakalama maliyetlerinin ekonomik seviyelere indirilmesi çalışmalarıdır." },
            { subtitle: "Geleceğin İklim Mühendisliği", text: "Küresel ısınmanın en tehlikeli senaryolarını önlemek için başvurulacak en kritik endüstriyel güvenlik supabıdır." }
        ]
    },
    {
        id: "76-biyomekanik-protezler",
        cat: "biotechnology",
        icon: "🦾",
        title: "76. Biyomekanik Protezler ve Nöromüsküler Arayüzler",
        desc: "Sinir sistemiyle doğrudan iletişim kuran, düşünceyle kontrol edilen akıllı robotik uzuvlar.",
        subitems: [
            { subtitle: "Hedbirlikte Hedef Kas Yeniden İrvasyonu (TMR)", text: "Ampute edilen uzvun sinir uçlarının göğüs veya kol kaslarına cerrahi olarak aktarılarak sinyal kapasitesinin artırılmasıdır." },
            { subtitle: "Yapay Sinir Arayüzleri", text: "Beyin veya kas sinyallerini (EMG) algılayarak robotik eklemlere milisaniyeler içinde hareket komutu ileten elektrot sistemleridir." },
            { subtitle: "Duyu Geri Besleme Mekanizmaları", text: "Kullanıcının protez parmakla tuttuğu nesnenin sıcaklığını, sertliğini ve dokusunu doğrudan sinir sistemine iletmesini sağlar." },
            { subtitle: "Hedef Odaklı Biyomekanik Eklem Tasarımları", text: "İnsan eklemlerinin doğal hareket eksenlerini taklit eden, motorlu ve hidrolik bileşenlere sahip hafif uzuv iskeletleridir." },
            { subtitle: "Osseointegrasyon Teknolojisi", text: "Protezin doğrudan kemik dokusuna titanium vida ile entegre edilerek askı kayışlarına olan ihtiyacı ortadan kaldırmasıdır." },
            { subtitle: "Yapay Zeka Destekli Yürüme Algoritmaları", text: "Kullanıcının yürüme niyetini algılayarak merdiven çıkma veya koşma gibi geçişleri otomatik uyarlayan yazılımlardır." },
            { subtitle: "Nöro-Protezlerde Pil ve Enerji Verimliliği", text: "Günlük kullanımda şarj ihtiyacını minimize eden, düşük güç tüketimli gelişmiş mikroçiplerin entegrasyonudur." },
            { subtitle: "Hafif ve Dayanıklı Kompozit Gövdeler", text: "Karbon fiber ve havacılık sınıfı alüminyum alaşımları kullanılarak üretilen aşırı hafif ve mukavemetli protez iskeletleridir." },
            { subtitle: "Klinik Rehabilitasyon ve Uyum Süreci", text: "Ampute bireylerin yeni biyonik uzuvlarını kendi organları gibi kullanabilmeleri için aldıkları nöro-fiziksel eğitimdir." },
            { subtitle: "Geleceğin Transhümanist Uzuvları", text: "İnsan yeteneklerini korumanın ötesine geçerek fiziksel gücü ve hassasiyeti artıran üstün biyonik tasarımlardır." }
        ]
    },
    {
        id: "77-lazer-guvenlik-sistemleri",
        cat: "physics",
        icon: "🚨",
        title: "77. İleri Lazer ve Yönlendirilmiş Enerji Silahları",
        desc: "Işık hızında hedef imha eden, füzeleri ve droneları etkisiz hale getiren enerji sistemleri.",
        subitems: [
            { subtitle: "Fiber Lazer Teknolojisi", text: "Yüksek güçlü lazer ışınlarının optik fiber kablolar içinde birleştirilerek tek bir yıkıcı odak noktası oluşturmasıdır." },
            { subtitle: "Drone ve İHA Savunma Sistemleri", text: "Sürü dronelarına karşı ucuz, hızlı ve mühimmat sınırlaması olmaksızın havada imha sağlayan savunma kalkanıdır." },
            { subtitle: "Atmosferik Odaklama ve Adaptif Optik", text: "Lazer ışınının atmosferdeki türbülans, toz ve nemden etkilenerek dağılmasını önleyen akıllı ayna sistemleridir." },
            { subtitle: "Mühimmat Maliyet Optimizasyonu", text: "Milyonlarca dolarlık füzeler yerine tek atışı birkaç dolarlık elektrik enerjisiyle gerçekleştiren ekonomik avantajdır." },
            { subtitle: "Hipersonik Füze Savunma Zorlukları", text: "Ses hızının 5 katından hızlı hareket eden manevra kabiliyetli hedefleri ışık hızında izleyip vurma yeteneğidir." },
            { subtitle: "Yüksek Güçlü Mikrodalga (HPM) Silahları", text: "Fiziksel delme yerine hedef cihazın elektronik devrelerini ve çiplerini kızartarak etkisiz kılan dalga sistemleridir." },
            { subtitle: "Deniz ve Hava Platformu Entegrasyonu", text: "Savaş gemilerinin ve uçakların üzerine monte edilerek yakın savunma güvenliğini sağlayan kompakt enerji üniteleridir." },
            { subtitle: "Işık Hızında Anında Müdahale", text: "Mermi seyahat süresi olmaksızın tetik basıldığı anda hedefe varan balistik gecikmesiz vurucu güçtür." },
            { subtitle: "Enerji Depolama ve Kondansatör Sistemleri", text: "Lazerin ihtiyaç duyduğu devasa elektrik akımını milisaniyeler içinde depolayıp boşaltan yüksek kapasiteli ünitelerdir." },
            { subtitle: "Geleceğin Askeri Doktrin Değişimi", text: "Barut çağının yavaş yavaş kapanarak yönlendirilmiş enerji teknolojilerinin savaş sahasına hakim olmasıdır." }
        ]
    },
    {
        id: "78-biyosensorler-ve-nanomed",
        cat: "biotechnology",
        icon: "🩺",
        title: "78. Nanomedikal Biyosensörler ve Akıllı İlaç Salınımı",
        desc: "Vücut içindeki hastalıkları anında tespit edip sadece hastalıklı hücreye ilaç salan nano-botlar.",
        subitems: [
            { subtitle: "Nanopartikül İlaç Taşıyıcıları", text: "Kanser ilaçlarının sağlıklı hücrelere zarar vermeden doğrudan tümör dokusuna yönlendirilmesini sağlayan lipid kaplı küreciklerdir." },
            { subtitle: "Hücre Boyutunda Biyosensörler", text: "Kan dolaşımında serbest gezerek glikoz, kolesterol veya kanser belirteçlerini anlık olarak ölçen nano-çiplerdir." },
            { subtitle: "Manyetik Alanla Yönlendirilen Nano-Botlar", text: "Dışarıdan uygulanan manyetik alanlar yardımıyla damar içinde istenen bölgeye hassasiyetle taşınan mikro makinelerdir." },
            { subtitle: "Tetiklenebilir İlaç Salınım Mekanizmaları", text: "Sadece belirli bir ısı, asitlik (pH) veya enzim seviyesiyle karşılaştığında içeriğindeki ilacı serbest bırakan akıllı kaplamalardır." },
            { subtitle: "Erken Teşhis ve Lab-on-a-Chip", text: "Tek bir damla kanla onlarca farklı hastalığı evde birkaç dakika içinde teşhis eden mikro akışkan laboratuvar cihazlarıdır." },
            { subtitle: "Biyouyumlu ve Çözünebilir Nano-Yapılar", text: "Vücut içindeki görevini tamamladıktan sonra hiçbir kalıntı bırakmadan güvenle eriyip atılan polimerik maddelerdir." },
            { subtitle: "Tümör Hücresi Hedefleme Reseptörleri", text: "Yalnızca kanser hücrelerinin yüzeyindeki proteinlere kilitlenen özel antikor kaplı nano-parçacık tasarımlarıdır." },
            { subtitle: "Gerçek Zamanlı Sağlık Takip Ağı", text: "Vücut içi sensörlerin topladığı verileri akıllı telefonlara kablosuz aktararak doktorları erken uyarması sistemidir." },
            { subtitle: "Minimal İnvaziv Tedavi Devrimi", text: "Büyük ameliyatlara ve kemoterapinin ağır yan etkilerine gerek kalmadan nokta atışı hücresel iyileştirme sağlamaktır." },
            { subtitle: "Geleceğin Önleyici Nanotıbbı", text: "Hastalıklar vücutta büyük hasar açmadan nano-botlar tarafından henüz başlangıç aşamasındayken yok edilmesidir." }
        ]
    },
    {
        id: "79-akilli-sebekeler",
        cat: "technology",
        icon: "⚡",
        title: "79. Akıllı Elektrik Şebekeleri ve Enerji Depolama",
        desc: "Yapay zeka ile yönetilen, yenilenebilir enerjiyi optimize eden akıllı güç dağıtım sistemleri.",
        subitems: [
            { subtitle: "Çift Yönlü Enerji Akışı", text: "Tüketicilerin aynı zamanda güneş panelleriyle ürettikleri fazlalık elektriği şebekeye geri satabilmesini sağlayan altyapıdır." },
            { subtitle: "Yapay Zeka ile Talep Tahmini", text: "Hava durumunu, tatil günlerini ve tüketim alışkanlıklarını analiz ederek elektrik üretimini anlık optimize eden AI sistemleridir." },
            { subtitle: "Akıllı Sayaç (Smart Metering) Ağları", text: "Evlerdeki elektrik tüketimini saatlik olarak takip eden ve şebeke merkeziyle kablosuz veri paylaşan dijital sayaçlardır." },
            { subtitle: "Geniş Ölçekli Batarya Depolama (BESS)", text: "Rüzgar ve güneş santrallerinde üretilen fazla elektriğin lityum veya akışkan pillerde depolanarak gece kullanılmasını sağlar." },
            { subtitle: "Şebeke Arızası Otomatik İzolasyonu", text: "Sistemde bir patlama veya hat kopması olduğunda elektriği otomatik keserek diğer bölgelerin kararmasını önleyen akıllı anahtarlardır." },
            { subtitle: "Mikroşebeke (Microgrid) Sistemleri", text: "Üniversite kampüsleri veya küçük yerleşimlerin ana şebekeden bağımsız kendi enerjisini üretip yönetebildiği özerk ağlardır." },
            { subtitle: "Elektrikli Araç Şebeke Entegrasyonu (V2G)", text: "Park halindeki elektrikli araçların akülerinin şebekenin yükünü dengelemek için geçici depo olarak kullanılmasıdır." },
            { subtitle: "Dağıtık Enerji Kaynakları Yönetimi", text: "Binlerce küçük güneş ve rüzgar santralinin tek bir merkezi sistemden senkronize şekilde kontrol edilmesidir." },
            { subtitle: "Kritik Altyapı Siber Güvenliği", text: "Akıllı şebekelerin dışarıdan gelebilecek siber saldırılara ve şebeke korsanlığına karşı korunması için alınan kriptografik önlemlerdir." },
            { subtitle: "Fosil Yakıtsız Enerji Geleceği", text: "Yenilenebilir enerjinin kesintili olma dezavantajını tamamen ortadan kaldırarak kesintisiz yeşil enerji arzı sağlamaktır." }
        ]
    },
    {
        id: "80-sentetik-biyoloji",
        cat: "biotechnology",
        icon: "🧫",
        title: "80. Sentetik Biyoloji ve Yapay Yaşam Formları",
        desc: "Canlı DNA dizilimlerinin sıfırdan tasarlanarak programlanabilir biyolojik fabrikalara dönüştürülmesi.",
        subitems: [
            { subtitle: "Sentetik Genom Sentezi", text: "Doğada bulunmayan tamamen yapay DNA dizilimlerinin laboratuvarda kimyasal olarak sıfırdan basılması ve kodlanmasıdır." },
            { subtitle: "Programlanabilir Hücre Fabrikaları", text: "Bakterilerin içine yazılım gibi genetik komutlar yüklenerek plastik yiyen veya ilaç üreten canlılara dönüştürülmesidir." },
            { subtitle: "CRISPR ile Gelişmiş Gen Düzenleme", text: "DNA üzerindeki hastalıklı veya istenmeyen kod bloklarının moleküler makaslarla kesilerek yerine doğru dizilimin yazılmasıdır." },
            { subtitle: "Biyo-Üretimle Plastik Alternatifleri", text: "Petrol bazlı plastikler yerine mikroorganizmalar tarafından üretilen tamamen doğada çözünebilir biyopolimerlerin imalatıdır." },
            { subtitle: "Yapay Organeller ve Hücre İçi Tasarım", text: "Doğal hücrelerde bulunmayan, tamamen insan mühendisliği ürünü yeni kimyasal tepkime üreten hücresel alt birimlerdir." },
            { subtitle: "Biyogüvenlik ve Kontrol Mekanizmaları", text: "Yapay canlıların laboratuvar dışına kaçmasını önlemek için genetiklerine yerleştirilen özel intihar anahtarlarıdır." },
            { subtitle: "Tıbbi Nanomakine Üretimi", text: "Canlı hücrelerin fabrikasyon hatları gibi kullanılarak insan vücudunda hastalık avlayacak nano-bileşenler üretmesidir." },
            { subtitle: "Gıda Sektöründe Sentetik Proteinler", text: "İnek kesmeden, laboratuvarda maya ve bakteriler yardımıyla birebir gerçek et tadında proteinlerin üretilmesidir." },
            { subtitle: "Biyolojik Veri Depolama", text: "Terabaytlarca dijital verinin (fotoğraf, video) DNA sarmalları içine kodlanarak binlerce yıl bozulmadan saklanmasıdır." },
            { subtitle: "Yaratılış Sınırlarının Yeniden Tanımı", text: "İnsanlığın doğayı taklit etmekten öteye geçerek sıfırdan yeni yaşam formları tasarladığı biyoteknolojik devrimdir." }
        ]
    },
    {
        id: "81-derin-uzay-iletisim",
        cat: "astronomy",
        icon: "📡",
        title: "81. Derin Uzay Optik İletişim ve Lazer Ağları",
        desc: "Radyo dalgalarının yerini alan, güneş sistemi içinde gigabit hızında veri ileten lazer haberleşmesi.",
        subitems: [
            { subtitle: "Derin Uzay Lazer İletişimi (DSOC)", text: "Milyonlarca kilometre uzaktaki uzay araçlarından Dünya'ya radyo yerine yüksek frekanslı lazer ışınlarıyla veri aktarımıdır." },
            { subtitle: "Veri Aktarım Hızında Katlanma", text: "Klasik radyo antenlerinin yıllar süren veri indirme sürelerini saniyeler mertebesine düşüren devrimsel bant genişliğidir." },
            { subtitle: "Güneş Sistemi Geniş Alan Ağı", text: "Mars, Ay ve Jüpiter üsleri arasında kesintisiz gigabit internet köprüleri kurarak galaktik ağ altyapısı oluşturmaktır." },
            { subtitle: "Hassas Teleskopik Alıcı İstasyonları", text: "Yeryüzüne yerleştirilen özel kızılötesi teleskoplarla uzaydan gelen zayıf lazer fotonlarının hatasız yakalanmasıdır." },
            { subtitle: "Atmosferik Bulut Engeli Çözümleri", text: "Lazer hatlarının bulutlardan etkilenmemesi için yer istasyonlarının yüksek dağlara ve çoklu noktalara kurulmasıdır." },
            { subtitle: "Derin Uzayda Yön Bulma ve Takip", text: "Lazer ışınının milimetrik hassasiyeti sayesinde uzay sondalarının konumunun ışık hızında tam olarak hesaplanmasıdır." },
            { subtitle: "4K Canlı Yayın Aktarımı", text: "Gelecekte Mars'taki kolonistlerin Dünya ile yüksek çözünürlüklü kesintisiz görüntülü iletişim kurabilmesini sağlar." },
            { subtitle: "Küçük Boyutlu Uzay Vericileri", text: "Radyo antenlerine kıyasla çok daha küçük, hafif ve az enerji tüketen kompakt optik transponder tasarımlarıdır." },
            { subtitle: "Kritik Bilimsel Veri Paylaşımı", text: "Uzay teleskoplarının çektiği devasa evren fotoğraflarının ve analiz verilerinin dünyaya anında ulaştırılmasıdır." },
            { subtitle: "Galaktik İnternet Omurgası", text: "İnsanlığın çok gezegenli bir türe dönüşürken kuracağıler arası iletişim ağının teknolojik temel taşıdır." }
        ]
    },
    {
        id: "82-plazma-itki-sistemleri",
        cat: "physics",
        icon: "🚀",
        title: "82. İleri Hall-Etkisi ve Plazma İtki Sistemleri",
        desc: "Kimyasal roketlerin ötesine geçen, yüksek verimli iyon ve plazma tabanlı uzay motorları.",
        subitems: [
            { subtitle: "Hall-Etkisi İtki Prensibi", text: "Elektrik ve manyetik alanlar kullanılarak xenon gibi gazların iyonize edilmesi ve yüksek hızla püskürtülmesidir." },
            { subtitle: "Yüksek Özgül İtme (Isp) Verimliliği", text: "Kimyasal yakıtlara göre çok daha az madde harcayarak aylarca kesintisiz itki üretebilen uzay motoru teknolojisidir." },
            { subtitle: "Mars Görevleri ve Derin Uzay Seyahati", text: "Yolculuk sürelerini dramatik şekilde kısaltan ve ağır yükleri derin uzaya taşıyan ana motor sistemleridir." },
            { subtitle: "Elektrik Güç Kaynağı Entegrasyonu", text: "Güneş panelleri veya küçük nükleer reaktörler tarafından üretilen yüksek elektriğin plazma odasına aktarılmasıdır." },
            { subtitle: "Düşük İtme, Uzun Süreli İvmelenme", text: "Kalkış anında zayıf olsa da uzay boşluğunda günlerce çalışarak devasa son hızlara ulaşan motor karakteristiğidir." },
            { subtitle: "Magnetoplasmadinamik (MPD) Motorlar", text: "Daha da yüksek güçler üreterek gelecekte dış güneş sistemine insanlı seyahatleri mümkün kılan gelişmiş sistemlerdir." },
            { subtitle: "Uydu Konum Koruma (Station-Keeping)", text: "Haberleşme uydularının yörüngelerinde yıllarca kalabilmesi için hassas yön düzeltme manevraları yapmasını sağlar." },
            { subtitle: "Manyetik Nozul Tasarımları", text: "Aşırı sıcak plazmanın metal duvarları eritmesini önlemek için manyetik alanla hapsedilerek yönlendirilmesidir." },
            { subtitle: "Uzay Kargo Taşımacılığı Ekonomisi", text: "Yörüngeler arası yakıt maliyetlerini düşürerek uzay ticaretinin sürdürülebilirliğini sağlayan kritik teknolojidir." },
            { subtitle: "Yıldızlararası Yolculuk Adımları", text: "Geleceğin daha da ileri füzyon roketlerine geçiş sürecinde köprü görevi gören plazma motoru mimarisidir." }
        ]
    },
    {
        id: "83-atomik-hassasiyetli-uretim",
        cat: "physics",
        icon: "🔬",
        title: "83. Atomik Hassasiyetli Üretim ve Nanoteknoloji",
        desc: "Maddeleri atom atom inşa ederek kusursuz yapılar ve mikroçipler üretme bilimi.",
        subitems: [
            { subtitle: "Taramalı Tünelleme Mikroskobu (STM)", text: "Teknik olarak atomların yerini tek tek görerek değiştirmeyi ve manipüle etmeyi sağlayan nano-mikroskoptur." },
            { subtitle: "Moleküler Üretim (Molecular Manufacturing)", text: "Gelecekte atomları Lego taşları gibi birleştirerek istenen her nesneyi kusursuz hatasız üretecek nanobobot vizyonudur." },
            { subtitle: "Kusursuz Kristal Yapılar", text: "İçinde hiçbir mikroskobik çatlak veya safsızlık barındırmayan, çelikten katlarca sağlam nano-malzemelerin imalatıdır." },
            { subtitle: "2 Nanometre Çip Üretim Teknolojisi", text: "Trilyonlarca transistörü atomik boyutlara indirgeyerek işlemci hızlarını ve enerji verimliliğini zirveye taşıyan süreçtir." },
            { subtitle: "Kuantum Tünelleme Sınırları", text: "Transistörler atomik küçüklüğe ulaştığında elektronların yalıtkanlardan sızması sorununa karşı geliştirilen yeni mimarilerdir." },
            { subtitle: "Grafen Katman Entegrasyonu", text: "Karbon atomlarının bal peteği kafes düzeninde birleştirilmesiyle elde edilen üstün iletken nano-tabakaların üretimidir." },
            { subtitle: "Kendi Kendini Monte Eden Malzemeler", text: "Kimyasal özellikleri sayesinde dış müdahale olmaksızın kendi kendine kusursuz form alan akıllı nano-yapılardır." },
            { subtitle: "Enerji Kaybını Sıfırlayan İletkenler", text: "Atomik düzeyde pürüzsüz üretilen iletken hatlar sayesinde elektrik iletiminde ısı kayıplarının tamamen önlenmesidir." },
            { subtitle: "Nanotıp ve Hücresel Aletler", text: "İnsan kan damarlarında serbestçe dolaşarak hücresel onarım yapabilecek atomik boyutlu cerrahi araçların tasarımıdır." },
            { subtitle: "Üretim Devriminin Son Sınırı", text: "İnsanlığın hammadde işleme teknolojisinden doğrudan maddeyi tasarlama ve atomik inşa etme aşamasına geçişidir." }
        ]
    },
    {
        id: "84-noromorfik-yapay-zeka-cipleri",
        cat: "quantum",
        icon: "🧠",
        title: "84. Nöromorfik Yapay Zeka Çipleri ve Nöromimasite",
        desc: "İnsan beyin mimarisini taklit ederek milyonlarca kat daha az enerji harcayan akıllı çipler.",
        subitems: [
            { subtitle: "Yapısal Sinaps ve Nöron Simülasyonu", text: "Silikon çipler üzerinde insan beynindeki nöron ağlarını ve elektrik sinaps bağlantılarını fiziksel olarak taklit eden tasarımdır." },
            { subtitle: "Olay Tabanlı (Event-Driven) İşlem", text: "Klasik bilgisayarlar gibi sürekli saat döngüsüyle çalışmak yerine sadece bir veri veya değişiklik olduğunda aktifleşen sistemdir." },
            { subtitle: "Aşırı Düşük Enerji Tüketimi", text: "Devasa yapay zeka modellerini dev sunucu parkları yerine küçük bir pil ile akıllı telefon veya robot içinde çalıştırma becerisidir." },
            { subtitle: "IBM TrueNorth ve Intel Loihi Projeleri", text: "Milyonlarca yapay nöronu barındıran ve beyin gibi öğrenen öncü nöromorfik çip mimari örnekleridir." },
            { subtitle: "Biyolojik Öğrenme Kuralları (Spike-Timing)", text: "Yapay nöronların sinyallerin zamanlamasına göre aralarındaki bağları güçlendirerek (plastisite) kendi kendine öğrenmesidir." },
            { subtitle: "Göz ve Kulak Sensör Entegrasyonu", text: "İnsan retinası gibi çalışan olay tabanlı kameralardan gelen verileri anında işleyen akıllı algılayıcı çiplerdir." },
            { subtitle: "Gerçek Zamanlı Otonom Karar Verme", text: "Otonom araçların ve droneların milisaniyeden kısa sürede çevrelerindeki hareketleri algılayıp tepki vermesini sağlar." },
            { subtitle: "Yapay Bilinç ve Bilişsel Mimari", text: "Gelecekte insan benzeri mantık yürüten, sezgisel kararlar alabilen bilinçli yapay zeka sistemlerinin donanımsal temelidir." },
            { subtitle: "Hafıza ve İşlem Birliği", text: "Klasik bilgisayarlardaki bellek ile işlemci arasındaki veri taşıma darboğazını ortadan kaldıran beyin benzeri entegrasyondur." },
            { subtitle: "Geleceğin Biyolojik Bilgisayarları", text: "Elektronik mühendisliği ile nörolojinin kesiştiği noktada doğan, bilgisayar dünyasının en büyük mimari dönüşümüdür." }
        ]
    },
    {
        id: "85-atmosferik-su-hasadi",
        cat: "technology",
        icon: "💧",
        title: "85. Atmosferik Su Hasadı ve Nemden Su Üretimi",
        desc: "Çöllerde ve kurak iklimlerde havadaki görünmez nemi çekerek içme suyuna dönüştüren sistemler.",
        subitems: [
            { subtitle: "Metal-Organik Çerçeveler (MOF)", text: "Güneş ışığı yardımıyla havadan gece nemi emen ve gündüz ısıtıldığında saf su buharı salgılayan akıllı gözenekli maddelerdir." },
            { subtitle: "Güneş Enerjili Su Üretim Panelleri", text: "Hiçbir elektrik şebekesine ihtiyaç duymadan sadece güneş enerjisiyle çalışarak günlük litrelerce içme suyu üreten sistemlerdir." },
            { subtitle: "Kurak İklimlerde Yaşam Desteği", text: "Su kaynaklarının hiç bulunmadığı çöl bölgelerinde ve adalarda insanlara bağımsız temiz su temin eden teknolojidir." },
            { subtitle: "Aktif Yoğuşturma Sistemleri", text: "Havadaki nemi elektrikli soğutma yüzeylerinde yoğunlaştırarak sıvı suya çeviren taşınabilir endüstriyel cihazlardır." },
            { subtitle: "Nanoteknolojik Hidrofilik Yüzeyler", text: "Su moleküllerini mıknatıs gibi kendine çeken ve tutan özel nanometre ölçekli kaplama malzemeleridir." },
            { subtitle: "Kritik Su Krizi Çözüm Potansiyeli", text: "Küresel iklim değişikliği ve kuraklık nedeniyle içme suyu kaynakları azalan dünyamız için hayati bir alternatif kaynaktır." },
            { subtitle: "Şebekeden Bağımsız (Off-Grid) Yapı", text: "Köy ve kasabaların kendi su ihtiyaçlarını merkezi boru hatlarına gerek kalmadan yerinde karşılamasını sağlar." },
            { subtitle: "Mineral Zenginleştirme Filtreleri", text: "Havadan elde edilen son derece saf damıtık suyunun insan tüketimi için gerekli minerallerle tatlandırılması sürecidir." },
            { subtitle: "Askeri ve Saha Operasyon Destekleri", text: "Orduların çöl veya kurak çatışma bölgelerinde lojistik suya bağımlılığını ortadan kaldıran taşınabilir ünitelerdir." },
            { subtitle: "Geleceğin Su Güvenliği Vizyonu", text: "Dünyanın su kıtlığı çeken bölgelerini yeşertmek ve insanlığın temel su hakkını güvence altına almak için kritik bir adımdır." }
        ]
    },
    {
        id: "86-biyomekanik-eksoskeletler",
        cat: "technology",
        icon: "🦾",
        title: "86. Biyomekanik Dış İskeletler (Exosuit) ve İnsan Gücü Artırımı",
        desc: "İnsanların fiziksel gücünü katlayan, ağır yükleri tüy gibi kaldıran giyilebilir robotik sistemler.",
        subitems: [
            { subtitle: "Pnömatik ve Elektrikli Aktüatörler", text: "Eklem noktalarına binen yükü algılayarak anında insan kaslarına destek veren güçlü motor ve hava basınç sistemleridir." },
            { subtitle: "Endüstriyel Depo ve Lojistik Kullanımı", text: "Fabrika işçilerinin tonlarca ağırlığındaki yükleri saatlerce bel ve sırt ağrısı çekmeden kaldırmasını sağlayan giysilerdir." },
            { subtitle: "Askeri Ağır Yük Taşımacılığı", text: "Askerlerin dağlık arazilerde onlarca kilo mühimmatı yorulmadan ve hızla taşımasına olanak tanıyan taktik dış iskeletlerdir." },
            { subtitle: "Felçli Bireyler İçin Yürüme Destekleri", text: "Omurilik yaralanması geçiren hastaların tekerlekli sandalyeden kurtulup yeniden dik yürüyebilmesini sağlayan medikal sistemlerdir." },
            { subtitle: "Niyet Algılayan Sensör Ağı", text: "Kullanıcının adım atma veya kaldırma niyetini kas sinyallerinden milisaniyeler önce sezip motorları eş zamanlı çalıştıran yazılımdır." },
            { subtitle: "Hafif Karbon Fiber Gövde Tasarımı", text: "Kullanıcıya ekstra ağırlık yüklemeyen, esnek ve vücudu ikinci bir deri gibi saran havacılık sınıfı iskelet yapılarıdır." },
            { subtitle: "Rehabilitasyon ve Fizik Tedavi", text: "Felç veya kaza geçiren hastaların kas hafızasını yeniden kazanması için hastanelerde kullanılan akıllı egzersiz robotlarıdır." },
            { subtitle: "Uzun Süreli Batarya Optimizasyonu", text: "Gün boyu sahada kesintisiz çalışabilmeyi sağlayan hafif, yüksek enerji yoğunluklu lityum-silisyum batarya sistemleridir." },
            { subtitle: "İş Güvenliği ve Mesleki Sağlık", text: "İş kazalarını, bel fıtığı ve kas yırtılması gibi kronik meslek hastalıklarını büyük ölçüde önleyen koruyucu teknolojidir." },
            { subtitle: "Geleceğin Güçlendirilmiş İnsanı", text: "İnsan biyolojisinin fiziksel sınırlarını teknolojiyle birleştirerek çok daha güçlü ve dayanıklı bir çalışma çağı başlatmasıdır." }
        ]
    },
    {
        id: "87-molekuler-bilgi-isleme",
        cat: "quantum",
        icon: "🧬",
        title: "87. Moleküler Bilişim ve DNA Veri Depolama",
        desc: "Verileri silikon çipler yerine DNA sarmalları içine kodlayarak binlerce yıl saklama teknolojisi.",
        subitems: [
            { subtitle: "DNA'nın Bilgi Yoğunluğu Üstünlüğü", text: "Birkaç gramlık DNA molekülü içinde tüm dünya internet verisinin sığabileceği kadar devasa bir depolama kapasitesi barındırmasıdır." },
            { subtitle: "Adenin-Timin Kodlama Çevirisi", text: "Bilgisayarların ikili (binary 0 ve 1) sisteminin DNA'nın dört temel nükleotid harfine (A, T, C, G) dönüştürülerek yazılmasıdır." },
            { subtitle: "Binlerce Yıl Bozulmadan Saklanma", text: "Uygun koşullarda saklanan DNA örneklerinin milyonlarca yıl boyunca radrasyondan ve zamandan etkilenmeden veri korumasıdır." },
            { subtitle: "Sentez ve Sekanslama Maliyetleri", text: "DNA yazma ve okuma teknolojilerinin ucuzlaşarak silikon disklerle ekonomik olarak rekabet edebilir hale gelmesi sürecidir." },
            { subtitle: "Sıfır Enerjiyle Uzun Süreli Arşiv", text: "Sabit diskler gibi sürekli elektrik akımı veya soğutma gerektirmeden pasif olarak veriyi muhafaza etme özelliğidir." },
            { subtitle: "Biyolojik Hata Düzeltme Mekanizmaları", text: "DNA'nın kendi kendini onarma özelliklerinden esinlenerek veri kayıplarını önleyen moleküler algoritmaların geliştirilmesidir." },
            { subtitle: "Hükümet ve Kurumsal Arşiv Çözümleri", text: "İnsanlığın tüm tarihi kayıtlarının, kütüphanelerinin ve bilimsel verilerinin tek bir odada kalıcı olarak depolanmasıdır." },
            { subtitle: "Enzim Tabanlı Rastgele Erişim (Random Access)", text: "Milyarlarca dosya içinden istenen spesifik verinin özel biyolojik kimyasal etiketlerle hızlıca bulunup okunmasıdır." },
            { subtitle: "Biyogüvenlik ve Şifreleme", text: "Depolanan hassas verilerin genetik dizilim anahtarlarıyla şifrelenerek dışarıdan okunmasının imkansız kılınmasıdır." },
            { subtitle: "Bilgi Çağının Organik Dönüşümü", text: "Dijital veri depolama krizine karşı doğanın milyarlarca yıldır kullandığı en mükemmel bilgi saklama yönteminin benimsenmesidir." }
        ]
    },
    {
        id: "88-manyetik-konfinmanli-fuzyon",
        cat: "physics",
        icon: "⚛️",
        title: "88. Manyetik Konfinmanlı Füzyon (Tokamak ve Stellarator)",
        desc: "Güneş'in kalbindeki enerji üretimini Dünya'da taklit eden dev mıknatıs sargılı reaktörler.",
        subitems: [
            { subtitle: "Tokamak Halkasal Reaktör Mimarisi", text: "Plazmanın devasa halka şeklindeki manyetik alan kafesleri içinde hiçbir yere değmeden havada tutulması sistemidir." },
            { subtitle: "Stellarator Bükümlü Meydan Okuması", text: "Plazmayı kararlı tutmak için karmaşık sarmal mıknatıs geometrileri kullanan kesintisiz füzyon reaktör tasarımıdır." },
            { subtitle: "100 Milyon Derece Plazma Sıcaklığı", text: "İzotopların (deteryum-trityum) füzyon tepkimesi başlatabilmesi için Güneş'in merkezinden bile sıcak ortama ısıtılmasıdır." },
            { subtitle: "Yüksek Sıvı Helyum Süperiletkenler", text: "Plazmayı hapsetmek için gereken devasa manyetik alanları üreten mutlak sıfıra yakın soğutulmuş elektromıknatıslardır." },
            { subtitle: "ITER Projesi ve Uluslararası İşbirliği", text: "Dünyanın en büyük bilim konsorsiyumu tarafından Fransa'da kurulan devasa füzyon enerji test reaktörüdür." },
            { subtitle: "Temiz ve Sınırsız Enerji Potansiyeli", text: "Radyoaktif atık bırakmayan, nükleer erime riski taşımayan ve deniz suyundan yakıt üretilen ideal enerji kaynağıdır." },
            { subtitle: "Nötron Duvarı Dayanıklılık Sorunu", text: "Yüksek enerjili nötronların reaktör iç duvarlarını zamanla deforme etmesine karşı dayanıklı yeni alaşım arayışlarıdır." },
            { subtitle: "Q Faktörü (Enerji Kazanç Oranı)", text: "Reaktörü çalıştırmak için harcanan enerjiden daha fazlasının füzyon tepkimesinden net olarak elde edilmesi eşiğidir." },
            { subtitle: "Lityum Battaniye ile Trityum Üretimi", text: "Reaktör duvarlarına yerleştirilen lityum katmanları sayesinde yakıtın kendi kendini üretmesi döngüsüdür." },
            { subtitle: "İnsanlığın Nihai Enerji Çözümü", text: "Fosil yakıtlara ve iklim krizine son vererek uygarlığı tip-1 medeniyet seviyesine taşıyacak en büyük mühendislik projesidir." }
        ]
    },
    {
        id: "89-biyometrik-davranissal-analiz",
        cat: "technology",
        icon: "👁️",
        title: "89. Davranışsal Biyometri ve Yapay Zeka ile Profilleme",
        desc: "Parmak izinden öte, klavye tuş vuruşları ve yürüyüş tarzından insanları benzersiz tanıma teknolojisi.",
        subitems: [
            { subtitle: "Klavye Dinamiği (Keystroke Dynamics)", text: "Kullanıcının klavyede tuşlara basma hızı, parmaklar arası geçiş süresi ve basma kuvvetiyle kimlik doğrulamasıdır." },
            { subtitle: "Yürüyüş (Gait) Analizi Teknolojisi", text: "Kişinin yürürken attığı adım uzunluğu, vücut salınımı ve yerle temas açısını kameralarla analiz ederek tanımaktır." },
            { subtitle: "Fare Kullanım Alışkanlığı Profili", text: "Mouse imlecini hareket ettiris hızı, tıklama eğrileri ve ekran üzerindeki gezinme alışkanlıklarının takibidir." },
            { subtitle: "Sürekli Kimlik Doğrulama (Continuous Auth)", text: "Şifreyi sadece girişte sorup sonra unutan sistemlerin aksine kullanıcının davranışlarını arka planda sürekli izlemesidir." },
            { subtitle: "Ses ve Konuşma Ritim Analizi", text: "Kelime telaffuz vurguları, nefes alma aralıkları ve ses tonu dalgalanmalarıyla biyometrik imza çıkarılmasıdır." },
            { subtitle: "Dolandırıcılık (Fraud) Tespiti", text: "Bankacılık veya e-ticaret hesaplarına giriş yapan kişinin gerçek sahibi olup olmadığını davranış sapmalarından anında anlamaktır." },
            { subtitle: "Göz Hareketi (Okülomotor) Takibi", text: "Ekranlara bakarken gözün odaklanma süreleri ve tarama rotalarının kişiye özel ayırt edici özelliklerinin incelenmesidir." },
            { subtitle: "Derin Öğrenme Modelleri ile Eşleme", text: "Karmaşık yapay zeka ağlarının milyonlarca davranışsal veriyi saniyeler içinde analiz ederek şüpheli işlemleri bloke etmesidir." },
            { subtitle: "Mahremiyet ve Gözetim Tartışmaları", text: "Davranışların sürekli izlenmesinin bireysel gizlilik haklarını ihlal edip etmediğine dair hukuki ve etik sınırlardır." },
            { subtitle: "Şifresiz Dijital Güvenlik Geleceği", text: "Kullanıcıların hiçbir şey hatırlamasına veya taşınabilir cihaz kullanmasına gerek kalmadan tamamen doğal hareketleriyle korunmasıdır." }
        ]
    },
    {
        id: "90-gezegen-savunma-sistemleri",
        cat: "astronomy",
        icon: "☄️",
        title: "90. Gezegen Savunma ve Asteroit Saptırma Projeleri",
        desc: "Dünya'ya çarpma riski taşıyan göktaşlarını uzayda tespit edip yörüngesini değiştirme teknolojisi.",
        subitems: [
            { subtitle: "Kinetik Çarpıştırıcı Teknolojisi", text: "Yüksek hızla hareket eden bir uzay aracının asteroide kasten çarparak hızını ve yörüngesini milimetrik saptırma yöntemidir." },
            { subtitle: "NASA DART Misyonu Başarısı", text: "Dimorphos asteroidine çarpan bir uzay aracının göktaşının yörünge periyodunu başarıyla değiştirdiğinin kanıtlandığı ilk testtir." },
            { subtitle: "Yer Tabanlı Erken Uyarı Teleskopları", text: "Gök cisimlerini yıllar öncesinden fark edip olası çarpışma rotalarını hesaplayan devasa otomatik tarama ağlarıdır." },
            { subtitle: "Yerçekimi Traktörü (Gravity Tractor)", text: "Ağır bir uzay aracının asteroide çarpmadan yanına park ederek kendi yerçekimi kuvvetiyle yörüngesini yavaşça çekmesidir." },
            { subtitle: "Nükleer Saptırma Patlamaları", text: "Çok büyük asteroitler için son çare olarak uzayda patlatılacak nükleer başlıklarla yön değiştirme teorisidir." },
            { subtitle: "Güneş Rüzgarı ve Lazer Ablasyonu", text: "Yüksek güçlü lazerlerin asteroit yüzeyini ısıtarak gaz püskürtmesi ve bu sayede roket etkisiyle itilmesi projesidir." },
            { subtitle: "Uluslararası Uzay Ajansları Koordinasyonu", text: "NASA, ESA ve diğer ajansların olası bir asteroit tehdidine karşı ortak kriz müdahale protokolleri kurmasıdır." },
            { subtitle: "Yörünge Hesaplama Hassasiyeti", text: "Keşfedilen göktaşlarının yıllar sonrasındaki konumlarının kelebek etkisi hesaplarıyla hatasız simüle edilmesidir." },
            { subtitle: "Tunguska ve Dinozor Felaketi Dersleri", text: "Geçmişte dünyamıza çarpan yıkıcı göktaşlarının tarihte açtığı yaraların modern teknolojiyle tekrar yaşanmasının önlenmesidir." },
            { subtitle: "İnsanlığın Hayatta Kalma Kalkanı", text: "Dünya'yı kozmik tehditlerden koruyarak uzay çağında güvenli bir sığınak haline getiren stratejik savunma bilimidir." }
        ]
    },
{
        id: "91-kuantum-biyolojisi",
        cat: "quantum",
        icon: "🧬",
        title: "91. Kuantum Biyolojisi ve Kuşların Manyetik Pusulası",
        desc: "Biyolojik süreçlerin temelinde yatan kuantum tünelleme ve dolanıklık mekanizmaları.",
        subitems: [
            { subtitle: "Kriptokrom Proteinleri ve Kuş Pusulası", text: "Göçmen kuşların gözündeki özel proteinlerin dünya manyetik alanını kuantum dolanıklıkla algılamasıdır." },
            { subtitle: "Fotosentezde Kuantum Çınlaması", text: "Bitkilerin güneş enerjisini yapraklarda neredeyse %100 verimle iletmesini sağlayan dalga boyu süperpozisyonudur." },
            { subtitle: "Koku Alma Mekaniğinde Kuantum Tünelleme", text: "Koku reseptörlerinin moleküllerin şeklini değil, yaydığı titreşim frekanslarını tünelleme ile algılaması teorisidir." },
            { subtitle: "Enzim Katalizörlerinde Kuantum Etkisi", text: "Enzimlerin kimyasal reaksiyonları hızlandırırken protonları kuantum tünelleme ile engellerin içinden geçirmesidir." },
            { subtitle: "DNA Mutasyonlarında Proton Sıçraması", text: "DNA bazları arasındaki hidrojen bağlarında protonların kuantum dalgalanmasıyla yer değiştirmesi durumudur." },
            { subtitle: "Biyolojik Sistemlerde Tutarsızlık (Decoherence)", text: "Ilık ve sulu canlı ortamlarının kuantum etkilerini hızla yok etmesine rağmen doğanın bunu nasıl koruduğudur." },
            { subtitle: "Kuantum Sinirbilim Teorileri", text: "İnsan bilincinin ve hafızasının mikrotübül yapıları içindeki kuantum süreçleriyle ilişkili olup olmadığı araştırmalarıdır." },
            { subtitle: "Yapay Biyokuantum Sensörler", text: "Doğadaki kuantum biyolojik mekanizmalardan ilham alınarak geliştirilen ultra hassas medikal algılayıcılardır." },
            { subtitle: "Mitokondriyal Enerji Transferi", text: "Hücre içi enerji santrallerinde elektronların kuantum verimliliğiyle taşınarak ısı kaybının önlenmesidir." },
            { subtitle: "Fizik ve Biyolojinin Kesişimi", text: "Yaşamın en temel sırlarını çözmek için klasik fizik kurallarının yetersiz kaldığı yepyeni bir bilim dalıdır." }
        ]
    },
    {
        id: "92-norogoruntuleme-ve-ba",
        cat: "technology",
        icon: "🧠",
        title: "92. Beyin-Bilgisayar Arayüzleri ve Nöro-Teknolojiler",
        desc: "İnsan düşüncelerinin dijital komutlara dönüştürüldüğü ve beyin sinir ağlarının arayüzlendiği sistemler.",
        subitems: [
            { subtitle: "İnvaziv Beyin Çipleri (Neuralink vb.)", text: "Kafatasına cerrahi olarak yerleştirilen mikroskobik elektrot dizileriyle nöron ateşlemelerinin doğrudan okunmasıdır." },
            { subtitle: "Non-İnvaziv EEG Başlıkları", text: "Kafatası dışından beyin dalgalarını (alfa, beta) algılayarak bilgisayar imlecini hareket ettiren giyilebilir kasklardır." },
            { subtitle: "Felçli Hastalar İçin Dijital İletişim", text: "Konuşma yetisini veya hareketini kaybetmiş bireylerin sadece düşünerek ekrana metin yazmasını sağlayan sistemlerdir." },
            { subtitle: "Optogenetik ile Nöron Kontrolü", text: "Genetik olarak ışığa duyarlı hale getirilen beyin hücrelerinin lazer ışınlarıyla açılıp kapatılması teknolojisidir." },
            { subtitle: "Yapay Görme ve Kortikal İmplantlar", text: "Kör bireylerin göz sinirlerini atlayarak doğrudan görme merkezine kamera görüntülerinin elektrik sinyaliyle aktarılmasıdır." },
            { subtitle: "İki Yönlü Nöral Köprüler", text: "Sadece beyinden veri okumakla kalmayıp, beyne yapay dokunma veya sıcaklık hissi sinyallerinin geri gönderilmesidir." },
            { subtitle: "Düşünce Okuma Algoritmaları", text: "Yapay zeka modellerinin fMRI taramalarını analiz ederek insanın içinden geçirdiği cümleleri görselleştirmesidir." },
            { subtitle: "Bilişsel Yetenek Artırımı (Enhancement)", text: "Gelecekte sağlıklı insanların beyin gücünü, hafıza kapasitesini ve öğrenme hızını artırmak için kullanılan çiplerdir." },
            { subtitle: "Nöro-Etik ve Zihin Mahremiyeti", text: "İnsan düşüncelerinin şirketler veya devletler tarafından okunmasına ve manipüle edilmesine karşı konulan yasal sınırlar." },
            { subtitle: "Transhümanist Gelecek Vizyonu", text: "İnsan zihninin biyolojik sınırları aşarak dijital ağlarla ve yapay zeka bulutlarıyla bütünleştiği evredir." }
        ]
    },
    {
        id: "93-uzay-tabanli-gunes-enerjisi",
        cat: "astronomy",
        icon: "🛰️",
        title: "93. Uzay Tabanlı Güneş Enerjisi Santralleri",
        desc: "Atmosferin bulut ve gece engeline takılmadan uzayda 7/24 kesintisiz güneş enerjisi toplama projeleri.",
        subitems: [
            { subtitle: "Yörüngede Kesintisiz Güneş Yakalama", text: "Dünya'nın gölgesinde kalmayan yüksek yörüngelere kurulan dev fotovoltaik panel tarlalarının sistemidir." },
            { subtitle: "Mikrodalga ile Kablosuz Enerji İletimi", text: "Toplanan devasa enerjinin mikrodalga veya lazer ışınları şeklinde yeryüzündeki alıcı antenlere (rectenna) aktarılmasıdır." },
            { subtitle: "Hava Durumu ve Gece Engelsizliği", text: "Bulut, yağmur veya gece döngülerinden etkilenmediği için yeryüzü panellerinden 8 kat daha fazla verim üretmesidir." },
            { subtitle: "Devasa Hafis Yapı ve Ayna Sistemleri", text: "Kilometrelerce büyüklükteki güneş yansıtıcı aynaların uzayda robotik kollarla parça parça monte edilmesidir." },
            { subtitle: "Küresel Enerji Krizine Çözüm", text: "Fosil yakıtlara ve nükleer atık riskine ihtiyaç duymadan insanlığın tüm elektrik ihtiyacını karşılayacak potansiyeldir." },
            { subtitle: "Güvenlik ve Çevre Etkisi Tartışmaları", text: "İletilen mikrodalga demetlerinin kuşlara, atmosfere veya yanlışlıkla başka bölgelere zarar vermemesi için alınan önlemlerdir." },
            { subtitle: "Uzayda Üretim ve Montaj (ISRU)", text: "Gelecekte panellerin dünyadan taşınmak yerine asteroit madenleri ve Ay'daki silikatlarla doğrudan uzayda üretilmesidir." },
            { subtitle: "Öncü Uzay Ajansı Test Projeleri", text: "ABD, Japonya ve Avrupa uzay ajanslarının uzaydan dünyaya küçük ölçekli kablosuz enerji aktarım denemeleridir." },
            { subtitle: "Yüksek Maliyet ve Lojistik Zorluklar", text: "Kilometrelerce karelik sistemlerin yörüngeye taşınma maliyetlerinin yeniden kullanılabilir roketlerle düşürülmesidir." },
            { subtitle: "Geleceğin Temiz Enerji Şebekesi", text: "Dünya'nın enerji sınırlarını uzayın sınırsız güneş potansiyeliyle birleştiren en büyük kozmik mühendislik adımıdır." }
        ]
    },
    {
        id: "94-gelismis-biyometrik-kriptografi",
        cat: "biotechnology",
        icon: "🛡️",
        title: "94. Gelişmiş Biyometrik Kriptografi ve Genetik Anahtarlar",
        desc: "Kişinin DNA dizilimi ve benzersiz biyolojik verileriyle şifrelenen kırılmaz güvenlik sistemleri.",
        subitems: [
            { subtitle: "DNA Tabanlı Şifreleme Anahtarları", text: "Kullanıcının genetik kodunun özel bir algoritmayla simetrik kripto anahtarına dönüştürülerek veri korumasıdır." },
            { subtitle: "Biyometrik Hata Tolerans Algoritmaları", text: "Parmak izinde zamanla oluşan küçük yıpranmaların veya yüzdeki değişimlerin şifre çözmeyi engellememesini sağlar." },
            { subtitle: "Biyolojik Verilerin Yok Edilemezliği", text: "Şifre unutma derdini bitiren, kişinin kendi vücut yapısının doğrudan anahtar olduğu kusursuz kimlik doğrulamadır." },
            { subtitle: "Kuantum Sonrası Biyometrik Güvenlik", text: "Gelecekteki kuantum bilgisayarların kıramayacağı karmaşık biyolojik entropi tabanlı şifreleme katmanıdır." },
            { subtitle: "Biyometrik Veri Sızıntısına Karşı İptal", text: "Şifrelenmiş biyometrik şablon ele geçirilirse sistemin anahtarı değiştirerek yeni bir kimlik türetebilme esnekliğidir." },
            { subtitle: "Homomorfik Genetik İşleme", text: "DNA verilerinin şifresi çözülmeden, doğrudan bulut üzerinde hastalık veya eşleşme analizi yapılmasına olanak tanır." },
            { subtitle: "Donanım Tabanlı Korumalı Alanlar", text: "Biyometrik anahtar eşleştirme işlemlerinin internete kapalı izole yonga setlerinde yürütülmesidir." },
            { subtitle: "Biyometrik Klonlama Tehditleri", text: "Yapay zeka ile üretilen yüz veya ses deepfake saldırılarına karşı canlılık testleriyle güvenliğin artırılmasıdır." },
            { subtitle: "Etik Mahremiyet ve Genetik Haklar", text: "İnsanların genetik verilerinin sigorta şirketleri veya devletler tarafından izinsiz toplanmasını engelleyen yasalardır." },
            { subtitle: "Geleceğin Şifresiz Dijital Dünyası", text: "Şifre ezberleme devrinin kapanarak tamamen biyolojik ve genetik kimlik doğrulama ağlarına geçilmesidir." }
        ]
    },
    {
        id: "95-manyetik-levitasyonlu-roket",
        cat: "physics",
        icon: "🚀",
        title: "95. Manyetik Levitasyonlu ve Raylı Roket Fırlatma Sistemleri",
        desc: "Roketleri uzaya fırlatırken ilk kilometrelerde devasa yakıt tasarrufu sağlayan Maglev rampaları.",
        subitems: [
            { subtitle: "Sürtünmesiz Raylı İvmelendirme", text: "Roketlerin devasa elektromanyetik raylar üzerinde ses hızının kat kat üstüne çıkarılarak fırlatılması sistemidir." },
            { subtitle: "İlk Aşama Yakıt Tasarrufu", text: "Atmosferin en yoğun ve en çok yakıt harcanan ilk katmanının roket motorları yerine elektrik gücüyle geçilmesidir." },
            { subtitle: "G-Kuvveti Optimizasyonu", text: "Fırlatma ivmesinin kademeli olarak artırılarak hem fırlatma aracının yapısına hem de olası insan taşıma kapasitesine uyarlanmasıdır." },
            { subtitle: "Dikey Fırlatma Zorunluluklarına Alternatif", text: "Devasa yakıt tankları taşıyan geleneksel dik roketlerin maliyetlerini ve karmaşıklığını dramatik şekilde düşürmektir." },
            { subtitle: "Yüksek İrtifa Fırlatma Noktaları", text: "Raylı sistemlerin dağların zirvesine kurularak atmosfer yoğunluğunun en az olduğu noktalardan ateşlenmesidir." },
            { subtitle: "Döner Tabanlı Fırlatma (SpinLaunch)", text: "Vakumlu dev bir çelik tambur içinde roketin saniyede binlerce devir döndürülerek sapan gibi uzaya fırlatılması teknolojisidir." },
            { subtitle: "Uydu Taşımacılığında Maliyet Devrimi", text: "Küçük ve orta ölçekli uyduların uzaya fırlatma maliyetlerini kilogram başına çok ucuz seviyelere indirmektir." },
            { subtitle: "Yeniden Kullanılabilirlik Avantajı", text: "Fırlatma rampasının ve itici sistemlerin tamamen elektrikle çalışması sayesinde her atışta sıfır yakıt maliyeti sağlamasıdır." },
            { subtitle: "Kritik Malzeme Mukavemeti", text: "Kalkış anındaki aşırı hava sürtünmesi ve G kuvvetine dayanabilecek özel alaşımlı roket burun tasarımıdır." },
            { subtitle: "Geleceğin Uzay Limanı Altyapısı", text: "İnsanlığın uzaya erişimini günlük bir rutin haline getirecek endüstriyel fırlatma teknolojilerinin geliştirilmesidir." }
        ]
    },
    {
        id: "96-yapay-zeka-ilac-kesfi",
        cat: "biotechnology",
        icon: "💊",
        title: "96. Yapay Zeka Destekli İlaç Keşfi ve Protein Katlanması",
        desc: "Yıllar süren laboratuvar testlerini günlere indiren AlphaFold ve yapay zeka tabanlı moleküler tıp.",
        subitems: [
            { subtitle: "Protein Üç Boyutlu Yapı Tahmini", text: "Amino asit dizilimlerinden proteinlerin karmaşık 3D katlanma şekillerini milisaniyeler içinde çözen yapay zeka modelleridir." },
            { subtitle: "AlphaFold Devrimi", text: "Biyoloji dünyasının 50 yıldır çözemediği protein katlanma bulmacasını yapay zekayla kusursuz çözen sistemdir." },
            { subtitle: "In Silico İlaç Simülasyonları", text: "Milyonlarca kimyasal bileşenin bilgisayar ortamında hastalık hücreleriyle etkileşiminin test edilerek filtrelenmesidir." },
            { subtitle: "Kişiselleştirilmiş Kanser Tedariki", text: "Hastanın tümör mutasyonuna özel olarak laboratuvarda saatler içinde nokta atışı ilaç molekülünün tasarlanmasıdır." },
            { subtitle: "Nadir Hastalıklar İçin Hızlı Çözüm", text: "Üzerinde çalışmaya değer bulunmayan nadir genetik hastalıklar için ucuz ve hızlı ilaç formülasyonlarının geliştirilmesidir." },
            { subtitle: "Klinik Deney Başarı Oranı Artışı", text: "Yapay zekayla önceden taranan moleküllerin insan deneylerinde yan etki gösterme riskinin büyük ölçüde azaltılmasıdır." },
            { subtitle: "Antibiyotik Direncine Karşı Yeni Nesil", text: "Bakterilerin bağışıklık kazanamayacağı tamamen yapay ve özgün antibiyotik moleküllerinin üretilmesidir." },
            { subtitle: "Maliyet ve Zaman Düşüşü", text: "Geleneksel olarak 10-15 yıl ve milyar dolarlar süren ilaç keşif sürecinin aylara indirilmesidir." },
            { subtitle: "Toksisite ve Yan Etki Tahmini", text: "Molekülün insan vücudundaki karaciğer veya kalp toksisitesinin henüz laboratuvara girmeden simüle edilmesidir." },
            { subtitle: "Tıp Tarihinin Dijital Dönüm Noktası", text: "Kimyasal deneme-yanılma döneminin kapanarak tamamen hesaplamalı ve öngörülebilir tıp bilimine geçişidir." }
        ]
    },
    {
        id: "97-akilli-seffaf-gunes-pilleri",
        cat: "physics",
        icon: "🫟",
        title: "97. Akıllı Şeffaf Güneş Pilleri ve Pencere Teknolojileri",
        desc: "Gözle görülmeyen kızılötesi ışığı emerek binaların camlarını dev birer elektrik santraline çeviren teknoloji.",
        subitems: [
            { subtitle: "Görünmez Işık Geçirgenliği", text: "İnsan gözünün algıladığı görünür ışığı tamamen içeri geçirirken sadece güneşin kızılötesi ve morötesi ışınlarını hapseden camlardır." },
            { subtitle: "Organik Fotovoltaik Hücreler", text: "Karbon bazlı esnek moleküller kullanılarak pencerelerin üzerine tamamen şeffaf ince filmlerin kaplanmasıdır." },
            { subtitle: "Gökdelenlerin Enerji Bağımsızlığı", text: "Cam cepheye sahip devasa binaların kendi elektrik ihtiyaçlarının tamamını dış cephe camlarıyla karşılamasıdır." },
            { subtitle: "Akıllı Telefon Ekranı Şarjı", text: "Telefonların ekran camlarına entegre edilerek gün ışığından telefonun kendi bataryasını sürekli şarj etmesi vizyonudur." },
            { subtitle: "Estetik ve Mimari Entegrasyon", text: "Geleneksel çirkin ve hantal güneş panellerinin aksine binaların dış mimarisini bozmayan görünmez enerji teknolojisidir." },
            { subtitle: "Otomobil Camları ve Menzil Artışı", text: "Elektrikli arabaların tüm cam yüzeylerinin güneş enerjisi üreterek araç menzilini her gün artırmasıdır." },
            { subtitle: "Üretim Maliyeti Optimizasyonu", text: "Şeffaf panellerin ucuz malzemelerle rulo halinde baskı yöntemiyle seri olarak üretilebilmesi çalışmalarıdır." },
            { subtitle: "Isı Yalıtımı ve Enerji Tasarrufu", text: "Güneşin ısı veren kızılötesi ışınlarını emdiği için binaların klima yükünü de azaltarak ek tasarruf sağlamasıdır." },
            { subtitle: "Seralar ve Tarımsal Entegrasyon", text: "Tarım seralarının camlarına uygulanarak bitkilerin büyümesi için gereken ışığı geçirirken elektrik üretilmesidir." },
            { subtitle: "Geleceğin Enerji Üreten Şehirleri", text: "Şehirlerdeki her yüzeyin, binanın ve pencerenin enerji üreten ekolojik birer birime dönüştürülmesidir." }
        ]
    },
    {
        id: "98-uzay-hava-durumu-simulasyonu",
        cat: "cosmology",
        icon: "☀️",
        title: "98. Uzay Hava Durumu ve Güneş Fırtınası Simülasyonları",
        desc: "Güneş'ten kopan patlamaların ve koronal kütle atımlarının (CME) Dünya altyapısına etkilerini öngören sistemler.",
        subitems: [
            { subtitle: "Koronal Kütle Atımı (CME) Takibi", text: "Güneş'in yüzeyinden uzaya fırlatılan milyarlarca tonluk yüklü plazma bulutlarının uydularla anlık izlenmesidir." },
            { subtitle: "Dünya'nın Manyetik Kalkanı (Magnetosfer)", text: "Güneş fırtınalarının gezegenimizin manyetik alanı tarafından saptırılarak kutup bölgelerine yönlendirilmesidir." },
            { subtitle: "Uydu ve Haberleşme Ağları Koruması", text: "Şiddetli güneş fırtınaları sırasında uyduların elektronik kartlarının yanmasını önlemek için güvenli moda alınmasıdır." },
            { subtitle: "GPS ve Navigasyon Kesinti Tahminleri", text: "Yüklü parçacıkların iyonosferi bozarak GPS sinyallerinde yarattığı metrelerce sapmaların önceden hesaplanmasıdır." },
            { subtitle: "Elektrik Şebekeleri Jeomanyetik Etkisi", text: "Dev fırtınaların yeryüzündeki trafo merkezlerinde indüklediği aşırı akımların şehirleri karartmasını önleyen tedbirlerdir." },
            { subtitle: "Kutup Işıkları (Aurora) Tahminleme", text: "Güneş rüzgarlarının yoğunluğuna bağlı olarak dünyanın neresinden aurora borealis izlenebileceğinin modellenmesidir." },
            { subtitle: "Astronot Radyasyon Güvenliği", text: "Uzay istasyonlarındaki (ISS) astronotların fırtına sırasında özel korumalı sığınaklara (storm shelter) yönlendirilmesidir." },
            { subtitle: "Derin Uzay Keşif Uyarı Sistemleri", text: "Güneş'in görünmeyen arka yüzündeki patlamaları tespit etmek için Lagrange noktalarına yerleştirilen erken uyarı uydularıdır." },
            { subtitle: "Yapay Zeka ile Fırtına Modelleme", text: "Geçmiş güneş döngüsü verilerini analiz eden AI sistemlerinin patlamaların dünyaya varış süresini dakik hesaplamasıdır." },
            { subtitle: "Teknolojik Medeniyetin Sigortası", text: "Gelecekte yaşanabilecek büyük bir Carrington Olayı'na karşı tüm dijital altyapının korunmasını sağlayan hayati sistemdir." }
        ]
    },
    {
        id: "99-kuantum-sifreleme-qkd",
        cat: "quantum",
        icon: "🔐",
        title: "99. Kuantum Kriptografi ve Kuantum Dağıtımlı Anahtar (QKD)",
        desc: "Fotonların fizik yasaları gereği dinlenemezlik prensibine dayanan kırılması imkansız şifreleme ağı.",
        subitems: [
            { subtitle: "Heisenberg Belirsizlik İlkesi Temeli", text: "Kuantum düzeyindeki bir fotonun durumunu ölçmeye veya incelemeye çalışmanın onu anında bozarak iz bırakması prensibidir." },
            { subtitle: "Kuantum Dağıtımlı Anahtar (QKD)", text: "İki tarafın gizli iletişim kurmak için kullandığı anahtarın yolda dinlenip dinlenmediğini %100 doğrulayabildiği sistemdir." },
            { subtitle: "Eavesdropping (Dinleme) Tespiti", text: "Araya giren bir siber korsanın fotonları okuma girişimi sisteme ait hata oranını artırarak tarafları anında uyarır." },
            { subtitle: "Devlet Sırları ve Finansal Güvenlik", text: "Askeri haberleşmeler, merkez bankaları ve ulusal güvenlik ağlarının gelecekteki sızmalara karşı korunmasıdır." },
            { subtitle: "K fiber Optik ve Uydu Entegrasyonu", text: "QKD anahtarlarının fiber hatlar üzerinden veya uzaydaki uydular aracılığıyla kıtalararası mesafelere aktarılmasıdır." },
            { subtitle: "Matematiksel Değil Fiziksel Güvenlik", text: "Mevcut şifreleme yöntemlerinin aksine süper bilgisayarların işlem gücüyle çözülemeyen, doğanın yasalarına dayanan korumadır." },
            { subtitle: "Kuantum Bilgisayar Tehdidine Karşı Kalkan", text: "Geleceğin güçlü kuantum bilgisayarlarının RSA gibi klasik şifreleri kırma yeteneğini tamamen etkisiz bırakır." },
            { subtitle: "Bell Eşitsizlikleri ve Dolanıklık Testi", text: "Anahtar dağıtımı sırasında kullanılan fotonların birbirine dolanık olup olmadığının istatistiksel olarak doğrulanmasıdır." },
            { subtitle: "Ticari Kuantum Ağ Ürünleri", text: "Teknoloji şirketlerinin bankalar arası güvenli veri transferi için kurmaya başladığı ticari kuantum şifreleme kutularıdır." },
            { subtitle: "Kriptografi Tarihinin En Büyük Evrimi", text: "İnsanlık tarihinde ilk defa siber güvenliği hacklenemez kılan fiziksel ve matematiksel kesinlik çağının başlangıcıdır." }
        ]
    },
    {
        id: "100-biyolojik-kompozit-malzemeler",
        cat: "biotechnology",
        icon: "🍄",
        title: "100. Biyolojik Kompozitler ve Mantar Tabanlı Ekolojik Ürünler",
        desc: "Mantar miselleri ve tarımsal atıklar kullanılarak üretilen çevre dostu, kendi kendine büyüyen malzemeler.",
        subitems: [
            { subtitle: "Mantar Miselyum Ağı Yapısı", text: "Mantar köklerinin (miselyum) organik atıkları saniyeler içinde sararak doğal bir yapıştırıcı ve bağlayıcı gibi çalışmasıdır." },
            { subtitle: "Polistiren (Köpük) Plastik Alternatifi", text: "Ambalaj ve inşaat sektöründe kullanılan doğada çözünmeyen köpüklerin yerine geçen ekolojik biyolojik bloklardır." },
            { subtitle: "Kendi Kendine Büyüyen Kalıplar", text: "Malzemelerin fabrikalarda enerji harcanarak değil, karanlık odalarda şekillendirilen kalıplar içinde mantar kültürüyle büyütülmesidir." },
            { subtitle: "Tamamen Doğada Çözünebilirlik", text: "Görevini tamamlayan miselyum ürünlerinin toprağa atıldığında birkaç hafta içinde tamamen gübreye dönüşmesidir." },
            { subtitle: "Ateşe ve Suya Dayanıklı Modifikasyonlar", text: "Doğal mantar kompozitlerinin özel organik kaplamalarla yangın geciktirici ve su itici özellikler kazandırılmasıdır." },
            { subtitle: "Mimari ve Mobilya Tasarımı", text: "Hafif, dayanıklı ve estetik masalar, sandalyeler ve hatta ekolojik tuğla binaların mantar bazlı üretilmesidir." },
            { subtitle: "Tarımsal Atıkların Değerlendirilmesi", text: "Çiftliklerde atık olarak yakılan saman, mısır koçanı ve kabukların mantar için besin hammaddesine dönüştürülmesidir." },
            { subtitle: "Havacılık ve Uzay Yalıtımı", text: "Uzay araçlarında hafiflik ve yüksek ses/ısı yalıtımı gerektiren noktalarda kullanılan organik kompozit panellerdir." },
            { subtitle: "Karbon Negatif Üretim Süreci", text: "Üretim aşamasında karbon salmak aksine atmosferden karbon emen bitkisel ve fungal ekolojik imalat döngüsüdür." },
            { subtitle: "Sıfır Atık Döngüsel Ekonomi Vizyonu", text: "Sanayi üretiminin doğaya zarar veren sentetik plastikten arınıp tamamen doğayla uyumlu organik döngüye evrilmesidir." }
        ]
    },
    {
        id: "101-gelismis-otonom-surucu",
        cat: "technology",
        icon: "🚗",
        title: "101. Seviye 5 Otonom Sürüş ve Gelişmiş LiDAR Sistemleri",
        desc: "İnsan sürücüye tamamen ihtiyaç duymayan, yapay zeka ile çevre haritalandıran otonom araç teknolojisi.",
        subitems: [
            { subtitle: "LiDAR ile 3 Boyutlu Çevre Taraması", text: "Milyonlarca lazer ışını göndererek aracın etrafındaki nesnelerin, yayaların ve yolların milimetrik derinlik haritasını çıkarmaktır." },
            { subtitle: "Seviye 5 Tam Otonomi Sınırı", text: "Direksiyon, pedal ve sürücü koltuğuna gerek kalmaksızın aracın her koşulda kendi başına her yere gidebilmesidir." },
            { subtitle: "Yapay Zeka Görsel Algılama Ağları", text: "Kameralardan gelen video akışını anlık işleyerek trafik ışıklarını, ani engelleri ve şeritleri ayırt eden derin öğrenmedir." },
            { subtitle: "V2X (Araçtan Her Şeye) İletişimi", text: "Otonom araçların diğer arabalarla, trafik lambalarıyla ve yol altyapısıyla kablosuz veri paylaşarak kazaları önlemesidir." },
            { subtitle: "Yedekli (Redundant) Güvenlik Sistemleri", text: "Bilgisayar donanımı, fren sistemi veya elektrik kesilirse devreye giren tamamen bağımsız ikinci yedek kontrol üniteleridir." },
            { subtitle: "HD Haritalandırma ve Konumlama", text: "GPS sinyallerinin yetersiz kaldığı tünel ve gökdelen aralarında milimetrik konum bulmayı sağlayan yüksek çözünürlüklü dijital haritalardır." },
            { subtitle: "Yapay Zeka Karar Verme Algoritmaları", text: "Beklenmeyen yay ve kaza durumlarında milisaniyeler içinde en güvenli manevra kararını veren etik sürüş yazılımlarıdır." },
            { subtitle: "Şehir İçi Trafik Optimizasyonu", text: "Otonom araçların filolar halinde hareket ederek trafik sıkışıklığını bitirmesi ve yakıt/enerji verimliliği sağlamasıdır." },
            { subtitle: "Kaza ve Ölüm Oranlarında Düşüş", text: "İnsan hatalarından (uykusuzluk, dikkat dağınıklığı, hız) kaynaklanan trafik kazalarını %99 oranında ortadan kaldırmasıdır." },
            { subtitle: "Geleceğin Ulaşım ve Şehir Mimarisi", text: "Otoparklara olan ihtiyacın azalmasıyla şehirlerin yeşil alanlara ve insan dostu yaya yollarına dönüştürülmesidir." }
        ]
    },
    {
        id: "102-super-kritik-jeotermal",
        cat: "physics",
        icon: "🌋",
        title: "102. Süper Kritik Jeotermal Enerji ve Derin Sondaj",
        desc: "Magmaya yakın derinliklerdeki aşırı sıcak su ve buharı kullanarak sınırsız temiz elektrik üretme teknolojisi.",
        subitems: [
            { subtitle: "Süper Kritik Akışkan Durumu", text: "Su 374 derece üzerindeki sıcaklık ve basınca ulaştığında ne sıvı ne gaz halindedir; muazzam bir enerji taşıma kapasitesi kazanır." },
            { subtitle: "Magma Odalarına Yakın Sondaj", text: "Normal jeotermal kuyularından çok daha derinlere (10+ kilometre) inerek volkanik ısının doğrudan damarlarına ulaşmaktır." },
            { subtitle: "10 Kat Daha Fazla Güç Üretimi", text: "Tek bir süper kritik sondaj kuyusunun standart jeotermal kuyularından on kat daha fazla elektrik enerjisi üretmesidir." },
            { subtitle: "Milim-Dalga Lazerle Delme Teknolojisi", text: "Mevcut matkap uçlarının eridiği aşırı sıcak magma kayaçlarını yüksek güçlü milimetre dalga lazerleriyle eriterek delme yöntemidir." },
            { subtitle: "7/24 Kesintisiz Yeşil Enerji Arzı", text: "Güneş ve rüzgarın aksine hava durumundan etkilenmeden yılın her günü kesintisiz baz yük elektriği sağlamasıdır." },
            { subtitle: "Küresel Yaygınlık Potansiyeli", text: "Sadece volkanik ülkelerde değil, gelişmiş derin sondaj teknikleriyle dünyanın hemen hemen her yerinde uygulanabilmesidir." },
            { subtitle: "Kritik Malzeme ve Korozyon Direnci", text: "Aşırı sıcak, asidik ve yüksek basınçlı süper kritik suyun boruları ve türbinleri aşındırmasına dayanıklı yeni alaşımlardır." },
            { subtitle: "Fosil Yakıt Santrallerinin Dönüşümü", text: "Eski kömür ve doğalgaz santrallerinin türbin altyapısının süper kritik jeotermal buhar sistemlerine uyarlanmasıdır." },
            { subtitle: "Düşük Yüzey Alanı İhtiyacı", text: "Güneş ve rüzgar tarlaları gibi devasa arazilere ihtiyaç duymadan küçük bir alan üzerinde devasa enerji üretmesidir." },
            { subtitle: "Geleceğin Sınırsız Temiz Enerjisi", text: "Yerkürenin kendi kalbindeki magma ısısını kullanarak insanlığın enerji krizini kalıcı olarak çözen mühendislik vizyonudur." }
        ]
    },
    {
        id: "103-nano-termal-yalitim-aerojel",
        cat: "physics",
        icon: "🧊",
        title: "103. Nanomikroskobik Aerojel ve İleri Termal Yalıtım",
        desc: "Dünyanın en hafif katı maddesi olan, ısıyı tamamen hapsetme kapasitesine sahip nano gözenekli yalıtım malzemesi.",
        subitems: [
            { subtitle: "Mavi Duman ve Nanopöröz Yapı", text: "Hacminin %99.8'i havadan oluşan, ağırlıksız görünümüyle hayaletimsi mavi renkte parlayan silikat bazlı katı maddedir." },
            { subtitle: "Mükemmel Isı İletilmezliği", text: "İçindeki nano gözenekler hava moleküllerinin hareket etmesine izin vermediği için ısı transferini neredeyse tamamen sıfırlar." },
            { subtitle: "Uzay Giysisi ve Mars Keşif Araçları", text: "Astronotların uzay yürüyüşlerinde donmasını önleyen ve roket bileşenlerini aşırı soğuktan koruyan yalıtım katmanıdır." },
            { subtitle: "Binalarda Ultra İnce Yalıtım Devrimi", text: "Kalın mantolama levhaları yerine sadece birkaç milimetre kalınlığında aerojel kaplamalarla maksimum ısı yalıtımı sağlanmasıdır." },
            { subtitle: "Yangın Durdurucu Kalkan Özelliği", text: "Doğrudan alev üfleme testlerinde bile diğer tarafın serin kalmasını sağlayan olağanüstü yangın direnci barındırır." },
            { subtitle: "Endüstriyel Boru Hattı Verimliliği", text: "Petrol ve kimya tesislerindeki devasa sıcak buhar borularının ısı kaybını önleyerek enerji tasarrufu yapmasıdır." },
            { subtitle: "Esnek Polimer Aerojel Geliştirmeleri", text: "Kırılgan cam yapıda olan ilk aerojel versiyonlarının bükülebilir, kumaş gibi sarılabilir formlara dönüştürülmesidir." },
            { subtitle: "Kriptojenik Depolama Kapları", text: "Sıvı hidrojen ve sıvı oksijen gibi aşırı soğuk yakıtların uzay roketlerinde kaynatılmadan uzun süre saklanmasını sağlar." },
            { subtitle: "Hafif Kompozit Üretim Entegrasyonu", text: "Havacılık sektöründe uçak gövdelerinin ağırlığını artırmadan dış ısı değişimlerinden korunmasında kullanılır." },
            { subtitle: "Geleceğin İklimlendirme Tasarımları", text: "Binaların ısıtma ve soğutma maliyetlerini sıfıra indiren yeni nesil nanoteknolojik mimari standartların temelidir." }
        ]
    },
    {
        id: "104-atmosferik-ozon-onarimi",
        cat: "cosmology",
        icon: "🌍",
        title: "104. Atmosferik Ozon Tabakası Onarımı ve Montreal Protokolü",
        desc: "İnsanlığın küresel ölçekte birlikte hareket ederek delinen ozon tabakasını başarıyla iyileştirme tarihi başarıdır.",
        subitems: [
            { subtitle: "Montreal Protokolü Başarı Örneği", text: "1987 yılında imzalanan uluslararası anlaşmayla ozon tabakasını delen kimyasalların (CFC) üretimi küresel yasaklanmıştır." },
            { subtitle: "CFC ve Kloroflorokarbon Yasakları", text: "Soğutucu spreylerde ve klimalarda kullanılan ozon düşmanı gazların yerine zararsız hidroflorokarbonların geçmesidir." },
            { subtitle: "Stratosferik Ozon Yoğunlaşması", text: "Güneş'in zararlı ultraviyole (UV-B ve UV-C) ışınlarını süzerek yeryüzündeki yaşamı kanser riskinden koruyan koruma kalkanıdır." },
            { subtitle: "Kutup Deliklerinin Kapanma Süreci", text: "Antarktika üzerinde oluşan dev ozon deliğinin alınan sıkı önlemler sayesinde yavaş yavaş küçülerek kapanmasıdır." },
            { subtitle: "Bilim İnsanları ve Politika İşbirliği", text: "Konteynır kimyasallarının atmosfere etkisini kanıtlayan bilimsel raporların dünya hükümetlerini ortak karar almaya yönlendirmesidir." },
            { subtitle: "İklim Krizine Model Oluşturma", text: "Küresel ekolojik krizlerin uluslararası işbirliğiyle çözülebileceğinin insanlık tarihindeki en somut ve başarılı kanıtıdır." },
            { subtitle: "Alternatif Soğutucu Teknolojileri", text: "Kimya endüstrisinin ozona zarar vermeyen çevre dostu yeni nesil soğutucu akışkanlar geliştirmesini sağlamıştır." },
            { subtitle: "UV Işınlarına Bağlı Hastalık Azalması", text: "Ozon tabakasının iyileşmesi sayesinde cilt kanseri ve katarakt vakalarında küresel çapta öngörülen büyük düşüşlerdir." },
            { subtitle: "Atmosferik İzleme Uyduları", text: "NASA ve ESA uydularının stratosferdeki ozon gazı konsantrasyonunu milimetrik hassasiyetle 7/24 takip etmesidir." },
            { subtitle: "Gezegenimizi Kıl Payı Kurtarma", text: "İnsanlığın kendi yarattığı ekolojik felaketi teknolojiyi ve yasaları doğru kullanarak zamanında nasıl engellediğinin dersidir." }
        ]
    },
    {
        id: "105-evrenin-genisleme-hizi",
        cat: "cosmology",
        icon: "🌌",
        title: "105. Evrenin Genişleme Hızı ve Hubble Gerilimi (Hubble Tension)",
        desc: "Kozmolojinin en büyük gizemi: Evrenin genişleme hızını ölçen farklı yöntemlerin birbirini tutmama krizi.",
        subitems: [
            { subtitle: "Hubble Sabiti (H0) Tanımı", text: "Galaksilerin bizden uzaklaşma hızının mesafeleriyle olan orantısını belirten temel kozmolojik sabittir." },
            { subtitle: "Sefeit Yıldızları ve Süpernovalarla Ölçüm", text: "Yakın uzaydaki parlayan standart mumlar (Sefeitler) kullanılarak evrenin güncel genişleme hızının hesaplanmasıdır." },
            { subtitle: "Kozmik Mikrodalga Arka Plan (CMB)", text: "Büyük Patlama'dan kalan ilk ışık kalıntısı incelenerek evrenin erken dönem verilerinden genişleme hızının türetilmesidir." },
            { subtitle: "Hubble Gerilimi (Tension) Krizi", text: "Yakın uzay gözlemlerinden çıkan genişleme hızı ile erken evren (Planck uydusu) verilerinin birbiriyle uyuşmaması sorunudur." },
            { subtitle: "Standart Kozmoloji Modelinde Sapmalar", text: "Mevcut Einstein genel görelilik ve Lambda-CDM evren modelimizin eksik veya hatalı olabileceği şüphesini doğurur." },
            { subtitle: "Yeni Fizik Arayışları ve Karanlık Enerji", text: "Bu tutarsızlığı çözmek için karanlık enerjinin zamanla değiştiği veya erken evrende fazladan bir enerji türü olduğu teorileridir." },
            { subtitle: "James Webb Uzay Teleskobu Katkıları", text: "JWST'nin hassas kızılötesi ölçümleriyle Sefeit ölçümlerindeki olası hata paylarını netleştirme çalışmalarıdır." },
            { subtitle: "Kritik Kozmolojik Ölçüm Hassasiyeti", text: "Evrenin yaşını, boyutunu ve gelecekteki nihai kaderini (Big Freeze/Big Crunch) kesin olarak bilmek için çözülmesi şarttır." },
            { subtitle: "Çoklu Evren ve Alternatif Teoriler", text: "Standart modelin ötesinde uzayın dokusunda keşfedilmeyi bekleyen yepyeni fiziksel yasaların kapısını aralayan anahtardır." },
            { subtitle: "Bilim Dünyasının En Büyük Bulmacası", text: "Gözlemssel astronominin evrenin en derin sırrını çözmek adına günümüzde üzerinde en çok tartışılan modern problemidir." }
        ]
    }
];
// --- 33 İSPAT VE TEOREM VERİTABANI ---
const extendedProofsData = [
    // --- MATEMATİK & GEOMETRİ ---
    {
        id: 'ispat-pisagor',
        cat: 'matematik',
        icon: '🔺',
        title: 'Pisagor Teoremi İspatı',
        desc: 'Dik üçgenlerde hipotenüsün karesinin, dik kenarların kareleri toplamına eşit olduğunu gösteren klasik geometri ispatı.',
        subitems: [
            { title: 'Adım 1: Kare Yerleşimi', desc: 'Bir kenarı (a+b) olan büyük bir kare çizilir ve içine 4 adet özdeş dik üçgen yerleştirilir.' },
            { title: 'Adım 2: Alan Hesaplaması', desc: 'Büyük karenin alanı (a+b)² = a² + 2ab + b² olarak açılır.' },
            { title: 'Adım 3: İç Üçgenler', desc: 'Aynı alan 4 üçgenin alanı (2ab) ve ortada kalan c kenarlı karenin alanı (c²) toplamına eşittir: a² + 2ab + b² = c² + 2ab.' },
            { title: 'Adım 4: Sonuç', desc: 'Her iki taraftaki 2ab terimleri sadeleşir ve c² = a² + b² elde edilir.' }
        ]
    },
    {
        id: 'ispat-euler',
        cat: 'matematik',
        icon: '📐',
        title: 'Euler Özdeşliği (e^(iπ) + 1 = 0)',
        desc: 'Matematiğin beş temel sabitini (0, 1, e, i, π) tek bir zarif denklemde birleştiren efsanevi formül.',
        subitems: [
            { title: 'Adım 1: Taylor Serisi', desc: 'e^x, sin(x) ve cos(x) fonksiyonlarının Maclaurin serisi açılımları yazılır.' },
            { title: 'Adım 2: Karmaşık Sayı Girişi', desc: 'x yerine iθ (veya iπ) yazıldığında serilerin kosinüs ve sinüs fonksiyonlarına dönüştüğü görülür.' },
            { title: 'Adım 3: Euler Formülü', desc: 'e^(iθ) = cos(θ) + i·sin(θ) denklemi elde edilir.' },
            { title: 'Adım 4: Pi Değerinin Verilmesi', desc: 'θ = π alındığında cos(π) = -1 ve sin(π) = 0 olur; böylece e^(iπ) = -1, yani e^(iπ) + 1 = 0 çıkar.' }
        ]
    },
    {
        id: 'ispat-asal',
        cat: 'matematik',
        icon: '🔢',
        title: 'Öklid Asal Sayıların Sonsuzluğu İspatı',
        desc: 'Asal sayıların sonlu olmadığını, yani sonsuza kadar devam ettiğini kanıtlayan en eski ve en şık çelişki yoluyla ispat.',
        subitems: [
            { title: 'Adım 1: Varsayım', desc: 'Asal sayıların sonlu olduğunu varsayalım: {p₁, p₂, ..., pₙ}.' },
            { title: 'Adım 2: Yeni Sayı Üretimi', desc: 'Bu sonlu kümedeki tüm sayıların çarpımının 1 fazlası olan yeni bir P sayısı tanımlayalım: P = (p₁·p₂·...·pₙ) + 1.' },
            { title: 'Adım 3: Bölünme İncelemesi', desc: 'P sayısı listedeki hiçbir asal sayıya tam bölünmez (her seferinde 1 kalanını verir).' },
            { title: 'Adım 4: Çelişki ve Sonuç', desc: 'O halde P ya kendisi asaldır ya da listede olmayan başka bir asal sayıya bölünüktür. Her iki durumda da asal sayıların sonlu olduğu varsayımı çürür.' }
        ]
    },
    {
        id: 'ispat-kok2',
        cat: 'matematik',
        icon: '🧮',
        title: 'Kök 2’nin İrrasyonelliği',
        desc: '√2 sayısının iki tam sayının oranı (kesir) olarak yazılamayacağını gösteren klasik indirgeme ispatı.',
        subitems: [
            { title: 'Adım 1: Rasyonel Kabulü', desc: '√2 = a/b şeklinde aralarında asal (en sade haliyle) iki tam sayının oranı olarak yazabildiğimizi varsayalım.' },
            { title: 'Adım 2: Kare Alma', desc: 'Her iki tarafın karesi alınırsa 2 = a²/b² yani a² = 2b² elde edilir. Bu, a²\'nin çift sayı olduğunu gösterir.' },
            { title: 'Adım 3: Çift Sayı Değişkeni', desc: 'a çift ise a = 2k yazılabilir. Denklemde yerine konursa b² = 2k² olur, yani b de çifttir.' },
            { title: 'Adım 4: Çelişki', desc: 'Hem a hem b çift olamaz çünkü onların arasal olduğunu (en sade kesir olduğunu) baştan kabul etmiştik. Demek ki √2 irrasyoneldir.' }
        ]
    },
    {
        id: 'ispat-turev',
        cat: 'matematik',
        icon: '📈',
        title: 'Türevin Temel Mantığı (Limit İspatı)',
        desc: 'Bir eğrinin herhangi bir noktasındaki teğet eğimini bulan türev formülünün geometrik temeli.',
        subitems: [
            { title: 'Adım 1: Kesen Doğrusu', desc: 'Eğri üzerinde iki nokta seçilir: (x, f(x)) ve (x+h, f(x+h)).' },
            { title: 'Adım 2: Eğin Formülü', desc: 'Bu iki noktadan geçen secant (kesen) doğrusunun eğimi: m = [f(x+h) - f(x)] / h.' },
            { title: 'Adım 3: Limite Gitme', desc: 'h mesafesi sıfıra yaklaşırken (h -> 0) kesen doğrusu teğet doğrusuna dönüşür.' },
            { title: 'Adım 4: Türev Tanımı', desc: 'f\'(x) = lim(h->0) [f(x+h) - f(x)] / h formülü türevin türetilmesini sağlar.' }
        ]
    },
    {
        id: 'ispat-integral-alan',
        cat: 'matematik',
        icon: '📊',
        title: 'Riemann İntegrali ile Alan Hesabı',
        desc: 'Eğri altındaki alanı sonsuz küçük dikdörtgenlere bölerek hesaplama mantığı.',
        subitems: [
            { title: 'Adım 1: Bölümleme', desc: '[a, b] aralığı n adet eşit Δx genişliğinde alt aralıklara bölünür.' },
            { title: 'Adım 2: Dikdörtgenler', desc: 'Her aralıkta bir yükseklik seçilerek dikdörtgenler oluşturulur.' },
            { title: 'Adım 3: Toplam (Sigma)', desc: 'Tüm dikdörtgenlerin alanları toplanır: Σ f(x_i) · Δx.' },
            { title: 'Adım 4: Limit', desc: 'n sonsuza giderken (Δx -> 0) bu toplam kesin eğri altı alanını yani integrali verir.' }
        ]
    },
    {
        id: 'ispat-binomial',
        cat: 'matematik',
        icon: '✨',
        title: 'Binom Açılımı ve Kombinasyon',
        desc: '(x + y)^n ifadelerinin katsayılarının Pascal üçgeni ve kombinasyonla ilişkisinin mantığı.',
        subitems: [
            { title: 'Adım 1: Çarpım Mantığı', desc: '(x+y)(x+y)... n tane terimin çarpımı olarak düşünülür.' },
            { title: 'Adım 2: Seçim', desc: 'Her parantezden ya x ya y seçilir. k tane y seçilmesi demek n taneden k seçilmesi demektir.' },
            { title: 'Adım 3: Kombinasyon', desc: 'Katsayılar C(n,k) kombinasyon formülü ile ifade edilir.' },
            { title: 'Adım 4: Formül', desc: '(x+y)^n = Σ C(n,k) * x^(n-k) * y^k formülü elde edilir.' }
        ]
    },
    {
        id: 'ispat-aritmetik-toplam',
        cat: 'matematik',
        icon: '➕',
        title: 'Gauss Aritmetik Dizi Toplam Formülasyonu',
        desc: '1\'den n\'e kadar olan sayıların toplamını bulan n(n+1)/2 formülünün görsel ispatı.',
        subitems: [
            { title: 'Adım 1: Seri Yazılımı', desc: 'S = 1 + 2 + 3 + ... + n' },
            { title: 'Adım 2: Ters Yazılım', desc: 'S = n + (n-1) + (n-2) + ... + 1' },
            { title: 'Adım 3: Taraf Tarafa Toplama', desc: 'İki denklem alt alta toplanırsa n tane (n+1) terimi elde edilir: 2S = n(n+1).' },
            { title: 'Adım 4: Sonuç', desc: 'S = n(n+1) / 2 formülü bulunur.' }
        ]
    },
    {
        id: 'ispat-geometrik-seri',
        cat: 'matematik',
        icon: '📉',
        title: 'Geometrik Seri Toplamı İspatı',
        desc: '1 + r + r² + r³ + ... sonsuz toplamının |r| < 1 için 1/(1-r) değerine yakınsaması.',
        subitems: [
            { title: 'Adım 1: S Denklemi', desc: 'S = 1 + r + r² + r³ + ...' },
            { title: 'Adım 2: r ile Çarpım', desc: 'rS = r + r² + r³ + r⁴ + ...' },
            { title: 'Adım 3: Çıkarma', desc: 'S - rS = 1 elde edilir çünkü diğer tüm terimler birbirini götürür.' },
            { title: 'Adım 4: Çözüm', desc: 'S(1 - r) = 1 => S = 1 / (1 - r).' }
        ]
    },
    {
        id: 'ispat-turev-zincir',
        cat: 'matematik',
        icon: '🔗',
        title: 'Türevde Zincir Kuralı (Chain Rule)',
        desc: 'Bileşke fonksiyonların türevinin nasıl alındığının matematiksel gerekçesi.',
        subitems: [
            { title: 'Adım 1: Bileşke Tanımı', desc: 'y = f(g(x)) şeklinde iç içe iki fonksiyon tanımlanır.' },
            { title: 'Adım 2: Değişim Oranları', desc: 'Δy / Δx oranını Δu üzerinden genişletelim: (Δy / Δu) * (Δu / Δx).' },
            { title: 'Adım 3: Limit Geçişi', desc: 'Δx -> 0 iken Δu da 0\'a gider.' },
            { title: 'Adım 4: Sonuç', desc: 'dy/dx = (dy/du) * (du/dx) bağıntısı ispatlanır.' }
        ]
    },

    // --- FİZİK VE GÖRELİLİK ---
    {
        id: 'ispat-mass-energy',
        cat: 'teorik',
        icon: '⚡',
        title: 'Einstein E = mc² Kütle-Enerji Eşdeğerliği',
        desc: 'Kütlenin mutlak olmadığını, saf enerjiye dönüştürülebileceğini gösteren özel görelilik türevi.',
        subitems: [
            { title: 'Adım 1: Relativistik Moment', desc: 'Göreceli momentum p = γmv formülüyle tanımlanır (gamma Lorentz faktörüdür).' },
            { title: 'Adım 2: İş-Enerji Teoremi', desc: 'Cismin kazanacağı kinetik enerji, kuvvetin yaptığı işe (W = ∫ F dx) eşittir.' },
            { title: 'Adım 3: İntegral Çözümü', desc: 'Kuvvet yerine momentumun zamana göre türevi yazılıp integral alındığında E = mc² - m0c² formülü belirir.' },
            { title: 'Adım 4: Durgun Enerji', desc: 'Cisim dururken bile sahip olduğu iç enerji E₀ = mc² olarak kalır.' }
        ]
    },
    {
        id: 'ispat-zaman-genislemesi',
        cat: 'teorik',
        icon: '⏳',
        title: 'Özel Görelilik: Zaman Genişlemesi',
        desc: 'Işık hızı sabit olduğunda hızlı hareket eden sistemlerde zamanın yavaş akmasının geometri tabanlı ispatı.',
        subitems: [
            { title: 'Adım 1: Işık Saati', desc: 'Aralarında d mesafesi bulunan iki ayna arasında dikey olarak seken bir foton saati hayal edilsin.' },
            { title: 'Adım 2: Hareketli Gözlemci', desc: 'Saat v hızıyla hareket ederse, dışarıdaki sabit gözlemciye göre foton zikzak (üçgensel yol) çizer.' },
            { title: 'Adım 3: Pisagor Bağıntısı', desc: 'Işığın kat ettiği uzun yol (c * t\') ile saatim yatay aldığı yol (v * t\') Pisagor teoremiyle birleştirilir.' },
            { title: 'Adım 4: Lorentz Faktörü', desc: 'Denklemler düzenlendiğinde t\' = t / sqrt(1 - v²/c²) zaman genişlemesi formülüne ulaşılır.' }
        ]
    },
    {
        id: 'ispat-uzunluk-büzülmesi',
        cat: 'teorik',
        icon: '📏',
        title: 'Lorentz Uzunluk Büzülmesi',
        desc: 'Işık hızına yakın hareket eden nesnelerin hareket yönünde kısalmasının matematiksel türevi.',
        subitems: [
            { title: 'Adım 1: Eşzamanlılık', desc: 'Hareketli referans sistemindeki bir çubuğun boyunu ölçmek için uç noktalarının aynı anda işaretlenmesi gerekir.' },
            { title: 'Adım 2: Lorentz Dönüşümleri', desc: 'Sabit ve hareketli sistemler arasındaki koordinat geçiş denklemleri yazılır.' },
            { title: 'Adım 3: Zaman Farkı', desc: 'Hareketli sistemdeki eşzamanlılığın, duran sistem için aynı anda gerçekleşmediği hesaba katılır.' },
            { title: 'Adım 4: Sonuç', desc: 'L = L0 * sqrt(1 - v²/c²) formülü ile boyun kısalması kanıtlanır.' }
        ]
    },
    {
        id: 'ispat-sicaklik-entropi',
        cat: 'teorik',
        icon: '🔥',
        title: 'Termodinamiğin 2. Yasası ve Entropi',
        desc: 'İzole sistemlerde entropinin (düzensizliğin) asla azalmayacağının istatistiksel ve matematiksel temeli.',
        subitems: [
            { title: 'Adım 1: Mikro-durumlar', desc: 'Boltzmann\'ın S = k * ln(W) formülü ele alınır (W olası mikro-durum sayısıdır).' },
            { title: 'Adım 2: Olasılık Dağılımı', desc: 'Doğal süreçler en yüksek olasılığa sahip, yani en dağınık durumlara doğru evrilir.' },
            { title: 'Adım 3: Tersinmezlik', desc: 'Dağınık bir sistemin kendiliğinden daha düzenli bir mikro-duruma dönme olasılığı sıfıra yakındır.' },
            { title: 'Adım 4: Sonuç', desc: 'ΔS >= 0 eşitsizliği evrenin genel entropisinin sürekli arttığını kesinleştirir.' }
        ]
    },
    {
        id: 'ispat-korunum-enerji',
        cat: 'teorik',
        icon: '🔄',
        title: 'Noether Teoremi (Simetri ve Korunum Kanunları)',
        desc: 'Fizikteki her sürekli simetrinin bir korunum kanununa karşılık geldiğini gösteren Emmy Noether teoremi.',
        subitems: [
            { title: 'Adım 1: Eylem Prensibi', desc: 'Fiziksel sistemlerin aksiyon integrali (Lagrangian) üzerinden türetilmesi.' },
            { title: 'Adım 2: Zaman Simetrisi', desc: 'Fizik kanunlarının zamanda değişmemesi (zaman öteleme simetrisi).' },
            { title: 'Adım 3: Euler-Lagrange', desc: 'Simetri altında sistemin türevi alındığında değişmeyen bir miktar (korunan nicelik) olduğu görülür.' },
            { title: 'Adım 4: Sonuç', desc: 'Zaman simetrisi Enerji Korunumu\'nu, uzay simetrisi ise Momentum Korunumu\'nu doğurur.' }
        ]
    },
    {
        id: 'ispat-newton-yercekimi',
        cat: 'astrofizik',
        icon: '🍎',
        title: 'Newton Evrensel Çekim Yasası ve Kepler',
        desc: 'Kepler\'in gezegensel hareket kanunlarından yola çıkarak 1/r² çekim yasasının matematiksel türevi.',
        subitems: [
            { title: 'Adım 1: Dairesel Yörünge', desc: 'Gezegenlerin güneş etrafında dairesel hareket yaptığı varsayılır (F = m * v² / r).' },
            { title: 'Adım 2: Kepler 3. Kanunu', desc: 'T² / r³ oranının sabit olduğu bilgisi (T = 2πr / v) denkleme entegre edilir.' },
            { title: 'Adım 3: Hızın Ele Edilmesi', desc: 'Hız yerine yörünge yarıçapı ve periyot ifadeleri konulur.' },
            { title: 'Adım 4: Ters Kare Kanunu', desc: 'Kuvvetin mesafenin karesiyle ters orantılı olduğu F = G * (m1*m2)/r² şeklinde kanıtlanır.' }
        ]
    },
    {
        id: 'ispat-kara-delik-sicaklik',
        cat: 'kozmoloji',
        icon: '🕳️',
        title: 'Hawking Işıması ve Termodinamik İlişki',
        desc: 'Karadeliklerin tamamen siyah olmadığını, kuantum dalgalanmaları nedeniyle termal ışıma yaydığının özeti.',
        subitems: [
            { title: 'Adım 1: Olay Ufku Vakumu', desc: 'Olay ufku sınırında kuantum alan teorisine göre sanal parçacık çiftleri sürekli oluşur ve yok olur.' },
            { title: 'Adım 2: Parçacık Ayrışması', desc: 'Çiftlerden biri içeri düşerken diğeri dışarıda kalıp gerçek bir parçacık olarak kaçabilir.' },
            { title: 'Adım 3: Kütle Kaybı', desc: 'Dışarı kaçan enerji, karadeliğin kütlesinden (negatif enerji akışı yoluyla) harcanır.' },
            { title: 'Adım 4: Sıcaklık Formülü', desc: 'Karadeliğin sıcaklığının kütlesiyle ters orantılı olduğu (T ~ 1/M) teorik olarak gösterilir.' }
        ]
    },
    {
        id: 'ispat-dalga-parcacik',
        cat: 'kuantum',
        icon: '🌊',
        title: 'De Broglie Dalga Boyu İspatı',
        desc: 'Işığın hem tanecik hem dalga özelliği göstermesinden ilham alarak tüm maddelerin bir dalga boyuna sahip olması.',
        subitems: [
            { title: 'Adım 1: Photon Enerjisi', desc: 'Einstein\'ın E = hf (veya E = hc/λ) formülü ile Planck sabiti birleştirilir.' },
            { title: 'Adım 2: Göreceli Enerji', desc: 'E = mc² denklemi ile photon momentumu p = E/c denklemi bağdaştırılır.' },
            { title: 'Adım 3: Dalga Boyu Çıkarımı', desc: 'mc² = hc/λ eşitliğinden λ = h/mc (veya genel kütle için p) elde edilir.' },
            { title: 'Adım 4: De Broglie Formülü', desc: 'Her hareketli kütlenin λ = h / p dalga boyuna sahip olduğu kanıtlanır.' }
        ]
    },
    {
        id: 'ispat-belirsizlik',
        cat: 'kuantum',
        icon: '⚛️',
        title: 'Heisenberg Belirsizlik İlkesi',
        desc: 'Bir parçacığın konumunun ve momentumunun aynı anda kusursuz bir şekilde ölçülememesinin matematiksel temeli.',
        subitems: [
            { title: 'Adım 1: Dalga Paketi', desc: 'Kuantum parçacıkları uzayda dalga paketleri olarak temsil edilir (Fourier dönüşümleri).' },
            { title: 'Adım 2: Standart Sapma', desc: 'Konum belirsikliği (Δx) ve dalga boyu/momentum belirsizliği (Δp) tanımlanır.' },
            { title: 'Adım 3: Fourier Eşitsizliği', desc: 'Matematikte bir fonksiyon ile Fourier dönüşümünün yayılım alanları çarpımı sabit bir sınırdan küçük olamaz.' },
            { title: 'Adım 4: Sonuç', desc: 'Δx * Δp >= ℏ / 2 belirsizlik bağıntısı matematiksel olarak türetilir.' }
        ]
    },
    {
        id: 'ispat-schrodinger',
        cat: 'kuantum',
        icon: '🐱',
        title: 'Schrödinger Dalga Denkleminin Türetilmesi',
        desc: 'Kuantum mekaniğinin temelini oluşturan zaman bağımlı dalga denkleminin enerji korunumundan türetilmesi.',
        subitems: [
            { title: 'Adım 1: Klasik Enerji', desc: 'Toplam enerji E = Kinetik + Potansiyel (E = p²/2m + V) olarak yazılır.' },
            { title: 'Adım 2: Operatör Dönüşümleri', desc: 'Kuantum mekaniğinde enerji ve momentum yerine diferansiyel operatörler (E -> iℏ ∂/∂t, p -> -iℏ ∇) konulur.' },
            { title: 'Adım 3: Dalga Fonksiyonuna Uygulama', desc: 'Bu operatörler psi (ψ) dalga fonksiyonuna uygulanır.' },
            { title: 'Adım 4: Sonuç', desc: 'Hψ = iℏ (∂ψ/∂t) Schrödinger denklemi elde edilir.' }
        ]
    },
    {
        id: 'ispat-hubble',
        cat: 'kozmoloji',
        icon: '🌌',
        title: 'Hubble-Lemaître Evrenin Genişlemesi',
        desc: 'Uzak galaksilerin bizden uzaklaşma hızının mesafeleriyle doğru orantılı olmasının gözlemsel ispatı.',
        subitems: [
            { title: 'Adım 1: Doppler Kayması', desc: 'Galaksilerden gelen ışığın dalga boyundaki kırmızıya kayma (redshift - z) miktarı ölçülür.' },
            { title: 'Adım 2: Uzaklık Ölçümü', desc: 'Sefeid yıldızları ve la Sinyal Süpernovalar ile galaksi mesafeleri (d) hesaplanır.' },
            { title: 'Adım 3: Korelasyon', desc: 'Hız ile mesafe grafiğe döküldüğünde doğrusal bir doğru elde edilir.' },
            { title: 'Adım 4: Hubble Yasası', desc: 'v = H₀ * d formülü ile evrenin homojen olarak genişlediği kanıtlanır.' }
        ]
    },
    {
        id: 'ispat-fluctuation',
        cat: 'kozmoloji',
        icon: '✨',
        title: 'Kozmik Mikrodalga Arka Plan (CMB) Dalgalanmaları',
        desc: 'Erken evrendeki kuantum dalgalanmalarının evrenin büyük ölçekli yapısını nasıl oluşturduğu.',
        subitems: [
            { title: 'Adım 1: Enflasyon Dönemi', desc: 'Evrenin ilk saniyelerindeki üstel (exponential) genleşme aşaması.' },
            { title: 'Adım 2: Kuantum Çalkantıları', desc: 'Mikroskobik kuantum dalgalanmalarının uzayın genişlemesiyle makro boyuta taşınması.' },
            { title: 'Adım 3: Yoğunluk Farkları', desc: 'Bu dalgalanmaların uzayda sıcaklık ve yoğunluk sapmaları (ΔT/T ~ 10⁻⁵) yaratması.' },
            { title: 'Adım 4: Galaksi Tohumları', desc: 'Yerçekiminin bu yoğunluk farklarını çekerek yıldızları ve galaksileri oluşturması.' }
        ]
    },
    {
        id: 'ispat-kardinal',
        cat: 'matematik',
        icon: '♾️',
        title: 'Cantor Diyagonal Metodu (Sonsuzlukların Boyutları)',
        desc: 'Reel sayıların doğal sayılardan daha "büyük" bir sonsuzluğa sahip olduğunu kanıtlayan harika çaprazlama ispatı.',
        subitems: [
            { title: 'Adım 1: Varsayım', desc: 'Tüm reel sayıların (0 ile 1 arası) doğal sayılarla birebir eşlenebildiğini (sayılabilir olduğunu) varsayalım.' },
            { title: 'Adım 2: Liste Oluşturma', desc: 'Bu sayıların sonsuz bir liste halinde alt alta dizildiği düşünülür.' },
            { title: 'Adım 3: Diyagonal Sayı Üretimi', desc: 'Listenin köşegenindeki rakamlar alınıp her biri 1 artırılarak yeni bir x sayısı oluşturulur.' },
            { title: 'Adım 4: Çelişki', desc: 'Oluşturulan bu yeni x sayısı, listedeki hiçbir sayıyla aynı olamaz (en az bir basamağı farklıdır). Demek ki reel sayılar doğal sayılardan büyüktür.' }
        ]
    },
    {
        id: 'ispat-bayes',
        cat: 'matematik',
        icon: '📊',
        title: 'Bayes Teoremi ve Koşullu Olasılık',
        desc: 'Yeni kanıtlar ışığında bir hipotezin olasılığının nasıl güncellendiğini gösteren temel istatistik teoremi.',
        subitems: [
            { title: 'Adım 1: Ortak Olasılık', desc: 'P(A ve B) = P(A|B) * P(B) = P(B|A) * P(A) eşitliği yazılır.' },
            { title: 'Adım 2: Yer Değiştirme', desc: 'İki taraf P(B)ye bölünerek oranlanır.' },
            { title: 'Adım 3: Temel Formül', desc: 'P(A|B) = [ P(B|A) * P(A) ] / P(B) denklemi elde edilir.' },
            { title: 'Adım 4: Uygulama', desc: 'Tıbbi testlerde ve yapay zeka öğrenme modellerinde olasılık hesaplamalarının temeli oluşturulur.' }
        ]
    },
    {
        id: 'ispat-kosinus',
        cat: 'matematik',
        icon: '📐',
        title: 'Kosinüs Teoremi İspatı',
        desc: 'Herhangi bir üçgende kenarlar ile açılar arasındaki ilişkiyi veren Pisagor genellemesi.',
        subitems: [
            { title: 'Adım 1: Dik İndirme', desc: 'Üçgenin bir köşesinden tabana bir dikme (h) indirilir.' },
            { title: 'Adım 2: Pisagor Uygulama', desc: 'Oluşan iki küçük dik üçgene ayrı ayrı Pisagor teoremi uygulanır.' },
            { title: 'Adım 3: Trigonometrik Oran', desc: 'Tabandaki parça uzunlukları kosinüs fonksiyonu cinsinden ifade edilir.' },
            { title: 'Adım 4: Sonuç', desc: 'c² = a² + b² - 2ab * cos(C) bağıntısı türetilir.' }
        ]
    },
    {
        id: 'ispat-turev-turevlenebilirlik',
        cat: 'matematik',
        icon: '📈',
        title: 'Türevlenebilirlik ve Süreklilik İlişkisi',
        desc: 'Bir fonksiyonun bir noktada türevi varsa, o noktada kesinlikle sürekli olmasının kanıtı.',
        subitems: [
            { title: 'Adım 1: Limit Tanımı', desc: 'lim (x->a) [f(x) - f(a)] limiti ele alınır.' },
            { title: 'Adım 2: Çarpım/Bölüm Genişletme', desc: 'İfade (x-a) ile çarpılıp bölünerek türev tanımına benzetilir.' },
            { title: 'Adım 3: Limit Dağılımı', desc: 'lim [f(x) - f(a)] = lim [ (f(x)-f(a))/(x-a) * (x-a) ] yazılır.' },
            { title: 'Adım 4: Sonuç', desc: 'İşlemin sonucu f\'(a) * 0 = 0 çıkar, bu da lim f(x) = f(a) yani sürekliliği kanıtlar.' }
        ]
    },
    {
        id: 'ispat-ivme-korunum',
        cat: 'teorik',
        icon: '🚀',
        title: 'Momentum Korunumu İspatı',
        desc: 'Newton\'un 3. yasasından (etki-tepki) yola çıkarak kapalı sistemlerde momentumun korunduğunun türevi.',
        subitems: [
            { title: 'Adım 1: İki Cisimli Sistem', desc: 'Birbirine kuvvet uygulayan m1 ve m2 kütleli iki cisim ele alınır.' },
            { title: 'Adım 2: Newton 3. Yasa', desc: 'F_12 = -F_21 (uygulanan kuvvetler eşit ve zıttır).' },
            { title: 'Adım 3: Momentum Değişimi', desc: 'Kuvvet yerine momentumun zamana göre türevi (dp/dt) yazılır.' },
            { title: 'Adım 4: Toplam Momentum', desc: 'd(p1 + p2)/dt = 0 çıkar, bu da toplam momentumun sabit kaldığını gösterir.' }
        ]
    },
    {
        id: 'ispat-basit-harmonik',
        cat: 'teorik',
        icon: '⏱️',
        title: 'Basit Harmonik Hareket ve Yay Sarkacı',
        desc: 'Yay kuvvetinin (F = -kx) dinamik denkleminden salınım periyodunun türetilmesi.',
        subitems: [
            { title: 'Adım 1: Dinamik Denge', desc: 'F_net = m * a => -kx = m * (d²x/dt²).' },
            { title: 'Adım 2: Diferansiyel Denklem', desc: 'd²x/dt² + (k/m)x = 0 ikinci mertebeden diferansiyel denklem kurulur.' },
            { title: 'Adım 3: Çözüm Fonksiyonu', desc: 'Bu denklemi sağlayan çözüm x(t) = A * cos(ωt + φ) şeklindedir.' },
            { title: 'Adım 4: Periyot Formülü', desc: 'Açısal hız ω = sqrt(k/m) alınarak T = 2π * sqrt(m/k) periyot formülüne ulaşılır.' }
        ]
    },
    {
        id: 'ispat-isik-kirilmasi',
        cat: 'teorik',
        icon: '🌈',
        title: 'Snell Kanunu (Işığın Kırılması İspatı)',
        desc: 'Fermat Prensibi (ışığın en kısa sürede katedeceği yolu seçmesi) kullanarak kırılma kanununun türetilmesi.',
        subitems: [
            { title: 'Adım 1: Yol ve Zaman', desc: 'İki farklı ortamda ilerleyen ışığın seyahat süresi t = (d1/v1) + (d2/v2) olarak yazılır.' },
            { title: 'Adım 2: Geometrik Dağılım', desc: 'Ortam sınırındaki geçiş noktası x değişkeni cinsinden ifade edilir.' },
            { title: 'Adım 3: Türev Alma', desc: 'Sürenin minimum olması için zamana/konuma göre türevi sıfıra eşitlenir (dt/dx = 0).' },
            { title: 'Adım 4: Snell Yasası', desc: 'n1 * sin(θ1) = n2 * sin(θ2) kırılma bağıntısı elde edilir.' }
        ]
    },
    {
        id: 'ispat-gauss-elektrik',
        cat: 'teorik',
        icon: '⚡',
        title: 'Gauss Yasası (Elektrik Alan)',
        desc: 'Kapalı bir yüzeyden çıkan toplam elektrik akısının, içindeki net yük ile ilişkisinin ispatı.',
        subitems: [
            { title: 'Adım 1: Noktasal Yük', desc: 'Merkezde bulunan q yükünün çevresinde hayali küresel bir yüzey (Gauss yüzeyi) çizilir.' },
            { title: 'Adım 2: Alan Hesabı', desc: 'Küre yüzeyindeki elektrik alan E = q / (4πε₀r²) formülüyle yazılır.' },
            { title: 'Adım 3: Akı İntegrali', desc: 'Yüzey alanı (4πr²) ile elektrik alan çarpıldığında r\'lerin sadeleştiği görülür.' },
            { title: 'Adım 4: Sonuç', desc: '∮ E·dA = q / ε₀ Gauss yasası denklemi türetilir.' }
        ]
    },
    {
        id: 'ispat-maxwell-dalga',
        cat: 'teorik',
        icon: '📡',
        title: 'Maxwell Denklemlerinden Işık Hızının Çıkarımı',
        desc: 'Elektromanyetik dalgaların boşlukta ışık hızıyla yayıldığının denklemler yoluyla kanıtı.',
        subitems: [
            { title: 'Adım 1: Faraday ve Ampere', desc: 'Maxwell denklemlerinin boşluk (yük ve akım yokken) halindeki formları yazılır.' },
            { title: 'Adım 2: İkinci Mertebe Türev', desc: 'Elektrik ve manyetik alan denklemlerinin uzay ve zamana göre ikinci türevleri alınır.' },
            { title: 'Adım 3: Dalga Denklemi', desc: 'Elde edilen formülün standart dalga denklemine (∂²u/∂x² = (1/v²) * ∂²u/∂t²) birebir uyduğu görülür.' },
            { title: 'Adım 4: Işık Hızı', desc: 'Dalga hızının c = 1 / sqrt(μ₀ε₀) olduğu ve bu değerin tam olarak ışık hızını verdiği keşfedilir.' }
        ]
    },
    {
        id: 'ispat-stirling',
        cat: 'matematik',
        icon: '📈',
        title: 'Stirling Yaklaşımı (Büyük Faktöriyeller)',
        desc: 'Çok büyük n sayıları için n! (faktöriyel) hesaplamasının yaklaşık formülü.',
        subitems: [
            { title: 'Adım 1: Logaritma', desc: 'ln(n!) = ln(1) + ln(2) + ... + ln(n) toplamı integral ile yaklaşım altına alınır.' },
            { title: 'Adım 2: İntegral Tahmini', desc: '∫ ln(x) dx integrali hesaplanarak n*ln(n) - n ifadesine ulaşılır.' },
            { title: 'Adım 3: Euler-Maclaurin', desc: 'Düzeltme terimleri eklendiğinde hassasiyet artırılır.' },
            { title: 'Adım 4: Sonuç', desc: 'n! ≈ sqrt(2πn) * (n/e)^n formülü elde edilir.' }
        ]
    },
    {
        id: 'ispat-kopekbaligi-biyoloji',
        cat: 'bilim',
        icon: '🧬',
        title: 'Hardy-Weinberg Denge Kanunu',
        desc: 'Popülasyon genetiğinde gen frekanslarının nesiller boyu nasıl sabit kaldığının matematiksel modeli.',
        subitems: [
            { title: 'Adım 1: Allel Frekansları', desc: 'Bir genin iki aleli (p ve q) olduğu kabul edilir (p + q = 1).' },
            { title: 'Adım 2: Rastgele Çiftleşme', desc: 'Ebeveynlerin gametlerinin birleşme olasılıkları Punnett karesi ile çarpılır.' },
            { title: 'Adım 3: Genotip Dağılımı', desc: '(p + q)² = p² + 2pq + q² açılımı yapılır.' },
            { title: 'Adım 4: Denge', desc: 'Dış baskılar (mutasyon, doğal seçilim) olmadıkça bu oranların nesiller boyu değişmediği ispatlanır.' }
        ]
    }
];