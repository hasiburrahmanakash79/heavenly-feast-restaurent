import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useHistory = () => {
    const {user,loading} = useContext(AuthContext)
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: history = [] } = useQuery({
        queryKey: ['history', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure(`/history?email=${user?.email}`)
            // console.log('res from axios', res);
            return res.data;
        },
      })
      return [history, refetch]
};

export default useHistory;