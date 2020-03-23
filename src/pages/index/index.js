import React, { Component } from 'react';
import indexCss from "./index.module.scss"
import { Carousel } from 'antd-mobile';
import { baseURL } from "../../utils/request"
import axios from "axios"

// 引入图片
import nav1 from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"

// import CityInput from "../../components/CityInput"

class Index extends Component {
    state = {
        carouselList: [], // 轮播图数据
        navs: [
            { id: 0, text: "整租", imgSrc: nav1 },
            { id: 1, text: "合租", imgSrc: nav2 },
            { id: 2, text: "地图找房", imgSrc: nav3 },
            { id: 3, text: "去出租", imgSrc: nav4 }
        ] //导航栏数据
    }
    async componentDidMount() {
        // 获取轮播图数据
        this.getSwiper();
        // 获取导航栏数据
        this.getGroup()
    }

    getSwiper = async () => {
        // 获取轮播图数据
        const res = await axios.get("/home/swiper")
        // console.log(res);
        this.setState({ carouselList: res.data.body })
    }

    getGroup = async () => {
        const res = await axios.get("/home/groups")
        console.log(res);
        // this.setState({ navs: res.data.body })
    }

    render() {
        return (
            <div className={indexCss.hk_index} >

                {/* 1 轮播图 开始 */}
                <div className={indexCss.index_carousel}>
                    <div className={indexCss.city_input}>
                        {/* <CityInput></CityInput> */}
                    </div>
                    {this.state.carouselList.length && <Carousel
                        autoplay
                        infinite
                    >
                        {this.state.carouselList.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={baseURL + val.imgSrc}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>}
                </div>
                {/* 2 首页导航 开始 */}
                <div className={indexCss.index_nav}>
                    {this.state.navs.map(v => <div className={indexCss.nav_item}
                        key={v.id}
                    >
                        <img src={v.imgSrc} alt="" />
                        <p>{v.text}</p>
                    </div>)}
                </div>
                {/* 2 首页导航 结束 */}
            </div>
        );
    }
}

export default Index;