import React, { useState } from 'react'

function Emoji() {

    const [loading, setLoading] = useState(false)

    return (
        <div className='text-center flex mx-auto w-[60%]'>
            <input type='text' className='p-2 w-[60%] mx-auto dark:text-[#b3b3b3] dark:bg-[#1d1d1d] rounded-md shadow-[rgba(0,0,1,0.5)_1px_3px_2px_1px]' placeholder='Search for a keyword'/>
            {
                setLoading ? (<div></div>) : 
                (
                    <p>
                        Type keywords to search!
                    </p>
                )
            }
        </div>
    )
}

export default Emoji;