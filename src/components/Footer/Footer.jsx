import React from 'react';
import contenStyles from './Footer.module.css';
import { footerInformation, footerSupport } from '../../utils/menu';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black box-border  w-full ">
            <div className="w-[82%] flex text-white mx-36 text-[14px] leading-5 items-start py-14">
                <div className="w-[25%] px-4">
                    <div className=" font-semibold ">
                        <img
                            className="w-[143px]"
                            src="https://file.hstatic.net/200000525243/file/logo-ninomax_d0ff70803e3048d9bd91af5b5cfb22f3.png"
                            alt=""
                        />
                    </div>
                    <div className={contenStyles['content']}>
                        <p>
                            Ninomaxx Concept là thương hiệu bán lẻ với mô hình "One Stop Shop" mang đến cho khách hàng
                            thông điệp đi là đẹp, thời trang sành điệu giá dễ chịu
                        </p>

                        <p>
                            <i className="fa-solid fa-location-dot"></i> Head office: 53/4 Trần Khánh Dư, Phường Tân
                            Định, Quận 1, TP. Hồ Chí Minh
                        </p>

                        <p>
                            <i class="fa-solid fa-envelope"></i> huyhooangzzzzb@gmail.com
                        </p>
                        <p>
                            <i class="fa-solid fa-phone"></i> 0389670921
                        </p>
                        <div className="py-[7px]">
                            <img
                                src="https://theme.hstatic.net/200000525243/1000983098/14/dathongbao.png?v=3491"
                                alt=""
                                height={40}
                                width={160}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[25%] px-4">
                    <div className="pb-4  font-semibold">
                        <span>THÔNG TIN</span>
                    </div>
                    <div className={contenStyles['content']}>
                        {footerInformation?.map((item, i) => (
                            <Link to={`${item.link}`} key={i} className={contenStyles['link']}>
                                <p>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-[25%] px-4">
                    <div className="pb-4 font-semibold">
                        <span>HỖ TRỢ KHÁCH HÀNG</span>
                    </div>
                    <div className={contenStyles['content']}>
                        {footerSupport?.map((item, i) => (
                            <Link to={`${item.link}`} key={i} className={contenStyles['link']}>
                                <p>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-[25%] px-4">
                    <div className="pb-4 font-semibold">
                        <span>ĐĂNG KÝ NHẬN BẢN TIN</span>
                    </div>

                    <div
                        class=" box-border mx-auto relative my-0 flex w-full h-[40px] border-[1px] border-solid border-slate-700 rounded-[60px]"
                        method="post"
                    >
                        <input
                            className="bg-transparent w-10/12 pl-4"
                            type="email"
                            value=""
                            placeholder="Vui lòng nhập email..."
                            name="contact[email]"
                            id="Email"
                        />
                        <button
                            type="submit"
                            name="subscribe"
                            id="subscribe"
                            className="w-2/12 text-[20px] font-light line-clamp-2 "
                        >
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="pb-4 font-semibold">
                        <span>KẾT NỐI VỚI CHÚNG TÔI</span>
                    </div>

                    <div className="pb-4 font-semibold">
                        <span>PHƯƠNG THỨC THANH TOÁN</span>
                    </div>
                    
                </div>
            </div>
            <div className="footer-copyrights w-full ">
                <div className="wrapper py-0 w-[82%] mx-auto my-auto  border-t-[1px] border-t-slate-400  after:content[''] after:table after:clear-both">
                    <div className="inner">
                        <div className="list-none m-0 p-0 -ml-[30px] after:content[''] after:table after:clear-both ">
                            <div className="grid__item text-start  box-boder  float-left min-h-[1px] pl-[30px] align-top   w-[50%] ">
                                <div
                                    className="ft-copyrights-content text-white font-[700]"
                                    data-wow-duration="0.75s"
                                    data-wow-delay="0.2s"
                                >
                                    © 2020 - <Link target="_blank" to=""></Link>
                                    <Link target="_blank" to="">
                                        Bản quyền NINOMAXX
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
