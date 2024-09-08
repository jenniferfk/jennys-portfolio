import react from '../pics/react-certif.png';
import responsive from '../pics/responsive-web-design-certif.png';
import version from '../pics/versioncontrol-certif.png'
export interface Certificate {
    link: string;
    image: string;
    title: string;
    issuer: string;
    desc: string;
    alt: string;
  }
  export const certificateData: Certificate[] = [
    {
        link: "https://coursera.org/verify/XBSMMG8HQYT2",
        image: react,
        title:"React Basics",
        issuer:"Meta",
        desc:"Completed it in April 2023. <br/>It provided me with React Basics knowledge which is what I am using for this website. It covered react hooks, react components, props, events, class and many more react related chapters. Working on taking the react advanced certificate.",
        alt: "React Certificate"
    },
    {
        link: "https://coursera.org/verify/MRJ8CHVWZJKE",
        image: responsive,
        title:"Responsive Web Design",
        issuer:"University of London",
        desc:"Completed in March 2023.<br/>I learned how to create web page designs that adjust to various screen sizes by utilizing responsive grid layouts. Did some projects with Bootstrap 5",
        alt: "Responsive Web Design Certificate"
    },
    {
        link: "https://coursera.org/verify/QPLN648KZN64",
        image: version,
        title:"Version Control",
        issuer:"Meta",
        desc:"Completed in August 2023. <br/>I acquired the skills to utilize a GitHub repository effectively, establish a GitHub repository, implement version control systems, and efficiently navigate and configure settings via the command line.",
        alt: "Version Control Certificate"
    }
];