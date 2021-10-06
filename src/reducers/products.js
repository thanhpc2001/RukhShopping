import * as types from './../constants/ActionTypes'

var initialState = [
    // {
    //     id: "bb1b-3f95",
    //     name: "Bò Úc tươi xay nhuyễn Pacow 250g",
    //     price: "69500",
    //     image: "https://cdn.tgdd.vn/Products/Images/8139/239160/bhx/thit-bo-uc-xay-khay-250g-202106220758175140_300x300.jpeg",
    //     description: "",
    //     quantity: 169,
    //     date: "",
    //     code: "code_1_1",
    //     classify: "beef"
    // },
    // {
    //     id: "63d8-cf44",
    //     name: "Thăn bò nhập khẩu đông lạnh 500g",
    //     price: "152000",
    //     image: "https://cdn.tgdd.vn/Products/Images/8139/248986/bhx/than-bo-nhap-khau-dong-lanh-tui-1kg-202108181905441583_300x300.jpeg",
    //     description: "",
    //     quantity: 260,
    //     date: "",
    //     code: "code_1_1",
    //     classify: "beef"
    // },
    // {
    //     id: "66c6-dc1b",
    //     name: "Bò Úc tươi cắt lát Pacow khay 250g",
    //     price: "99000",
    //     image: "https://cdn.tgdd.vn/Products/Images/8139/239162/bhx/bo-uc-xao-khay-250g-202106220856383238_300x300.jpeg",
    //     description: "",
    //     quantity: 273,
    //     date: "",
    //     code: "code_1_1",
    //     classify: "beef"
    // }
]

const products = (state=initialState, action)=>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products
            return [...state]
        default:
            return [...state]
    }
}

export default products;