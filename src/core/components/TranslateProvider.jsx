import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext({
    selectLanguage: (lang = 'en') => { },
    local: 'en',
    _t: (k = '') => k
})

const LANG_SERVICE_KEY = 'lang' 

export const TranslateProvider = ({ local = 'en', translate = {}, children }) => {
    const [_local, setLocal] = useState(localStorage.getItem(LANG_SERVICE_KEY) || local)

    useEffect(() => {
        localStorage.setItem(LANG_SERVICE_KEY, _local)
    }, [_local])

    const selectLanguage = (local) => {
        setLocal(local)
    }

    const _t = (k) => translate?.[_local]?.[k] || k

    return <Context.Provider value={{ selectLanguage, local: _local, _t }}>{children}</Context.Provider>
}

export const useTranslate = () => useContext(Context)