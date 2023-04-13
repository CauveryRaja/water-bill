import { useEffect, useState } from "react"

const Allot = () => {
    const [allotmentInfo, setAllotmentInfo] = useState({});

    const changeListener = (event) => {
        if(event.target.value) {
            setAllotmentInfo({...allotmentInfo, [event.target.id]: event.target.value})
        }
    }

    useEffect(() => console.log(allotmentInfo), [allotmentInfo])

    return <div>
        <h2>Allot water</h2>
        <form>
            <div>
                <label htmlFor="apartmentType">Apartment Type</label>
                <select name="apartmentType" id="apartmentType" value={allotmentInfo.apartmentType} onChange={changeListener}>
                    <option value="3">2 BHK</option>
                    <option value="5">3 BHK</option>
                </select>
            </div>
            <div>
                <label htmlFor="corporationWater">Corporation Water</label>
                <input type="number" name="corporationWater" id="corporationWater" value={allotmentInfo.corporationWater} onChange={changeListener}/>
                :
                <label htmlFor="boreWellWater">Borewell Water</label>
                <input type="number" name="boreWellWater" id="boreWellWater" value={allotmentInfo.boreWellWater} onChange={changeListener}/>
            </div>
        </form>
    </div>
}

export default Allot