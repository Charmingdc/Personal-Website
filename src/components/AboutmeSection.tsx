import SvgIcons from './SvgIcons.tsx';

const AboutmeSection = () => {
  return (
    <section>
   
      <div className='section-headtag'>
        <h3> About me </h3>
        
        <SvgIcons type='rightDownArrow' width='40px' height='40px' />
      </div>
      
      <h1 className='section-headtitle'> Approach and philosophy </h1>
     

      <div className="about-section-brief">
        <img src='/illustrations/charmingdc.jpg' alt='Adebayo Muis ( Charmingdc )' />
        
        <ul>
          <li> 
            <strong> Name: </strong>
            'Adebayo Muis': string,
          </li>
          <li> 
            <strong> Alias: </strong> 'Charmingdc': string,
          </li>
          <li>
            <strong> Hobby: </strong>
            ['Coding', 'Reading', 'Drawing']: string[],
          </li>
          <li>
           <strong> Years of exp: </strong>
            '2+': string,
          </li>
          <li> 
            <strong> Lines of code: </strong>
            '10,000+': string,
          </li>
        </ul>
      </div>
      
      <div className='about-section-info'>
          <p>
            About me? I am a dedicated and creative web developer with a strong foundation in JavaScript, TypeScript, React, and Firebase. My passion lies in building user-friendly, scalable applications that solve real-world problems.
          </p>

          <p>
            With a focus on frontend development and a growing interest in backend technologies, I aim to create meaningful digital experiences. I value clean, maintainable code and love turning innovative ideas into functional solutions.
          </p>

          <p>
            Driven by curiosity and a desire for continuous growth, I’m always exploring new tools, frameworks, and ways to improve my craft.
          </p>
      </div>
    </section>
  )
}

export default AboutmeSection;