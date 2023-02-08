import { Row, Col } from 'antd';
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import styles from '../../styles/Home.module.css'

function Content() {
    return (
        <>
            <Row gutter={10}>
                <Col xs={24} sm={8} md={5} lg={5} xl={5} className={styles['active-margin']}>
                    <LeftContent></LeftContent>
                </Col>
                <Col xs={24} sm={16} md={19} lg={19} xl={19}>
                    <RightContent></RightContent>
                </Col>
            </Row>
        </>
    )
}

export default Content;