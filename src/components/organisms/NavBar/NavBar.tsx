import styles from './NavBar.module.scss';

const NavBar: React.FunctionComponent = () => {
    return (
        <div className="w-screen h-16 flex justify-center items-center bg-green-700">
            <span className="text-white text-3xl">TimeTrack</span>
        </div>
    );
}

export default NavBar;
