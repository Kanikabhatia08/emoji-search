import React, { useEffect, useState } from 'react'
import emojiData from '../data.json'
function Emoji() {

    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    useEffect(()=>{
        // console.log(emojiData)
        const newData = emojiData.filter((emoji) =>(
            
            emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
            
        )
        )
        setLoading(true)
        setData(newData)
        // console.log(newData, "newdata")
        console.log(loading)
        console.log(data);

    },[search])

    return (
        <div className='text-center  mx-auto w-[60%]'>
            <input 
                type='text' 
                value={search}
                placeholder='Search for a keyword'
                onChange={(e) => setSearch(e.target.value)}
                className='p-2 w-[60%] mb-10 mx-auto dark:text-[#b3b3b3] dark:bg-[#1d1d1d] rounded-md shadow-[rgba(0,0,1,0.5)_1px_3px_2px_1px]' 
            />
            
            {
                loading ? 
                (<div className='grid row-2'>
                    {
                        data.map((emoji) =>(
                            <div className=' border-gray-500 border-2 rounded-md  dark:text-[#b3b3b3]' key={emoji.title}>
                                <p>{emoji.symbol}</p>
                                <h1>{emoji.title}</h1>
                            </div>
                        ))
                        
                    }
                    
                </div>) : 
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