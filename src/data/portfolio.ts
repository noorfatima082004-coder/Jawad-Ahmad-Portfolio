export const images = {
  cover:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  portrait: '/images/jawad-portrait.png?v=2',
  chiniot: [
    '/images/projects/chiniot/fda1.png',
    '/images/projects/chiniot/fda2.png',
    '/images/projects/chiniot/fda3.png',
    '/images/projects/chiniot/fda4.png',
    '/images/projects/chiniot/fda5.png',
    '/images/projects/chiniot/fda6.png',
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
  cert1:
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80',
  cert2:
    'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80',
}

export const aboutStats = [
  { value: '20+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '15+', label: 'Cities Worked' },
  { value: '50+', label: 'Major Clients' },
]

export const coreExpertise = [
  'Site Supervision & Execution',
  'Project Planning & Scheduling',
  'QA/QC & Material Testing',
  'Quantity Surveying & BOQ',
  'Road & Infrastructure Works',
  'Concrete & Structural Works',
  'Client & Consultant Coordination',
  'HSE Compliance & Safety',
]

export const timeline = [
  {
    years: '2018 – Present',
    title: 'Senior Site Engineer',
    company: 'Chiniot Welfare Complex & Public Projects — Chiniot',
  },
  {
    years: '2014 – 2018',
    title: 'Project Engineer',
    company: 'Abdullahpur Flyover & Infrastructure — Multiple Cities',
  },
  {
    years: '2010 – 2014',
    title: 'Site Engineer',
    company: 'Institutional & Civic Projects — Faisalabad',
  },
  {
    years: '2006 – 2010',
    title: 'Assistant Site Engineer',
    company: 'Roads, Landscaping & Infrastructure — Multiple Cities',
  },
  {
    years: '2003 – 2006',
    title: 'Junior Site Engineer',
    company: 'Residential & Commercial Construction — Punjab',
  },
]

export const competencies = [
  'Site Supervision',
  'Project Management',
  'QA / QC',
  'Road Works',
  'Concrete Works',
  'Steel Works',
  'Quantity Survey',
  'AutoCAD',
  'Surveying',
  'HSE / Safety',
  'Client Relations',
  'Documentation',
]

export type Project = {
  id: string
  number: string
  name: string
  image: string
  client: string
  duration: string
  role: string
  stats: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'chiniot',
    number: '01',
    name: 'CHINIOT WELFARE COMPLEX, JHANG ROAD, CHINIOT',
    image: '/images/projects/chiniot/fda1.png',
    client: 'Government / Welfare Authority',
    duration: '2018 – 2020',
    role: 'Senior Site Engineer',
    stats: [
      { label: 'AREA', value: '25 Acres' },
      { label: 'COST', value: 'PKR 450 Million' },
      { label: 'TEAM SIZE', value: '45 Members' },
    ],
  },
  {
    id: 'abdullahpur',
    number: '02',
    name: 'ABDULLAHPUR FLYOVER',
    image: '/images/projects/abdullahpur/abdfly1.png',
    client: 'Government / Infrastructure Authority',
    duration: '2016 – 2018',
    role: 'Site / Project Engineer',
    stats: [
      { label: 'LENGTH', value: 'Multi-Span' },
      { label: 'COST', value: 'PKR 500+ Million' },
      { label: 'TEAM SIZE', value: '40+ Members' },
    ],
  },
]

export const technicalSkills = [
  { name: 'Construction Equipment', level: 'EXPERT' },
  { name: 'Level Instruments / Total Station', level: 'EXPERT' },
  { name: 'AutoCAD', level: 'EXPERT' },
  { name: 'MS Office / MS Project', level: 'ADVANCED' },
  { name: 'Quantity Take-off & BOQ', level: 'EXPERT' },
  { name: 'Quality Control & Testing', level: 'EXPERT' },
  { name: 'Site Surveying & Setting Out', level: 'EXPERT' },
  { name: 'HSE & Safety Management', level: 'ADVANCED' },
]

export const certifications = [
  'Site Engineering Diploma',
  'AutoCAD Professional Certification',
  'Occupational Health & Safety Training',
  'Concrete Technology Workshop',
]

export const achievements = [
  '150+ Successful Projects Delivered',
  'Zero Major Safety Incidents on Led Sites',
  'On-time Delivery Across Multi-year Contracts',
  'Recognized for Quality & Client Satisfaction',
]

export const memberships = [
  'Pakistan Engineering Council (PEC)',
  'Institution of Engineers Pakistan',
  'Construction Industry Professionals Network',
]

export const contact = {
  phone: '0300-6627912',
  email: 'jawadahmad100100@gmail.com',
  location: 'Faisalabad, Punjab, Pakistan',
}
