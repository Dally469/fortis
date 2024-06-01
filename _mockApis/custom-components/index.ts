import type { Services, BuildFeatures, pricingType, PortfolioSection, BlogSection, TeamSection, Testimonials } from "@/types/custom-components";

/*import tabler icons*/
import { CheckIcon, XIcon, UserCircleIcon, BriefcaseIcon, StarIcon, AssemblyIcon, LayersIntersect2Icon, TriangleSquareCircleIcon } from 'vue-tabler-icons';

//Services
const ServicesData: Services[] = [
  {
    img: StarIcon,
    title: '4.86',
    desc: 'Out of 5 stars from 3896 reviews on google platform',
  },
  {
    img: UserCircleIcon,
    title: '364',
    desc: 'Client testimonials received in year 2023',
  },
  {
    img: BriefcaseIcon,
    title: '45M+',
    desc: 'Revenue generated through new projects & marketing',
  },
]

//Build Features

const BuildFeaturesData: BuildFeatures[] = [
  {
    icon: AssemblyIcon,
    title: 'CORPORATE GOVERNANCE',
    desc: 'We are committed to assisting its clients especially companies in the design and evaluation of effective compliance mechanisms, establishment of internal policies, incorporating respect for the law, risk management and alignment with strategic objectives.',
    link: '/',
  },
  {
    icon: AssemblyIcon,
    title: 'INTELLECTUAL PROPERTY ',
    desc: 'We are actively involved in the registration, utilization and enforcement of IPR including copyright, trademarks and patents areas. \n\nOur firm offers a wide range of services to ensure that our top priority of safeguarding clients’ most valuable assets such as original ideas, designs, discoveries and inventions and creative work is met.  \n\nAs they say, intellectual property is a business asset. It helps set apart your business versus your competitors. It provides a stream of revenue which you deserve to be compensated for since it is a client’s creation. We stood up to defend our client’s rights.',
    link: '/',
  },
  {
    icon: AssemblyIcon,
    title: 'FAMILY LAW',
    desc: 'Family law is a broad subject that touches on many areas of the law. \n\nWe offer a wide range of services in relation to domestic relations, such marriage relationship, Parent-child relationship, succession, rights and duties of the parties, enforcement of orders, modification of orders, and removal of minority status. ',
    link: '/',
  }
  , {
    icon: AssemblyIcon,
    title: 'BUSINESS LAW',
    desc: 'Over the past years, we have built a team of right-brained business lawyers and business consultants with business minds, who understand the business world. \n\nWe make transactions; we assist clients to form companies, merge and take apart, create joint ventures, draft and review contracts. ',
    link: '/',
  },
  {
    icon: AssemblyIcon,
    title: 'DESPUTE RESOLUTION',
    desc: 'ADR Methods have gained substantial traction over the past years, the ultimate goal is to achieve a lasting resolution to the dispute. \n\nWe help clients engage in ADR in order to keep their reputation or trade secrets intact while they work towards a resolution. ',
    link: '/',
  },

  {
    icon: AssemblyIcon,
    title: 'REAL ESTATE LAW',
    desc: 'Do not let petty legal issues get in the way of your buying, selling, or refinancing your home. Our experts will make the legal process as easy and painless as possible. \n\nOver the past few years, our attorneys have developed a successful and growing real estate practice. We assist buyers and sellers in the traditional purchase and sale of residential and commercial real estate. \n\nWe pride ourself on our professional approach to real estate transactions and understanding of their clients’ needs..',
    link: '/',
  },
  {
    icon: AssemblyIcon,
    title: 'CORPORATE COMPLIANCE',
    desc: 'We are committed to assisting its clients especially companies in the design and evaluation of effective compliance mechanisms, establishment of internal policies, incorporating respect for the law, risk management and alignment with strategic objectives.',
    link: '/',
  },
  {
    icon: AssemblyIcon,
    title: 'LABOR LAW ',
    desc: 'Over the past years, our firm has developed this practice of mediating many aspects of the relationship between trade unions, employers and employees. ',
    link: '/',
  }
]


/*-- Pricing Page --*/
/*-- Pricing Page --*/
import img1 from '/images/corporate/silver.png';
import img2 from '/images/corporate/bronze.png';
import img3 from '/images/corporate/gold.png';
const pricing: pricingType[] = [
  {
    tagtext: false,
    caption: 'Silver',
    image: img1,
    free: true,
    price: 10.99,
    yearlyprice: 10.99 * 12,
    buttontext: 'Choose Silver',
    list: [
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: '3 Members',
        status: false,
      },
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: 'Single Device',
        status: false,
      },
      {
        icon: XIcon,
        iconcolor: 'inputBorder',
        listtitle: '50GB Storage',
        status: true,
      },
      {
        icon: XIcon,
        iconcolor: 'inputBorder',
        listtitle: 'Monthly Backups',
        status: true,
      },
      {
        icon: XIcon,
        iconcolor: 'inputBorder',
        listtitle: 'Permissions & workflows',
        status: true,
      }
    ]
  },
  {
    tagtext: true,
    caption: 'bronze',
    image: img2,
    free: false,
    price: 10.99,
    yearlyprice: 10.99 * 12,
    buttontext: 'Choose Bronze',
    list: [
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: '5 Members',
        status: false,
      },
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: 'Multiple Device',
        status: false,
      },
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: '80GB Storage',
        status: false,
      },
      {
        icon: XIcon,
        iconcolor: 'inputBorder',
        listtitle: 'Monthly Backups',
        status: true,
      },
      {
        icon: XIcon,
        iconcolor: 'inputBorder',
        listtitle: 'Permissions & workflows',
        status: true,
      }
    ]
  },
  {
    tagtext: false,
    caption: 'gold',
    image: img3,
    free: false,
    price: 22.99,
    yearlyprice: 22.99 * 12,
    buttontext: 'Choose Gold',
    list: [
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: '15 Members',
        status: false,
      },
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: 'Multiple Device',
        status: false,
      },
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: '150GB Storage',
        status: false,
      },
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: 'Monthly Backups',
        status: false,
      },
      {
        icon: CheckIcon,
        iconcolor: 'primary',
        listtitle: 'Permissions & workflows',
        status: false,
      }
    ]
  }

];


//Portfolio

import s1 from '/images/portfolio/portfolio-1.jpg';
import s2 from '/images/portfolio/portfolio-2.png';
import s3 from '/images/portfolio/portfolio-3.jpg';
import s4 from '/images/portfolio/portfolio-4.jpg';
import s5 from '/images/portfolio/portfolio-5.jpg';
import s6 from '/images/portfolio/portfolio-6.jpg';

const Portfolio: PortfolioSection[] = [
  {
    img: s1,
    title: 'White Theming Background',
    desc: '3D Render',

  },
  {
    img: s2,
    title: 'The Heritage',
    desc: 'Illustration',
  },
  {
    img: s3,
    title: 'Belforte Fall',
    desc: 'Photography',
  },
  {
    img: s4,
    title: 'Ipsum neque libero',
    desc: 'React',
  },
  {
    img: s5,
    title: 'White Theming',
    desc: 'Graphics Design',
  },
  {
    img: s6,
    title: 'luctus neque purus',
    desc: 'Html',
  },

];


//Blog

import blog1 from '/images/blog-grid/grid-LP.jpg';
import blog2 from '/images/blog-grid/grid-uxdesign.jpg';
import blog3 from '/images/blog-grid/grid-search.jpg';

const Blog: BlogSection[] = [
  {
    img: blog1,
    badge: 'UX Design',
    date: 'Apr 16, 2023',
    view: '27,567 Views',
    title: '5 Bad Landing Page Examples How We Would Fix Them',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'Mark R. Freeman'
  },
  {
    img: blog2,
    badge: 'Digital',
    date: 'Apr 16, 2023',
    view: '29,567 Views',
    title: 'Why UX Design Matters and How it Affects Ranking',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'James Robert'
  },
  {
    img: blog3,
    badge: 'Html',
    date: 'Apr 16, 2023',
    view: '28,567 Views',
    title: 'This Week in Search: New Limits and Exciting Features',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'David William'
  },


];


//Team

import team1 from '/images/team/team-1.jpg';
import team2 from '/images/team/team-2.jpg';
import team3 from '/images/team/team-3.jpg';
import team4 from '/images/team/team-4.jpg';

const Team: TeamSection[] = [
  {
    img: team1,
    title: "Mr.  NKUBITO AIMABLE",
    subtitle: "LAWYER",
    desc: "Mr. NKUBITO Aimable is a senior partner and co-founder of FERO & Co Advocates. Prior to founding FA, he worked as the head of litigation at SAGA Solutions and Partners Ltd, where he represented a diverse range of clients before courts of law in criminal, Labor, Family and commercial litigations. \n\n His focus lies predominantly in civil and commercial law, particularly litigation. Mr NKUBITO also regularly advises various private entities on matters ranging from public procurement to administrative law and typically involves both the provision of advice as well as representing clients in court and before various tribunals and boards. \n\n NKUBITO holds a Bachelor’s Degree of Law (LLB) from the Kigali Independent University and a Postgraduate Diploma in Legal practice from the Institute of Legal Practice and Development (ILPD) and a practicing Lawyer (Advocate), member of both Rwanda Bar Association and East African Law Society.",
    socialicon: [
      {
        url: "/tel=",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=nkubitoaimable@fortisassociates.rw",
        icon: "mdi mdi-email",
      },
      {
        url: "/",
        icon: "mdi mdi-twitter",
      },
     
      {
        url: "/",
        icon: "mdi mdi-facebook",
      },
    ],
    practice: [
      {
        title: "Business & Corporate Law",
        icon: "mdi mdi-check"
      },
      {
        title: "Intellectual Property Law",
        icon: "mdi mdi-check"
      },
      {
        title: "Family Law",
        icon: "mdi mdi-check"
      },
      {
        title: "Property & Development law",
        icon: "mdi mdi-check"
      },
      {
        title: "Employment & Industrial relations Law",
        icon: "mdi mdi-check"
      },
      {
        title: "General Commercial & Civil litigation",
        icon: "mdi mdi-check"
      },

      {
        title: "Family Law",
        icon: "mdi mdi-check"
      },
      {
        title: "Procurement Laww",
        icon: "mdi mdi-check"
      },
      {
        title: "Property & Development law",
        icon: "mdi mdi-check"
      },
      {
        title: "General Commercial & Civil litigation",
        icon: "mdi mdi-check"
      }

    ]
  },
  {
    img: team1,
    title: "Mr IRADUKUNDA Eric",
    subtitle: "OFFICE MANAGER",
    desc: "Mr. IRADUKUNDA is dynamic and result-oriented professional with 5 years+ of experience in office management, supervision and administrative. He provides confidential support to seniors to ensure compliance with our firm objectives and collaborates well with all organizational levels.  He’s indeed a valuable asset to the firm.",
    socialicon: [
      {
        url: "/tel=",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=iradukundaeric@fortisassociates.rw",
        icon: "mdi mdi-email",
      },
      {
        url: "/",
        icon: "mdi mdi-twitter",
      },
     
      {
        url: "/",
        icon: "mdi mdi-facebook",
      },
    ],
    practice: [
      {
        title: "Business Management",
        icon: "mdi mdi-check"
      }

    ]
  },
  {
    img: team1,
    title: "Mr MUNYEMANA Gilbert",
    subtitle: "ACCOUNTANT AND TAX ADVISOR  ",
    desc: 'Mr. Gilbert has been in the business world for more than a decade. He’s a quality driven accountant with a proven record of excellent job performance. He manages our firm projects at each stage with a diligent and attentive approach, He advises the firm on tax related issues. He holds a bachelor’s degree in Finance and he is a qualified tax advisor. ',
    socialicon: [
      {
        url: "/tel=",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=munyemanagilbert@fortisassociates.rw",
        icon: "mdi mdi-email",
      },
      {
        url: "/",
        icon: "mdi mdi-twitter",
      },
     
      {
        url: "/",
        icon: "mdi mdi-facebook",
      },
    ],
    practice: [
      {
        title: "Business Management",
        icon: "mdi mdi-check"
      }

    ]
  },
  {
    img: team1,
    title: "ABIMANA Edyne",
    subtitle: "FRONT DESK MANAGER",
    desc:'Edyne is an outgoing and self-drive front desk manager skilled at providing excellent customer service, managing all areas of front office department.She currently works with our firm as the front desk manager and assist in IT related matters. Mrs Edyne holds a bachelor’s degree in BBIT.',
    socialicon: [
      {
        url: "/tel=0788956848",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=abimanaedyne@fortisassociates.rw",
        icon: "mdi mdi-email",
      },
      {
        url: "/",
        icon: "mdi mdi-twitter",
      },
     
      {
        url: "/",
        icon: "mdi mdi-facebook",
      },
    ],
    practice: [
      {
        title: "Business Management",
        icon: "mdi mdi-check"
      }

    ]
  },

]

//Testimonial 

import profile1 from '/images/blog/cyrus.jpg';
import profile2 from '/images/blog/kriss.jpg';
import profile3 from '/images/blog/sara.jpg';


const TestimonialsData: Testimonials[] = [
  {
    img: profile1,
    testimonial: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MICHELLE ANDERSON",
    rating: 5

  },
  {
    img: profile2,
    testimonial: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MARK MESTY",
    rating: 4

  },
  {
    img: profile3,
    testimonial: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "LIMPSY ADAM",
    rating: 5
  },


];


export { ServicesData, BuildFeaturesData, pricing, Portfolio, Blog, Team, TestimonialsData };