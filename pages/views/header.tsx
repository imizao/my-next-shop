import { Row, Col, Layout } from 'antd';
const { Header } = Layout
import styles from '../../styles/Home.module.css'
function MainHeader() {
    const state = {
        nav: ['女人装', '男人装', '促销']
    }
    return (
        <Header className={styles['ant-layout-header']}>
            <Row justify="center" className={styles['text-center']}>
                {
                    state.nav.map((item, index) => {
                        return (
                            <Col span={4} key={index}>{item}</Col>
                        )
                    })
                }
            </Row>
        </Header>
    )
}

export default MainHeader;