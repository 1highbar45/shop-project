import { useState, useEffect } from 'react'

const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
    const [data, setData] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [paginate, setPaginate] = useState()
    useEffect(() => {
        reFetch()
    }, dependencyList)

    const reFetch = () => {
        setLoading(true)
        callback()
            .then(res => {
                // console.log(res);
                setData(res?.data)
                if (res?.paginate) {
                    // setPaginate(res.data?.paginate)
                    setPaginate(res?.paginate)
                }
                setLoading(false)
            })
    }

    return {
        data,
        loading,
        paginate,
        reFetch
    }
}

export default useQuery