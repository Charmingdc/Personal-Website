import SvgIcons from './SvgIcons.tsx';
import ToolBox from './ToolBox.tsx';



const ResumeSection = () => {
  const tools = [
    { iconUrl: '/icons/icon-html.svg', altText: 'Html' },
    { iconUrl: '/icons/icon-css.svg', altText: 'Css' },
    { iconUrl: '/icons/icon-js.png', altText: 'JavaScript' },
    { iconUrl: '/icons/icon-typescript.png', altText: 'Typescript' },
    { iconUrl: '/icons/icon-tailwind.png', altText: 'Tailwindcss' },
    { iconUrl: '/icons/icon-react.png', altText: 'ReactJs' },
    { iconUrl: '/icons/icon-firebase.png', altText: 'Firebase' },
    { iconUrl: '/icons/icon-github.png', altText: 'Github' },
    { iconUrl: '/icons/framer.png', altText: 'Framer' },
    { iconUrl: '/icons/etc.png', altText: 'And others' },
  ];
  
  
  return (
    <section>
      <div className='section-headtag'>
        <h3> Resume </h3>
        <SvgIcons type='rightDownArrow' />
      </div>
      
      <h2 className='section-headtitle'>
        The digital journey 
      </h2>
      
      
      
      { /** rsume tools section **/ }
      <p className='resume-tags'>
       [ My favourite tools ]
      </p>
      
      <div className='tools-container'>
        { 
         tools.map((tool, index) => (
           <ToolBox key={index} toolDetails={tool} />
         ))
        }
      </div>
    </section>
  )
}

export default ResumeSection;