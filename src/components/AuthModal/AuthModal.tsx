import useAuthModal from "../../store/authModalStore"
import Modal from 'react-modal'

const AuthModal = () =>{
    const isOpen = useAuthModal((state) => state.isOpen)
    return(
        <Modal isOpen={isOpen}>sfvkmj</Modal>
    )
}

export default AuthModal