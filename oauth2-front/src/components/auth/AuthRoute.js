import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { authenticationState } from '../../store/atoms/AuthAtoms';
import { useNavigate } from 'react-router-dom';

const AuthRoute = ({ path, element }) => {
    const navigate = useNavigate();
    const [ authState, setAuthState ] = useRecoilState(authenticationState);

    const authenticated = useQuery(["authenticated"], async () => {
        const option = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        return await axios.get("http://localhost:8080/auth/authenticated", option);
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                if(response.data) {
                    setAuthState(true);
                }
            }
        }
    })

    const permitAllPaths = ["/", "/notice"];
    const authenticatedPaths = ["/mypage", "user"];
    const authPath = "/auth"

    if(authState) { // 인증된 상태
        if(path.startsWith("/auth")) { // //auth시작
            navigate("/");
        }
        return element;
    }

    if(!authState) {
        if(authenticatedPaths.filter(authenticatedPath => path.atartsWith(authenticatedPath)).length > 0) {
            navigate("/auth/login")
        }
        return element;
    }

    if(path.startsWith("/auth")) {

    }
    return element;
};

export default AuthRoute;