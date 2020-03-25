import React, { Component } from 'react';
import indexCss from "./index.module.scss"
import { Carousel } from 'antd-mobile';
import axios, { baseURL } from "../../utils/request"

// 引入图片
import nav1 from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"

// import CityInput from "../../components/CityInput"

class Index extends Component {
    state = {
        carouselList: [], // 轮播图数据
        // 轮播图的默认高度
        imgHeight: 176,
        navs: [
            { id: 0, text: "整租", imgSrc: nav1 },
            { id: 1, text: "合租", imgSrc: nav2 },
            { id: 2, text: "地图找房", imgSrc: nav3 },
            { id: 3, text: "去出租", imgSrc: nav4 }
        ], //导航栏数据
        groups: [], //租房小组数据
        news: [] // 最新资讯
    }
    async componentDidMount() {
        // 获取轮播图数据
        this.getSwiper();
        // 获取租房小组数据
        this.getGroup();
        // 获取最新资讯数据
        this.getNews();
    }

    getSwiper = async () => {
        // 获取轮播图数据
        const res = await axios.get("/home/swiper")
        // console.log(res);
        this.setState({ carouselList: res.data.body })
    }

    getGroup = async () => {
        const res = await axios.get("/home/groups")
        // console.log(res);
        this.setState({ groups: res.data.body })
    }

    getNews = async () => {
        const res = await axios.get("/home/news")
        // console.log(res);
        this.setState({ news: res.data.body })
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
                {/* 1 轮播图 结束 */}

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

                {/* 3 租房小组 开始 */}
                <div className={indexCss.index_groups}>
                    <div className={indexCss.index_groups_title}> <span>租房小组</span> <a href="#">更多</a> </div>
                    <div className={indexCss.index_groups_content}>
                        {this.state.groups.map(v => <div className={indexCss.group_item} key={v.id} >
                            <div className={indexCss.group_item_info}>
                                <div className={indexCss.group_item_title}>{v.title}</div>
                                <div className={indexCss.group_item_desc}>{v.desc}</div>
                            </div>
                            <div className={indexCss.group_item_img}>
                                <img src={baseURL + v.imgSrc} alt="" />
                            </div>
                        </div>)}
                    </div>
                </div>
                {/* 3 租房小组 结束 */}

                {/* 4 最新资讯 开始 */}
                <div className={indexCss.index_news}>
                    <div className={indexCss.index_news_title}>最新资讯</div>
                    <div className={indexCss.index_news_content}>
                        {this.state.news.map((v, i) => <div className={indexCss.news_item} key={i} >
                            <div className={indexCss.news_item_img}>
                                <img src={baseURL + v.imgSrc} alt="" />
                            </div>
                            <div className={indexCss.news_item_info}>
                                <div className={indexCss.news_item_title}>{v.title}</div>
                                <div className={indexCss.news_item_desc}>
                                    <span>{v.from}</span>
                                    <span>{v.date}</span>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
                {/* 4 最新资讯 结束 */}

            </div>
        );
    }
}

export default Index;