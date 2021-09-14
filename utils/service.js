/**
 * function to get product for certain attribute
 */
export function getProductsByAttri( products, attri = "is_hot" ) {
    return products.filter( item => item[ attri ] === true );
}

/**
 * function to get top selling products
 */
export function getTopSellingProducts( products ) {
    return products.sort( ( product1, product2 ) => {
        return product2.sales < product1.sales ? -1 : 1;
    } );
}

/**
 * function to get top rated products
*/
export function getTopRatedProducts( products ) {
    return products.sort( ( product1, product2 ) => {
        return product2.ratings < product1.ratings ? -1 : 1;
    } );
}

/**
 * function to get product with slug
 */
export function getProductBySlug( products, slug ) {
    return products.filter( item => item.slug === slug )[ 0 ];
}

/**
 * function to get most viewed products
 */
export function getMostViewedProducts( products ) {
    return products.sort( ( product1, product2 ) => {
        return product2.reviews < product1.reviews ? -1 : 1;
    } );
}

/**
* function to get product for certain category
*/
export function getProductsByCategory( products, category ) {
    let originCat = category;
    if ( category === "All" ) return products;

    if ( -1 !== category.indexOf( '&' ) ) {
        category = category.split( ' & ' );
    }

    return products.filter( item => {
        let result = false;

        if ( Array.isArray( category ) ) {
            for ( let i = 0; i < category.length; i++ ) {
                if ( -1 !== item.product_categories.findIndex( item => item.name === category[ i ] ) ) {
                    result = true;
                }
            }
        } else {
            if ( -1 !== item.product_categories.findIndex( item => item.name === category ) )
                result = true;
        }
        return result;
    } );
}