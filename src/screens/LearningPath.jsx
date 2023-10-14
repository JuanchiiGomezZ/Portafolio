import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import learningData from '../data/learningPath.json'
import SectionTitle from '../components/SectionTitle';
const LearningPath = () => {

    const windowWidth = window.innerWidth;

    return (
        <div className="learningPathContainer">
            <SectionTitle text={"LEARNING PATH"} />
            <div className="timeLine">
                <VerticalTimeline lineColor='whitesmoke'>
                    {
                        learningData.map((data, index) => (
                            <VerticalTimelineElement

                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#1d1f20', color: '#ffff', borderRight: (index % 2 == 0 && windowWidth > 1170) && `7px solid  ${data.color} `, borderLeft: (index % 2 != 0 || windowWidth <= 1170) && `7px solid  ${data.color} ` }}
                                iconStyle={{ background: 'white' }}
                                icon={<img style={{ width: '100%', height: '100%' }} src={data.icon} alt="" />}
                                key={index}
                                date={data.date}
                                dateClassName='date'

                            >
                                <h3 className='pepe'>{data.title}</h3>
                                <h4>{data.subtitle}</h4>
                                <p>{data.text}</p>
                            </VerticalTimelineElement>
                        ))
                    }

                </VerticalTimeline>
            </div>

        </div>

    )
}

export default LearningPath