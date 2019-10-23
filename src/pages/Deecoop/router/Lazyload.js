import React from 'react';
import Bundle from './Bundle';
import Loading from '@/components/Loading/Loading'


const lazyLoad = loadComponent => props => (
    <Bundle load={loadComponent}>
        {Comp => (Comp ? <Comp {...props} /> : <Loading />)}
    </Bundle>
);


export default lazyLoad;