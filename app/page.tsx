import ContactPage from "./contact/page";
import Service from "./home/components/service/service";
import HomePage from "./home/page";
import NavbarPage from "./navbar/page";
import RevenuePage from "./revenue/page";
// import Navbar from "./navbar/navbarPage";


export default function Home() {
  return (
    <main className=" bg-gray-800 p-7">
    
      <NavbarPage />
      <HomePage/>
      <Service/>
      <ContactPage/>
      <RevenuePage/>

    </main>
  )
}
