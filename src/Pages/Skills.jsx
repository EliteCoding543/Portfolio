import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className='text-white bg-slate-900/50 backdrop-blur-md border border-slate-700 rounded-2xl p-10 mt-10'>
      <h1 className='text-4xl font-bold'>Expertise</h1>
      <div className="w-20 h-1 bg-amber-500 rounded-full mt-3 mb-6"></div>

      <div className=''>
        <h2 className='text-2xl font-sans'>My Skills</h2>

         <SkillsCard />        
      </div>
    </div>
  )
}

export default Skills
