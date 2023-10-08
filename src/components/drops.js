import Image from 'next/image';
import Beanz from '../images/beansz.jpeg'
import user from '../images/user.gif'

function Drops() {
    return(
        <>
         <div className="drops-cont">
            <div className="drops">
                <div className="drop-header">
                <h3>Drops</h3>
                <div className="drop-navigate">
                    <div className="tab1">
                        <h4>
                           Ongoing and Upcoming 
                        </h4>
                    </div>
                    <div className="tab2-active">
                    <h4>
                       Completed 
                    </h4>
                    </div>
                </div>
                </div>
                <div className="drop-card-container">
                    <div className="drop-card">
                        <span className='user-circle'><Image src = {user} width={40} height={40} alt='user'/></span>
                        <Image className='drop-img' src={Beanz} width={180} height={190} alt='beanz'/>
                        <div className='title-card'>
                            <div className='circle'></div>
                            <div className='minting'>
                                <h3>
                                    Minting
                                </h3>
                                <h4>
                                    Now
                                </h4>
                            </div>
                            <div className='minting'>
                                <h3>
                                    Price
                                </h3>
                                <h4>
                                    0.0013Eth
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}
export default Drops