import Footer from "@/components/landing-page/footer";
import FrequentlyAskedQuestions from "@/components/landing-page/frequently-asked-question";
import HeroSection from "@/components/landing-page/hero";
import KeyFeature from "@/components/landing-page/key-feature";
import NavigationBar from "@/components/landing-page/navbar";
import NewsLetter from "@/components/landing-page/newsletter";
import PricingPlans from "@/components/landing-page/pricing-plans";
import Testimonials from "@/components/landing-page/testimonials";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center selection:bg-neutral-200 selection:text-neutral-900 dark:selection:bg-neutral-800 dark:selection:text-neutral-200">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center w-full">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
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
      <NewsLetter/>
      <Footer />
    </main>
  );
}
