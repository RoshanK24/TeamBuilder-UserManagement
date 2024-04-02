import React, { useState } from 'react'

const Pagination = ({page, setPage, total}) => { 
  return (
    <>
        {
            total<=8 ? 
                <div className='flex mb-5'>
                    <div className= {`h-9 w-9 m-1 pb-[0.2rem] pe-[0.2rem] text-lg font-semibold flex justify-center items-center rounded-md bg-white cursor-pointer`} onClick={()=>{if(page>1){setPage(page-1)}}}>&lt;</div>
                    {
                        Array.from({ length: total }, (_, index) => index + 1).map((val, index)=>(
                            <div key={val+index} className= {`h-9 w-9 m-1 flex justify-center items-center cursor-pointer rounded-md ${page === val ? 'bg-purple-400' : 'bg-white'}`} onClick={()=>{setPage(val)}}>{val}</div>
                        ))
                    }
                     <div className= {`h-9 w-9 m-1 pb-[0.2rem] text-lg font-semibold flex justify-center items-center cursor-pointer rounded-md bg-white`} onClick={()=>{if(page<total){setPage(page+1)}}}>&gt;</div>
                </div> : null
        }
        {
            page <= 4 && total>8 ? 
                <div className='flex mb-5'>
                    <div className= {`h-9 w-9 m-1 pb-[0.2rem] pe-[0.2rem] text-lg font-semibold flex justify-center cursor-pointer items-center rounded-md bg-white`} onClick={()=>{if(page>1){setPage(page-1)}}}>&lt;</div>
                    {
                        Array.from({ length: 5 }, (_, index) => index + 1).map((val, index)=>(
                            <div key={val+index} className= {`h-9 w-9 m-1 flex justify-center items-center cursor-pointer rounded-md ${page === val ? 'bg-purple-400' : 'bg-white'}`} onClick={()=>{setPage(val)}}>{val}</div>
                        ))
                    }
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} >...</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{{setPage(total)}}}>{total}</div>
                    <div className= {`h-9 w-9 m-1 pb-[0.2rem] text-lg font-semibold flex justify-center cursor-pointer items-center rounded-md bg-white`} onClick={()=>{if(page<total){setPage(page+1)}}}>&gt;</div>
                </div> : null
        }
        {
            page > total-4 && total>8 ? 
                <div className='flex mb-5'>
                    <div className= {`h-9 w-9 m-1 pb-[0.2rem] pe-[0.2rem] text-lg font-semibold flex cursor-pointer justify-center items-center rounded-md bg-white`} onClick={()=>{if(page>1){setPage(page-1)}}}>&lt;</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{{setPage(1)}}}>1</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} >...</div>
                    {
                        Array.from({ length: 5 }, (_, index) => total - 4 + index).map((val, index)=>(
                            <div key={val+index} className= {`h-9 w-9 m-1 flex justify-center cursor-pointer items-center rounded-md ${page === val ? 'bg-purple-400' : 'bg-white'}`} onClick={()=>{setPage(val)}}>{val}</div>
                        ))
                    }
                     <div className= {`h-9 w-9 m-1 pb-[0.2rem] text-lg font-semibold flex cursor-pointer justify-center items-center rounded-md bg-white`} onClick={()=>{if(page<total){setPage(page+1)}}}>&gt;</div>

                </div> : null
        }
        {
            page>4 && page<=    total-4 && total>8 ? 
                <div className='flex mb-5'>
                    <div className= {`h-9 w-9 m-1 pb-[0.2rem] pe-[0.2rem] text-lg font-semibold cursor-pointer flex justify-center items-center rounded-md bg-white`} onClick={()=>{if(page>1){setPage(page-1)}}}>&lt;</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{if(page<total){setPage(1)}}}>1</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{if(page<total){setPage(2)}}}>2</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} >...</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{if(page<total){setPage(page-1)}}}>{page-1}</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-purple-400`} onClick={()=>{if(page<total){setPage(page)}}}>{page}</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{if(page<total){setPage(page+1)}}}>{page+1}</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} >...</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{if(page<total){setPage(total-1)}}}>{total-1}</div>
                    <div className= {`h-9 w-9 m-1 flex justify-center items-center rounded-md cursor-pointer bg-white`} onClick={()=>{if(page<total){setPage(total)}}}>{total}</div> 
                    <div className= {`h-9 w-9 m-1 pb-[0.2rem] text-lg font-semibold flex justify-center cursor-pointer items-center rounded-md bg-white`} onClick={()=>{if(page<total){setPage(page+1)}}}>&gt;</div>
                </div> : null
        }
    </>
    
  )
}

export default Pagination