import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {Row, Col, Progress} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'animate.css';

import usst from './logo/usst.jpg';
import tuc from './logo/tuc.jpg';
import nike from './logo/nike.jpg';
import love from './logo/love.jpg';
import nikePPT from './ducument/nike case.pptx';


function App() {
    const [count, setCount] = useState();

    const skill = [
        {name: 'Deutsche', cName: '德语', value: 4},
        {name: 'CET6', cName: '英语6级', value: 6},
        {name: 'PPT', cName: '幻灯片制作', value: 6},
        {name: 'WebFrontend', cName: '网页制作', value: 8},
        {name: 'photography', cName: '摄像', value: 7},
    ];

    return (
        <ReactFullpage
            licenseKey = {'azqazq1234'}
            scrollingSpeed = {700}
            navigation={true}
            loopBottom={true}
            onLeave={(index) => {setCount(index.index)}}
            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        {/*intro*/}
                        <div className={'section'} style={{backgroundColor: count === 0 ? '#9f3' : 'rgb(20, 20, 20)', transition: '0.5s'}}>
                            <div style={{textAlign: 'center'}}>
                                <p style={{color: 'whiteSmoke', fontSize: '6rem', margin: '0', fontWeight: '200'}}>Hello</p>
                                <p style={{color: '#aee2d9', fontSize: '1.3rem', margin: '0.5rem', fontWeight: '200'}}>思路天马行空，执着死抠细节，追逐一切美好紧致的东西</p>
                                <p style={{color: 'white', fontSize: '1.5rem', margin: '0.5rem', fontWeight: '300'}}>我是周立桦，也可以叫我哈维</p>
                                <p style={{color: 'white', fontSize: '1.3rem', margin: '0.5rem', fontWeight: '200'}}>A preStrategy</p>
                                <DownOutlined onClick={() => {fullpageApi.moveSectionDown()}} style={{position: 'absolute', bottom: '2rem', width: '100%', clear: 'both', display: 'block', fontSize: '2rem', color: 'white'}} />
                            </div>
                        </div>

                        <div className={'section'} style={{backgroundColor: count === 1 ? '#9f3' : '#22c3aa', transition: '0.5s'}}>
                            <p>experience</p>
                        </div>

                        {/*case*/}
                        <div className={'section'} style={{backgroundColor: count === 2 ? '#9f3' : 'rgb(20, 20, 20)', transition: '0.5s'}}>
                            <Row style={{height: '60vh'}}>
                                <Col span={12}>
                                    <div onClick={() => {window.open(`${nikePPT}`)}} style={{background: `url(${nike}) no-repeat center`, backgroundSize: '16rem 16rem',
                                        height: '16rem', width: '16rem', border: '0.5rem solid #FF7F50', borderRadius: '5rem', cursor: 'pointer',
                                        position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -70%)'}}
                                    />
                                </Col>
                                <Col span={12}>
                                    <div onClick={() => {window.open('https://azqazq1234.github.io/love/')}} style={{background: `url(${love}) no-repeat center`, backgroundSize: '16rem 16rem',
                                        height: '16rem', width: '16rem', border: '0.5rem solid #FF7F50', borderRadius: '5rem', cursor: 'pointer',
                                        position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -70%)'}}
                                    />
                                </Col>
                            </Row>
                            <Row style={{height: '10vh'}}>
                                <Col onClick={() => {window.open(`${nikePPT}`)}} span={12} style={{cursor: 'pointer'}}>
                                    <p style={{color: 'white', textAlign: 'center', fontSize: '2rem', margin: '1rem 0', fontWeight: '200'}}>Nike Case</p>
                                    <p style={{color: 'white', textAlign: 'center', fontSize: '1.2rem', margin: '1rem 0', fontWeight: '300'}}>一个简单的关于nike的落地case，点击下载</p>
                                </Col>
                                <Col onClick={() => {window.open('https://azqazq1234.github.io/love/')}} span={12} style={{cursor: 'pointer'}}>
                                    <p style={{color: 'white', textAlign: 'center', fontSize: '2rem', margin: '1rem 0', fontWeight: '200'}}>Love Monument</p>
                                    <p style={{color: 'white', textAlign: 'center', fontSize: '1.2rem', margin: '1rem 0', fontWeight: '300'}}>一个周年纪念网站，点击访问</p>
                                </Col>
                            </Row>
                            <div style={{height: '30vh'}}>
                                <p style={{color: 'whiteSmoke', fontSize: '4rem', textAlign: 'center', fontWeight: '100', position: 'absolute', bottom: '0', width: '100%', clear: 'both', display: 'block', }}>
                                    Case
                                    <span style={{fontSize: '2rem'}}>s</span>
                                    <span style={{margin: '0 0 0 0.5rem'}}>above</span>
                                </p>
                            </div>
                            <DownOutlined onClick={() => {fullpageApi.moveSectionDown()}} style={{position: 'absolute', bottom: '2rem', width: '100%', clear: 'both', display: 'block', fontSize: '2rem', color: 'white'}} />
                        </div>

                        {/*education*/}
                        <div className={'section'} style={{backgroundColor: count === 3 ? '#9f3' : 'rgb(20, 20, 20)', transition: '0.5s'}}>
                            <Row style={{height: '100vh'}}>
                                <Col span={8}>
                                    <Row align={'middle'} style={{height: '100vh'}}>
                                        <Col span={24}>
                                            <p style={{textAlign: 'center', color: 'whiteSmoke', fontSize: '4rem', fontWeight: '100'}}>Education</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={16}>
                                    <Row align={'middle'} style={{height: '50vh'}}>
                                        <Col span={20}>
                                            <p style={{color: 'white', fontSize: '2rem', margin: '0 0 0 5rem', fontWeight: '300'}}>
                                                上海理工大学
                                                <span style={{fontSize: '1rem', margin: '0 0 0 0.5rem', fontWeight: '200'}}>University of Shanghai for Science and Technology</span>
                                            </p>
                                            <p style={{color: 'white', fontSize: '1.4rem', margin: '0 0 0 5rem', fontWeight: '300'}}>光电信息与计算机工程学院 | 光电信息工程</p>
                                            <p style={{color: 'white', fontSize: '1rem', margin: '0 0 0 5rem', fontWeight: '200'}}>College of opto-electronics & computer engineering | Opto-electronics engineering</p>
                                        </Col>
                                        <Col span={4}>
                                            <img src={usst} alt={'usst'} width={'50%'} />
                                        </Col>
                                    </Row>
                                    <Row align={'middle'} style={{height: '50vh'}}>
                                        <Col span={20}>
                                            <p style={{color: 'white', fontSize: '2rem', margin: '0 0 0 5rem', fontWeight: '300'}}>
                                                开姆尼茨工业大学
                                                <span style={{fontSize: '1rem', margin: '0 0 0 0.5rem', fontWeight: '200'}}>Technische Universitat Chemnitz</span>
                                            </p>
                                            <p style={{color: 'white', fontSize: '1.4rem', margin: '0 0 0 5rem', fontWeight: '300'}}>电子工程和信息技术学院 | 微电子预科</p>
                                            <p style={{color: 'white', fontSize: '1rem', margin: '0 0 0 5rem', fontWeight: '200'}}>College of electrical engineering and information technology | Microeconomics</p>
                                        </Col>
                                        <Col span={4}>
                                            <img src={tuc} alt={'tuc'} width={'50%'} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <DownOutlined onClick={() => {fullpageApi.moveSectionDown()}} style={{position: 'absolute', bottom: '2rem', width: '100%', clear: 'both', display: 'block', fontSize: '2rem', color: 'white'}} />
                        </div>

                        {/*skill*/}
                        <div className={'section'} style={{backgroundColor: count === 4 ? '#9f3' : 'rgb(20, 20, 20)', transition: '0.5s'}}>
                            <Row align={'middle'} style={{height: '70vh'}}>
                                <Col span={24}>
                                    {
                                        skill.map((v) => {
                                            return (
                                                <Row align={'middle'} style={{margin: '1.5rem 0'}}>
                                                    <Col span={6} offset={5}>
                                                        <p style={{color: '#FF8C00', fontSize: '2rem', fontWeight: '500', float: 'right', margin: '0'}}>{v.name}·
                                                            <span style={{fontSize: '1.5rem'}}>{v.cName}</span>
                                                        </p>
                                                    </Col>
                                                    <Col span={8}>
                                                        <div style={{marginLeft: '2rem'}}>
                                                            {[...Array(10)].map((w, i) => {
                                                                return (
                                                                    <div style={{width: '0.7rem', height: '0.7rem', backgroundColor: i < v.value ? '#FF8C00' : 'white', transform: 'skewX(-10deg)', display: 'inline-block', margin: '0 0.7rem'}} />
                                                                )
                                                            })}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>

                            <div style={{height: '30vh'}}>
                                <p style={{color: 'whiteSmoke', fontSize: '4rem', textAlign: 'center', fontWeight: '100', position: 'absolute', bottom: '0', width: '100%', clear: 'both', display: 'block', }}>
                                    Skill
                                    <span style={{fontSize: '2rem'}}>s</span>
                                    <span style={{margin: '0 0 0 0.5rem'}}>above</span>
                                </p>
                            </div>
                            <DownOutlined onClick={() => {fullpageApi.moveSectionDown()}} style={{position: 'absolute', bottom: '2rem', width: '100%', clear: 'both', display: 'block', fontSize: '2rem', color: 'white'}} />
                        </div>

                        {/*end*/}
                        <div className={'section'} style={{backgroundColor: count === 5 ? '#9f3' : 'rgb(20, 20, 20)', transition: '0.5s'}}>
                            <div style={{textAlign: 'center'}}>
                                <p className={count === 4 ? 'animated bounce' : null} style={{color: 'whiteSmoke', fontSize: '6rem', fontWeight: '200', margin: '0'}}>Thank You!</p>
                                <p className={count === 4 ? 'animated fadeIn delay-1s slower' : null} style={{color: 'whiteSmoke', fontSize: '1.8rem', fontWeight: '200', margin: '0', transition: 'opacity 2s linear'}}>for watching this</p>
                                <p className={count === 4 ? 'animated fadeIn delay-3s slower' : null} style={{color: 'whiteSmoke', fontSize: '1.8rem', fontWeight: '200', margin: '0'}}>and extremely expecting for your reply</p>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
}

export default App;
