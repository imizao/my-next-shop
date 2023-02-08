import { Row, Col, Button} from 'antd'
import goods from './index'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
function RightContent() {
    const state = {
        goodsList: goods
    }
    return (
        <Row gutter={10} >
        {state.goodsList.map((item,index) => {
            return (
              <Col  key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
                <div className={styles['right-content']}>
                  <p>{item.name}</p>
                  {
                    item.sale ? <span className={styles['salepill']}>促销</span> : null
                  }
                  <Image src={item.img} alt={'Image of '+ item.name} />
                  <p>￥{item.price}</p>
                  <Button type="primary">加入购物车</Button>
                </div>
              </Col>
            )
          })}
        </Row>
      );
}

export default RightContent;