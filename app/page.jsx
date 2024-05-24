import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// COMPONENTS
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* LEFT SIDE CONTENT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            {/* TEXT CONTENT */}
            <span className="text-4xl">
              Hello, I'm
            </span>
            <h1 className="h1 mb-2">
              <span className="text-accent">Achira Wijesuriya</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80">
              Developer | Writer | Announcer
            </p>
            <p className="max-w-[600px] mb-8 text-white/80">
              A full stack developer and student from Sri Lanka currently based in Colombo studying towards a BSc. Information Technology.
            </p>

            {/* BUTTON AND SOCIAL ICONS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              
              {/* RESUME */}
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span><a href="https://drive.google.com/uc?export=download&id=1e__lM056P4VuAv2L-qnmb-QXXNHgx-C6" target="_blank">Resume</a></span>
                <FiDownload className="text-xl"/>
              </Button>

              {/* SOCIAL */}
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT - IMAGE */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home