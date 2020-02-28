import React, {useState} from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
    const [count, setCount] = useState();

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
                        <div className={'section'} style={{backgroundColor: count === 0 ? '#9f3' : '#22c3aa', transition: '0.5s'}}>
                            <p>s1</p>
                        </div>

                        <div className={'section'} style={{backgroundColor: count === 1 ? '#9f3' : '#22c3aa', transition: '0.5s'}}>
                            <p>s2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
}

export default App;
