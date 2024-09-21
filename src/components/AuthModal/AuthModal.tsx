import useAuthModal from "../../store/authModalStore"
import Modal from 'react-modal'
import { useForm, SubmitHandler } from "react-hook-form"
import styled from "styled-components"

type Inputs = {
    example: string
    exampleRequired: string
  }

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border: 2px solid #FF685B;
    background-color: #FFFFFF;
    width: 100%;
    height: 40px;
    border-radius: 7px;
    margin-bottom: 10px;

`


const AuthModal = () =>{
    const isOpen = useAuthModal((state) => state.isOpen)
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
      
    return(
        <Modal className='auth-modal' isOpen={isOpen}>
           <Form onSubmit={handleSubmit(onSubmit)}>
    
      <Input placeholder="Введите логин " {...register("example" , { required: true })} />
      <Input placeholder="Введите пароль " type="password"{...register("exampleRequired", { required: true, minLength: 8 })} />
    
      {errors.exampleRequired && <span>Ошибка</span>}

      <input type="submit" />
    </Form>
            
        </Modal>
    )
}

export default AuthModal