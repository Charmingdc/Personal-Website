import SvgIcons from './SvgIcons.tsx';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <p> Hi, 👋</p>
      <p> I'm Adebayo Muis </p>
      
      <h1>
        ℂ𝕣𝕖𝕒𝕥𝕚𝕧𝕖 𝔽𝕣𝕠𝕟𝕥𝕖𝕟𝕕 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣
      </h1>
      
      
      <a href='https://x.com/Charmingdc01' className='hero-xlink'> Say Hi on <span> 𝕏 </span> </a>
      
      <p> Scroll for more 
       <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 17.2l-7.7-7.7-4 4-5.7-5.7"/><path d="M15 18h6v-6"/></svg>
       </span> 
      </p>
    </section>
  )
}

export default HeroSection