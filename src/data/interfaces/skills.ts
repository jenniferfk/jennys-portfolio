import HtmlIcon from '../svg/html.tsx'
import CssIcon from '../svg/css.tsx'
import JsIcon from '../svg/js.tsx'
import ReactIcon from '../svg/react.tsx'
import NextIcon from '../svg/next.tsx'
import JavaIcon from '../svg/java.tsx'
import PhpIcon from '../svg/php.tsx'
import SqlIcon from '../svg/sql.tsx'
import TailwindIcon from '../svg/tailwind.tsx'
import BootstrapIcon from '../svg/bootstrap.tsx'

export interface Skill {
    name: string;
    Component: React.FC;
  }
  
  export const skills: Skill[] = [
    { name: "React Native",Component:ReactIcon },
    { name: "React JS",Component: ReactIcon},
    { name: "Next JS",Component: NextIcon},
    { name: "Javascript",Component:JsIcon },
    { name:"Tailwind",Component:TailwindIcon},
    { name: "Java",Component: JavaIcon},
    { name: "PHP",Component: PhpIcon},
    { name: "SQL",Component: SqlIcon},
    { name:"Bootstrap ",Component:BootstrapIcon},
    { name: "CSS",Component:CssIcon },
    { name: "HTML",Component:HtmlIcon },
  ];
  