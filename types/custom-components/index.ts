import type { TablerIconComponent } from "vue-tabler-icons";
//Services
type Services = {
    img: TablerIconComponent;
    title: string;
    desc:string;
};

//Build Features
type BuildFeatures = {
  img: string;
  title: string;
  desc: string;
  flex: number;
  lawyer?: Lawyer[] ;
};

type Lawyer = {
  name: string;
  phone: string;
  email?: string;  
};

//Choose Your Plans
type listPriceType={
    icon: TablerIconComponent;
    iconcolor: string;
    listtitle: string;
    status:boolean
};
type pricingType = {
    caption: string;
    image: string;
    free: boolean;
    buttontext: string;
    tagtext: boolean;
    price: number;
    yearlyprice: number;
    list:listPriceType[];
};

//Portfolio
type PortfolioSection = {
    img: string;
    title: string;
    desc:string;
};

//Blog
type BlogSection = {
    img: string;
    badge:string;
    date:string;
    view:string;
    title: string;
    desc:string;
    name:string;
};

//Team
type teamGroupType={
    url: string;
    icon: string;
}

//Team
type teamPracticeAre={
    title: string;
    icon: string;
}

type TeamSection = {
    img: string;
    title: string;
    subtitle:string;
    desc:string;
    practice: teamPracticeAre[];
    socialicon: teamGroupType[];
};



//Testimonials

type Testimonials = {
    img: string;
    testimonial:string;
    name: string;
    rating:number;
};



export type {Services,BuildFeatures,pricingType,PortfolioSection,BlogSection,TeamSection,Testimonials}