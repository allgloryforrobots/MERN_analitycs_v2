import React from "react"
import { Typography, Card } from 'antd';

const { Title } = Typography

export default function OverwiewPage() {
    return (
            <div className="toCenter">
                <Title>Yesterday overview: 30.09.34</Title>
                
                <Card title="Default size card" style={{ width: 300 }}>
                        <p>Card content</p>
                </Card>
            </div>
    )
  }