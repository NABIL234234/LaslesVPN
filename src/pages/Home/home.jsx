import Feature from "./Features/Feature";
import Global from "./Global/Global";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
// import Test from "./Test";
import Testimonials from "./Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Feature />
        <Pricing />
        <Global />
        <Testimonials /> 
        {/* <Test/> */}
      </main>
    </>
  );
}
