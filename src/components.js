import './components.css';

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
            <div className={'Main__uploader someBlock'}>
                тут будет загрузка фото4ек
            </div>
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