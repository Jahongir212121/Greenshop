import Youtube from '../../assets/youtube.svg'
import Facebook from '../../assets/Facebook.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram.svg'
import Cards from '../../assets/CardT.svg'
import "./Bottom.css"
function Bottom() {
    return <>
        <div className="bottom">
            <ul className="bottom-list">
                <li className="bottom-item">
                    <strong className="bottom-title">
                        My Account
                    </strong>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        My Account
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Our stores
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Contact us
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Carrer
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Special
                    </a>
                </li>
            </ul>
            <ul className="bottom-list">
                <li className="bottom-item">
                    <strong className="bottom-title">
                        Help & Guide
                    </strong>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Help & Guide
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        How to buy
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Shipping & Delivery
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Product Policy
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        How to return
                    </a>
                </li>
            </ul>
            <ul className="bottom-list">
                <li className="bottom-item">
                    <strong className="bottom-title">
                        Social Media
                    </strong>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        House Plants
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Potter Plants
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Seeds
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Small Plants
                    </a>
                </li>
                <li className="bottom-item">
                    <a className="bottom-text">
                        Accessories
                    </a>
                </li>
            </ul>
            <div className="img-box">
                <ul className="bottom-img-list">
                    <li className="">
                        <strong className="bottom-title">
                            Social Media
                        </strong>
                    </li>
                    <div className="bottom-img-box">
                        <li className="bottom-img-item">
                            <img className='bottom-img' src={Facebook} />
                        </li>
                        <li className="bottom-img-item">
                            <img className='bottom-img' src={Instagram} />
                        </li>
                        <li className="bottom-img-item">
                            <img className='bottom-img' src={Twitter} />
                        </li>
                        <li className="bottom-img-item">
                            <img className='bottom-img' src={Linkedin} />
                        </li>
                        <li className="bottom-img-item">
                            <img className='bottom-img' src={Youtube} />
                        </li>
                    </div>
                </ul>
                <ul className="bottom-list1">
                    <li className="bottom-list1-item">
                        <strong className="bottom-title">
                            We accept
                        </strong>
                    </li>
                    <li className="bottom-list1-item">
                        <img src={Cards} className="bottom-list1-img" />
                    </li>
                </ul>
            </div>

        </div>
    </>
}

export default Bottom