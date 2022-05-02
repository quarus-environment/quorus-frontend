import './components.css';
import {useState} from "react";

export const Header = () => {
    return(
        <div className={'header wrapper'}>
            <p>Quorus</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export const Main = () => {
    return(
        <div className={'Main wrapper'}>
            <div className={'Main__disription'}>
                <div className={'Main__discr__item1'}>
                    <b>Tool that will catch your mouse meow</b>
                </div>
                <div className={'Main__discr__item2'}>Just uploud your picture and see the result</div>
                <button className={'Main__discr__item3'}>How it works?</button>


            </div>
            <ImageUploader />
        </div>

    )
}

export const HowItWorks = () => {
    return(
        <div className={'HowItWorks wrapper Main'}>
            <div className={''}>
                <ul className={'algos'}>
                    <p>How it works?</p>
                    <li>Just drag your image into the file uploader section</li>
                    <li>Enjoy</li>
                </ul>

            </div>
            <div className={'someBlock'}>Видео</div>

        </div>
    )
}

export const ImageUploader = () => {

        const [drag, setDrag] = useState(false)

        function dragStartHandler (e) {
            e.preventDefault()
            setDrag(true)
        }

        function dragLeaveHandler (e) {
            e.preventDefault()
            setDrag(false)
        }

        function onDropHandler(e) {
            e.preventDefault()
            let files = [...e.dataTransfer.files]
            console.log(files)
        }


        return(


            <div className={'imageUploade'}>
                <div></div>
                {drag?
                    <div className={'dropArea'}
                         onDragStart={e=>dragStartHandler(e)}
                         onDragLeave={e=>dragLeaveHandler(e)}
                         onDragOver={e=>dragStartHandler(e)}
                         onDrop={e=>onDropHandler(e)}
                    >Drop files</div>
                    : <div
                        onDragStart={e=>dragStartHandler(e)}
                        onDragLeave={e=>dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}>

                        Drag files to load them</div>
                }
            </div>

    )
}