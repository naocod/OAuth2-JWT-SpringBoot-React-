import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';


const OAuth2Login = () => {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const accessToken = searchParams.get("accessToken");
    

    if(!!accessToken) {   // accessToken !== undefined && accessToken !== null && accessToken !== "" >> 부정의 부정은 참 > 값이 있어야만 true / !!붙여줘야 형변환됨
        localStorage.setItem("accessToken", accessToken);
        window.location.replace("/");
    }

    return (
        <>
            
        </>
    );
};

export default OAuth2Login;