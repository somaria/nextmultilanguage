import React from 'react'
import { useLocale } from "next-intl";

const About = () => {
   const locale = useLocale();

   console.log('About')
   console.log(locale)

  return (
    <div>About</div>
  )
}

export default About