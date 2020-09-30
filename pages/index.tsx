import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AxiosResponse } from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';

import ReactGA from 'react-ga';

import userInformation from '../configs/user_infomation'
import api from '../services/api';

import { RepoData } from '../interfaces';

import iconsMap from '../utils/icons_map';
import StackButton from '../components/stackButton';

const LandingPage = () => {
  const [ userRepos, setUserRepos ] = useState([]);

  useEffect(() => {
    api.get(`users/${userInformation.github.user}/repos`).then((response: AxiosResponse) => {
      setUserRepos(response.data)
    });
    
    window.addEventListener('scroll', handleScrollListen);

    ReactGA.initialize(userInformation.analyticsID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  function handleScrollListen () {
    const toTopButton = document.getElementById("to-top-button") as HTMLElement;

    if(window.scrollY >= 500){
      !toTopButton.classList.contains('active') && toTopButton.classList.add('active');
    }else{
      toTopButton.classList.contains('active') && toTopButton.classList.remove('active');
    }
  }

  return (
    <div className="app-container">
      <Head>
        <title>{ userInformation.info.name } - Portfólio</title>
        <link rel="shortcut icon" href="/assets/imgs/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/assets/imgs/favicon.png" type="image/x-icon" />
      </Head>

      <nav id="top" className="main-navigator">
        <img src="/assets/imgs/portfy-logo.svg" alt="Portfy" className="portfy-logo"/>

        <ul className="nav-list d-only">
          <li className="nav-element">
            <Link
              to="top"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Inicio
              <span className="line"></span>
            </Link>
          </li>
          <li className="nav-element">
            <Link
              to="stacks"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experiências
              <span className="line"></span>
            </Link>
          </li>
          <li className="nav-element">
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projetos
              <span className="line"></span>
            </Link>
          </li>
          <li className="nav-element">
            <a href={ userInformation.info.curriculum } target="_blank">
              <StackButton className="resume-button">
                <img src="/assets/icons/doc-icon.svg" alt="Document Icon"/>
                <p>VER RESUMO</p>
              </StackButton>
            </a>
          </li>
        </ul>
      </nav>

      <header className="bio-container">
        <div className="user-avatar">
          <div className="avatar-stroke d-only"></div>
          <img src={ userInformation.info.avatar } alt={ userInformation.info.name }/>
        </div>
        
        <div className="user-information">
          <h1>{ userInformation.info.name }</h1>
          <h3>{ userInformation.info.role }</h3>

          <p className="user-resume m-only">
            { userInformation.info.bio }
          </p>

          <p className="user-resume d-only">
            { userInformation.info.short_bio }
          </p>

          <ul className="social-buttons d-only">
            <li className="github">
              <a href={userInformation.github.url} target="_blank">
                <img src="/assets/icons/github-icon.svg" alt="Github"/>
              </a>
            </li>

            <li className="linkedin">
              <a href={userInformation.social.linkedin} target="_blank">
                <img src="/assets/icons/linkedin-icon.svg" alt="Linkedin"/>
              </a>
            </li>

            <li className="fb">
              <a href={userInformation.social.fb} target="_blank">
                <img src="/assets/icons/fb-icon.svg" alt="Facebook"/>
              </a>
            </li>

            <li className="insta">
              <a href={userInformation.social.insta} target="_blank">
                <img src="/assets/icons/insta-icon.svg" alt="Instagram"/>
              </a>
            </li>

            <li className="email">
              <a href={`mailto:${userInformation.social.email}`}>
                <img src="/assets/icons/mail-icon.svg" alt="E-mail"/>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section id="stacks" className="group-element stacks">
          <div className="stacks-wave bg-wave d-only"></div>

          <div className="content">
            <h1 className="group-title">Experiências</h1>
            <span className="line-separator d-only"></span>

            <p className="group-description m-only">Ferramentas já utilizadas</p>

            <div className="group-inline">
              <img className="d-only" src="/assets/icons/stacks-icon.svg" alt="Stacks"/>

              <section className="group-content">
                <p className="section-description d-only">Confira algumas das ferramentas que tenho experiência ao longo desses anos como desenvolvedor fullstack.</p>

                <ul className="tools-list">
                  {
                    userInformation.stacks.map((stack: string, index: number) => (
                      <StackButton key={index} className="tool-element">
                        <img src={ iconsMap[stack].icon } alt={ iconsMap[stack].name }/>
                        <p>{ iconsMap[stack].name }</p>
                      </StackButton>
                    ))
                  }
                </ul>
                <p className="tools-end">e muitas outras</p>
              </section>
            </div>
          </div>
        </section>

        <section id="projects" className="group-element projects">
          <div className="project-wave bg-wave d-only"></div>

          <div className="content">
            <h1 className="group-title">Projetos recentes</h1>
            <span className="line-separator d-only"></span>

            <p className="group-description m-only">Repositórios no Github</p>

            <div className="group-inline">
              <section className="group-content">
              <p className="section-description d-only">Veja alguns de meus projetos colaborativos e pessoais recentemente postados no Github.</p>

                <ul className="repo-list x-scroll">
                  {
                    userRepos.length ? userRepos.map((repo: RepoData) => (
                      <li key={repo.id} className="repo-element">
                        <a href={repo.svn_url} target="_blank">
                          <div className="repo-title">
                            <h1>{ repo.name }</h1>
                            <h3>{ repo.full_name }</h3>
                            <p className="d-only">{ repo.description }</p>
                          </div>

                          <img src={ iconsMap[repo.language ? repo.language.toLowerCase() : 'none'].icon} alt={ repo.language } className="repo-language"/>
                        </a>
                      </li>
                    )) : (
                      <>
                      <li className="repo-element loading"></li>
                      <li className="repo-element loading"></li>
                      <li className="repo-element loading"></li>
                      <li className="repo-element loading"></li>
                      <li className="repo-element loading"></li>
                      <li className="repo-element loading"></li>
                      <li className="repo-element loading"></li>
                      </>
                    )
                  }
                </ul>
              </section>
            </div>
          </div>
        </section>

        <section className="group-element m-only">
          <h1 className="group-title">Entre em contato</h1>
          <p className="group-description">Onde me encontrar</p>

          <section className="group-content">
            <div className="social-buttons">
              <button className="linkedin">
                <a target="_blank" href={ userInformation.social.linkedin }>
                  <img src="/assets/icons/linkedin-icon.svg" alt="Linkedin"/>
                  <p>Contatar via Linkedin</p>
                </a>
              </button>

              <button className="fb">
                <a target="_blank" href={ userInformation.social.fb }>
                  <img src="/assets/icons/fb-icon.svg" alt="Facebook"/>
                  <p>Contatar via Facebook</p>
                </a>
              </button>

              <button className="insta">
                <a target="_blank" href={ userInformation.social.insta }>
                  <img src="/assets/icons/insta-icon.svg" alt="Instagram"/>
                  <p>Contatar via Instagram</p>
                </a>
              </button>

              <button className="email">
                <a href={`mailto:${userInformation.social.email}`}>
                  <img src="/assets/icons/mail-icon.svg" alt="E-mail"/>
                  <p>Contatar via E-mail</p>
                </a>
              </button>
            </div>
          </section>
        </section>
      </main>
      <footer>
        <div className="line-separator d-only"></div>

        <div className="project-info d-only">
          <div className="texts">
            <h1>Gostou da proposta deste projeto? Veja-o no Github!</h1>
            <p>
              <strong>Portfy</strong> é um projeto totalmente <strong>open-source</strong> e de uso livre. 
              Você pode usá-lo para criar o seu portfólio sem quaisquer dificuldades!
            </p>
          </div>

          <StackButton className="github-button">
            <a href="https://github.com/eljonathas/portfy" target="_blank">
              <img src="/assets/icons/github-icon.svg" alt="Github"/>
              <p>Ir para o Github</p>
            </a>
          </StackButton>
        </div>

        <a href="https://github.com/eljonathas/portfy" target="_blank" className="m-only">
          <p>Veja este projeto no Github</p>
          <img src="/assets/icons/arrow-icon.svg" alt="Arrow"/>
        </a>
      </footer>

      <div id="to-top-button" className="d-only" onClick={() => scroll.scrollToTop()}>
        <img src="/assets/icons/arrow-up-icon.svg" alt="To top"/>
      </div>
    </div>
  )
}

export default LandingPage
