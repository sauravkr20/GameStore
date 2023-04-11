import React from 'react'
import './Cataegories.scss'
import { Link } from 'react-router-dom'

const Cataegories = () => {
    return (
        <div className='cataegories'>
            <div className='col'>
                <div className="row">
                    <img src='https://wallpaperaccess.com/full/1957854.jpg'></img>
                    <div className="overlay">
                        <button>
                            <Link className="link" to="/products/1">Show </Link>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <img src='https://media.wired.co.uk/photos/606dae60f19707fe1aef38f4/16:9/w_2560%2Cc_limit/CivilizationVI_screenshot_announce1.jpg'></img>
                    <div className="overlay">
                        <button>
                            <Link className="link" to="/products/2">Show </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className="row">
                    <img src='https://cdn.mos.cms.futurecdn.net/D7qC2kht38gp3vrqrGMGR6.jpg'></img>
                    <div className="overlay">
                        <button>
                            <Link className="link" to="/products/20">Show </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col col-l'>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src='https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/10/Forza-Horizon-4-Aston-Martin-Vulcan_1080x1920.jpg'></img>
                            <div className="overlay">
                            <button>
                                <Link className="link" to="/products/4">Show </Link>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="col"> <div className="row">
                        <img src='https://www.91-cdn.com/hub/wp-content/uploads/2022/10/sgf1.jpg'></img>
                        <div className="overlay">
                        <button>
                            <Link className="link" to="/products/5">Show </Link>
                        </button>
                    </div>
                    </div></div>
                </div>
                <div className="row">
                    <img src='https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/09/best-zombie-games-back-4-blood.jpg'></img>
                    <div className="overlay">
                        <button>
                            <Link className="link" to="/products/14">Show </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cataegories
