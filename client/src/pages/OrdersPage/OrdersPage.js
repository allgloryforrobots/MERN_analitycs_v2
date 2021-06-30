import React from "react"
import { Card } from 'antd'
import styles from './styles/OrdersPage.module.scss'
import { Link } from 'react-router-dom'

const { Meta } = Card

const data = [
    { name: 'Drinks', id: 1, imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
    { name: 'Food', id: 2, imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" }
]   

export default function OrdersPage() { 
    
    return (
        <div 
        className={styles.orders__container}   
        >
            {data.map(card => (
                <Link 
                    to={`orders/${card.id}`} 
                    key={card.id}
                >
                <Card   
                    hoverable
                    className={styles.orders__card}
                    cover={ 
                        <div 
                            className={styles.orders__cover}
                        >
                          <img 
                          alt="" 
                          src={card.imgSrc} 
                          className={styles.orders__img}
                          />
                        </div>
                    }
                >
                    <Meta title={card.name} />
                </Card>
                </Link>
                )
            )}
        </div>
    )
}