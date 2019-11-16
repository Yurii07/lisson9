import React from 'react'
import { StorageContext } from './StorageWrapper';
import Helmet from "react-helmet";


const CatsProvider = ( params ) => ( Component ) => {
    console.log( params );
    return () => (
            <>
                <Helmet>
                    <title>{params.title}</title>
                </Helmet>
                <Component/>
            </>
    );
};

export default CatsProvider;