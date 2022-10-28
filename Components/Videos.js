
import ReactPlayer from 'react-player'
import Styles from '../styles/Vendors.module.css'

const Videos = () => {
    return (
        <div className='row' >
            <div className="col-md-4">
                <div className={Styles.player_container}>
                    <ReactPlayer url='https://www.youtube.com/embed/559DSIRqwvk' controls={true} style={{objectFit:'cover'}} width={'100%'} height={'100%'} />
                </div>
            </div>
        </div>
    )
}

export default Videos