import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "./Context";


const PatientScore = () => {
    const data = useContext (Context)
    console.log(data);
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [patientData, setPatientdata] = useState([]);
    const [dateofscores, setdateofscores] = useState('')
    const [patientNumber, setpatientNumber] = useState(0); 
    const [bgvBeforeBreakfast, setbgvBeforeBreakfast] = useState();
    const [bgvAfterBreakfast, setbgvAfterBreakfast] = useState(0);
    const [bgvAfterLunch, setbgvAfterLunch] = useState(0);
    const [bgvAfterSupper, setbgvAfterSupper] = useState(0);
    const [idBeforeBreakfast, setidBeforeBreakfast] = useState(0);
    const [idBeforeLunch, setidBeforeLunch] = useState(0);
    const [idBeforeSupper, setidBeforeSupper] = useState(0);
    const [idEvening, setidEvening] = useState(0);
    const [comments, setComments] = useState('');
    const handleSubmit =(e) => { 
        e.preventDefault()
        const res = data.state
        fetch("/api/patientDetails",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            dateofscores,
            patientNumber,
            bgvBeforeBreakfast,
            bgvAfterBreakfast,
            bgvAfterLunch,
            bgvAfterSupper,
            idBeforeBreakfast,
            idBeforeLunch,
            idBeforeSupper,
            idEvening,
            comments,
            email:user.email,
            }),
    })
    .then((response)=>
    response.json()

    )
    .then((output)=> {
        setPatientdata(output.data)
    console.log(output)  
    })
    .catch((err) => console.log(err))
}
useEffect( ()=> {
    isAuthenticated &&
    fetch(`/api/getpatientdetails/${user.email}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        setPatientdata(data.data)
})
.catch((err) => console.log(err));
},[isAuthenticated])
    return (
<> 
<div>
Blood Glucose Targets During Prgenancy
<Table className="BGVtarget">
<div>Normal</div>
<div>Target</div>
<div> &#60;5.3 </div>
<div>3.8-5.0</div>
<div>5.0-7.7</div>
<div>Target on Insuline</div>
<div>4.2-4.7</div>
<p className="BbreakFast">Before Breakfast</p>
<div> &#60;7.8 </div>
<div>5.5-7.2</div>
<p className="1hrAfterMeal"> 1hr after meals</p>
</Table>
</div>

<div>
<Form className="mainForm" onSubmit={(e) => {handleSubmit(e)} }>
    <label className="Date">
        Date
        <input required type="datetime-local" value={data.state}
        onChange = {(e) => setdateofscores(e.target.value)}/>
        </label>
        <label className="patientmrn"> MRN </label>
        <input required value={data.state}
        onChange = { (e) =>  setpatientNumber(e.target.value)}/>
        <label className="BGV">
            Blood Glucose values 
            <label>Before Breakfast</label>
            <input  type="number" required max={20} step=".01"
            value={data.state}
            onChange = { (e) => setbgvBeforeBreakfast(e.target.value)} />
            <label>1hr after Breakfast</label>
            <input  type="number" required max={20} step=".01"
            value={data.state} 
            onChange = { (e) => setbgvAfterBreakfast(e.target.value)}/>
            <label>1hr after Lunch </label>
            <input  type="number" required max={20} step=".01"
            value={data.state} 
            onChange = { (e) => setbgvAfterLunch(e.target.value)}/>
            <label>1hr after Supper</label>
            <input  type="number" required max={20} step=".01"
            value={data.state} 
            onChange = { (e) => setbgvAfterSupper(e.target.value)}/>
        </label>
        
        <label className="insulineDose">Insuline Dose 
            <label>Before Breakfast</label>
            <input  type="number" required max={20} step=".01"
            value={data.state} 
            onChange = { (e) => setidBeforeBreakfast(e.target.value)}/>
            <label>Before Lunch</label>
            <input  type="number" required max={20} step=".01"
            value={data.state} 
            onChange = { (e) => setidBeforeLunch(e.target.value)}/>
            <label>Before Supper</label>
            <input  type="number" required max={20} step=".01"
            value={data.state} 
            onChange = { (e) => setidBeforeSupper(e.target.value)}/>
            <label>Evening </label>
            <input  type="number" required max={20} step=".01"
            value={data.state} 
            onChange = { (e) => setidEvening(e.target.value)}/>
        </label>
        
        <label className="Comments">
            Comments
            <textarea rows ="5" value={data.state}
            onChange = { (e) => setComments(e.target.value)}/>
        </label>
        <label>
        <input type="submit" value="Submit Scores"/>
        </label>
</Form >
</div>
{
patientData && 
<div>
<p>{patientData.dateofscores}</p>
<p>{patientData.patientNumber}</p>
<p>{patientData.bgvBeforeBreakfast}</p>
<p>{patientData.bgvAfterBreakfast}</p>
<p>{patientData.bgvAfterLunch}</p>
<p>{patientData.bgvAfterSupper}</p>
<p>{patientData.idBeforeBreakfast}</p>
<p>{patientData.idBeforeLunch}</p>
<p>{patientData.idBeforeSupper}</p>
<p>{patientData.idEvening}</p>
<p>{patientData.comments}</p>
</div>
}
//this will add 2 values together
<p>{ parseInt( patientData.insulinThatevening) + parseInt(patientData.idBeforeBreakfast)}</p>
<p>{ parseInt( patientData.insulinThatevening) + parseInt(patientData.idBeforeBreakfast)} </p>
</>
    )
}

export default PatientScore

const Form = styled.form`
display: flex;
flex-direction: column;
max-width: 500px;
margin: auto;
label{
    display: flex;
    flex-direction: column;
    font-size: 32px;
    margin-top: 8px;
}
`
const Table = styled.div`
/* border: 1pt red solid;
display: inline-grid;
grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer"; */
display: inline-grid;
grid-template-columns: 200px 200px 200px;
grid-template-rows: auto;
grid-row-gap: 10px;
justify-items: stretch;
align-items: center;
align-content: space-evenly;
padding: 0px 10px 10px 100px;
`
