import { Button } from "react-bootstrap";

const CustomButton = ({ title, icon ,size , className='',...props}) => {
  return (
    <Button className={`sarab-btn-primary px-4 py-2 d-flex align-items-center gap-2 border-0 ${className}`} {...props} size={size} >
      {icon} {title}
    </Button>
  );
};

export default CustomButton;
