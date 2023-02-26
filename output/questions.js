import { _createBlock as _$createBlock, _createComponent as _$createComponent, useMemo as _useMemo$, _declareBlock as _$declareBlock, _declareClientFunction as _$declareClientFunction } from "seniman";
const questions = [{
  answer: "AMFIBI",
  question: "Binatang yang bisa hidup di air dan di darat disebut "
}, {
  answer: "KNALPOT",
  question: "Bagian pada kendaraan bermotor yang digunakan sebagai pembuangan gas disebut "
}, {
  answer: "KAKTUS",
  question: "Tumbuhan berduri yang kebanyakan tumbuh pada daerah gersang seperti gurun adalah "
}, {
  answer: "DISKET",
  question: "Ikon untuk menyimpan data pada program-program Microsoft seperti MS Word, adalah "
}, {
  answer: "GOLIATH",
  question: "Jenis kumbang terbesar adalah kumbang "
}, {
  answer: "MESIR",
  question: "Patung Sphinx kebanyakan terdapat di negara "
}, {
  answer: "EIFFEL",
  question: "Monumen terkenal di kota Paris adalah menara "
}, {
  answer: "AMUBA",
  question: "Hewan terkecil adalah "
}, {
  answer: "SAINS",
  question: "Ilmu Pengetahuan Alam disebut juga ilmu "
}, {
  answer: "MATAHARI",
  question: "Pusat peredaran tata surya adalah "
}, {
  answer: "DITIUP",
  question: "Flute adalah alat musik yang dimainkan dengan cara "
}, {
  answer: "CEMARA",
  question: "Pohon yang melambangkan hari natal adalah pohon "
}, {
  answer: "PRANGKO",
  question: "Alat pembayaran resmi untuk biaya pengiriman melalui pos adalah "
}, {
  answer: "ABATE",
  question: "Nama obat untuk membunuh jentik-jentik nyamuk di air adalah "
}, {
  answer: "BARAT",
  question: "Arah jam 9 itu sama dengan arah "
}, {
  answer: "YEN",
  question: "Mata uang negara Jepang yaitu "
}, {
  answer: "MONITOR",
  question: "Layar komputer disebut juga "
}, {
  answer: "NEKTAR",
  question: "Bahan yang digunakan lebah untuk membuat madu adalah "
}, {
  answer: "ANGIN",
  question: "Udara yang bergerak disebut juga "
}, {
  answer: "MOSCOW",
  question: "Ibukota negara Rusia yaitu "
}, {
  answer: "ORCA",
  question: "Paus pembunuh adalah nama lain dari paus "
}, {
  answer: "LIDAH",
  question: "Indra manusia yang digunakan untuk mengecap adalah "
}, {
  answer: "AUDIOSONIK",
  question: "Suara dengan frekuensi 20 - 20.000 Hz termasuk bunyi "
}, {
  answer: "NETHERLAND",
  question: "Nama resmi negara Belanda adalah "
}, {
  answer: "LUXEMBERG",
  question: "Negara kecil yang sangat kaya dan benderanya sama dengan Belanda adalah "
}, {
  answer: "LIBERTY",
  question: "Patung Liberty berada di pulau "
}, {
  answer: "INGGRIS",
  question: "Anjing Pitbull berasal dari negara "
}, {
  answer: "ITALIA",
  question: "Penemu radio berasal dari negara "
}, {
  answer: "BAMBU",
  question: "Rumput yang tumbuh paling cepat adalah "
}, {
  answer: "TOKYO",
  question: "Kota paling boros listrik di Asia adalah "
}, {
  answer: "TITANIC",
  question: "Nama kapal pesiar yang tenggelam pada 15 Juni 1912 adalah "
}, {
  answer: "SUBMARINE",
  question: "Bahasa Inggris dari kapal selam adalah "
}, {
  answer: "FALCON",
  question: "Burung tercepat di dunia adalah "
}, {
  answer: "KAMBOJA",
  question: "Angkor Wat terletak di negara "
}, {
  answer: "QATAR",
  question: "Negara terkaya di dunia adalah "
}, {
  answer: "KONGO",
  question: "Negara termiskin di dunia adalah "
}, {
  answer: "PRANCIS",
  question: "Patung Liberty dibuat di negara "
}, {
  answer: "TEH",
  question: "Minuman terfavorit di dunia adalah "
}, {
  answer: "OZAI",
  question: "Nama raja api yang juga ayah dari pangeran Zuko pada kartun Avatar the Legend of Aang adalah "
}, {
  answer: "FILATELLI",
  question: "Orang yang suka mengoleksi prangko disebut "
}, {
  answer: "TANGO",
  question: 'Produk makanan yang memiliki moto "Berapa lapis? Ratusan" adalah '
}, {
  answer: "PARFUM",
  question: "Casablanka adalah contoh merek produk "
}, {
  answer: "BATIK",
  question: "Pakaian tradisional khas Indonesia yang bernilai seni tinggi adalah "
}, {
  answer: "DESIBEL",
  question: "Besaran bunyi adalah "
}, {
  answer: "ZANTMAN",
  question: "Nama belakang artis Asmirandah adalah "
}, {
  answer: "SIMPANSE",
  question: "Primata paling cerdas adalah "
}, {
  answer: "ABORIGIN",
  question: "Penduduk asli Australia adalah suku "
}, {
  answer: "TUJUH",
  question: "Jumlah warna pelangi adalah "
}, {
  answer: "WOODY",
  question: 'Tokoh utama film "Toy Story" adalah '
}, {
  answer: "NINE",
  question: 'Tokoh utama film "Nine" adalah '
}, {
  answer: "BALI",
  question: "Tari kecak adalah tari yang berasal dari daerah "
}, {
  answer: "MANY",
  question: 'Tokoh utama film "Ice Age" adalah seekor Mamut, namanya '
}, {
  answer: "CILEMBU",
  question: "Daerah pulau Jawa yang terkenal ubi-nya yaitu "
}, {
  answer: "TARZAN",
  question: "Film yang mengisahkan seorang pria yang hidup di hutan"
}, {
  answer: "CLYTON",
  question: "Nama musuh Tarzan yang memburu gorila adalah "
}, {
  answer: "RAMEN",
  question: "Mie favorit Jepang yaitu "
}, {
  answer: "SUPERNOVA",
  question: "Ledakan bintang di galaksi disebut "
}, {
  answer: "PEDANG",
  question: "Sword adalah bahasa Inggris dari "
}, {
  answer: "SEMUT",
  question: "Serangga yang memiliki rasa solidaritas tinggi adalah "
}, {
  answer: "WALET",
  question: "Burung yang menjadi lambang kantor pos Indonesia adalah burung "
}, {
  answer: "VENEZUELA",
  question: "Air terjun tertinggi di dunia terletak di negara "
}, {
  answer: "YETI",
  question: "Monster salju di daerah himalaya disebut "
}, {
  answer: "KOPI",
  question: "Minuman terfavorit di dunia yang kedua adalah "
}, {
  answer: "LUWAK",
  question: "Binatang yang suka makan biji kopi dan kotorannya bisa dijadikan kopi adalah "
}, {
  answer: "BERLIAN",
  question: "Jenis batuan terkeras adalah "
}, {
  answer: "APUNG",
  question: "Batu yang bisa mengapung disebut batu "
}, {
  answer: "PHOBIA",
  question: "Ketakutan berlebihan akan suatu hal disebut "
}, {
  answer: "NASI",
  question: "Makanan pokok terfavorit di benua Asia adalah "
}, {
  answer: "MIMPI",
  question: "Hal yang bisa diketahui manusia saat tidur dan belum tentu sesuai kenyataan adalah "
}, {
  answer: "ANTARTIKA",
  question: "Benua beku adalah benua "
}, {
  answer: "SEOUL",
  question: "Kota terpadat di dunia adalah "
}, {
  answer: "SEISMOGRAF",
  question: "Alat untuk mengukur gempa bumi disebut "
}, {
  answer: "KALIGRAFI",
  question: "Seni menulis Arab disebut "
}, {
  answer: "LAUT",
  question: "Tanda-tanda kehidupan di bumi pertama kali terjadi di "
}, {
  answer: "JERAPAH",
  question: "Mamalia tertinggi adalah "
}, {
  answer: "RAGI",
  question: "Bahan yang digunakan sebagai pengembang adonan kue adalah "
}, {
  answer: "TRAKEA",
  question: "Alat pernafasan belalang adalah "
}, {
  answer: "MANCHESTER UNITED",
  question: "Klub Sepak Bola"
}, {
  answer: "MANCHESTER CITY",
  question: "Klub Sepak Bola"
}, {
  answer: "CRISTIANO RONALDO ",
  question: "Pemain Bola"
}, {
  answer: "KUPU KUPU",
  question: "Nama Binatang"
}, {
  answer: "INDONESIA",
  question: "Negara di ASEAN"
}, {
  answer: "SINGAPURA",
  question: "Negara di ASEAN"
}, {
  answer: "THAILAND",
  question: "Negara di ASEAN"
}, {
  answer: "KAMBOJA",
  question: "Negara di ASEAN"
}, {
  answer: "RENAULT",
  question: "Brand Mobil"
}, {
  answer: "CHEVROLET",
  question: "Brand Mobil"
}, {
  answer: "VOLKSWAGEN",
  question: "Brand Mobil"
}, {
  answer: "HYUNDAI",
  question: "Brand Mobil"
}, {
  answer: "TESLA",
  question: "Brand Mobil"
}, {
  answer: "NISSAN",
  question: "Brand Mobil"
}, {
  answer: "AUSTRALIA",
  question: "Nama benua sekaligus negara"
}, {
  answer: "EROPA",
  question: "Nama benua"
}, {
  answer: "AFRIKA",
  question: "Nama benua"
}, {
  answer: "ATLANTIK",
  question: "Nama samudra"
}, {
  answer: "PASIFIK",
  question: "Nama samudra"
}, {
  answer: "PELUPUK",
  question: "Peribahasa: Gajah di ... mata tak tampak, kuman di lautan tampak"
}, {
  answer: "PINANG",
  question: "Peribahasa: Bagai ... Dibelah dua"
}, {
  answer: "DIJUNJUNG",
  question: "Peribahasa: Dimana bumi dipijak, disitu langit ..."
}, {
  answer: "KACANG",
  question: "Peribahasa: Bagai ... lupa kulitnya"
}, {
  answer: "ROTAN",
  question: "Peribahasa: Tak ada ... akar pun jadi"
}, {
  answer: "SIMALAKAMA",
  question: "Peribahasa: Bagai makan buah ..., apapun serba salah."
}, {
  answer: "TEMPURUNG",
  question: "Peribahasa: Bagai katak dalam ..."
}, {
  answer: "SEBELANGA",
  question: "Peribahasa: Karena nila setitik, rusak susu ..."
}, {
  answer: "DICINTA",
  question: "Peribahasa: Pucuk ... , ulam pun tiba"
}, {
  answer: "KERBAU",
  question: "Peribahasa: Seperti ... dicocok hidung"
}, {
  answer: "NYARING",
  question: "Peribahasa: Tong kosong ... bunyinya"
}, {
  answer: "ANGGUN",
  question: "Penyanyi pop wanita Indonesia"
}, {
  answer: "RAISA",
  question: "Penyanyi pop wanita Indonesia"
}, {
  answer: "ANDIEN",
  question: "Penyanyi pop wanita Indonesia"
}, {
  answer: "SYAHRINI",
  question: "Penyanyi pop wanita Indonesia"
}, {
  answer: "AGNES MONICA",
  question: "Penyanyi pop wanita Indonesia"
}, {
  answer: "ISYANA SARASVATI",
  question: "Penyanyi pop wanita Indonesia"
}, {
  answer: "YURA YUNITA",
  question: "Penyanyi pop wanita Indonesia"
}, {
  answer: "BERAS KENCUR",
  question: "Minuman khas Indonesia (Jawa)"
}, {
  answer: "BANDREK",
  question: "Minuman khas Indonesia (Sunda)"
}, {
  answer: "CENDOL",
  question: "Minuman khas Indonesia"
}, {
  answer: "SEKOTENG",
  question: "Minuman khas Indonesia (Jawa)"
}, {
  answer: "SARABBA",
  question: "Minuman khas Indonesia (Sulawesi)"
}, {
  answer: "LIANG TEH",
  question: "Minuman khas Indonesia (Kalimantan)"
}, {
  answer: "TEH TALUA",
  question: "Minuman khas Indonesia (Sumatra)"
}, {
  answer: "SODA GEMBIRA",
  question: "Minuman khas Indonesia"
}, {
  answer: "MARTEBE",
  question: "Minuman khas Indonesia (Sumatra)"
}, {
  answer: "MOKE",
  question: "Minuman khas Indonesia (Flores)"
}, {
  answer: "ONDE ONDE",
  question: "Jajanan khas Indonesia"
}, {
  answer: "MARTABAK",
  question: "Jajanan khas Indonesia"
}, {
  answer: "SERABI",
  question: "Jajanan khas Indonesia"
}, {
  answer: "LUMPIA",
  question: "Jajanan khas Indonesia"
}, {
  answer: "LAPIS LEGIT",
  question: "Jajanan khas Indonesia"
}, {
  answer: "KERAK TELOR",
  question: "Jajanan khas Indonesia"
}, {
  answer: "KLAPPERTAART",
  question: "Jajanan khas Indonesia"
}, {
  answer: "PAPEDA",
  question: "Jajanan khas Indonesia"
}, {
  answer: "BAGIAK",
  question: "Jajanan khas Indonesia"
}, {
  answer: "BATAGOR",
  question: "Jajanan khas Indonesia"
}, {
  answer: "SIOMAY",
  question: "Jajanan khas Indonesia"
}, {
  answer: "NOAH",
  question: "Grup band Indonesia"
}, {
  answer: "SAMSONS",
  question: "Grup band Indonesia"
}, {
  answer: "KANGEN BAND",
  question: "Grup band Indonesia"
}, {
  answer: "PAYUNG TEDUH",
  question: "Grup band Indonesia"
}, {
  answer: "MOCCA",
  question: "Grup band Indonesia"
}, {
  answer: "ARMADA",
  question: "Grup band Indonesia"
}, {
  answer: "SUPERMAN IS DEAD",
  question: "Grup band Indonesia"
}, {
  answer: "JIKUSTIK",
  question: "Grup band Indonesia"
}, {
  answer: "CHELSEA",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "JUVENTUS",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "AJAX AMSTERDAM",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "VALENCIA",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "LIVERPOOL",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "BARCELONA",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "AC MILAN",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "BORUSSIA DORTMUND",
  question: "Klub Sepakbola Eropa"
}, {
  answer: "POLO AIR",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "BERKUDA",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "PANAHAN",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "BULUTANGKIS",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "ANGGAR",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "TENIS MEJA",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "ATLETIK",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "ANGGAR",
  question: "Cabang olahraga dalam olimpiade"
}, {
  answer: "SYSTEMA",
  question: "Ilmu bela diri asal Rusia"
}, {
  answer: "TAEKWONDO",
  question: "Ilmu bela diri asal Korea"
}, {
  answer: "KRAV MAGA",
  question: "Ilmu bela diri asal Israel"
}, {
  answer: "MUAY THAI",
  question: "Ilmu bela diri asal Thailand"
}, {
  answer: "WING CHUN",
  question: "Ilmu bela diri asal Tiongkok"
}, {
  answer: "AIKIDO",
  question: "Ilmu bela diri asal Jepang"
}, {
  answer: "PENCAK SILAT",
  question: "Ilmu bela diri asal Indonesia"
}, {
  answer: "CAPOEIRA",
  question: "Ilmu bela diri asal Brazil"
}, {
  answer: "MADAGASKAR",
  question: "Salah satu pulau terbesar di dunia"
}, {
  answer: "KALIMANTAN",
  question: "Salah satu pulau terbesar di dunia"
}, {
  answer: "HONSHU",
  question: "Salah satu pulau terbesar di dunia"
}, {
  answer: "GREENLAND",
  question: "Salah satu pulau terbesar di dunia"
}, {
  answer: "SIBOLGA",
  question: "Nama kota di Sumatra"
}, {
  answer: "PEKANBARU",
  question: "Nama kota di Sumatra"
}, {
  answer: "BINJAI",
  question: "Nama kota di Sumatra"
}, {
  answer: "METRO",
  question: "Nama kota di Sumatra"
}, {
  answer: "LHOKSEUMAWE",
  question: "Nama kota di Sumatra"
}, {
  answer: "KENDARI",
  question: "Nama kota di Sulawesi"
}, {
  answer: "PAREPARE",
  question: "Nama kota di Sulawesi"
}, {
  answer: "TOMOHON",
  question: "Nama kota di Sulawesi"
}, {
  answer: "GORONTALO",
  question: "Nama kota di Sulawesi"
}, {
  answer: "JAILOLO",
  question: "Nama kota di Maluku / Papua"
}, {
  answer: "SOFIFI",
  question: "Nama kota di Maluku / Papua"
}, {
  answer: "BOVEN DIGOEL",
  question: "Nama kota di Maluku / Papua"
}, {
  answer: "JAYAWIJAYA",
  question: "Nama kota di Maluku / Papua"
}, {
  answer: "NABIRE",
  question: "Nama kota di Maluku / Papua"
}, {
  answer: "BOEDIONO",
  question: "Salah satu wakil presiden RI"
}, {
  answer: "ADAM MALIK",
  question: "Salah satu wakil presiden RI"
}, {
  answer: "MOHAMMAD HATTA",
  question: "Salah satu wakil presiden RI"
}, {
  answer: "DASAWARSA",
  question: "Satuan waktu"
}, {
  answer: "DEKADE",
  question: "Satuan waktu"
}, {
  answer: "WINDU",
  question: "Satuan waktu"
}, {
  answer: "LUSTRUM",
  question: "Satuan waktu"
}, {
  answer: "SEMESTER",
  question: "Satuan waktu"
}, {
  answer: "CATURWULAN",
  question: "Satuan waktu"
}, {
  answer: "ANNAPURNA",
  question: "Nama gunung di negara Nepal"
}, {
  answer: "VESUVIUS",
  question: "Nama gunung di negara Italia"
}, {
  answer: "KRAKATAU",
  question: "Nama gunung di negara Indonesia"
}, {
  answer: "TAMBORA",
  question: "Nama gunung di negara Indonesia"
}, {
  answer: "FUJI",
  question: "Nama gunung di negara Jepang"
}, {
  answer: "KERINCI",
  question: "Nama gunung di negara Indonesia"
}, {
  answer: "KILIMANJARO",
  question: "Nama gunung di negara Tanzania"
}, {
  answer: "ELBRUS",
  question: "Nama gunung di negara Rusia"
}, {
  answer: "BROMO",
  question: "Nama gunung di negara Indonesia"
}, {
  answer: "RINJANI",
  question: "Nama gunung di negara Indonesia"
}, {
  answer: "SEPAKBOLA",
  question: "Nama olahraga populer"
}, {
  answer: "BERENANG",
  question: "Nama olahraga populer"
}, {
  answer: "HOKI",
  question: "Nama olahraga populer"
}, {
  answer: "BASKET",
  question: "Nama olahraga populer"
}, {
  answer: "TENIS",
  question: "Nama olahraga populer"
}, {
  answer: "BASEBALL",
  question: "Nama olahraga populer"
}, {
  answer: "BALAP MOBIL",
  question: "Nama olahraga populer"
}, {
  answer: "ARGENTINA",
  question: "Nama negara di benua Amerika"
}, {
  answer: "PARAGUAY",
  question: "Nama negara di benua Amerika"
}, {
  answer: "VENEZUELA",
  question: "Nama negara di benua Amerika"
}, {
  answer: "KANADA",
  question: "Nama negara di benua Amerika"
}, {
  answer: "MEKSIKO",
  question: "Nama negara di benua Amerika"
}, {
  answer: "YUNANI",
  question: "Nama negara di benua Eropa"
}, {
  answer: "AUSTRIA",
  question: "Nama negara di benua Eropa"
}, {
  answer: "PORTUGAL",
  question: "Nama negara di benua Eropa"
}, {
  answer: "DENMARK",
  question: "Nama negara di benua Eropa"
}, {
  answer: "BULGARIA",
  question: "Nama negara di benua Eropa"
}, {
  answer: "BELANDA",
  question: "Nama negara di benua Eropa"
}, {
  answer: "KROASIA",
  question: "Nama negara di benua Eropa"
}, {
  answer: "MONGOLIA",
  question: "Nama negara di benua Asia"
}, {
  answer: "TIONGKOK",
  question: "Nama negara di benua Asia"
}, {
  answer: "ARAB SAUDI",
  question: "Nama negara di benua Asia"
}, {
  answer: "SRI LANKA",
  question: "Nama negara di benua Asia"
}, {
  answer: "PAKISTAN",
  question: "Nama negara di benua Asia"
}, {
  answer: "ARMENIA",
  question: "Nama negara di benua Asia"
}, {
  answer: "LEBANON",
  question: "Nama negara di benua Asia"
}, {
  answer: "WARKOP DKI",
  question: "Nama film/franchise Indonesia"
}, {
  answer: "LASKAR PELANGI",
  question: "Nama film/franchise Indonesia"
}, {
  answer: "ADA APA DENGAN CINTA",
  question: "Nama film/franchise Indonesia"
}, {
  answer: "HABIBIE AINUN",
  question: "Nama film/franchise Indonesia"
}, {
  answer: "DANUR",
  question: "Nama film/franchise Indonesia"
}, {
  answer: "TIKTOK",
  question: "Perusahaan Teknologi"
}, {
  answer: "APPLE",
  question: "Perusahaan Teknologi"
}];
export function shuffleWord(str) {
  var a = str.split(""),
    n = a.length;
  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}
export function shuffle(str) {
  var splitStr = str.split(" ");
  if (splitStr.length > 1) {
    return splitStr.map(currentStr => shuffleWord(currentStr)).join(" ");
  } else {
    return shuffleWord(str);
  }
}
export function randomize() {
  const randInt = Math.floor(Math.random() * questions.length);
  const activeQuestion = {
    ...questions[randInt],
    randomAnswer: shuffle(questions[randInt].answer),
    id: randInt
  };
  return activeQuestion;
}
export default questions;
export const getScore = rank => {
  switch (rank) {
    case 0:
      return 10;
    case 1:
      return 5;
    default:
      return 1;
  }
};
export const answeredBefore = (answers, me) => {
  return !!answers.find(v => v.player === me);
};