import { IconsMap } from '../interfaces';

const iconsMap: IconsMap = {
    typescript: {
        icon: '/assets/icons/ts-icon.svg',
        name: 'Typescript'
    },
    javascript: {
        icon: '/assets/icons/js-icon.svg',
        name: 'Javascript'
    },
    reactjs: {
        icon: '/assets/icons/react-icon.svg',
        name: 'ReactJS'
    },
    react_native: {
        icon: '/assets/icons/react-icon.svg',
        name: 'React Native'
    },
    nodejs: {
        icon: '/assets/icons/node-icon.svg',
        name: 'NodeJS'
    },
    nextjs: {
        icon: '/assets/icons/next-icon.svg',
        name: 'Next.js'
    },
    socketio: {
        icon: '/assets/icons/socketio-icon.svg',
        name: 'Socket.io'
    },
    mongodb: {
        icon: '/assets/icons/mongodb-icon.svg',
        name: 'Mongodb'
    },
    css: {
        icon: '/assets/icons/css-icon.svg',
        name: 'CSS'
    },

    /**
     * this object is @necessary to adjust undefined repository's type
     * please, do not remove
     */
    none: {
        icon: '',
        name: 'None'
    }
}

export default iconsMap