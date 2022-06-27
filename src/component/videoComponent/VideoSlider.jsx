import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ReactPlayer from "react-player";
import Carousel from 'react-bootstrap/Carousel';
import "./videoSlider.css"
import { Paper } from '@mui/material';
import UpNext from '../upnext/UpNext';
function VideoCurseol() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const videoList = [
        {
            id: 1,
            title: "Thor Love and Thunder :2022",
            src: "https://youtu.be/Go8nTmfrQd8",
            title: "MY VIDEO1"


        },
        {
            id: 1,
            title: "Thor Love and Thunder :2022",
            src: "https://youtu.be/Go8nTmfrQd8",


        },
        {
            id: 1,
            title: "Thor Love and Thunder :2022",
            src: "https://youtu.be/Go8nTmfrQd8",


        },

    ]
    return (
        <>
        <div className='mainDiv'>

            <Carousel

            >


              
                {videoList.map((el) => (

                    <Carousel.Item key={el.id}>
                        <ReactPlayer
                            url={el.src}
                            width="100%"
                            pip={true}
                            controls={true}
                            playing={true}
                        />

<Carousel.Caption>
    <h1>

    {el.title}
    </h1>
</Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>

            <UpNext/>
        </div>
        </>
    )
}

export default VideoCurseol