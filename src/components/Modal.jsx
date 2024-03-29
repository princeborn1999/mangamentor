import { useState, useEffect } from "react"
import { useModal } from "../contexts/ModalContext"
import pixel3 from '../assets/author/pixel3.png'

function Modal(){
    const [ question, setQuestion] = useState()
    const { state, dispatch } = useModal();
    const closeModal = () =>{
        dispatch({type: 'CLOSE_MODAL'});
    }
    const DevelopLog = () => {
        return(
            <div className="z-50 flex w-1/3 h-2/3 fixed p-5 bg-slate-900 text-white shadow-lg">
                <div>
                    <h2>Develop Log</h2>
                    <div className="p-5 border-2 border-white"> 
                        Comparisons ver1.0.0
                    </div>
                    <button className="border-white border-2 text-white px-2" onClick={closeModal}>X</button>
                </div>
            </div>
        )
    }   
    const AuthorInfo = () => {
        return(
            <div className="z-50 flex w-1/2 fixed p-5 bg-slate-900 text-white shadow-lg">
                <div>
                    <div className="flex justify-center">
                        <h2 className="text-lg font-bold">AUTHOR INFO</h2>
                    </div>
                    <div className="p-5 flex"> 
                        <img className="w-1/2" src={pixel3} alt="" />
                        <p className="p-2 font-semibold">
                            Hi there! I'm AaronPrince,<br/> 
                            a software engineer working at Systex.<br/> 
                            With a keen interest and in-depth knowledge of manga,<br/>
                            This website is a collection of works by famous artists. <br/>
                            It aims to highlight the distinct expression styles of different artists. <br />
                            Additionally, there are a few points that might assist you in creating your own manga.<br/>
                            I hope this website can be a valuable resource for you.<br/>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="border-white border-2 text-white px-2" onClick={closeModal}>X</button>
                    </div>
                </div>
            </div>
        )
    }
    const QA = () => {
        return(
            <div className="z-50 flex w-1/3 h-2/3 fixed p-5 bg-slate-900 text-white shadow-lg">
                <div className="w-full">
                    <div className="flex justify-center text-lg font-bold">
                        <h2>Questions</h2>
                    </div>
                    <div className="p-2"> 
                        <p className="hover:bg-white hover:text-black my-2 p-2 border border-white"
                            onClick={() => setQuestion('QA1')}>
                            How does this website help beginners to draw manga?
                        </p>
                        { question === 'QA1' && `uhm... actualy, there's many features would
                            be developed in the future. To be honest, I can't sure what kind of
                            function would be created. But some basic functions are coming soon,
                            like to analysis how's your artwork. 
                        ` }
                        <p className="hover:bg-white hover:text-black my-2 p-2 border border-white"
                            onClick={() => setQuestion('QA2')}>
                            What tools and software do you use for your manga artwork?
                        </p>
                        { question === 'QA2' && `I used SAI and other common painting softwares before for
                                        few weeks, But personnally I would say
                                        the most wonderful tool is clip stuido paint!` }

                        <p className="hover:bg-white hover:text-black my-2 p-2 border border-white"
                            onClick={() => setQuestion('QA3')}>
                            What inspires your manga drawings? 
                        </p>
                        { question === 'QA3' && `I've saw many manga artworks and I was attracted by the
                                        kengan ashura, I love how daromeon san draw the muscle` }

                        <p className="hover:bg-white hover:text-black my-2 p-2 border border-white"
                            onClick={() => setQuestion('QA4')}>
                            What advice would you give to beginners starting with manga drawing?
                        </p>
                        { question === 'QA4' && `Just do it, don't care about the correct way of drawing.
                                        There's no one could say how manga should be created in the world,
                                        so just do it immediately.` }

                    </div>
                    <div class='flex justify-center'>
                        <button className="border-white border-2 text-white px-2" onClick={closeModal}>X</button>
                    </div>
                </div>
            </div>
        )
    }
    const Feedback = () =>{
        return(
            <div className="z-50 flex w-1/3 h-2/3 fixed p-5 bg-slate-900 text-white shadow-lg">
                <div className="justify-center">
                    <h2>Please don't hesitate to share your thoughts with me.</h2>
                    <div>
                    <textarea name="thoughts" id="" cols="30" rows="10" 
                              className="text-pink-500 caret-pink-500 resize-none p-5">
                    </textarea>
                    </div>
                    <button>Submit</button>
                    <button className="border-white border-2 text-white px-2" onClick={closeModal}>X</button>
                </div>
            </div>
        )
    }
    if(!state.modalType) return null
    return(
        <div className="fixed w-full h-full z-30 flex justify-center items-center">
            {
                state.modalType ==='DevelopLog' && <DevelopLog /> ||
                state.modalType === 'AuthorInfo' && <AuthorInfo /> ||
                state.modalType === 'QA' && <QA /> ||
                state.modalType === 'Feedback' && <Feedback /> 
            }
            <div className="w-full h-full bg-black opacity-50"> </div>
        </div>
    )
}
export default Modal