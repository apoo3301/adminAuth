import React from 'react'
import GoogleSearchAddress from '../../_components/googleSearchAddress';
import { Button } from '@/components/ui/button';


function AddNewListing() {
  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
        <div className='p-10 flex flex-col gap-5 items-cente justify-center'>
        <h2 className='font-bold text-2xl'>Add new listing</h2>
        <GoogleSearchAddress />
        </div>
    </div>
  )
}

export default AddNewListing