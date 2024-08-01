import { Modal } from "flowbite-react";
// import ambulanceImage from './public/assets/ambulance.png';


export function ModalComponent({openModal, setOpenModal, modalPlacement}) {
  
  return (
    <>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>
            <div className="flex justify-center items-center">
                <img src="/assets/emergency.png" alt="emergency icon" className="w-16 mb-2" />
                <h3 className="font-bold text-2xl"> Emergency <span className="md:inline-block hidden">Button</span></h3>
            </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-3">
            <a href="https://wa.link/gy82sh" target="_blank" className="px-3 flex justify-start items-center gap-3 shadow-md cursor-pointer hover:opacity-80">
                <img src="/assets/ambulance.png" alt="" className="w-16 mr-1"/>
                <h3 className="md:text-xl text-lg font-semibold flex flex-wrap"><span className="mr-1.5">Ambulance</span> <span>(0822-7801-4722)</span></h3>
            </a>

            <a href="https://wa.link/ox5h2v" target="_blank" className="px-3 flex justify-start items-center gap-3 shadow-md cursor-pointer hover:opacity-80">
                <img src="/assets/fireFighter.png" alt="" className="w-16 mr-1"/>
                <h3 className="md:text-xl text-lg font-semibold flex flex-wrap"><span className="mr-1.5">Fire Fighter</span> <span>(0858-1700-0942)</span></h3>
            </a>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
