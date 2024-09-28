import React from 'react'
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
  return (
    <div className='rounded-lg overflow-hidden bg-gray-900 shadow-lg transition-transform transform hover:scale-105'>
      <div className='relative w-full h-40 sm:h-48 md:h-56 lg:h-64'>
        <img 
          src={imgUrl} 
          alt={title} 
          className='w-full h-full object-cover' 
        />
      </div>

      <div className='p-4'>
        <h5 className='font-semibold text-lg sm:text-xl mb-2 text-white'>{title}</h5>
        <p className='text-gray-300 mb-4 text-sm sm:text-base'>
          {description}
        </p>

        <div className='flex justify-between items-center'>
          <Link href={previewUrl} target='_blank' className='flex items-center text-orange-400 hover:text-orange-500'>
            <EyeIcon className='h-5 w-5 mr-2' />
            <span className='text-sm sm:text-base'>Demo</span>
          </Link>
          <Link href={gitUrl} target='_blank' className='flex items-center text-orange-400 hover:text-orange-500'>
            <CodeBracketIcon className='h-5 w-5 mr-2' />
            <span className='text-sm sm:text-base'>GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
