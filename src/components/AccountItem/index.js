import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f90a1fcea5b68fbe338a7117c8eaa87d~c5_100x100.jpeg?lk3s=a5d48078&nonce=68140&refresh_token=8d0276f569de26674393cb8ee9cb42da&x-expires=1719385200&x-signature=2AMJWPhy7m8ylvWqClAbnmRtT2M%3D&shp=a5d48078&shcp=81f88b70"
                alt="avt"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
