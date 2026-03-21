import React from 'react'
import Skillbox from './Skillbox'
function skills() {
  const skills = [
  {
   
    name: "HTML",
    logo: "src/assets/Html.png",
    level: "Advanced",
    category: "Frontend"
  },
  {
    name: "CSS",
    logo: "src/assets/css.png",
    level: "Advanced",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    logo: "src/assets/js.png",
    level: "Intermediate",
    category: "Programming"
  },
  {
    name: "React",
    logo: "src/assets/react.png",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    name: "Tailwind",
    logo: "src/assets/Tailwind.png",
    level: "Intermediate",
    category: "Styling"
  },
  {
    name: "Git",
    logo: "src/assets/git.png",
    level: "Intermediate",
    category: "Tools"
  },
  {
    name: "C++",
    logo: "src/assets/c++.png",
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
