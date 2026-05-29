import canFoto from '@/assets/wpl1/canFoto.png'
import cvFoto from '@/assets/wpl1/cvCanFoto.PNG'
import gitFoto from '@/assets/wpl1/gitTaak1Foto.PNG'
import portfolioFoto from '@/assets/wpl1/portfolioCanFoto.PNG'
import scratchFoto from '@/assets/wpl1/scratchProjFoto.PNG'
import wordleFoto from '@/assets/wpl1/wordlePEFoto.PNG'

export const navItems = [
  { label: 'Start', href: '#home' },
  { label: 'Over mij', href: '#about' },
  { label: 'Projecten', href: '#projects' },
  { label: 'Ervaring', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Can Ciftci',
  role: 'Junior ontwikkelaar in opleiding',
  location: 'Heusden-Zolder, Belgie',
  email: 'can.c075@outlook.com',
  phone: '0486 56 18 06',
  image: canFoto,
  headline: 'Ik bouw verfijnde digitale ervaringen met structuur, rust en ambitie.',
  intro:
    'Ik ben een student Graduaat Programmeren aan PXL-Digital met focus op webontwikkeling, C# en sterke visuele interfaces. Dit portfolio toont mijn groei, mijn projecten en mijn professionele richting.',
}

export const stats = [
  { value: 'WPL1', label: 'Portfoliotraject' },
  { value: '5+', label: 'Projecten uitgewerkt' },
  { value: '2024', label: 'Start PXL' },
]

export const about = {
  eyebrow: 'Over mij',
  title: 'Een ontwikkelaarsprofiel met aandacht voor detail, rust en bruikbaarheid.',
  text:
    'Mijn focus ligt op websites en applicaties die logisch aanvoelen, visueel sterk zijn en technisch netjes opgebouwd worden. Ik leer graag door projecten te bouwen, feedback te verwerken en telkens bewuster keuzes te maken.',
  highlights: [
    'Sterke interesse in interfaceontwerp en webinterfaces',
    'Ervaring met HTML, CSS, JavaScript, C# en SQL',
    'Gericht op groeien in structuur, testen en professionele communicatie',
  ],
}

export const skills = [
  { name: 'Vue.js', type: 'Webinterface', mark: 'Vue' },
  { name: 'JavaScript', type: 'Logica', mark: 'JS' },
  { name: 'CSS', type: 'Interface', mark: 'CSS' },
  { name: 'HTML', type: 'Structuur', mark: 'HTML' },
  { name: 'C#', type: 'Programmeren', mark: 'C#' },
  { name: 'SQL', type: 'Gegevens', mark: 'SQL' },
]

export const projects = [
  {
    title: 'Wordle applicatie',
    category: 'C# / Probleemoplossend denken',
    image: wordleFoto,
    text:
      'Een Wordle-project waarin ik foutmeldingen analyseerde, logica opbouwde en stap voor stap sterker werd in C# en gestructureerd programmeren.',
    tags: ['C#', 'Logica', 'Debuggen'],
  },
  {
    title: 'CV website',
    category: 'HTML / CSS',
    image: cvFoto,
    text:
      'Een persoonlijke CV-website waarin structuur, typografie, navigatie en visuele presentatie werden samengebracht in een duidelijke webpagina.',
    tags: ['HTML', 'CSS', 'Opmaak'],
  },
  {
    title: 'Filmrepository',
    category: 'Git / Visual Studio',
    image: gitFoto,
    text:
      'Een technische opdracht rond projectbeheer, repositories en het opbouwen van een eenvoudige gegevensstructuur in Visual Studio.',
    tags: ['Git', 'Visual Studio', 'Gegevens'],
  },
  {
    title: 'Scratch game',
    category: 'Creatief programmeren',
    image: scratchFoto,
    text:
      'Een interactieve game-oefening waarin basislogica, spelregels en gebruikersinteractie op een toegankelijke manier werden toegepast.',
    tags: ['Spelregels', 'Interactie', 'Leren'],
  },
]

export const timeline = [
  {
    year: '2015 - 2022',
    title: 'Informaticabeheer',
    text: 'Secundair onderwijs aan het Sint-Franciscuscollege, met een eerste stevige basis in IT en digitale systemen.',
  },
  {
    year: '2022',
    title: 'Stage bij Menute.be',
    text: 'Praktijkervaring als stagiair programmeur met onderhoud, testen en optimaliseren van webapplicaties.',
  },
  {
    year: '2024 - heden',
    title: 'Graduaat Programmeren',
    text: 'Opleiding aan PXL-Digital met focus op softwareontwikkeling, webtechnologie, C# en professioneel projectwerk.',
  },
  {
    year: 'WPL1',
    title: 'Portfolio en reflectie',
    text: 'Projecten, leerpunten en reflecties samengebracht in een professionele portfolio-ervaring.',
  },
]
