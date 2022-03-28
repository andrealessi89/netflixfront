import React, { useEffect, useState } from "react";
import { Tmdb, GetMovieInfo } from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null)
  const [blackHeader, setBlackheader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await GetMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo);

      setfeaturedData(chosenInfo);
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () =>{
      if(window.scrollY > 150){
        setBlackheader(true)
      }else{
        setBlackheader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scoll', scrollListener)
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))
        }
      </section>


{movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
      </div>
      }
    </div>

  )
}


export default App