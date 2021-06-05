import React from "react"
import { Typography, Statistic, Card  } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

const { Title } = Typography

export default function OverwiewPage() {
    return (
            <div className="toCenter column"> 
                <Title level={3}>Yesterday overview: 30.09.34</Title>

                <div className="mediaColumn">
                <Card title="Gain - 23 $" type="inner" className="mr20 mb20 mw300">
                        <Statistic
                        title="Your business's revenue was 11.68% higher than average yesterday: $ 400 per day."
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                        />


                </Card>

                <Card title="Orders - 67" type="inner" className="mw300 mb20">
                        <Statistic
                        title="Orders yesterday 9.30% below average: 2 orders per day."
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                        />


                </Card>       
                </div>


            </div>
    )
  }