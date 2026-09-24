import { Heart, MapPin, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data'
import { useAppStore } from '../store/appStore'
export default function Saved(){const favorites=useAppStore(s=>s.favorites);const places=destinations.filter(d=>favorites.includes(d.id));const trips=useAppStore(s=>s.trips);return <><TopBar title="Saved" back menu/><section className="content-page"><div className="pills"><button className="pill active">Destinations</button><button className="pill">Itineraries</button><button className="pill">Stories</button></div>{places.length?<div className="destination-grid">{places.map(p=><DestinationCard key={p.id} place={p}/>)}</div>:<div className="empty"><Heart size={30}/><h2>No saved places yet</h2><p>Tap the heart on a destination to keep it here.</p><Link className="primary-btn" to="/explore">Explore destinations</Link></div>}<div className="saved-trips"><h2>My trips</h2>{trips.length?trips.map(t=><div className="trip-row" key={t.id}><div><b>{t.name}</b><small>{t.places.join(' · ')}</small></div><MapPin size={16}/></div>):<p className="muted">Your saved itineraries will appear here.</p>}</div></section></>}
