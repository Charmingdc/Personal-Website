import SvgIcons from './SvgIcons.tsx'; 

const ContactSection = () => {
 
  const contactAccounts = [
   { name: 'Github', url: 'https://github.com/Charmingdc'},
   { name: 'Linkedln', url: 'muis' },
   { name: 'Facebook', url: 'muis' },
   { name: 'X ( formerly Twitter )', url: 'muis'},
   { name: 'Reddit', url: 'muis'},
   { name: 'Gmail', url: 'muis' },
  ]
  
  
  return (
    <section>
      <div className='section-headtag'>
        <h3> Contact </h3>
        
         <SvgIcons type='rightDownArrow' width='40px' height='40px' />
      </div>
      
      <h2 className='section-headtitle'> 
        Get in touch 
      </h2>
      
      <p>
        Interested in working together? We should queue up a time to chat. I’ll buy the coffee :)
      </p>
      
      <div className='contacts-container'>
        { 
          contactAccounts.map((account, index) => (
             <div className='contact-div' key={index}> 
               <div> {account.name} </div>
               
               <a href={account.url}>
                <SvgIcons type='trendUp' />
               </a>
             </div>
           ))
        }
      </div>
    </section>
  )
}


export default ContactSection;