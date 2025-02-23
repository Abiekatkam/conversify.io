import Footer from "@/components/landing-page/footer";
import FrequentlyAskedQuestions from "@/components/landing-page/frequently-asked-question";
import HeroSection from "@/components/landing-page/hero";
import KeyFeature from "@/components/landing-page/key-feature";
import NavigationBar from "@/components/landing-page/navbar";
import PricingPlans from "@/components/landing-page/pricing-plans";
import Testimonials from "@/components/landing-page/testimonials";
import {
  CurlyArrow,
  CurlyArrow2,
  CurlyArrow3,
  CurlyArrow4,
  CurlyArrow5,
  CurlyArrow6,
} from "@/constants/Icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center selection:bg-neutral-200 selection:text-neutral-900 dark:selection:bg-neutral-800 dark:selection:text-neutral-200">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center w-full">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <span className="hidden md:block absolute z-10 top-40 text-neutral-600 left-[220px] w-[140px] h-[140px] -rotate-[75deg]">
          {CurlyArrow}
        </span>
        <span className="hidden md:block absolute z-10 bottom-12 text-neutral-600 left-[360px] w-[110px] h-[110px] -rotate-[75deg]">
          {CurlyArrow2}
        </span>
        <span className="hidden md:block absolute z-10 top-12 text-neutral-600 left-[35%] w-[110px] h-[110px] rotate-[75deg]">
          {CurlyArrow3}
        </span>
        <span className="hidden md:block absolute z-10 bottom-12 text-neutral-600 right-[360px] w-[130px] h-[130px] -rotate-[110deg]">
          {CurlyArrow4}
        </span>
        <span className="hidden md:block absolute z-10 top-40 text-neutral-600 right-[250px] w-[150px] h-[150px] -rotate-[160deg]">
          {CurlyArrow5}
        </span>
        <span className="hidden md:block absolute z-10 top-12 text-neutral-600 right-[35%] w-[90px] h-[90px] -rotate-[280deg]">
          {CurlyArrow6}
        </span>
        <NavigationBar />
        <HeroSection />
      </div>
      <KeyFeature />
      {/* TODO: how its works sections */}
      {/* <h1>how it works</h1> */}
      {/* TODO: use cases sections */}
      {/* <h1>use cases industrial</h1> */}
      <Testimonials />
      <PricingPlans />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}
