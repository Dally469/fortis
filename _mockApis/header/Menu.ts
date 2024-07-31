
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
        title: ' Law Firm',
        to: '/our-firm'
    },
    {
        title: 'Practice Area',
        to: '/practice-area'
    },{
        title: '  Team',
        to: '/lawyers'
    },{
        title: 'Contact Us',
        to: '/contact'
    },
];

export default sidebarItem;
