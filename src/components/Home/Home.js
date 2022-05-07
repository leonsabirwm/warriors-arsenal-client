import React from 'react'
import { Inventory } from '../Inventory/Inventory'
import { Mylocation } from '../Mylocation/Mylocation';
import { Slide } from '../Slide/Slide';
import { Banner } from './../Banner/Banner';

export const Home = () => {
  return (
    <div>
      <Slide></Slide>
     <Banner></Banner>
    <Inventory></Inventory>
    <Mylocation></Mylocation>
    </div>
  )
}
