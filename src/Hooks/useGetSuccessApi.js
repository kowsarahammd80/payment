import  { useEffect, useState } from 'react';

const useGetSuccessApi = () => {
    const [successDatas, setSuccessDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        setLoading(true)
        fetch('https://payapi.watheta.com/api/getPaymentSuccessData')
        .then(res=>res.json())
        .then(data=>{
            setSuccessDatas(data.payments)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    }, [])
    return[successDatas, loading] 
};

export default useGetSuccessApi;