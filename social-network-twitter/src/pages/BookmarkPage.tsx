import { useState } from 'react';
import { ChangeEvent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { MainLayout } from "../layout/MainLayout";
import { BookmarkCard } from "../components/bookmark";
import { handleCreateBookmark, handleChangeCurrentBookmark } from '../actions/bookmark';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { FormEvent } from 'react';
import { Formik, Form } from 'formik';
import { CustomSelect } from '../components/input/CustomSelect';

export const BookmarkPage = () => {

   const [isOpened, setIsOpened] = useState(false);
   const [inputValue, setInputValue] = useState('');
   
   const dispatch = useDispatch();
   const { userBookmarks } = useSelector( (state: RootState) => state.bookmarks);

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   }

   const toggle = () => {
      setIsOpened(!isOpened);
      
   }

   const createBookmark = () => {

      if(inputValue.length > 0) {
         dispatch(handleCreateBookmark(inputValue));   
         setInputValue('');
      }
   }


   return (
      <MainLayout>
         <>
            <h1 className="mt-5 ml-5 mb-5 text-5xl text-white font-bold">
               Your bookmarks
            </h1>

            <div className="grid grid-cols-3 gap-2 mr-2 ml-2">
               {
                  userBookmarks.map( (bookmark) => (
                     <BookmarkCard { ...bookmark } key={ bookmark.id } />
                  ))
               }

            </div>
               <Formik
                  initialValues={{
                     currentBookmark: '',
                     bookmarkId: ''
                  }}
                  onSubmit={ ({bookmarkId, currentBookmark}, { setValues }) => {
                     
                     const id = userBookmarks.filter(item => item.folder === currentBookmark )[0].id;

                     if( id ){
                        setValues({ currentBookmark, bookmarkId: id });
                     }

                     dispatch( handleChangeCurrentBookmark( bookmarkId ));
                     Swal.fire('Done!', 'Current bookmark succesfully changed', 'success');
                  }}
                  >
                  {  
                     ({ setValues }) => (                     
                           <Form className='flex justify-center my-4 items-center'>
                              <h3 className='text-xl text-gray-500 pr-3'>Your current bookmark: </h3>
                                 <CustomSelect
                                    label=''
                                    name='currentBookmark'
                                 >
                                    <option defaultValue=''>Open this select menu</option>
                                    {
                                       userBookmarks.map( (bookmark) => (
                                          <option key={ bookmark.id }>{ bookmark.folder }</option>
                                       ))
                                    }   
                                 </CustomSelect>
                              <button 
                                 className='bg-sky-500 text-white text- px-5 py-1 rounded-lg'
                                 type="submit"
                              >Save</button>
                           </Form>                        

                     )
                  }
               </Formik>
            <div className="w-full text-center p-2">
              <button 
                 className="bg-slate-800 p-2 pr-4 pl-4 text-xl text-white hover:bg-slate-700 cursor-pointer"
                 onClick={toggle}
              >Create a new bookmark</button>
            </div>
               {
                  isOpened && (
                     <>
                        <form className="mt-5 flex items-center flex-col" onSubmit={(ev) => ev.preventDefault()}>
                           <input 
                              type="text" 
                              className="w-4/5 p-2.5 bg-slate-900 border focus:outline-none focus:text-white text-gray-700" 
                              onChange={onChange}
                           />

                           <div className="mt-7">
                              <button 
                                 className="bg-slate-800 p-2 pr-4 pl-4 text-xl text-white mr-4 hover:bg-green-800 cursor-pointer"
                                 onClick={ createBookmark }
                              >Create a new one</button>
                              <button 
                                 className="bg-slate-800 p-2 pr-4 pl-4 text-xl text-white hover:bg-red-800 cursor-pointer"
                                 onClick={() => setIsOpened(false)}   
                              >Cancel</button>

                           </div>
                        </form>                     
                     </>
                  )
               }

         </>
      </MainLayout>
   );
};
