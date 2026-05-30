import canFoto from '@/assets/wpl1/canFoto.png'
import cvProjectFoto from '@/assets/wpl1/cvCanFoto.PNG'
import gitTaakFoto from '@/assets/wpl1/gitTaak1Foto.PNG'
import logboekFoto from '@/assets/wpl1/logboekWPL.PNG'
import portfolioFoto from '@/assets/wpl1/portfolioCanFoto.PNG'
import scratchFoto from '@/assets/wpl1/scratchProjFoto.PNG'
import wordleFoto from '@/assets/wpl1/wordlePEFoto.PNG'

export const instagramUrl = 'https://www.instagram.com/canciftciii75/'

export const navItems = [
  { label: 'Inleiding', href: '#inleiding' },
  { label: 'Logboek', href: '#logboek' },
  {
    label: 'Ontwikkeling',
    children: [
      { label: 'Verklaring keuze', href: '#verklaring' },
      { label: 'Ontwerper', href: '#ontwerper' },
      { label: 'Programmeur', href: '#programmeur' },
      { label: 'Tester', href: '#tester' },
      { label: 'Comm. / teamspeler', href: '#teamspeler' },
      { label: 'IT-professional', href: '#itprof' },
    ],
  },
  { label: 'Opdrachten', href: '#opdrachten' },
  { label: 'Reflectie', href: '#reflectie' },
]

export const profile = {
  name: 'Can Ciftci',
  role: 'Student PXL-Digital',
  study: 'Graduaat Programmeren · 2PROC',
  location: 'Heusden-Zolder',
  email: 'can.c075@outlook.com',
  phone: '0486 56 18 06',
  birthdate: '16 december 2004',
  address: 'Schootstraat 103, Heusden-Zolder',
  image: canFoto,
  cvImage: canFoto,
}

export const portfolioIntro = {
  title: 'Inleiding',
  paragraphs: [
    'Hallo allemaal, op deze website laat ik zien wat ik heb geleerd en gemaakt tijdens mijn opleiding programmeren. Het is een overzicht van mijn werk, mijn vaardigheden en hoe ik mijzelf ontwikkel.',
    'Je kunt hier mijn CV bekijken, mijn planning volgen en lezen over de opdrachten en projecten die ik heb gedaan. Ook schrijf ik over wat ik al goed kan, wat ik nog wil leren, en hoe ik mezelf blijf verbeteren.',
    'Dit portfolio laat zien hoe ik groei als programmeur en waarom dit vak goed bij mij past.',
  ],
}

export const logbook = {
  title: 'Logboek',
  image: logboekFoto,
  alt: 'Logboek WPL1 planning',
}

export const developmentSections = [
  {
    id: 'verklaring',
    title: 'Verklaring keuze',
    blocks: [
      {
        subtitle: 'Waarom koos ik voor de opleiding programmeren?',
        paragraphs: [
          'Ik heb voor deze opleiding gekozen omdat ik een grote interesse heb in technologie en programmeren. Ik geloof dat programmeren een belangrijk onderdeel van de toekomst zal zijn. Ik heb al sinds klein een interesse gehad en vroeg me altijd al af hoe mensen websites maken, games ontwikkelen enz.',
        ],
      },
      {
        subtitle: 'Waarom denk ik dat dit beroep mij past?',
        paragraphs: [
          'Ik denk dat dit beroep goed bij mij past omdat ik het leuk en interessant vind. Ik werk ook graag in een team, wat belangrijk is als programmeur. Daarnaast ben ik flexibel en kan ik met iedereen goed opschieten. Dit zorgt ervoor dat we in een werkomgeving sneller en beter projecten kunnen afronden.',
        ],
      },
    ],
  },
  {
    id: 'ontwerper',
    title: 'Ontwerper',
    paragraphs: [
      'Ik leer nog steeds hoe ik softwareprojecten ontwerp. Ik begrijp de basis van het ontwerpen en ben bezig met het leren maken van goede keuzes voor ontwerp, programmeertaal en werkmethoden.',
      'Ik kan goed samenwerken omdat ik erg sociaal ben. Zo kan ik makkelijker wennen aan mijn team en zal de sfeer leuk en tegelijkertijd professioneel zijn. Ik kan ook al technische keuzes maken en een plan maken.',
      'Ik kan soms niet goed begrijpen wat een project nodig heeft en kan dit daardoor niet omzetten. Vorig jaar had ik hier moeite mee, maar ben verder aan het oefenen zodat ik die probleem later niet heb.',
    ],
  },
  {
    id: 'programmeur',
    title: 'Programmeur',
    paragraphs: [
      'Ik ben bezig met het schrijven van code en het ontwikkelen van software. Ik leer de verschillende tools en werkmethodes die gebruikt worden in softwareontwikkeling.',
      'Het begrijpen van code is helemaal geen probleem voor mij. Ik kan redelijk goed programmeren in verschillende talen en werk goed met eenvoudige gegevensstructuren en code.',
      'Het beheren van de digitale werkomgeving en het werken met grotere projecten is iets wat ik nog moet leren.',
    ],
  },
  {
    id: 'tester',
    title: 'Tester',
    paragraphs: [
      'Ik ben bezig met het leren testen van software en het controleren of alles goed werkt.',
      'Ik kan eenvoudige testen uitvoeren en de werking van de software controleren.',
      'Meestal kan ik de feedback van de testen niet begrijpen en kan ik niet verder gaan.',
    ],
  },
  {
    id: 'teamspeler',
    title: 'Communicator / teamspeler',
    paragraphs: [
      'Ik ben iemand die snel geïrriteerd geraakt, dus ben ik ermee bezig om ermee om te gaan zodat de sfeer binnen het team niet slecht word.',
      'Ik kan goed samenwerken in een team en werk met anderen om problemen op te lossen. Ik kan mijn werk goed uitleggen en documenteren. Ik kan ook meerdere talen spreken zoals: Nederlands, Turks en Engels.',
      'Ik raak te snel geïrriteerd en word snel boos. Hier moet ik zeker aan werken.',
    ],
  },
  {
    id: 'itprof',
    title: 'Levenslange lerende IT-professional',
    paragraphs: [
      'Ik weet dat de IT-wereld altijd verandert en ik probeer nieuwe technologieën en ontwikkelingen te volgen.',
      'Ik ken de regels rond veiligheid en privacy in IT, en hoe ik deze moet toepassen in mijn werk.',
      'Ik moet meer zoeken naar nieuwe dingen om te leren in IT. Ik kan mijn werk niet zo goed beoordelen en verbeteren.',
    ],
  },
]

export const assignments = [
  {
    title: 'Scratch-project',
    paragraphs: [
      'Begin van het academiejaar moesten we een scratchproject maken waar de bal de grond niet mocht raken. Je had een paddle waar je ervoor moest zorgen dat de bal in de lucht bleef. Het werd steeds moeilijker. Hoe langer je de bal in de lucht blijft houden hoe moeilijker het spel wordt.',
      'Voor mij persoonlijk waren er geen uitdagingen, want ik had al ervaring met programmeren. Ik begreep wat de knoppen deden dus was het gewoon bij elkaar puzzelen.',
    ],
    image: scratchFoto,
    alt: 'Screenshot Scratch-project',
  },
  {
    title: 'Filmrepository (Git-taak 1)',
    paragraphs: [
      'Na het scratchproject moesten we een taak maken op Visual Studio. We moesten een "database" maken met daarin films die PXL-Digital aan te bieden heeft. Dit was weer niet echt een uitdaging voor mij, maar ik had per ongeluk een private repository gemaakt. Voor de rest was het vrij makkelijk en ging het vlot.',
    ],
    image: gitTaakFoto,
    alt: 'Screenshot filmrepository Visual Studio',
  },
  {
    title: 'CV-website (Git-taak 2)',
    paragraphs: [
      'Voor de 2de git taak moesten we een CV (Curriculum Vitae) maken. Dit was een web taak dat enkel gecodeerd is met HTML/CSS. Dit was een leuke ervaring omdat ik ervan hou om een website te maken. Je hebt er volledig controle over. Dat is wat programmeren moet zijn, volledige controle en je eigen creativiteit tot leven brengen.',
      'Het enige waar ik moeite mee had was de teksten schrijven, want ik ben daar niet zo goed in.',
    ],
    image: cvProjectFoto,
    alt: 'Screenshot CV-website',
  },
  {
    title: 'Wordle-project',
    paragraphs: [
      'Vervolgens moesten we beginnen aan het project. Er werd enkel gewerkt in Visual Studio. We moesten de game "Wordle" maken. Dit was erg uitdagend voor mij omdat ik niet de beste ben in C#. Ik heb af en toe moeten zoeken hoe ik een fout kon oplossen. Dat is goed voor mij, want later zal ik ook zulke problemen hebben en kan ik makkelijker vinden wat ik zoek want dan weet ik wel hoe ik moet opzoeken.',
    ],
    image: wordleFoto,
    alt: 'Screenshot Wordle-project',
  },
  {
    title: 'Portfolio WPL1',
    paragraphs: [
      'Tenslotte ben ik bezig om mijn portfolio af te maken. Dit is de laatste opdracht voor WPL1. Dit was erg fijn om te maken. Voor HTML/CSS heb ik ook niet echt moeilijkheden omdat het vrij duidelijk en logisch is. Dus had niet echt persoonlijke uitdagingen buiten het veel typen.',
    ],
    image: portfolioFoto,
    alt: 'Screenshot portfolio WPL1',
  },
]

export const reflections = [
  {
    title: 'Reflectie over het Wordle-project (AIM-methode)',
    blocks: [
      {
        label: 'Agile',
        text: 'Bij het maken van het Wordle-project in Visual Studio moest ik vaak mijn code aanpassen. Soms werkte iets niet zoals gepland, dus probeerde ik verschillende oplossingen totdat het wel werkte. Dit hielp me om stap voor stap beter te worden.',
      },
      {
        label: 'Insight',
        text: 'Ik merkte dat ik meer moet oefenen met C#, omdat ik het soms lastig vond. Het zoeken naar oplossingen en het lezen van uitleg online hielp me veel. Ik heb geleerd hoe ik beter kan omgaan met problemen en sneller antwoorden kan vinden.',
      },
      {
        label: 'Mentor',
        text: 'Ik heb veel geleerd van tutorials en forums waar ervaren programmeurs tips gaven. Dit liet me zien hoe belangrijk het is om hulp te vragen of te leren van mensen die meer ervaring hebben. Later wil ik ook anderen helpen, zoals ik nu geholpen ben.',
      },
    ],
  },
  {
    title: 'POP-sessie: motivatie',
    paragraphs: [
      'Tijdens de POP-sessie over motivatie heb ik geleerd hoe ik mijn doelen duidelijker kan maken en hoe ik gemotiveerd kan blijven, zelfs als iets moeilijk is. Ik vond het belangrijk om te horen dat kleine successen vieren kan helpen om gemotiveerd te blijven.',
      'Ik wil mezelf gemotiveerd houden door grote taken op te splitsen in kleine, haalbare stappen. Zo kan ik beter zien dat ik vooruitgang maak. Ook wil ik mezelf blijven belonen voor alles wat ik afmaak, hoe klein het ook is.',
    ],
  },
  {
    title: 'Mijn X-factor',
    paragraphs: [
      'Mijn X-factor is mijn creativiteit en het oplossen van problemen. Ik ben goed in het bedenken van ideeën die anders zijn en werken. Bij de CV-taak in HTML/CSS heb ik bijvoorbeeld mijn creativiteit gebruikt om een mooie en duidelijke website te maken.',
      'In mijn opleiding gebruik ik mijn creativiteit om software en websites te ontwerpen. Ik bedenk originele ideeën en pas die toe in projecten, zoals mijn portfolio of het "Wordle"-spel. Mijn probleemoplossende skills helpen me om fouten in mijn code te vinden en op te lossen, en om betere manieren te bedenken om dingen te maken.',
      'Ik kan mijn X-factor sterker maken door nieuwe programmeertalen en technieken te leren, zoals JavaScript of tools zoals React. Ook wil ik meer oefenen met moeilijke projecten om mijn creativiteit en probleemoplossend vermogen verder te verbeteren. Samenwerken met anderen is ook belangrijk, want daardoor kan ik nieuwe ideeën leren en mezelf nog beter maken.',
    ],
  },
]

export const cvContent = {
  intro: `Hallo, mijn naam is Can Ciftci en ik ben 20 jaar oud. Ik studeer graduaat in het Programmeren aan PXL. Ik heb voor deze opleiding gekozen omdat ik een grote interesse heb in technologie en programmeren. Ik geloof dat programmeren een belangrijk onderdeel van de toekomst zal zijn. Ik heb al sinds klein een interesse gehad en vroeg me altijd al af hoe mensen websites maken, games ontwikkelen enz. Ik denk dat dit beroep goed bij mij past omdat ik het leuk en interessant vind. Ik werk ook graag in een team, wat belangrijk is als programmeur. Daarnaast ben ik flexibel en kan ik met iedereen goed opschieten. Dit zorgt ervoor dat we in een werkomgeving sneller en beter projecten kunnen afronden.`,
  diplomas: [
    {
      period: '2015 – 2022',
      school: 'Sint-Franciscuscollege',
      title: 'Secundair onderwijs',
      field: 'Informaticabeheer',
    },
    {
      period: '2024 – heden',
      school: 'PXL',
      title: 'Graduaat in het Programmeren',
      field: 'Hogeschool PXL-Digital',
    },
  ],
  work: [
    {
      role: 'Stagiair programmeur',
      company: 'Menute.be',
      period: 'Februari 2022 – Mei 2022',
      description: [
        'Ontwikkelen en onderhouden van webapplicaties, testen van nieuwe functies en bijdragen aan de optimalisatie van bestaande systemen.',
        'Actief samenwerken met een team van programmeurs om projecten efficiënt af te ronden.',
      ],
    },
    {
      role: 'Medewerker magazijn',
      company: 'Nike Wings',
      period: 'Juli 2022 – Augustus 2022',
      description: [
        'Verantwoordelijk voor het sorteren, inpakken en verzenden van producten.',
        'Helpen bij voorraadbeheer en zorgen voor een georganiseerde werkomgeving in het magazijn.',
      ],
    },
  ],
  techSkills: ['HTML/CSS', 'C#', 'Basis Python', 'SQL'],
  softSkills: ['Teamspeler', 'Vriendelijk', 'Leergierig', 'Flexibel'],
  languages: [
    { name: 'Turks', stars: 5 },
    { name: 'Nederlands', stars: 4 },
    { name: 'Engels', stars: 4 },
    { name: 'Frans', stars: 2 },
  ],
  hobbies: ['Voetballen', 'Gamen']
}
