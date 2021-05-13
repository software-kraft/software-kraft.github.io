import Modal from 'react-modal';
import { useState } from 'react'


export const Impressum = () => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  function openModal() {
    setIsOpen(true);
  }
  
  
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div>
            
      <div className='container text-center'>
      <a onClick={openModal}>Impressum</a>
      </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <p>Disclosures pursuant to § 5 TMG:

        Software-kraft.com is run by the company: Jose Riquelme & Jakub Nieznalski UG
        Director: Jose Riquelme 
        Knotestraße 16
        81479 Munich
        </p>
        <p>
        Contact:
        <br/>
        Email: info&#123;at&#125;software-kraft.com
        <br/>
        Website: www.software-kraft.com
        </p>

        <p>
        Entry in the Register:
        German Commercial Register
        Registry Court:  Amtsgericht Munich Register Number: HRB 265255
        Tax ID No. pursuant to §27 a Value Added Tax Act: (in progress)
        </p>
        <p>
        Website design: http://www.templatewire.com/
        </p>
        <p>
        Information on online dispute resolution: <br/>

        The European Commission maintains an online dispute resolution platform. This is a central contact point for consumers and entrepreneurs who wish to settle disputes, for example in connection with an online purchase contract, simply, efficiently and inexpensively out of court. The online dispute resolution platform is available at the following address:
        
        https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE 

        We do not participate in any online dispute resolution and are not required to do so.

        For all links to other sites on the Internet, Software-kraft.com expressly declares that it has no influence on the design and content of the linked sites. Therefore, we hereby expressly distance ourselves from all contents of all linked third-party sites on software-kraft.com, do not adopt these contents as our own and do not assume any liability or guarantee for these third-party contents. This declaration applies to all displayed links and to all contents of the pages to which links lead.
        </p>
      </Modal>

    </div>
  )
}
