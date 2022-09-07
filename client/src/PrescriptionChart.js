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
{
patientData && 
<StyledDiv>
<Form onSubmit={(e) => {handleSubmit(e)} }>

<StyledStart>
<b>Evening insulin dose adjustment</b>
<div>Start with <input type="number"  onChange = {(e) => setStartwith(e.target.value)}/> units of <input   onChange = {(e) => setUnitsof(e.target.value)}/>  insulin in the evening.</div>
<Bolddiv> Your previous Evening insulin dose adjustment start dose was: {patientData.startWith} </Bolddiv>
<Bolddiv> Your previous insulin medicaiton was: {patientData.unitsOf} </Bolddiv>
</StyledStart>

<Styledtitle>You will need to adjust your evning insulin dose based on your moring blood glucose level.</Styledtitle>
<Styledadjust>
<Bolddiv> If your blood glucose level in the morning is: </Bolddiv>
<Bolddiv> Action: </Bolddiv>
<Bolddiv> Dose change: </Bolddiv>
<Bolddiv> Previous dose changes: </Bolddiv>
<div>  &lt; 4.3 mmol/L </div>
<div>  ↓ insulin dose that evening </div>
<input type="number" required max={-1} step=".01"
onChange = {(e) => setInsulinthatEvening(e.target.value)}/>  
<div> {patientData.insulinThatevening} </div>

<div> 4.3-4.7 mmol/L </div>
<div> maintain present insulin dose </div>
<div> Same Dose </div>
<div></div>

<div> 4.8-5.3 mmol/L</div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setInsulinthisEve(e.target.value)}/> 
<div> {patientData.insulinThiseve} </div>

<div> 5.4-6.0 mmol/L </div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setInsulinthisNight(e.target.value)}/> 
<div> {patientData.insulinThisnight} </div>

<div> 6.1-10.0 mmol/L </div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setInsulinthisTodnight(e.target.value)}/> 
<div> {patientData.insulinThitonight} </div>

<div> &gt; 10.0 mmol/L</div>
<div> ↑ insulin dose this evening </div>
<input type="number" required max={20} step=".01"
onChange = {(e) =>  setInsulinthisLate(e.target.value)}/> 
<div> {patientData.insulinThislate} </div>
</Styledadjust>




<Styledpremeal>

<Styledtitle>
<Bolddiv>Pre-meal insulin adjustment guildlines:</Bolddiv>
</Styledtitle>

<Styledtaking>
<div>Start taking <input type="number" required max={20} step=".01" onChange = {(e) => setpmiStarttaking(e.target.value)}/>  units of rapid insulin at </div> 
<Bolddiv> Your previous starting dose of rapid insulin: {patientData.pmiStarttaking} </Bolddiv> 
</Styledtaking>

<Styledmeals>
<Bolddiv> You preivously took the rapid insulin at: </Bolddiv>
<div>Breakfast 
<input type="checkbox" onChange = {(e) => setpmiBreakfast(e.target.value)}/>
<div> {patientData.pmiBreakfast === "on" ? "yes" : "no"} </div>
</div>
<div>Lunch 
<input type="checkbox" onChange = {(e) => setpmiLunch(e.target.value)}/>
<div> {patientData.pmiLunch === "on" ? "yes" : "no"} </div>
</div>
<div> Supper
<input type="checkbox" onChange = {(e) => setpmiDinner(e.target.value)}/>
<div> {patientData.pmiDinner === "on" ? "yes" : "no"} </div>
</div>
</Styledmeals>

</Styledpremeal>

<Styledadjustment>
<Bolddiv>If your blood glucose level 1 hour after the meal is: </Bolddiv>
<Bolddiv> Action </Bolddiv>
<Bolddiv> Dose change </Bolddiv>
<Bolddiv>Previous dose changes </Bolddiv>
<div>  &lt; 5.5 mmol/L </div>
<div>  ↓ your insulin dose tomorrow for the same meal </div>
<input type="number" required max={-1} step=".01"
onChange = {(e) => setpmiDecreasetommorrow(e.target.value)} /> 
<div> {patientData.pmiDecreasetommorrow} </div>
<div>  5.5-7.2 mmol/L </div>
<div>  maintain present meal-time insulin dose </div>
<div> same dose </div>
<div></div>
<div>  7.3-10.0 mmol/L </div>
<div>  ↑ your insulin dose tomorrow for the same meal </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setpmiIncreasenextDay(e.target.value)}/> 
<div> {patientData.pmiIncreasenextDay} </div>
<div>  10.0 mmol/L </div>
<div>  ↑ your insulin dose tomorrow for the same meal </div>
<input type="number" required max={20} step=".01"
onChange = {(e) => setpmiIncreaseTommorrow(e.target.value)}/>
<div> {patientData.pmiIncreasetommorrow} </div> 
<input  type="submit" value="Submit Scores"/>
</Styledadjustment>

</Form>
</StyledDiv>
}
</>
    )
}



export default PrescirptionChart

const Form = styled.form`
`
const Bolddiv = styled.div`
font-weight: 700;
`

const StyledDiv = styled.div`
background-image: url('../Img/baby_picture.png');
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

const StyledStart = styled.div`
display: flex;
flex-direction: column;
align-content: center;
padding: 10px 90px;
text-align: center;
white-space: nowrap;
`
const Styledtitle = styled.div`
display: flex;
padding: 2px 650px;
font-weight: 700;
`


const Styledadjust = styled.div`
display: inline-grid;
grid-template-columns: 200px 200px 200px 200px;
grid-template-rows: auto;
grid-row-gap: 10px;
justify-items: center;
align-items: center;
align-content: space-evenly;
padding: 20px 650px;
`
const Styledtaking =styled.div`
display: block;
flex-direction: row;

`
const Styledmeals = styled.div`
display: flex;
align-items: flex-end;
`
const Styledpremeal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px 30px;
`

const Styledadjustment = styled.div`
display: inline-grid;
grid-template-columns: 200px 200px 200px 200px;
grid-template-rows: auto;
grid-row-gap: 10px;
justify-items: center;
align-items: center;
align-content: space-evenly;
padding: 20px 650px;
`
