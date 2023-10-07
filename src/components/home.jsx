import About from "./about"
import NewsLetter from "./newsletter"
import Teams from "./teams"
import TopPage from "./top_page"

function Home (){
    return (
        <>

           <TopPage />
           <About /> 
           <Teams />
           <NewsLetter />
        </>
    )
}

export default Home