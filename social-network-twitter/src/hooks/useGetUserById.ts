import { useState, useEffect } from 'react';
import { fetchWithoutToken } from '../helpers/fetch';
import { User } from '../interfaces/interfaces';

export const useGetUserById = ( username: string ) => {

  const [user, setUser] = useState<User>();


  const getUserByUsername = async() => {
    const resp = await fetchWithoutToken({endpoint: `auth/${username}`, method: 'GET', data: {} });

    if(resp.ok){
      setUser(resp.user);
    }
  }

  useEffect(() => {
    getUserByUsername();  

  }, [user]);


  	return {
		user,
		setUser
 	};


}