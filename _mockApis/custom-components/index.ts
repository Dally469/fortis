import type {
  Services,
  BuildFeatures,
  pricingType,
  PortfolioSection,
  BlogSection,
  TeamSection,
  Testimonials,
  Connect,
} from "@/types/custom-components";

/*import tabler icons*/
import {
  CheckIcon,
  XIcon,
  UserCircleIcon,
  BriefcaseIcon,
  StarIcon,
  AssemblyIcon,
  LayersIntersect2Icon,
  TriangleSquareCircleIcon,
} from "vue-tabler-icons";

//Services
const ServicesData: Services[] = [
  {
    img: StarIcon,
    title: "4.86",
    desc: "Out of 5 stars from 3896 reviews on google platform",
  },
  {
    img: UserCircleIcon,
    title: "364",
    desc: "Client testimonials received in year 2023",
  },
  {
    img: BriefcaseIcon,
    title: "45M+",
    desc: "Revenue generated through new projects & marketing",
  },
];

const ConnectData: Connect[] = [
  {
    icon: StarIcon,
    title: "Partner with us",
    desc: "Become more than a partner; become a catalyst for change. Together, we can mold a future where access to justice is not a privilege, but a universal right.",
    photo: "/images/partners.jpg",
    url: "/connect/partners",
    btnName: "Become a  Partner"
  },
  {
    icon: StarIcon,
    title: "Contact us",
    desc: "Whether you have inquiries, suggestions, or simply want to learn more about our initiatives, we're eager to connect with you.",
    photo: "/images/contact.png",
    url: "/connect/contact",
    btnName: "Our Contacts"
  },
  {
    icon: StarIcon,
    title: "Carrers of Fortis",
    desc: "Join a team that champions innovation, justice, and equity within Africa's evolving legal ecosystem.",
    photo: "/images/carrers.jpg",
    url: "/connect/carrers",
    btnName: "Open Role"
  },
  {
    icon: StarIcon,
    title: "Book Consultation",
    desc: "We welcome and value contributions from scholars, professionals, and passionate individuals who seek to shed light on challenges in Africa.",
    photo: "/images/consultation.jpg",
    url: "/connect/consultation",
    btnName: "consultation"
  },
 
];
//Build Features
import imgg1 from "/images/gifs/corporate.gif";
import imgg2 from "/images/gifs/fa-images-1.gif";
import imgg3 from "/images/gifs/fa-images-3.gif";
import img4 from "/images/gifs/fa-images-4.gif";
import img5 from "/images/gifs/fa-images-5.gif";
import img6 from "/images/gifs/property.gif";
import img7 from "/images/gifs/estate.gif";
import img8 from "/images/gifs/labour.gif";

const BuildFeaturesData: BuildFeatures[] = [
  {
    img: imgg1,
    title: "CORPORATE GOVERNANCE",
    desc: "We are committed to assisting its clients especially companies in the design and evaluation of effective compliance mechanisms, establishment of internal policies, incorporating respect for the law, risk management and alignment with strategic objectives.",
    flex: 4,
    lawyer: [{ name: "Mr NKUBITO Aimable", phone: "+250788360994" }],
  },
  {
    img: img6,
    title: "INTELLECTUAL PROPERTY ",
    desc: "We are actively involved in the registration, utilization and enforcement of IPR including copyright, trademarks and patents areas. \n\nOur firm offers a wide range of services to ensure that our top priority of safeguarding clients’ most valuable assets such as original ideas, designs, discoveries and inventions and creative work is met.  \n\nAs they say, intellectual property is a business asset. It helps set apart your business versus your competitors. It provides a stream of revenue which you deserve to be compensated for since it is a client’s creation. We stood up to defend our client’s rights.",
    flex: 4,
    lawyer: [
      { name: "Mr NKUBITO Aimable", phone: "+250788360994" },
      { name: "Mr MUNYEMANA Gilbert", phone: "+250700000000" },
    ],
  },
  {
    img: imgg2,
    title: "FAMILY LAW",
    desc: "Family law is a broad subject that touches on many areas of the law. \n\nWe offer a wide range of services in relation to domestic relations, such marriage relationship, Parent-child relationship, succession, rights and duties of the parties, enforcement of orders, modification of orders, and removal of minority status. ",
    flex: 4,
    lawyer: [{ name: "Mr NKUBITO Aimable", phone: "+250788360994" }],
  },
  {
    img: imgg2,
    title: "BUSINESS LAW",
    desc: "Over the past years, we have built a team of right-brained business lawyers and business consultants with business minds, who understand the business world. \n\nWe make transactions; we assist clients to form companies, merge and take apart, create joint ventures, draft and review contracts. ",
    flex: 4,
    lawyer: [{ name: "Mr NKUBITO Aimable", phone: "+250788360994" }],
  },
  {
    img: imgg2,
    title: "DISPUTE RESOLUTION",
    desc: "ADR Methods have gained substantial traction over the past years, the ultimate goal is to achieve a lasting resolution to the dispute. \n\nWe help clients engage in ADR in order to keep their reputation or trade secrets intact while they work towards a resolution. ",
    flex: 4,
    lawyer: [{ name: "Mr NKUBITO Aimable", phone: "+250788360994" }],
  },

  {
    img: img7,
    title: "REAL ESTATE LAW",
    desc: "Do not let petty legal issues get in the way of your buying, selling, or refinancing your home. Our experts will make the legal process as easy and painless as possible. \n\nOver the past few years, our attorneys have developed a successful and growing real estate practice. We assist buyers and sellers in the traditional purchase and sale of residential and commercial real estate. \n\nWe pride ourself on our professional approach to real estate transactions and understanding of their clients’ needs..",
    flex: 4,
    lawyer: [{ name: "Mr NKUBITO Aimable", phone: "+250788360994" }],
  },
  {
    img: imgg2,
    title: "CORPORATE COMPLIANCE",
    desc: "We are committed to assisting its clients especially companies in the design and evaluation of effective compliance mechanisms, establishment of internal policies, incorporating respect for the law, risk management and alignment with strategic objectives.",
    flex: 4,
    lawyer: [{ name: "Mr NKUBITO Aimable", phone: "+250788360994" }],
  },
  {
    img: img8,
    title: "LABOR LAW ",
    desc: "Over the past years, our firm has developed this practice of mediating many aspects of the relationship between trade unions, employers and employees. ",
    flex: 4,
    lawyer: [{ name: "Mr NKUBITO Aimable", phone: "+250788360994" }],
  },
];

//Team

import team1 from "/images/1.png";

const Team: TeamSection[] = [
  {
    img: team1,
    title: "Mr.  NKUBITO AIMABLE",
    subtitle: "SENIOR ADVOCATE",
    desc: "Mr. NKUBITO Aimable is a senior partner and co-founder of FERO & Co Advocates. Prior to founding FA, he worked as the head of litigation at SAGA Solutions and Partners Ltd, where he represented a diverse range of clients before courts of law in criminal, Labor, Family and commercial litigations. \n\n His focus lies predominantly in civil and commercial law, particularly litigation. Mr NKUBITO also regularly advises various private entities on matters ranging from public procurement to administrative law and typically involves both the provision of advice as well as representing clients in court and before various tribunals and boards. \n\n NKUBITO holds a Bachelor’s Degree of Law (LLB) from the Kigali Independent University and a Postgraduate Diploma in Legal practice from the Institute of Legal Practice and Development (ILPD) and a practicing Lawyer (Advocate), member of both Rwanda Bar Association and East African Law Society.",
    socialicon: [
      {
        url: "/tel=+250788956848",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=nkubito@fortisassociates.rw",
        icon: "mdi mdi-email",
      },
    ],
    practice: [
      {
        title: "Business & Corporate Law",
        icon: "mdi mdi-check",
      },
      {
        title: "Intellectual Property Law",
        icon: "mdi mdi-check",
      },
      {
        title: "Family Law",
        icon: "mdi mdi-check",
      },
      {
        title: "Property & Development law",
        icon: "mdi mdi-check",
      },
      {
        title: "Employment & Industrial relations Law",
        icon: "mdi mdi-check",
      },
      {
        title: "General Commercial & Civil litigation",
        icon: "mdi mdi-check",
      },

      {
        title: "Family Law",
        icon: "mdi mdi-check",
      },
      {
        title: "Procurement Law",
        icon: "mdi mdi-check",
      },
      {
        title: "Property & Development law",
        icon: "mdi mdi-check",
      },
      {
        title: "General Commercial & Civil litigation",
        icon: "mdi mdi-check",
      },
    ],
  },
  {
    img: team1,
    title: "Mr IRADUKUNDA Eric",
    subtitle: "OFFICE MANAGER",
    desc: "Mr. IRADUKUNDA is dynamic and result-oriented professional with 5 years+ of experience in office management, supervision and administrative. He provides confidential support to seniors to ensure compliance with our firm objectives and collaborates well with all organizational levels.  He’s indeed a valuable asset to the firm.",
    socialicon: [
      {
        url: "/tel=+250788240835",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=iradukunda@fortisassociates.rw ",
        icon: "mdi mdi-email",
      },
    ],
    practice: [
      {
        title: "Business Management",
        icon: "mdi mdi-check",
      },
    ],
  },
  {
    img: team1,
    title: "Mr MUNYEMANA Gilbert",
    subtitle: "ACCOUNTANT AND TAX ADVISOR  ",
    desc: "Mr. Gilbert has been in the business world for more than a decade. He’s a quality driven accountant with a proven record of excellent job performance. He manages our firm projects at each stage with a diligent and attentive approach, He advises the firm on tax related issues. He holds a bachelor’s degree in Finance and he is a qualified tax advisor. ",
    socialicon: [
      {
        url: "/tel=+250782295289",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=gilbert@fortisassociates.rw ",
        icon: "mdi mdi-email",
      },
       
    ],
    practice: [
      {
        title: "Business Management",
        icon: "mdi mdi-check",
      },
    ],
  },
  {
    img: team1,
    title: "ABIMANA Edyne",
    subtitle: "FRONT DESK MANAGER",
    desc: "Edyne is an outgoing and self-drive front desk manager skilled at providing excellent customer service, managing all areas of front office department.She currently works with our firm as the front desk manager and assist in IT related matters. Mrs Edyne holds a bachelor’s degree in BBIT.",
    socialicon: [
      {
        url: "/tel=0788956848",
        icon: "mdi mdi-phone",
      },
      {
        url: "/mailto=abimana@fortisassociates.rw",
        icon: "mdi mdi-email",
      },
    
    ],
    practice: [
      {
        title: "Business Management",
        icon: "mdi mdi-check",
      },
    ],
  },
];

//Testimonial

import profile1 from "/images/blog/cyrus.jpg";
import profile2 from "/images/blog/kriss.jpg";
import profile3 from "/images/blog/sara.jpg";

const TestimonialsData: Testimonials[] = [
  {
    img: profile1,
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MICHELLE ANDERSON",
    rating: 5,
  },
  {
    img: profile2,
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "MARK MESTY",
    rating: 4,
  },
  {
    img: profile3,
    testimonial:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
    name: "LIMPSY ADAM",
    rating: 5,
  },
];

export {
  ServicesData,
  BuildFeaturesData,
  ConnectData,
  Team,
  TestimonialsData,
};
