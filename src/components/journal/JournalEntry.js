import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://th.bing.com/th/id/OIP.ZTxMaifKJ718-E2x5Ay79gHaEK?pid=ImgDet&rs=1)'
            }}
        >
        </div>
        
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo dia
            </p>
            
            <p className='journal__entry-content'>
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá 
            </p>
        </div>
        
        <div className='journal__entry-date-box'>
            <span>Monday</span>

        </div>
    </div>
  )
}
