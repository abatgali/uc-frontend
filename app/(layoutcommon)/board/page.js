import MeetBoardMembers from '@/app/components/pages/board'
import { oswald } from '@/app/pages/_app'
import React from 'react'

export default function Board() {
  return (
    <div className='pt-20 bg-gradient-to-b from-black to-amber-600'>
        <div className={` h-auto text-white`}>
            {/* <div className={`text-2xl ${oswald.className}`}>Board Members</div> */}
            <MeetBoardMembers/>
        </div>
    </div>
  )
}
