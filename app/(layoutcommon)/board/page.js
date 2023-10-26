import MeetBoardMembers from '@/app/components/pages/board'
import React from 'react'

export default function Board() {
  return (
    <div className='pt-20 bg-gradient-to-b from-black to-amber-600'>
        <div className={` h-auto text-white`}>
            <MeetBoardMembers/>
        </div>
    </div>
  )
}
