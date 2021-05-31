import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./mypage.css";

import LeafImg from "./img/leaf.png";
import UserImg from "./img/user.png";
import EditImg from "./img/edit.png";

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때 error 와 users 를 초기화
                setError(null);
                setUsers(null);
                // loading 상태를 true 로
                setLoading(true);
                const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(response.data); // 데이터는 response.data 안에.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <div className="query_section">
            <div class="div_my">
                <header>
                    <h3>my페이지</h3>
                </header>
                <section>
                    <div class="profile">
                        <img src={UserImg} alt="User" id="user"/>
                        <span class="UserInfo">
                            <span id="UserName">
                                {users.map(user => (<div key={user.id}>{user.username}</div>))}
                            </span>&nbsp;님
                        </span>
                        <br></br>
                        <a href="#" class="scrap_p">총 스크랩 횟수 : 5번</a>
                        <a href="#"><img src={EditImg} alt="Edit" id="edit"/></a>
                    </div>
                    <br></br>
                    <p class="st">이한나 님의 주문으로 절약된 나무</p>
                    <img src={LeafImg} alt="Leaf" class="leaf"/>
                    <img src={LeafImg} alt="Leaf" class="leaf"/>
                    <img src={LeafImg} alt="Leaf" class="leaf"/>
                    <p class="st">새 소식</p>
                    <div class="news">
                        <span class="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.
                    </div>
                    <div class="read_news">
                        <span class="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.
                    </div>
                    <div class="read_news">
                        <span class="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.
                    </div>
                    <br></br>
                </section>
            </div>
        </div>
    );
}

export default Users;