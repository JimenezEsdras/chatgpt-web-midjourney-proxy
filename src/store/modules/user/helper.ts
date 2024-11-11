import { ss } from '@/utils/storage'
import { t } from '@/locales'
import { homeStore } from "@/store";
const LOCAL_NAME = 'userStorage'
const backgroundImage = homeStore.myData.session.backgroundImage ?? "https://t.alcy.cc/fj/"

export interface UserInfo {
  avatar: string
  name: string
  backgroundImage: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      //avatar: 'https://raw.githubusercontent.com/Dooy/chatgpt-web-midjourney-proxy/main/src/assets/avatar.jpg',
      avatar: 'https://raw.githubusercontent.com/JimenezEsdras/mjchat-rui/main/src/assets/rui.jpg',
      name:  t('mjset.sysname'),//'AI绘图',
      //description: 'Star on <a href="https://github.com/Dooy/chatgpt-web-midjourney-proxy" class="text-blue-500" target="_blank" >GitHub</a>',
      description: '音乐创作',
      backgroundImage:'https://musiclab-0635.s3.bitiful.net/2014120615262212179.png'
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
