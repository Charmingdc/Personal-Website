const AboutmeSection = () => {
  return (
    <section>
      <div className='section-headtag'>
        <h3> About me </h3>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l9.2 9.2M17 7v10H7"/></svg>
      </div>
      
      <h1 className='section-headtitle'> Approach and philosophy </h1>
      
      <div className='about-section-container'>
        <div></div>
        
        <div>
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
      </div>
    </section>
  )
}

export default AboutmeSection;