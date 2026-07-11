import { Modal } from "react-bootstrap";
const CustomModal = ({
  title,
  onHide,
  show,
  size = "md",
  children,
  ...props
}) => {
  return (
    <Modal show={show} onHide={onHide} size={size} centered {...props}>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body className="p-0">{children}</Modal.Body>
    </Modal>
  );
};
export default CustomModal;
