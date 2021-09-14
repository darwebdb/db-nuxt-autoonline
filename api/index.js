import axios from 'axios';

const baseDonmain = 'https://dev.darweb.nl';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${ baseDonmain }`;
export const current = 'autoonline';

export default axios.create( {
    baseUrl,
    headers: customHeader
} )