import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../components/NavIcon/Icon";
import { MainLayout } from "../layout/MainLayout";

export const BookmarkPage = () => {
   return (
      <MainLayout>
         <>
            <h1 className="mt-5 ml-5 mb-5 text-5xl text-white font-bold">
               Your bookmarks
            </h1>

            <div className="grid grid-cols-3 gap-2 mr-2 ml-2">
               <div className="p-5 h-32 bg-slate-800 flex flex-col justify-center items-center text-white rounded-lg hover:bg-slate-700 cursor-pointer">
                  <Icon name={faFolderOpen} size="2x" />
                  <span className="mt-2">Default</span>
               </div>
               <div className="p-5 h-32 bg-slate-800 flex justify-center items-center text-white rounded-lg">
                  <Icon name={faFolderOpen} size="2x" />
               </div>
               <div className="p-5 h-32 bg-slate-800 flex justify-center items-center text-white rounded-lg">
                  <Icon name={faFolderOpen} size="2x" />
               </div>
               <div className="p-5 h-32 bg-slate-800 flex justify-center items-center text-white rounded-lg">
                  <Icon name={faFolderOpen} size="2x" />
               </div>
               <div className="p-5 h-32 bg-slate-800 flex justify-center items-center text-white rounded-lg">
                  <Icon name={faFolderOpen} size="2x" />
               </div>
               <div className="p-5 h-32 bg-slate-800 flex justify-center items-center text-white rounded-lg">
                  <Icon name={faFolderOpen} size="2x" />
               </div>
            </div>

            <div className="w-full mt-5 text-center p-2">
              <span className="bg-slate-800 p-2 pr-4 pl-4 text-xl text-white">Create a new bookmark</span>
            </div>

         </>
      </MainLayout>
   );
};
