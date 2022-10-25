import Card from "./Card"
import './home.css'


const HomeList = ({data}) => {
  return (
    <section>
      <div className="container-cards">
        {data.map( (el,index) => (
          <Card key={index} el={el} />
        ))}
      </div>
    </section>
  )
}

export default HomeList