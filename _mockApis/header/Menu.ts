
export interface menu {
    header?: string;
    title?: string;
    children?: menu[];
    to?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Our Firm',
        to: '/our-firm'
    },
    {
        title: 'Our Practice Area',
        to: '/practice-area'
    },{
        title: 'Our Lawyer',
        to: '/lawyers'
    },{
        title: 'Contact Us',
        to: '/contact'
    },
];

export default sidebarItem;
