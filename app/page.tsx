// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { useEffect } from "react"
import Hero from "@/components/home/Hero"
import Skills from "@/components/home/Skills"
import Testimonials from "@/components/home/Testimonials"
import CTA from "@/components/home/CTA"
import { Suspense } from 'react'
import Projects from "@/components/home/Projects";

export default async function Page() {

  return (
    <div>
      <Hero />
      <div className="mt-20 space-y-32 max-h-full">


        <Suspense fallback={<div>Loading ......</div>}>
          <Projects/>
        </Suspense>
        <Skills />
        <Testimonials />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </div>
  )
}



