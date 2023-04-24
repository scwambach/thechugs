import { DynamicIcon } from './DynamicIcon'

const SocialSelector = ({ name, color }: { name: string; color?: string }) => {
  return (
    <>
      {name.indexOf('instagram') !== -1 ? (
        <DynamicIcon color={color} size={20} name="SiInstagram" />
      ) : name.indexOf('facebook') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiFacebook" />
      ) : name.indexOf('twitter') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiTwitter" />
      ) : name.indexOf('youtube') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiYoutube" />
      ) : name.indexOf('bandCamp') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiBandCamp" />
      ) : name.indexOf('spotify') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiSpotify" />
      ) : name.indexOf('soundcloud') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiSoundcloud" />
      ) : name.indexOf('apple') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiApplemusic" />
      ) : name.indexOf('reverbnation') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiReverbnation" />
      ) : name.indexOf('bandcamp') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiBandcamp" />
      ) : name.indexOf('patreon') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiPatreon" />
      ) : name.indexOf('tiktok') !== -1 ? (
        <DynamicIcon color={color} size={30} name="SiTiktok" />
      ) : (
        <DynamicIcon color={color} size={30} name="website" />
      )}
      <span className="sr-only">{name}</span>
    </>
  )
}

export { SocialSelector }
