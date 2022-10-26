import loader from './loader.svg'
import './Loader.css'

export default function Loader({ all = false }) {
  return (
    <div className={`${all ? 'expand' : ''} loader`}>
      <img src={loader}></img>
    </div>
  )
}
