import React, { Component } from 'react';
import indexCss from "./index.module.scss"
import { Carousel } from 'antd-mobile';
import { baseURL } from "../../utils/request"
import axios from "axios"
// import CityInput from "../../components/CityInput"

class Index extends Component {
    state = {
        // 轮播图数据
        carouselList: []
    }
    async componentDidMount() {
        // 获取轮播图数据
        this.getSwiper();
    }

    getSwiper = async () => {
        // 获取轮播图数据
        const res = await axios.get("/home/swiper")
        // console.log(res);
        this.setState({ carouselList: res.data.body })
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
            </div>
        );
    }
}

export default Index;