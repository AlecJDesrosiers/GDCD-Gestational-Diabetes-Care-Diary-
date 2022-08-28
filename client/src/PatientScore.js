import styled from "styled-components"


const PatientScore = () => {
    return (
<> 
<div>
Blood Glucose Targets During Prgenancy
<Table className="BGVtarget">
<label>Normal</label>
<label>Target</label>
<label>Target on Insuline</label>
<label className="BbreakFast">Before Breakfast</label>
<label className="1hrAfterMeal"> 1hr after meals</label>
</Table>
</div>

<div>
<Form className="mainForm">
    <label className="Date">
        Date
        <input />
        </label>
        <label className="BGV">
            Blood Glucose vales 
            <label>Before Breakfast</label>
            <input  type="number" />
            <label>1hr after Breakfast</label>
            <input  type="number" />
            <label>1hr after Lunch </label>
            <input  type="number" />
            <label>1hr after Supper</label>
            <input  type="number" />
        </label>
        
        <label className="insulineDose">Insuline Dose 
            <lable>Before Breakfast</lable>
            <input  type="number" />
            <label>Before Lunch</label>
            <input  type="number" />
            <label>Before Supper</label>
            <input  type="number" />
            <label>Evening </label>
            <input  type="number" />
        </label>
        
        <label className="Comments">
            Comments
            <textarea rows ="5"/>
        </label>
        <input type="submit" value="Submit Scores" onSubmit={(e) =>{
            PatientScore
        }} />
</Form>
</div>
</>
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
const Table = styled.table`
`