import { IconType } from "react-icons";

const Icons = ({ icon: Icon }: { icon: IconType }) => {
  return (
    <i className="mr-3 w-7 h-7">
      <Icon className="w-full h-full" />
    </i>
  );
};

export default Icons;
