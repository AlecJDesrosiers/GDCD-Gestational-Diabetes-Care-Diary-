import styled from "styled-components"


const PatientScore = () => {
    return (
<div>
<Form >
    <label className="Date">
        Date
        <input />
        </label>
        <label className="BGV">
            Blood Glucose values 
            <input  type="number" />
            <input  type="number" />
            <input  type="number" />
            <input  type="number" />
        </label>
        <label className="InsulineDose">
            Insuline Dose
            <label>
                Before Breakfast
            <input  type="number" />
            </label> 
            <label>
                1 hour after Breakfast
            <input  type="number" />
            </label>
            <input  type="number" />
            <input  type="number" />
        </label>
        <label className="InsulineDose">
            Comments
            <textarea rows ="5"/>
        </label>
</Form>
</div>
    )
}

export default PatientScore

const H1 = styled.div`
color: Purple;
`
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