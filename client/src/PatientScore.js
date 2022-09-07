import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Context } from "./Context";


const PatientScore = () => {
    const data = useContext (Context)
    // console.log(data);
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
        // const res = data.state
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
    console.log("mounted")
    isAuthenticated &&
    fetch(`/api/getpatientdetails/${user.email}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        setPatientdata(data.data)
})
.catch((err) => console.log(err));
return () => {console.log("dismount")}
},[isAuthenticated])
console.log(patientData)
    return (
<> 
{
patientData && 
<Styleddiv>
<Table className="BGVtarget">
<h3>Blood Glucose Targets During Prgenancy</h3>

<TableColumn>

<Sidechart>
<h3> </h3>
<div>Before Breakfast</div>
<div> 1hr after meals</div>
</Sidechart>

<Midchart>
<h3>Normal</h3>
<div>3.8-5.0</div>
<div> &#60;5.3 </div>
</Midchart>

<Bottomchart>
<h3>Target</h3>
<div>5.0-7.7</div>
<div> &#60;7.8 </div>
</Bottomchart>

<div>
<h3>Target on Insuline</h3>
<div>4.2-4.7</div>
<div>5.5-7.2</div>
</div>
</TableColumn>
</Table>


<div>
<Form className="mainForm" onSubmit={(e) => {handleSubmit(e)} }>
        
        <Dates>
        <label>
        <Bolddiv>Date</Bolddiv>
        <input required type="datetime-local" value={data.state} onChange = {(e) => setdateofscores(e.target.value)}/>
        {<div>{patientData.dateofscores}</div>}
        </label>
        <label className="patientmrn"> <Bolddiv>MRN</Bolddiv> </label>
        <input required value={data.state} onChange = { (e) =>  setpatientNumber(e.target.value)}/>
        <div>{patientData.patientNumber === undefined ? "" : patientData.patientNumber}</div>
        </Dates>

        <Styledlargercontainer>
        {/* first row */}
        <h5>When to take your Blood Glucose values scores</h5>
        <h5>Blood Glucose values </h5>
        <h5>Preivous Blood Glucose values</h5>
        <h5>What were your Insulin Dose values?</h5>
        <h5>Insuline Dose </h5>
        <h5>Preivous Insuline Dose </h5>
        <h5>Insulin dosses to take </h5>

        {/* second row */}
        <label>Before Breakfast</label>
        <input  type="number" required max={20} step=".01"
        value={data.state}
        onChange = { (e) => setbgvBeforeBreakfast(e.target.value)} />
        <div>{patientData.bgvBeforeBreakfast}</div>
        <label>Before Breakfast</label>
        <input  type="number" required max={20} step=".01"
        value={data.state} 
        onChange = { (e) => setidBeforeBreakfast(e.target.value)}/>
        <div>{patientData.idBeforeBreakfast}</div>
        <div>{parseInt(patientData.startWith) + parseInt(patientData.insulinThatevening) + parseInt(patientData.idBeforeBreakfast)}</div>
        
        {/* Third row */}
        <label>1hr after Breakfast</label>
        <input  type="number" required max={20} step=".01"
        value={data.state} 
        onChange = { (e) => setbgvAfterBreakfast(e.target.value)}/>
        <div>{patientData.bgvAfterBreakfast}</div>
        <label>Before Lunch</label>
        <input  type="number" required max={20} step=".01"
        value={data.state} 
        onChange = { (e) => setidBeforeLunch(e.target.value)}/>
        <div>{patientData.idBeforeLunch}</div>
        <div>{ parseInt(patientData.startWith) + parseInt(patientData.insulinThiseve) + parseInt(patientData.idBeforeLunch)} </div>

        {/* fourth row */}
        <label>1hr after Lunch </label>
        <input  type="number" required max={20} step=".01"
        value={data.state} 
        onChange = { (e) => setbgvAfterLunch(e.target.value)}/>
        <div>{patientData.bgvAfterLunch}</div>
        <label>Before Supper</label>
        <input  type="number" required max={20} step=".01"
        value={data.state} 
        onChange = { (e) => setidBeforeSupper(e.target.value)}/>
        <div>{patientData.idBeforeSupper}</div>
        <div>{ parseInt(patientData.startWith) + parseInt(patientData.insulinThisnight) + parseInt(patientData.idBeforeSupper)}</div>

        {/* fith row */}
        <label>1hr after Supper</label>
        <input  type="number" required max={20} step=".01"
        value={data.state} 
        onChange = { (e) => setbgvAfterSupper(e.target.value)}/>
        <div>{patientData.bgvAfterSupper}</div>
        <label>Evening </label>
        <input  type="number" required max={20} step=".01"
        value={data.state} 
        onChange = { (e) => setidEvening(e.target.value)}/>
        <div>{patientData.idEvening}</div>
        <div>{ parseInt(patientData.startWith) + parseInt(patientData.insulinThitonight) + parseInt(patientData.idEvening)}</div>
        </Styledlargercontainer>
        
        <Styledcomments>
        <label className="Comments">
            Comments
            <textarea rows ="5" value={data.state}
            onChange = { (e) => setComments(e.target.value)}/>
            {patientData.comments}
        </label>
        <label>
        <input type="submit" value="Submit Scores"/>
        </label>
        </Styledcomments>
</Form >
</div>
</Styleddiv>
}
</>
    )
}

export default PatientScore

const Form = styled.form`
display: flex;
flex-direction: column;
max-width: 800px;
margin: auto;
label{
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 8px;
}
`
const Table = styled.div`
    display: grid;
    flex-direction: column;
    
`
const TableColumn = styled.div`
    display: flex;
    div{
        height: 20px;
        margin: 1px;
    }
    h3{
        height: 30px;
        width: 80px;
    }
`

const Styleddiv = styled.div`
background-image: url('../Img/doctor.png');
background-repeat: no-repeat;
background-position: center; 
background-size: cover;
min-height: 100%;
min-width: 1024px;
width: 100%;
height: auto;
position: fixed;
left: 0;
`
const Styledlargercontainer = styled.div`
display: grid;
grid-template-columns: repeat(7,1fr);
justify-items: center;
align-items: center;
`

const Bolddiv = styled.div`
font-weight: 700;
`
const Sidechart = styled.div`
`
const Midchart = styled.div`
`
const Bottomchart = styled.div`
`
const Dates = styled.div`
`
const Styledcomments = styled.div`
`