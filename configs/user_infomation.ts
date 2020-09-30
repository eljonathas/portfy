import { UserInfo } from '../interfaces';

/**
 * In this area, you can define your personal settings, like Github, stacks and more informations
 * 
 * check the @UserInfo interface for more details about this settings
 */

const UserInformation: UserInfo = {
    github: {
        user: 'eljonathas',
        url: 'https://github.com/eljonathas',
    },
    info: {
        name: 'Jonathas Andrade',
        role: 'Fullstack Developer',
        bio: 'Estudante de Ciência da Computação na Universidade Federal do Estado do Pará e amante de tecnologia. Sou desenvolvedor Fullstack com habilidades em UI Design, amante de Javascript e atualmente estou explorando as maravilhas da linguagem Python voltado ao aprendizado de máquina. Trabalhei como programador em diversos projetos pessoais e colaborativos, empenhando todas as minhas skills profissionais para agregar de maneira significativa nesses projetos.',
        short_bio: 'Estudante de Ciência da Computação na Universidade Federal do Estado do Pará e amante de tecnologia. Sou desenvolvedor Fullstack com habilidades em UI Design, amante de Javascript e atualmente explorando as maravilhas da linguagem Python voltado ao aprendizado de máquina.',
        avatar: 'https://avatars0.githubusercontent.com/u/7339257?s=460&u=13b033b5ba57239729ab73f4d2f516d3a2e9dcca&v=4',
        // here stay your resume url
        curriculum: "https://drive.google.com/file/d/1RA4S4adELbDcdOTHvuyrCXRewAjAbh0b/"
    },
    stacks: [
        'typescript', 
        'javascript',
        'reactjs', 
        'react_native', 
        'nextjs',
        'nodejs',
        'mongodb',
        'socketio',
        'mysql',
        'php'
    ],
    social: {
        fb: 'https://www.facebook.com/thmrss/',
        insta: 'https://www.instagram.com/andrade.exe/',
        linkedin: 'https://www.linkedin.com/in/eljonathas',
        email: 'Jonathas.andrade5@gmail.com'
    }
}

export default UserInformation