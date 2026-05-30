import wpl2PdfUrl from '@/assets/wpl2/Opdracht_eindreflectie_WPL2_Ciftci_Can.pdf?url'

export const wpl2NavItems = [
  { label: 'Inleiding', href: '#inleiding' },
  { label: 'Case', href: '#case' },
  { label: 'Mijn aandeel', href: '#aandeel' },
  { label: 'Eindreflectie', href: '#eindreflectie' },
]

export const wpl2Document = {
  title: 'Eindreflectie',
  description:
    'Hier kun je mijn eindreflectie downloaden.',
  href: wpl2PdfUrl,
  fileName: 'Opdracht_eindreflectie_WPL2_Ciftci_Can.pdf',
  buttonLabel: 'PDF downloaden',
}

export const wpl2Intro = {
  title: 'Inleiding',
  paragraphs: [
    'In WPL2 werk ik aan de ClockWise-case voor Monocode. Hieronder licht ik eerst de case toe en daarna mijn eigen aandeel binnen het programmeerteam.',
  ],
}

export const clockWiseCase = {
  title: 'De case',
  paragraphs: [
    'Vanaf 1 januari 2027 wordt tijdsregistratie verplicht voor alle bedrijven in België. Werkgevers zullen de werkuren en pauzes van hun medewerkers digitaal moeten registreren en deze gegevens vijf jaar moeten bewaren. Vooral voor KMO’s zorgt deze nieuwe regel voor vragen en bezorgdheden. Veel bedrijven denken meteen aan extra administratie, hoge kosten en het gevoel van een ouderwetse prikklok.',
    'Voor deze case werken we een concept uit voor Monocode onder de naam ClockWise. We bouwen geen echte software, maar focussen op het merk, de marketing en hoe de app eruit zou kunnen zien. Het doel is om een oplossing voor te stellen die eenvoudig, modern en gebruiksvriendelijk aanvoelt.',
    'Binnen deze case werken we eerst aan de branding en positionering van ClockWise. We willen laten zien dat tijdsregistratie niet ingewikkeld of controlerend hoeft te zijn, maar net een hulpmiddel kan zijn voor bedrijven en medewerkers. Daarnaast maken we een website met een landingspagina die duidelijk uitlegt wat ClockWise is en waarom het interessant is voor Belgische KMO’s. Ten slotte ontwerpen we een UI-concept waarmee we tonen hoe de app zou kunnen werken en eruitzien.',
    'De doelgroep bestaat uit Belgische KMO’s die op zoek zijn naar een eenvoudige manier om zich voor te bereiden op de nieuwe wetgeving. Met ClockWise willen we een sterk en betrouwbaar merk neerzetten dat bedrijven helpt om tijdsregistratie makkelijk en zonder zorgen aan te pakken.',
  ],
}

export const myContributions = {
  title: 'Mijn aandeel',
  paragraphs: [
    'Ik maakte deel uit van het programmeerteam. Mijn taak was om verschillende onderdelen van de applicatie te bouwen, zowel in de frontend als in de backend.',
    'Ik heb de dashboards gemaakt voor de superadmin, admin en gewone gebruikers. Zo heeft elke rol zijn eigen overzicht met de juiste functies en info. Ik heb er ook voor gezorgd dat de layout goed en responsief is, zodat alles goed werkt op computer, tablet en gsm.',
    'Daarnaast heb ik een settingspagina gemaakt waar gebruikers hun instellingen kunnen aanpassen. Ook heb ik een functie gebouwd waarmee gebruikers hun profiel kunnen updaten en hun gegevens kunnen wijzigen wanneer dat nodig is.',
    'Voor het beheer heb ik het gebruikersbeheer voor de superadmin gemaakt en het medewerkersbeheer voor de admin. Zo kunnen zij eenvoudig mensen toevoegen, aanpassen of verwijderen.',
    'Tot slot heb ik ook API’s gemaakt. Die zorgen ervoor dat de frontend en backend goed met elkaar communiceren en dat alle gegevens correct worden opgeslagen en opgehaald. Zonder die API’s zou de applicatie niet goed werken.',
    'Op die manier heb ik mee geholpen aan het bouwen van een werkende en overzichtelijke applicatie die makkelijk te gebruiken is voor alle gebruikers.',
  ],
}
