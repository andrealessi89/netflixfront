import React, { useState }from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);
    const [setaEsquerda, setSetaEsquerda] = useState(false);
    const [setaDireita, setSetaDireita] = useState(true);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
            setSetaEsquerda(false);
            setSetaDireita(true);
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {

        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
            setSetaDireita(false);
            setSetaEsquerda(true)
        }

        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            

            <div className={setaEsquerda === false ? "someseta movieRow--left" : "movieRow--left"} onClick={handleLeftArrow} >
                <NavigateBeforeIcon style={{ fontSize: 100 }} />
            </div>
                
            <div className={setaDireita === false ? "someseta movieRow--right" : "movieRow--right"} onClick={handleRightArrow} >
                <NavigateNextIcon style={{ fontSize: 100 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results?.length * 150
                }}>
                    {items.results?.length > 0 && items.results.map((item, key) => (

                        <div className="movieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MovieRow