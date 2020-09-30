/**
 * All project interfaces are here
 * 
 * You can add more informations for the project types
 */

export type UserInfo = {
  github: {
    user: string
    url: string
  }
  info: {
    role: string
    bio: string
    short_bio: string
    name: string
    avatar: string
    curriculum: string
  }
  stacks: string[]
  social: {
    fb: string
    insta: string
    linkedin: string
    email: string
  }
  analyticsID: string
}

export type IconsMap = {
  [key: string]: {
    icon: string
    name: string
  }
}

export type RepoData = {
  id: number
  name: string
  full_name: string
  language: string
  svn_url: string
  description: string
}