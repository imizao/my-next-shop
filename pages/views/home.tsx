import { Layout } from 'antd';
import MainHeader from './header';
import Content from './content';
import styles from '../../styles/Home.module.css'
const { Header, Footer } = Layout;
function MainHome() {
    return (
        <>
            <Layout>
                <Header><MainHeader /></Header>
                <Layout className={styles['capsule ant-layout'] }>
                    <Header className={styles['masthead']} style={style.header}></Header>
                    <Layout>
                        <Content />
                    </Layout>
                </Layout>
                <Footer className={styles['text-center']} style={style.footer}>Made with 🎸 from imizao. This project is open source, visit the repo.</Footer>
            </Layout>
        </>
    )
}
const style = {
    header: {
        background: 'rgb(59, 96, 237)'
    },
    footer: {
        background: '#000',
        color: '#fff',
        fontSize: '16px',
        wordSpacing: '1px'
    }
}

export default MainHome;