import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
export const navbarTop = [
    {
        name: 'SHOP',  link: 'shop'
    },{
        name:'NINOMAXX', link: 'ninomaxx'
    },{
        name:'N&M', link: 'n&m'
    },{
        name:'N&M CLUB', link: 'n&m-club'
    },{
        name:'SWEET SIXTEEN', link: 'sweet-sixteen'
    }   
]
export const navbarBottom = [
    {
        name: 'NEW',  link: 'new', 
        parent:[
            {
                name: 'Hàng mới',  link: 'hang-moi'
            },{
                name: 'Hi summer Nữ',  link: 'hi-summer-nu'
            },{
                name: 'Hi summer Nam',  link: 'hi-summer-nam'
            },{
                name: 'Polo',  link: 'polo'
            },{
                name: 'Chất liệu',  link: 'chat-lieu'
            },{
                name: 'Bộ sưu tập',  link: 'bo-suu-tap'
            },{
                name: 'Nam',  link: 'nam'
            },{
                name: 'Nữ',  link: 'nu'
            },{
                name: 'Trẻ em',  link: 'tre-em'
            }
        ]
    },{
        name: 'BRANDS',  link: 'brands',
        parent:[
            {
                name: 'Ninomaxx',  link: 'ninomaxx'
            },{
                name: 'N&M',  link: 'n&m'
            },{
                name: 'N&M Club',  link: 'n&m-club'
            },{
                name: 'Sweet Sixteen',  link: 'sweet-sixteen'
            },{
                name: 'Ninomaxx Kids',  link: 'ninomaxx-kíds'
            }
        ]
    },{
        name: 'NAM',  link: 'nam',
        parent:[
            {
                name: 'Áo',  link: 'ao'
            },{
                name: 'Quần',  link: 'quan'
            },{
                name: 'Áo khoác & Blazer',  link: 'ao-khoac-&-blazer'
            }
        ]
    },{
        name: 'NỮ',  link: 'nu',
        parent:[
            {
                name: 'Áo',  link: 'ao'
            },{
                name: 'Quần',  link: 'quan'
            },{
                name: 'Đầm',  link: 'dam'
            },{
                name: 'Chân Váy',  link: 'chan-vay'
            },{
                name: 'Áo khoác & Blazer',  link: 'ao-khoac-&-blazer'
            },{
                name: 'Jumpsuit & Set',  link: 'jumpsuit&set'
            },
        ]
    },{
        name: 'TRẺ EM',  link: 'tre-em',
        parent:[
            {
                name: 'Bé Gái',  link: 'be-gai'
            },{
                name: 'Bé Trai',  link: 'be-trai'
            }
        ]
    },{
        name: 'STORES',  link: 'stores'
    },{
        name: 'MID SEASON SALE',  link: 'mid-season-sale',
        parent:[
            {
                name: 'Sale 20%',  link: 'sale-20%'
            },{
                name: 'Sale 30%',  link: 'sale-30%'
            },{
                name: 'Sale 40%',  link: 'sale-40%'
            },{
                name: 'Sale 50%',  link: 'sale-50%'
            },
        ]
    }
]
export const navbarBottomRight = [
    {
        name: 'fa-solid fa-magnifying-glass', link:'search/:search' , hover: 'Tìm Kiếm' 
    },{
        name: 'fa-solid fa-user', link: 'login', hover: 'Đăng Nhập'
    },{
        name: 'fa-regular fa-heart', link: 'yeu-thich', hover: 'Danh sách yêu thích'
    },{
        name: 'fa-solid fa-cart-shopping', link: 'gio-hang', hover: 'Giỏ hàng'
    }
]



//footer
export const footerInformation = [
    {
        name:'Về chúng tôi',link:'ve-chung-toi',
    },{
        name:'Hệ thống cửa hàng', link:'he-thong-cua-hang'
    },{
        name:'Liên hệ' , link :'lien-he'
    },{
        name:'Blog', link: 'blog'
    }
]
export const footerSupport= [
    {
        name:'Hướng dẫn đặt hàng', link: 'huong-dan-khach-hang'
    },{
        name:'Chính sách bảo mật', link: 'chinh-sach-bao-mat'
    },{
        name:'Chính sách giao hàng', link: 'chinh-sach-giao-hang'
    },{
        name:'Chính sách đổi hàng', link: 'chinh-sach-doi-hang'
    },{
        name:'Chính sách bảo hành', link: 'chinh-sach-bao-hanh'
    },
]