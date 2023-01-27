import { useState } from 'react'
import axios from "axios";
import Loader from '../../shared/Loader';

interface IInterceptorProps {
    children: React.ReactNode
}

function Interceptor({ children }: IInterceptorProps) {

    const [loading, setLoading] = useState<boolean>(false);
    /**
     * @description intercepting the request
     */
    // axios.interceptors.request.use((req: any) => {
    //     setLoading(true);
    //     axios.defaults.headers.common['author'] = "Tanmay Patel";
    //     return req;
    // })

    axios.interceptors.request.use((config: any) => {
        setLoading(true);
        axios.defaults.headers.common['Author'] = "Tanmay Patel";
        return config;
    }, (error) => {
        console.log(error);
        return Promise.reject(error)
    })

    /**
     * @description intercepting the response
     */
    // axios.interceptors.response.use((res: any): any => {
    //     setLoading(false);
    //     return res;
    // });
    axios.interceptors.response.use((config: any) => {
        setLoading(false);
        return config;
    }, (error) => { return Promise.reject(error) });

    /**
     * @description loading condition
     */
    if (loading) {
        return <Loader />
    };
    return (
        <div>
            {children}
        </div>
    )
};

export default Interceptor;
