export const images = {
  cover:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  portrait: '/images/jawad-portrait.png?v=2',
  sportsComplex: [
    '/images/projects/sports-complex/fda1.png',
    '/images/projects/sports-complex/fda2.png',
    '/images/projects/sports-complex/fda3.png',
    '/images/projects/sports-complex/fda4.png',
    '/images/projects/sports-complex/fda5.png',
    '/images/projects/sports-complex/fda6.png',
  ],
  chiniotWelfare: [
    '/images/projects/chiniot-welfare/chinniot1.png',
    '/images/projects/chiniot-welfare/chinniot2.png',
    '/images/projects/chiniot-welfare/chinniot3.png',
    '/images/projects/chiniot-welfare/chinniot4.png',
  ],
  abdullahpur: [
    '/images/projects/abdullahpur/abdfly1.png',
    '/images/projects/abdullahpur/abdfly2.png',
    '/images/projects/abdullahpur/abdfly3.png',
  ],
  survey:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
  hardhat:
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
}

// Verbatim from CV "Career Overview" section
export const careerOverview =
  'Seeking challenging assignments in the Civil Engineering Construction Industry with an organization of repute, and to utilize hands-on site experience for the successful completion of assigned projects.'

// From CV "Additional Skills" section
export const coreExpertise = [
  'Site Supervision & Inspection',
  'Quality Control & Concrete Testing',
  'Road Testing & Compaction Works',
  'Reinforcement & Formwork Checks',
  'Utilities Installation Supervision',
  'Contractor & Safety Monitoring',
  'Daily Progress Reporting',
  'AutoCAD (Basic) & MS Office',
]

// From CV "Major Projects" — most recent first
export const timeline = [
  {
    years: 'March 2021 – Present',
    title: 'Civil Engineer',
    company: 'Self Employed ',
  },
  {
    years: '16 Nov 2016 – March 2021',
    title: 'Client Engineer',
    company: 'Chiniot Welfare Complex, Jhang Road, Chiniot',
  },
  {
    years: '5 Feb 2015 – 15 Nov 2016',
    title: 'Site Engineer',
    company: 'Alam Khan Brothers (Engineering & Construction Pvt. Ltd.)',
  },
  {
    years: '28 March 2014 – February 2015',
    title: 'Trainee Engineer',
    company: 'Rasco Builders & Developers',
  },
]

// Grounded directly in the "Key Responsibilities" bullets across all four CV roles
export const competencies = [
  'Site Supervision',
  'Material Verification & Delivery',
  'Concrete Testing (Slump/Temp/Lab)',
  'Road Testing & Compaction',
  'Embankment & Stone Pitching',
  'Reinforcement & Formwork Inspection',
  'Sewerage & Water Supply Works',
  'Electrical Duct Installation',
  'Contractor & Safety Monitoring',
  'Daily Progress Reporting',
  'Client & Management Coordination',
  'AutoCAD & MS Office',
]

export type Project = {
  id: string
  number: string
  name: string
  image: string
  employer?: string
  client?: string
  duration?: string
  role: string
  scope?: string[]
}

export const projects: Project[] = [
  {
    id: 'sports-complex',
    number: '05',
    name: 'FDA SPORTS COMPLEX, FAISALABAD & LDA SPORTS COMPLEX, LAHORE',
    image: images.sportsComplex[0],
    employer: 'Alam Khan Brothers (Engineering & Construction Pvt. Ltd.)',
    duration: 'March 2021 – Present',
    role: 'Site Engineer',
    scope: [
      'FDA Sports Complex – Faisalabad',
      'LDA Sports Complex – Shahdara, Lahore',
    ],
  },
  {
    id: 'chiniot',
    number: '07',
    name: 'CHINIOT WELFARE COMPLEX, JHANG ROAD, CHINIOT',
    image: images.chiniotWelfare[0],
    duration: '16 November 2016 – March 2021',
    role: 'Client Engineer',
    scope: [
      'LRBT Eye Hospital',
      'Sadaqat Model School & Rasheeda Aslam Higher Secondary School',
      'External Works — Roads & Landscaping',
      'Boundary Wall, Mosque & Guard Room',
    ],
  },
  {
    id: 'abdullahpur',
    number: '09',
    name: 'ABDULLAHPUR FLYOVER',
    image: images.abdullahpur[0],
    client: 'Government / Infrastructure Authority',
    role: 'Site / Project Engineer',
  },
]

// From CV "Additional Skills" section — only AutoCAD carries a stated level
export const technicalSkills = [
  { name: 'AutoCAD', level: 'Basic' },
  { name: 'MS Office' },
  { name: 'All Types of Level Instrument' },
]

// From CV "Qualification" section
export const qualification = {
  degree: '3-Year Diploma of Associate Engineering (Civil)',
  institute: 'Government Technical Training & Trade Centre (GTTTC), Faisalabad',
  board: 'Punjab Board of Technical Education, Lahore',
  years: '1994 – 1997',
}

export const contact = {
  phone: '0300-6627912',
  email: 'jawadahmad100100@gmail.com',
  location: 'Faisalabad, Punjab, Pakistan',
}
