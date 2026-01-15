import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';
export const metadata={
    title:'Feedbacks'
}
    const getFeedbacks=async()=>{
      const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`,{
        // cache:'force-cache',
        next:{revalidate:60}
      })
      return await res.json() 
    // return []
    }
const FeedbackPage = async() => {
const feedbacks = await getFeedbacks()
console.log(feedbacks)
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold">{feedbacks.length} Feedbacks found</h2>
           <div className="my-5"> <Link href={'/feedback/add'}className='btn'>Add Feedback</Link></div>
<div className="my-3 space-y-5 grid grid-cols-3 gap-4">
    {feedbacks.map(fd=><FeedbackCard feedback={fd} key={fd._id}></FeedbackCard>)}

</div>
            </div>
        </div>
    );
};

export default FeedbackPage;