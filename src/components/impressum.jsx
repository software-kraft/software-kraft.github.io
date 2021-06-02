import Modal from "react-modal";
import { useState } from "react";

export const Impressum = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-40%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="container text-center">
        <a href="#" onClick={openModal}>
          Imprint
        </a>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Imprint"
      >
        <div onClick={closeModal}>
          <p>
            <strong>Details pursuant to § 5 TMG:</strong>
            <br />
            Jose Riquelme & Jakub Nieznalski UG <br />
            Knotestraße 16
            <br />
            D-81479 Munich
            <br />
          </p>
          <p>
            <strong>Represented by:</strong>
            <br />
            Jose Riquelme
          </p>
          <p>
            <strong>Contact:</strong>
            <br />
            Email: info&#123;at&#125;software-kraft.com
            <br />
            Website: www.software-kraft.com
          </p>
          <p>
            <strong>Registry entry:</strong>
            <br />
            Entry in the Commercial Register.
            <br /> Register of companies: Munich Local Court (Amtsgericht)
            <br />
            Register No.: HRB 265255
            <br />
          </p>
          <p>
            <strong>VAT ID No.:</strong>
            <br />
            VAT ID No. pursuant to section 27 a of the German Turnover Tax Law
            (UStG): <br />
            (in progress)
          </p>
          <p>
            <strong>Disclaimer</strong>
            <br />
            Information on online dispute resolution: <br />
            The European Commission maintains an online dispute resolution
            platform. This is a central contact point for consumers and
            entrepreneurs who wish to settle disputes, for example in connection
            with an online purchase contract, simply, efficiently and
            inexpensively out of court. The online dispute resolution platform
            is available at the following address:
            <br />
            https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE
            <br />
            We do not participate in any online dispute resolution and are not
            required to do so. For all links to other sites on the Internet,
            woftware-kraft.com expressly declares that it has no influence on
            the design and content of the linked sites. <br />
            Therefore, we hereby expressly distance ourselves from all contents
            of all linked third-party sites on software-kraft.com, do not adopt
            these contents as our own and do not assume any liability or
            guarantee for these third-party contents. This declaration applies
            to all displayed links and to all contents of the pages to which
            links lead.
          </p>
          <p>
            <strong>Website design:</strong> http://www.templatewire.com/
          </p>
        </div>
      </Modal>
    </div>
  );
};
