export const parseSnapShot = ( data ) => {
    
    const items = [];

    data.forEach( child =>{ 
        items.push({
            id: child.id,
            ...child.data()
        })
    });

    return items;
}