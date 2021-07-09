import SideBar from "../components/sideBar";
import MainList from "../components/MainList";
import Header from '../components/Header'
import About from "../components/About";
import Contact from "../components/Conatct";
import Footer from "../components/footer";

import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'

const HomePage = () => {
  const queryClient = new QueryClient()


  return (
  
    <div class="container"> 

    <Header /> 

      <SideBar />
      <QueryClientProvider client={queryClient}>

    <MainList />
    </QueryClientProvider>

    <About /> 
<Contact />
<Footer /> 

</div>
  )
  
   }
  
  export default HomePage;