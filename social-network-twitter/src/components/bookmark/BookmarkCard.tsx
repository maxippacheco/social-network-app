import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../NavIcon/Icon';
import { Bookmark } from '../../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';


export const BookmarkCard = (bookmark: Bookmark) => {
   
   const navigate = useNavigate();
   
   return (
      <div 
         className="p-5 h-32 bg-slate-800 flex flex-col justify-center items-center text-white rounded-lg 
                  hover:bg-slate-700 cursor-pointer"
         onClick={() => navigate(`/bookmarks/${bookmark.id}`)}                  
      >
         <Icon name={faFolderOpen} size="2x" />
         <span className="mt-2">{ bookmark.folder }</span>
      </div>
   );
};
