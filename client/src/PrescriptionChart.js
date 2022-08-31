import styled from "styled-components"
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PrescirptionChart = () => {
        const { user, isAuthenticated, isLoading } = useAuth0();
        const [startWith, setStartwith] = useState('')
        const [unitsOf, setUnitsof] = useState(0); 
        const [insulinThatevening, setInsulinthatEvening] = useState(0);
        const [insulinThisevening, setInsulinthisEvening] = useState(0);
        const [insulinThisevening, setInsulinthisEvening] = useState(0);
        const [insulinThisevening, setInsulinthisEvening] = useState(0);
        const [insulinThisevening, setInsulinthisEvening] = useState(0);
        const [pmiStarttaking, setpmiStarttaking] = useState(0);
        const [pmiDecreasetommorrow, setpmidecreaseTommorrow] = useState(0);
        const [pmiIncreasetommorrow, setpmiIncreaseTommorrow] = useState(0);
        const [pmiIncreasetommorrow, setpmiIncreaseTommorrow] = useState(0);
        const handleSubmit =(e) => { 
            e.preventDefault()
            fetch("/api/patientDetails",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                startWith,
                unitsOf,
                insulinThatevening,
                email:user.email,
                }),
        })
        .then((response)=>
        response.json()
        )
        .then((output)=> {
        console.log(output)  
        })
        .catch((err) => console.log(err))
    }
    return (
<>
<Form onSubmit={(e) => {handleSubmit(e)} }>
<h1></h1>
<div>Evening insulin dose adjustment</div>
<div>Start with <input type="number" onChange = {(e) => setStartwith(e.target.value)}/>  untis of <input type="number" onChange = {(e) => setUnitsof(e.target.value)}/>  insulin in the evening.</div>
<h2>You will need to adjust your evning insulin dose based on your moring blood glucose level</h2>

<div>
<div>If your blood glucose level in the moring is: </div>
<div> Action </div>
<div> Dose change </div>
<div>  &lt; 4.3 mmol/L </div>
<div>  ↓ insulin dose that evening </div>
<input type="number" onChange = {(e) => setInsulinthatEvening(e.target.value)}/>  
<div> 4.3-4.7 mmol/L </div>
<div> maintain present insulin dose </div>
<div> Same Dose </div>
<div> 4.8-5.3 mmol/L</div>
<div> ↑ insulin dose this evening </div>
<input type="number"/> 
<div> 5.4-6.0 mmol/L </div>
<div> ↑ insulin dose this evening </div>
<input type="number"/> 
<div> 6.1-10.0 mmol/L </div>
<div> ↑ insulin dose this evening </div>
<input type="number"/> 
<div> &gt; 10.0 mmol/L</div>
<div> ↑ insulin dose this evening </div>
<input type="number"/> 

</div>

<h2>Pre-meal insulin adjustment guildlines:</h2>
<div>Start taking <input type="number"/>  units of rapid insulin at </div>
<div>Breakfast 
<input type="checkbox" />
</div>
<div>Lunch
<input type="checkbox" />
</div>
<div>Supper
<input type="checkbox" />
</div>

<div>

<div>If your blood glucose level 1 hour after the meal is: </div>
<div> Action </div>
<div> Dose change </div>
<div>  &lt; 5.5 mmol/L </div>
<div>  ↓ your insulin dose tomorrow for the same meal </div>
<input type="number"/> 
<div>  5.5-7.2 mmol/L </div>
<div>  maintain present meal-time insulin dose </div>
<div> same dose </div>
<div>  7.3-10.0 mmol/L </div>
<div>  ↑ your insulin dose tomorrow for the same meal </div>
<input type="number"/> 
<div>  10.0 mmol/L </div>
<div>  ↑ your insulin dose tomorrow for the same meal </div>
<input type="number"/> 
<input type="submit" value="Submit Scores"/>
</div>
</Form>
</>
    )
}

export default PrescirptionChart

const Form = styled.form`
`