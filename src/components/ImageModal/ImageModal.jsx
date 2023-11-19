import Modal from 'react-modal';
import { ModalImgWrap } from './ImageModal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1200',
    // cursor: 'zoom-out',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    border: 'none',
    borderRadius: '8px',
    background: 'transparent',
    overflow: 'hidden',
    padding: '0',
    // maxWidth: 'calc(100vw - 48px)',
    // maxHeight: 'calc(100vh - 24px)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, imageURL, imageDescription }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <ModalImgWrap>
        <img src={imageURL} alt={imageDescription} />
      </ModalImgWrap>
    </Modal>
  );
};
