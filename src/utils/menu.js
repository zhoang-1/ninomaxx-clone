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

export const Socials =[
    {
        image: 'https://file.hstatic.net/200000525243/file/fb-icon_949afcbac8944b7b85e279b98c862c22.png',
        link: 'facebook'
    },{
        image: 'https://file.hstatic.net/200000525243/file/zalo-icon_7dc4153cda9b40049362f490486376df.png',
        link: 'zalo'
    },{
        image: 'https://file.hstatic.net/200000525243/file/shoppee-icon_76032a8b4608429cb3a2c57f3631ae60.png',
        link: 'Tiktok'
    },{
        image: 'https://file.hstatic.net/200000525243/file/ins-icon_4a96d8391c4c427cbcbea58e31b26f7e.png',
        link: 'insatgram'
    },{
        image: 'https://file.hstatic.net/200000525243/file/lazada-icon_d9b185362289414084afb71d8a6694d5.png',
        link: 'lazada'
    },{
        image: 'https://file.hstatic.net/200000525243/file/shoppee-icon_76032a8b4608429cb3a2c57f3631ae60.png',
        link: 'shoppe'
    },
]
export const Paypal =[
    {
        image: 'https://file.hstatic.net/200000525243/file/momo_863130512bc541219adad25a6d08dbd0.png',
        link: 'momo'
    },{
        image: 'https://file.hstatic.net/200000525243/file/shoppeepay_b62428242a484dd39b4c9e6f9c26857a.png',
        link: '#'
    },{
        image: 'https://file.hstatic.net/200000525243/file/zalopay_dca1cdc100574c838ebfe4df2f604a0b.png',
        link: 'zalopay'
    },{
        image: 'https://file.hstatic.net/200000525243/file/vnpay_e0e8cf6d8f104c03845e9417cf7192f3.png',
        link: 'vn-pay'
    },{
        image: 'https://file.hstatic.net/200000525243/file/cod_1708d1b12d894a04a1dd4f948e69eeae.png',
        link: 'CoD'
    },{
        image: 'https://file.hstatic.net/200000525243/file/atm_1372dbf1c0c54476ae50a8487f358d2a.png',
        link: 'ATM'
    },
]
export const slideImages = [
    {
      url: '//theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=514',
    },
    {
      url: '//theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2.jpg?v=514',
    },
  ];