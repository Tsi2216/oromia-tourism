import TopBar from '../components/TopBar'
import { foods } from '../data'
export default function Food(){return <><TopBar title="Traditional Food" back/><section className="content-page"><p className="eyebrow dark">TASTE OROMIA</p><h1 className="page-title">Flavors worth travelling for</h1><div className="food-large-grid">{foods.map(f=><article key={f.id}><img src={f.image} alt={f.name}/><div><h3>{f.name}</h3><p>{f.type}</p><button className="text-link">Discover <span>→</span></button></div></article>)}</div></section></>}
