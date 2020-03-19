
import { FiDownload, FiEye } from 'react-icons/fi';

import { MOBILE_MAX_WITH } from '../../utils/media'
import { getFormattedDate } from '../../utils/date'

import { TTalk } from '../../content/talks'

export default ({ title, description, url, date }: TTalk) => (
  <div className="container">
    <div className="content">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="description">
        {description}
      </div>
    </div>
    <div className="details">
      <div className="date">{getFormattedDate(date)}</div>
      <div><a href={url} target="_blank"><FiEye /></a></div>
      <div><a href={url} download><FiDownload /></a></div>

    </div>
    <style jsx>{`
    .container {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 4fr 1fr;
        grid-gap: 0px;
        justify-items: center;
        align-items: center;
        padding: 0px 0px 5px 0px;
        border-bottom: 1px solid black;
      }
      .details {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 6fr 1fr 1fr;
        grid-gap: 10px;
        padding: 5px;
        justify-items: center;
        align-items: center;
      }

      .details a{
        font-size: 16px;
      }
      @media screen and (max-device-width: ${MOBILE_MAX_WITH}){
        .container {
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
          align-items: center;
        }
      }
    `}</style>
  </div >
)
