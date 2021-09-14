import createPersistedState from 'vuex-persistedstate';
import { current } from '~/api';

export default function ( { store } ) {
    let storage = localStorage.getItem( 'autoonline' );

    if ( localStorage.current && localStorage.current != current ) {
        localStorage.clear();
    }

    localStorage.setItem( 'current', true );

    window.onNuxtReady( () => {
        createPersistedState( {
            key: 'autoonline',
            paths: []
        } )( store )
    } )
}