// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import Hero from "@/components/home/Hero"
import Skills from "@/components/home/Skills"
import Testimonials from "@/components/home/Testimonials"
import CTA from "@/components/home/CTA"
import Projects from "@/components/home/Projects";
import Loader from "@/components/global/Loader";

export default async function Page() {

  return (
    <div>
      <Hero />
      <div className="mt-20 space-y-24 mx-auto">

          <Projects/>
        <Skills />
        <Testimonials />
       
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </div>
  )
}



