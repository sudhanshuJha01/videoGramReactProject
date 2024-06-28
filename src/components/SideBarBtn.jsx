import { useDispatch } from 'react-redux';
import { changeFeed } from '../features/feedSlice';

const SideBarBtn = ({ icon, label }) => {
  const dispatch = useDispatch();

  const handleChangeFeed = (label) => {
    dispatch(changeFeed(label));
    console.log(label);
  };

  return (
    <div 
      onClick={() => handleChangeFeed(label)} 
      className="flex items-center justify-start gap-3 cursor-pointer hover:bg-slate-900 p-1 rounded-md"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default SideBarBtn;
