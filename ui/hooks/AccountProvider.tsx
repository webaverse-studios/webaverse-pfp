'use client'
import React, { useState, useEffect, createContext } from 'react';

export const AppContext = createContext<any>({});

export default function AccountProvider ({ children }: { children: React.ReactNode }) {
    const [ account, setAccount ] = useState(null)
    const [ library, setLibrary ] = useState(null)
    const [ provider, setProvider ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ whitelist, setWhitelist ] = useState(null)
    const [ coldwallets, setColdwallets ] = useState(null)

    const AppContextValues = {
        account,
        setAccount,
        library,
        setLibrary,
        provider,
        setProvider,
        loading,
        setLoading,
        whitelist,
        setWhitelist,
        coldwallets,
        setColdwallets
    };

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    )
}

