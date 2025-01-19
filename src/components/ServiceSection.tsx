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
      
      
      <div className='services-container'>
        <div>
          <h2> Web Development </h2>
        </div>
        
        <div>
          <h2> API Integrations </h2>
        </div>
        
        <div>
          <h2> Responsive Design </h2>
        </div>
        
        <div>
          <h2> Version Control </h2>
        </div>
        
        <div>
          <h2> Technical Support </h2>
        </div>
        
        <div>
          <h2> Continous Learning </h2>
        </div>
      </div>
    </section>
  )
}


export default ServiceSection;