import React, { useEffect, useState } from 'react'
import emojiData from '../data.json'

function Emoji() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    //local storage
    const searchItem = () =>{
        if(searchKey){
            return searchKey;
        }
        else{
            return ""
        }
    }
    const searchKey = JSON.parse(localStorage.getItem("search"));
    const [search, setSearch] = useState(searchItem())
    // console.log(search,"searchh")

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(search));
        
        // console.log(emojiData)
        const newData = emojiData.filter((emoji) =>(
            emoji.keywords.toLowerCase().includes(search.toLowerCase())
            )
        )

        // console.log(searchKey)
        setLoading(true);
        setData(newData);
        // console.log(newData, "newdata")
        // console.log(loading)
        // console.log(data);

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
                search? 
                <>
                    {loading ? 
                    (<div className='grid grid-cols-4 gap-3'>
                        {
                            
                            data.map((emoji) =>(
                                <div className='py-3 border-gray-500 border-2 rounded-md  dark:text-[#b3b3b3]' key={emoji.title}>
                                    <p className='text-4xl my-4'>{emoji.symbol}</p>
                                    <h1 className='text-sm dark:text-[#b3b3b3]'>{emoji.title}</h1>
                                </div>
                            ))

                        }
                        
                    </div>) : 
                    (
                        <p>
                            Loading
                        </p>
                    )}
                </>
                :
                <>
                    <p className='text-sm dark:text-[#b3b3b3]'>Type Keywords to Search</p>
                </>
            }
            
        </div>
    )
}

export default Emoji;