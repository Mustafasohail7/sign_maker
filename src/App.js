import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Element } from 'react-scroll'

//stylesheet
import './styles/App.css'


//components
import Header from './components/Header'
import TagLine from './components/TagLine'
import TextDisplay from './components/TextDisplay'
import VideoPlayer from './components/VideoPlayer'
// import ProcessModelMain from './components/ProcessModelMain'
import PortfolioGrid from './components/Portfolio_Grid/PortfolioGrid'
import FeatureGrid from './components/Feature_Grid/FeatureGrid'
import TagLine3 from './components/TagLine3'
// import DescriptionText from './components/Description_Text/DescriptionText'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import HomeIcon from './components/HomeIcon'
import SizeDisplay from './components/SizeDisplay'

function App() {

  return (
    <ChakraProvider theme={extendTheme({
      styles: {
        global: {
          body: {
            bg: '#111111',
          }
        }
      },
    })}>
      <div>
      <HomeIcon/>
      <Element name='home'>
        <Header/>
      </Element>
      <TagLine/>
      <TextDisplay />
      <SizeDisplay/>
      <Element name='features'>
        <FeatureGrid/>
      </Element>
      <VideoPlayer/>
      <TagLine3/>
      {/* <ProcessModelMain /> */}
      <Element name='portfolio'>
        <PortfolioGrid/>
      </Element>
      <div className="static-bg-1"/>
      {/* <Element name='description'>
        <DescriptionText/>
      </Element> */}
      {/* <div className="static-bg-2"/> */}
      <Element name='faq'>
        <FAQ/>
      </Element>
      <Element name='about'>
        <Footer/>
      </Element>
      </div>
    </ChakraProvider>
  );
}

export default App;
