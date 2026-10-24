type ParagraphSection = {
  heading: string;
  paragraphs: string[];
};

type ListSection = {
  heading: string;
  items: string[];
  ordered?: boolean;
};

type RecoverySection = ParagraphSection & {
  symptomsHeading: string;
  symptoms: string[];
};

export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  duration: string;
  price: string;
  recoveryTime: string;
  sessionCount: string;
  imageAlt: string;
  forWho?: ParagraphSection;
  description: ParagraphSection;
  preparation: ListSection;
  contraindications: ListSection;
  recovery: RecoverySection;
  aftercare: ListSection;
  faqs: { question: string; answer: string }[];
};

export const treatmentImages: Record<string, string> = {
  "modelowanie-ust": "/images/lips/powiekszanie ust.JPG",
  "stymulatory-tkankowe": "/images/IMG_5966.PNG",
  "makijaz-permanentny-brwi": "/images/brwi perm/brwi.jpg",
  "makijaz-permanentny-ust": "/images/lips_pmu/powiekszanie usta.JPG",
  "mezoterapia-mikroiglowa": "/images/mezo/mezoterapia.JPG",
  "rf-radiofrekwencja": "/images/IMG_5968.PNG",
};

export const treatments: Treatment[] = [
  {
    slug: "makijaz-permanentny-brwi",
    title: "Makijaż permanentny brwi",
    shortDescription:
      "Makijaż permanentny brwi polega na wprowadzeniu pigmentu do powierzchownych warstw skóry. Przed pigmentacją ustala się kształt i odcień, aby dopasować brwi do rysów twarzy.",
    duration: "2-3 godziny",
    price: "800 zł",
    recoveryTime: "około 7-14 dni",
    sessionCount: "2 (z dopigmentowaniem po 4-6 tygodniach)",
    imageAlt: "Makijaż permanentny brwi.",
    forWho: {
      heading: "Dla kogo jest zabieg?",
      paragraphs: [
        "Zabieg przeznaczony jest dla osób, które chcą podkreślić naturalny kształt brwi, poprawić ich proporcje oraz nadać im bardziej wyrazisty i uporządkowany wygląd. Makijaż permanentny sprawdzi się również u osób, które mają rzadkie, jasne lub asymetryczne brwi i chcą optycznie nadać im większą gęstość oraz odpowiednio zdefiniować ich kształt.",
      ],
    },
    description: {
      heading: "Na czym polega zabieg?",
      paragraphs: [
        "Makijaż permanentny brwi polega na wprowadzeniu pigmentu do powierzchownych warstw skóry przy pomocy jednorazowego kartridżu.",
        "Przed rozpoczęciem pigmentacji wykonywany jest szczegółowy rysunek wstępny, który pozwala określić odpowiedni kształt, proporcje oraz dopasowanie brwi do rysów twarzy. Po zaakceptowaniu projektu dobierany jest odpowiedni odcień pigmentu, a następnie wykonywana jest właściwa pigmentacja.",
        "Po zabiegu kolor brwi może być początkowo bardziej intensywny. W trakcie gojenia pigment stopniowo jaśnieje i stabilizuje się, tworząc bardziej naturalny efekt.",
      ],
    },
    preparation: {
      heading: "Przygotowanie do zabiegu",
      items: [
        "Na minimum 48 godzin przed zabiegiem należy unikać spożywania alkoholu oraz, jeśli jest to możliwe i bezpieczne, leków mogących zwiększać ryzyko krwawienia.",
        "Na kilka dni przed zabiegiem należy unikać intensywnego opalania oraz korzystania z solarium.",
        "Przed zabiegiem należy zadbać o odpowiednie nawodnienie organizmu.",
        "W dniu pigmentacji zaleca się ograniczenie kawy oraz napojów energetycznych.",
        "Nie należy wykonywać intensywnych peelingów ani stosować silnie złuszczających preparatów w obrębie brwi przed zabiegiem.",
        "Skóra w miejscu pigmentacji powinna być zdrowa, bez ran, podrażnień, aktywnych stanów zapalnych i innych zmian.",
      ],
    },
    contraindications: {
      heading: "Przeciwwskazania",
      items: [
        "Aktywne infekcje i stany zapalne skóry w miejscu wykonywania zabiegu.",
        "Choroby skóry w aktywnej fazie.",
        "Ciąża .",
        "Choroby autoimmunologiczne.",
        "Zaburzenia krzepnięcia krwi.",
        "Przyjmowanie leków przeciwzakrzepowych.",
        "Skłonność do powstawania bliznowców.",
        "Choroby nowotworowe.",
        "Niewyrównana cukrzyca.",
        "Epilepsja.",
        "Alergia lub nadwrażliwość na składniki stosowanych preparatów.",
        "Terapia doustnymi antybiotykami.",
        "Aktywne infekcje organizmu.",
        "Uszkodzenia, rany lub podrażnienia skóry w miejscu pigmentacji.",
        "Świeżo wykonane zabiegi kosmetologiczne lub medycyny estetycznej w obrębie brwi.",
        "Wiek poniżej 18 roku życia.",
        "Nierealistyczne oczekiwania wobec efektu zabiegu.",
      ],
    },
    recovery: {
      heading: "Reakcje pozabiegowe i czas rekonwalescencji",
      paragraphs: [
        "Bezpośrednio po zabiegu skóra w okolicy brwi może być lekko zaczerwieniona, podrażniona lub obrzęknięta, a pigment może wydawać się znacznie intensywniejszy niż kolor docelowy.",
        "W kolejnych dniach rozpoczyna się proces regeneracji i delikatnego złuszczania naskórka. Kolor stopniowo się rozjaśnia, a jego ostateczny wygląd stabilizuje się wraz z zakończeniem procesu gojenia. Czas i sposób gojenia mogą różnić się w zależności od rodzaju skóry oraz indywidualnych predyspozycji.",
      ],
      symptomsHeading: "Do najczęstszych objawów pozabiegowych należą:",
      symptoms: [
        "Delikatny obrzęk.",
        "Zaczerwienienie skóry.",
        "Podrażnienie.",
        "Uczucie napięcia skóry.",
        "Delikatne pieczenie lub szczypanie.",
        "Tkliwość w miejscu pigmentacji.",
        "Początkowo bardzo intensywny kolor brwi.",
        "Suchość skóry.",
        "Delikatne złuszczanie naskórka.",
        "Niewielkie strupki podczas procesu gojenia.",
        "Nierównomierne złuszczanie pigmentu w trakcie regeneracji.",
        "Możliwość wystąpienia reakcji alergicznej na składniki preparatów.",
        "W przypadku nieprzestrzegania zasad higieny istnieje ryzyko wystąpienia infekcji.",
      ],
    },
    aftercare: {
      heading: "Zalecenia pozabiegowe",
      items: [
        "Przez pierwsze dni nie należy dotykać brwi bez wcześniejszego umycia rąk.",
        "Nie wolno zdrapywać ani odrywać powstających skórek i strupków.",
        "Do czasu pełnego zagojenia należy unikać basenu, sauny oraz intensywnego wysiłku fizycznego.",
        "Przez minimum 2 tygodnie należy zrezygnować z opalania i korzystania z solarium.",
        "Na 3 dzień po zabiegu można zastosować wazelinę do delikatnego posmarowania.",
        "Do czasu pełnego zagojenia nie stosować peelingów ani kosmetyków o silnym działaniu złuszczającym w okolicy brwi.",
        "Nie nakładać makijażu bezpośrednio na obszar pigmentacji do czasu jego zagojenia.",
        "Przez minimum 24-48 godzin po zabiegu należy unikać alkoholu.",
        "Nie stosować w okolicy brwi produktów mogących powodować podrażnienie.",
        "Po całkowitym zagojeniu należy chronić obszar brwi przed promieniowaniem UV, stosując SPF 50.",
        "Nie wykonywać dodatkowych zabiegów kosmetologicznych w obrębie brwi do czasu pełnej regeneracji skóry.",
        "W razie jakichkolwiek wątpliwości dotyczących procesu gojenia należy skonsultować się z osobą wykonującą zabieg.",
      ],
    },
    faqs: [
      {
        question: "Jak dobierany jest kształt brwi?",
        answer:
          "Przed pigmentacją wykonywany jest szczegółowy rysunek wstępny, który pozwala określić kształt, proporcje i dopasowanie brwi do rysów twarzy.",
      },
      {
        question: "Czy kolor brwi od razu po zabiegu jest ostateczny?",
        answer:
          "Po zabiegu kolor może być początkowo bardziej intensywny. W trakcie gojenia pigment stopniowo jaśnieje i stabilizuje się.",
      },
      {
        question: "Jakie reakcje mogą wystąpić podczas gojenia?",
        answer:
          "Może wystąpić zaczerwienienie, obrzęk, suchość i delikatne złuszczanie naskórka. Czas i sposób gojenia różnią się w zależności od skóry i indywidualnych predyspozycji.",
      },
    ],
  },
  {
    slug: "modelowanie-ust",
    title: "Modelowanie ust",
    shortDescription:
      "Modelowanie ust poprawia ich kształt, proporcje i objętość z zachowaniem naturalnej harmonii. Zabieg wykorzystuje preparat na bazie kwasu hialuronowego, a jego zakres dobiera się podczas konsultacji.",
    duration: "50 MIN",
    price: "700 zł",
    recoveryTime: "około 2-7 dni",
    sessionCount: "1",
    imageAlt: "Zdjęcie ust związane z zabiegiem modelowania.",
    description: {
      heading: "Na czym polega zabieg",
      paragraphs: [
        "To zabieg, którego celem jest poprawa kształtu, proporcji oraz objętości ust z zachowaniem naturalnej harmonii.",
        "Zabieg wykonywany jest z wykorzystaniem preparatu na bazie kwasu hialuronowego - substancji naturalnie występującej w organizmie, odpowiedzialnej m.in. za utrzymanie odpowiedniego poziomu nawilżenia i objętości tkanek.",
        "Każdy zabieg poprzedzony jest szczegółową konsultacją, podczas której analizowane są proporcje ust, oczekiwania pacjentki oraz ewentualne przeciwwskazania. Na tej podstawie dobierana jest odpowiednia technika oraz ilość preparatu, tak aby uzyskany efekt był dopasowany indywidualnie do oczekiwań pacjentki.",
        "W zależności od potrzeb zabieg może obejmować delikatne zwiększenie objętości, podkreślenie konturu czerwieni wargowej, poprawę symetrii, modelowanie łuku Kupidyna czy przywrócenie utraconej objętości.",
        "Bezpośrednio po zabiegu może wystąpić przejściowy obrzęk, zaczerwienienie lub niewielkie zasinienie w miejscu podania preparatu. Jest to naturalna reakcja tkanek na zabieg. Ostateczny efekt ocenia się po ustąpieniu obrzęku i pełnym ułożeniu preparatu w tkankach, zazwyczaj po około 3-4 tygodniach.",
        "Trwałość efektu jest indywidualna i zależy m.in. od zastosowanego preparatu, metabolizmu organizmu, stylu życia oraz indywidualnych predyspozycji. Zazwyczaj efekt utrzymuje się przez kilka do kilkunastu miesięcy.",
      ],
    },
    preparation: {
      heading: "Przygotowanie do zabiegu",
      ordered: true,
      items: [
        "Na 2-3 dni przed zabiegiem zadbaj o regularne picie wody — około 2-3 litrów dziennie.",
        "Nie spożywaj alkoholu minimum 24-48 godzin przed planowanym zabiegiem.",
        "Na minimum 48 godzin przed zabiegiem, o ile jest to możliwe i bezpieczne, unikaj leków przeciwbólowych i przeciwzapalnych z grupy NLPZ.",
        "Przy tendencji do opryszczki należy przyjąć heviran w dawce 600-800 mg / dziennie przez ok 3 dni przed zabiegiem.",
        "Po zakończeniu antybiotykoterapii warto odczekać do pełnego powrotu do zdrowia i skonsultować termin zabiegu. W przypadku infekcji, gorączki lub złego samopoczucia zabieg należy przełożyć.",
        "Zrezygnuj z kawy, napojów energetycznych oraz intensywnego wysiłku fizycznego bezpośrednio przed wizytą.",
      ],
    },
    contraindications: {
      heading: "Przeciwwskazania",
      items: [
        "Ciąża i karmienie piersią",
        "Aktywna opryszczka",
        "Stany zapalne w miejscu wykonywania zabiegu (zmiany ropne)",
        "Infekcja, przeziębienie lub osłabienie organizmu",
        "Cukrzyca, szczególnie niewyrównana",
        "Epilepsja oraz niektóre choroby psychiczne",
        "Łuszczyca i inne aktywne choroby skóry w miejscu zabiegu",
        "Czynne choroby autoimmunologiczne",
        "Leczenie przeciwkrzepliwe i zaburzenia krzepliwości krwi",
        "Ziarniniakowe zapalenie skóry",
        "Choroby nowotworowe - wymagana indywidualna kwalifikacja",
        "Nadwrażliwość na kwas hialuronowy lub którykolwiek ze składników wypełniacza",
        "Izotretynoina (Izotek) - w trakcie leczenia",
        "Przyjmowanie leków zwiększających ryzyko krwawienia, w szczególności ASA i NLPZ",
        "Aktywne leczenie antybiotykiem lub trwająca infekcja",
        "Stały wypełniacz w miejscu planowanego zabiegu (np. Aquamid)",
        "Dysmorfofobia i nierealistyczne oczekiwania dotyczące efektu zabiegu",
        "Skłonność do powstawania bliznowców - przeciwwskazanie względne/indywidualna kwalifikacja",
        "Inne istotne choroby lub przyjmowane leki mogące mieć wpływ na bezpieczeństwo zabiegu",
      ],
    },
    recovery: {
      heading: "Reakcje pozabiegowe i czas rekonwalescencji",
      paragraphs: [
        "Techniki iniekcji stosowane podczas zabiegu nie są mocno traumatyczne dla tkanek. Po zabiegu może jednak wystąpić przejściowy obrzęk i tkliwość.",
        "Preparat stabilizuje się w tkankach w kolejnych tygodniach, dlatego efekt końcowy oceniamy po około 4-5 tygodniach od zabiegu.",
        "Do około 2 tygodni mogą być wyczuwalne niewielkie nierówności lub zgrubienia, które w większości przypadków ustępują samoistnie.",
      ],
      symptomsHeading: "Do najczęstszych objawów pozabiegowych należą",
      symptoms: [
        "opuchlizna,",
        "siniaki,",
        "krwiaki,",
        "tkliwość w miejscach wkłuć,",
        "uczucie napięcia,",
        "przejściowe nierówności lub zgrubienia.",
      ],
    },
    aftercare: {
      heading: "Zalecenia pozabiegowe",
      items: [
        "Zachować szczególną higienę okolicy zabiegowej. Nie dotykać i nie malować ust przez minimum 24 godziny.",
        "Po zabiegu modelowania ust regularnie nawilżać usta zaleconym preparatem przez okres gojenia.",
        "Zmienić ręcznik do twarzy na czysty lub jednorazowy oraz poszewkę na poduszkę.",
        "Nie spożywać alkoholu przez minimum 24-48 godzin po zabiegu.",
        "Nie przyjmować bez konsultacji leków przeciwbólowych i przeciwzapalnych zwiększających ryzyko krwawienia (np. aspiryny, ibuprofenu).",
        "W dniu zabiegu unikać bardzo gorących i pikantnych potraw oraz napojów.",
        "Nie układać ust w „dziubek”, nie pocierać warg o siebie i nie zagryzać ich.",
        "Unikać sauny, solarium oraz intensywnego nagrzewania okolicy zabiegowej przez minimum 14 dni.",
        "Przez kilka dni po zabiegu unikać spania w pozycji powodującej ucisk na usta.",
        "Nie masować ani nie uciskać ust.",
      ],
    },
    faqs: [
      {
        question: "Na czym polega modelowanie ust?",
        answer:
          "To zabieg, którego celem jest poprawa kształtu, proporcji oraz objętości ust z zachowaniem naturalnej harmonii.",
      },
      {
        question: "Kiedy można ocenić ostateczny efekt?",
        answer:
          "Efekt końcowy ocenia się po ustąpieniu obrzęku i ułożeniu preparatu w tkankach. Preparat stabilizuje się w kolejnych tygodniach.",
      },
      {
        question: "Jak długo utrzymuje się efekt modelowania?",
        answer:
          "Trwałość zależy między innymi od zastosowanego preparatu, metabolizmu, stylu życia i indywidualnych predyspozycji; zazwyczaj efekt utrzymuje się przez kilka do kilkunastu miesięcy.",
      },
    ],
  },
  {
    slug: "makijaz-permanentny-ust",
    title: "Makijaż permanentny ust",
    shortDescription:
      "Makijaż permanentny ust polega na wprowadzeniu pigmentu do powierzchownych warstw skóry. Pozwala podkreślić kontur i nadać ustom jednolity, naturalnie wyglądający kolor.",
    duration: "około 2-3 godziny",
    price: "800 zł",
    recoveryTime: "około 7-14 dni",
    sessionCount: "2 (z dopigmentowaniem po 4-6 tygodniach)",
    imageAlt: "Makijaż permanentny ust.",
    forWho: {
      heading: "Dla kogo jest zabieg?",
      paragraphs: [
        "Zabieg przeznaczony jest dla osób, które chcą podkreślić naturalny kształt ust, wyrównać ich kolor oraz nadać im bardziej wyrazisty i estetyczny wygląd. Makijaż permanentny może być również dobrym rozwiązaniem dla osób, które chcą optycznie skorygować drobne asymetrie, podkreślić kontur ust oraz ograniczyć konieczność codziennego malowania.",
      ],
    },
    description: {
      heading: "Na czym polega zabieg?",
      paragraphs: [
        "Makijaż permanentny ust polega na wprowadzeniu odpowiednio dobranego pigmentu do powierzchownych warstw skóry za pomocą sterylnego kartridżu.",
        "Przed rozpoczęciem pigmentacji wykonywany jest rysunek wstępny, podczas którego ustalany jest kształt, proporcje oraz kolor dopasowany do oczekiwań klienta i jego naturalnej urody.",
        "Następnie pigment zostaje stopniowo wprowadzony w skórę, dzięki czemu usta zyskują bardziej wyraźny kontur oraz jednolity, naturalnie wyglądający kolor.",
        "Po zabiegu kolor może początkowo wydawać się intensywniejszy. Wraz z procesem gojenia pigment stopniowo jaśnieje, a ostateczny efekt stabilizuje się po pełnej regeneracji skóry.",
      ],
    },
    preparation: {
      heading: "Przygotowanie do zabiegu",
      items: [
        "Na minimum 72 godziny przed zabiegiem należy unikać spożywania alkoholu oraz, jeśli jest to możliwe i bezpieczne, leków mogących zwiększać ryzyko krwawienia.",
        "2 dni przed zabiegiem zaleca sie przyjąć Heviran w dawce ??",
        "Przez kilka dni przed zabiegiem należy zadbać o odpowiednie nawodnienie organizmu.",
        "Na kilka dni przed pigmentacją należy unikać intensywnego opalania oraz korzystania z solarium.",
        "W dniu zabiegu zaleca się ograniczenie kawy i napojów energetycznych.",
        "Usta powinny być w dobrej kondycji — bez aktywnej opryszczki, pęknięć, ran czy innych zmian w miejscu wykonywania zabiegu.",
      ],
    },
    contraindications: {
      heading: "Przeciwwskazania",
      items: [
        "Aktywna opryszczka lub inne infekcje w obrębie ust.",
        "Stany zapalne i zmiany skórne w miejscu wykonywania zabiegu.",
        "Choroby skóry w aktywnej fazie.",
        "Ciąża i okres karmienia piersią.",
        "Choroby autoimmunologiczne.",
        "Zaburzenia krzepnięcia krwi.",
        "Przyjmowanie leków przeciwzakrzepowych.",
        "Skłonność do powstawania bliznowców.",
        "Choroby nowotworowe.",
        "Niewyrównana cukrzyca.",
        "Epilepsja.",
        "Alergia lub nadwrażliwość na składniki stosowanych preparatów.",
        "Przyjmowanie doustnych antybiotyków.",
        "Aktywne infekcje organizmu.",
        "Świeżo wykonane zabiegi medycyny estetycznej w obrębie ust.",
        "Uszkodzenia, rany lub podrażnienia skóry ust.",
        "Nierealistyczne oczekiwania wobec efektu zabiegu.",
      ],
    },
    recovery: {
      heading: "Reakcje pozabiegowe i czas rekonwalescencji",
      paragraphs: [
        "Bezpośrednio po zabiegu usta mogą być lekko opuchnięte, zaczerwienione i bardziej intensywne. W kolejnych dniach pigment stopniowo blednie, a na powierzchni ust może pojawić się delikatne złuszczanie.",
        "Proces gojenia trwa zazwyczaj kilka dni, natomiast pełna stabilizacja koloru może trwać do miesiąca. Ostateczny rezultat może różnić się u poszczególnych osób i zależy m.in. od rodzaju skóry, zastosowanego pigmentu oraz indywidualnych procesów regeneracyjnych.",
      ],
      symptomsHeading: "Do najczęstszych objawów pozabiegowych należą:",
      symptoms: [
        "Obrzęk ust.",
        "Zaczerwienienie.",
        "Uczucie napięcia skóry.",
        "Delikatne pieczenie lub szczypanie.",
        "Tkliwość i dyskomfort.",
        "Przejściowo intensywniejszy kolor pigmentu.",
        "Suchość ust.",
        "Delikatne złuszczanie naskórka.",
        "Niewielkie strupki podczas procesu gojenia.",
        "Nierównomierne złuszczanie pigmentu w trakcie regeneracji.",
        "Możliwość wystąpienia opryszczki u osób z predyspozycją.",
        "Reakcja alergiczna na składniki stosowanych preparatów.",
        "W przypadku nieprzestrzegania zasad higieny istnieje ryzyko wystąpienia infekcji.",
      ],
    },
    aftercare: {
      heading: "Zalecenia pozabiegowe",
      items: [
        "Przez pierwsze dni należy unikać dotykania ust bez umycia rąk.",
        "Nie należy samodzielnie usuwać powstających skórek ani strupków.",
        "Do czasu pełnego zagojenia należy unikać basenu, sauny oraz intensywnego wysiłku fizycznego.",
        "Przez minimum 2 tygodnie należy zrezygnować z opalania i korzystania z solarium.",
        "Nie należy przyjmować gorących płynów.",
        "Stosować preparat przeznaczony do pielęgnacji ust po pigmentacji.",
        "Nie stosować peelingów ani produktów o działaniu złuszczającym w obrębie ust do czasu pełnego zagojenia.",
        "Przez minimum 48 godziny unikać wykonywania makijażu w bezpośrednim obszarze zabiegowym.",
        "Nie spożywać alkoholu przez minimum 24-48 godzin po zabiegu.",
        "Przez kilka dni po zabiegu unikać bardzo gorących, pikantnych i mocno drażniących produktów.",
        "Nie korzystać z pomadek i kosmetyków do ust, które mogą podrażniać świeżo pigmentowaną skórę.",
        "Po całkowitym zagojeniu należy stosować SPF 50 na usta.",
        "W przypadku wystąpienia opryszczki lub innych niepokojących objawów należy skontaktować się z osobą wykonującą zabieg.",
        "W razie jakichkolwiek wątpliwości dotyczących procesu gojenia należy skonsultować się z osobą wykonującą zabieg.",
      ],
    },
    faqs: [
      {
        question: "Czy kolor ust po zabiegu będzie od razu taki jak docelowy?",
        answer:
          "Kolor może początkowo wydawać się intensywniejszy. Wraz z procesem gojenia pigment stopniowo jaśnieje, a ostateczny efekt stabilizuje się po pełnej regeneracji skóry.",
      },
      {
        question: "Jak długo trwa stabilizacja koloru?",
        answer:
          "Proces gojenia trwa zazwyczaj kilka dni, natomiast pełna stabilizacja koloru może trwać do miesiąca.",
      },
      {
        question:
          "Czy przy skłonności do opryszczki należy o tym powiedzieć przed wizytą?",
        answer:
          "Tak. W przygotowaniu do zabiegu wskazano, że usta powinny być bez aktywnej opryszczki, a wśród możliwych reakcji wymieniono jej wystąpienie u osób z predyspozycją.",
      },
    ],
  },
  {
    slug: "mezoterapia-mikroiglowa",
    title: "Mezoterapia igłowa i mikroigłowa",
    shortDescription:
      "Mezoterapia dostarcza skórze odpowiednio dobrane substancje aktywne. W zależności od metody preparat podaje się cienką igłą lub poprzez kontrolowane mikronakłucia.",
    duration: "60-90 minut",
    price: "350-600 zł",
    recoveryTime: "około 1-3 dni",
    sessionCount: "3-6",
    imageAlt: "Zabieg mezoterapii igłowej i mikroigłowej.",
    forWho: {
      heading: "Dla kogo jest zabieg?",
      paragraphs: [
        "Zabieg przeznaczony jest dla osób, które chcą poprawić kondycję, wygląd oraz jakość skóry. Mezoterapia może być stosowana w celu intensywnego nawilżenia, poprawy jędrności i elastyczności skóry, zmniejszenia widoczności drobnych zmarszczek oraz poprawy jej kolorytu.",
        "Zabieg może być wykonywany również jako element terapii skóry wymagającej regeneracji, odżywienia i pobudzenia naturalnych procesów odnowy.",
      ],
    },
    description: {
      heading: "Na czym polega zabieg?",
      paragraphs: [
        "Mezoterapia polega na dostarczeniu odpowiednio dobranych substancji aktywnych w obręb skóry. W zależności od wybranej metody preparat może być podawany za pomocą cienkiej igły bezpośrednio do skóry właściwej lub wprowadzany poprzez wykonanie kontrolowanych mikronakłuć.",
        "Mezoterapia igłowa pozwala na precyzyjne podanie preparatu w wybrane obszary skóry. Mezoterapia mikroigłowa wykorzystuje natomiast serię mikronakłuć, które pobudzają naturalne procesy regeneracyjne skóry oraz zwiększają jej zdolność do odnowy.",
        "W zależności od zastosowanego preparatu i indywidualnych potrzeb skóry zabieg może mieć działanie przede wszystkim nawilżające, odżywcze, regenerujące, rozświetlające lub poprawiające jej napięcie i elastyczność.",
      ],
    },
    preparation: {
      heading: "Przygotowanie do zabiegu",
      items: [
        "Na minimum 72 godziny przed zabiegiem należy unikać alkoholu oraz, jeśli jest to możliwe i bezpieczne, leków mogących zwiększać ryzyko krwawienia.",
        "Od zakończenia antybiotykoterapii powinny upłynąć co najmniej 2 tygodnie.",
        "Na kilka dni przed zabiegiem należy zadbać o odpowiednie nawodnienie organizmu.",
        "Przed zabiegiem należy unikać intensywnego opalania oraz korzystania z solarium.",
        "Na kilka dni przed zabiegiem nie należy wykonywać silnych peelingów ani stosować preparatów o intensywnym działaniu złuszczającym.",
        "W dniu zabiegu zaleca się ograniczenie kawy oraz napojów energetycznych.",
        "Skóra w miejscu wykonywania zabiegu powinna być zdrowa, bez aktywnych stanów zapalnych, ran czy podrażnień.",
      ],
    },
    contraindications: {
      heading: "Przeciwwskazania",
      items: [
        "Aktywne infekcje i stany zapalne skóry o podłożu bakteryjnym, wirusowym lub grzybiczym.",
        "Choroby skóry w aktywnej fazie.",
        "Choroby autoimmunologiczne.",
        "Ciąża i okres karmienia piersią.",
        "Skłonność do powstawania bliznowców.",
        "Zaburzenia krzepnięcia krwi.",
        "Przyjmowanie leków przeciwzakrzepowych.",
        "Przyjmowanie niesteroidowych leków przeciwzapalnych.",
        "Choroby nowotworowe.",
        "Aktywna opryszczka.",
        "Niewyrównana cukrzyca.",
        "Alergia lub nadwrażliwość na składniki stosowanego preparatu.",
        "Stany zapalne lub uszkodzenia skóry w miejscu planowanego zabiegu.",
        "Trwająca antybiotykoterapia doustna.",
        "Epilepsja.",
        "Wybrane choroby psychiczne.",
        "Świeżo wykonane zabiegi medycyny estetycznej lub kosmetologiczne w miejscu planowanego zabiegu.",
        "Nierealistyczne oczekiwania wobec efektów terapii.",
      ],
    },
    recovery: {
      heading: "Reakcje pozabiegowe i czas rekonwalescencji",
      paragraphs: [
        "Bezpośrednio po zabiegu skóra może być zaczerwieniona, lekko obrzęknięta i bardziej wrażliwa. W przypadku mezoterapii igłowej mogą pojawić się niewielkie ślady po wkłuciach, natomiast po mezoterapii mikroigłowej typowe jest przejściowe zaczerwienienie oraz uczucie ciepła lub pieczenia skóry.",
        "Czas regeneracji zależy od zastosowanej metody, intensywności zabiegu, rodzaju preparatu oraz indywidualnych właściwości skóry. Efekty terapii mogą pojawiać się stopniowo wraz z zachodzącymi procesami regeneracyjnymi.",
      ],
      symptomsHeading: "Do najczęstszych objawów pozabiegowych należą:",
      symptoms: [
        "Zaczerwienienie skóry.",
        "Delikatny obrzęk.",
        "Podrażnienie.",
        "Uczucie ciepła lub pieczenia.",
        "Tkliwość skóry.",
        "Niewielki ból w miejscu wkłuć.",
        "Drobne siniaki lub krwiaki.",
        "Widoczne punkty po wkłuciach.",
        "Uczucie napięcia skóry.",
        "Przejściowa suchość skóry.",
        "Delikatne złuszczanie naskórka.",
        "Reakcje alergiczne na składniki preparatu.",
        "W przypadku nieprzestrzegania zasad higieny istnieje ryzyko wystąpienia infekcji.",
      ],
    },
    aftercare: {
      heading: "Zalecenia pozabiegowe",
      items: [
        "Przez minimum 24 godziny należy unikać intensywnego wysiłku fizycznego.",
        "Przez minimum 2 tygodnie należy zrezygnować z opalania oraz korzystania z solarium.",
        "Przez kilka dni należy unikać sauny, gorących kąpieli oraz innych czynników powodujących intensywne nagrzewanie skóry.",
        "Do czasu pełnej regeneracji skóry należy zrezygnować z basenu.",
        "Nie wykonywać peelingów ani nie stosować silnie złuszczających kosmetyków do czasu pełnego zagojenia skóry.",
        "Przez minimum 24 godziny nie należy wykonywać makijażu w miejscu zabiegu.",
        "Stosować delikatne kosmetyki przeznaczone do regeneracji skóry.",
        "Nie dotykać i nie pocierać obszaru poddanego zabiegowi.",
        "Zadbać o higienę skóry oraz używanie czystego ręcznika i poszewki.",
        "Stosować ochronę przeciwsłoneczną SPF 50.",
        "Przez minimum 24-48 godzin należy unikać spożywania alkoholu.",
        "Zadbać o odpowiednie nawodnienie organizmu.",
        "Jeżeli nie ma potrzeby, to nie stosować leków przeciwzapalnych.",
        "W razie jakichkolwiek wątpliwości dotyczących procesu gojenia należy skonsultować się z osobą wykonującą zabieg.",
      ],
    },
    faqs: [
      {
        question: "Czym różni się mezoterapia igłowa od mikroigłowej?",
        answer:
          "W mezoterapii igłowej preparat podawany jest cienką igłą bezpośrednio do skóry właściwej. Mezoterapia mikroigłowa wykorzystuje serię mikronakłuć pobudzających naturalne procesy regeneracyjne skóry.",
      },
      {
        question: "Jakie potrzeby skóry może wspierać mezoterapia?",
        answer:
          "W zależności od preparatu i potrzeb skóry zabieg może działać nawilżająco, odżywczo, regenerująco, rozświetlająco lub poprawiać napięcie i elastyczność.",
      },
      {
        question: "Jak długo trwa regeneracja skóry?",
        answer:
          "Czas regeneracji zależy od metody, intensywności zabiegu, rodzaju preparatu oraz indywidualnych właściwości skóry.",
      },
    ],
  },
  {
    slug: "stymulatory-tkankowe",
    title: "Stymulatory tkankowe",
    shortDescription:
      "Stymulatory tkankowe dostarczają do skóry właściwej odpowiednio dobrane substancje aktywne. Wspierają naturalne procesy odnowy oraz produkcję kolagenu i elastyny.",
    duration: "50 minut",
    price: "350-900 zł",
    recoveryTime: "około 1-3 dni",
    sessionCount: "1-3",
    imageAlt: "Zabieg stymulatorami tkankowymi.",
    forWho: {
      heading: "Dla kogo przeznaczony jest zabieg?",
      paragraphs: [
        "Zabieg przeznaczony jest dla osób, które chcą poprawić kondycję i wygląd skóry, zmniejszyć jej wiotkość oraz poprawić kontur twarzy. Stymulatory mogą być stosowane również w celu wygładzenia drobnych zmarszczek, poprawy gęstości i napięcia skóry, a także nadania jej bardziej zdrowego i świeżego wyglądu.",
      ],
    },
    description: {
      heading: "Na czym polega zabieg?",
      paragraphs: [
        "Stymulatory tkankowe znajdują zastosowanie w terapiach ukierunkowanych na poprawę jakości skóry i procesy regeneracyjne. Ich działanie opiera się na dostarczeniu do skóry odpowiednio dobranych substancji aktywnych, które wspierają naturalne procesy odnowy oraz produkcję kolagenu i elastyny.",
        "Preparat podawany jest za pomocą cienkiej igły bezpośrednio do skóry właściwej. Sam proces iniekcji powoduje kontrolowaną reakcję tkanek, która może dodatkowo pobudzać naturalne mechanizmy regeneracyjne. W zależności od zastosowanego preparatu uzyskuje się przede wszystkim efekt nawilżenia, poprawy napięcia i elastyczności, zagęszczenia oraz rozświetlenia skóry.",
      ],
    },
    preparation: {
      heading: "Przygotowanie do zabiegu",
      items: [
        "Na minimum 72 godziny przed zabiegiem należy unikać leków przeciwbólowych i przeciwzapalnych z grupy NLPZ oraz preparatów wpływających na krzepliwość krwi. Należy również zrezygnować ze spożywania alkoholu.",
        "Od zakończenia antybiotykoterapii powinny upłynąć co najmniej 2 tygodnie.",
        "Przez 2-3 dni poprzedzające zabieg należy zadbać o odpowiednie nawodnienie organizmu.",
        "W przypadku skłonności do powstawania siniaków można wcześniej skonsultować stosowanie preparatów wspierających naczynia krwionośne.",
        "W dniu zabiegu zaleca się ograniczenie kawy oraz napojów energetycznych.",
      ],
    },
    contraindications: {
      heading: "Przeciwwskazania",
      items: [
        "Aktywne infekcje i choroby skóry o podłożu bakteryjnym, wirusowym lub grzybiczym.",
        "Choroby autoimmunologiczne.",
        "Skłonność do powstawania bliznowców.",
        "Ciąża i okres karmienia piersią.",
        "Przyjmowanie leków przeciwzakrzepowych.",
        "Przyjmowanie niesteroidowych leków przeciwzapalnych.",
        "Choroby nowotworowe.",
        "Aktywna opryszczka.",
        "Zaburzenia krzepnięcia krwi.",
        "Wiek poniżej 18 lat.",
        "Nadwrażliwość lub uczulenie na składniki preparatu.",
        "Aktywne stany zapalne w miejscu planowanego zabiegu.",
        "Wybrane choroby tkanki łącznej, m.in. RZS, MIZS, toczeń rumieniowaty, twardzina układowa, zapalenie skórno-mięśniowe oraz zapalenie naczyń.",
        "Ziarniniakowe choroby skóry.",
        "Dysmorfofobia.",
        "Trwająca antybiotykoterapia doustna.",
        "Epilepsja oraz niektóre choroby psychiczne.",
        "Nierealistyczne oczekiwania wobec efektów zabiegu.",
      ],
    },
    recovery: {
      heading: "Reakcje pozabiegowe i czas rekonwalescencji",
      paragraphs: [
        "Czas utrzymywania się efektów może być różny u poszczególnych osób. Wpływ na rezultat mają m.in. rodzaj i kondycja skóry, zastosowany preparat, jego ilość i technika podania, a także indywidualne predyspozycje oraz styl życia.",
      ],
      symptomsHeading: "Do najczęstszych reakcji pozabiegowych należą:",
      symptoms: [
        "Delikatny obrzęk.",
        "Zaczerwienienie skóry.",
        "Przejściowe podrażnienie.",
        "Dyskomfort lub ból w miejscu wkłuć.",
        "Pieczenie lub uczucie rozpierania.",
        "Miejscowa reakcja zapalna.",
        "Zasinienia i krwiaki.",
        "Przejściowe uczucie napięcia skóry.",
        "Reakcje alergiczne.",
        "Przejściowe przebarwienia.",
        "Wyczuwalne pod skórą depozyty preparatu.",
        "Widoczne niewielkie grudki lub depozyty w miejscu podania.",
        "W przypadku nieprzestrzegania zasad higieny i aseptyki istnieje również ryzyko wystąpienia infekcji.",
      ],
    },
    aftercare: {
      heading: "Zalecenia pozabiegowe",
      items: [
        "Przez minimum 2 tygodnie należy unikać intensywnego nagrzewania organizmu, opalania oraz korzystania z sauny.",
        "Do czasu pełnej regeneracji skóry należy ograniczyć intensywny wysiłek fizyczny, treningi, korzystanie z basenu, depilację oraz peelingi i silnie złuszczające preparaty.",
        "Stosować produkty przeznaczone do regeneracji i odbudowy bariery skóry.",
        "Miejsce poddane iniekcji powinno być utrzymywane w czystości.",
        "Należy szczególnie zadbać o higienę obszaru zabiegowego, w tym wymienić ręcznik i poszewkę na poduszkę.",
        "Przez minimum 24 godziny nie należy wykonywać makijażu w miejscu zabiegu.",
        "Stosować krem z wysoką ochroną przeciwsłoneczną SPF 50.",
        "Przez minimum 3 dni po zabiegu należy zrezygnować ze spożywania alkoholu.",
        "Zadbać o odpowiednie nawodnienie organizmu, zwiększając ilość wypijanej wody.",
        "Nie stosować leków przeciwzapalnych bez wcześniejszej konsultacji.",
        "Przy skłonności do opryszczki można zastosować Heviran",
        "W przypadku tendencji do powstawania obrzęków lub siniaków można przyjąć Aescin,",
        "W przypadku bólu można stosować paracetamol,",
        "W przypadku wystąpienia niepokojących objawów lub jakichkolwiek wątpliwości należy skontaktować się z osobą wykonującą zabieg.",
      ],
    },
    faqs: [
      {
        question: "Jak działają stymulatory tkankowe?",
        answer:
          "Dostarczają do skóry odpowiednio dobrane substancje aktywne, które wspierają naturalne procesy odnowy oraz produkcję kolagenu i elastyny.",
      },
      {
        question: "Jakie efekty może wspierać zabieg?",
        answer:
          "W zależności od preparatu zabieg może wspierać nawilżenie, poprawę napięcia i elastyczności, zagęszczenie oraz rozświetlenie skóry.",
      },
      {
        question: "Od czego zależy utrzymywanie się efektów?",
        answer:
          "Wpływ mają między innymi rodzaj i kondycja skóry, zastosowany preparat, jego ilość i technika podania, indywidualne predyspozycje oraz styl życia.",
      },
    ],
  },
  {
    slug: "rf-radiofrekwencja",
    title: "Radiofrekwencja mikroigłowa",
    shortDescription:
      "Radiofrekwencja mikroigłowa łączy kontrolowane mikronakłucia z energią fal radiowych. Zabieg pobudza naturalne procesy regeneracyjne i wspiera stopniową poprawę struktury skóry.",
    duration: "60-90 minut",
    price: "350-700 zł",
    recoveryTime: "około 3-7 dni",
    sessionCount: "3-4",
    imageAlt: "Zabieg radiofrekwencji mikroigłowej.",
    forWho: {
      heading: "Dla kogo jest zabieg?",
      paragraphs: [
        "Zabieg przeznaczony jest dla osób, które chcą poprawić jędrność, napięcie i elastyczność skóry oraz zmniejszyć widoczność drobnych zmarszczek. Radiofrekwencja mikroigłowa może być stosowana również w celu poprawy struktury i gęstości skóry, redukcji widoczności blizn oraz poprawy ogólnego wyglądu i kondycji skóry.",
      ],
    },
    description: {
      heading: "Na czym polega zabieg?",
      paragraphs: [
        "Radiofrekwencja mikroigłowa łączy działanie mikronakłuć z energią fal radiowych. Podczas zabiegu cienkie igły wprowadzane są na określoną głębokość skóry, a następnie energia RF przekazywana jest bezpośrednio w obrębie tkanek.",
        "Kontrolowane mikronakłucia oraz działanie energii cieplnej pobudzają naturalne procesy regeneracyjne skóry i wspierają przebudowę włókien kolagenowych oraz elastynowych. W efekcie skóra może stać się bardziej napięta, jędrna i wygładzona, a jej struktura ulega stopniowej poprawie.",
      ],
    },
    preparation: {
      heading: "Przygotowanie do zabiegu",
      items: [
        "Na minimum 72 godziny przed zabiegiem należy unikać spożywania alkoholu oraz, jeśli jest to możliwe i bezpieczne, leków mogących zwiększać ryzyko krwawienia.",
        "Od zakończenia antybiotykoterapii powinny upłynąć co najmniej 2 tygodnie.",
        "Przez kilka dni przed zabiegiem należy zadbać o odpowiednie nawodnienie organizmu.",
        "Należy unikać intensywnego opalania oraz korzystania z solarium przed zabiegiem.",
        "Na kilka dni przed zabiegiem nie należy wykonywać silnych peelingów ani stosować intensywnie złuszczających preparatów.",
        "W dniu zabiegu zaleca się ograniczenie kawy oraz napojów energetycznych.",
        "Skóra w miejscu wykonywania zabiegu powinna być zdrowa, bez ran, aktywnych stanów zapalnych i podrażnień.",
      ],
    },
    contraindications: {
      heading: "Przeciwwskazania",
      items: [
        "Aktywne infekcje i stany zapalne skóry.",
        "Choroby skóry w aktywnej fazie.",
        "Choroby autoimmunologiczne.",
        "Ciąża i okres karmienia piersią.",
        "Choroby nowotworowe.",
        "Zaburzenia krzepnięcia krwi.",
        "Przyjmowanie leków przeciwzakrzepowych.",
        "Skłonność do powstawania bliznowców.",
        "Aktywna opryszczka w miejscu zabiegu.",
        "Niewyrównana cukrzyca.",
        "Epilepsja.",
        "Wszczepiony rozrusznik serca lub inne aktywne implanty elektroniczne.",
        "Implanty metalowe w obszarze poddawanym zabiegowi.",
        "Alergia lub nadwrażliwość na stosowane preparaty.",
        "Uszkodzenia, rany lub podrażnienia skóry w miejscu zabiegu.",
        "Trwająca antybiotykoterapia doustna.",
        "Świeżo wykonane zabiegi medycyny estetycznej lub kosmetologiczne w obszarze zabiegowym.",
        "Nierealistyczne oczekiwania wobec efektów zabiegu.",
      ],
    },
    recovery: {
      heading: "Reakcje pozabiegowe i czas rekonwalescencji",
      paragraphs: [
        "Bezpośrednio po zabiegu skóra może być zaczerwieniona, lekko obrzęknięta i bardziej wrażliwa. Może pojawić się również uczucie ciepła, pieczenia lub napięcia.",
        "W kolejnych dniach może wystąpić delikatne złuszczanie naskórka. Czas regeneracji zależy m.in. od intensywności zabiegu, zastosowanych parametrów oraz indywidualnych właściwości skóry. Efekty przebudowy skóry pojawiają się stopniowo wraz z zachodzącymi procesami regeneracyjnymi.",
      ],
      symptomsHeading: "Do najczęstszych objawów pozabiegowych należą:",
      symptoms: [
        "Zaczerwienienie skóry.",
        "Delikatny obrzęk.",
        "Uczucie ciepła.",
        "Pieczenie lub szczypanie.",
        "Podrażnienie i tkliwość skóry.",
        "Uczucie napięcia.",
        "Drobne punkty lub ślady po wkłuciach.",
        "Niewielkie siniaki lub krwiaki.",
        "Suchość skóry.",
        "Delikatne złuszczanie naskórka.",
        "Przejściowa nadwrażliwość skóry.",
        "Przebarwienia lub odbarwienia skóry.",
        "W przypadku nieprzestrzegania zasad higieny istnieje ryzyko wystąpienia infekcji.",
      ],
    },
    aftercare: {
      heading: "Zalecenia pozabiegowe",
      items: [
        "Przez minimum 24-48 godzin należy unikać intensywnego wysiłku fizycznego.",
        "Przez minimum 2 tygodnie należy zrezygnować z opalania oraz korzystania z solarium.",
        "Przez kilka dni należy unikać sauny, gorących kąpieli oraz innych czynników powodujących intensywne nagrzewanie skóry.",
        "Do czasu pełnej regeneracji skóry należy zrezygnować z basenu.",
        "Nie wykonywać peelingów oraz nie stosować silnie złuszczających preparatów do czasu pełnego zagojenia skóry.",
        "Przez minimum 24 godziny nie należy wykonywać makijażu w miejscu zabiegu.",
        "Stosować delikatne preparaty przeznaczone do regeneracji i odbudowy bariery skóry.",
        "Nie dotykać, nie pocierać ani nie drapać obszaru poddanego zabiegowi.",
        "Zadbać o odpowiednią higienę skóry oraz używanie czystego ręcznika i poszewki.",
        "Codziennie stosować ochronę przeciwsłoneczną SPF 50.",
        "Przez minimum 24-48 godzin należy unikać spożywania alkoholu.",
        "Zadbać o odpowiednie nawodnienie organizmu.",
        "Nie stosować produktów zawierających retinoidy, kwasy lub inne silnie działające substancje do czasu pełnej regeneracji skóry.",
        "W razie jakichkolwiek wątpliwości dotyczących procesu gojenia należy skonsultować się z osobą wykonującą zabieg.",
      ],
    },
    faqs: [
      {
        question: "Na czym polega radiofrekwencja mikroigłowa?",
        answer:
          "Zabieg łączy mikronakłucia z energią fal radiowych, przekazywaną bezpośrednio w obrębie tkanek.",
      },
      {
        question: "Jakich efektów może dotyczyć zabieg?",
        answer:
          "Może wspierać poprawę jędrności, napięcia i elastyczności skóry, jej struktury i gęstości oraz zmniejszenie widoczności drobnych zmarszczek i blizn.",
      },
      {
        question: "Jak może wyglądać skóra bezpośrednio po zabiegu?",
        answer:
          "Może być zaczerwieniona, lekko obrzęknięta i bardziej wrażliwa. Może pojawić się również uczucie ciepła, pieczenia lub napięcia.",
      },
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getTreatmentImage(slug: string) {
  return treatmentImages[slug] ?? "/images/hero.jpg";
}
