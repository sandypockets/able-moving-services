import ContactForm from '../components/ContactForm'
import SecondaryNav from '../components/SecondaryNav'
import Footer from "../components/Footer";
import ContactDetails from "../components/ContactDetails";

export default function Contact() {
  return (
    <div>
      <SecondaryNav />
      {/*<ContactForm />*/}
      <ContactDetails />
      <Footer />
    </div>
  )
}