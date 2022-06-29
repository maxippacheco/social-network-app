import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { handleFollowUser, handleUnfollowUser } from '../actions/auth';
import { User } from '../interfaces/interfaces';

export const useFollow = (userToFollow: User) => {

  const user_inSession = useSelector( ( state: RootState) => state.auth );
  const dispatch: any = useDispatch();

  const [ isFollowed, setIsFollowed ] = useState( false );



  const followUser = ( id: string ) => {
    dispatch(handleFollowUser( id ));
  }

  const unfollowUser = ( id: string ) => {
    dispatch(handleUnfollowUser( id ));
  }  

  useEffect(() => {
    if( user_inSession.user?.following.find( item => item === userToFollow?.id ) ){
      setIsFollowed( true );
      
    }else{
      setIsFollowed( false );
    }
    
  }, [ user_inSession, userToFollow ]);
  

  const switchFollow = () => { 
  
    if( !isFollowed ) {
      followUser(userToFollow?.id || '');
    } else {
      unfollowUser(userToFollow?.id || '');
    }
    
  }
  
  
  const handleFollowStatus = (user: User) => {
    if( !user ) return;

    console.log( user )
    const inStorage = user.followers.find( item => item === user_inSession?.user?.id );


    if(isFollowed){
      if(inStorage){
        return user.followers.length;
      }else{
        return user.followers.length + 1;
      }

    }else{
      
      if(inStorage){ 
        return user.followers.length - 1;
      }else {
        return user.followers.length;
      }

    }
  }

	return {
		isFollowed,
		switchFollow,
		handleFollowStatus
	}

  
}