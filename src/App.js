import React from 'react';
import { BrowserRouter, Route, Routes, matchPath, useLocation } from 'react-router-dom';
import { PublicRouter } from './routers/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    const MainLayout = ({ children }) => {
        //url path của trang web
        const location = useLocation();

        //khai báo url path không xài header footer
        const excludeRoutes = ['/*/:id'];

        // kiểm tra bằng vòng lặp
        const isExist = excludeRoutes.some((routes) => {
            // trả về liệu có tồn tại location nào khớp với phần tử url nào trong excludeRoutes hay không
            return matchPath({ path: routes, exact: true }, location.pathname);
        });

        // nếu có thì trả về children không xài header và footer
        if (isExist) {
            return <>{children}</>;
        }
        //nếu không thì trả về children xài cùng header và footer
        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        );
    };
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    {PublicRouter.map((route, index) => {
                        const Pages = route.component;
                        return <Route key={index} path={route.path} element={<Pages />} />;
                    })}
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
