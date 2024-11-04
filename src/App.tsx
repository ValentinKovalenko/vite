import styles from './App.module.scss';
import Footer from './components/Footer';
import Main from './blocks/Main';
import Header from "./components/Header";
import AboutUs from "./blocks/AboutUs/AboutUs.tsx";
import DirectionsWork from "./blocks/DirectionsWork";
import Education from "./blocks/Education";
import Travel from "./blocks/Travel";
import Team from "./blocks/Team";
import Reviews from "./blocks/Reviews";
import {useModal} from "./context/ModalContext.tsx";
import GiraffeModal from "./components/GiraffeModal";

function App() {
    const { isModalOpen, closeModal } = useModal()
    return (
        <>
            <div className={styles.block}>
                <Header/>
                <Main/>
                <AboutUs/>
                <DirectionsWork/>
                <Education/>
                <Travel/>
                <Team/>
                <Reviews/>
            </div>
            <Footer/>
            {isModalOpen && <GiraffeModal onClose={closeModal} />}
        </>
    )
}

export default App
