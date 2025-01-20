import SvgIcons from './SvgIcons.tsx';

const ServiceSection = () => {
  return (
    <section>
      <div className='section-headtag'>
        <h3> Services </h3>
        
        <SvgIcons type='rightDownArrow' />
      </div>
      
      <h1 className='section-headtitle'>  Creating impactful projects 
      </h1>
      
      
      <p>
        Here are some of the services I offer :)
      </p>
      
     
      <div className='services-container'>
        <div>
          <h2> Web Development </h2>
          
          <p>
           I design and craft beautiful websites and seamless experiences with ReactJs, CSS, Tailwind, Typescript, and JavaScript.
          </p>
        </div>
        
        <div>
          <h2> API Integrations </h2>
          
          <p>
            Integrating backend services and APIs to the frontend securely to fetch and display data in real time.
          </p>
        </div>
        
        <div>
          <h2> Responsive Design </h2>
          
          <p>
            Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.
          </p>
        </div>
        
        <div>
          <h2> Version Control </h2>
          
          <p>
            Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.
          </p>
        </div>
       
      </div>
    </section>
  )
}


export default ServiceSection;