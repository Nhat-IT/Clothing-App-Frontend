const allCategory = ()=>{
    const dummyCate = [
        {
            id : 1,
            title : 'outerwear',
            typeId : [1,2]
        },
        {
            id : 2,
            title : 'Fleece',
            typeId : [1,2]
        },
        {
            id : 3,
            title : 'Sweaters',
            typeId : [1,2]
        },
        {
            id : 4,
            title : 'T-shirts',
            typeId : [1,2]
        },
        {
            id : 5,
            title : 'Activewear',
            typeId : [1,2]
        },
        {
            id : 6,
            title : 'Dress',
            typeId : [2]
        },
        {
            id : 7,
            title : 'jacket',
            typeId : [1,2]
        },
        {
            id : 8,
            title : 'Belts',
            typeId : [1],
        },
        {
            id : 9,
            title : 'Shoes',
            typeId : [1],
        },
        {
            id : 10,
            title : 'Jumpsuits',
            typeId : [1,2],
        },
        {
            id : 11,
            title : 'Under wear',
            typeId : [1,2],
        },
        {
            id : 12,
            title : 'Item',
            typeId : [1,2],
        }
        
    ]
    return dummyCate
}
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
const getType = ()=>{
    const dummyCategory = [
        {
            id : 1,
            value : 'Men'
        },
        {
            id : 2,
            value : 'Women'
        },
        {
            id : 3,
            value : 'Kids'
        },
        {
            id : 4,
            value : 'Baby'
        }
    ]
    return dummyCategory
}
const getMyorder = ()=>{
    const orderDummy = [
        {
            id : 1,
            created_at : new Date(Date.now()).toDateString(),
            modified_at : new Date(Date.now()).toDateString(),
            amount : 50000,
            status  : 'Shipping',
            name  : 'Touk',
            address  : '60 Ngo Si Lien',
            userId  : 2,
            mobile : '0343409259'
        },
        {
            id : 2,
            created_at : new Date(Date.now()).toDateString(),
            modified_at : new Date(Date.now()).toDateString(),
            amount : 60000,
            status  : 'Received',
            name  : 'Ning',
            address  : '60 Ngo Si Lien',
            userId  : 2,
            mobile : '0343409259'
        },
        {
            id : 3,
            created_at : new Date(Date.now()).toDateString(),
            modified_at :new Date(Date.now()).toDateString(),
            amount : 7000000,
            status  : 'Received',
            name  : 'Ning',
            address  : '60 Ngo Si Lien,Hòa Khánh Bắc,Liên Chiểu, Đà Nẵng',
            userId  : 2,
            mobile : '0343409259'
        }
       
    ]
    return orderDummy;
}
export const DbService = {
    getCartDummy,
    getType,
    allCategory,
    getMyorder
}