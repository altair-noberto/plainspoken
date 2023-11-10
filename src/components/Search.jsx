import {useState} from 'preact/hooks'
import {Icon} from 'astro-icon'
import './Styles/Search.css'

export default function Search(){

    const [search, setSearch] = useState('plainspoken');

    return(
        <div style={{display: 'flex', gap: "10px"}}>
            <input onChange={(e) => console.log(e.target.value)} style={{padding: '0.5em 1em', borderRadius: "10px;"}} type="text" name="search" id="search" />
            <a href={'/search/' + {search}}><button style={{padding: '0.5em', borderRadius: "10px;"}}>Search</button></a>
        </div>
    )
}