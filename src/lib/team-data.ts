// src/lib/team-data.ts
// Created: Team members data for about page

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Ahmad Rizki',
    role: 'Founder & CEO',
    department: 'Leadership',
    bio: 'Ahmad mendirikan Algan Studio dengan visi membantu bisnis Indonesia berkembang di era digital. Dengan pengalaman 15+ tahun di industri teknologi dan marketing.',
    image: '/images/team/ahmad.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/ahmadrizki',
      twitter: 'https://twitter.com/ahmadrizki',
    },
  },
  {
    id: 'coo',
    name: 'Dewi Lestari',
    role: 'Chief Operating Officer',
    department: 'Leadership',
    bio: 'Dewi memastikan operasional Algan Studio berjalan lancar. Background-nya di management consulting membawa struktur dan efisiensi ke tim.',
    image: '/images/team/dewi.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/dewilestari',
    },
  },
  {
    id: 'head-marketing',
    name: 'Sarah Wijaya',
    role: 'Head of Digital Marketing',
    department: 'Marketing',
    bio: 'Sarah memimpin tim digital marketing dengan expertise di performance marketing, SEO, dan growth strategies. 10+ tahun pengalaman di industri.',
    image: '/images/team/sarah.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarahwijaya',
    },
  },
  {
    id: 'lead-dev',
    name: 'Budi Santoso',
    role: 'Lead Developer',
    department: 'Engineering',
    bio: 'Budi memimpin tim development dengan fokus pada web dan mobile apps. Passionate tentang clean code dan best practices.',
    image: '/images/team/budi.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/budisantoso',
      twitter: 'https://twitter.com/budisantoso',
    },
  },
  {
    id: 'creative-director',
    name: 'Maya Putri',
    role: 'Creative Director',
    department: 'Design',
    bio: 'Maya mengawasi semua output kreatif Algan Studio. Background-nya di branding dan visual design membawa perspektif unik ke setiap project.',
    image: '/images/team/maya.jpg',
    social: {
      instagram: 'https://instagram.com/mayaputri',
    },
  },
  {
    id: 'senior-seo',
    name: 'Andi Pratama',
    role: 'Senior SEO Specialist',
    department: 'Marketing',
    bio: 'Andi adalah SEO expert dengan track record meningkatkan organic traffic untuk berbagai industry. Certified Google Analytics dan Search Console.',
    image: '/images/team/andi.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/andipratama',
    },
  },
  {
    id: 'senior-dev',
    name: 'Rina Kusuma',
    role: 'Senior Full-Stack Developer',
    department: 'Engineering',
    bio: 'Rina adalah full-stack developer dengan expertise di React, Node.js, dan cloud infrastructure. Passionate tentang building scalable applications.',
    image: '/images/team/rina.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/rinakusuma',
      twitter: 'https://twitter.com/rinakusuma',
    },
  },
  {
    id: 'ui-designer',
    name: 'Fajar Hidayat',
    role: 'UI/UX Designer',
    department: 'Design',
    bio: 'Fajar creates user-centered designs that are both beautiful and functional. Specialized in mobile app and web interface design.',
    image: '/images/team/fajar.jpg',
    social: {
      instagram: 'https://instagram.com/fajarhidayat',
    },
  },
  {
    id: 'ads-specialist',
    name: 'Siti Nurhaliza',
    role: 'Paid Ads Specialist',
    department: 'Marketing',
    bio: 'Siti manages paid advertising campaigns across Google, Meta, and TikTok. Expert di optimizing ROAS dan scaling ad spend.',
    image: '/images/team/siti.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sitinurhaliza',
    },
  },
  {
    id: 'content-lead',
    name: 'Reza Firmansyah',
    role: 'Content Lead',
    department: 'Marketing',
    bio: 'Reza leads content strategy dan creation. Background di journalism membawa storytelling skills ke setiap piece of content.',
    image: '/images/team/reza.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/rezafirmansyah',
      twitter: 'https://twitter.com/rezafirmansyah',
    },
  },
  {
    id: 'flutter-dev',
    name: 'Yoga Permana',
    role: 'Mobile Developer',
    department: 'Engineering',
    bio: 'Yoga specializes in Flutter development, building beautiful cross-platform mobile apps. Also experienced dengan native iOS dan Android.',
    image: '/images/team/yoga.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/yogapermana',
    },
  },
  {
    id: 'project-manager',
    name: 'Indah Sari',
    role: 'Project Manager',
    department: 'Operations',
    bio: 'Indah ensures projects delivered on time dan on budget. Her organizational skills keep complex projects running smoothly.',
    image: '/images/team/indah.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/indahsari',
    },
  },
];

export const DEPARTMENTS = [
  'All',
  'Leadership',
  'Marketing',
  'Engineering',
  'Design',
  'Operations',
] as const;

export function getTeamByDepartment(department: string): TeamMember[] {
  if (department === 'All') return TEAM_MEMBERS;
  return TEAM_MEMBERS.filter(member => member.department === department);
}

export const COMPANY_VALUES = [
  {
    icon: 'target',
    title: 'Results-Driven',
    description: 'Kami fokus pada hasil yang terukur. Setiap strategi dan eksekusi dirancang untuk mencapai goals bisnis Anda.',
  },
  {
    icon: 'users',
    title: 'Client Partnership',
    description: 'Kami membangun hubungan partnership, bukan vendor-client. Sukses Anda adalah sukses kami.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'Kami terus mengikuti perkembangan terbaru di industri dan mengadopsi best practices untuk client kami.',
  },
  {
    icon: 'shield',
    title: 'Transparency',
    description: 'Komunikasi yang jelas dan jujur. Anda selalu tahu apa yang kami kerjakan dan hasilnya.',
  },
  {
    icon: 'rocket',
    title: 'Excellence',
    description: 'Kami tidak puas dengan "cukup baik". Setiap deliverable harus mencapai standar tertinggi.',
  },
  {
    icon: 'heart',
    title: 'Passion',
    description: 'Kami mencintai apa yang kami kerjakan. Passion ini tercermin dalam kualitas pekerjaan kami.',
  },
];

export const COMPANY_MILESTONES = [
  {
    year: '2018',
    title: 'Algan Studio Didirikan',
    description: 'Dimulai sebagai freelance digital marketing consultant, Ahmad Rizki mendirikan Algan Studio.',
  },
  {
    year: '2019',
    title: 'Tim Pertama',
    description: 'Merekrut tim pertama: 3 digital marketers dan 2 developers. Membuka kantor pertama di Jakarta.',
  },
  {
    year: '2020',
    title: 'Expansion to Full-Service',
    description: 'Menambah layanan web development dan design. Tim berkembang menjadi 15 orang.',
  },
  {
    year: '2021',
    title: 'Milestone 100 Clients',
    description: 'Mencapai 100+ active clients. Meluncurkan layanan app development dengan Flutter.',
  },
  {
    year: '2022',
    title: 'Regional Growth',
    description: 'Ekspansi ke Surabaya dan Bali. Tim berkembang menjadi 30+ profesional.',
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Memenangkan "Best Digital Agency" di Indonesia Digital Awards. Revenue tembus Rp 10B.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Mengintegrasikan AI tools ke dalam workflow. Meluncurkan layanan AI-powered marketing.',
  },
];

export const COMPANY_STATS = [
  { value: '500+', label: 'Projects Completed', description: 'Across various industries' },
  { value: '200+', label: 'Active Clients', description: 'Long-term partnerships' },
  { value: '35+', label: 'Team Members', description: 'Expert professionals' },
  { value: '6+', label: 'Years Experience', description: 'Since 2018' },
];