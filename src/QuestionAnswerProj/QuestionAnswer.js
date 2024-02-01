import { useEffect, useState } from "react"
import styled from "styled-components"
import PlusImage from "../Images/640px-Plus_symbol.svg.png";
import minusImage from "../Images/minus-sign-9.png"


const Background = styled.div`
  background-color: aliceblue;
  height: auto; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px;
`
const Card = styled.div`
  background-color: #ffffff;
  height: auto;
  width:600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 20px;
  gap: 20px;
`
const InfoCard = styled.div`
  height: auto;
  width:560px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 20px;
  background-color: whitesmoke;
`

const QuestionPara = styled.p`

`
const AnswerPara = styled.p`
`

const Button = styled.img`
height: 25px;
width: 25px;
border-radius: 50%;
cursor: pointer;
background-color: orangered;`


const QAwrap = styled.div`
display: flex;
flex-direction: column;
width: 540px;
line-height: 1px;
`

const Heading = styled.div`

`

const HeadingPara = styled.p`

`


export const QuestionAnswer = () =>{

    const [answer,setAnswer] = useState(false);

    const qaArray = [
        {
          question: "What is the capital of France?",
          answer: "Paris"
        },
        {
          question: "Who wrote 'Romeo and Juliet'?",
          answer: "William Shakespeare"
        },
        {
          question: "What is the largest planet in our solar system?",
          answer: "Jupiter"
        },
        {
          question: "What is the formula for water?",
          answer: "H₂O"
        },
        {
          question: "Who is the first President of the United States?",
          answer: "George Washington"
        }
      ];

    const HandleOnclick = () =>{
        if(answer == false){
            setAnswer(true)
        }else if(answer == true){
            setAnswer(false)
        }
    }

    return(
   <Background>
    <Heading>
        <HeadingPara>Question Answer List</HeadingPara>
    </Heading>
    <Card>
        {qaArray && qaArray.length > 0 && qaArray.map((item)=>{return(<InfoCard key={item.question}>
            <QAwrap >
        <QuestionPara>{item.question}</QuestionPara>
            {answer &&<AnswerPara>{item.answer}</AnswerPara>}
            </QAwrap>
            <Button src={answer ? minusImage  : PlusImage} onClick={HandleOnclick}></Button> 
        </InfoCard>)})}

    </Card>
   </Background>
    );

}