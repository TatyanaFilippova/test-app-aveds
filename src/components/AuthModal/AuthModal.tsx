import useAuthModal from "../../store/authModalStore"
import Modal from 'react-modal'
import { useForm, SubmitHandler } from "react-hook-form"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import useUserStore from "../../store/authStore"

type Inputs = {
    login: string
    password: string
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

interface User {
    id: string, 
    login: string
    password: string
    name: string
}


const AuthModal = () =>{
    const isOpen = useAuthModal((state) => state.isOpen)
    const closeModal = useAuthModal((state) => state.closeModal)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm<Inputs>()

      const login = useUserStore(state => state.login)

      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const result = await fetch("/api/users.json")

        const users: User[] = await result.json()

        const currentUser = users.find(item => {
            if (item.login === data.login) {
                if (item.password === data.password) {
                    return true
                }
            }
            return false
        })

        if (!currentUser) {
            alert("Неверный логин или пароль")
        } else {
            login(currentUser)
            closeModal()
            navigate('/profile')
        }
      }
    
      
    return(
        <Modal className='auth-modal' isOpen={isOpen} onRequestClose={closeModal}>
           <Form onSubmit={handleSubmit(onSubmit)}>
    
      <Input placeholder="Введите логин " {...register("login" , { required: true })} />
      <Input placeholder="Введите пароль " type="password"{...register("password", { required: true, minLength: 8 })} />
    
      {errors.login && <span>Ошибка Логина</span>}
      {errors.password && <span>Ошибка Пароля</span>}

      <input type="submit" />
    </Form>
            
        </Modal>
    )
}

export default AuthModal