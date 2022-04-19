import { createContext, useContext, useState } from 'react'

const Context = createContext({
    selectLanguage: (lang = 'en') => { },
    local: 'en',
    _t: (k = '') => k
})

// translate = {
//     en: {},
//     vi: { "Home": "Trang chủ" }
// }

export const TranslateProvider = ({ local = 'en', translate = {}, children }) => {
    const [_local, setLocal] = useState(local)

    const selectLanguage = (local) => {
        setLocal(local)
    }

    const _t = (k) => translate?.[_local]?.[k] || k

    return <Context.Provider value={{ selectLanguage, local: _local, _t }}>{children}</Context.Provider>
}

export const useTranslate = () => useContext(Context)