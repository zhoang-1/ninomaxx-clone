import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarBottom, navbarBottomRight } from '../../utils/menu';
import { FaChevronDown, FaAngleRight } from 'react-icons/fa';
import './MenuSidebottom.module.css'
const MenuSideBottom = () => {
    const [indexShow, setIndexShow] = useState(0);
    const [indexChildShow, setIndexChildShow] = useState(0);

    return (
        <div className="bg-white box-border  w-full">
            <div className="w-[82%] flex  mx-36 text-[14px] leading-5 items-center">
                <div className="w-[20%] justify-center text-center">
                    <Link to="/">
                        <img
                            src="https://file.hstatic.net/200000525243/file/logo__fianl_nnmc_db0f772688984e31b332a3ef81241c90.png"
                            alt="NinoMaxx"
                        />
                    </Link>
                </div>
                <div className="w-[60%] min-h-[1px] pl-[30px] font-bold text-neutral-600">
                    <ul className="inline-flex list-none ml-0 list-outside m-0 justify-around">
                        {navbarBottom?.map((main, i) => (
                            <li
                                className="inline-block px-[10px] py-[15px] relative  "
                                onMouseEnter={() => setIndexShow(i + 1)}
                                onMouseLeave={() => setIndexShow(0)}
                            >
                                <Link to={`${main.link}`} key={i} className="flex px-[5px] py-[10px] items-center ">
                                    <span className={`mr-[5px]  ${indexShow === i + 1 && 'font-bold text-[#070707]'}`}>
                                        {main.name}
                                    </span>
                                    {main?.parent?.length > 0 && <FaChevronDown />}

                                    <div></div>
                                    <div className="hidden"></div>
                                </Link>
                                <ul
                                    className={`header-button absolute ${
                                        indexShow === i + 1 ? 'show_effect' : 'hidden'
                                    }`}
                                >
                                    {main?.parent?.map((parent, iParent) => (
                                        <li
                                            className="header-button-sanpham relative font-normal text-[13px]"
                                            onMouseEnter={() => setIndexChildShow(iParent + 1)}
                                            onMouseLeave={() => setIndexChildShow(0)}
                                        >
                                            <Link to={`${parent.link}`} className="header-button1">
                                                <span className="mr-[5px]">{parent.name}</span>
                                                {parent?.children?.length > 0 && <FaAngleRight />}
                                            </Link>
                                            <ul
                                                className={`header-button-child absolute ${
                                                    indexChildShow === iParent + 1 ? 'show_effect_child' : 'hidden'
                                                }`}
                                            >
                                                {parent?.children?.map((child, ichild) => (
                                                    <li className="relative">
                                                        <Link
                                                            to={`${child.link}`}
                                                            key={ichild}
                                                            className="header-button1"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[20%] text-[20px] font-bold">
                    <div>
                        <ul className=" flex justify-end mr-8">
                            {navbarBottomRight?.map((main, i) => (
                                <li className=" px-[10px] py-[15px]">
                                    <Link to={`${main.link}`} key={i}>
                                        <div className="">
                                            <span className="toolbar">
                                                <i className={`${main.name}`}></i>
                                                <span className="hidden ">{main.hover}</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuSideBottom;
