"use client"

import { MapPin } from 'lucide-react'
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

function GoogleSearchAddress() {
  return (
    <div className='flex items-center w-full'>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Address</CardTitle>
          <CardDescription>Enter your address details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <GooglePlacesAutocomplete 
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
              selectProps={{
                placeholder: 'Search address',
                isClearable: true,
                className: 'w-full',
                onChange: (place) => {
                  // Vérifiez si `place` est défini
                  if (place) {
                    console.log(place);
                    geocodeByAddress(place.label)
                      .then(results => getLatLng(results[0]))
                      .then(({ lat, lng }) => {
                        console.log('Latitude:', lat, 'Longitude:', lng);
                      })
                      .catch(error => {
                        console.error('Error', error);
                      });
                  }
                }
              }}    
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default GoogleSearchAddress
