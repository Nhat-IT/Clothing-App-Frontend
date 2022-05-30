
const getCartDummy = ()=>{
    const dummyCart = [
        { id : 1,
        name : 'Denim Long-Sleeve',
        category : 'Shirt Dress',
        imageUrl : 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/440493/sub/vngoods_440493_sub8.jpg?width=1600&impolicy=quality_75',
        color : {name : 'Dark gray',
        code : '#a9a9a9'},
        size : 'S',
        quantity : 1,
        price : 39.90},
        { id : 2,
            name : 'Drape crew neck',
            category : 'short-sleeve T-shirt',
            imageUrl : 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/440493/item/vngoods_08_440493.jpg?width=1600&impolicy=quality_75',
            color : {name : 'Dark green',
            code : '#013220'},
            size : 'S',
            quantity : 2,
            price : 14.90},
            { id : 3,
                name : 'Drape crew neck',
                category : 'short-sleeve T-shirt',
                imageUrl : 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441464/item/goods_58_441464.jpg?width=1600&impolicy=quality_75',
                color : {name : 'Dark green',
                code : '#013220'},
                size : 'S',
                quantity : 1,
                price : 14.90}
    ]
    return dummyCart
}
export const DbService = {
    getCartDummy
}