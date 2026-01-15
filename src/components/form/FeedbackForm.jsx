"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = () => {
    const router = useRouter()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const message = e.target.message.value
       const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`,{
        method:'POST',
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({message})
       })

        const data = await res.json()
        if(data.insertedId){
            alert('success')
            router.push('/feedback')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-5 text-center'>
        <textarea name='message' id='' cols='30' rows='10' className='w-xl border border-dashed' required></textarea> <hr />
<button className='btn'>Add Feedback </button>
            </form>
        </div>
    );
};

export default FeedbackForm;