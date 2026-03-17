import React from 'react'
import Skillbox from './Skillbox'
function skills() {
  const skills = [
  {
   
    name: "HTML",
    logo: "/logos/html.svg",
    level: "Advanced",
    category: "Frontend"
  },
  {
    name: "CSS",
    logo: "/logos/css.svg",
    level: "Advanced",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    logo: "/logos/javascript.svg",
    level: "Intermediate",
    category: "Programming"
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwind.svg",
    level: "Intermediate",
    category: "Styling"
  },
  {
    name: "Git",
    logo: "/logos/git.svg",
    level: "Intermediate",
    category: "Tools"
  },
  {
    name: "C++",
    logo: "/logos/cpp.svg",
    level: "Intermediate",
    category: "Programming"
  }
];
  return (
    <div className=' grid grid-cols-3 gap-5' >
  {
    skills.map( (elem)=>{
     return <Skillbox Skill={elem.name} Level={elem.level} category={elem.category} logo={elem.logo} />
    })
  }
    </div>
  )
}

export default skills
