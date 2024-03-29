import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useModal } from "../contexts/ModalContext";
function SideNav() {
  const { dispatch } = useModal();
  const openModal = (modalType) => {
    dispatch({type: 'OPEN_MODAL',payload: {modalType}})
  }
  return (
    <div className="hidden sm:flex bg-gray-900 text-white h-full min-h-screen z-10 py-10">
      <div className="p-5">
        <h1 className="font-bold py-2 text-3xl text-center">MANGA MENTOR</h1>
        <p>
          Welcome to the world of manga mastery! Let's learn the art of manga
          from the expert.
        </p>

        <div className="p-5">
          <p className="text-xl">Author: Aaron</p>
          <p>Contact me:</p>
          <a
            href="https://github.com/princeborn1999"
            target="_blank"
            className="flex"
          >
            Visit My Github Profile
            <FaGithubAlt className="text-2xl pl-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-prince-4b9475230/"
            target="_blank"
            className="flex"
          >
            Visit My LinkedIn Profile
            <FaLinkedin className="text-2xl pl-2" />
          </a>
        </div>
        <div className="py-5 px-5">
          {/* <p className="hover:bg-white hover:text-black my-2 p-2 border border-white"
            onClick={() => openModal('DevelopLog')}>
            Develop Log
          </p> */}
          <p className="hover:bg-white hover:text-black my-2 p-2 border border-white"
            onClick={() => openModal('AuthorInfo')}>
            Author Info
          </p>
          <a href="https://www.pixiv.net/users/52776176" target="_blank">
            <p className="hover:bg-white hover:text-black my-2 p-2 border border-white">
              My Work
            </p>
          </a>
          <p className="hover:bg-white hover:text-black my-2 p-2 border border-white"
            onClick={() => openModal('QA')}>
            Questions
          </p>
        </div>
        <footer className="text-sm text-center">
          <p>Last release: 2024.01.30</p>
          <p>Copyright © 2023 AaronPrince.</p>
          <p>All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
export default SideNav;
