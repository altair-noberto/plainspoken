import { useState} from 'preact/hooks'
import {Icon} from 'astro-icon'
import './Styles/Search.css'

export default function Search(){

    const [search, setSearch] = useState("plainspoken");

    const handleEvent = (e) =>{

    }
    return(
        <div style={{display: 'flex', gap: "10px"}}>
            <input 
            style={{padding: '0.5em 1em', borderRadius: "10px;"}} 
            type="text" name="search" id="search"
            value={search} 
            onChange={console.log(this)}/>
            <a href={'/search/' + search}><button style={{padding: '0.5em', borderRadius: "10px;"}}>Search</button></a>
        </div>
    )
}