type TreatmentBeforeAfter =
  | {
      composite: {
        src: string;
        beforeAlt: string;
        afterAlt: string;
      };
    }
  | {
      before: { src: string; alt: string };
      after: { src: string; alt: string };
    };

export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  forWho?: string[];
  imageAlt: string;
  secondaryImage: { src: string; alt: string };
  beforeAfter?: TreatmentBeforeAfter;
  duration: string;
  effectDuration: string;
  recoveryTime?: string;
  sessionCount?: string;
  price: string;
  description: string[];
  possibleReactions: string[];
  possibleReactionSymptoms?: string[];
  preparation: string[];
  contraindications: string[];
  aftercare: string[];
  faqs?: { question: string; answer: string }[];
};

export const treatmentImages: Record<string, string> = {
  "modelowanie-ust": "/images/lips/powiekszanie ust.JPG",
  "stymulatory-tkankowe": "/images/IMG_5966.PNG",
  "makijaz-permanentny-brwi": "/images/brwi perm/brwi.jpg",
  "makijaz-permanentny-ust": "/images/lips_pmu/powiekszanie usta.JPG",
  "mezoterapia-mikroiglowa": "/images/mezo/mezoterapia.JPG",
  "rf-radiofrekwencja": "/images/IMG_5968.PNG",
  "laserowe-usuwanie-brwi": "/images/brwi perm/IMG_2127.JPG",
  peelingi: "/images/IMG_5989.PNG",
};

export const treatments: Treatment[] = [
  {
    slug: "modelowanie-ust",
    title: "Modelowanie ust",
    shortDescription:
      "Poprawa kształtu, proporcji i objętości ust z zachowaniem naturalnej harmonii.",
    imageAlt: "Zdjęcie ust związane z zabiegiem modelowania.",
    secondaryImage: {
      src: "/images/lips/IMG_8490.JPG",
      alt: "Naturalny efekt ust.",
    },
    duration: "50 minut",
    effectDuration: "od kilku do kilkunastu miesięcy",
    price: "700 zł",
    description: [
      "To zabieg, którego celem jest poprawa kształtu, proporcji oraz objętości ust z zachowaniem naturalnej harmonii.",
      "Zabieg wykonywany jest z wykorzystaniem preparatu na bazie kwasu hialuronowego – substancji naturalnie występującej w organizmie, odpowiedzialnej m.in. za utrzymanie odpowiedniego poziomu nawilżenia i objętości tkanek.",
      "Każdy zabieg poprzedzony jest szczegółową konsultacją, podczas której analizowane są proporcje ust, oczekiwania pacjentki oraz ewentualne przeciwwskazania. Na tej podstawie dobierana jest odpowiednia technika oraz ilość preparatu, tak aby uzyskany efekt był dopasowany indywidualnie do oczekiwań pacjentki.",
      "W zależności od potrzeb zabieg może obejmować delikatne zwiększenie objętości, podkreślenie konturu czerwieni wargowej, poprawę symetrii, modelowanie łuku Kupidyna czy przywrócenie utraconej objętości.",
      "Trwałość efektu jest indywidualna i zależy m.in. od zastosowanego preparatu, metabolizmu organizmu, stylu życia oraz indywidualnych predyspozycji. Zazwyczaj efekt utrzymuje się przez kilka do kilkunastu miesięcy.",
    ],
    possibleReactions: [
      "Techniki iniekcji stosowane podczas zabiegu nie są mocno traumatyczne dla tkanek. Po zabiegu może jednak wystąpić przejściowy obrzęk i tkliwość.",
      "Preparat stabilizuje się w tkankach w kolejnych tygodniach, dlatego efekt końcowy oceniamy po około 3–4 tygodniach od zabiegu.",
      "Do około 2 tygodni mogą być wyczuwalne niewielkie nierówności lub zgrubienia, które w większości przypadków ustępują samoistnie.",
    ],
    possibleReactionSymptoms: [
      "opuchlizna",
      "siniaki",
      "krwiaki",
      "tkliwość w miejscach wkłuć",
      "uczucie napięcia",
      "przejściowe nierówności lub zgrubienia",
    ],
    preparation: [
      "Na 2–3 dni przed zabiegiem zadbaj o regularne picie wody — około 2–3 litrów dziennie.",
      "Nie spożywaj alkoholu minimum 24–48 godzin przed planowanym zabiegiem.",
      "Na minimum 48 godzin przed zabiegiem, o ile jest to możliwe i bezpieczne, unikaj leków przeciwbólowych i przeciwzapalnych z grupy NLPZ.",
      "Przy tendencji do opryszczki należy przyjąć heviran w dawce 600-800 mg / dziennie przez ok 3 dni przed zabiegiem.",
      "Po zakończeniu antybiotykoterapii warto odczekać do pełnego powrotu do zdrowia i skonsultować termin zabiegu. W przypadku infekcji, gorączki lub złego samopoczucia zabieg należy przełożyć.",
      "Zrezygnuj z kawy, napojów energetycznych oraz intensywnego wysiłku fizycznego bezpośrednio przed wizytą.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywna opryszczka",
      "stany zapalne w miejscu wykonywania zabiegu (zmiany ropne)",
      "infekcja, przeziębienie lub osłabienie organizmu",
      "cukrzyca, szczególnie niewyrównana",
      "epilepsja oraz niektóre choroby psychiczne",
      "łuszczyca i inne aktywne choroby skóry w miejscu zabiegu",
      "czynne choroby autoimmunologiczne",
      "leczenie przeciwkrzepliwe i zaburzenia krzepliwości krwi",
      "ziarniniakowe zapalenie skóry",
      "choroby nowotworowe – wymagana indywidualna kwalifikacja",
      "nadwrażliwość na kwas hialuronowy lub którykolwiek ze składników wypełniacza",
      "izotretynoina (Izotek) – w trakcie leczenia",
      "przyjmowanie leków zwiększających ryzyko krwawienia, w szczególności ASA i NLPZ",
      "aktywne leczenie antybiotykiem lub trwająca infekcja",
      "stały wypełniacz w miejscu planowanego zabiegu (np. Aquamid)",
      "dysmorfofobia i nierealistyczne oczekiwania dotyczące efektu zabiegu",
      "skłonność do powstawania bliznowców – przeciwwskazanie względne/indywidualna kwalifikacja",
      "inne istotne choroby lub przyjmowane leki mogące mieć wpływ na bezpieczeństwo zabiegu",
    ],
    aftercare: [
      "Zachować szczególną higienę okolicy zabiegowej. Nie dotykać i nie malować ust przez minimum 24 godziny.",
      "Po zabiegu modelowania ust regularnie nawilżać usta zaleconym preparatem przez okres gojenia.",
      "Zmienić ręcznik do twarzy na czysty lub jednorazowy oraz poszewkę na poduszkę.",
      "Nie spożywać alkoholu przez minimum 24–48 godzin po zabiegu.",
      "Nie przyjmować bez konsultacji leków przeciwbólowych i przeciwzapalnych zwiększających ryzyko krwawienia (np. aspiryny, ibuprofenu).",
      "W dniu zabiegu unikać bardzo gorących i pikantnych potraw oraz napojów.",
      "Nie układać ust w „dziubek”, nie pocierać warg o siebie i nie zagryzać ich.",
      "Unikać sauny, solarium oraz intensywnego nagrzewania okolicy zabiegowej przez minimum 14 dni.",
      "Przez kilka dni po zabiegu unikać spania w pozycji powodującej ucisk na usta.",
      "Nie masować ani nie uciskać ust.",
    ],
    faqs: [
      {
        question: "Czy efekt wygląda naturalnie?",
        answer:
          "Tak. Zakres zabiegu dobieramy do anatomii twarzy i oczekiwań, dlatego możliwe jest zarówno subtelne podkreślenie kształtu, jak i większa korekta.",
      },
      {
        question: "Czy zabieg jest bolesny?",
        answer:
          "Odczucia są indywidualne. Przed zabiegiem omawiamy możliwe sposoby zwiększenia komfortu wizyty.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer:
          "Trwałość efektu zależy między innymi od użytego preparatu, stylu życia i indywidualnych cech organizmu.",
      },
    ],
    beforeAfter: {
      composite: {
        src: "/images/lips/powiekszanie ust.JPG",
        beforeAlt: "Usta przed modelowaniem kwasem hialuronowym.",
        afterAlt: "Usta po modelowaniu kwasem hialuronowym.",
      },
    },
  },
  {
    slug: "stymulatory-tkankowe",
    title: "Stymulatory tkankowe",
    shortDescription:
      "Zabieg wspierający poprawę jędrności, nawilżenia i jakości skóry twarzy, szyi lub dekoltu.",
    forWho: [
      "Zabieg może zainteresować osoby, które chcą zadbać o wygląd skóry, w tym jej nawilżenie, jędrność lub elastyczność.",
      "Dobór preparatu i obszaru pracy zależy od indywidualnych potrzeb skóry. Podczas konsultacji omawia się oczekiwania i kwalifikuje do zabiegu.",
    ],
    imageAlt: "Zdjęcie skóry związane z zabiegiem stymulatorów tkankowych.",
    secondaryImage: {
      src: "/images/IMG_5968.PNG",
      alt: "Efekt pielęgnacji skóry.",
    },
    duration: "około 30 minut",
    effectDuration: "zależna od preparatu i indywidualnych cech",
    recoveryTime: "kilka dni",
    sessionCount: "ustalana indywidualnie",
    price: "od 900 zł",
    description: [
      "Podczas konsultacji oceniamy potrzeby skóry i dobieramy preparat do obszaru zabiegowego oraz oczekiwanego efektu.",
      "Preparat podawany jest w wybrane partie skóry, gdzie wspiera jej naturalne procesy regeneracyjne. Szczegóły zabiegu i ewentualny plan serii omawiamy indywidualnie.",
      "Przy ustalaniu planu bierzemy pod uwagę kondycję skóry i obszar zabiegowy, aby dobrać rozwiązanie odpowiednie do indywidualnych potrzeb.",
    ],
    possibleReactions: [
      "W miejscu podania mogą wystąpić niewielkie zaczerwienienie, obrzęk lub tkliwość. Zazwyczaj są to przejściowe reakcje skóry.",
      "Mogą być widoczne drobne ślady po wkłuciach lub siniaki, które ustępują w trakcie gojenia.",
    ],
    preparation: [
      "Na kilka dni przed wizytą unikaj alkoholu i intensywnego opalania.",
      "Poinformuj osobę wykonującą zabieg o przyjmowanych lekach i alergiach.",
      "Przygotuj skórę bez intensywnych peelingów i drażniących kosmetyków.",
      "Przyjdź z oczyszczoną skórą w obszarze zabiegowym, bez makijażu.",
      "Zgłoś przed wizytą nowe zmiany skórne lub podrażnienie w planowanym obszarze.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywne infekcje, opryszczka lub stan zapalny skóry",
      "choroby autoimmunologiczne i zaburzenia krzepliwości krwi",
      "uczulenie na składniki preparatu",
      "przyjmowanie leków lub suplementów mogących wpływać na krzepliwość lub gojenie, wymagające indywidualnej kwalifikacji",
      "niewyjaśnione zmiany lub uszkodzenia skóry w obszarze zabiegowym",
    ],
    aftercare: [
      "Przez 24 godziny unikaj nakładania makijażu na obszar zabiegowy.",
      "Przez około dwa tygodnie unikaj sauny, solarium i intensywnego nagrzewania skóry.",
      "Stosuj delikatną pielęgnację i ochronę przeciwsłoneczną SPF 50.",
      "Przez pierwsze dni nie masuj obszaru zabiegowego ani nie wykonuj na nim dodatkowych zabiegów bez konsultacji.",
      "Jeśli reakcja jest silna, nasila się lub utrzymuje dłużej niż omówiono, skontaktuj się z gabinetem.",
    ],
    faqs: [
      {
        question: "Jak działa zabieg?",
        answer:
          "Zabieg dostarcza skórze składników aktywnych i wspiera jej naturalne procesy odnowy. Dokładny preparat dobieramy podczas konsultacji.",
      },
      {
        question: "Ile zabiegów warto wykonać?",
        answer:
          "Liczba wizyt zależy od kondycji skóry i założonego celu. Indywidualny plan omawiamy podczas konsultacji.",
      },
    ],
  },
  {
    slug: "makijaz-permanentny-brwi",
    title: "Makijaż permanentny brwi",
    shortDescription:
      "Delikatne podkreślenie kształtu i koloru brwi metodą Soft Ombre lub Foxy.",
    forWho: [
      "Makijaż permanentny może być odpowiedni dla osób, które chcą podkreślić kształt brwi i ograniczyć potrzebę codziennego rysowania ich makijażem.",
      "Wybraną technikę, kształt i intensywność efektu omawia się przed zabiegiem, dopasowując projekt do urody i oczekiwań.",
    ],
    imageAlt: "Zdjęcie brwi związane z makijażem permanentnym.",
    secondaryImage: {
      src: "/images/brwi%20perm/IMG_2057.jpg",
      alt: "Stylizacja brwi.",
    },
    duration: "około 2–3 godzin",
    effectDuration: "indywidualna",
    recoveryTime: "do wygojenia skóry",
    sessionCount: "1 + ewentualna dopigmentacja",
    price: "800 zł",
    description: [
      "Przed pigmentacją ustalamy kształt, kolor i technikę, dopasowując je do urody oraz oczekiwań. Projekt brwi omawiamy przed rozpoczęciem zabiegu.",
      "Pigment wprowadzany jest w skórę etapami. Po wygojeniu oceniamy efekt i, jeśli jest taka potrzeba, ustalamy termin dopigmentacji.",
      "Technika Soft Ombre lub Foxy pozwala zaplanować charakter brwi od delikatnego cieniowania po wyraźniej podkreślony kształt.",
    ],
    possibleReactions: [
      "Po zabiegu skóra może być zaczerwieniona i lekko obrzęknięta. Pigment bezpośrednio po pigmentacji może wydawać się intensywniejszy niż po wygojeniu.",
      "W trakcie gojenia może pojawić się suchość i delikatne złuszczanie naskórka. Nie należy odrywać łuszczącej się skóry.",
    ],
    preparation: [
      "Przyjdź bez świeżej opalenizny i podrażnienia skóry w okolicy brwi.",
      "Poinformuj o przyjmowanych lekach i wcześniejszych zabiegach w tym obszarze.",
      "Ostateczny kształt i kolor omówimy przed rozpoczęciem zabiegu.",
      "Możesz przygotować inspiracje pokazujące preferowany kształt lub intensywność efektu.",
      "Jeśli przed wizytą pojawi się podrażnienie lub uszkodzenie skóry przy brwiach, skontaktuj się z gabinetem.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywne stany zapalne lub infekcje skóry",
      "nieuregulowana cukrzyca i zaburzenia krzepliwości krwi",
      "terapia izotretynoiną lub świeże zabiegi w okolicy brwi",
      "przyjmowanie leków mogących wpływać na krzepliwość lub gojenie, wymagające indywidualnej kwalifikacji",
      "niewyjaśnione zmiany lub uszkodzenia skóry w obszarze pigmentacji",
    ],
    aftercare: [
      "Przez pierwsze dni utrzymuj okolicę zabiegową w czystości i nie pocieraj jej.",
      "Unikaj sauny, basenu, intensywnego wysiłku i opalania do czasu wygojenia.",
      "Dopigmentację wykonujemy po zakończeniu procesu gojenia, jeśli jest potrzebna.",
      "Nie nakładaj makijażu ani drażniących kosmetyków na pigmentowany obszar do czasu jego wygojenia.",
      "Jeśli reakcja jest silna, nasila się lub utrzymuje dłużej niż omówiono, skontaktuj się z gabinetem.",
    ],
    faqs: [
      {
        question: "Czy kształt brwi ustalamy przed zabiegiem?",
        answer:
          "Tak. Przed zabiegiem omawiamy oczekiwania i wykonujemy wstępny rysunek kształtu.",
      },
      {
        question: "Czy potrzebna jest dopigmentacja?",
        answer:
          "Dopigmentowanie oceniamy po wygojeniu skóry. Jest to indywidualna kwestia zależna od skóry i oczekiwanego efektu.",
      },
    ],
  },
  {
    slug: "makijaz-permanentny-ust",
    title: "Makijaż permanentny ust",
    shortDescription:
      "Subtelne podkreślenie koloru i konturu ust dla uporządkowanego, świeżego efektu.",
    forWho: [
      "To propozycja dla osób, które chcą delikatnie podkreślić naturalny kolor ust lub uporządkować ich kontur.",
      "Odcień i kształt dobiera się indywidualnie. Przed zabiegiem można omówić oczekiwania i wspólnie ustalić projekt pigmentacji.",
    ],
    imageAlt: "Zdjęcie ust związane z makijażem permanentnym.",
    secondaryImage: {
      src: "/images/lips_pmu/IMG_9028.JPG",
      alt: "Pigmentacja ust.",
    },
    duration: "około 2–3 godzin",
    effectDuration: "indywidualna",
    recoveryTime: "do wygojenia skóry",
    sessionCount: "1 + ewentualna dopigmentacja",
    price: "800 zł",
    description: [
      "Podczas konsultacji dobieramy kolor i kształt, uwzględniając naturalny odcień ust oraz oczekiwany efekt.",
      "Pigment wprowadzany jest w skórę ust, aby podkreślić ich kontur i kolor. Przed zabiegiem omawiamy proces gojenia oraz możliwość dopigmentacji.",
      "Przed rozpoczęciem potwierdzamy projekt i zakres pigmentacji, zwracając uwagę na naturalny kontur oraz to, jak wybrany odcień współgra z urodą.",
    ],
    possibleReactions: [
      "Po pigmentacji może wystąpić obrzęk, zaczerwienienie lub tkliwość ust. Zwykle są to przejściowe objawy związane z zabiegiem.",
      "Kolor początkowo może być intensywniejszy, a w trakcie gojenia mogą pojawić się suchość i delikatne złuszczanie. Przy skłonności do opryszczki poinformuj o tym przed wizytą.",
    ],
    preparation: [
      "Poinformuj o skłonności do opryszczki i wcześniejszych zabiegach ust.",
      "Unikaj podrażniania i intensywnego opalania ust przed wizytą.",
      "Zadbaj o dobre nawilżenie ust w dniach poprzedzających zabieg.",
      "Na wizytę przyjdź bez pomadki i innych kosmetyków kolorowych na ustach.",
      "Jeśli pojawią się objawy opryszczki lub infekcji, skontaktuj się z gabinetem przed wizytą.",
    ],
    contraindications: [
      "aktywna opryszczka lub stan zapalny ust",
      "ciąża i karmienie piersią",
      "uczulenie na składniki pigmentu",
      "zaburzenia krzepliwości krwi",
      "przyjmowanie leków wpływających na krzepliwość lub gojenie, wymagające indywidualnej kwalifikacji",
      "niewyjaśnione zmiany lub uszkodzenia w obrębie ust wymagające wcześniejszej oceny",
    ],
    aftercare: [
      "Nie pocieraj ust i zachowaj szczególną higienę podczas gojenia.",
      "Unikaj sauny, basenu, opalania i intensywnego wysiłku do czasu wygojenia.",
      "Stosuj pielęgnację zaleconą po zabiegu.",
      "Nie odrywaj złuszczającego się naskórka ani nie nakładaj na usta przypadkowych preparatów.",
      "Jeśli reakcja jest silna, nasila się lub utrzymuje dłużej niż omówiono, skontaktuj się z gabinetem.",
    ],
    faqs: [
      {
        question: "Czy kolor po wygojeniu będzie intensywny?",
        answer:
          "Kolor po wygojeniu jest zwykle delikatniejszy niż bezpośrednio po zabiegu. Jego intensywność dobieramy indywidualnie.",
      },
      {
        question: "Kiedy można wykonać dopigmentowanie?",
        answer:
          "Termin oceniamy po pełnym wygojeniu skóry, podczas kontroli pozabiegowej.",
      },
    ],
  },
  {
    slug: "mezoterapia-mikroiglowa",
    title: "Mezoterapia mikroigłowa",
    shortDescription:
      "Zabieg poprawiający wygląd i kondycję skóry twarzy, szyi oraz dekoltu.",
    forWho: [
      "Zabieg może zainteresować osoby, które chcą zadbać o wygląd i kondycję skóry twarzy, szyi lub dekoltu.",
      "Możliwość wykonania oraz zakres mikronakłuwania ustala się po ocenie skóry i rozmowie o oczekiwaniach podczas konsultacji.",
    ],
    imageAlt: "Zdjęcie związane z mezoterapią mikroigłową.",
    secondaryImage: {
      src: "/images/mezo/IMG_3750.JPG",
      alt: "Zabieg pielęgnacyjny skóry.",
    },
    duration: "około 60 minut",
    effectDuration: "indywidualna",
    recoveryTime: "kilka dni",
    sessionCount: "ustalana indywidualnie",
    price: "350–500 zł",
    description: [
      "Po ocenie skóry dobieramy obszar zabiegowy i pielęgnację do jej potrzeb oraz oczekiwanego efektu.",
      "Zabieg polega na kontrolowanym mikronakłuwaniu skóry, które pobudza jej naturalne procesy odnowy. Szczegółowy plan ustalamy podczas konsultacji.",
      "Intensywność pracy i zakres zabiegu ustalamy indywidualnie. Po wizycie omawiamy pielęgnację, która pomoże skórze spokojnie przejść okres regeneracji.",
    ],
    possibleReactions: [
      "Po zabiegu skóra może być zaczerwieniona, rozgrzana i lekko tkliwa. Reakcja zależy między innymi od indywidualnej wrażliwości skóry.",
      "W kolejnych dniach może pojawić się suchość lub delikatne złuszczanie. Objawy zwykle stopniowo ustępują.",
    ],
    preparation: [
      "Przyjdź z oczyszczoną skórą, bez intensywnego peelingu tuż przed wizytą.",
      "Poinformuj o aktywnych zmianach skórnych i przyjmowanych lekach.",
      "Na kilka dni przed wizytą nie wprowadzaj nowych, silnie działających kosmetyków.",
      "Przyjdź bez makijażu na obszarze, który będzie poddany zabiegowi.",
    ],
    contraindications: [
      "aktywne infekcje i stany zapalne skóry",
      "ciąża i karmienie piersią",
      "zaburzenia krzepliwości krwi",
      "terapia izotretynoiną",
      "inne kuracje dermatologiczne wpływające na wrażliwość lub gojenie skóry, wymagające konsultacji",
      "niewyjaśnione zmiany lub uszkodzenia skóry w obszarze zabiegowym",
    ],
    aftercare: [
      "Stosuj łagodną pielęgnację i ochronę SPF 50.",
      "Przez kilka dni unikaj sauny, basenu, intensywnego wysiłku i słońca.",
      "Nie wykonuj peelingów do czasu pełnego wyciszenia skóry.",
      "Do czasu wyciszenia skóry nie wprowadzaj nowych kosmetyków ani intensywnych składników aktywnych.",
      "Jeśli reakcja jest silna, nasila się lub utrzymuje dłużej niż omówiono, skontaktuj się z gabinetem.",
    ],
    faqs: [
      {
        question: "Czy skóra po zabiegu jest zaczerwieniona?",
        answer:
          "Przejściowe zaczerwienienie jest możliwe i zależy od indywidualnej reakcji skóry oraz intensywności zabiegu.",
      },
    ],
  },
  {
    slug: "rf-radiofrekwencja",
    title: "RF radiofrekwencja",
    shortDescription:
      "Zabieg wykorzystujący fale radiowe do pielęgnacji i poprawy napięcia skóry.",
    forWho: [
      "Radiofrekwencja może być rozważana przez osoby, które chcą zadbać o wygląd i napięcie skóry twarzy lub dekoltu.",
      "Obszar i parametry zabiegu dobiera się indywidualnie. Podczas konsultacji omawia się stan zdrowia, oczekiwania oraz możliwe przeciwwskazania.",
    ],
    imageAlt: "Zdjęcie związane z zabiegiem radiofrekwencji.",
    secondaryImage: {
      src: "/images/IMG_5966.PNG",
      alt: "Praca z zakresu kosmetologii.",
    },
    duration: "około 45–60 minut",
    effectDuration: "indywidualna",
    recoveryTime: "do ustąpienia zaczerwienienia",
    sessionCount: "ustalana indywidualnie",
    price: "450–600 zł",
    description: [
      "Przed zabiegiem dobieramy jego parametry i obszar pracy do potrzeb skóry oraz wskazań. Omawiamy również stan zdrowia i ewentualne przeciwwskazania.",
      "Podczas radiofrekwencji skóra jest podgrzewana za pomocą fal radiowych. W zależności od potrzeb zabieg można połączyć z ampułką pielęgnacyjną.",
      "Przebieg wizyty dopasowujemy do wybranego obszaru i bieżącego komfortu, a przed rozpoczęciem wyjaśniamy, jakich odczuć można się spodziewać.",
    ],
    possibleReactions: [
      "W trakcie zabiegu odczuwalne jest ciepło. Po wizycie może utrzymywać się przejściowe zaczerwienienie lub zwiększona wrażliwość skóry.",
      "U niektórych osób może wystąpić lekka tkliwość lub niewielki obrzęk, które stopniowo ustępują.",
    ],
    preparation: [
      "Przed wizytą poinformuj o implantach, urządzeniach medycznych i stanie zdrowia.",
      "Przyjdź z oczyszczoną skórą, bez intensywnych kosmetyków drażniących.",
      "Zdejmij biżuterię znajdującą się w obszarze zabiegowym.",
      "Zgłoś przed wizytą nowe podrażnienie lub uszkodzenie skóry w planowanym obszarze.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "rozrusznik serca lub elektroniczne implanty medyczne",
      "aktywne stany zapalne skóry",
      "choroby i stany wymagające indywidualnej kwalifikacji",
      "przyjmowanie leków lub suplementów wymagających oceny przed zabiegiem",
      "niewyjaśnione zmiany lub uszkodzenia skóry w obszarze zabiegowym",
    ],
    aftercare: [
      "Stosuj łagodną pielęgnację i nawadniaj skórę.",
      "Przez kilka dni unikaj intensywnego nagrzewania skóry.",
      "Do czasu ustąpienia zaczerwienienia unikaj dodatkowych zabiegów na tym samym obszarze.",
      "Jeśli reakcja jest silna, nasila się lub utrzymuje dłużej niż omówiono, skontaktuj się z gabinetem.",
    ],
    faqs: [
      {
        question: "Czy zabieg jest odczuwalny?",
        answer:
          "Odczucia zależą od ustawień urządzenia i indywidualnej wrażliwości. Zabieg powinien być komfortowy.",
      },
    ],
  },
  {
    slug: "laserowe-usuwanie-brwi",
    title: "Laserowe usuwanie brwi",
    shortDescription:
      "Zabieg dla osób, które chcą usunąć niepożądany pigment z obszaru brwi.",
    forWho: [
      "Zabieg może być rozważany przez osoby, które chcą usunąć lub rozjaśnić niepożądany pigment w obszarze brwi.",
      "Możliwość wykonania oraz przewidywany plan sesji ocenia się podczas konsultacji, po obejrzeniu pigmentu i kondycji skóry.",
    ],
    imageAlt: "Zdjęcie brwi związane z laserowym usuwaniem pigmentu.",
    secondaryImage: {
      src: "/images/brwi%20perm/IMG_3517.JPG",
      alt: "Detal stylizacji brwi.",
    },
    duration: "około 30 minut",
    effectDuration: "zależna od pigmentu i skóry",
    recoveryTime: "do ustąpienia zaczerwienienia",
    sessionCount: "seria ustalana indywidualnie",
    price: "200 zł za sesję",
    description: [
      "Podczas konsultacji oceniamy rodzaj i głębokość pigmentu oraz kondycję skóry. Na tej podstawie omawiamy możliwe efekty i orientacyjną liczbę sesji.",
      "Laser kierowany jest na pigment w obszarze brwi. Parametry i odstępy między sesjami dobieramy indywidualnie.",
      "Przed kolejną sesją ponownie oceniamy obszar zabiegowy i jego regenerację, a dalszy plan dostosowujemy do uzyskanej reakcji skóry.",
    ],
    possibleReactions: [
      "Bezpośrednio po zabiegu może wystąpić zaczerwienienie, obrzęk lub tkliwość skóry w obszarze działania lasera.",
      "Możliwe są drobne strupki lub czasowa zmiana wyglądu pigmentu. Obszar należy pielęgnować zgodnie z zaleceniami i chronić przed słońcem.",
    ],
    preparation: [
      "Nie opalaj obszaru zabiegowego przed wizytą.",
      "Poinformuj o lekach, chorobach skóry i wcześniejszych zabiegach.",
      "Przyjdź z oczyszczoną skórą, bez makijażu i kosmetyków na obszarze brwi.",
      "Zgłoś świeżą opaleniznę, podrażnienie lub nowe zmiany skórne przed rozpoczęciem zabiegu.",
    ],
    contraindications: [
      "świeża opalenizna i aktywny stan zapalny skóry",
      "ciąża i karmienie piersią",
      "skłonność do bliznowców",
      "choroby i leki wymagające indywidualnej kwalifikacji",
      "stosowanie leków lub preparatów zwiększających wrażliwość na światło, wymagające wcześniejszej konsultacji",
      "niewyjaśnione zmiany lub uszkodzenia skóry w obszarze zabiegowym",
    ],
    aftercare: [
      "Chroń obszar przed słońcem i stosuj ochronę SPF.",
      "Nie zdrapuj złuszczającej się skóry i stosuj zaleconą pielęgnację.",
      "Nie nakładaj drażniących kosmetyków na obszar zabiegowy do czasu jego wyciszenia.",
      "Jeśli reakcja jest silna, nasila się lub utrzymuje dłużej niż omówiono, skontaktuj się z gabinetem.",
    ],
    faqs: [
      {
        question: "Ile sesji będzie potrzebnych?",
        answer:
          "Liczba sesji zależy od rodzaju, głębokości i koloru pigmentu. Zostanie omówiona po konsultacji.",
      },
    ],
  },
  {
    slug: "peelingi",
    title: "Peelingi",
    shortDescription:
      "Pielęgnacja dopasowana do potrzeb skóry: peeling chemiczny lub węglowy.",
    forWho: [
      "Peeling może być odpowiedni dla osób, które chcą odświeżyć wygląd skóry i zadbać o jej gładkość.",
      "Rodzaj i intensywność zabiegu dobiera się do aktualnej kondycji skóry oraz oczekiwań, po wcześniejszej konsultacji.",
    ],
    imageAlt: "Zdjęcie skóry związane z zabiegiem peelingu.",
    secondaryImage: {
      src: "/images/IMG_5968.PNG",
      alt: "Efekt pielęgnacji skóry.",
    },
    duration: "około 45 minut",
    effectDuration: "indywidualna",
    recoveryTime: "do wyciszenia skóry",
    sessionCount: "ustalana indywidualnie",
    price: "300–350 zł",
    description: [
      "Rodzaj peelingu dobieramy po ocenie skóry i rozmowie o oczekiwanym efekcie. Uwzględniamy jej aktualną kondycję oraz stosowaną pielęgnację.",
      "Preparat nakładany jest na wybrany obszar zgodnie z dobraną metodą. Przed wizytą omawiamy przebieg zabiegu i dalszą pielęgnację.",
      "Celem konsultacji jest dobranie metody do aktualnych potrzeb skóry, a nie samej intensywności złuszczania. Zakres zabiegu i dalszą pielęgnację ustalamy indywidualnie.",
    ],
    possibleReactions: [
      "Po zabiegu może pojawić się zaczerwienienie, uczucie napięcia lub zwiększona wrażliwość skóry.",
      "W zależności od rodzaju peelingu możliwe jest także przesuszenie lub złuszczanie naskórka. Nasilenie reakcji jest indywidualne.",
    ],
    preparation: [
      "Na kilka dni przed zabiegiem unikaj intensywnych peelingów i opalania.",
      "Poinformuj o stosowanych kosmetykach i aktywnych zmianach skórnych.",
      "Przyjdź z oczyszczoną skórą, bez makijażu na obszarze zabiegowym.",
      "Przekaż informacje o stosowanych kuracjach dermatologicznych i nowych produktach pielęgnacyjnych.",
    ],
    contraindications: [
      "aktywne stany zapalne, infekcje lub podrażnienia skóry",
      "ciąża i karmienie piersią, zależnie od zastosowanego preparatu",
      "terapia izotretynoiną",
      "świeża opalenizna",
      "leki lub kuracje dermatologiczne mogące wpływać na wrażliwość skóry, wymagające indywidualnej kwalifikacji",
      "niewyjaśnione zmiany lub uszkodzenia skóry w obszarze zabiegowym",
    ],
    aftercare: [
      "Stosuj delikatną pielęgnację i codzienną ochronę SPF 50.",
      "Nie zdrapuj złuszczającej się skóry i unikaj dodatkowych peelingów.",
      "Przez kilka dni unikaj sauny i intensywnego nagrzewania skóry.",
      "Do czasu pełnego wyciszenia skóry nie wprowadzaj nowych ani silnie działających kosmetyków.",
      "Jeśli reakcja jest silna, nasila się lub utrzymuje dłużej niż omówiono, skontaktuj się z gabinetem.",
    ],
    faqs: [
      {
        question: "Jaki peeling będzie odpowiedni?",
        answer:
          "Rodzaj peelingu dobieramy podczas konsultacji do kondycji skóry i celu pielęgnacji.",
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
