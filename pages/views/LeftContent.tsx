import { Slider, Switch, Divider } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import styles from '../../styles/Home.module.css'
function LeftContent() {
    const state = {
        sliderValue: 300,
        //   goodsList: goods,
        sale: false
    }
    function sliderChange(e:any) {
        console.log(e)
    }
    function switchChange(e:any) {
        console.log(e)
    }
    return (
        <div className={styles['left-content']}>
            <div className={styles['sidearea']}>
                <div className={styles['label']}>最高价格：<span className={styles['small-text']}>￥{state.sliderValue}</span></div>
                <Slider className={styles['ant-slider-margin']} defaultValue={state.sliderValue} step={0.1} min={0} max={400} onChange={sliderChange} tipFormatter={null} />
                <div className={styles['min']}>￥0</div>
                <div className={styles['max']}>￥400</div>
            </div>
            <Divider />
            <div className={styles['sidearea']}>
                <div className={styles['label']}>仅显示促销</div>
                <Switch
                    className={styles['ant-switch-size']}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={switchChange} />
            </div>
            <Divider />
            <div className={styles['sidearea']}>
                <div className={styles['label']}>特价销售！</div>
                <p>欢迎现在抢购，因为我们的物品价格大大减少了一半。</p>
            </div>
            <Divider />
            <div className={styles['sidearea']}>
                <div className={styles['label']}>联系我们！</div>
                <p>如有问题？欢迎致电135****2375，我们很乐意为您服务。</p>
            </div>
        </div>
    )
}

export default LeftContent;