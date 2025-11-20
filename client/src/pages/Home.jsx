import React,{useEffect} from 'react';
import { Hero, Plans, Trainers, Reviews, FAQ } from '../components';
const Home = () => {
  
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:"smooth"})    
}, [])

  return (
    <div>
    <Hero/>
    <Plans/>
    <Trainers/>
    <Reviews/>
    <FAQ/>
    </div>
  )
}

export default Home;