import { useEffect, useState } from "react"
import styled from "styled-components"


const Background = styled.div`
  background-color: aliceblue;
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px;
  flex-direction: column;
`

const Card = styled.div`
  background-color: #ffffff;
  height: auto;
  width:425px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 20px;
`

const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`

const MainWrap = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
align-items: center;

`

const ClearButton = styled.div`
display: flex;
    height: 40px;
    width: 150px;
    border: 1px solid rgb(41, 112, 177);
    color: rgb(255, 255, 255);
    background: rgb(41, 112, 177);
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ShowMoreButton = styled.div`
    display: flex;
    height: 40px;
    width: 150px;
    border: 1px solid rgb(41, 112, 177);
    color: rgb(255, 255, 255);
    background: rgb(41, 112, 177);
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const InformationWrap = styled.div`
    display: flex;
    flex-direction: row;
    height: 120px;
    width: 395px;
    gap:90px;
   justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  background-color:whitesmoke;

`
const ProfileImage = styled.img`
height: 100px;
width: 100px;
border-radius: 50%;
background-color: blue;
`
const ProfileName = styled.p`

`
const ProfileAge = styled.p`
`

const NoInformationWrap = styled.div`

`

const Heading = styled.div`

`

const HeadingPara = styled.p`

`


export const BirthdayList = () => {

    const [infoData,setInfoData] = useState([]);
    const [defaultLength,setDefaultLength] = useState(5)
    console.log("infoData",infoData);
    console.log("defaultLength",defaultLength)

    const APICall = async () => {

        try {
            const url = "https://mocki.io/v1/e7559c66-deca-4029-ae5d-e13de9a97f0e";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/type"
                },
                // body:JSON.stringify(obj)
            })

            const updatedData = await response.json();
            setInfoData(updatedData);
            console.log("updatedData", updatedData)

        } catch (error) {

        }
    }


    useEffect(() => {
        APICall();
    }, []) 


    
    const HandleShowMore = () =>{
        setDefaultLength(defaultLength+5);
    }

    const HandleClearAll = () =>{
        setInfoData([]);
    }


    const calculate_age = (dob1) => {
        // Check if dob1 is a valid date string
        if (!dob1 || isNaN(Date.parse(dob1))) {
            console.error("Invalid date format");
            return null; // or handle the error appropriately
        }
    
        var today = new Date();
        var birthDate = new Date(dob1);
    
        // Check if the date parsing was successful
        if (isNaN(birthDate.getTime())) {
            console.error("Invalid date format");
            return null; // or handle the error appropriately
        }
    
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
    
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
    
        // Check if age_now is a valid number
        if (!Number.isNaN(age_now) && Number.isFinite(age_now)) {
            console.log(age_now);
            return age_now;
        } else {
            console.error("Age calculation resulted in an invalid number");
            return null; // or handle the error appropriately
        }
    }

    return (
        <Background>
            <Heading>
        <HeadingPara>Birthday List</HeadingPara>
           </Heading>
            <Card>
            <MainWrap>
            {infoData && infoData.length > 0 ? infoData.slice(0,defaultLength).map((item) => (
                <InformationWrap key={item.name}>
                    <ProfileImage src={item.img} />
                    <ProfileName>{item.name}</ProfileName>
                    <ProfileAge>{calculate_age(item.DOB)}</ProfileAge>
                </InformationWrap>
                )):<NoInformationWrap>List is Empty</NoInformationWrap>}

                <ButtonWrap>
                    <ClearButton onClick={HandleClearAll} >Clear All</ClearButton>
                    <ShowMoreButton onClick={HandleShowMore}>Show More</ShowMoreButton>
                </ButtonWrap>
                </MainWrap>
            </Card>
            
        </Background>
    );
}