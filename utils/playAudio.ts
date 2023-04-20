export const playAudio = (element: string, sound: string) => {
  const playThis = document.querySelectorAll(element)
  playThis.forEach((el) => {
    el.addEventListener('click', () => {
      const audio = new Audio(`/${sound}.mp3`)
      audio.play()
    })
  })
}
