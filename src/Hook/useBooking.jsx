import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
    const {user,loading} = useContext(AuthContext)
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure(`/selfBooking?email=${user?.email}`)
            return res.data;
        },
      })
      return [booking, refetch]
};

export default useBooking;