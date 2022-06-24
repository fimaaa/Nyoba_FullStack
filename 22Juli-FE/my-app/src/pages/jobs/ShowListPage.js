import logo from '../../logo.svg';
import { useAppState } from '../../contexts/appState';
import { ListJob } from '../../component';
import { useState } from 'react';


const ShowListPage = () => {

    const [descriptionInList, setDescriptionInList] = useState("");
    const [description, setDescription] = useState("");

    const [location, setLocation] = useState("");
    const [locationInList, setLocationInList] = useState("");

    const [isFullTime, setIsFullTime] = useState(false);
    const [isFullTimeInList, setIsFullTimeInList] = useState(false);

    const [page, setPage] = useState(1);

    const [searchClicked, setSearch] = useState(false)

    const handleSearch = () => {
        setDescriptionInList(description)
        setLocationInList(location)
        setIsFullTimeInList(isFullTime)
        setPage(1)

        setSearch(!searchClicked)
      };
    
    function changePage(value){
        if((page <= 1 && value < 0)) {
            return
        }
        setPage(page+value)
        setSearch(!searchClicked)
    }

    return(
        <div className="App">
            <header >
                <div>
                    Job Description
                    <input onChange={(event) => {setDescription(event.target.value)}} value={description}></input>
                </div>
                <div>
                    Location
                    <input onChange={(event) => {setLocation(event.target.value)}} value={location}></input>
                </div>
                <div>
                    Full Time Only
                    <input type="checkbox" onChange={(event) => {setIsFullTime(event.target.checked)}} value={isFullTime}></input>
                </div>
                <button onClick={handleSearch}>Search</button>
            </header> 
            <body>
            <ListJob key = {searchClicked} description={descriptionInList} location = {locationInList} fullTime = {isFullTimeInList} page = {page}/>
            <div>
                <button  onClick={() => changePage(-1)}><p>Prev</p></button>
                <p>{page}</p>
                <button onClick={() => changePage(1)}><p >Next</p></button>

            </div>
            
            </body>
        </div>
    )
}
export default ShowListPage;
    