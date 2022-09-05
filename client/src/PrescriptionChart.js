import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PrescirptionChart = () => {
        const { user, isAuthenticated, isLoading } = useAuth0();
        const [patientData, setPatientdata] = useState([]);
        const [startWith, setStartwith] = useState('')
        const [unitsOf, setUnitsof] = useState(0); 
        const [insulinThatevening, setInsulinthatEvening] = useState(0);
        const [insulinThiseve, setInsulinthisEve] = useState(0);
        const [insulinThisnight, setInsulinthisNight] = useState(0);
        const [insulinThitonight, setInsulinthisTodnight] = useState(0);
        const [insulinThislate, setInsulinthisLate] = useState(0);
        const [pmiBreakfast, setpmiBreakfast] = useState("");
        const [pmiLunch, setpmiLunch] = useState("");
        const [pmiDinner, setpmiDinner] = useState("");
        const [pmiStarttaking, setpmiStarttaking] = useState(0);
        const [pmiDecreasetommorrow, setpmiDecreasetommorrow] = useState(0);
        const [pmiIncreasenextDay, setpmiIncreasenextDay] = useState(0);
        const [pmiIncreasetommorrow, setpmiIncreaseTommorrow] = useState(0);
        const handleSubmit =(e) => { 
            e.preventDefault()
            fetch("/api/getprescriptionDetails",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                startWith,
                unitsOf,
                insulinThatevening,
                insulinThiseve,
                insulinThisnight,
                insulinThitonight,
                insulinThislate,
                pmiBreakfast,
                pmiLunch,
                pmiDinner,
                pmiStarttaking,
                pmiDecreasetommorrow,
                pmiIncreasenextDay,
                pmiIncreasetommorrow,
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
        fetch(`/api/getpatientDetails/${user.email}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPatientdata(data.data)
    })
    .catch((err) => console.log(err));
    },[isAuthenticated])
    return (

<>
<styledDiv>
<Form onSubmit={(e) => {handleSubmit(e)} }>

<StyledStart>
<h1>Evening insulin dose adjustment</h1>
<div>Start with <input type="number"  onChange = {(e) => setStartwith(e.target.value)}/>  untis of <input type="number" required max={20} step=".01" onChange = {(e) => setUnitsof(e.target.value)}/>  insulin in the evening.</div>
<h2>You will need to adjust your evning insulin dose based on your moring blood glucose level</h2>
</StyledStart>

<Styledadjust>
<div>If your blood glucose level in the moring is: </div>
<div> Action </div>
<div> Dose change </div>
<div>  &lt; 4.3 mmol/L </div>
<div>  ↓ insulin dose that evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setInsulinthatEvening(e.target.value)}/>  
<div> 4.3-4.7 mmol/L </div>
<div> maintain present insulin dose </div>
<div> Same Dose </div>
<div> 4.8-5.3 mmol/L</div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setInsulinthisEve(e.target.value)}/> 
<div> 5.4-6.0 mmol/L </div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setInsulinthisNight(e.target.value)}/> 
<div> 6.1-10.0 mmol/L </div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setInsulinthisTodnight(e.target.value)}/> 
<div> &gt; 10.0 mmol/L</div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) =>  setInsulinthisLate(e.target.value)}/> 
</Styledadjust>

<Styledpremeal>
<h3>Pre-meal insulin adjustment guildlines:</h3>
<div>Start taking <input type="number" required max={20} step=".01" onChange = {(e) => setpmiStarttaking(e.target.value)}/>  units of rapid insulin at </div>
<div>Breakfast 
<input type="checkbox" 
onChange = {(e) => setpmiBreakfast(e.target.value)}/>
</div>
<div>Lunch
<input type="checkbox" 
onChange = {(e) => setpmiLunch(e.target.value)}/>
</div>
<div>Supper
<input type="checkbox" 
onChange = {(e) => setpmiDinner(e.target.value)}/>
</div>
</Styledpremeal>

<Styledadjustment>
<div>If your blood glucose level 1 hour after the meal is: </div>
<div> Action </div>
<div> Dose change </div>
<div>  &lt; 5.5 mmol/L </div>
<div>  ↓ your insulin dose tomorrow for the same meal </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setpmiDecreasetommorrow(e.target.value)} /> 
<div>  5.5-7.2 mmol/L </div>
<div>  maintain present meal-time insulin dose </div>
<div> same dose </div>
<div>  7.3-10.0 mmol/L </div>
<div>  ↑ your insulin dose tomorrow for the same meal </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setpmiIncreasenextDay(e.target.value)}/> 
<div>  10.0 mmol/L </div>
<div>  ↑ your insulin dose tomorrow for the same meal </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setpmiIncreaseTommorrow(e.target.value)}/> 
<input type="submit" value="Submit Scores"/>
</Styledadjustment>

</Form>

{
patientData && 
<PatientData>
    <p> {patientData.startWith} </p>
    <p> {patientData.unitsOf} </p>
    <p> {patientData.insulinThatevening} </p>
    <p> {patientData.insulinThiseve} </p>
    <p> {patientData.insulinThisnight} </p>
    <p> {patientData.insulinThitonight} </p>
    <p> {patientData.insulinThislat} </p>
    <p> {patientData.pmiBreakfast} </p>
    <p> {patientData.pmiLunch} </p>
    <p> {patientData.pmiDinner} </p>
    <p> {patientData.pmiStarttaking} </p>
    <p> {patientData.pmiDecreasetommorrow} </p>
    <p> {patientData.pmiIncreasenextDay} </p>
    <p> {patientData.pmiIncreasetommorrow} </p>
</PatientData>
}
</styledDiv>
</>
    )
}



export default PrescirptionChart

const Form = styled.form`
`

// const StyledDiv = styled.div`
// background-image: url('../Img/.png');
// background-repeat: no-repeat;
// background-position: center; 
// background-size: cover;
// min-height: 100%;
// min-width: 1024px;
// width: 100%;
// height: auto;
// position: fixed;
// left: 0;
// `

const StyledStart = styled.div`
display: inline-flex;
flex-direction: column;
align-content: center;
padding: 10px 380px;
text-align: center;
white-space: nowrap;
`

const Styledadjust = styled.div`
display: inline-grid;
grid-template-columns: 200px 200px 200px;
grid-template-rows: auto;
grid-row-gap: 10px;
justify-items: stretch;
align-items: center;
align-content: space-evenly;
padding: 0px 10px 10px 100px;

`

const Styledpremeal = styled.div`
display: inline-flex;
flex-direction: column;
align-content: center;
padding: 15px 400px;
text-align: center;
white-space: nowrap;
`

const Styledadjustment = styled.div`
display: inline-grid;
grid-template-columns: 200px 200px 200px;
grid-template-rows: auto;
grid-row-gap: 10px;
justify-items: stretch;
align-items: center;
align-content: space-evenly;
padding: 0px 10px 10px 100px;
`

const PatientData = styled.div`
`