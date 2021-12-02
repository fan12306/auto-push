import React, {useState} from 'react';
import User from "@/model/user";
import { useHistory } from 'react-router-dom';
import teamName from '@/assets/image/login/team-name.png'
import './Login.scss'

const PageLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleClickLogin = async () => {
        try {
            await User.login(username, password);
            history.push('/about')
        }catch (err) {
            console.log('err', err)
        }

    }
    return (
        <div className="login">
            <div className="team-name hidden-sm-and-down"><img src={teamName} alt="logo"/>
            </div>
            <div className="form-box">
                <div className="title"><h1 title="Lin">Fan CMS</h1></div>
                <div className="login-form">
                    <div className="form-item nickname">
                        <span className="icon account-icon"/>
                        <input type="text" value={username} onChange={handleChangeUsername} placeholder="请填写用户名"/>
                    </div>
                    <div className="form-item password">
                        <span className="icon secret-icon"/>
                        <input type="password" value={password} onChange={handleChangePassword} placeholder="请填写用户登录密码"/>
                    </div>
                    <button className="submit-btn" onClick={handleClickLogin}>登录</button>
                </div>
            </div>
        </div>
    );
};


export default PageLogin;